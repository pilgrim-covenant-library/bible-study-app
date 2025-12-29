// Test All 107 Session Store
// Manages state for sequential testing of all 107 Westminster Shorter Catechism questions
// Two phases: MCQ first, then Free Response with similarity scoring

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Test107Phase = 'mcq' | 'free_response';

export interface QuestionResult {
  questionNumber: number;       // 1-107
  questionId: string;           // 'wsc-1' through 'wsc-107'
  phase: Test107Phase;
  userAnswer: string;           // Selected option text (MCQ) or typed response (free)
  correctAnswer: string;
  isCorrect: boolean;
  score: number;                // 0-100
  distractorsShown?: string[];  // For MCQ - track which distractors were used
  timestamp: string;            // ISO date
}

export interface Test107Session {
  id: string;                   // Unique session ID
  startedAt: string;            // ISO date
  lastUpdatedAt: string;        // ISO date

  // Progress tracking
  currentPhase: Test107Phase;
  currentQuestionIndex: number; // 0-106
  loopCount: number;            // How many full cycles completed

  // Results by phase
  phase1Results: QuestionResult[];  // MCQ results
  phase2Results: QuestionResult[];  // Free response results

  // Summary stats
  phase1Score: number;          // Average score for phase 1
  phase2Score: number;          // Average score for phase 2
  totalTimeSpentMs: number;     // Cumulative time spent

  // State flags
  isComplete: boolean;          // Both phases done
  isPaused: boolean;            // User exited mid-session
}

interface Test107SessionState {
  // Current session
  currentSession: Test107Session | null;

  // History of completed sessions
  completedSessions: Test107Session[];

  // Actions
  startNewSession: () => string;
  resumeSession: () => void;

  recordAnswer: (
    questionIndex: number,
    phase: Test107Phase,
    userAnswer: string,
    correctAnswer: string,
    score: number,
    distractorsShown?: string[]
  ) => void;

  advanceQuestion: () => {
    nextIndex: number;
    phaseComplete: boolean;
    sessionComplete: boolean;
  };

  advanceToPhase2: () => void;
  completeSession: () => void;
  loopSession: () => void;
  pauseSession: () => void;
  abandonSession: () => void;

  // Getters
  getSessionProgress: () => {
    phase: Test107Phase;
    questionNumber: number;
    totalQuestions: number;
    phase1Completed: number;
    phase2Completed: number;
    phase1Progress: number;
    phase2Progress: number;
    overallProgress: number;
  };

  hasActiveSession: () => boolean;
  getCurrentQuestion: () => { phase: Test107Phase; index: number } | null;
}

