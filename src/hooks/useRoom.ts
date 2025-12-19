'use client';

import { useState, useEffect, useCallback } from 'react';
import { realtimeDb, isRealtimeDbAvailable } from '@/lib/firebase';
import { ref, set, get, update, onValue, onDisconnect, remove } from 'firebase/database';
import { getRandomVerse, MemoryVerse, VerseTranslations, MEMORY_VERSES } from '@/data/memory-verses';

export interface Player {
  id: string;
  name: string;
  isReady: boolean;
  totalScore: number;
  currentRoundScore?: number;
  currentRoundAnswer?: string;
  currentRoundTranslation?: string;
  currentRoundFinishedAt?: number;
  roundScores?: number[];
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

export interface RoundResult {
  visibleVerse: string;
  players: Record<string, {
    answer: string;
    score: number;
    translation: string;
  }>;
}

export interface RoomState {
  code: string;
  status: 'waiting' | 'countdown' | 'playing' | 'round_results' | 'final_results';
  players: Record<string, Player>;
  currentRound: number;
  totalRounds: number;
  verses?: GameVerse[];
  currentVerse?: GameVerse;
  roundResults?: Record<number, RoundResult>;
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
  startGame: (numRounds?: number) => Promise<void>;
  nextRound: () => Promise<void>;
  endGame: () => Promise<void>;
  leaveRoom: () => Promise<void>;
}

// Generate a unique player ID
function generatePlayerId(): string {
  return `player_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Get N unique random verses
function getRandomVerses(count: number): MemoryVerse[] {
  const shuffled = [...MEMORY_VERSES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
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
            totalScore: 0,
            roundScores: [],
            joinedAt: Date.now(),
          },
        },
        currentRound: 0,
        totalRounds: 3, // Default to 3 rounds
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
        totalScore: 0,
        roundScores: [],
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
        currentRoundScore: score,
        currentRoundAnswer: answer,
        currentRoundTranslation: bestTranslation,
        currentRoundFinishedAt: Date.now(),
      });
    } catch (err) {
      console.error('Failed to submit answer:', err);
    }
  }, [currentRoomCode, playerId]);

  const startGame = useCallback(async (numRounds: number = 3): Promise<void> => {
    if (!currentRoomCode || !realtimeDb || !isHost) return;

    try {
      // Pick random verses for all rounds
      const memoryVerses = getRandomVerses(numRounds);
      const verses: GameVerse[] = memoryVerses.map(v => ({
        id: v.id,
        reference: v.reference,
        translations: v.translations,
        context: v.context,
      }));

      const roomRef = ref(realtimeDb, `rooms/${currentRoomCode}`);
      await update(roomRef, {
        status: 'countdown',
        currentRound: 1,
        totalRounds: numRounds,
        verses,
        currentVerse: verses[0],
        roundResults: {},
        gameStartedAt: Date.now(),
      });

      // Reset player round data
      if (room?.players) {
        for (const pid of Object.keys(room.players)) {
          const playerRef = ref(realtimeDb, `rooms/${currentRoomCode}/players/${pid}`);
          await update(playerRef, {
            currentRoundScore: null,
            currentRoundAnswer: null,
            currentRoundTranslation: null,
            currentRoundFinishedAt: null,
          });
        }
      }

      // Transition to playing after countdown
      setTimeout(async () => {
        await update(roomRef, { status: 'playing' });
      }, 3000);
    } catch (err) {
      console.error('Failed to start game:', err);
    }
  }, [currentRoomCode, isHost, room?.players]);

  const nextRound = useCallback(async (): Promise<void> => {
    if (!currentRoomCode || !realtimeDb || !isHost || !room) return;

    try {
      const roomRef = ref(realtimeDb, `rooms/${currentRoomCode}`);
      const currentRound = room.currentRound;
      const nextRoundNum = currentRound + 1;

      // Save current round results
      const roundResult: RoundResult = {
        visibleVerse: room.currentVerse?.reference || '',
        players: {},
      };

      // Update each player's total score and save round result
      for (const [pid, player] of Object.entries(room.players)) {
        const playerRef = ref(realtimeDb, `rooms/${currentRoomCode}/players/${pid}`);
        const roundScore = player.currentRoundScore || 0;
        const newTotalScore = (player.totalScore || 0) + roundScore;
        const newRoundScores = [...(player.roundScores || []), roundScore];

        roundResult.players[pid] = {
          answer: player.currentRoundAnswer || '',
          score: roundScore,
          translation: player.currentRoundTranslation || '',
        };

        await update(playerRef, {
          totalScore: newTotalScore,
          roundScores: newRoundScores,
          currentRoundScore: null,
          currentRoundAnswer: null,
          currentRoundTranslation: null,
          currentRoundFinishedAt: null,
        });
      }

      // Save round results
      const roundResultsRef = ref(realtimeDb, `rooms/${currentRoomCode}/roundResults/${currentRound}`);
      await set(roundResultsRef, roundResult);

      // Check if this was the last round
      if (nextRoundNum > room.totalRounds) {
        await update(roomRef, { status: 'final_results' });
        return;
      }

      // Move to next round
      const nextVerse = room.verses?.[nextRoundNum - 1];
      await update(roomRef, {
        status: 'countdown',
        currentRound: nextRoundNum,
        currentVerse: nextVerse,
      });

      // Transition to playing after countdown
      setTimeout(async () => {
        await update(roomRef, { status: 'playing' });
      }, 3000);
    } catch (err) {
      console.error('Failed to advance to next round:', err);
    }
  }, [currentRoomCode, isHost, room]);

  const endGame = useCallback(async (): Promise<void> => {
    if (!currentRoomCode || !realtimeDb || !room) return;

    try {
      const roomRef = ref(realtimeDb, `rooms/${currentRoomCode}`);

      // Save current round results before showing them
      const currentRound = room.currentRound;
      const roundResult: RoundResult = {
        visibleVerse: room.currentVerse?.reference || '',
        players: {},
      };

      // Collect round results from all players
      for (const [pid, player] of Object.entries(room.players)) {
        roundResult.players[pid] = {
          answer: player.currentRoundAnswer || '',
          score: player.currentRoundScore || 0,
          translation: player.currentRoundTranslation || '',
        };
      }

      // Save round results
      const roundResultsRef = ref(realtimeDb, `rooms/${currentRoomCode}/roundResults/${currentRound}`);
      await set(roundResultsRef, roundResult);

      await update(roomRef, { status: 'round_results' });
    } catch (err) {
      console.error('Failed to end round:', err);
    }
  }, [currentRoomCode, room]);

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
    nextRound,
    endGame,
    leaveRoom,
  };
}
