import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate a 6-character room code (excludes confusing chars: 0, O, I, L, 1)
const ROOM_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

export function generateRoomCode(): string {
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += ROOM_CHARS[Math.floor(Math.random() * ROOM_CHARS.length)];
  }
  return code;
}

export function isValidRoomCode(code: string): boolean {
  if (code.length !== 6) return false;
  return code.split('').every(char => ROOM_CHARS.includes(char.toUpperCase()));
}

// Format time in mm:ss
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Format percentage
export function formatPercent(value: number, decimals = 0): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

// Calculate accuracy percentage
export function calculateAccuracy(correct: number, total: number): number {
  if (total === 0) return 0;
  return correct / total;
}

// Levenshtein distance for fuzzy matching answers
export function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Check if answer is close enough (for typo tolerance)
export function isCloseMatch(userAnswer: string, correctAnswer: string, tolerance = 1): boolean {
  const normalizedUser = userAnswer.trim().toLowerCase();
  const normalizedCorrect = correctAnswer.trim().toLowerCase();

  if (normalizedUser === normalizedCorrect) return true;

  return levenshteinDistance(normalizedUser, normalizedCorrect) <= tolerance;
}

// Parse Bible reference string (e.g., "John 3:16" -> { book, chapter, verse })
export function parseBibleReference(reference: string): {
  book: string;
  chapter: number;
  verse: number;
  endVerse?: number;
} | null {
  // Match patterns like "John 3:16", "1 John 1:9", "Genesis 1:1-5"
  const match = reference.match(/^(\d?\s*\w+)\s+(\d+):(\d+)(?:-(\d+))?$/);
  if (!match) return null;

  return {
    book: match[1].trim(),
    chapter: parseInt(match[2], 10),
    verse: parseInt(match[3], 10),
    endVerse: match[4] ? parseInt(match[4], 10) : undefined,
  };
}

// Shuffle array (Fisher-Yates)
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Pick random items from array
export function pickRandom<T>(array: T[], count: number): T[] {
  return shuffleArray(array).slice(0, count);
}

// Debounce function
export function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Get today's date string (for daily challenges)
export function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

// Seeded random for deterministic daily challenges
export function seededRandom(seed: number): () => number {
  return function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

// Hash date string to number (for seeded random)
export function hashDateString(date: string): number {
  let hash = 0;
  for (let i = 0; i < date.length; i++) {
    hash = ((hash << 5) - hash) + date.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}
