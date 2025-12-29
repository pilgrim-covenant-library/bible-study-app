import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Reading Progress Store
 *
 * Tracks user reading progress across:
 * - Individual chapters (bookId + chapter number)
 * - Reading plans (planId + day number)
 *
 * Progress is persisted to localStorage for offline-first experience.
 */

interface ChapterProgress {
  bookId: string;
  chapter: number;
  readAt: string; // ISO date string
}

interface PlanProgress {
  planId: string;
  startDate: string; // ISO date string
  completedDays: number[]; // Array of completed day numbers
  currentDay: number; // Current day in the plan
}

interface ReadingProgressState {
  // Chapter-level progress
  readChapters: ChapterProgress[];

  // Plan-level progress
  planProgress: Record<string, PlanProgress>;

  // Actions for chapter progress
  markChapterRead: (bookId: string, chapter: number) => void;
  markChapterUnread: (bookId: string, chapter: number) => void;
  isChapterRead: (bookId: string, chapter: number) => boolean;
  getBookProgress: (bookId: string, totalChapters: number) => { read: number; total: number; percentage: number };
  getReadChaptersForBook: (bookId: string) => number[];

  // Actions for plan progress
  startPlan: (planId: string) => void;
  markPlanDayComplete: (planId: string, day: number) => void;
  markPlanDayIncomplete: (planId: string, day: number) => void;
  getPlanProgress: (planId: string) => PlanProgress | null;
  isPlanDayComplete: (planId: string, day: number) => boolean;
  getPlanPercentage: (planId: string, totalDays: number) => number;
  resetPlan: (planId: string) => void;

  // Stats
  getTotalChaptersRead: () => number;
  getRecentReadings: (limit: number) => ChapterProgress[];

  // Reset
  resetAllProgress: () => void;
}

export const useReadingProgressStore = create<ReadingProgressState>()(
  persist(
    (set, get) => ({
      readChapters: [],
      planProgress: {},

      // Chapter progress actions
      markChapterRead: (bookId: string, chapter: number) => {
        const state = get();
        const exists = state.readChapters.some(
          c => c.bookId === bookId && c.chapter === chapter
        );

        if (!exists) {
          set({
            readChapters: [
              ...state.readChapters,
              { bookId, chapter, readAt: new Date().toISOString() }
            ]
          });
        }
      },

      markChapterUnread: (bookId: string, chapter: number) => {
        set(state => ({
          readChapters: state.readChapters.filter(
            c => !(c.bookId === bookId && c.chapter === chapter)
          )
        }));
      },

      isChapterRead: (bookId: string, chapter: number) => {
        return get().readChapters.some(
          c => c.bookId === bookId && c.chapter === chapter
        );
      },

      getBookProgress: (bookId: string, totalChapters: number) => {
        const read = get().readChapters.filter(c => c.bookId === bookId).length;
        return {
          read,
          total: totalChapters,
          percentage: totalChapters > 0 ? Math.round((read / totalChapters) * 100) : 0
        };
      },

      getReadChaptersForBook: (bookId: string) => {
        return get().readChapters
          .filter(c => c.bookId === bookId)
          .map(c => c.chapter)
          .sort((a, b) => a - b);
      },

      // Plan progress actions
      startPlan: (planId: string) => {
        const state = get();
        if (!state.planProgress[planId]) {
          set({
            planProgress: {
              ...state.planProgress,
              [planId]: {
                planId,
                startDate: new Date().toISOString(),
                completedDays: [],
                currentDay: 1
              }
            }
          });
        }
      },

      markPlanDayComplete: (planId: string, day: number) => {
        const state = get();
        const progress = state.planProgress[planId];

        if (progress) {
          const completedDays = progress.completedDays.includes(day)
            ? progress.completedDays
            : [...progress.completedDays, day].sort((a, b) => a - b);

          // Auto-advance current day if completing the current day
          const currentDay = day >= progress.currentDay ? day + 1 : progress.currentDay;

          set({
            planProgress: {
              ...state.planProgress,
              [planId]: {
                ...progress,
                completedDays,
                currentDay
              }
            }
          });
        } else {
          // Auto-start the plan if marking a day complete
          set({
            planProgress: {
              ...state.planProgress,
              [planId]: {
                planId,
                startDate: new Date().toISOString(),
                completedDays: [day],
                currentDay: day + 1
              }
            }
          });
        }
      },

      markPlanDayIncomplete: (planId: string, day: number) => {
        const state = get();
        const progress = state.planProgress[planId];

        if (progress) {
          set({
            planProgress: {
              ...state.planProgress,
              [planId]: {
                ...progress,
                completedDays: progress.completedDays.filter(d => d !== day)
              }
            }
          });
        }
      },

      getPlanProgress: (planId: string) => {
        return get().planProgress[planId] || null;
      },

      isPlanDayComplete: (planId: string, day: number) => {
        const progress = get().planProgress[planId];
        return progress ? progress.completedDays.includes(day) : false;
      },

      getPlanPercentage: (planId: string, totalDays: number) => {
        const progress = get().planProgress[planId];
        if (!progress || totalDays === 0) return 0;
        return Math.round((progress.completedDays.length / totalDays) * 100);
      },

      resetPlan: (planId: string) => {
        set(state => {
          const newProgress = { ...state.planProgress };
          delete newProgress[planId];
          return { planProgress: newProgress };
        });
      },

      // Stats
      getTotalChaptersRead: () => {
        return get().readChapters.length;
      },

      getRecentReadings: (limit: number) => {
        return [...get().readChapters]
          .sort((a, b) => new Date(b.readAt).getTime() - new Date(a.readAt).getTime())
          .slice(0, limit);
      },

      // Reset
      resetAllProgress: () => {
        set({ readChapters: [], planProgress: {} });
      }
    }),
    {
      name: 'bible-reading-progress',
    }
  )
);
