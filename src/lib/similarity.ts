// Text similarity scoring for translation-agnostic verse comparison
// Compares user input against multiple Bible translations

import { VerseTranslations } from '@/data/memory-verses';

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

// ============================================
// CATECHISM-SPECIFIC SIMILARITY SCORING
// For free-response phase of Test All 107
// ============================================

// Theological key terms that are especially important in Westminster Catechism answers
const THEOLOGICAL_KEY_TERMS = new Set([
  // God's attributes
  'god', 'spirit', 'infinite', 'eternal', 'unchangeable', 'being', 'wisdom', 'power',
  'holiness', 'justice', 'goodness', 'truth', 'trinity', 'godhead', 'persons',
  'father', 'son', 'holy', 'ghost', 'substance', 'glory',

  // Redemption terms
  'christ', 'jesus', 'lord', 'redeemer', 'savior', 'mediator', 'prophet', 'priest', 'king',
  'redemption', 'salvation', 'atonement', 'sacrifice', 'blood', 'cross', 'death',
  'resurrection', 'ascension', 'intercession',

  // Application of redemption
  'grace', 'faith', 'justification', 'sanctification', 'adoption', 'effectual', 'calling',
  'repentance', 'forgiveness', 'pardon', 'righteousness', 'imputed', 'believers',

  // Sin and fall
  'sin', 'sinners', 'fall', 'transgression', 'guilt', 'corruption', 'misery',
  'covenant', 'adam', 'disobedience', 'death',

  // Law and duty
  'law', 'commandments', 'obedience', 'duty', 'love', 'worship', 'glorify', 'enjoy',
  'sabbath', 'honor', 'neighbor',

  // Means of grace
  'word', 'scripture', 'sacrament', 'sacraments', 'baptism', 'supper', 'prayer',
  'ordinance', 'signs', 'seals', 'benefits',

  // Important qualifiers
  'only', 'alone', 'freely', 'forever', 'eternal', 'everlasting',
]);

// Extract theological key terms from text
function extractKeyTerms(words: string[]): string[] {
  return words.filter(w => THEOLOGICAL_KEY_TERMS.has(w.toLowerCase()));
}

// Calculate key term coverage (what percentage of important terms are present)
function keyTermCoverage(userWords: string[], correctWords: string[]): number {
  const correctKeyTerms = extractKeyTerms(correctWords);
  if (correctKeyTerms.length === 0) return 1; // No key terms to check

  const userWordSet = new Set(userWords.map(w => w.toLowerCase()));
  const foundTerms = correctKeyTerms.filter(t => userWordSet.has(t.toLowerCase()));

  return foundTerms.length / correctKeyTerms.length;
}

// Calculate phrase-level similarity (for multi-word phrases that should appear together)
function phraseSimilarity(userText: string, correctText: string): number {
  // Important Westminster phrases that should appear together
  const importantPhrases = [
    'glorify god',
    'enjoy him forever',
    'chief end',
    'covenant of grace',
    'covenant of life',
    'effectual calling',
    'free grace',
    'faith alone',
    'imputed to us',
    'same in substance',
    'equal in power and glory',
    'two distinct natures',
    'one person',
    'more and more',
    'die unto sin',
    'live unto righteousness',
    'signs and seals',
    'worthy receivers',
    'spiritual nourishment',
  ];

  const normalizedUser = userText.toLowerCase();
  const normalizedCorrect = correctText.toLowerCase();

  // Count phrases that should be present
  const requiredPhrases = importantPhrases.filter(p => normalizedCorrect.includes(p));
  if (requiredPhrases.length === 0) return 1;

  const foundPhrases = requiredPhrases.filter(p => normalizedUser.includes(p));
  return foundPhrases.length / requiredPhrases.length;
}

export interface CatechismSimilarityResult {
  score: number;                    // 0-100 overall score
  wordAccuracy: number;             // Percentage of correct words present
  orderAccuracy: number;            // How well words are in correct order
  keyTermAccuracy: number;          // Percentage of theological key terms present
  phraseAccuracy: number;           // Important phrases preserved
  feedback: string;                 // User-friendly feedback
  missingKeyTerms: string[];        // Key terms that were missed
}

// Main catechism similarity function for Phase 2 free-response scoring
export function calculateCatechismSimilarity(
  userInput: string,
  correctAnswer: string
): CatechismSimilarityResult {
  // Normalize both texts
  const normalizedUser = normalizeText(userInput);
  const normalizedCorrect = normalizeText(correctAnswer);

  // Handle empty inputs
  if (!normalizedUser) {
    return {
      score: 0,
      wordAccuracy: 0,
      orderAccuracy: 0,
      keyTermAccuracy: 0,
      phraseAccuracy: 0,
      feedback: 'No answer provided.',
      missingKeyTerms: extractKeyTerms(getWords(correctAnswer)),
    };
  }

  // Exact match check
  if (normalizedUser === normalizedCorrect) {
    return {
      score: 100,
      wordAccuracy: 100,
      orderAccuracy: 100,
      keyTermAccuracy: 100,
      phraseAccuracy: 100,
      feedback: 'Perfect! Word-perfect answer!',
      missingKeyTerms: [],
    };
  }

  const userWords = getWords(userInput);
  const correctWords = getWords(correctAnswer);

  // 1. Word overlap (presence of correct words) - 30% weight
  const wordSim = wordOverlap(userInput, correctAnswer);

  // 2. Word order (LCS) - 25% weight
  const orderSim = wordOrderSimilarity(userInput, correctAnswer);

  // 3. Key theological terms - 25% weight
  const keyTermSim = keyTermCoverage(userWords, correctWords);

  // 4. Important phrases preserved - 20% weight
  const phraseSim = phraseSimilarity(userInput, correctAnswer);

  // Weighted combination
  const rawScore = (wordSim * 0.30) + (orderSim * 0.25) + (keyTermSim * 0.25) + (phraseSim * 0.20);
  const score = Math.round(rawScore * 100);

  // Find missing key terms
  const userWordSet = new Set(userWords.map(w => w.toLowerCase()));
  const correctKeyTerms = extractKeyTerms(correctWords);
  const missingKeyTerms = correctKeyTerms.filter(t => !userWordSet.has(t.toLowerCase()));

  // Generate feedback
  let feedback: string;
  if (score >= 95) {
    feedback = 'Excellent! Nearly perfect recall!';
  } else if (score >= 85) {
    feedback = 'Great job! You know this well.';
  } else if (score >= 70) {
    feedback = 'Good effort! Review the precise wording.';
  } else if (score >= 50) {
    feedback = 'On the right track. Focus on key theological terms.';
  } else if (score >= 30) {
    feedback = 'Some elements correct. Study this answer more carefully.';
  } else {
    feedback = 'Keep memorizing! Pay attention to the key phrases.';
  }

  // Add specific feedback about missing key terms
  if (missingKeyTerms.length > 0 && missingKeyTerms.length <= 3) {
    feedback += ` Missing: "${missingKeyTerms.join('", "')}"`;
  } else if (missingKeyTerms.length > 3) {
    feedback += ` Missing ${missingKeyTerms.length} key terms.`;
  }

  return {
    score,
    wordAccuracy: Math.round(wordSim * 100),
    orderAccuracy: Math.round(orderSim * 100),
    keyTermAccuracy: Math.round(keyTermSim * 100),
    phraseAccuracy: Math.round(phraseSim * 100),
    feedback,
    missingKeyTerms,
  };
}

// Quick catechism score (just returns score number)
export function quickCatechismScore(userInput: string, correctAnswer: string): number {
  return calculateCatechismSimilarity(userInput, correctAnswer).score;
}
