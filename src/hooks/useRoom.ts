'use client';

import { useState, useEffect, useCallback } from 'react';
import { realtimeDb, isRealtimeDbAvailable } from '@/lib/firebase';
import { ref, set, get, update, onValue, onDisconnect, serverTimestamp, remove } from 'firebase/database';

export interface Player {
  id: string;
  name: string;
  isReady: boolean;
  score: number;
  progress: number;
  joinedAt: number;
}

export interface RoomState {
  code: string;
  status: 'waiting' | 'countdown' | 'playing' | 'results';
  players: Record<string, Player>;
  verse?: {
    reference: string;
    fullText: string;
    translation: string;
  };
  gameStartedAt?: number;
  createdAt: number;
  hostId: string;
}

interface UseRoomReturn {
  room: RoomState | null;
  playerId: string | null;
  isHost: boolean;
  isConnected: boolean;
  error: string | null;
  joinRoom: (roomCode: string, playerName: string) => Promise<boolean>;
  createRoom: (roomCode: string, playerName: string) => Promise<boolean>;
  setReady: (ready: boolean) => Promise<void>;
  updateScore: (score: number, progress: number) => Promise<void>;
  startGame: () => Promise<void>;
  endGame: () => Promise<void>;
  leaveRoom: () => Promise<void>;
}

