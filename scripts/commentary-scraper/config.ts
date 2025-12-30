/**
 * Commentary Scraper Configuration
 */

import type { CommentatorInfo, BookInfo } from './types.js';

// Rate limiting
export const REQUEST_DELAY_MS = 2000;  // 2 seconds between requests
export const MAX_RETRIES = 3;
export const RETRY_DELAY_MS = 5000;

// Quote extraction settings
export const MIN_QUOTE_WORDS = 100;
export const MAX_QUOTE_WORDS = 500;
export const TARGET_QUOTE_WORDS = 250;

// Commentators
export const COMMENTATORS: CommentatorInfo[] = [
  { id: 'matthew_henry', displayName: 'Matthew Henry', urlSlug: 'mhc' },
  { id: 'john_calvin', displayName: 'John Calvin', urlSlug: 'calvin' },
  { id: 'matthew_poole', displayName: 'Matthew Poole', urlSlug: 'poole' },
  { id: 'albert_barnes', displayName: 'Albert Barnes', urlSlug: 'barnes' },
];

// Base URL pattern: https://biblehub.com/commentaries/{commentator}/{book}/{chapter}.htm
export const BASE_URL = 'https://biblehub.com/commentaries';

export function getCommentaryUrl(commentatorSlug: string, bookSlug: string, chapter: number): string {
  return `${BASE_URL}/${commentatorSlug}/${bookSlug}/${chapter}.htm`;
}

