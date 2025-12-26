// Room management - create, join, leave, get room state

import { getDb } from '../config/firebase.js';
import { RoomState, Player, GameVerse, RoundMode, ProgressiveRoundData } from '../shared/types.js';
import { MEMORY_VERSES, getVersesByDifficulty, MemoryVerse } from '../shared/memory-verses.js';
import { generateRoomCode } from '../utils/room-code.js';

// Get room reference
function roomRef(roomCode: string) {
  return getDb().ref(`rooms/${roomCode}`);
}

// Get N unique random verses for typing rounds
function getRandomVerses(count: number): MemoryVerse[] {
  const shuffled = [...MEMORY_VERSES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Get 3 verses sorted by difficulty for progressive rounds
function getProgressiveVerses(): MemoryVerse[] {
  const easy = getVersesByDifficulty('easy');
  const medium = getVersesByDifficulty('medium');
  const hard = getVersesByDifficulty('hard');

  const shuffledEasy = [...easy].sort(() => Math.random() - 0.5);
  const shuffledMedium = [...medium].sort(() => Math.random() - 0.5);
  const shuffledHard = [...hard].sort(() => Math.random() - 0.5);

  const fallbackVerse = shuffledEasy[0] || shuffledMedium[0] || shuffledHard[0] || MEMORY_VERSES[0];

  return [
    shuffledEasy[0] || fallbackVerse,   // Round 4: Easy
    shuffledMedium[0] || fallbackVerse, // Round 5: Medium
    shuffledHard[0] || fallbackVerse,   // Round 6: Hard
  ];
}

// Shuffle array helper
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Generate blank indices for progressive round
export function generateProgressiveBlanks(verse: GameVerse, roundNumber: number): ProgressiveRoundData {
  const text = verse.translations.ESV;
  const words = text.split(/\s+/).filter(w => w.length > 0);

  // Round 4: 30%, Round 5: 50%, Round 6: 70%
  const blankPercentages: Record<number, number> = { 4: 0.3, 5: 0.5, 6: 0.7 };
  const blankPercent = blankPercentages[roundNumber] || 0.3;

  const blankCount = Math.max(1, Math.floor(words.length * blankPercent));
  const indices = Array.from({ length: words.length }, (_, i) => i);
  const shuffledIndices = shuffleArray(indices);
  const blankIndices = shuffledIndices.slice(0, blankCount).sort((a, b) => a - b);

  const correctAnswers = blankIndices.map(i => words[i]);

  return {
    blankIndices,
    blankPercentage: Math.round(blankPercent * 100),
    correctAnswers,
  };
}

// Convert MemoryVerse to GameVerse
function toGameVerse(verse: MemoryVerse): GameVerse {
  return {
    id: verse.id,
    reference: verse.reference,
    translations: verse.translations,
    context: verse.context,
  };
}

// Create a new room
export async function createRoom(hostId: string, hostName: string): Promise<RoomState> {
  let code = generateRoomCode();
  let attempts = 0;

  // Ensure unique room code
  while (attempts < 10) {
    const snapshot = await roomRef(code).get();
    if (!snapshot.exists()) break;
    code = generateRoomCode();
    attempts++;
  }

  // Generate all verses for the game
  const typingVerses = getRandomVerses(3);
  const progressiveVerses = getProgressiveVerses();
  const allVerses = [...typingVerses, ...progressiveVerses].map(toGameVerse);

  // Define round modes
  const roundModes: RoundMode[] = [
    'typing', 'typing', 'typing',       // Rounds 1-3
    'progressive', 'progressive', 'progressive' // Rounds 4-6
  ];

  const player: Player = {
    id: hostId,
    name: hostName,
    isReady: false,
    totalScore: 0,
    joinedAt: Date.now(),
  };

  const room: RoomState = {
    code,
    status: 'waiting',
    players: { [hostId]: player },
    currentRound: 1,
    totalRounds: 6,
    verses: allVerses,
    createdAt: Date.now(),
    hostId,
    roundModes,
  };

  await roomRef(code).set(room);
  return room;
}

// Join an existing room
export async function joinRoom(roomCode: string, playerId: string, playerName: string): Promise<RoomState | null> {
  const snapshot = await roomRef(roomCode).get();
  if (!snapshot.exists()) return null;

  const room = snapshot.val() as RoomState;

  // Check if room is in waiting state
  if (room.status !== 'waiting') {
    throw new Error('Game already in progress');
  }

  // Check player limit (2 players max)
  const playerCount = Object.keys(room.players || {}).length;
  if (playerCount >= 2) {
    throw new Error('Room is full');
  }

  // Check if player already in room
  if (room.players[playerId]) {
    return room; // Already joined
  }

  const player: Player = {
    id: playerId,
    name: playerName,
    isReady: false,
    totalScore: 0,
    joinedAt: Date.now(),
  };

  await roomRef(roomCode).update({
    [`players/${playerId}`]: player,
  });

  return { ...room, players: { ...room.players, [playerId]: player } };
}

// Leave a room
export async function leaveRoom(roomCode: string, playerId: string): Promise<void> {
  const snapshot = await roomRef(roomCode).get();
  if (!snapshot.exists()) return;

  const room = snapshot.val() as RoomState;
  const playerIds = Object.keys(room.players || {});

  // If this is the last player, delete the room
  if (playerIds.length <= 1) {
    await roomRef(roomCode).remove();
    return;
  }

  // Remove player
  await getDb().ref(`rooms/${roomCode}/players/${playerId}`).remove();

  // If leaving player was host, transfer host to remaining player
  if (room.hostId === playerId) {
    const newHostId = playerIds.find(id => id !== playerId);
    if (newHostId) {
      await roomRef(roomCode).update({ hostId: newHostId });
    }
  }
}

// Get room state
export async function getRoom(roomCode: string): Promise<RoomState | null> {
  const snapshot = await roomRef(roomCode).get();
  if (!snapshot.exists()) return null;
  return snapshot.val() as RoomState;
}

// Set player ready status
export async function setPlayerReady(roomCode: string, playerId: string, ready: boolean): Promise<void> {
  await roomRef(roomCode).update({
    [`players/${playerId}/isReady`]: ready,
  });
}

// Check if all players are ready
export async function checkAllReady(roomCode: string): Promise<boolean> {
  const room = await getRoom(roomCode);
  if (!room || Object.keys(room.players).length < 2) return false;

  return Object.values(room.players).every(p => p.isReady);
}

// Start countdown
export async function startCountdown(roomCode: string): Promise<void> {
  await roomRef(roomCode).update({
    status: 'countdown',
  });
}

// Start the game (after countdown)
export async function startPlaying(roomCode: string): Promise<void> {
  const room = await getRoom(roomCode);
  if (!room || !room.verses) return;

  const currentVerse = room.verses[0];
  const isProgressive = room.roundModes?.[0] === 'progressive';

  const updates: Record<string, unknown> = {
    status: 'playing',
    currentRound: 1,
    currentVerse,
    gameStartedAt: Date.now(),
  };

  // Generate progressive blanks if needed
  if (isProgressive) {
    updates.progressiveData = generateProgressiveBlanks(currentVerse, 1);
  }

  // Reset player scores
  for (const playerId of Object.keys(room.players)) {
    updates[`players/${playerId}/currentRoundScore`] = null;
    updates[`players/${playerId}/currentRoundAnswer`] = null;
    updates[`players/${playerId}/currentRoundTranslation`] = null;
    updates[`players/${playerId}/currentRoundFinishedAt`] = null;
    updates[`players/${playerId}/progressiveAnswers`] = null;
  }

  await roomRef(roomCode).update(updates);
}

// Submit answer
export async function submitAnswer(
  roomCode: string,
  playerId: string,
  answer: string,
  score: number,
  translation: string,
  progressiveAnswers?: string[]
): Promise<void> {
  const updates: Record<string, unknown> = {
    [`players/${playerId}/currentRoundScore`]: score,
    [`players/${playerId}/currentRoundAnswer`]: answer,
    [`players/${playerId}/currentRoundTranslation`]: translation,
    [`players/${playerId}/currentRoundFinishedAt`]: Date.now(),
  };

  if (progressiveAnswers) {
    updates[`players/${playerId}/progressiveAnswers`] = progressiveAnswers;
  }

  await roomRef(roomCode).update(updates);
}

// Check if all players have submitted
export async function checkAllSubmitted(roomCode: string): Promise<boolean> {
  const room = await getRoom(roomCode);
  if (!room) return false;

  return Object.values(room.players).every(p => p.currentRoundFinishedAt !== undefined);
}

// Show round results
export async function showRoundResults(roomCode: string): Promise<void> {
  const room = await getRoom(roomCode);
  if (!room || !room.currentVerse) return;

  // Calculate and update scores
  const roundResult: Record<string, { answer: string; score: number; translation: string }> = {};

  for (const [playerId, player] of Object.entries(room.players)) {
    const score = player.currentRoundScore || 0;
    roundResult[playerId] = {
      answer: player.currentRoundAnswer || '',
      score,
      translation: player.currentRoundTranslation || 'ESV',
    };

    // Update total score
    await roomRef(roomCode).update({
      [`players/${playerId}/totalScore`]: (player.totalScore || 0) + score,
      [`players/${playerId}/roundScores`]: [...(player.roundScores || []), score],
    });
  }

  await roomRef(roomCode).update({
    status: 'round_results',
    [`roundResults/${room.currentRound}`]: {
      visibleVerse: room.currentVerse.translations.ESV,
      players: roundResult,
    },
  });
}

// Advance to next round
export async function nextRound(roomCode: string): Promise<boolean> {
  const room = await getRoom(roomCode);
  if (!room || !room.verses) return false;

  const nextRoundNum = room.currentRound + 1;

  // Check if game is over
  if (nextRoundNum > room.totalRounds) {
    await roomRef(roomCode).update({ status: 'final_results' });
    return false;
  }

  const currentVerse = room.verses[nextRoundNum - 1];
  const isProgressive = room.roundModes?.[nextRoundNum - 1] === 'progressive';

  const updates: Record<string, unknown> = {
    status: 'playing',
    currentRound: nextRoundNum,
    currentVerse,
    progressiveData: null,
  };

  // Generate progressive blanks if needed
  if (isProgressive) {
    updates.progressiveData = generateProgressiveBlanks(currentVerse, nextRoundNum);
  }

  // Reset player round state
  for (const playerId of Object.keys(room.players)) {
    updates[`players/${playerId}/currentRoundScore`] = null;
    updates[`players/${playerId}/currentRoundAnswer`] = null;
    updates[`players/${playerId}/currentRoundTranslation`] = null;
    updates[`players/${playerId}/currentRoundFinishedAt`] = null;
    updates[`players/${playerId}/progressiveAnswers`] = null;
  }

  await roomRef(roomCode).update(updates);
  return true;
}

// Subscribe to room changes (for real-time updates)
export function subscribeToRoom(roomCode: string, callback: (room: RoomState | null) => void): () => void {
  const ref = roomRef(roomCode);

  const handler = (snapshot: { exists: () => boolean; val: () => RoomState | null }) => {
    if (snapshot.exists()) {
      callback(snapshot.val() as RoomState);
    } else {
      callback(null);
    }
  };

  ref.on('value', handler);

  // Return unsubscribe function
  return () => ref.off('value', handler);
}

// Get player names in room
export async function getPlayerNames(roomCode: string): Promise<string[]> {
  const room = await getRoom(roomCode);
  if (!room) return [];
  return Object.values(room.players).map(p => p.name);
}

// Get winner(s)
export function getWinners(room: RoomState): Player[] {
  const players = Object.values(room.players);
  if (players.length === 0) return [];

  const maxScore = Math.max(...players.map(p => p.totalScore));
  return players.filter(p => p.totalScore === maxScore);
}
