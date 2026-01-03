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

interface StreakStats {
  currentStreak: number;
  longestStreak: number;
  totalDaysRead: number;
  readToday: boolean;
  lastReadDate: string | null;
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
  getStreakStats: () => StreakStats;
  getUniqueDaysRead: () => string[];
  getReadingActivityByDate: (days: number) => Record<string, number>;
  getNextUnreadChapter: (bookId: string, totalChapters: number) => number | null;

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

      getUniqueDaysRead: () => {
        const days = new Set<string>();
        get().readChapters.forEach(c => {
          // Convert to local date string (YYYY-MM-DD)
          const date = new Date(c.readAt);
          const dateStr = date.toISOString().split('T')[0];
          days.add(dateStr);
        });
        return Array.from(days).sort();
      },

      getReadingActivityByDate: (days: number) => {
        const activity: Record<string, number> = {};
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Initialize all days with 0
        for (let i = days - 1; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split('T')[0];
          activity[dateStr] = 0;
        }

        // Count chapters read per day
        get().readChapters.forEach(c => {
          const date = new Date(c.readAt);
          const dateStr = date.toISOString().split('T')[0];
          if (activity.hasOwnProperty(dateStr)) {
            activity[dateStr]++;
          }
        });

        return activity;
      },

      getNextUnreadChapter: (bookId: string, totalChapters: number) => {
        const readChapters = get().getReadChaptersForBook(bookId);

        // Find the first chapter that hasn't been read
        for (let chapter = 1; chapter <= totalChapters; chapter++) {
          if (!readChapters.includes(chapter)) {
            return chapter;
          }
        }

        // All chapters read
        return null;
      },

      getStreakStats: () => {
        const uniqueDays = get().getUniqueDaysRead();

        if (uniqueDays.length === 0) {
          return {
            currentStreak: 0,
            longestStreak: 0,
            totalDaysRead: 0,
            readToday: false,
            lastReadDate: null,
          };
        }

        // Get today's date in YYYY-MM-DD format
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];

        // Get yesterday's date
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        const readToday = uniqueDays.includes(todayStr);
        const lastReadDate = uniqueDays[uniqueDays.length - 1];

        // Calculate current streak
        let currentStreak = 0;
        const sortedDays = [...uniqueDays].sort().reverse(); // Most recent first

        // Current streak starts from today or yesterday
        if (readToday || lastReadDate === yesterdayStr) {
          const checkDate = readToday ? today : yesterday;

          for (const dayStr of sortedDays) {
            const checkDateStr = checkDate.toISOString().split('T')[0];
            if (dayStr === checkDateStr) {
              currentStreak++;
              checkDate.setDate(checkDate.getDate() - 1);
            } else if (dayStr < checkDateStr) {
              // Gap in dates, streak broken
              break;
            }
          }
        }

        // Calculate longest streak
        let longestStreak = 0;
        let tempStreak = 1;
        const sortedAsc = [...uniqueDays].sort();

        for (let i = 1; i < sortedAsc.length; i++) {
          const prevDate = new Date(sortedAsc[i - 1]);
          const currDate = new Date(sortedAsc[i]);

          // Check if dates are consecutive
          const diffTime = currDate.getTime() - prevDate.getTime();
          const diffDays = diffTime / (1000 * 60 * 60 * 24);

          if (diffDays === 1) {
            tempStreak++;
          } else {
            longestStreak = Math.max(longestStreak, tempStreak);
            tempStreak = 1;
          }
        }
        longestStreak = Math.max(longestStreak, tempStreak);

        return {
          currentStreak,
          longestStreak,
          totalDaysRead: uniqueDays.length,
          readToday,
          lastReadDate,
        };
      },

      // Reset
      resetAllProgress: () => {
        set({ readChapters: [], planProgress: {} });
      }
    }),
    {
      name: 'bible-reading-progress',
      version: 1,
      // Validate rehydrated state to prevent corruption issues
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Ensure readChapters is a valid array
          if (!Array.isArray(state.readChapters)) {
            state.readChapters = [];
          }
          // Filter out invalid entries (missing required fields)
          state.readChapters = state.readChapters.filter(
            (c) => c && typeof c.bookId === 'string' && typeof c.chapter === 'number' && c.readAt
          );
          // Ensure planProgress is a valid object
          if (typeof state.planProgress !== 'object' || state.planProgress === null) {
            state.planProgress = {};
          }
          // Validate each plan's completedDays array
          Object.keys(state.planProgress).forEach((planId) => {
            const plan = state.planProgress[planId];
            if (plan && !Array.isArray(plan.completedDays)) {
              plan.completedDays = [];
            }
          });
        }
      },
    }
  )
);