// Generate unique session ID
function generateSessionId(): string {
  return `test107-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export const useTest107SessionStore = create<Test107SessionState>()(
  persist(
    (set, get) => ({
      currentSession: null,
      completedSessions: [],

      startNewSession: () => {
        const sessionId = generateSessionId();
        const session: Test107Session = {
          id: sessionId,
          startedAt: new Date().toISOString(),
          lastUpdatedAt: new Date().toISOString(),
          currentPhase: 'mcq',
          currentQuestionIndex: 0,
          loopCount: 0,
          phase1Results: [],
          phase2Results: [],
          phase1Score: 0,
          phase2Score: 0,
          totalTimeSpentMs: 0,
          isComplete: false,
          isPaused: false,
        };
        set({ currentSession: session });
        return sessionId;
      },

      resumeSession: () => {
        const { currentSession } = get();
        if (currentSession) {
          set({
            currentSession: {
              ...currentSession,
              isPaused: false,
              lastUpdatedAt: new Date().toISOString()
            }
          });
        }
      },

      recordAnswer: (questionIndex, phase, userAnswer, correctAnswer, score, distractorsShown) => {
        const { currentSession } = get();
        if (!currentSession) return;

        const result: QuestionResult = {
          questionNumber: questionIndex + 1,
          questionId: `wsc-${questionIndex + 1}`,
          phase,
          userAnswer,
          correctAnswer,
          isCorrect: score >= 80, // Consider 80%+ as "correct" for free response
          score,
          distractorsShown,
          timestamp: new Date().toISOString(),
        };

        const updatedSession = { ...currentSession };

        if (phase === 'mcq') {
          updatedSession.phase1Results = [...updatedSession.phase1Results, result];
          const totalScore = updatedSession.phase1Results.reduce((a, r) => a + r.score, 0);
          updatedSession.phase1Score = totalScore / updatedSession.phase1Results.length;
        } else {
          updatedSession.phase2Results = [...updatedSession.phase2Results, result];
          const totalScore = updatedSession.phase2Results.reduce((a, r) => a + r.score, 0);
          updatedSession.phase2Score = totalScore / updatedSession.phase2Results.length;
        }

        updatedSession.lastUpdatedAt = new Date().toISOString();
        set({ currentSession: updatedSession });
      },

      advanceQuestion: () => {
        const { currentSession } = get();
        if (!currentSession) {
          return { nextIndex: 0, phaseComplete: false, sessionComplete: false };
        }

        const nextIndex = currentSession.currentQuestionIndex + 1;
        const phaseComplete = nextIndex >= 107;
        const sessionComplete = phaseComplete && currentSession.currentPhase === 'free_response';

        if (!phaseComplete) {
          set({
            currentSession: {
              ...currentSession,
              currentQuestionIndex: nextIndex,
              lastUpdatedAt: new Date().toISOString(),
            }
          });
        }

        return { nextIndex, phaseComplete, sessionComplete };
      },

      advanceToPhase2: () => {
        const { currentSession } = get();
        if (!currentSession) return;

        set({
          currentSession: {
            ...currentSession,
            currentPhase: 'free_response',
            currentQuestionIndex: 0,
            lastUpdatedAt: new Date().toISOString(),
          }
        });
      },

      completeSession: () => {
        const { currentSession, completedSessions } = get();
        if (!currentSession) return;

        const finalSession: Test107Session = {
          ...currentSession,
          isComplete: true,
          lastUpdatedAt: new Date().toISOString(),
        };

        set({
          currentSession: null,
          completedSessions: [finalSession, ...completedSessions.slice(0, 9)], // Keep last 10
        });
      },

      // Loop behavior: after completing, reset to Phase 1 Q1 but keep stats
      loopSession: () => {
        const { currentSession } = get();
        if (!currentSession) return;

        set({
          currentSession: {
            ...currentSession,
            currentPhase: 'mcq',
            currentQuestionIndex: 0,
            loopCount: currentSession.loopCount + 1,
            // Keep results from previous loops for aggregate scoring
            lastUpdatedAt: new Date().toISOString(),
          }
        });
      },

      pauseSession: () => {
        const { currentSession } = get();
        if (!currentSession) return;

        set({
          currentSession: {
            ...currentSession,
            isPaused: true,
            lastUpdatedAt: new Date().toISOString(),
          }
        });
      },

      abandonSession: () => {
        set({ currentSession: null });
      },

      getSessionProgress: () => {
        const { currentSession } = get();
        if (!currentSession) {
          return {
            phase: 'mcq' as Test107Phase,
            questionNumber: 1,
            totalQuestions: 107,
            phase1Completed: 0,
            phase2Completed: 0,
            phase1Progress: 0,
            phase2Progress: 0,
            overallProgress: 0,
          };
        }

        const phase1Completed = currentSession.phase1Results.length;
        const phase2Completed = currentSession.phase2Results.length;
        const phase1Progress = (phase1Completed / 107) * 100;
        const phase2Progress = (phase2Completed / 107) * 100;
        const overallProgress = (phase1Progress + phase2Progress) / 2;

        return {
          phase: currentSession.currentPhase,
          questionNumber: currentSession.currentQuestionIndex + 1,
          totalQuestions: 107,
          phase1Completed,
          phase2Completed,
          phase1Progress,
          phase2Progress,
          overallProgress,
        };
      },

      hasActiveSession: () => {
        const { currentSession } = get();
        return currentSession !== null && !currentSession.isComplete;
      },

      getCurrentQuestion: () => {
        const { currentSession } = get();
        if (!currentSession) return null;
        return {
          phase: currentSession.currentPhase,
          index: currentSession.currentQuestionIndex,
        };
      },
    }),
    {
      name: 'test107-session',
      version: 1,
    }
  )
);
