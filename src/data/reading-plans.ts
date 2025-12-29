/**
 * Bible Reading Plans
 *
 * Various structured reading plans to guide users through Scripture.
 * Each plan provides a systematic approach to reading the Bible.
 */

import { BIBLE_BOOK_SUMMARIES } from './bible-summaries';

export interface ReadingDay {
  day: number;
  readings: {
    bookId: string;
    chapters: number[];
  }[];
  description?: string;
}

export interface ReadingPlan {
  id: string;
  name: string;
  description: string;
  duration: string; // e.g., "1 year", "90 days"
  durationDays: number;
  category: 'chronological' | 'thematic' | 'canonical' | 'overview';
  difficulty: 'easy' | 'medium' | 'intensive';
  chaptersPerDay: string; // e.g., "3-4 chapters"
  features: string[];
  getDayReadings: (day: number) => ReadingDay | null;
}

// Helper to get book info
function getBook(bookId: string) {
  return BIBLE_BOOK_SUMMARIES.find(b => b.id === bookId);
}

// Get all books in canonical order
const CANONICAL_ORDER = BIBLE_BOOK_SUMMARIES.map(b => b.id);

// Old Testament books
const OT_BOOKS = BIBLE_BOOK_SUMMARIES.filter(b => b.testament === 'old').map(b => b.id);

// New Testament books
const NT_BOOKS = BIBLE_BOOK_SUMMARIES.filter(b => b.testament === 'new').map(b => b.id);

// Chapter counts for each book
const CHAPTER_COUNTS: Record<string, number> = {
  genesis: 50, exodus: 40, leviticus: 27, numbers: 36, deuteronomy: 34,
  joshua: 24, judges: 21, ruth: 4, '1-samuel': 31, '2-samuel': 24,
  '1-kings': 22, '2-kings': 25, '1-chronicles': 29, '2-chronicles': 36,
  ezra: 10, nehemiah: 13, esther: 10, job: 42, psalms: 150,
  proverbs: 31, ecclesiastes: 12, 'song-of-solomon': 8, isaiah: 66,
  jeremiah: 52, lamentations: 5, ezekiel: 48, daniel: 12, hosea: 14,
  joel: 3, amos: 9, obadiah: 1, jonah: 4, micah: 7, nahum: 3,
  habakkuk: 3, zephaniah: 3, haggai: 2, zechariah: 14, malachi: 4,
  matthew: 28, mark: 16, luke: 24, john: 21, acts: 28,
  romans: 16, '1-corinthians': 16, '2-corinthians': 13, galatians: 6,
  ephesians: 6, philippians: 4, colossians: 4, '1-thessalonians': 5,
  '2-thessalonians': 3, '1-timothy': 6, '2-timothy': 4, titus: 3,
  philemon: 1, hebrews: 13, james: 5, '1-peter': 5, '2-peter': 3,
  '1-john': 5, '2-john': 1, '3-john': 1, jude: 1, revelation: 22,
};

// Total chapters in the Bible
const TOTAL_CHAPTERS = Object.values(CHAPTER_COUNTS).reduce((a, b) => a + b, 0);

/**
 * One Year Canonical Plan
 * Read through the Bible in canonical order over 365 days
 */
