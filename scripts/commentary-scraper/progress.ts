/**
 * Progress Tracker
 * Enables resume capability for long-running scrapes
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import type { ScrapeProgress, CommentatorId } from './types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROGRESS_FILE = path.join(__dirname, 'progress.json');

/**
 * Load progress from file
 */
export function loadProgress(): ScrapeProgress | null {
  if (!fs.existsSync(PROGRESS_FILE)) {
    return null;
  }

  try {
    const data = fs.readFileSync(PROGRESS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return null;
  }
}

/**
 * Save progress to file
 */
export function saveProgress(progress: ScrapeProgress): void {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2), 'utf-8');
}

/**
 * Create initial progress state
 */
export function createInitialProgress(): ScrapeProgress {
  return {
    lastBook: '',
    lastChapter: 0,
    lastCommentator: 'matthew_henry',
    completedCount: 0,
    failedUrls: [],
    timestamp: new Date().toISOString(),
  };
}

/**
 * Update progress after successful scrape
 */
export function updateProgress(
  progress: ScrapeProgress,
  book: string,
  chapter: number,
  commentator: CommentatorId
): void {
  progress.lastBook = book;
  progress.lastChapter = chapter;
  progress.lastCommentator = commentator;
  progress.completedCount++;
  progress.timestamp = new Date().toISOString();
  saveProgress(progress);
}

/**
 * Record failed URL
 */
export function recordFailure(progress: ScrapeProgress, url: string): void {
  if (!progress.failedUrls.includes(url)) {
    progress.failedUrls.push(url);
    saveProgress(progress);
  }
}

/**
 * Clear progress (start fresh)
 */
export function clearProgress(): void {
  if (fs.existsSync(PROGRESS_FILE)) {
    fs.unlinkSync(PROGRESS_FILE);
  }
}

/**
 * Get progress summary
 */
export function getProgressSummary(progress: ScrapeProgress | null): string {
  if (!progress) {
    return 'No progress recorded. Starting fresh.';
  }

  const totalExpected = 1189 * 4; // 1189 chapters * 4 commentators
  const percentage = ((progress.completedCount / totalExpected) * 100).toFixed(1);

  return `Progress: ${progress.completedCount}/${totalExpected} (${percentage}%)
Last: ${progress.lastBook} ${progress.lastChapter} (${progress.lastCommentator})
Failed URLs: ${progress.failedUrls.length}
Last updated: ${progress.timestamp}`;
}

/**
 * Check if a specific chapter/commentator has been completed
 */
export function isCompleted(
  progress: ScrapeProgress | null,
  _book: string,
  _chapter: number,
  _commentator: CommentatorId
): boolean {
  if (!progress) return false;

  // Simple check based on linear progression
  // Could be enhanced with a Set of completed items
  // For now, rely on cache files existing
  return false;
}
