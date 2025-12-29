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

// Get all books in canonical order
const CANONICAL_ORDER = BIBLE_BOOK_SUMMARIES.map(b => b.id);

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

/**
 * Chronological Bible Reading Plan
 * Read the Bible in approximate historical order over one year
 * Based on scholarly consensus of when events occurred
 */
function createChronologicalPlan(): ReadingPlan {
  // Chronological reading order - grouping chapters by approximate historical period
  // This ordering follows when events happened, not when books were written
  const chronologicalReadings: { bookId: string; chapters: number[] }[] = [
    // Creation & Early Patriarchs
    { bookId: 'genesis', chapters: [1, 2, 3, 4, 5] },
    { bookId: 'genesis', chapters: [6, 7, 8, 9, 10, 11] },
    // Job (earliest book, patriarchal period)
    { bookId: 'job', chapters: [1, 2, 3, 4, 5] },
    { bookId: 'job', chapters: [6, 7, 8, 9, 10] },
    { bookId: 'job', chapters: [11, 12, 13, 14, 15] },
    { bookId: 'job', chapters: [16, 17, 18, 19, 20] },
    { bookId: 'job', chapters: [21, 22, 23, 24, 25] },
    { bookId: 'job', chapters: [26, 27, 28, 29, 30] },
    { bookId: 'job', chapters: [31, 32, 33, 34, 35] },
    { bookId: 'job', chapters: [36, 37, 38, 39, 40, 41, 42] },
    // Abraham, Isaac, Jacob
    { bookId: 'genesis', chapters: [12, 13, 14, 15] },
    { bookId: 'genesis', chapters: [16, 17, 18, 19] },
    { bookId: 'genesis', chapters: [20, 21, 22, 23] },
    { bookId: 'genesis', chapters: [24, 25, 26] },
    { bookId: 'genesis', chapters: [27, 28, 29, 30] },
    { bookId: 'genesis', chapters: [31, 32, 33, 34] },
    { bookId: 'genesis', chapters: [35, 36, 37] },
    { bookId: 'genesis', chapters: [38, 39, 40, 41] },
    { bookId: 'genesis', chapters: [42, 43, 44, 45] },
    { bookId: 'genesis', chapters: [46, 47, 48, 49, 50] },
    // Exodus from Egypt
    { bookId: 'exodus', chapters: [1, 2, 3, 4] },
    { bookId: 'exodus', chapters: [5, 6, 7, 8] },
    { bookId: 'exodus', chapters: [9, 10, 11, 12] },
    { bookId: 'exodus', chapters: [13, 14, 15, 16] },
    { bookId: 'exodus', chapters: [17, 18, 19, 20] },
    { bookId: 'exodus', chapters: [21, 22, 23, 24] },
    { bookId: 'exodus', chapters: [25, 26, 27] },
    { bookId: 'exodus', chapters: [28, 29, 30] },
    { bookId: 'exodus', chapters: [31, 32, 33, 34] },
    { bookId: 'exodus', chapters: [35, 36, 37, 38, 39, 40] },
    // Levitical Law (given during wilderness)
    { bookId: 'leviticus', chapters: [1, 2, 3, 4, 5] },
    { bookId: 'leviticus', chapters: [6, 7, 8, 9, 10] },
    { bookId: 'leviticus', chapters: [11, 12, 13, 14] },
    { bookId: 'leviticus', chapters: [15, 16, 17, 18] },
    { bookId: 'leviticus', chapters: [19, 20, 21, 22] },
    { bookId: 'leviticus', chapters: [23, 24, 25, 26, 27] },
    // Numbers - Wilderness wanderings
    { bookId: 'numbers', chapters: [1, 2, 3, 4] },
    { bookId: 'numbers', chapters: [5, 6, 7] },
    { bookId: 'numbers', chapters: [8, 9, 10, 11] },
    { bookId: 'numbers', chapters: [12, 13, 14, 15] },
    { bookId: 'numbers', chapters: [16, 17, 18, 19] },
    { bookId: 'numbers', chapters: [20, 21, 22] },
    { bookId: 'numbers', chapters: [23, 24, 25, 26] },
    { bookId: 'numbers', chapters: [27, 28, 29, 30] },
    { bookId: 'numbers', chapters: [31, 32, 33] },
    { bookId: 'numbers', chapters: [34, 35, 36] },
    // Deuteronomy - Moses' final speeches
    { bookId: 'deuteronomy', chapters: [1, 2, 3, 4] },
    { bookId: 'deuteronomy', chapters: [5, 6, 7, 8] },
    { bookId: 'deuteronomy', chapters: [9, 10, 11, 12] },
    { bookId: 'deuteronomy', chapters: [13, 14, 15, 16] },
    { bookId: 'deuteronomy', chapters: [17, 18, 19, 20] },
    { bookId: 'deuteronomy', chapters: [21, 22, 23, 24] },
    { bookId: 'deuteronomy', chapters: [25, 26, 27, 28] },
    { bookId: 'deuteronomy', chapters: [29, 30, 31] },
    { bookId: 'deuteronomy', chapters: [32, 33, 34] },
    // Conquest of Canaan
    { bookId: 'joshua', chapters: [1, 2, 3, 4, 5] },
    { bookId: 'joshua', chapters: [6, 7, 8, 9] },
    { bookId: 'joshua', chapters: [10, 11, 12] },
    { bookId: 'joshua', chapters: [13, 14, 15] },
    { bookId: 'joshua', chapters: [16, 17, 18, 19] },
    { bookId: 'joshua', chapters: [20, 21, 22] },
    { bookId: 'joshua', chapters: [23, 24] },
    // Period of Judges
    { bookId: 'judges', chapters: [1, 2, 3, 4] },
    { bookId: 'judges', chapters: [5, 6, 7, 8] },
    { bookId: 'judges', chapters: [9, 10, 11, 12] },
    { bookId: 'judges', chapters: [13, 14, 15, 16] },
    { bookId: 'judges', chapters: [17, 18, 19, 20, 21] },
    // Ruth (during Judges)
    { bookId: 'ruth', chapters: [1, 2, 3, 4] },
    // Samuel - Transition to Monarchy
    { bookId: '1-samuel', chapters: [1, 2, 3, 4, 5] },
    { bookId: '1-samuel', chapters: [6, 7, 8, 9, 10] },
    { bookId: '1-samuel', chapters: [11, 12, 13, 14, 15] },
    { bookId: '1-samuel', chapters: [16, 17, 18] },
    { bookId: '1-samuel', chapters: [19, 20, 21, 22] },
    { bookId: '1-samuel', chapters: [23, 24, 25, 26] },
    { bookId: '1-samuel', chapters: [27, 28, 29, 30, 31] },
    // David's Reign
    { bookId: '2-samuel', chapters: [1, 2, 3, 4, 5] },
    { bookId: '2-samuel', chapters: [6, 7, 8, 9, 10] },
    { bookId: 'psalms', chapters: [1, 2, 3, 4, 5, 6] }, // Davidic Psalms interspersed
    { bookId: '2-samuel', chapters: [11, 12, 13, 14] },
    { bookId: 'psalms', chapters: [51, 32] }, // Psalms of repentance
    { bookId: '2-samuel', chapters: [15, 16, 17, 18] },
    { bookId: '2-samuel', chapters: [19, 20, 21, 22] },
    { bookId: '2-samuel', chapters: [23, 24] },
    // More Psalms from David's era
    { bookId: 'psalms', chapters: [7, 8, 9, 10, 11, 12] },
    { bookId: 'psalms', chapters: [13, 14, 15, 16, 17, 18] },
    { bookId: 'psalms', chapters: [19, 20, 21, 22, 23, 24] },
    { bookId: 'psalms', chapters: [25, 26, 27, 28, 29, 30, 31] },
    // 1 Chronicles - David's history reviewed
    { bookId: '1-chronicles', chapters: [1, 2, 3] },
    { bookId: '1-chronicles', chapters: [4, 5, 6] },
    { bookId: '1-chronicles', chapters: [7, 8, 9, 10] },
    { bookId: '1-chronicles', chapters: [11, 12, 13, 14] },
    { bookId: '1-chronicles', chapters: [15, 16, 17] },
    { bookId: '1-chronicles', chapters: [18, 19, 20, 21] },
    { bookId: '1-chronicles', chapters: [22, 23, 24] },
    { bookId: '1-chronicles', chapters: [25, 26, 27] },
    { bookId: '1-chronicles', chapters: [28, 29] },
    // Solomon's Reign
    { bookId: '1-kings', chapters: [1, 2, 3, 4] },
    { bookId: '1-kings', chapters: [5, 6, 7, 8] },
    { bookId: '1-kings', chapters: [9, 10, 11] },
    { bookId: '2-chronicles', chapters: [1, 2, 3, 4] },
    { bookId: '2-chronicles', chapters: [5, 6, 7, 8, 9] },
    // Wisdom Literature (Solomon's era)
    { bookId: 'proverbs', chapters: [1, 2, 3, 4, 5] },
    { bookId: 'proverbs', chapters: [6, 7, 8, 9, 10] },
    { bookId: 'proverbs', chapters: [11, 12, 13, 14, 15] },
    { bookId: 'proverbs', chapters: [16, 17, 18, 19, 20] },
    { bookId: 'proverbs', chapters: [21, 22, 23, 24, 25] },
    { bookId: 'proverbs', chapters: [26, 27, 28, 29, 30, 31] },
    { bookId: 'ecclesiastes', chapters: [1, 2, 3, 4] },
    { bookId: 'ecclesiastes', chapters: [5, 6, 7, 8] },
    { bookId: 'ecclesiastes', chapters: [9, 10, 11, 12] },
    { bookId: 'song-of-solomon', chapters: [1, 2, 3, 4] },
    { bookId: 'song-of-solomon', chapters: [5, 6, 7, 8] },
    // Divided Kingdom - Israel & Judah
    { bookId: '1-kings', chapters: [12, 13, 14, 15] },
    { bookId: '1-kings', chapters: [16, 17, 18, 19] },
    { bookId: '1-kings', chapters: [20, 21, 22] },
    { bookId: '2-chronicles', chapters: [10, 11, 12, 13] },
    { bookId: '2-chronicles', chapters: [14, 15, 16, 17] },
    { bookId: '2-chronicles', chapters: [18, 19, 20] },
    { bookId: '2-kings', chapters: [1, 2, 3, 4] },
    { bookId: '2-kings', chapters: [5, 6, 7, 8] },
    { bookId: '2-chronicles', chapters: [21, 22, 23, 24] },
    { bookId: '2-kings', chapters: [9, 10, 11, 12] },
    // Prophets during Divided Kingdom
    { bookId: 'obadiah', chapters: [1] },
    { bookId: 'joel', chapters: [1, 2, 3] },
    { bookId: 'jonah', chapters: [1, 2, 3, 4] },
    { bookId: 'amos', chapters: [1, 2, 3, 4, 5] },
    { bookId: 'amos', chapters: [6, 7, 8, 9] },
    { bookId: 'hosea', chapters: [1, 2, 3, 4, 5] },
    { bookId: 'hosea', chapters: [6, 7, 8, 9, 10] },
    { bookId: 'hosea', chapters: [11, 12, 13, 14] },
    // More Kings/Chronicles
    { bookId: '2-kings', chapters: [13, 14, 15] },
    { bookId: '2-chronicles', chapters: [25, 26, 27] },
    // Isaiah begins prophesying
    { bookId: 'isaiah', chapters: [1, 2, 3, 4, 5, 6] },
    { bookId: 'isaiah', chapters: [7, 8, 9, 10, 11, 12] },
    { bookId: 'isaiah', chapters: [13, 14, 15, 16, 17] },
    { bookId: 'isaiah', chapters: [18, 19, 20, 21, 22] },
    { bookId: 'isaiah', chapters: [23, 24, 25, 26, 27] },
    { bookId: 'isaiah', chapters: [28, 29, 30, 31, 32] },
    { bookId: 'isaiah', chapters: [33, 34, 35] },
    // Micah (contemporary of Isaiah)
    { bookId: 'micah', chapters: [1, 2, 3, 4] },
    { bookId: 'micah', chapters: [5, 6, 7] },
    // Fall of Israel (722 BC) & Judah continues
    { bookId: '2-kings', chapters: [16, 17, 18] },
    { bookId: '2-chronicles', chapters: [28, 29, 30] },
    { bookId: 'isaiah', chapters: [36, 37, 38, 39] },
    { bookId: '2-kings', chapters: [19, 20] },
    { bookId: '2-chronicles', chapters: [31, 32] },
    // Later Isaiah prophecies
    { bookId: 'isaiah', chapters: [40, 41, 42, 43, 44] },
    { bookId: 'isaiah', chapters: [45, 46, 47, 48, 49] },
    { bookId: 'isaiah', chapters: [50, 51, 52, 53, 54, 55] },
    { bookId: 'isaiah', chapters: [56, 57, 58, 59, 60] },
    { bookId: 'isaiah', chapters: [61, 62, 63, 64, 65, 66] },
    // Nahum (fall of Nineveh prophesied)
    { bookId: 'nahum', chapters: [1, 2, 3] },
    // Reign of Josiah & later kings
    { bookId: '2-kings', chapters: [21, 22, 23] },
    { bookId: '2-chronicles', chapters: [33, 34, 35] },
    { bookId: 'zephaniah', chapters: [1, 2, 3] },
    { bookId: 'habakkuk', chapters: [1, 2, 3] },
    // Jeremiah begins
    { bookId: 'jeremiah', chapters: [1, 2, 3, 4, 5] },
    { bookId: 'jeremiah', chapters: [6, 7, 8, 9, 10] },
    { bookId: 'jeremiah', chapters: [11, 12, 13, 14, 15] },
    { bookId: 'jeremiah', chapters: [16, 17, 18, 19, 20] },
    { bookId: 'jeremiah', chapters: [21, 22, 23, 24, 25] },
    { bookId: 'jeremiah', chapters: [26, 27, 28, 29] },
    // Fall of Jerusalem approaching
    { bookId: '2-kings', chapters: [24, 25] },
    { bookId: '2-chronicles', chapters: [36] },
    { bookId: 'jeremiah', chapters: [30, 31, 32, 33] },
    { bookId: 'jeremiah', chapters: [34, 35, 36, 37, 38] },
    { bookId: 'jeremiah', chapters: [39, 40, 41, 42, 43] },
    { bookId: 'jeremiah', chapters: [44, 45, 46, 47, 48] },
    { bookId: 'jeremiah', chapters: [49, 50, 51, 52] },
    // Lamentations (after fall of Jerusalem)
    { bookId: 'lamentations', chapters: [1, 2, 3] },
    { bookId: 'lamentations', chapters: [4, 5] },
    // Exilic Psalms
    { bookId: 'psalms', chapters: [33, 34, 35, 36, 37] },
    { bookId: 'psalms', chapters: [38, 39, 40, 41, 42, 43] },
    { bookId: 'psalms', chapters: [44, 45, 46, 47, 48, 49, 50] },
    { bookId: 'psalms', chapters: [52, 53, 54, 55, 56, 57, 58] },
    { bookId: 'psalms', chapters: [59, 60, 61, 62, 63, 64, 65] },
    { bookId: 'psalms', chapters: [66, 67, 68, 69, 70] },
    { bookId: 'psalms', chapters: [71, 72, 73, 74, 75] },
    { bookId: 'psalms', chapters: [76, 77, 78] },
    { bookId: 'psalms', chapters: [79, 80, 81, 82, 83, 84, 85] },
    { bookId: 'psalms', chapters: [86, 87, 88, 89] },
    // Ezekiel in Babylon
    { bookId: 'ezekiel', chapters: [1, 2, 3, 4, 5] },
    { bookId: 'ezekiel', chapters: [6, 7, 8, 9, 10] },
    { bookId: 'ezekiel', chapters: [11, 12, 13, 14, 15] },
    { bookId: 'ezekiel', chapters: [16, 17, 18, 19] },
    { bookId: 'ezekiel', chapters: [20, 21, 22, 23] },
    { bookId: 'ezekiel', chapters: [24, 25, 26, 27] },
    { bookId: 'ezekiel', chapters: [28, 29, 30, 31, 32] },
    { bookId: 'ezekiel', chapters: [33, 34, 35, 36] },
    { bookId: 'ezekiel', chapters: [37, 38, 39] },
    { bookId: 'ezekiel', chapters: [40, 41, 42, 43] },
    { bookId: 'ezekiel', chapters: [44, 45, 46, 47, 48] },
    // Daniel in Babylon
    { bookId: 'daniel', chapters: [1, 2, 3, 4] },
    { bookId: 'daniel', chapters: [5, 6, 7, 8] },
    { bookId: 'daniel', chapters: [9, 10, 11, 12] },
    // Return from Exile
    { bookId: 'ezra', chapters: [1, 2, 3, 4, 5] },
    { bookId: 'ezra', chapters: [6, 7, 8, 9, 10] },
    { bookId: 'haggai', chapters: [1, 2] },
    { bookId: 'zechariah', chapters: [1, 2, 3, 4, 5] },
    { bookId: 'zechariah', chapters: [6, 7, 8, 9, 10] },
    { bookId: 'zechariah', chapters: [11, 12, 13, 14] },
    // Post-Exilic Psalms
    { bookId: 'psalms', chapters: [90, 91, 92, 93, 94, 95] },
    { bookId: 'psalms', chapters: [96, 97, 98, 99, 100] },
    { bookId: 'psalms', chapters: [101, 102, 103, 104, 105] },
    { bookId: 'psalms', chapters: [106, 107, 108, 109, 110] },
    { bookId: 'psalms', chapters: [111, 112, 113, 114, 115] },
    { bookId: 'psalms', chapters: [116, 117, 118, 119] },
    { bookId: 'psalms', chapters: [120, 121, 122, 123, 124, 125] },
    { bookId: 'psalms', chapters: [126, 127, 128, 129, 130, 131] },
    { bookId: 'psalms', chapters: [132, 133, 134, 135, 136] },
    { bookId: 'psalms', chapters: [137, 138, 139, 140, 141] },
    { bookId: 'psalms', chapters: [142, 143, 144, 145, 146] },
    { bookId: 'psalms', chapters: [147, 148, 149, 150] },
    // Esther (Persian period)
    { bookId: 'esther', chapters: [1, 2, 3, 4, 5] },
    { bookId: 'esther', chapters: [6, 7, 8, 9, 10] },
    // Nehemiah's reforms
    { bookId: 'nehemiah', chapters: [1, 2, 3, 4] },
    { bookId: 'nehemiah', chapters: [5, 6, 7] },
    { bookId: 'nehemiah', chapters: [8, 9, 10] },
    { bookId: 'nehemiah', chapters: [11, 12, 13] },
    // Malachi (last OT prophet)
    { bookId: 'malachi', chapters: [1, 2, 3, 4] },
    // === NEW TESTAMENT ===
    // Birth narratives
    { bookId: 'luke', chapters: [1, 2] },
    { bookId: 'matthew', chapters: [1, 2] },
    // John's Prologue & Early Ministry
    { bookId: 'john', chapters: [1] },
    { bookId: 'matthew', chapters: [3, 4] },
    { bookId: 'mark', chapters: [1] },
    { bookId: 'luke', chapters: [3, 4] },
    // Sermon on the Mount & Early Teaching
    { bookId: 'matthew', chapters: [5, 6, 7] },
    { bookId: 'matthew', chapters: [8, 9, 10] },
    { bookId: 'mark', chapters: [2, 3, 4] },
    { bookId: 'luke', chapters: [5, 6, 7] },
    { bookId: 'john', chapters: [2, 3, 4] },
    // Galilean Ministry
    { bookId: 'matthew', chapters: [11, 12, 13] },
    { bookId: 'mark', chapters: [5, 6] },
    { bookId: 'luke', chapters: [8, 9] },
    { bookId: 'john', chapters: [5, 6] },
    // Continued Ministry
    { bookId: 'matthew', chapters: [14, 15, 16] },
    { bookId: 'mark', chapters: [7, 8, 9] },
    { bookId: 'john', chapters: [7, 8, 9, 10] },
    // Later Ministry
    { bookId: 'matthew', chapters: [17, 18, 19, 20] },
    { bookId: 'mark', chapters: [10] },
    { bookId: 'luke', chapters: [10, 11, 12] },
    { bookId: 'luke', chapters: [13, 14, 15, 16] },
    { bookId: 'luke', chapters: [17, 18, 19] },
    { bookId: 'john', chapters: [11] },
    // Passion Week
    { bookId: 'matthew', chapters: [21, 22, 23] },
    { bookId: 'mark', chapters: [11, 12, 13] },
    { bookId: 'luke', chapters: [20, 21] },
    { bookId: 'john', chapters: [12] },
    { bookId: 'matthew', chapters: [24, 25, 26] },
    { bookId: 'mark', chapters: [14] },
    { bookId: 'luke', chapters: [22] },
    { bookId: 'john', chapters: [13, 14, 15, 16, 17] },
    // Crucifixion & Resurrection
    { bookId: 'matthew', chapters: [27, 28] },
    { bookId: 'mark', chapters: [15, 16] },
    { bookId: 'luke', chapters: [23, 24] },
    { bookId: 'john', chapters: [18, 19, 20, 21] },
    // Acts - Early Church
    { bookId: 'acts', chapters: [1, 2, 3, 4] },
    { bookId: 'acts', chapters: [5, 6, 7, 8] },
    // James (earliest epistle)
    { bookId: 'james', chapters: [1, 2, 3] },
    { bookId: 'james', chapters: [4, 5] },
    { bookId: 'acts', chapters: [9, 10, 11, 12] },
    // Galatians (early Pauline)
    { bookId: 'galatians', chapters: [1, 2, 3] },
    { bookId: 'galatians', chapters: [4, 5, 6] },
    { bookId: 'acts', chapters: [13, 14, 15] },
    // Thessalonian correspondence
    { bookId: '1-thessalonians', chapters: [1, 2, 3] },
    { bookId: '1-thessalonians', chapters: [4, 5] },
    { bookId: '2-thessalonians', chapters: [1, 2, 3] },
    { bookId: 'acts', chapters: [16, 17, 18] },
    // Corinthian correspondence
    { bookId: '1-corinthians', chapters: [1, 2, 3, 4] },
    { bookId: '1-corinthians', chapters: [5, 6, 7, 8] },
    { bookId: '1-corinthians', chapters: [9, 10, 11, 12] },
    { bookId: '1-corinthians', chapters: [13, 14, 15, 16] },
    { bookId: '2-corinthians', chapters: [1, 2, 3, 4] },
    { bookId: '2-corinthians', chapters: [5, 6, 7, 8] },
    { bookId: '2-corinthians', chapters: [9, 10, 11, 12, 13] },
    { bookId: 'acts', chapters: [19, 20] },
    // Romans
    { bookId: 'romans', chapters: [1, 2, 3, 4] },
    { bookId: 'romans', chapters: [5, 6, 7, 8] },
    { bookId: 'romans', chapters: [9, 10, 11, 12] },
    { bookId: 'romans', chapters: [13, 14, 15, 16] },
    { bookId: 'acts', chapters: [21, 22, 23, 24] },
    { bookId: 'acts', chapters: [25, 26, 27, 28] },
    // Prison Epistles
    { bookId: 'ephesians', chapters: [1, 2, 3] },
    { bookId: 'ephesians', chapters: [4, 5, 6] },
    { bookId: 'philippians', chapters: [1, 2, 3, 4] },
    { bookId: 'colossians', chapters: [1, 2, 3, 4] },
    { bookId: 'philemon', chapters: [1] },
    // Hebrews (before temple destruction AD 70)
    { bookId: 'hebrews', chapters: [1, 2, 3, 4] },
    { bookId: 'hebrews', chapters: [5, 6, 7, 8] },
    { bookId: 'hebrews', chapters: [9, 10, 11] },
    { bookId: 'hebrews', chapters: [12, 13] },
    // Pastoral Epistles
    { bookId: '1-timothy', chapters: [1, 2, 3] },
    { bookId: '1-timothy', chapters: [4, 5, 6] },
    { bookId: 'titus', chapters: [1, 2, 3] },
    { bookId: '2-timothy', chapters: [1, 2, 3, 4] },
    // Petrine & Johannine Epistles
    { bookId: '1-peter', chapters: [1, 2, 3] },
    { bookId: '1-peter', chapters: [4, 5] },
    { bookId: '2-peter', chapters: [1, 2, 3] },
    { bookId: 'jude', chapters: [1] },
    { bookId: '1-john', chapters: [1, 2, 3] },
    { bookId: '1-john', chapters: [4, 5] },
    { bookId: '2-john', chapters: [1] },
    { bookId: '3-john', chapters: [1] },
    // Revelation (final book)
    { bookId: 'revelation', chapters: [1, 2, 3, 4] },
    { bookId: 'revelation', chapters: [5, 6, 7, 8] },
    { bookId: 'revelation', chapters: [9, 10, 11, 12] },
    { bookId: 'revelation', chapters: [13, 14, 15, 16] },
    { bookId: 'revelation', chapters: [17, 18, 19, 20] },
    { bookId: 'revelation', chapters: [21, 22] },
  ];

  return {
    id: 'chronological-year',
    name: 'Chronological Bible',
    description: 'Experience Scripture in the order events occurred, from Creation through Revelation. This plan weaves together historical books, prophets, psalms, and epistles to show God\'s redemptive plan unfolding through history.',
    duration: '1 year',
    durationDays: 365,
    category: 'chronological',
    difficulty: 'intensive',
    chaptersPerDay: '3-4 chapters',
    features: [
      'Historical sequence of events',
      'Prophets paired with their era',
      'Psalms in historical context',
      'Gospels harmonized',
    ],
    getDayReadings: (day: number) => {
      if (day < 1 || day > 365) return null;

      // Distribute readings across 365 days
      const readingsPerDay = chronologicalReadings.length / 365;
      const startIdx = Math.floor((day - 1) * readingsPerDay);
      const endIdx = Math.min(Math.floor(day * readingsPerDay), chronologicalReadings.length);

      if (startIdx >= chronologicalReadings.length) return null;

      // Collect readings for this day
      const dayReadings: { bookId: string; chapters: number[] }[] = [];

      for (let i = startIdx; i < endIdx; i++) {
        const reading = chronologicalReadings[i];
        // Try to combine with previous if same book
        const lastReading = dayReadings[dayReadings.length - 1];
        if (lastReading && lastReading.bookId === reading.bookId) {
          lastReading.chapters.push(...reading.chapters);
        } else {
          dayReadings.push({ bookId: reading.bookId, chapters: [...reading.chapters] });
        }
      }

      // Handle edge case where we get no readings
      if (dayReadings.length === 0 && day <= 365) {
        const idx = Math.min(day - 1, chronologicalReadings.length - 1);
        const reading = chronologicalReadings[idx];
        dayReadings.push({ bookId: reading.bookId, chapters: [...reading.chapters] });
      }

      return {
        day,
        readings: dayReadings,
      };
    },
  };
}

