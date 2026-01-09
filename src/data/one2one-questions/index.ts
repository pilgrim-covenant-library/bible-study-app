/**
 * One2One Bible Study Questions Data Loader
 *
 * Provides passage-specific questions for each Bible chapter
 * following Andrew Cornes' 7-question methodology.
 */

// Question types
export interface ChapterQuestion {
  id: number;
  title: string;
  instruction: string;
  tips: string[];
  focusVerse?: string;
}

export interface ChapterQuestions {
  bookId: string;
  bookName: string;
  chapter: number;
  chapterTitle: string;
  questions: ChapterQuestion[];
}

export interface BookQuestions {
  bookId: string;
  bookName: string;
  totalChapters: number;
  chapters: ChapterQuestions[];
}

// Default questions based on Andrew Cornes' framework
// Used as fallback when custom questions aren't generated yet
export const DEFAULT_QUESTIONS: Omit<ChapterQuestion, 'focusVerse'>[] = [
  {
    id: 1,
    title: 'Read Aloud',
    instruction: 'Take turns reading the passage aloud together.',
    tips: [
      'Read slowly and clearly',
      'Pause if something strikes you',
      'Pay attention to repeated words or phrases'
    ]
  },
  {
    id: 2,
    title: 'Summary',
    instruction: 'In your own words, summarize what this passage is about.',
    tips: [
      'Keep it brief - just the main points',
      'Try to capture the flow of the narrative or argument',
      "Don't worry about getting it perfect"
    ]
  },
  {
    id: 3,
    title: 'Best Bit',
    instruction: "What stood out to you the most? What's the 'best bit'?",
    tips: [
      'Share what personally resonated with you',
      "There's no wrong answer - it's about what struck you",
      'Listen carefully to what your partner shares'
    ]
  },
  {
    id: 4,
    title: 'Main Point',
    instruction: 'What is the main point or central message of this passage?',
    tips: [
      'Think about what the author is trying to communicate',
      'Consider the context - what comes before and after',
      'Look for the big idea, not just interesting details'
    ]
  },
  {
    id: 5,
    title: 'Difficulties',
    instruction: 'What difficulties or questions do you have about this passage?',
    tips: [
      "It's okay not to understand everything",
      'Share honestly about what confuses you',
      "Wrestling with the text is part of studying it"
    ]
  },
  {
    id: 6,
    title: 'Application',
    instruction: 'What will you do about it? How will you apply this to your life?',
    tips: [
      'Be specific and practical',
      'Think about this week, not just in general',
      'Consider attitudes, relationships, and actions'
    ]
  },
  {
    id: 7,
    title: 'Prayer',
    instruction: "Pray together about what you've learned and your applications.",
    tips: [
      'Thank God for what you learned',
      "Pray for each other's applications",
      'Ask for help to live out what you discovered'
    ]
  }
];

// Cache for loaded book questions
const questionsCache: Map<string, BookQuestions> = new Map();

/**
 * Get questions for a specific chapter
 * Returns custom questions if available, otherwise default questions
 */
export async function getChapterQuestions(
  bookId: string,
  chapter: number
): Promise<ChapterQuestions> {
  // Try to load book questions
  const bookQuestions = await loadBookQuestions(bookId);

  if (bookQuestions) {
    const chapterData = bookQuestions.chapters.find(c => c.chapter === chapter);
    if (chapterData) {
      return chapterData;
    }
  }

  // Fall back to default questions
  return {
    bookId,
    bookName: formatBookName(bookId),
    chapter,
    chapterTitle: `Chapter ${chapter}`,
    questions: DEFAULT_QUESTIONS.map(q => ({ ...q, focusVerse: undefined }))
  };
}

/**
 * Load all questions for a book
 */
export async function loadBookQuestions(bookId: string): Promise<BookQuestions | null> {
  // Check cache first
  if (questionsCache.has(bookId)) {
    return questionsCache.get(bookId)!;
  }

  try {
    // Dynamic import of the JSON file
    const data = await import(`./${bookId}.json`);
    questionsCache.set(bookId, data.default || data);
    return data.default || data;
  } catch {
    // File doesn't exist yet - questions not generated
    return null;
  }
}

/**
 * Check if custom questions exist for a book
 */
export function hasCustomQuestions(bookId: string): boolean {
  return questionsCache.has(bookId);
}

/**
 * Format book ID to display name
 */
