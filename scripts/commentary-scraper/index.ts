#!/usr/bin/env npx tsx

/**
 * Commentary Scraper - Main Entry Point
 *
 * Usage:
 *   npx tsx scripts/commentary-scraper/index.ts [options]
 *
 * Options:
 *   --book <bookId>      Scrape only this book (e.g., genesis, matthew)
 *   --commentator <id>   Scrape only this commentator (mhc, calvin, poole, barnes)
 *   --chapter <num>      Scrape only this chapter (requires --book)
 *   --resume             Resume from last progress checkpoint
 *   --clear-cache        Clear cached HTML before starting
 *   --clear-progress     Clear progress and start fresh
 *   --dry-run            Show what would be scraped without actually scraping
 *   --status             Show scraping progress status
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { BIBLE_BOOKS, COMMENTATORS, TOTAL_CHAPTERS } from './config.js';
import { initBrowser, closeBrowser, fetchCommentaryPage, getCacheStats, clearCache } from './fetcher.js';
import { extractQuoteFromHtml, extractFullTextFromHtml, cleanQuoteText } from './extractor.js';
import { summarizeWithDelay } from './summarizer.js';
import { loadProgress, saveProgress, createInitialProgress, clearProgress, getProgressSummary } from './progress.js';
import type { CommentatorQuote, ChapterCommentary, BookInfo } from './types.js';

// Global flag for AI summarization mode
let useAiSummarization = false;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, 'output');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Parse command line arguments
 */
function parseArgs(): Record<string, string | boolean> {
  const args: Record<string, string | boolean> = {};
  const argv = process.argv.slice(2);

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const nextArg = argv[i + 1];

      if (nextArg && !nextArg.startsWith('--')) {
        args[key] = nextArg;
        i++;
      } else {
        args[key] = true;
      }
    }
  }

  return args;
}

/**
 * Scrape a single chapter for all commentators
 */
async function scrapeChapter(book: BookInfo, chapter: number): Promise<CommentatorQuote[]> {
  const quotes: CommentatorQuote[] = [];

  for (const commentator of COMMENTATORS) {
    console.log(`  ${commentator.displayName}...`);

    const result = await fetchCommentaryPage(commentator.urlSlug, book.urlSlug, chapter);

    if (result.success && result.quote) {
      let finalQuote: string | null = null;

      if (useAiSummarization) {
        // AI Summarization mode: extract full text and summarize
        const fullText = extractFullTextFromHtml(result.quote);

        if (fullText) {
          console.log(`    Summarizing ${countWords(fullText)} words...`);
          const summaryResult = await summarizeWithDelay({
            commentator: commentator.displayName,
            bookName: book.name,
            chapter,
            fullText,
          }, 300); // 300ms delay between API calls

          finalQuote = summaryResult.summary;
          console.log(`    ✓ AI summary: ${summaryResult.wordCount} words`);
        }
      } else {
        // Legacy mode: extract truncated quote
        finalQuote = extractQuoteFromHtml(result.quote, commentator.urlSlug);
        if (finalQuote) {
          console.log(`    ✓ ${countWords(finalQuote)} words`);
        }
      }

      if (finalQuote) {
        quotes.push({
          commentator: commentator.id,
          displayName: commentator.displayName,
          quote: cleanQuoteText(finalQuote),
          source: result.url,
          scrapedAt: new Date().toISOString(),
        });
      } else {
        console.log(`    ⚠ Could not extract/summarize`);
      }
    } else {
      console.log(`    ✗ ${result.error || 'Failed to fetch'}`);
    }
  }

  return quotes;
}

/**
 * Count words in text
 */
function countWords(text: string): number {
  return text.split(/\s+/).filter(w => w.length > 0).length;
}

/**
 * Scrape a single book
 */
async function scrapeBook(book: BookInfo): Promise<ChapterCommentary[]> {
  const chapters: ChapterCommentary[] = [];

  console.log(`\n📖 ${book.name} (${book.chapters} chapters)`);

  for (let ch = 1; ch <= book.chapters; ch++) {
    console.log(`\nChapter ${ch}/${book.chapters}:`);

    const quotes = await scrapeChapter(book, ch);

    chapters.push({
      bookId: book.id,
      chapter: ch,
      title: `${book.name} ${ch}`,  // Will be enhanced later with existing titles
      quotes,
      keyThemes: [],  // Will be populated from existing data
      christConnection: undefined,  // Will be populated from existing data
    });

    // Save intermediate results
    saveBookOutput(book.id, chapters);
  }

  return chapters;
}