function createCanonicalYearPlan(): ReadingPlan {
  const chaptersPerDay = Math.ceil(TOTAL_CHAPTERS / 365); // ~3.25 chapters/day

  // Build a flat list of all chapters
  const allChapters: { bookId: string; chapter: number }[] = [];
  for (const bookId of CANONICAL_ORDER) {
    const count = CHAPTER_COUNTS[bookId] || 0;
    for (let ch = 1; ch <= count; ch++) {
      allChapters.push({ bookId, chapter: ch });
    }
  }

  return {
    id: 'canonical-year',
    name: 'One Year Bible',
    description: 'Read through the entire Bible in one year following the canonical order from Genesis to Revelation. A comprehensive journey through all 66 books.',
    duration: '1 year',
    durationDays: 365,
    category: 'canonical',
    difficulty: 'medium',
    chaptersPerDay: '3-4 chapters',
    features: [
      'Complete Bible coverage',
      'Follows traditional book order',
      'Balanced daily reading',
      'Great for first-time readers',
    ],
    getDayReadings: (day: number) => {
      if (day < 1 || day > 365) return null;

      const startIdx = (day - 1) * chaptersPerDay;
      const endIdx = Math.min(startIdx + chaptersPerDay, allChapters.length);

      if (startIdx >= allChapters.length) return null;

      // Group chapters by book
      const readings: Map<string, number[]> = new Map();
      for (let i = startIdx; i < endIdx; i++) {
        const { bookId, chapter } = allChapters[i];
        if (!readings.has(bookId)) {
          readings.set(bookId, []);
        }
        readings.get(bookId)!.push(chapter);
      }

      return {
        day,
        readings: Array.from(readings.entries()).map(([bookId, chapters]) => ({
          bookId,
          chapters,
        })),
      };
    },
  };
}

/**
 * New Testament in 90 Days
 * Focused reading through the New Testament
 */
function createNT90DaysPlan(): ReadingPlan {
  const ntChapters: { bookId: string; chapter: number }[] = [];
  for (const bookId of NT_BOOKS) {
    const count = CHAPTER_COUNTS[bookId] || 0;
    for (let ch = 1; ch <= count; ch++) {
      ntChapters.push({ bookId, chapter: ch });
    }
  }

  const chaptersPerDay = Math.ceil(ntChapters.length / 90); // ~3 chapters/day

  return {
    id: 'nt-90-days',
    name: 'New Testament in 90 Days',
    description: 'Focus on the New Testament with a concentrated 90-day reading plan. Perfect for deepening your understanding of Christ\'s life, the early church, and apostolic teaching.',
    duration: '90 days',
    durationDays: 90,
    category: 'thematic',
    difficulty: 'easy',
    chaptersPerDay: '3 chapters',
    features: [
      'New Testament focus',
      'Manageable daily commitment',
      'Ideal for new believers',
      'Complete in 3 months',
    ],
    getDayReadings: (day: number) => {
      if (day < 1 || day > 90) return null;

      const startIdx = (day - 1) * chaptersPerDay;
      const endIdx = Math.min(startIdx + chaptersPerDay, ntChapters.length);

      if (startIdx >= ntChapters.length) return null;

      const readings: Map<string, number[]> = new Map();
      for (let i = startIdx; i < endIdx; i++) {
        const { bookId, chapter } = ntChapters[i];
        if (!readings.has(bookId)) {
          readings.set(bookId, []);
        }
        readings.get(bookId)!.push(chapter);
      }

      return {
        day,
        readings: Array.from(readings.entries()).map(([bookId, chapters]) => ({
          bookId,
          chapters,
        })),
      };
    },
  };
}

/**
 * Psalms & Proverbs Monthly
 * Read through Psalms and Proverbs in one month
 */
function createPsalmsProverbsMonthlyPlan(): ReadingPlan {
  return {
    id: 'psalms-proverbs-monthly',
    name: 'Psalms & Proverbs Monthly',
    description: 'A devotional plan combining 5 Psalms and 1 Proverb chapter each day. Complete both books monthly and repeat throughout the year for deep meditation on wisdom and worship.',
    duration: '30-31 days',
    durationDays: 31,
    category: 'thematic',
    difficulty: 'easy',
    chaptersPerDay: '5-6 chapters',
    features: [
      'Daily wisdom and worship',
      'Repeatable each month',
      'Perfect devotional companion',
      'Meditative reading pace',
    ],
    getDayReadings: (day: number) => {
      if (day < 1 || day > 31) return null;

      // Psalms: 5 per day (150 total / 30 days)
      // Proverbs: 1 per day (31 total / 31 days)
      const psalms: number[] = [];
      for (let i = 0; i < 5; i++) {
        const psalmNum = (day - 1) * 5 + i + 1;
        if (psalmNum <= 150) {
          psalms.push(psalmNum);
        }
      }

      const readings: { bookId: string; chapters: number[] }[] = [];

      if (psalms.length > 0) {
        readings.push({ bookId: 'psalms', chapters: psalms });
      }

      if (day <= 31) {
        readings.push({ bookId: 'proverbs', chapters: [day] });
      }

      return {
        day,
        readings,
        description: `Day ${day}: Psalms ${psalms.join(', ')} + Proverbs ${day}`,
      };
    },
  };
}