function formatBookName(bookId: string): string {
  return bookId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Export list of books with chapter counts
export const BIBLE_BOOKS = [
  // Old Testament
  { id: 'genesis', name: 'Genesis', chapters: 50, testament: 'OT' },
  { id: 'exodus', name: 'Exodus', chapters: 40, testament: 'OT' },
  { id: 'leviticus', name: 'Leviticus', chapters: 27, testament: 'OT' },
  { id: 'numbers', name: 'Numbers', chapters: 36, testament: 'OT' },
  { id: 'deuteronomy', name: 'Deuteronomy', chapters: 34, testament: 'OT' },
  { id: 'joshua', name: 'Joshua', chapters: 24, testament: 'OT' },
  { id: 'judges', name: 'Judges', chapters: 21, testament: 'OT' },
  { id: 'ruth', name: 'Ruth', chapters: 4, testament: 'OT' },
  { id: '1-samuel', name: '1 Samuel', chapters: 31, testament: 'OT' },
  { id: '2-samuel', name: '2 Samuel', chapters: 24, testament: 'OT' },
  { id: '1-kings', name: '1 Kings', chapters: 22, testament: 'OT' },
  { id: '2-kings', name: '2 Kings', chapters: 25, testament: 'OT' },
  { id: '1-chronicles', name: '1 Chronicles', chapters: 29, testament: 'OT' },
  { id: '2-chronicles', name: '2 Chronicles', chapters: 36, testament: 'OT' },
  { id: 'ezra', name: 'Ezra', chapters: 10, testament: 'OT' },
  { id: 'nehemiah', name: 'Nehemiah', chapters: 13, testament: 'OT' },
  { id: 'esther', name: 'Esther', chapters: 10, testament: 'OT' },
  { id: 'job', name: 'Job', chapters: 42, testament: 'OT' },
  { id: 'psalms', name: 'Psalms', chapters: 150, testament: 'OT' },
  { id: 'proverbs', name: 'Proverbs', chapters: 31, testament: 'OT' },
  { id: 'ecclesiastes', name: 'Ecclesiastes', chapters: 12, testament: 'OT' },
  { id: 'song-of-solomon', name: 'Song of Solomon', chapters: 8, testament: 'OT' },
  { id: 'isaiah', name: 'Isaiah', chapters: 66, testament: 'OT' },
  { id: 'jeremiah', name: 'Jeremiah', chapters: 52, testament: 'OT' },
  { id: 'lamentations', name: 'Lamentations', chapters: 5, testament: 'OT' },
  { id: 'ezekiel', name: 'Ezekiel', chapters: 48, testament: 'OT' },
  { id: 'daniel', name: 'Daniel', chapters: 12, testament: 'OT' },
  { id: 'hosea', name: 'Hosea', chapters: 14, testament: 'OT' },
  { id: 'joel', name: 'Joel', chapters: 3, testament: 'OT' },
  { id: 'amos', name: 'Amos', chapters: 9, testament: 'OT' },
  { id: 'obadiah', name: 'Obadiah', chapters: 1, testament: 'OT' },
  { id: 'jonah', name: 'Jonah', chapters: 4, testament: 'OT' },
  { id: 'micah', name: 'Micah', chapters: 7, testament: 'OT' },
  { id: 'nahum', name: 'Nahum', chapters: 3, testament: 'OT' },
  { id: 'habakkuk', name: 'Habakkuk', chapters: 3, testament: 'OT' },
  { id: 'zephaniah', name: 'Zephaniah', chapters: 3, testament: 'OT' },
  { id: 'haggai', name: 'Haggai', chapters: 2, testament: 'OT' },
  { id: 'zechariah', name: 'Zechariah', chapters: 14, testament: 'OT' },
  { id: 'malachi', name: 'Malachi', chapters: 4, testament: 'OT' },
  // New Testament
  { id: 'matthew', name: 'Matthew', chapters: 28, testament: 'NT' },
  { id: 'mark', name: 'Mark', chapters: 16, testament: 'NT' },
  { id: 'luke', name: 'Luke', chapters: 24, testament: 'NT' },
  { id: 'john', name: 'John', chapters: 21, testament: 'NT' },
  { id: 'acts', name: 'Acts', chapters: 28, testament: 'NT' },
  { id: 'romans', name: 'Romans', chapters: 16, testament: 'NT' },
  { id: '1-corinthians', name: '1 Corinthians', chapters: 16, testament: 'NT' },
  { id: '2-corinthians', name: '2 Corinthians', chapters: 13, testament: 'NT' },
  { id: 'galatians', name: 'Galatians', chapters: 6, testament: 'NT' },
  { id: 'ephesians', name: 'Ephesians', chapters: 6, testament: 'NT' },
  { id: 'philippians', name: 'Philippians', chapters: 4, testament: 'NT' },
  { id: 'colossians', name: 'Colossians', chapters: 4, testament: 'NT' },
  { id: '1-thessalonians', name: '1 Thessalonians', chapters: 5, testament: 'NT' },
  { id: '2-thessalonians', name: '2 Thessalonians', chapters: 3, testament: 'NT' },
  { id: '1-timothy', name: '1 Timothy', chapters: 6, testament: 'NT' },
  { id: '2-timothy', name: '2 Timothy', chapters: 4, testament: 'NT' },
  { id: 'titus', name: 'Titus', chapters: 3, testament: 'NT' },
  { id: 'philemon', name: 'Philemon', chapters: 1, testament: 'NT' },
  { id: 'hebrews', name: 'Hebrews', chapters: 13, testament: 'NT' },
  { id: 'james', name: 'James', chapters: 5, testament: 'NT' },
  { id: '1-peter', name: '1 Peter', chapters: 5, testament: 'NT' },
  { id: '2-peter', name: '2 Peter', chapters: 3, testament: 'NT' },
  { id: '1-john', name: '1 John', chapters: 5, testament: 'NT' },
  { id: '2-john', name: '2 John', chapters: 1, testament: 'NT' },
  { id: '3-john', name: '3 John', chapters: 1, testament: 'NT' },
  { id: 'jude', name: 'Jude', chapters: 1, testament: 'NT' },
  { id: 'revelation', name: 'Revelation', chapters: 22, testament: 'NT' },
] as const;

export type BibleBook = (typeof BIBLE_BOOKS)[number];
