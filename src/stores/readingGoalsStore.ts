import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Reading Goals Store
 *
 * Tracks user-defined Bible reading goals including:
 * - Weekly chapter goals (e.g., read 10 chapters per week)
 * - Monthly chapter goals (e.g., read 50 chapters per month)
 * - Custom daily minimums
 *
 * Integrates with readingProgressStore to calculate actual progress.
 */

export type GoalPeriod = 'daily' | 'weekly' | 'monthly';

export interface ReadingGoal {
  id: string;
  period: GoalPeriod;
  targetChapters: number;
  createdAt: string;
  isActive: boolean;
}

interface GoalProgress {
  chaptersRead: number;
  targetChapters: number;
  percentage: number;
  isComplete: boolean;
  periodStart: Date;
  periodEnd: Date;
  daysRemaining: number;
}

interface ReadingGoalsState {
  goals: ReadingGoal[];

  // Actions
  setGoal: (period: GoalPeriod, targetChapters: number) => void;
  removeGoal: (period: GoalPeriod) => void;
  getGoal: (period: GoalPeriod) => ReadingGoal | undefined;
  hasActiveGoals: () => boolean;

  // Get period boundaries for calculating progress
  getPeriodBoundaries: (period: GoalPeriod) => { start: Date; end: Date };
}

// Helper to get period boundaries
function calculatePeriodBoundaries(period: GoalPeriod): { start: Date; end: Date } {
  const now = new Date();
  const start = new Date(now);
  const end = new Date(now);

  switch (period) {
    case 'daily':
      // Start and end of today
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
      break;

    case 'weekly':
      // Start of week (Sunday) to end of week (Saturday)
      const dayOfWeek = now.getDay();
      start.setDate(now.getDate() - dayOfWeek);
      start.setHours(0, 0, 0, 0);
      end.setDate(start.getDate() + 6);
      end.setHours(23, 59, 59, 999);
      break;

    case 'monthly':
      // Start of month to end of month
      start.setDate(1);
      start.setHours(0, 0, 0, 0);
      end.setMonth(start.getMonth() + 1);
      end.setDate(0); // Last day of current month
      end.setHours(23, 59, 59, 999);
      break;
  }

  return { start, end };
}

export const useReadingGoalsStore = create<ReadingGoalsState>()(
  persist(
    (set, get) => ({
      goals: [],

      setGoal: (period: GoalPeriod, targetChapters: number) => {
        const state = get();
        const existingIndex = state.goals.findIndex(g => g.period === period);

        const newGoal: ReadingGoal = {
          id: `${period}-${Date.now()}`,
          period,
          targetChapters,
          createdAt: new Date().toISOString(),
          isActive: true,
        };

        if (existingIndex >= 0) {
          // Update existing goal
          const newGoals = [...state.goals];
          newGoals[existingIndex] = newGoal;
          set({ goals: newGoals });
        } else {
          // Add new goal
          set({ goals: [...state.goals, newGoal] });
        }
      },

      removeGoal: (period: GoalPeriod) => {
        set(state => ({
          goals: state.goals.filter(g => g.period !== period),
        }));
      },

      getGoal: (period: GoalPeriod) => {
        return get().goals.find(g => g.period === period && g.isActive);
      },

      hasActiveGoals: () => {
        return get().goals.some(g => g.isActive);
      },

      getPeriodBoundaries: (period: GoalPeriod) => {
        return calculatePeriodBoundaries(period);
      },
    }),
    {
      name: 'bible-reading-goals',
    }
  )
);

// Helper function to calculate goal progress (uses reading progress store data)
export function calculateGoalProgress(
  goal: ReadingGoal,
  readChapters: Array<{ readAt: string }>
): GoalProgress {
  const { start, end } = calculatePeriodBoundaries(goal.period);

  // Count chapters read within the period
  const chaptersRead = readChapters.filter(c => {
    const readDate = new Date(c.readAt);
    return readDate >= start && readDate <= end;
  }).length;

  const percentage = Math.min(
    100,
    Math.round((chaptersRead / goal.targetChapters) * 100)
  );

  const isComplete = chaptersRead >= goal.targetChapters;

  // Calculate days remaining in period
  const now = new Date();
  const msRemaining = Math.max(0, end.getTime() - now.getTime());
  const daysRemaining = Math.ceil(msRemaining / (1000 * 60 * 60 * 24));

  return {
    chaptersRead,
    targetChapters: goal.targetChapters,
    percentage,
    isComplete,
    periodStart: start,
    periodEnd: end,
    daysRemaining,
  };
}

// Get recommended daily pace to meet goal
export function getRecommendedDailyPace(progress: GoalProgress): number {
  if (progress.isComplete || progress.daysRemaining === 0) {
    return 0;
  }

  const remaining = progress.targetChapters - progress.chaptersRead;
  return Math.ceil(remaining / progress.daysRemaining);
}

// Get goal period display label
export function getGoalPeriodLabel(period: GoalPeriod): string {
  switch (period) {
    case 'daily':
      return 'Daily';
    case 'weekly':
      return 'Weekly';
    case 'monthly':
      return 'Monthly';
  }
}

// Get goal period description
export function getGoalPeriodDescription(period: GoalPeriod): string {
  switch (period) {
    case 'daily':
      return 'chapters per day';
    case 'weekly':
      return 'chapters per week';
    case 'monthly':
      return 'chapters per month';
  }
}

// Suggested goals based on period
export function getSuggestedGoals(period: GoalPeriod): number[] {
  switch (period) {
    case 'daily':
      return [1, 2, 3, 5];
    case 'weekly':
      return [7, 14, 21, 28];
    case 'monthly':
      return [30, 50, 75, 100];
  }
}