// Generate a unique player ID
function generatePlayerId(): string {
  return `player_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Sample verses for the game
const VERSES = [
  {
    reference: 'John 3:16',
    fullText: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
    translation: 'ESV',
  },
  {
    reference: 'Philippians 4:13',
    fullText: 'I can do all things through him who strengthens me.',
    translation: 'ESV',
  },
  {
    reference: 'Romans 8:28',
    fullText: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
    translation: 'ESV',
  },
  {
    reference: 'Jeremiah 29:11',
    fullText: 'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.',
    translation: 'ESV',
  },
  {
    reference: 'Psalm 23:1',
    fullText: 'The Lord is my shepherd; I shall not want.',
    translation: 'ESV',
  },
];

export function useRoom(): UseRoomReturn {
  const [room, setRoom] = useState<RoomState | null>(null);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentRoomCode, setCurrentRoomCode] = useState<string | null>(null);

  const isHost = room?.hostId === playerId;

  // Subscribe to room updates
  useEffect(() => {
    if (!currentRoomCode || !realtimeDb) return;

    const roomRef = ref(realtimeDb, `rooms/${currentRoomCode}`);

    const unsubscribe = onValue(roomRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setRoom(data);
        setIsConnected(true);
      } else {
        setRoom(null);
        setIsConnected(false);
      }
    }, (err) => {
      console.error('Room subscription error:', err);
      setError('Failed to connect to room');
      setIsConnected(false);
    });

    return () => unsubscribe();
  }, [currentRoomCode]);

  // Set up presence system
  useEffect(() => {
    if (!currentRoomCode || !playerId || !realtimeDb) return;

    const playerRef = ref(realtimeDb, `rooms/${currentRoomCode}/players/${playerId}`);
    const disconnectRef = onDisconnect(playerRef);

    // Remove player on disconnect
    disconnectRef.remove();

    return () => {
      disconnectRef.cancel();
    };
  }, [currentRoomCode, playerId]);

  const createRoom = useCallback(async (roomCode: string, playerName: string): Promise<boolean> => {
    if (!isRealtimeDbAvailable() || !realtimeDb) {
      setError('Realtime Database not available');
      return false;
    }

    try {
      const newPlayerId = generatePlayerId();
      const roomRef = ref(realtimeDb, `rooms/${roomCode}`);

      // Check if room already exists
      const snapshot = await get(roomRef);
      if (snapshot.exists()) {
        setError('Room already exists');
        return false;
      }

      // Create new room
      const newRoom: RoomState = {
        code: roomCode,
        status: 'waiting',
        players: {
          [newPlayerId]: {
            id: newPlayerId,
            name: playerName,
            isReady: false,
            score: 0,
            progress: 0,
            joinedAt: Date.now(),
          },
        },
        createdAt: Date.now(),
        hostId: newPlayerId,
      };

      await set(roomRef, newRoom);

      setPlayerId(newPlayerId);
      setCurrentRoomCode(roomCode);
      setError(null);

      return true;
    } catch (err) {
      console.error('Failed to create room:', err);
      setError('Failed to create room');
      return false;
    }
  }, []);

  const joinRoom = useCallback(async (roomCode: string, playerName: string): Promise<boolean> => {
    if (!isRealtimeDbAvailable() || !realtimeDb) {
      setError('Realtime Database not available');
      return false;
    }

    try {
      const newPlayerId = generatePlayerId();
      const roomRef = ref(realtimeDb, `rooms/${roomCode}`);

      // Check if room exists
      const snapshot = await get(roomRef);
      if (!snapshot.exists()) {
        setError('Room not found');
        return false;
      }

      const roomData = snapshot.val() as RoomState;

      // Check if game already started
      if (roomData.status !== 'waiting') {
        setError('Game already in progress');
        return false;
      }

      // Check player limit (2 players max)
      const playerCount = Object.keys(roomData.players || {}).length;
      if (playerCount >= 2) {
        setError('Room is full');
        return false;
      }

      // Add player to room
      const playerRef = ref(realtimeDb, `rooms/${roomCode}/players/${newPlayerId}`);
      await set(playerRef, {
        id: newPlayerId,
        name: playerName,
        isReady: false,
        score: 0,
        progress: 0,
        joinedAt: Date.now(),
      });

      setPlayerId(newPlayerId);
      setCurrentRoomCode(roomCode);
      setError(null);

      return true;
    } catch (err) {
      console.error('Failed to join room:', err);
      setError('Failed to join room');
      return false;
    }
  }, []);

  const setReady = useCallback(async (ready: boolean): Promise<void> => {
    if (!currentRoomCode || !playerId || !realtimeDb) return;

    try {
      const playerRef = ref(realtimeDb, `rooms/${currentRoomCode}/players/${playerId}`);
      await update(playerRef, { isReady: ready });
    } catch (err) {
      console.error('Failed to update ready state:', err);
    }
  }, [currentRoomCode, playerId]);

  const updateScore = useCallback(async (score: number, progress: number): Promise<void> => {
    if (!currentRoomCode || !playerId || !realtimeDb) return;

    try {
      const playerRef = ref(realtimeDb, `rooms/${currentRoomCode}/players/${playerId}`);
      await update(playerRef, { score, progress });
    } catch (err) {
      console.error('Failed to update score:', err);
    }
  }, [currentRoomCode, playerId]);

  const startGame = useCallback(async (): Promise<void> => {
    if (!currentRoomCode || !realtimeDb || !isHost) return;

    try {
      // Pick a random verse
      const verse = VERSES[Math.floor(Math.random() * VERSES.length)];

      const roomRef = ref(realtimeDb, `rooms/${currentRoomCode}`);
      await update(roomRef, {
        status: 'countdown',
        verse,
        gameStartedAt: Date.now(),
      });

      // Transition to playing after countdown
      setTimeout(async () => {
        await update(roomRef, { status: 'playing' });
      }, 3000);
    } catch (err) {
      console.error('Failed to start game:', err);
    }
  }, [currentRoomCode, isHost]);

  const endGame = useCallback(async (): Promise<void> => {
    if (!currentRoomCode || !realtimeDb) return;

    try {
      const roomRef = ref(realtimeDb, `rooms/${currentRoomCode}`);
      await update(roomRef, { status: 'results' });
    } catch (err) {
      console.error('Failed to end game:', err);
    }
  }, [currentRoomCode]);

  const leaveRoom = useCallback(async (): Promise<void> => {
    if (!currentRoomCode || !playerId || !realtimeDb) return;

    try {
      const playerRef = ref(realtimeDb, `rooms/${currentRoomCode}/players/${playerId}`);
      await remove(playerRef);

      // If host leaves, delete the room
      if (isHost) {
        const roomRef = ref(realtimeDb, `rooms/${currentRoomCode}`);
        await remove(roomRef);
      }

      setRoom(null);
      setPlayerId(null);
      setCurrentRoomCode(null);
    } catch (err) {
      console.error('Failed to leave room:', err);
    }
  }, [currentRoomCode, playerId, isHost]);

  return {
    room,
    playerId,
    isHost,
    isConnected,
    error,
    joinRoom,
    createRoom,
    setReady,
    updateScore,
    startGame,
    endGame,
    leaveRoom,
  };
}
