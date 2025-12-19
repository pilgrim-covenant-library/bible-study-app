import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from 'firebase/auth';
import {
  type AppUser,
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  signOut as firebaseSignOut,
  getUserData,
  onAuthChange,
  isFirebaseAvailable,
} from '@/lib/firebase';

export { isFirebaseAvailable };

interface AuthState {
  user: AppUser | null;
  firebaseUser: User | null;
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;

  initialize: () => () => void;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      firebaseUser: null,
      isLoading: false,
      isInitialized: false,
      error: null,

      initialize: () => {
        if (!isFirebaseAvailable()) {
          set({
            firebaseUser: null,
            user: null,
            isLoading: false,
            isInitialized: true,
          });
          return () => {};
        }

        const unsubscribe = onAuthChange(async (firebaseUser) => {
          if (firebaseUser) {
            try {
              const userData = await getUserData(firebaseUser.uid);
              set({
                firebaseUser,
                user: userData,
                isLoading: false,
                isInitialized: true,
              });
            } catch (error) {
              console.error('Error fetching user data:', error);
              set({
                firebaseUser,
                user: null,
                isLoading: false,
                isInitialized: true,
              });
            }
          } else {
            set({
              firebaseUser: null,
              user: null,
              isLoading: false,
              isInitialized: true,
            });
          }
        });

        return unsubscribe;
      },

      signUp: async (email, password, displayName) => {
        set({ isLoading: true, error: null });
        try {
          const user = await signUpWithEmail(email, password, displayName);
          set({ user, isLoading: false });
        } catch (error: unknown) {
          const message = error instanceof Error ? error.message : 'Sign up failed';
          set({ error: message, isLoading: false });
          throw error;
        }
      },

      signIn: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const user = await signInWithEmail(email, password);
          set({ user, isLoading: false });
        } catch (error: unknown) {
          const message = error instanceof Error ? error.message : 'Sign in failed';
          set({ error: message, isLoading: false });
          throw error;
        }
      },

      signInGoogle: async () => {
        set({ isLoading: true, error: null });
        try {
          const user = await signInWithGoogle();
          set({ user, isLoading: false });
        } catch (error: unknown) {
          const message = error instanceof Error ? error.message : 'Google sign in failed';
          set({ error: message, isLoading: false });
          throw error;
        }
      },

      signOut: async () => {
        set({ isLoading: true, error: null });
        try {
          await firebaseSignOut();
          set({ user: null, firebaseUser: null, isLoading: false });
        } catch (error: unknown) {
          const message = error instanceof Error ? error.message : 'Sign out failed';
          set({ error: message, isLoading: false });
          throw error;
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'bible-study-auth',
      partialize: () => ({}), // Don't persist sensitive auth data
    }
  )
);
