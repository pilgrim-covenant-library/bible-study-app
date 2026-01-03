import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Bookmarks Store
 *
 * Allows users to save favorite Bible chapters for quick access.
 * Bookmarks are persisted to localStorage.
 */

export interface Bookmark {
  bookId: string;
  chapter: number;
  bookName: string;
  chapterTitle: string;
  note?: string; // Optional personal note
  createdAt: string; // ISO date string
}

interface BookmarksState {
  bookmarks: Bookmark[];

  // Actions
  addBookmark: (bookmark: Omit<Bookmark, 'createdAt'>) => void;
  removeBookmark: (bookId: string, chapter: number) => void;
  updateBookmarkNote: (bookId: string, chapter: number, note: string) => void;
  isBookmarked: (bookId: string, chapter: number) => boolean;
  getBookmark: (bookId: string, chapter: number) => Bookmark | undefined;

  // Query helpers
  getBookmarksForBook: (bookId: string) => Bookmark[];
  getRecentBookmarks: (limit: number) => Bookmark[];
  getTotalBookmarks: () => number;

  // Bulk actions
  clearAllBookmarks: () => void;
}

export const useBookmarksStore = create<BookmarksState>()(
  persist(
    (set, get) => ({
      bookmarks: [],

      addBookmark: (bookmark) => {
        const state = get();
        const exists = state.bookmarks.some(
          b => b.bookId === bookmark.bookId && b.chapter === bookmark.chapter
        );

        if (!exists) {
          set({
            bookmarks: [
              {
                ...bookmark,
                createdAt: new Date().toISOString()
              },
              ...state.bookmarks
            ]
          });
        }
      },

      removeBookmark: (bookId: string, chapter: number) => {
        set(state => ({
          bookmarks: state.bookmarks.filter(
            b => !(b.bookId === bookId && b.chapter === chapter)
          )
        }));
      },

      updateBookmarkNote: (bookId: string, chapter: number, note: string) => {
        set(state => ({
          bookmarks: state.bookmarks.map(b =>
            b.bookId === bookId && b.chapter === chapter
              ? { ...b, note: note || undefined }
              : b
          )
        }));
      },

      isBookmarked: (bookId: string, chapter: number) => {
        return get().bookmarks.some(
          b => b.bookId === bookId && b.chapter === chapter
        );
      },

      getBookmark: (bookId: string, chapter: number) => {
        return get().bookmarks.find(
          b => b.bookId === bookId && b.chapter === chapter
        );
      },

      getBookmarksForBook: (bookId: string) => {
        return get().bookmarks
          .filter(b => b.bookId === bookId)
          .sort((a, b) => a.chapter - b.chapter);
      },

      getRecentBookmarks: (limit: number) => {
        return [...get().bookmarks]
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, limit);
      },

      getTotalBookmarks: () => {
        return get().bookmarks.length;
      },

      clearAllBookmarks: () => {
        set({ bookmarks: [] });
      }
    }),
    {
      name: 'bible-bookmarks',
      version: 1,
      // Validate rehydrated state to prevent corruption issues
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Ensure bookmarks is a valid array
          if (!Array.isArray(state.bookmarks)) {
            state.bookmarks = [];
          }
          // Filter out invalid entries
          state.bookmarks = state.bookmarks.filter(
            (b) => b && typeof b.bookId === 'string' && typeof b.chapter === 'number' && b.createdAt
          );
        }
      },
    }
  )
);