/**
 * Gospels Study
 * Read all four Gospels in 30 days
 */
function createGospelsPlan(): ReadingPlan {
  const gospelChapters: { bookId: string; chapter: number }[] = [];
  for (const bookId of ['matthew', 'mark', 'luke', 'john']) {
    const count = CHAPTER_COUNTS[bookId] || 0;
    for (let ch = 1; ch <= count; ch++) {
      gospelChapters.push({ bookId, chapter: ch });
    }
  }

  const chaptersPerDay = Math.ceil(gospelChapters.length / 30); // ~3 chapters/day

  return {
    id: 'gospels-30-days',
    name: 'Four Gospels in 30 Days',
    description: 'Immerse yourself in the life and ministry of Jesus Christ by reading all four Gospel accounts in one month. See Jesus through the eyes of Matthew, Mark, Luke, and John.',
    duration: '30 days',
    durationDays: 30,
    category: 'thematic',
    difficulty: 'easy',
    chaptersPerDay: '3 chapters',
    features: [
      'Focus on Christ\'s life',
      'Compare Gospel perspectives',
      'Foundation for faith',
      'Quick completion',
    ],
    getDayReadings: (day: number) => {
      if (day < 1 || day > 30) return null;

      const startIdx = (day - 1) * chaptersPerDay;
      const endIdx = Math.min(startIdx + chaptersPerDay, gospelChapters.length);

      if (startIdx >= gospelChapters.length) return null;

      const readings: Map<string, number[]> = new Map();
      for (let i = startIdx; i < endIdx; i++) {
        const { bookId, chapter } = gospelChapters[i];
        if (!readings.has(bookId)) {
          readings.set(bookId, []);
        }
        readings.get(bookId)!.push(chapter);
      }

      return {
        day,
        readings: Array.from(readings.entries()).map(([bookId, chapters]) => ({
          bookId,
          chapters,
        })),
      };
    },
  };
}

/**
 * Pauline Epistles Deep Dive
 * Study Paul's letters in 45 days
 */
function createPaulineEpistlesPlan(): ReadingPlan {
  const paulineBooks = [
    'romans', '1-corinthians', '2-corinthians', 'galatians', 'ephesians',
    'philippians', 'colossians', '1-thessalonians', '2-thessalonians',
    '1-timothy', '2-timothy', 'titus', 'philemon',
  ];

  const paulineChapters: { bookId: string; chapter: number }[] = [];
  for (const bookId of paulineBooks) {
    const count = CHAPTER_COUNTS[bookId] || 0;
    for (let ch = 1; ch <= count; ch++) {
      paulineChapters.push({ bookId, chapter: ch });
    }
  }

  const chaptersPerDay = Math.ceil(paulineChapters.length / 45); // ~2 chapters/day

  return {
    id: 'pauline-epistles-45-days',
    name: 'Pauline Epistles Deep Dive',
    description: 'Study all 13 letters written by the Apostle Paul. Explore justification, sanctification, ecclesiology, and practical Christian living through Paul\'s inspired teaching.',
    duration: '45 days',
    durationDays: 45,
    category: 'thematic',
    difficulty: 'medium',
    chaptersPerDay: '2 chapters',
    features: [
      'Pauline theology focus',
      'Doctrinal depth',
      'Church life principles',
      'Great for theology students',
    ],
    getDayReadings: (day: number) => {
      if (day < 1 || day > 45) return null;

      const startIdx = (day - 1) * chaptersPerDay;
      const endIdx = Math.min(startIdx + chaptersPerDay, paulineChapters.length);

      if (startIdx >= paulineChapters.length) return null;

      const readings: Map<string, number[]> = new Map();
      for (let i = startIdx; i < endIdx; i++) {
        const { bookId, chapter } = paulineChapters[i];
        if (!readings.has(bookId)) {
          readings.set(bookId, []);
        }
        readings.get(bookId)!.push(chapter);
      }

      return {
        day,
        readings: Array.from(readings.entries()).map(([bookId, chapters]) => ({
          bookId,
          chapters,
        })),
      };
    },
  };
}

