/**
 * Commentary Scraper Types
 */

export type CommentatorId = 'matthew_henry' | 'john_calvin' | 'matthew_poole' | 'albert_barnes';

export interface CommentatorInfo {
  id: CommentatorId;
  displayName: string;
  urlSlug: string;  // Used in biblehub.com URLs
}

export interface CommentatorQuote {
  commentator: CommentatorId;
  displayName: string;
  quote: string;
  source: string;
  scrapedAt: string;
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

export interface ScrapeProgress {
  lastBook: string;
  lastChapter: number;
  lastCommentator: CommentatorId;
  completedCount: number;
  failedUrls: string[];
  timestamp: string;
}

export interface ScrapeResult {
  success: boolean;
  url: string;
  quote?: string;
  error?: string;
}

export interface BookInfo {
  id: string;
  name: string;
  chapters: number;
  urlSlug: string;  // Used in biblehub.com URLs
}
