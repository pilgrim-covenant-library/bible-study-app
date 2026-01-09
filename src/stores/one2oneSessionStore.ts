/**
 * One2One Bible Study Session Store
 *
 * Manages state for One2One partnership Bible study sessions
 * following Andrew Cornes' 7-question methodology.
 *
 * Key features:
 * - Track current passage and question progress
 * - Save user responses for each of the 7 questions
 * - Persist sessions to localStorage for resuming later
 * - Support multiple saved sessions (history)
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Response for a single question in a session
export interface QuestionResponse {
  questionId: number; // 1-7
  response: string; // User's written response
  completedAt?: string; // ISO date when response was saved
}

// A complete One2One study session
export interface One2OneSession {
  id: string; // Unique session ID
  bookId: string; // e.g., 'john'
  bookName: string; // e.g., 'John'
  chapter: number; // e.g., 3
  chapterTitle?: string; // e.g., 'You Must Be Born Again'

  // Passage text from Bible API
  passageText?: string;
  passageReference: string; // e.g., 'John 3'

  // Session state
  currentQuestionIndex: number; // 0-6 (for the 7 questions)
  responses: QuestionResponse[];

  // Timestamps
  createdAt: string;
  updatedAt: string;
  completedAt?: string;

  // Status
  isComplete: boolean;
}

// Summary for session history display
export interface SessionSummary {
  id: string;
  passageReference: string;
  bookName: string;
  chapter: number;
  createdAt: string;
  completedAt?: string;
  isComplete: boolean;
  responseCount: number; // How many questions answered
}

interface One2OneSessionState {
  // Current active session
  currentSession: One2OneSession | null;

  // Saved session history (completed and in-progress)
  sessionHistory: SessionSummary[];

  // Loading state for passage fetching
  isLoadingPassage: boolean;
  passageError: string | null;

  // Actions
  startSession: (
    bookId: string,
    bookName: string,
    chapter: number,
    chapterTitle?: string
  ) => string; // Returns session ID

  setPassageText: (passageText: string) => void;
  setPassageError: (error: string | null) => void;
  setLoadingPassage: (loading: boolean) => void;

  saveResponse: (questionId: number, response: string) => void;
  goToQuestion: (index: number) => void;
  nextQuestion: () => boolean; // Returns true if moved, false if at end
  prevQuestion: () => boolean; // Returns true if moved, false if at start

  completeSession: () => void;
  resumeSession: (sessionId: string) => boolean; // Returns true if found
  deleteSession: (sessionId: string) => void;
  clearCurrentSession: () => void;

  // Getters
  getProgress: () => {
    current: number; // 1-7
    total: number; // 7
    percentage: number; // 0-100
    answeredCount: number;
  };

  getCurrentResponse: () => string;
  hasUnsavedChanges: () => boolean;
  hasActiveSession: () => boolean;
}

// Generate unique session ID
function generateSessionId(): string {
  return `one2one-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

// Create session summary from full session
function createSummary(session: One2OneSession): SessionSummary {
  return {
    id: session.id,
    passageReference: session.passageReference,
    bookName: session.bookName,
    chapter: session.chapter,
    createdAt: session.createdAt,
    completedAt: session.completedAt,
    isComplete: session.isComplete,
    responseCount: session.responses.filter(r => r.response.trim()).length,
  };
}

export const useOne2OneSessionStore = create<One2OneSessionState>()(
  persist(
    (set, get) => ({
      currentSession: null,
      sessionHistory: [],
      isLoadingPassage: false,
      passageError: null,

      startSession: (bookId, bookName, chapter, chapterTitle) => {
        const sessionId = generateSessionId();
        const now = new Date().toISOString();

        const session: One2OneSession = {
          id: sessionId,
          bookId,
          bookName,
          chapter,
          chapterTitle,
          passageReference: `${bookName} ${chapter}`,
          currentQuestionIndex: 0,
          responses: [],
          createdAt: now,
          updatedAt: now,
          isComplete: false,
        };

        set({
          currentSession: session,
          isLoadingPassage: true,
          passageError: null,
        });

        return sessionId;
      },

      setPassageText: (passageText) => {
        const { currentSession } = get();
        if (!currentSession) return;

        set({
          currentSession: {
            ...currentSession,
            passageText,
            updatedAt: new Date().toISOString(),
          },
          isLoadingPassage: false,
        });
      },

      setPassageError: (error) => {
        set({
          passageError: error,
          isLoadingPassage: false,
        });
      },

      setLoadingPassage: (loading) => {
        set({ isLoadingPassage: loading });
      },

      saveResponse: (questionId, response) => {
        const { currentSession } = get();
        if (!currentSession) return;

        const existingIndex = currentSession.responses.findIndex(
          r => r.questionId === questionId
        );

        const newResponse: QuestionResponse = {
          questionId,
          response,
          completedAt: response.trim() ? new Date().toISOString() : undefined,
        };

        let updatedResponses: QuestionResponse[];
        if (existingIndex >= 0) {
          updatedResponses = [...currentSession.responses];
          updatedResponses[existingIndex] = newResponse;
        } else {
          updatedResponses = [...currentSession.responses, newResponse];
        }

        set({
          currentSession: {
            ...currentSession,
            responses: updatedResponses,
            updatedAt: new Date().toISOString(),
          },
        });
      },

      goToQuestion: (index) => {
        const { currentSession } = get();
        if (!currentSession || index < 0 || index > 6) return;

        set({
          currentSession: {
            ...currentSession,
            currentQuestionIndex: index,
            updatedAt: new Date().toISOString(),
          },
        });
      },

      nextQuestion: () => {
        const { currentSession } = get();
        if (!currentSession) return false;

        const nextIndex = currentSession.currentQuestionIndex + 1;
        if (nextIndex > 6) return false; // Already at last question

        set({
          currentSession: {
            ...currentSession,
            currentQuestionIndex: nextIndex,
            updatedAt: new Date().toISOString(),
          },
        });
        return true;
      },

      prevQuestion: () => {
        const { currentSession } = get();
        if (!currentSession) return false;

        const prevIndex = currentSession.currentQuestionIndex - 1;
        if (prevIndex < 0) return false; // Already at first question

        set({
          currentSession: {
            ...currentSession,
            currentQuestionIndex: prevIndex,
            updatedAt: new Date().toISOString(),
          },
        });
        return true;
      },

      completeSession: () => {
        const { currentSession, sessionHistory } = get();
        if (!currentSession) return;

        const completedSession: One2OneSession = {
          ...currentSession,
          isComplete: true,
          completedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        // Update history (keep last 50 sessions)
        const updatedHistory = [
          createSummary(completedSession),
          ...sessionHistory.filter(s => s.id !== currentSession.id).slice(0, 49),
        ];

        set({
          currentSession: completedSession,
          sessionHistory: updatedHistory,
        });
      },

      resumeSession: (sessionId) => {
        // For now, we only store summaries in history
        // Full session data is only kept for currentSession
        // This is a limitation - could be enhanced to store full sessions
        const { sessionHistory } = get();
        const summary = sessionHistory.find(s => s.id === sessionId);

        if (!summary) return false;

        // Can't fully resume from summary alone
        // But we can start a new session with the same passage
        // TODO: Store full sessions for true resume capability
        return false;
      },

      deleteSession: (sessionId) => {
        const { currentSession, sessionHistory } = get();

        set({
          currentSession:
            currentSession?.id === sessionId ? null : currentSession,
          sessionHistory: sessionHistory.filter(s => s.id !== sessionId),
        });
      },

      clearCurrentSession: () => {
        const { currentSession, sessionHistory } = get();

        // Save to history if has any responses
        if (currentSession && currentSession.responses.length > 0) {
          const summary = createSummary(currentSession);
          const updatedHistory = [
            summary,
            ...sessionHistory.filter(s => s.id !== currentSession.id).slice(0, 49),
          ];
          set({
            currentSession: null,
            sessionHistory: updatedHistory,
            isLoadingPassage: false,
            passageError: null,
          });
        } else {
          set({
            currentSession: null,
            isLoadingPassage: false,
            passageError: null,
          });
        }
      },

      getProgress: () => {
        const { currentSession } = get();
        if (!currentSession) {
          return { current: 1, total: 7, percentage: 0, answeredCount: 0 };
        }

        const answeredCount = currentSession.responses.filter(
          r => r.response.trim()
        ).length;

        return {
          current: currentSession.currentQuestionIndex + 1,
          total: 7,
          percentage: Math.round((answeredCount / 7) * 100),
          answeredCount,
        };
      },

      getCurrentResponse: () => {
        const { currentSession } = get();
        if (!currentSession) return '';

        const questionId = currentSession.currentQuestionIndex + 1;
        const response = currentSession.responses.find(
          r => r.questionId === questionId
        );

        return response?.response || '';
      },

      hasUnsavedChanges: () => {
        const { currentSession } = get();
        if (!currentSession) return false;

        // Consider unsaved if there's a current session with responses
        return currentSession.responses.length > 0 && !currentSession.isComplete;
      },

      hasActiveSession: () => {
        const { currentSession } = get();
        return currentSession !== null && !currentSession.isComplete;
      },
    }),
    {
      name: 'one2one-session',
      version: 1,

      // Validate state when rehydrating from localStorage
      onRehydrateStorage: () => (state) => {
        if (!state) return;

        // Validate currentSession
        if (state.currentSession) {
          const session = state.currentSession;

          // Ensure responses is a valid array
          if (!Array.isArray(session.responses)) {
            session.responses = [];
          }

          // Ensure currentQuestionIndex is within bounds (0-6)
          if (
            typeof session.currentQuestionIndex !== 'number' ||
            session.currentQuestionIndex < 0
          ) {
            session.currentQuestionIndex = 0;
          } else if (session.currentQuestionIndex > 6) {
            session.currentQuestionIndex = 6;
          }

          // Validate each response
          session.responses = session.responses.filter(
            r =>
              typeof r.questionId === 'number' &&
              r.questionId >= 1 &&
              r.questionId <= 7 &&
              typeof r.response === 'string'
          );
        }

        // Ensure sessionHistory is a valid array
        if (!Array.isArray(state.sessionHistory)) {
          state.sessionHistory = [];
        }

        // Reset loading states
        state.isLoadingPassage = false;
        state.passageError = null;
      },
    }
  )
);
