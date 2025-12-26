// Text similarity scoring for translation-agnostic verse comparison
// Compares user input against multiple Bible translations

import { VerseTranslations } from './memory-verses.js';

export type TranslationKey = keyof VerseTranslations;

export interface TranslationScore {
  translation: TranslationKey;
  score: number;
  wordAccuracy: number;
  sequenceAccuracy: number;
}

export interface SimilarityResult {
  bestScore: number;
  bestTranslation: TranslationKey;
  scores: TranslationScore[];
  feedback: string;
}

// Normalize text for comparison
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[.,!?;:'"()\-—]/g, '') // Remove punctuation
    .replace(/\s+/g, ' ')            // Normalize whitespace
    .trim();
}

// Get words from text
function getWords(text: string): string[] {
  return normalizeText(text).split(' ').filter(w => w.length > 0);
}

// Calculate Levenshtein distance between two strings
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  // Initialize matrix
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill in the rest
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Calculate normalized sequence similarity (0-1)
function sequenceSimilarity(input: string, target: string): number {
  const normalizedInput = normalizeText(input);
  const normalizedTarget = normalizeText(target);

  if (normalizedInput === normalizedTarget) return 1;
  if (normalizedInput.length === 0 || normalizedTarget.length === 0) return 0;

  const distance = levenshteinDistance(normalizedInput, normalizedTarget);
  const maxLength = Math.max(normalizedInput.length, normalizedTarget.length);

  return Math.max(0, 1 - distance / maxLength);
}

// Calculate word overlap (Jaccard similarity)
function wordOverlap(input: string, target: string): number {
  const inputWords = new Set(getWords(input));
  const targetWords = new Set(getWords(target));

  if (inputWords.size === 0 || targetWords.size === 0) return 0;

  const intersection = new Set([...inputWords].filter(w => targetWords.has(w)));
  const union = new Set([...inputWords, ...targetWords]);

  return intersection.size / union.size;
}

// Calculate word order similarity using Longest Common Subsequence
function wordOrderSimilarity(input: string, target: string): number {
  const inputWords = getWords(input);
  const targetWords = getWords(target);

  if (inputWords.length === 0 || targetWords.length === 0) return 0;

  // LCS dynamic programming
  const m = inputWords.length;
  const n = targetWords.length;
  const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (inputWords[i - 1] === targetWords[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const lcsLength = dp[m][n];
  return (2 * lcsLength) / (m + n); // Normalized by average length
}

// Calculate similarity score against a single translation
function calculateTranslationScore(input: string, target: string, translation: TranslationKey): TranslationScore {
  // Sequence similarity (character-level) - weight: 40%
  const seqSim = sequenceSimilarity(input, target);

  // Word overlap (presence of correct words) - weight: 30%
  const wordSim = wordOverlap(input, target);

  // Word order (correct sequence of words) - weight: 30%
  const orderSim = wordOrderSimilarity(input, target);

  // Combined score
  const score = (seqSim * 0.4) + (wordSim * 0.3) + (orderSim * 0.3);

  return {
    translation,
    score: Math.round(score * 100),
    wordAccuracy: Math.round(wordSim * 100),
    sequenceAccuracy: Math.round(seqSim * 100),
  };
}

// Main function: Calculate similarity against all translations
export function calculateSimilarity(
  userInput: string,
  translations: VerseTranslations
): SimilarityResult {
  const scores: TranslationScore[] = [];

  // Calculate score for each translation
  for (const [key, value] of Object.entries(translations)) {
    const translationKey = key as TranslationKey;
    const score = calculateTranslationScore(userInput, value, translationKey);
    scores.push(score);
  }

  // Sort by score descending
  scores.sort((a, b) => b.score - a.score);

  const bestScore = scores[0].score;
  const bestTranslation = scores[0].translation;

  // Generate feedback based on score
  let feedback: string;
  if (bestScore >= 95) {
    feedback = 'Perfect! Word-perfect recall!';
  } else if (bestScore >= 85) {
    feedback = 'Excellent! Nearly perfect!';
  } else if (bestScore >= 70) {
    feedback = 'Good job! You got most of it right.';
  } else if (bestScore >= 50) {
    feedback = 'Nice effort! Keep practicing.';
  } else if (bestScore >= 30) {
    feedback = 'Getting there! Review the verse.';
  } else {
    feedback = 'Keep memorizing! You\'ll get it!';
  }

  return {
    bestScore,
    bestTranslation,
    scores,
    feedback,
  };
}

// Quick score calculation (just returns best score)
export function quickScore(userInput: string, translations: VerseTranslations): number {
  const result = calculateSimilarity(userInput, translations);
  return result.bestScore;
}

// Get translation display name
export function getTranslationName(key: TranslationKey): string {
  const names: Record<TranslationKey, string> = {
    ESV: 'English Standard Version',
    NIV: 'New International Version',
    KJV: 'King James Version',
    NASB: 'New American Standard Bible',
  };
  return names[key];
}