/**
 * Reformer's Reading Plan
 * A 120-day journey through the books central to Protestant Reformation theology.
 * Organized to build understanding progressively: Christ's identity (John),
 * justification by faith (Romans, Galatians), Christian living (James, 1-2 Peter),
 * the superiority of Christ (Hebrews), and the full scope of redemption (Genesis, Exodus, Isaiah).
 * This sequence mirrors the theological emphases of Luther, Calvin, and the Reformed tradition.
 */
function createReformersPlan(): ReadingPlan {
  // Books ordered to build theological understanding progressively
  // Phase 1: The Gospel Foundation (John - 21 chapters)
  // Phase 2: Justification by Faith (Romans 16, Galatians 6 - 22 chapters)
  // Phase 3: Faith and Works (James 5, 1 Peter 5, 2 Peter 3 - 13 chapters)
  // Phase 4: Christ Our High Priest (Hebrews - 13 chapters)
  // Phase 5: Pauline Theology Expanded (Ephesians 6, Colossians 4, Philippians 4 - 14 chapters)
  // Phase 6: Covenant Foundations (Genesis 50, Exodus 40 - 90 chapters)
  // Phase 7: Messianic Prophecy (Isaiah - 66 chapters)
  // Phase 8: The Psalms of David (Selected Psalms - ~50 chapters)
  // Total: ~289 chapters over 120 days = ~2.4 chapters/day

  const reformerBooks = [
    // Phase 1: Start with John - "In the beginning was the Word"
    'john',
    // Phase 2: The heart of Reformed doctrine - justification
    'romans', 'galatians',
    // Phase 3: Faith producing works
    'james', '1-peter', '2-peter',
    // Phase 4: Christ as the superior mediator
    'hebrews',
    // Phase 5: Union with Christ and practical holiness
    'ephesians', 'philippians', 'colossians',
    // Phase 6: Covenant history foundations
    'genesis', 'exodus',
    // Phase 7: The suffering servant and Messiah
    'isaiah',
  ];

  const reformerChapters: { bookId: string; chapter: number }[] = [];
  for (const bookId of reformerBooks) {
    const count = CHAPTER_COUNTS[bookId] || 0;
    for (let ch = 1; ch <= count; ch++) {
      reformerChapters.push({ bookId, chapter: ch });
    }
  }

  // Total chapters: 21 + 16 + 6 + 5 + 5 + 3 + 13 + 6 + 4 + 4 + 50 + 40 + 66 = 239 chapters
  const chaptersPerDay = Math.ceil(reformerChapters.length / 120); // ~2 chapters/day

  return {
    id: 'reformers-120-days',
    name: "Reformer's Journey",
    description: "Trace the theological heart of the Protestant Reformation through 120 days of reading. Begin with John's portrait of Christ, move through Paul's doctrine of justification (Romans, Galatians), explore faith and works (James, Peter), marvel at Christ's priesthood (Hebrews), then journey back to covenant foundations in Genesis and Exodus, culminating in Isaiah's Messianic prophecies.",
    duration: '120 days',
    durationDays: 120,
    category: 'thematic',
    difficulty: 'medium',
    chaptersPerDay: '2 chapters',
    features: [
      'Reformation theology focus',
      'Justification by faith emphasis',
      'Covenant & Christ-centered',
      'Follows Reformed hermeneutic',
    ],
    getDayReadings: (day: number) => {
      if (day < 1 || day > 120) return null;

      const startIdx = (day - 1) * chaptersPerDay;
      const endIdx = Math.min(startIdx + chaptersPerDay, reformerChapters.length);

      if (startIdx >= reformerChapters.length) return null;

      const readings: Map<string, number[]> = new Map();
      for (let i = startIdx; i < endIdx; i++) {
        const { bookId, chapter } = reformerChapters[i];
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
 * Wisdom Literature Plan
 * Read Job, Psalms, Proverbs, Ecclesiastes, and Song of Solomon in 60 days
 * These five books form the "Wisdom Literature" of the Old Testament,
 * exploring life's deepest questions through poetry, proverb, and reflection.
 */
function createWisdomLiteraturePlan(): ReadingPlan {
  const wisdomBooks = [
    'job', 'psalms', 'proverbs', 'ecclesiastes', 'song-of-solomon',
  ];

  const wisdomChapters: { bookId: string; chapter: number }[] = [];
  for (const bookId of wisdomBooks) {
    const count = CHAPTER_COUNTS[bookId] || 0;
    for (let ch = 1; ch <= count; ch++) {
      wisdomChapters.push({ bookId, chapter: ch });
    }
  }

  // Total: 42 (Job) + 150 (Psalms) + 31 (Proverbs) + 12 (Ecclesiastes) + 8 (Song) = 243 chapters
  const chaptersPerDay = Math.ceil(wisdomChapters.length / 60); // ~4 chapters/day

  return {
    id: 'wisdom-60-days',
    name: 'Wisdom Literature',
    description: 'Explore the poetry and wisdom of Scripture through Job, Psalms, Proverbs, Ecclesiastes, and Song of Solomon. These books address life\'s deepest questions about suffering, worship, practical living, meaning, and love.',
    duration: '60 days',
    durationDays: 60,
    category: 'thematic',
    difficulty: 'medium',
    chaptersPerDay: '4 chapters',
    features: [
      'Poetry and wisdom literature',
      'Life\'s deepest questions',
      'Practical and devotional',
      'Rich theological reflection',
    ],
    getDayReadings: (day: number) => {
      if (day < 1 || day > 60) return null;

      const startIdx = (day - 1) * chaptersPerDay;
      const endIdx = Math.min(startIdx + chaptersPerDay, wisdomChapters.length);

      if (startIdx >= wisdomChapters.length) return null;

      const readings: Map<string, number[]> = new Map();
      for (let i = startIdx; i < endIdx; i++) {
        const { bookId, chapter } = wisdomChapters[i];
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
  createChronologicalPlan(),
  createNT90DaysPlan(),
  createGospelsPlan(),
  createPsalmsProverbsMonthlyPlan(),
  createPaulineEpistlesPlan(),
  createProphetsPlan(),
  createWisdomLiteraturePlan(),
  createReformersPlan(),
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