/**
 * Save book output to JSON file
 */
function saveBookOutput(bookId: string, chapters: ChapterCommentary[]): void {
  const outputFile = path.join(OUTPUT_DIR, `${bookId}.json`);
  fs.writeFileSync(outputFile, JSON.stringify(chapters, null, 2), 'utf-8');
}

/**
 * Load book output from JSON file
 */
function _loadBookOutput(bookId: string): ChapterCommentary[] | null {
  const outputFile = path.join(OUTPUT_DIR, `${bookId}.json`);
  if (fs.existsSync(outputFile)) {
    return JSON.parse(fs.readFileSync(outputFile, 'utf-8'));
  }
  return null;
}

/**
 * Get list of completed books from output directory
 */
function getCompletedBooks(): Set<string> {
  const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.json'));
  return new Set(files.map(f => f.replace('.json', '')));
}

/**
 * Main scraping function
 */
async function main(): Promise<void> {
  const args = parseArgs();

  // Handle --status
  if (args.status) {
    const progress = loadProgress();
    console.log(getProgressSummary(progress));
    console.log('\nCache stats:', getCacheStats());
    console.log('Completed books:', Array.from(getCompletedBooks()).join(', ') || 'None');
    return;
  }

  // Handle --clear-cache
  if (args['clear-cache']) {
    console.log('Clearing cache...');
    clearCache();
    console.log('Cache cleared.');
  }

  // Handle --clear-progress
  if (args['clear-progress']) {
    console.log('Clearing progress...');
    clearProgress();
    console.log('Progress cleared.');
  }

  // Handle --use-ai
  if (args['use-ai']) {
    useAiSummarization = true;
    console.log('🤖 AI Summarization mode enabled');
  }

  // Determine which books to scrape
  let booksToScrape: BookInfo[];

  if (args.book) {
    const book = BIBLE_BOOKS.find(b => b.id === args.book || b.urlSlug === args.book);
    if (!book) {
      console.error(`Unknown book: ${args.book}`);
      process.exit(1);
    }
    booksToScrape = [book];
  } else {
    booksToScrape = [...BIBLE_BOOKS];
  }

  // Handle --resume
  const completedBooks = getCompletedBooks();
  if (args.resume) {
    booksToScrape = booksToScrape.filter(b => !completedBooks.has(b.id));
    console.log(`Resuming: ${completedBooks.size} books completed, ${booksToScrape.length} remaining.`);
  }

  // Handle --dry-run
  if (args['dry-run']) {
    console.log('Dry run - would scrape:');
    let totalChapters = 0;
    for (const book of booksToScrape) {
      console.log(`  ${book.name}: ${book.chapters} chapters`);
      totalChapters += book.chapters;
    }
    console.log(`Total: ${totalChapters} chapters × 4 commentators = ${totalChapters * 4} requests`);
    console.log(`Estimated time: ${Math.ceil(totalChapters * 4 * 2.5 / 60)} minutes (at 2s delay)`);
    return;
  }

  if (booksToScrape.length === 0) {
    console.log('All books already completed!');
    return;
  }

  // Initialize browser
  console.log('Initializing browser...');
  await initBrowser();

  // Load or create progress
  const progress = loadProgress() || createInitialProgress();

  try {
    console.log(`\n📚 Starting scrape: ${booksToScrape.length} books, ${TOTAL_CHAPTERS} total chapters`);
    console.log('Press Ctrl+C to stop (progress will be saved)\n');

    for (const book of booksToScrape) {
      // Skip if --chapter is specified and doesn't apply
      if (args.chapter && args.book !== book.id) {
        continue;
      }

      await scrapeBook(book);

      // Update progress
      progress.lastBook = book.id;
      progress.lastChapter = book.chapters;
      saveProgress(progress);

      console.log(`\n✓ Completed ${book.name}`);
    }

    console.log('\n🎉 Scraping complete!');
    console.log(getProgressSummary(progress));

  } catch (error) {
    console.error('\n❌ Error during scraping:', error);
    console.log('Progress saved. Run with --resume to continue.');
  } finally {
    await closeBrowser();
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n\nInterrupted! Saving progress...');
  await closeBrowser();
  process.exit(0);
});

// Run main
main().catch(console.error);
