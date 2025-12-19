'use client';

import { useState, useEffect, useCallback } from 'react';
import { realtimeDb, isRealtimeDbAvailable } from '@/lib/firebase';
import { ref, set, get, update, onValue, onDisconnect, serverTimestamp, remove } from 'firebase/database';
import { getRandomVerse, MemoryVerse, VerseTranslations } from '@/data/memory-verses';

export interface Player {
  id: string;
  name: string;
  isReady: boolean;
  score: number;
  bestTranslation?: string;
  answer?: string;
  finishedAt?: number;
  joinedAt: number;
}

export interface GameVerse {
  id: string;
  reference: string;
  translations: VerseTranslations;
  context: {
    before?: {
      reference: string;
      text: string;
    };
    after?: {
      reference: string;
      text: string;
    };
  };
}

export interface RoomState {
  code: string;
  status: 'waiting' | 'countdown' | 'playing' | 'results';
  players: Record<string, Player>;
  verse?: GameVerse;
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
  submitAnswer: (answer: string, score: number, bestTranslation: string) => Promise<void>;
  startGame: () => Promise<void>;
  endGame: () => Promise<void>;
  leaveRoom: () => Promise<void>;
}

// Generate a unique player ID
function generatePlayerId(): string {
  return `player_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}


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

  const submitAnswer = useCallback(async (answer: string, score: number, bestTranslation: string): Promise<void> => {
    if (!currentRoomCode || !playerId || !realtimeDb) return;

    try {
      const playerRef = ref(realtimeDb, `rooms/${currentRoomCode}/players/${playerId}`);
      await update(playerRef, {
        answer,
        score,
        bestTranslation,
        finishedAt: Date.now(),
      });
    } catch (err) {
      console.error('Failed to submit answer:', err);
    }
  }, [currentRoomCode, playerId]);

  const startGame = useCallback(async (): Promise<void> => {
    if (!currentRoomCode || !realtimeDb || !isHost) return;

    try {
      // Pick a random verse from our database
      const memoryVerse = getRandomVerse();

      // Convert to GameVerse format for Firebase
      const verse: GameVerse = {
        id: memoryVerse.id,
        reference: memoryVerse.reference,
        translations: memoryVerse.translations,
        context: memoryVerse.context,
      };

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
    submitAnswer,
    startGame,
    endGame,
    leaveRoom,
  };
}
