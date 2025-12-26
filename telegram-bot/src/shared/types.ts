// Game types for Scripture Memory Challenge Telegram Bot

import { VerseTranslations } from './memory-verses.js';

// Round mode: typing (full verse) or progressive (fill blanks)
export type RoundMode = 'typing' | 'progressive';

// Game status
export type GameStatus = 'waiting' | 'countdown' | 'playing' | 'round_results' | 'final_results';

// Data for progressive blanks mode
export interface ProgressiveRoundData {
  blankIndices: number[];        // Which word indices are blanked
  blankPercentage: number;       // 30%, 50%, or 70%
  correctAnswers: string[];      // The correct words for each blank
}

export interface Player {
  id: string;                    // Telegram user ID
  name: string;                  // Telegram display name
  isReady: boolean;
  totalScore: number;
  currentRoundScore?: number;
  currentRoundAnswer?: string;
  currentRoundTranslation?: string;
  currentRoundFinishedAt?: number;
  roundScores?: number[];
  joinedAt: number;
  progressiveAnswers?: string[];  // Answers for progressive blanks mode
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
  status: GameStatus;
  players: Record<string, Player>;
  currentRound: number;
  totalRounds: number;
  verses?: GameVerse[];
  currentVerse?: GameVerse;
  roundResults?: Record<number, RoundResult>;
  gameStartedAt?: number;
  createdAt: number;
  hostId: string;
  roundModes?: RoundMode[];             // Which mode for each round
  progressiveData?: ProgressiveRoundData; // Current round's progressive blanks data
}

// Session data stored per user
export interface SessionData {
  currentRoomCode?: string;
  playerId?: string;
  playerName?: string;
}
