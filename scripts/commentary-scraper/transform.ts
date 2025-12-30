#!/usr/bin/env npx tsx

/**
 * Transform scraped quotes into final data structure
 * Merges quotes with existing keyThemes and christConnection from bible-chapter-summaries.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { BIBLE_BOOKS } from './config.js';
import type { ChapterCommentary, BookCommentary } from './types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, 'output');
const DATA_DIR = path.join(__dirname, '..', '..', 'src', 'data');

// Import existing summaries to get keyThemes and christConnection
async function loadExistingSummaries(): Promise<Map<string, { keyThemes: string[]; christConnection?: string }>> {
  const summaryMap = new Map();

  // Dynamic import of the existing summaries
  const summaryModule = await import('../../src/data/bible-chapter-summaries.js');
  const allSummaries = summaryModule.ALL_CHAPTER_SUMMARIES;

  for (const book of allSummaries) {
    for (const chapter of book.chapters) {
      const key = `${chapter.bookId}_${chapter.chapter}`;
      summaryMap.set(key, {
        keyThemes: chapter.keyThemes || [],
        christConnection: chapter.christConnection,
      });
    }
  }

  console.log(`Loaded ${summaryMap.size} existing summaries`);
  return summaryMap;
}

// Load scraped quotes for a book
function loadScrapedBook(bookId: string): ChapterCommentary[] | null {
  const filePath = path.join(OUTPUT_DIR, `${bookId}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

// Merge scraped quotes with existing themes
function mergeChapterData(
  scraped: ChapterCommentary,
  existing: { keyThemes: string[]; christConnection?: string } | undefined
): ChapterCommentary {
  return {
    ...scraped,
    keyThemes: existing?.keyThemes || scraped.keyThemes,
    christConnection: existing?.christConnection || scraped.christConnection,
  };
}

// Generate TypeScript file content
function generateTypeScriptFile(allBooks: BookCommentary[]): string {
  const lines: string[] = [];

  lines.push(`/**
 * Bible Chapter Commentaries
 *
 * Verbatim quotes from Reformed commentators, modernized to contemporary English:
 * - Matthew Henry's Concise Commentary
 * - John Calvin's Commentaries
 * - Matthew Poole's English Annotations
 * - Albert Barnes' Notes on the Bible
 *
 * Generated on ${new Date().toISOString()}
 */

export type CommentatorId = 'matthew_henry' | 'john_calvin' | 'matthew_poole' | 'albert_barnes';

export interface CommentatorQuote {
  commentator: CommentatorId;
  displayName: string;
  quote: string;
  source: string;
}

export interface ChapterCommentary {
  bookId: string;
  chapter: number;
  title: string;
  quotes: CommentatorQuote[];
  keyThemes: string[];
  christConnection?: string;
}

export interface BookCommentary {
  bookId: string;
  bookName: string;
  chapters: ChapterCommentary[];
}
`);

  // Generate constants for each book
  for (const book of allBooks) {
    const constName = book.bookId.toUpperCase().replace(/-/g, '_') + '_COMMENTARY';
    lines.push(`// ═══════════════════════════════════════════════════════════════════════════════`);
    lines.push(`// ${book.bookName.toUpperCase()} (${book.chapters.length} Chapters)`);
    lines.push(`// ═══════════════════════════════════════════════════════════════════════════════\n`);
    lines.push(`export const ${constName}: ChapterCommentary[] = ${JSON.stringify(book.chapters, null, 2)};\n`);
  }

  // Generate helper function
  lines.push(`
// Helper function to get chapters by book ID
export function getCommentaryByBook(bookId: string): ChapterCommentary[] {
  switch (bookId) {`);

  for (const book of allBooks) {
    const constName = book.bookId.toUpperCase().replace(/-/g, '_') + '_COMMENTARY';
    lines.push(`    case '${book.bookId}': return ${constName};`);
  }

  lines.push(`    default: return [];
  }
}
`);

  // Generate ALL_COMMENTARY export
  lines.push(`// All books combined
export const ALL_CHAPTER_COMMENTARY: BookCommentary[] = [`);
  for (const book of allBooks) {
    const constName = book.bookId.toUpperCase().replace(/-/g, '_') + '_COMMENTARY';
    lines.push(`  { bookId: '${book.bookId}', bookName: '${book.bookName}', chapters: ${constName} },`);
  }
  lines.push(`];
`);

  return lines.join('\n');
}

async function main() {
  console.log('Loading existing summaries...');
  const existingSummaries = await loadExistingSummaries();

  console.log('\nLoading scraped books...');
  const allBooks: BookCommentary[] = [];
  let totalChapters = 0;
  const missingBooks: string[] = [];

  for (const bookInfo of BIBLE_BOOKS) {
    const scraped = loadScrapedBook(bookInfo.id);

    if (!scraped) {
      console.log(`  ⚠ ${bookInfo.name}: Not scraped yet`);
      missingBooks.push(bookInfo.id);
      continue;
    }

    // Merge with existing data
    const mergedChapters = scraped.map(chapter => {
      const key = `${chapter.bookId}_${chapter.chapter}`;
      const existing = existingSummaries.get(key);
      return mergeChapterData(chapter, existing);
    });

    allBooks.push({
      bookId: bookInfo.id,
      bookName: bookInfo.name,
      chapters: mergedChapters,
    });

    totalChapters += mergedChapters.length;
    console.log(`  ✓ ${bookInfo.name}: ${mergedChapters.length} chapters`);
  }

  console.log(`\nTotal: ${totalChapters} chapters from ${allBooks.length} books`);

  if (missingBooks.length > 0) {
    console.log(`\n⚠ Missing ${missingBooks.length} books: ${missingBooks.slice(0, 5).join(', ')}${missingBooks.length > 5 ? '...' : ''}`);
    console.log('Run the scraper to complete missing books before generating final output.');

    // Still generate partial output for testing
    if (allBooks.length > 0) {
      console.log('\nGenerating partial output for testing...');
    } else {
      return;
    }
  }

  // Generate TypeScript file
  console.log('\nGenerating TypeScript file...');
  const tsContent = generateTypeScriptFile(allBooks);

  const outputPath = path.join(DATA_DIR, 'bible-chapter-commentaries.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf-8');
  console.log(`\n✓ Generated: ${outputPath}`);
  console.log(`  Size: ${(tsContent.length / 1024).toFixed(1)} KB`);
  console.log(`  Books: ${allBooks.length}`);
  console.log(`  Chapters: ${totalChapters}`);
  console.log(`  Quotes: ${totalChapters * 4}`);
}

main().catch(console.error);