/**
 * Prophets Overview
 * Read all prophetic books in 60 days
 */
function createProphetsPlan(): ReadingPlan {
  const propheticBooks = [
    'isaiah', 'jeremiah', 'lamentations', 'ezekiel', 'daniel',
    'hosea', 'joel', 'amos', 'obadiah', 'jonah', 'micah',
    'nahum', 'habakkuk', 'zephaniah', 'haggai', 'zechariah', 'malachi',
  ];

  const propheticChapters: { bookId: string; chapter: number }[] = [];
  for (const bookId of propheticBooks) {
    const count = CHAPTER_COUNTS[bookId] || 0;
    for (let ch = 1; ch <= count; ch++) {
      propheticChapters.push({ bookId, chapter: ch });
    }
  }

  const chaptersPerDay = Math.ceil(propheticChapters.length / 60); // ~4 chapters/day

  return {
    id: 'prophets-60-days',
    name: 'Prophets in 60 Days',
    description: 'Journey through all 17 prophetic books of the Old Testament. Discover God\'s messages of judgment, hope, and Messianic promise through His prophets.',
    duration: '60 days',
    durationDays: 60,
    category: 'thematic',
    difficulty: 'intensive',
    chaptersPerDay: '4-5 chapters',
    features: [
      'All prophetic literature',
      'Messianic prophecies',
      'Historical context',
      'Redemptive-historical focus',
    ],
    getDayReadings: (day: number) => {
      if (day < 1 || day > 60) return null;

      const startIdx = (day - 1) * chaptersPerDay;
      const endIdx = Math.min(startIdx + chaptersPerDay, propheticChapters.length);

      if (startIdx >= propheticChapters.length) return null;

      const readings: Map<string, number[]> = new Map();
      for (let i = startIdx; i < endIdx; i++) {
        const { bookId, chapter } = propheticChapters[i];
        if (!readings.has(bookId)) {
          readings.set(bookId, []);
        }
        readings.get(bookId)!.push(chapter);
      }

      return {
        day,
        readings: Array.from(readings.entries()).map(([bookId, chapters]) => ({
          bookId,
          chapters,
        })),
      };
    },
  };
}

// Export all reading plans
export const READING_PLANS: ReadingPlan[] = [
  createCanonicalYearPlan(),
  createNT90DaysPlan(),
  createGospelsPlan(),
  createPsalmsProverbsMonthlyPlan(),
  createPaulineEpistlesPlan(),
  createProphetsPlan(),
];

// Helper to get a plan by ID
export function getPlanById(id: string): ReadingPlan | undefined {
  return READING_PLANS.find(plan => plan.id === id);
}

// Get plans by category
export function getPlansByCategory(category: ReadingPlan['category']): ReadingPlan[] {
  return READING_PLANS.filter(plan => plan.category === category);
}

// Get plans by difficulty
export function getPlansByDifficulty(difficulty: ReadingPlan['difficulty']): ReadingPlan[] {
  return READING_PLANS.filter(plan => plan.difficulty === difficulty);
}
