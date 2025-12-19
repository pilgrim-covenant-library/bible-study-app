import type { BibleTranslation, BibleVerse, BiblePassage } from '@/types';

// Bible API using wldeh/bible-api CDN (free, unlimited)
const CDN_BASE = 'https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles';

// Translation mapping for the CDN
const TRANSLATION_MAP: Record<BibleTranslation, string> = {
  ESV: 'en-esv',
  NIV: 'en-niv',
  KJV: 'en-kjv',
};

// Book name mapping (API uses lowercase)
const BOOK_MAP: Record<string, string> = {
  'genesis': 'genesis',
  'exodus': 'exodus',
  'leviticus': 'leviticus',
  'numbers': 'numbers',
  'deuteronomy': 'deuteronomy',
  'joshua': 'joshua',
  'judges': 'judges',
  'ruth': 'ruth',
  '1 samuel': '1samuel',
  '2 samuel': '2samuel',
  '1 kings': '1kings',
  '2 kings': '2kings',
  '1 chronicles': '1chronicles',
  '2 chronicles': '2chronicles',
  'ezra': 'ezra',
  'nehemiah': 'nehemiah',
  'esther': 'esther',
  'job': 'job',
  'psalms': 'psalms',
  'psalm': 'psalms',
  'proverbs': 'proverbs',
  'ecclesiastes': 'ecclesiastes',
  'song of solomon': 'songofsolomon',
  'isaiah': 'isaiah',
  'jeremiah': 'jeremiah',
  'lamentations': 'lamentations',
  'ezekiel': 'ezekiel',
  'daniel': 'daniel',
  'hosea': 'hosea',
  'joel': 'joel',
  'amos': 'amos',
  'obadiah': 'obadiah',
  'jonah': 'jonah',
  'micah': 'micah',
  'nahum': 'nahum',
  'habakkuk': 'habakkuk',
  'zephaniah': 'zephaniah',
  'haggai': 'haggai',
  'zechariah': 'zechariah',
  'malachi': 'malachi',
  'matthew': 'matthew',
  'mark': 'mark',
  'luke': 'luke',
  'john': 'john',
  'acts': 'acts',
  'romans': 'romans',
  'rom': 'romans',
  '1 corinthians': '1corinthians',
  '2 corinthians': '2corinthians',
  'galatians': 'galatians',
  'ephesians': 'ephesians',
  'philippians': 'philippians',
  'colossians': 'colossians',
  '1 thessalonians': '1thessalonians',
  '2 thessalonians': '2thessalonians',
  '1 timothy': '1timothy',
  '2 timothy': '2timothy',
  'titus': 'titus',
  'philemon': 'philemon',
  'hebrews': 'hebrews',
  'james': 'james',
  '1 peter': '1peter',
  '2 peter': '2peter',
  '1 john': '1john',
  '2 john': '2john',
  '3 john': '3john',
  'jude': 'jude',
  'revelation': 'revelation',
};

// Parse reference string (e.g., "John 3:16" or "Genesis 1:1-5")
export function parseReference(reference: string): {
  book: string;
  chapter: number;
  startVerse: number;
  endVerse?: number;
} | null {
  // Handle numbered books like "1 John 1:9"
  const match = reference.match(/^(\d?\s*\w+(?:\s+\w+)?)\s+(\d+):(\d+)(?:-(\d+))?$/i);
  if (!match) return null;

  const bookName = match[1].toLowerCase().trim();
  const apiBook = BOOK_MAP[bookName];

  if (!apiBook) return null;

  return {
    book: apiBook,
    chapter: parseInt(match[2], 10),
    startVerse: parseInt(match[3], 10),
    endVerse: match[4] ? parseInt(match[4], 10) : undefined,
  };
}

// Local cache for verses
const verseCache = new Map<string, BibleVerse>();

