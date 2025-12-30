/**
 * Quote Extractor
 * Parses BibleHub HTML and extracts commentary quotes
 */

import { MIN_QUOTE_WORDS, MAX_QUOTE_WORDS, TARGET_QUOTE_WORDS } from './config.js';
import { modernizeText } from './modernizer.js';

/**
 * Extract FULL commentary text from BibleHub HTML (for AI summarization)
 * Does not truncate - returns all available text
 */
export function extractFullTextFromHtml(html: string): string | null {
  // Remove script and style tags
  const cleanHtml = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '');

  // Try to find the main commentary content using .chap class
  let contentMatch = cleanHtml.match(/<div[^>]*class="[^"]*chap[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i);

  if (!contentMatch) {
    contentMatch = cleanHtml.match(/<div[^>]*class="chap"[^>]*>([\s\S]+?)(?=<div[^>]*class="[^"]*(?:footer|sidebar|nav)[^"]*"|<\/body>)/i);
  }

  if (!contentMatch) {
    // Try [class*="comm"] elements
    const commMatches = cleanHtml.match(/<span[^>]*class="[^"]*comm[^"]*"[^>]*>([\s\S]*?)<\/span>/gi);
    if (commMatches && commMatches.length > 0) {
      contentMatch = [null, commMatches.join(' ')] as unknown as RegExpMatchArray;
    }
  }

  if (!contentMatch) {
    // Fallback: collect all substantial paragraphs
    const paragraphs = cleanHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
    if (paragraphs && paragraphs.length > 0) {
      const substantive = paragraphs.filter(p => p.length > 100);
      if (substantive.length > 0) {
        contentMatch = [null, substantive.join(' ')] as unknown as RegExpMatchArray;
      }
    }
  }

  if (!contentMatch) {
    return null;
  }

  // Extract text from HTML
  let text = contentMatch[1]
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/p>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/\s+/g, ' ')
    .trim();

  // Basic cleanup without truncation
  text = text.replace(/^[A-Za-z1-3]+\s+\d+:\d+[\s\-,\d]*/g, '');
  text = text.replace(/^\d+:\d+[\s\-,\d]*/g, '');

  const wordCount = text.split(/\s+/).filter(w => w.length > 0).length;
  if (wordCount < 50) {
    return null;
  }

  return text;
}

/**
 * Extract the main commentary text from BibleHub HTML
 */
