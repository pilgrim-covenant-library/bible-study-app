import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ============================================================================
// SM-2 SPACED REPETITION ALGORITHM
// ============================================================================
// Based on the SuperMemo SM-2 algorithm used in Anki
// https://www.supermemo.com/en/archives1990-2015/english/ol/sm2
//
// Quality ratings (mapped from quiz scores):
// 0 - Complete blackout (0-30%)
// 1 - Incorrect response, but remembered upon seeing correct (30-50%)
// 2 - Incorrect response, but seemed easy to recall (50-65%)
// 3 - Correct response with serious difficulty (65-80%)
// 4 - Correct response after hesitation (80-90%)
// 5 - Perfect response (90-100%)
//
// The algorithm adjusts:
// - Ease Factor (EF): How easy the verse is to remember (min 1.3)
// - Interval: Days until next review (1, 6, then interval * EF)
// ============================================================================

export interface VerseProgress {
  verseId: string;
  reference: string;

  // SM-2 parameters
  easeFactor: number;      // Default 2.5, min 1.3
  interval: number;        // Days until next review
  repetitions: number;     // Number of successful reviews in a row

  // Scheduling
  nextReviewDate: string;  // ISO date string
  lastReviewDate: string | null;

  // Statistics
  totalReviews: number;
  correctReviews: number;  // Reviews with quality >= 3
  averageScore: number;
  streakDays: number;      // Consecutive days practiced
  lastStreak: string | null; // ISO date of last streak update

  // History (last 10 reviews)
  history: {
    date: string;
    score: number;
    quality: number;
    mode: string;
  }[];
}

interface SpacedRepetitionState {
  // Verse progress data
  verses: Record<string, VerseProgress>;

  // Actions
  recordReview: (
    verseId: string,
    reference: string,
    score: number,
    mode: string
  ) => void;

  getVerseProgress: (verseId: string) => VerseProgress | null;
  getDueVerses: () => VerseProgress[];
  getNewVerses: (allVerseIds: string[]) => string[];
  getStats: () => {
    totalVersesLearned: number;
    totalReviews: number;
    dueToday: number;
    averageEaseFactor: number;
    longestStreak: number;
    currentStreak: number;
  };

  // Reset
  resetVerse: (verseId: string) => void;
  resetAll: () => void;
}

// Convert quiz score (0-100) to SM-2 quality (0-5)
function scoreToQuality(score: number): number {
  if (score < 30) return 0;
  if (score < 50) return 1;
  if (score < 65) return 2;
  if (score < 80) return 3;
  if (score < 90) return 4;
  return 5;
}

// Calculate new ease factor using SM-2 formula
function calculateEaseFactor(currentEF: number, quality: number): number {
  // EF' = EF + (0.1 - (5-q) * (0.08 + (5-q) * 0.02))
  const newEF = currentEF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  return Math.max(1.3, newEF); // Minimum EF is 1.3
}

// Calculate next interval in days
function calculateInterval(
  repetitions: number,
  interval: number,
  easeFactor: number,
  quality: number
): number {
  // If quality < 3, reset to beginning
  if (quality < 3) {
    return 1;
  }

  // SM-2 interval calculation
  if (repetitions === 0) {
    return 1;
  } else if (repetitions === 1) {
    return 6;
  } else {
    return Math.round(interval * easeFactor);
  }
}

// Add days to a date and return ISO string
function addDays(date: Date, days: number): string {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString().split('T')[0];
}

// Get today's date as ISO string
function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

// Check if a date is today or earlier
function isDue(dateStr: string): boolean {
  const today = getToday();
  return dateStr <= today;
}

// Calculate streak
function calculateStreak(lastStreak: string | null, currentStreak: number): { streak: number; lastDate: string } {
  const today = getToday();
  const yesterday = addDays(new Date(), -1);

  if (!lastStreak) {
    return { streak: 1, lastDate: today };
  }

  if (lastStreak === today) {
    // Already practiced today, no change
    return { streak: currentStreak, lastDate: today };
  }

  if (lastStreak === yesterday) {
    // Practiced yesterday, increment streak
    return { streak: currentStreak + 1, lastDate: today };
  }

  // Streak broken, reset to 1
  return { streak: 1, lastDate: today };
}