// Fetch a single verse
export async function fetchVerse(
  book: string,
  chapter: number,
  verse: number,
  translation: BibleTranslation = 'ESV'
): Promise<BibleVerse | null> {
  const cacheKey = `${translation}-${book}-${chapter}-${verse}`;

  if (verseCache.has(cacheKey)) {
    return verseCache.get(cacheKey)!;
  }

  try {
    const apiTranslation = TRANSLATION_MAP[translation];
    const url = `${CDN_BASE}/${apiTranslation}/books/${book}/chapters/${chapter}/verses/${verse}.json`;

    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch verse: ${response.status}`);
      return null;
    }

    const data = await response.json();

    const bibleVerse: BibleVerse = {
      book,
      chapter,
      verse,
      text: data.text || data.verse || '',
      translation,
    };

    verseCache.set(cacheKey, bibleVerse);
    return bibleVerse;
  } catch (error) {
    console.error('Error fetching verse:', error);
    return null;
  }
}

// Fetch a chapter
export async function fetchChapter(
  book: string,
  chapter: number,
  translation: BibleTranslation = 'ESV'
): Promise<BibleVerse[]> {
  try {
    const apiTranslation = TRANSLATION_MAP[translation];
    const url = `${CDN_BASE}/${apiTranslation}/books/${book}/chapters/${chapter}.json`;

    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch chapter: ${response.status}`);
      return [];
    }

    const data = await response.json();
    const verses: BibleVerse[] = [];

    if (Array.isArray(data)) {
      data.forEach((v: { verse: number; text: string }) => {
        const bibleVerse: BibleVerse = {
          book,
          chapter,
          verse: v.verse,
          text: v.text,
          translation,
        };
        verses.push(bibleVerse);
        verseCache.set(`${translation}-${book}-${chapter}-${v.verse}`, bibleVerse);
      });
    }

    return verses;
  } catch (error) {
    console.error('Error fetching chapter:', error);
    return [];
  }
}

// Fetch a passage (range of verses)
export async function fetchPassage(
  reference: string,
  translation: BibleTranslation = 'ESV'
): Promise<BiblePassage | null> {
  const parsed = parseReference(reference);
  if (!parsed) {
    console.error('Invalid reference:', reference);
    return null;
  }

  const { book, chapter, startVerse, endVerse } = parsed;
  const verses: BibleVerse[] = [];

  // Fetch verses in range
  const end = endVerse || startVerse;
  for (let v = startVerse; v <= end; v++) {
    const verse = await fetchVerse(book, chapter, v, translation);
    if (verse) {
      verses.push(verse);
    }
  }

  if (verses.length === 0) {
    return null;
  }

  return {
    reference,
    text: verses.map(v => v.text).join(' '),
    verses,
    translation,
  };
}

// Format reference for display
export function formatReference(
  book: string,
  chapter: number,
  startVerse: number,
  endVerse?: number
): string {
  // Convert API book name back to display name
  const displayBook = Object.entries(BOOK_MAP)
    .find(([_, api]) => api === book)?.[0] || book;

  const capitalizedBook = displayBook
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (endVerse && endVerse !== startVerse) {
    return `${capitalizedBook} ${chapter}:${startVerse}-${endVerse}`;
  }
  return `${capitalizedBook} ${chapter}:${startVerse}`;
}

// Get verse text from local data (for offline/fast access)
export function getVerseFromCache(
  book: string,
  chapter: number,
  verse: number,
  translation: BibleTranslation
): BibleVerse | null {
  const cacheKey = `${translation}-${book}-${chapter}-${verse}`;
  return verseCache.get(cacheKey) || null;
}

// Clear cache
export function clearVerseCache(): void {
  verseCache.clear();
}

// Export translation options
export const TRANSLATIONS: { value: BibleTranslation; label: string }[] = [
  { value: 'ESV', label: 'English Standard Version (ESV)' },
  { value: 'NIV', label: 'New International Version (NIV)' },
  { value: 'KJV', label: 'King James Version (KJV)' },
];