export function extractQuoteFromHtml(html: string, _commentator: string): string | null {
  // BibleHub commentary pages have the main content in specific divs
  // The .chap class contains the full chapter commentary

  // Remove script and style tags
  const cleanHtml = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '');

  // Try to find the main commentary content using .chap class
  // This captures the whole chapter commentary on BibleHub
  let contentMatch = cleanHtml.match(/<div[^>]*class="[^"]*chap[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i);

  if (!contentMatch) {
    // Try a more greedy match for .chap
    contentMatch = cleanHtml.match(/<div[^>]*class="chap"[^>]*>([\s\S]+?)(?=<div[^>]*class="[^"]*(?:footer|sidebar|nav)[^"]*"|<\/body>)/i);
  }

  if (!contentMatch) {
    // Try [class*="comm"] elements - collect first few
    const commMatches = cleanHtml.match(/<span[^>]*class="[^"]*comm[^"]*"[^>]*>([\s\S]*?)<\/span>/gi);
    if (commMatches && commMatches.length > 0) {
      const combinedComm = commMatches.slice(0, 3).join(' ');
      contentMatch = [null, combinedComm] as unknown as RegExpMatchArray;
    }
  }

  if (!contentMatch) {
    // Fallback: look for paragraphs with substantial content
    const paragraphs = cleanHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
    if (paragraphs && paragraphs.length > 0) {
      // Take first few paragraphs that aren't verse references
      const substantive = paragraphs.filter(p => p.length > 200);
      if (substantive.length > 0) {
        contentMatch = [null, substantive.slice(0, 3).join(' ')] as unknown as RegExpMatchArray;
      }
    }
  }

  if (!contentMatch) {
    return null;
  }

  // Extract text from HTML
  let text = contentMatch[1]
    // Remove HTML tags but preserve spacing
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/p>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    // Decode HTML entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    // Clean up whitespace
    .replace(/\s+/g, ' ')
    .trim();

  // Remove verse references at the start like "Genesis 1:1" or "1:1,2"
  text = text.replace(/^[A-Za-z1-3]+\s+\d+:\d+[\s\-,\d]*/g, '');
  text = text.replace(/^\d+:\d+[\s\-,\d]*/g, '');

  // Remove verse references like "(Genesis 1:1)" or "[Gen. 1:1]"
  text = text.replace(/\([^)]*\d+:\d+[^)]*\)/g, '');
  text = text.replace(/\[[^\]]*\d+:\d+[^\]]*\]/g, '');

  // Remove inline verse numbers like "1." or "2." at start of sentences
  text = text.replace(/\.\s*\d+\.\s+/g, '. ');

  // Remove Latin text (common in Calvin's commentary) - look for Latin patterns
  text = text.replace(/\b[A-Z][a-z]*\s+(?:erat|autem|et|in|ad|de|cum|per|pro|ante|post|super|sub|trans|contra|inter|intra|extra|ultra|citra|supra|infra)\s+[a-z]+/gi, '');
  text = text.replace(/\d+\.\s*[A-Z][a-z]+\s+(?:erat|autem|et|Deus)[^.]*\./g, '');

  // Remove inline scripture links
  text = text.replace(/\(see [^)]+\)/gi, '');

  // Trim to target word count
  text = trimToWordCount(text, TARGET_QUOTE_WORDS, MAX_QUOTE_WORDS);

  // Check minimum length
  const wordCount = countWords(text);
  if (wordCount < MIN_QUOTE_WORDS) {
    return null;
  }

  // Modernize archaic language
  text = modernizeText(text);

  return text;
}

/**
 * Count words in text
 */
function countWords(text: string): number {
  return text.split(/\s+/).filter(w => w.length > 0).length;
}

/**
 * Trim text to word count, breaking at sentence boundaries
 */
function trimToWordCount(text: string, target: number, max: number): string {
  const words = text.split(/\s+/);

  if (words.length <= target) {
    return text;
  }

  // Find sentence boundary near target
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  let result = '';
  let wordCount = 0;

  for (const sentence of sentences) {
    const sentenceWords = countWords(sentence);

    // If adding this sentence exceeds max, stop
    if (wordCount + sentenceWords > max && wordCount > 0) {
      break;
    }

    result += sentence + ' ';
    wordCount += sentenceWords;

    // If we've reached target, stop at next good break
    if (wordCount >= target) {
      break;
    }
  }

  return result.trim();
}

/**
 * Parse HTML and extract paragraphs
 */
export function extractParagraphs(html: string): string[] {
  const paragraphs: string[] = [];

  // Find all paragraph-like content
  const matches = html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi);

  for (const match of matches) {
    const text = match[1]
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (text.length > 50) {  // Skip very short paragraphs
      paragraphs.push(text);
    }
  }

  return paragraphs;
}

/**
 * Extract book and chapter info from URL
 */
export function parseCommentaryUrl(url: string): { commentator: string; book: string; chapter: number } | null {
  // Pattern: https://biblehub.com/commentaries/{commentator}/{book}/{chapter}.htm
  const match = url.match(/\/commentaries\/(\w+)\/(\w+)\/(\d+)\.htm/);

  if (!match) return null;

  return {
    commentator: match[1],
    book: match[2],
    chapter: parseInt(match[3], 10),
  };
}

/**
 * Clean up extracted text for display
 */
export function cleanQuoteText(text: string): string {
  return text
    // Fix common OCR/encoding issues
    .replace(/\u2019/g, "'")  // Smart quote
    .replace(/\u201c/g, '"')  // Left quote
    .replace(/\u201d/g, '"')  // Right quote
    .replace(/\u2014/g, '—')  // Em dash
    .replace(/\u2013/g, '–')  // En dash
    // Remove multiple spaces
    .replace(/\s+/g, ' ')
    // Ensure proper sentence spacing
    .replace(/\.([A-Z])/g, '. $1')
    .trim();
}