// All 66 books with chapter counts and URL slugs
export const BIBLE_BOOKS: BookInfo[] = [
  // Old Testament - Pentateuch
  { id: 'genesis', name: 'Genesis', chapters: 50, urlSlug: 'genesis' },
  { id: 'exodus', name: 'Exodus', chapters: 40, urlSlug: 'exodus' },
  { id: 'leviticus', name: 'Leviticus', chapters: 27, urlSlug: 'leviticus' },
  { id: 'numbers', name: 'Numbers', chapters: 36, urlSlug: 'numbers' },
  { id: 'deuteronomy', name: 'Deuteronomy', chapters: 34, urlSlug: 'deuteronomy' },

  // Historical Books
  { id: 'joshua', name: 'Joshua', chapters: 24, urlSlug: 'joshua' },
  { id: 'judges', name: 'Judges', chapters: 21, urlSlug: 'judges' },
  { id: 'ruth', name: 'Ruth', chapters: 4, urlSlug: 'ruth' },
  { id: '1-samuel', name: '1 Samuel', chapters: 31, urlSlug: '1_samuel' },
  { id: '2-samuel', name: '2 Samuel', chapters: 24, urlSlug: '2_samuel' },
  { id: '1-kings', name: '1 Kings', chapters: 22, urlSlug: '1_kings' },
  { id: '2-kings', name: '2 Kings', chapters: 25, urlSlug: '2_kings' },
  { id: '1-chronicles', name: '1 Chronicles', chapters: 29, urlSlug: '1_chronicles' },
  { id: '2-chronicles', name: '2 Chronicles', chapters: 36, urlSlug: '2_chronicles' },
  { id: 'ezra', name: 'Ezra', chapters: 10, urlSlug: 'ezra' },
  { id: 'nehemiah', name: 'Nehemiah', chapters: 13, urlSlug: 'nehemiah' },
  { id: 'esther', name: 'Esther', chapters: 10, urlSlug: 'esther' },

  // Wisdom Literature
  { id: 'job', name: 'Job', chapters: 42, urlSlug: 'job' },
  { id: 'psalms', name: 'Psalms', chapters: 150, urlSlug: 'psalms' },
  { id: 'proverbs', name: 'Proverbs', chapters: 31, urlSlug: 'proverbs' },
  { id: 'ecclesiastes', name: 'Ecclesiastes', chapters: 12, urlSlug: 'ecclesiastes' },
  { id: 'song-of-solomon', name: 'Song of Solomon', chapters: 8, urlSlug: 'songs' },

  // Major Prophets
  { id: 'isaiah', name: 'Isaiah', chapters: 66, urlSlug: 'isaiah' },
  { id: 'jeremiah', name: 'Jeremiah', chapters: 52, urlSlug: 'jeremiah' },
  { id: 'lamentations', name: 'Lamentations', chapters: 5, urlSlug: 'lamentations' },
  { id: 'ezekiel', name: 'Ezekiel', chapters: 48, urlSlug: 'ezekiel' },
  { id: 'daniel', name: 'Daniel', chapters: 12, urlSlug: 'daniel' },

  // Minor Prophets
  { id: 'hosea', name: 'Hosea', chapters: 14, urlSlug: 'hosea' },
  { id: 'joel', name: 'Joel', chapters: 3, urlSlug: 'joel' },
  { id: 'amos', name: 'Amos', chapters: 9, urlSlug: 'amos' },
  { id: 'obadiah', name: 'Obadiah', chapters: 1, urlSlug: 'obadiah' },
  { id: 'jonah', name: 'Jonah', chapters: 4, urlSlug: 'jonah' },
  { id: 'micah', name: 'Micah', chapters: 7, urlSlug: 'micah' },
  { id: 'nahum', name: 'Nahum', chapters: 3, urlSlug: 'nahum' },
  { id: 'habakkuk', name: 'Habakkuk', chapters: 3, urlSlug: 'habakkuk' },
  { id: 'zephaniah', name: 'Zephaniah', chapters: 3, urlSlug: 'zephaniah' },
  { id: 'haggai', name: 'Haggai', chapters: 2, urlSlug: 'haggai' },
  { id: 'zechariah', name: 'Zechariah', chapters: 14, urlSlug: 'zechariah' },
  { id: 'malachi', name: 'Malachi', chapters: 4, urlSlug: 'malachi' },

  // New Testament - Gospels & Acts
  { id: 'matthew', name: 'Matthew', chapters: 28, urlSlug: 'matthew' },
  { id: 'mark', name: 'Mark', chapters: 16, urlSlug: 'mark' },
  { id: 'luke', name: 'Luke', chapters: 24, urlSlug: 'luke' },
  { id: 'john', name: 'John', chapters: 21, urlSlug: 'john' },
  { id: 'acts', name: 'Acts', chapters: 28, urlSlug: 'acts' },

  // Pauline Epistles
  { id: 'romans', name: 'Romans', chapters: 16, urlSlug: 'romans' },
  { id: '1-corinthians', name: '1 Corinthians', chapters: 16, urlSlug: '1_corinthians' },
  { id: '2-corinthians', name: '2 Corinthians', chapters: 13, urlSlug: '2_corinthians' },
  { id: 'galatians', name: 'Galatians', chapters: 6, urlSlug: 'galatians' },
  { id: 'ephesians', name: 'Ephesians', chapters: 6, urlSlug: 'ephesians' },
  { id: 'philippians', name: 'Philippians', chapters: 4, urlSlug: 'philippians' },
  { id: 'colossians', name: 'Colossians', chapters: 4, urlSlug: 'colossians' },
  { id: '1-thessalonians', name: '1 Thessalonians', chapters: 5, urlSlug: '1_thessalonians' },
  { id: '2-thessalonians', name: '2 Thessalonians', chapters: 3, urlSlug: '2_thessalonians' },
  { id: '1-timothy', name: '1 Timothy', chapters: 6, urlSlug: '1_timothy' },
  { id: '2-timothy', name: '2 Timothy', chapters: 4, urlSlug: '2_timothy' },
  { id: 'titus', name: 'Titus', chapters: 3, urlSlug: 'titus' },
  { id: 'philemon', name: 'Philemon', chapters: 1, urlSlug: 'philemon' },

  // General Epistles
  { id: 'hebrews', name: 'Hebrews', chapters: 13, urlSlug: 'hebrews' },
  { id: 'james', name: 'James', chapters: 5, urlSlug: 'james' },
  { id: '1-peter', name: '1 Peter', chapters: 5, urlSlug: '1_peter' },
  { id: '2-peter', name: '2 Peter', chapters: 3, urlSlug: '2_peter' },
  { id: '1-john', name: '1 John', chapters: 5, urlSlug: '1_john' },
  { id: '2-john', name: '2 John', chapters: 1, urlSlug: '2_john' },
  { id: '3-john', name: '3 John', chapters: 1, urlSlug: '3_john' },
  { id: 'jude', name: 'Jude', chapters: 1, urlSlug: 'jude' },

  // Apocalyptic
  { id: 'revelation', name: 'Revelation', chapters: 22, urlSlug: 'revelation' },
];

// Total chapters: 1,189
export const TOTAL_CHAPTERS = BIBLE_BOOKS.reduce((sum, book) => sum + book.chapters, 0);

export function getBookBySlug(urlSlug: string): BookInfo | undefined {
  return BIBLE_BOOKS.find(b => b.urlSlug === urlSlug);
}

export function getBookById(id: string): BookInfo | undefined {
  return BIBLE_BOOKS.find(b => b.id === id);
}
