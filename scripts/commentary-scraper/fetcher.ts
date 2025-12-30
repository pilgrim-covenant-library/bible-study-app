/**
 * Commentary Fetcher
 * Uses Playwright to fetch commentary pages from BibleHub
 */

import { chromium, type Browser, type Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { REQUEST_DELAY_MS, MAX_RETRIES, RETRY_DELAY_MS, getCommentaryUrl } from './config.js';
import type { ScrapeResult } from './types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = path.join(__dirname, 'cache');

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

let browser: Browser | null = null;
let page: Page | null = null;

/**
 * Initialize Playwright browser
 */
export async function initBrowser(): Promise<void> {
  if (!browser) {
    browser = await chromium.launch({
      headless: true,
    });
    page = await browser.newPage();

    // Set reasonable timeout
    page.setDefaultTimeout(30000);

    // Block unnecessary resources for faster loading
    await page.route('**/*.{png,jpg,jpeg,gif,svg,ico,woff,woff2}', route => route.abort());
    await page.route('**/ads/**', route => route.abort());
    await page.route('**/analytics/**', route => route.abort());
  }
}

/**
 * Close browser
 */
export async function closeBrowser(): Promise<void> {
  if (browser) {
    await browser.close();
    browser = null;
    page = null;
  }
}

/**
 * Get cached HTML if available
 */
function getCachedHtml(commentator: string, book: string, chapter: number): string | null {
  const cacheFile = path.join(CACHE_DIR, `${commentator}_${book}_${chapter}.html`);
  if (fs.existsSync(cacheFile)) {
    return fs.readFileSync(cacheFile, 'utf-8');
  }
  return null;
}

/**
 * Save HTML to cache
 */
function saveCachedHtml(commentator: string, book: string, chapter: number, html: string): void {
  const cacheFile = path.join(CACHE_DIR, `${commentator}_${book}_${chapter}.html`);
  fs.writeFileSync(cacheFile, html, 'utf-8');
}

/**
 * Delay execution
 */
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Fetch a commentary page with rate limiting and caching
 */
export async function fetchCommentaryPage(
  commentatorSlug: string,
  bookSlug: string,
  chapter: number,
  useCache: boolean = true
): Promise<ScrapeResult> {
  const url = getCommentaryUrl(commentatorSlug, bookSlug, chapter);

  // Check cache first
  if (useCache) {
    const cached = getCachedHtml(commentatorSlug, bookSlug, chapter);
    if (cached) {
      return { success: true, url, quote: cached };
    }
  }

  // Initialize browser if needed
  if (!page) {
    await initBrowser();
  }

  // Fetch with retries
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      // Rate limiting
      await delay(REQUEST_DELAY_MS);

      // Navigate to page
      const response = await page!.goto(url, {
        waitUntil: 'domcontentloaded',
      });

      if (!response) {
        throw new Error('No response received');
      }

      const status = response.status();

      if (status === 404) {
        // Page doesn't exist - commentary may not be available for this chapter
        return { success: false, url, error: 'Not found (404)' };
      }

      if (status === 429) {
        // Rate limited - wait longer
        console.log(`Rate limited, waiting ${RETRY_DELAY_MS * attempt}ms...`);
        await delay(RETRY_DELAY_MS * attempt);
        continue;
      }

      if (status !== 200) {
        throw new Error(`HTTP ${status}`);
      }

      // Get page content
      const html = await page!.content();

      // Cache the HTML
      saveCachedHtml(commentatorSlug, bookSlug, chapter, html);

      return { success: true, url, quote: html };

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);

      if (attempt === MAX_RETRIES) {
        return { success: false, url, error: `Failed after ${MAX_RETRIES} attempts: ${errorMessage}` };
      }

      console.log(`Attempt ${attempt} failed: ${errorMessage}, retrying...`);
      await delay(RETRY_DELAY_MS);
    }
  }

  return { success: false, url, error: 'Unexpected error' };
}

/**
 * Fetch multiple pages concurrently (with rate limiting)
 */
export async function fetchMultiplePages(
  requests: Array<{ commentatorSlug: string; bookSlug: string; chapter: number }>
): Promise<Map<string, ScrapeResult>> {
  const results = new Map<string, ScrapeResult>();

  for (const req of requests) {
    const key = `${req.commentatorSlug}_${req.bookSlug}_${req.chapter}`;
    const result = await fetchCommentaryPage(req.commentatorSlug, req.bookSlug, req.chapter);
    results.set(key, result);
  }

  return results;
}

/**
 * Get cache stats
 */
export function getCacheStats(): { total: number; byCommentator: Record<string, number> } {
  const files = fs.readdirSync(CACHE_DIR).filter(f => f.endsWith('.html'));
  const byCommentator: Record<string, number> = {};

  for (const file of files) {
    const commentator = file.split('_')[0];
    byCommentator[commentator] = (byCommentator[commentator] || 0) + 1;
  }

  return { total: files.length, byCommentator };
}

/**
 * Clear cache
 */
export function clearCache(): void {
  const files = fs.readdirSync(CACHE_DIR).filter(f => f.endsWith('.html'));
  for (const file of files) {
    fs.unlinkSync(path.join(CACHE_DIR, file));
  }
}