export const useSpacedRepetitionStore = create<SpacedRepetitionState>()(
  persist(
    (set, get) => ({
      verses: {},

      recordReview: (verseId, reference, score, mode) => {
        const { verses } = get();
        const existing = verses[verseId];
        const quality = scoreToQuality(score);
        const today = getToday();

        if (existing) {
          // Update existing verse progress
          const newEF = calculateEaseFactor(existing.easeFactor, quality);
          const newReps = quality >= 3 ? existing.repetitions + 1 : 0;
          const newInterval = calculateInterval(newReps, existing.interval, newEF, quality);
          const { streak, lastDate } = calculateStreak(existing.lastStreak, existing.streakDays);

          const newHistory = [
            { date: today, score, quality, mode },
            ...existing.history.slice(0, 9),
          ];

          const totalScore = existing.averageScore * existing.totalReviews + score;
          const newTotalReviews = existing.totalReviews + 1;

          set({
            verses: {
              ...verses,
              [verseId]: {
                ...existing,
                easeFactor: newEF,
                interval: newInterval,
                repetitions: newReps,
                nextReviewDate: addDays(new Date(), newInterval),
                lastReviewDate: today,
                totalReviews: newTotalReviews,
                correctReviews: quality >= 3 ? existing.correctReviews + 1 : existing.correctReviews,
                averageScore: totalScore / newTotalReviews,
                streakDays: streak,
                lastStreak: lastDate,
                history: newHistory,
              },
            },
          });
        } else {
          // Create new verse progress
          const newInterval = quality >= 3 ? 1 : 1; // First review always 1 day

          set({
            verses: {
              ...verses,
              [verseId]: {
                verseId,
                reference,
                easeFactor: 2.5, // Default SM-2 starting value
                interval: newInterval,
                repetitions: quality >= 3 ? 1 : 0,
                nextReviewDate: addDays(new Date(), newInterval),
                lastReviewDate: today,
                totalReviews: 1,
                correctReviews: quality >= 3 ? 1 : 0,
                averageScore: score,
                streakDays: 1,
                lastStreak: today,
                history: [{ date: today, score, quality, mode }],
              },
            },
          });
        }
      },

      getVerseProgress: (verseId) => {
        return get().verses[verseId] || null;
      },

      getDueVerses: () => {
        const { verses } = get();
        return Object.values(verses)
          .filter(v => isDue(v.nextReviewDate))
          .sort((a, b) => {
            // Sort by due date (oldest first), then by ease factor (harder first)
            if (a.nextReviewDate !== b.nextReviewDate) {
              return a.nextReviewDate.localeCompare(b.nextReviewDate);
            }
            return a.easeFactor - b.easeFactor;
          });
      },

      getNewVerses: (allVerseIds) => {
        const { verses } = get();
        return allVerseIds.filter(id => !verses[id]);
      },

      getStats: () => {
        const { verses } = get();
        const verseList = Object.values(verses);
        const today = getToday();

        if (verseList.length === 0) {
          return {
            totalVersesLearned: 0,
            totalReviews: 0,
            dueToday: 0,
            averageEaseFactor: 2.5,
            longestStreak: 0,
            currentStreak: 0,
          };
        }

        const totalReviews = verseList.reduce((sum, v) => sum + v.totalReviews, 0);
        const dueToday = verseList.filter(v => isDue(v.nextReviewDate)).length;
        const avgEF = verseList.reduce((sum, v) => sum + v.easeFactor, 0) / verseList.length;
        const longestStreak = Math.max(...verseList.map(v => v.streakDays));

        // Current streak is based on whether user practiced today or yesterday
        const recentVerse = verseList.find(v => v.lastStreak === today || v.lastStreak === addDays(new Date(), -1));
        const currentStreak = recentVerse?.streakDays || 0;

        return {
          totalVersesLearned: verseList.length,
          totalReviews,
          dueToday,
          averageEaseFactor: Math.round(avgEF * 100) / 100,
          longestStreak,
          currentStreak,
        };
      },

      resetVerse: (verseId) => {
        const { verses } = get();
        const { [verseId]: _, ...rest } = verses;
        set({ verses: rest });
      },

      resetAll: () => {
        set({ verses: {} });
      },
    }),
    {
      name: 'bible-memory-sr',
      version: 1,
    }
  )
);

// ============================================================================
// UTILITY EXPORTS
// ============================================================================

export { scoreToQuality, getToday, isDue, addDays };
