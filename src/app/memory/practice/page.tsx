'use client';

import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, BookOpen, Send, RotateCcw, Shuffle, ChevronDown, Eye, EyeOff,
  Type, Grid3X3, MousePointer, ArrowUpDown, Layers, Volume2, GraduationCap
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import {
  getRandomVerse,
  getRandomVerseByDifficulty,
  getVersesByBook,
  getAllBooks,
  getDifficultyCounts,
  MemoryVerse,
  Difficulty,
} from '@/data/memory-verses';
import { calculateSimilarity, SimilarityResult } from '@/lib/similarity';

// ============================================================================
// TYPES & CONSTANTS
// ============================================================================

type PracticeState = 'select' | 'practice' | 'result';
type FilterMode = 'difficulty' | 'book';

// All quiz modes based on research from scripture memory apps
type QuizMode =
  | 'type_out'        // Full typing (current mode)
  | 'first_letter'    // Type first letter of each word (Scripture Typer)
  | 'word_bank'       // Fill blanks from word bank
  | 'tap_reveal'      // Tap to reveal phrase by phrase
  | 'reorder'         // Drag phrases to correct order
  | 'flashcard'       // Flip card reference <-> verse
  | 'listen'          // Audio playback with recitation
  | 'progressive';    // Progressive blanks (easy -> hard)

interface QuizModeInfo {
  id: QuizMode;
  label: string;
  description: string;
  icon: React.ReactNode;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const QUIZ_MODES: QuizModeInfo[] = [
  {
    id: 'tap_reveal',
    label: 'Tap to Reveal',
    description: 'Reveal verse phrase by phrase',
    icon: <MousePointer className="h-5 w-5" />,
    difficulty: 'beginner',
  },
  {
    id: 'flashcard',
    label: 'Flashcard',
    description: 'Flip between reference and verse',
    icon: <Layers className="h-5 w-5" />,
    difficulty: 'beginner',
  },
  {
    id: 'listen',
    label: 'Listen & Recite',
    description: 'Hear the verse, then recite',
    icon: <Volume2 className="h-5 w-5" />,
    difficulty: 'beginner',
  },
  {
    id: 'word_bank',
    label: 'Word Bank',
    description: 'Fill blanks from word options',
    icon: <Grid3X3 className="h-5 w-5" />,
    difficulty: 'intermediate',
  },
  {
    id: 'first_letter',
    label: 'First Letter',
    description: 'Type first letter of each word',
    icon: <Type className="h-5 w-5" />,
    difficulty: 'intermediate',
  },
  {
    id: 'reorder',
    label: 'Phrase Reorder',
    description: 'Arrange phrases in order',
    icon: <ArrowUpDown className="h-5 w-5" />,
    difficulty: 'intermediate',
  },
  {
    id: 'progressive',
    label: 'Progressive Blanks',
    description: 'Blanks increase each round',
    icon: <GraduationCap className="h-5 w-5" />,
    difficulty: 'advanced',
  },
  {
    id: 'type_out',
    label: 'Type Out',
    description: 'Type the entire verse',
    icon: <Send className="h-5 w-5" />,
    difficulty: 'advanced',
  },
];

const DIFFICULTY_LABELS: Record<Difficulty, { label: string; description: string; color: string }> = {
  easy: { label: 'Easy', description: 'Common, well-known verses', color: 'text-green-600 bg-green-100' },
  medium: { label: 'Medium', description: 'Popular verses', color: 'text-yellow-600 bg-yellow-100' },
  hard: { label: 'Hard', description: 'Less common verses', color: 'text-red-600 bg-red-100' },
};

const DIFFICULTY_COLORS: Record<'beginner' | 'intermediate' | 'advanced', string> = {
  beginner: 'border-green-200 bg-green-50',
  intermediate: 'border-yellow-200 bg-yellow-50',
  advanced: 'border-red-200 bg-red-50',
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function getWords(text: string): string[] {
  return text.split(/\s+/).filter(w => w.length > 0);
}

function normalizeWord(word: string): string {
  return word.toLowerCase().replace(/[.,!?;:'"\-—()]/g, '');
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function splitIntoPhrases(text: string, minPhraseLength: number = 3): string[] {
  // Split by punctuation first, then by length
  const parts = text.split(/([,;:.!?]+\s*)/);
  const phrases: string[] = [];
  let current = '';

  for (const part of parts) {
    current += part;
    const words = getWords(current);
    if (words.length >= minPhraseLength && /[,;:.!?]/.test(part)) {
      phrases.push(current.trim());
      current = '';
    }
  }

  if (current.trim()) {
    phrases.push(current.trim());
  }

  // If we got very few phrases, split more aggressively
  if (phrases.length < 3) {
    const words = getWords(text);
    const chunkSize = Math.ceil(words.length / 4);
    const newPhrases: string[] = [];
    for (let i = 0; i < words.length; i += chunkSize) {
      newPhrases.push(words.slice(i, i + chunkSize).join(' '));
    }
    return newPhrases;
  }

  return phrases;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function PracticePage() {
  // Core state
  const [state, setState] = useState<PracticeState>('select');
  const [currentVerse, setCurrentVerse] = useState<MemoryVerse | null>(null);
  const [quizMode, setQuizMode] = useState<QuizMode>('first_letter');
  const [result, setResult] = useState<SimilarityResult | null>(null);

  // Filter state
  const [filterMode, setFilterMode] = useState<FilterMode>('difficulty');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedBook, setSelectedBook] = useState<string>('all');

  // Practice history
  const [practiceHistory, setPracticeHistory] = useState<{
    verse: string;
    score: number;
    difficulty: Difficulty;
    mode: QuizMode;
  }[]>([]);

  // Mode-specific state
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  // First Letter mode state
  const [firstLetterInputs, setFirstLetterInputs] = useState<string[]>([]);
  const [firstLetterCorrect, setFirstLetterCorrect] = useState<boolean[]>([]);
  const firstLetterRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Word Bank mode state
  const [wordBankSelected, setWordBankSelected] = useState<number[]>([]);
  const [wordBankOptions, setWordBankOptions] = useState<string[]>([]);
  const [wordBankBlanks, setWordBankBlanks] = useState<number[]>([]);

  // Tap to Reveal mode state
  const [revealedPhrases, setRevealedPhrases] = useState<number>(0);
  const [phrases, setPhrases] = useState<string[]>([]);

  // Flashcard mode state
  const [isFlipped, setIsFlipped] = useState(false);
  const [selfRating, setSelfRating] = useState<'easy' | 'medium' | 'hard' | null>(null);

  // Reorder mode state
  const [reorderPhrases, setReorderPhrases] = useState<string[]>([]);
  const [correctOrder, setCorrectOrder] = useState<string[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // Listen mode state
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasListened, setHasListened] = useState(false);

  // Progressive mode state
  const [progressiveLevel, setProgressiveLevel] = useState(1);
  const [progressiveBlanks, setProgressiveBlanks] = useState<number[]>([]);
  const [progressiveAnswers, setProgressiveAnswers] = useState<string[]>([]);

  const books = getAllBooks();
  const difficultyCounts = getDifficultyCounts();

  // Get the verse text (ESV as default)
  const verseText = currentVerse?.translations.ESV || '';
  const verseWords = useMemo(() => getWords(verseText), [verseText]);

  // ============================================================================
  // INITIALIZATION FUNCTIONS
  // ============================================================================

  const initializeFirstLetter = useCallback((words: string[]) => {
    setFirstLetterInputs(new Array(words.length).fill(''));
    setFirstLetterCorrect(new Array(words.length).fill(false));
    firstLetterRefs.current = new Array(words.length).fill(null);
  }, []);

  const initializeWordBank = useCallback((words: string[]) => {
    // Blank out ~40% of words
    const blankCount = Math.max(2, Math.floor(words.length * 0.4));
    const indices = Array.from({ length: words.length }, (_, i) => i);
    const shuffledIndices = shuffleArray(indices);
    const blanks = shuffledIndices.slice(0, blankCount).sort((a, b) => a - b);

    // Create word options (correct words + some distractors)
    const correctWords = blanks.map(i => words[i]);
    const distractors = ['the', 'and', 'to', 'of', 'a', 'in', 'that', 'is', 'was', 'for', 'it', 'with', 'as', 'his', 'on', 'be'];
    const extraWords = shuffleArray(distractors).slice(0, Math.min(4, blankCount));
    const options = shuffleArray([...correctWords, ...extraWords]);

    setWordBankBlanks(blanks);
    setWordBankOptions(options);
    setWordBankSelected([]);
  }, []);

  const initializeTapReveal = useCallback((text: string) => {
    const versePhrase = splitIntoPhrases(text);
    setPhrases(versePhrase);
    setRevealedPhrases(0);
  }, []);

  const initializeReorder = useCallback((text: string) => {
    const versePhrase = splitIntoPhrases(text);
    setCorrectOrder(versePhrase);
    setReorderPhrases(shuffleArray(versePhrase));
  }, []);

  const initializeProgressive = useCallback((words: string[], level: number) => {
    // Level 1: 20% blanks, Level 2: 40%, Level 3: 60%, Level 4: 80%
    const blankPercent = Math.min(0.8, 0.2 * level);
    const blankCount = Math.max(1, Math.floor(words.length * blankPercent));
    const indices = Array.from({ length: words.length }, (_, i) => i);
    const blanks = shuffleArray(indices).slice(0, blankCount).sort((a, b) => a - b);

    setProgressiveBlanks(blanks);
    setProgressiveAnswers(new Array(blanks.length).fill(''));
  }, []);

  // ============================================================================
  // START PRACTICE
  // ============================================================================

  const startPractice = useCallback(() => {
    let verse: MemoryVerse;

    if (filterMode === 'difficulty') {
      if (selectedDifficulty === 'all') {
        verse = getRandomVerse();
      } else {
        verse = getRandomVerseByDifficulty(selectedDifficulty);
      }
    } else {
      if (selectedBook === 'all') {
        verse = getRandomVerse();
      } else {
        const bookVerses = getVersesByBook(selectedBook);
        verse = bookVerses[Math.floor(Math.random() * bookVerses.length)];
      }
    }

    setCurrentVerse(verse);
    setResult(null);
    setShowAnswer(false);
    setUserAnswer('');

    // Initialize mode-specific state
    const words = getWords(verse.translations.ESV);

    switch (quizMode) {
      case 'first_letter':
        initializeFirstLetter(words);
        break;
      case 'word_bank':
        initializeWordBank(words);
        break;
      case 'tap_reveal':
        initializeTapReveal(verse.translations.ESV);
        break;
      case 'flashcard':
        setIsFlipped(false);
        setSelfRating(null);
        break;
      case 'reorder':
        initializeReorder(verse.translations.ESV);
        break;
      case 'listen':
        setIsPlaying(false);
        setHasListened(false);
        setUserAnswer('');
        break;
      case 'progressive':
        setProgressiveLevel(1);
        initializeProgressive(words, 1);
        break;
      case 'type_out':
        setUserAnswer('');
        break;
    }

    setState('practice');
  }, [filterMode, selectedDifficulty, selectedBook, quizMode, initializeFirstLetter, initializeWordBank, initializeTapReveal, initializeReorder, initializeProgressive]);

  // ============================================================================
  // SUBMIT HANDLERS
  // ============================================================================

  const handleSubmit = useCallback(() => {
    if (!currentVerse) return;

    let score = 0;
    let userText = '';

    switch (quizMode) {
      case 'type_out':
        if (!userAnswer.trim()) return;
        userText = userAnswer;
        break;

      case 'first_letter': {
        const correctCount = firstLetterCorrect.filter(Boolean).length;
        score = Math.round((correctCount / verseWords.length) * 100);
        userText = firstLetterInputs.join(' ');
        break;
      }

      case 'word_bank': {
        const words = verseWords;
        const userWords = words.map((w, i) => {
          if (wordBankBlanks.includes(i)) {
            const blankIdx = wordBankBlanks.indexOf(i);
            return wordBankSelected[blankIdx] !== undefined
              ? wordBankOptions[wordBankSelected[blankIdx]]
              : '_____';
          }
          return w;
        });
        userText = userWords.join(' ');
        break;
      }

      case 'tap_reveal': {
        score = revealedPhrases === phrases.length ? 100 : Math.round((revealedPhrases / phrases.length) * 100);
        userText = phrases.slice(0, revealedPhrases).join(' ');
        break;
      }

      case 'flashcard': {
        // Self-rated
        score = selfRating === 'easy' ? 100 : selfRating === 'medium' ? 70 : 40;
        userText = '(self-rated)';
        break;
      }

      case 'reorder': {
        let correct = 0;
        for (let i = 0; i < reorderPhrases.length; i++) {
          if (reorderPhrases[i] === correctOrder[i]) correct++;
        }
        score = Math.round((correct / correctOrder.length) * 100);
        userText = reorderPhrases.join(' ');
        break;
      }

      case 'listen':
        if (!userAnswer.trim()) return;
        userText = userAnswer;
        break;

      case 'progressive': {
        const words = verseWords;
        let correct = 0;
        progressiveBlanks.forEach((blankIdx, i) => {
          const expected = normalizeWord(words[blankIdx]);
          const actual = normalizeWord(progressiveAnswers[i] || '');
          if (expected === actual) correct++;
        });
        score = Math.round((correct / progressiveBlanks.length) * 100);
        userText = progressiveAnswers.join(' ');
        break;
      }
    }

    // Calculate similarity for modes that use text input
    if (['type_out', 'listen', 'word_bank'].includes(quizMode) && userText) {
      const similarityResult = calculateSimilarity(userText, currentVerse.translations);
      setResult(similarityResult);
      score = similarityResult.bestScore;
    } else if (['first_letter', 'progressive'].includes(quizMode)) {
      // For these modes, we create a simple result
      setResult({
        bestScore: score,
        bestTranslation: 'ESV',
        scores: [{ translation: 'ESV', score, wordAccuracy: score, sequenceAccuracy: score }],
        feedback: score >= 95 ? 'Perfect!' :
          score >= 85 ? 'Excellent!' :
          score >= 70 ? 'Good job!' :
          score >= 50 ? 'Nice effort!' : 'Keep practicing!',
      });
    } else {
      // For tap_reveal, flashcard, reorder
      setResult({
        bestScore: score,
        bestTranslation: 'ESV',
        scores: [{ translation: 'ESV', score, wordAccuracy: score, sequenceAccuracy: score }],
        feedback: score >= 95 ? 'Perfect!' :
          score >= 85 ? 'Excellent!' :
          score >= 70 ? 'Good job!' :
          score >= 50 ? 'Nice effort!' : 'Keep practicing!',
      });
    }

    setPracticeHistory(prev => [
      { verse: currentVerse.reference, score, difficulty: currentVerse.difficulty, mode: quizMode },
      ...prev.slice(0, 9),
    ]);
    setState('result');
  }, [currentVerse, quizMode, userAnswer, firstLetterCorrect, firstLetterInputs, verseWords, wordBankBlanks, wordBankSelected, wordBankOptions, revealedPhrases, phrases, selfRating, reorderPhrases, correctOrder, progressiveBlanks, progressiveAnswers]);

  // ============================================================================
  // MODE-SPECIFIC HANDLERS
  // ============================================================================

  // First Letter handlers
  const handleFirstLetterInput = useCallback((index: number, value: string) => {
    const char = value.slice(-1).toLowerCase();
    if (!char) return;

    const newInputs = [...firstLetterInputs];
    newInputs[index] = char;
    setFirstLetterInputs(newInputs);

    const expectedFirst = normalizeWord(verseWords[index])[0];
    const isCorrect = char === expectedFirst;

    const newCorrect = [...firstLetterCorrect];
    newCorrect[index] = isCorrect;
    setFirstLetterCorrect(newCorrect);

    // Auto-advance to next input
    if (isCorrect && index < verseWords.length - 1) {
      setTimeout(() => {
        firstLetterRefs.current[index + 1]?.focus();
      }, 100);
    }
  }, [firstLetterInputs, firstLetterCorrect, verseWords]);

  // Word Bank handlers
  const handleWordBankSelect = useCallback((optionIndex: number) => {
    const nextBlankIdx = wordBankSelected.length;
    if (nextBlankIdx >= wordBankBlanks.length) return;

    setWordBankSelected([...wordBankSelected, optionIndex]);
  }, [wordBankSelected, wordBankBlanks.length]);

  const handleWordBankUndo = useCallback(() => {
    if (wordBankSelected.length === 0) return;
    setWordBankSelected(wordBankSelected.slice(0, -1));
  }, [wordBankSelected]);

  // Tap to Reveal handler
  const handleRevealNext = useCallback(() => {
    if (revealedPhrases < phrases.length) {
      setRevealedPhrases(revealedPhrases + 1);
    }
  }, [revealedPhrases, phrases.length]);

  // Reorder handlers
  const handleDragStart = useCallback((index: number) => {
    setDraggedIndex(index);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newPhrases = [...reorderPhrases];
    const [dragged] = newPhrases.splice(draggedIndex, 1);
    newPhrases.splice(index, 0, dragged);
    setReorderPhrases(newPhrases);
    setDraggedIndex(index);
  }, [draggedIndex, reorderPhrases]);

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null);
  }, []);

  // Listen mode handler
  const handlePlayAudio = useCallback(() => {
    if (!currentVerse || isPlaying) return;

    const utterance = new SpeechSynthesisUtterance(currentVerse.translations.ESV);
    utterance.rate = 0.9;
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
      setHasListened(true);
    };

    window.speechSynthesis.speak(utterance);
  }, [currentVerse, isPlaying]);

  // Progressive mode - next level
  const handleProgressiveNext = useCallback(() => {
    if (!currentVerse) return;

    const words = getWords(currentVerse.translations.ESV);
    let correct = 0;
    progressiveBlanks.forEach((blankIdx, i) => {
      const expected = normalizeWord(words[blankIdx]);
      const actual = normalizeWord(progressiveAnswers[i] || '');
      if (expected === actual) correct++;
    });

    if (correct === progressiveBlanks.length) {
      if (progressiveLevel >= 4) {
        handleSubmit();
      } else {
        const nextLevel = progressiveLevel + 1;
        setProgressiveLevel(nextLevel);
        initializeProgressive(words, nextLevel);
      }
    }
  }, [currentVerse, progressiveBlanks, progressiveAnswers, progressiveLevel, handleSubmit, initializeProgressive]);

  // ============================================================================
  // RESET & NAVIGATION
  // ============================================================================

  const handleTryAgain = useCallback(() => {
    if (!currentVerse) return;

    setResult(null);
    setShowAnswer(false);
    setUserAnswer('');

    const words = getWords(currentVerse.translations.ESV);

    switch (quizMode) {
      case 'first_letter':
        initializeFirstLetter(words);
        break;
      case 'word_bank':
        initializeWordBank(words);
        break;
      case 'tap_reveal':
        initializeTapReveal(currentVerse.translations.ESV);
        break;
      case 'flashcard':
        setIsFlipped(false);
        setSelfRating(null);
        break;
      case 'reorder':
        initializeReorder(currentVerse.translations.ESV);
        break;
      case 'listen':
        setHasListened(false);
        setUserAnswer('');
        break;
      case 'progressive':
        setProgressiveLevel(1);
        initializeProgressive(words, 1);
        break;
    }

    setState('practice');
  }, [currentVerse, quizMode, initializeFirstLetter, initializeWordBank, initializeTapReveal, initializeReorder, initializeProgressive]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && state === 'practice') {
        handleSubmit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state, handleSubmit]);

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/memory">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-memory/10">
              <BookOpen className="h-5 w-5 text-memory" />
            </div>
            <div>
              <h1 className="font-semibold">Solo Practice</h1>
              <p className="text-sm text-muted-foreground">
                {state === 'select' ? 'Choose your mode' : QUIZ_MODES.find(m => m.id === quizMode)?.label}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* ================================================================== */}
        {/* SELECTION SCREEN */}
        {/* ================================================================== */}
        {state === 'select' && (
          <section className="max-w-2xl mx-auto">
            {/* Quiz Mode Selection */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-center">Select Quiz Mode</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {QUIZ_MODES.map((mode) => (
                  <button
                    key={mode.id}
                    className={`p-4 rounded-xl border-2 text-left transition-all hover:scale-[1.02] ${
                      quizMode === mode.id
                        ? 'border-memory bg-memory/10 ring-2 ring-memory/20'
                        : DIFFICULTY_COLORS[mode.difficulty]
                    }`}
                    onClick={() => setQuizMode(mode.id)}
                  >
                    <div className={`mb-2 ${quizMode === mode.id ? 'text-memory' : 'text-muted-foreground'}`}>
                      {mode.icon}
                    </div>
                    <div className="font-medium text-sm">{mode.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{mode.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Mode Toggle */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex rounded-lg border p-1">
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    filterMode === 'difficulty' ? 'bg-memory text-white' : 'hover:bg-muted'
                  }`}
                  onClick={() => setFilterMode('difficulty')}
                >
                  By Difficulty
                </button>
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    filterMode === 'book' ? 'bg-memory text-white' : 'hover:bg-muted'
                  }`}
                  onClick={() => setFilterMode('book')}
                >
                  By Book
                </button>
              </div>
            </div>

            {/* Difficulty Selection */}
            {filterMode === 'difficulty' && (
              <div className="space-y-3 mb-8">
                <Button
                  variant={selectedDifficulty === 'all' ? 'memory' : 'outline'}
                  className="w-full justify-between h-auto py-3"
                  onClick={() => setSelectedDifficulty('all')}
                >
                  <span>All Difficulties</span>
                  <span className="text-sm opacity-70">
                    {difficultyCounts.easy + difficultyCounts.medium + difficultyCounts.hard} verses
                  </span>
                </Button>
                {(['easy', 'medium', 'hard'] as Difficulty[]).map((diff) => (
                  <Button
                    key={diff}
                    variant={selectedDifficulty === diff ? 'memory' : 'outline'}
                    className="w-full justify-between h-auto py-3"
                    onClick={() => setSelectedDifficulty(diff)}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${DIFFICULTY_LABELS[diff].color}`}>
                        {DIFFICULTY_LABELS[diff].label}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {DIFFICULTY_LABELS[diff].description}
                      </span>
                    </div>
                    <span className="text-sm opacity-70">{difficultyCounts[diff]} verses</span>
                  </Button>
                ))}
              </div>
            )}

            {/* Book Selection */}
            {filterMode === 'book' && (
              <div className="space-y-2 mb-8 max-h-[300px] overflow-y-auto">
                <Button
                  variant={selectedBook === 'all' ? 'memory' : 'outline'}
                  className="w-full justify-between h-auto py-2"
                  onClick={() => setSelectedBook('all')}
                >
                  <span>All Books</span>
                </Button>
                {books.map((book) => {
                  const count = getVersesByBook(book).length;
                  return (
                    <Button
                      key={book}
                      variant={selectedBook === book ? 'memory' : 'outline'}
                      className="w-full justify-between h-auto py-2"
                      onClick={() => setSelectedBook(book)}
                    >
                      <span>{book}</span>
                      <span className="text-sm opacity-70">{count} verse{count !== 1 ? 's' : ''}</span>
                    </Button>
                  );
                })}
              </div>
            )}

            <Button variant="memory" size="lg" className="w-full" onClick={startPractice}>
              <Shuffle className="h-5 w-5 mr-2" />
              Start Practice
            </Button>

            {/* Practice History */}
            {practiceHistory.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Recent Practice</h3>
                <div className="space-y-2">
                  {practiceHistory.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-2 bg-muted rounded-lg text-sm">
                      <div className="flex items-center gap-2">
                        <span className={`px-1.5 py-0.5 rounded text-xs ${DIFFICULTY_LABELS[item.difficulty].color}`}>
                          {item.difficulty[0].toUpperCase()}
                        </span>
                        <span>{item.verse}</span>
                        <span className="text-xs text-muted-foreground">
                          ({QUIZ_MODES.find(m => m.id === item.mode)?.label})
                        </span>
                      </div>
                      <span className={`font-medium ${
                        item.score >= 85 ? 'text-green-600' :
                        item.score >= 70 ? 'text-yellow-600' : 'text-muted-foreground'
                      }`}>
                        {item.score}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ================================================================== */}
        {/* PRACTICE MODE */}
        {/* ================================================================== */}
        {state === 'practice' && currentVerse && (
          <section className="max-w-2xl mx-auto">
            {/* Verse Reference & Mode Badge */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-memory/10 rounded-full mb-2">
                <BookOpen className="h-5 w-5 text-memory" />
                <span className="text-xl font-bold text-memory">{currentVerse.reference}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${DIFFICULTY_LABELS[currentVerse.difficulty].color}`}>
                  {DIFFICULTY_LABELS[currentVerse.difficulty].label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {QUIZ_MODES.find(m => m.id === quizMode)?.label}
                </span>
              </div>
            </div>

            {/* Context Verses (for some modes) */}
            {['type_out', 'listen', 'first_letter', 'progressive'].includes(quizMode) && (
              <Card className="mb-6">
                <CardContent className="p-4">
                  {currentVerse.context.before && (
                    <div className="mb-3 pb-3 border-b border-dashed">
                      <div className="text-xs font-medium text-muted-foreground mb-1">
                        {currentVerse.context.before.reference}
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        {currentVerse.context.before.text}
                      </p>
                    </div>
                  )}
                  {currentVerse.context.after && (
                    <div className="mt-3 pt-3 border-t border-dashed">
                      <div className="text-xs font-medium text-muted-foreground mb-1">
                        {currentVerse.context.after.reference}
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        {currentVerse.context.after.text}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* ============================================================ */}
            {/* TYPE OUT MODE */}
            {/* ============================================================ */}
            {quizMode === 'type_out' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-xs font-medium text-memory mb-2">
                    Type the verse from memory:
                  </div>
                  <textarea
                    className="w-full min-h-[150px] p-4 text-lg leading-relaxed border rounded-lg focus:ring-2 focus:ring-memory focus:border-memory resize-none bg-background"
                    placeholder="Type the verse..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    autoFocus
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    Press Ctrl+Enter to submit
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ============================================================ */}
            {/* FIRST LETTER MODE */}
            {/* ============================================================ */}
            {quizMode === 'first_letter' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-xs font-medium text-memory mb-4">
                    Type the first letter of each word:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {verseWords.map((word, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <input
                          ref={(el) => { firstLetterRefs.current[i] = el; }}
                          type="text"
                          className={`w-8 h-8 text-center text-lg font-mono border-2 rounded ${
                            firstLetterCorrect[i]
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : firstLetterInputs[i]
                                ? 'border-red-500 bg-red-50 text-red-700'
                                : 'border-gray-300 focus:border-memory'
                          }`}
                          value={firstLetterInputs[i] || ''}
                          onChange={(e) => handleFirstLetterInput(i, e.target.value)}
                          maxLength={1}
                        />
                        <span className="text-muted-foreground text-sm">
                          {word.slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    Progress: {firstLetterCorrect.filter(Boolean).length} / {verseWords.length} correct
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ============================================================ */}
            {/* WORD BANK MODE */}
            {/* ============================================================ */}
            {quizMode === 'word_bank' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-xs font-medium text-memory mb-4">
                    Fill in the blanks using the word bank:
                  </div>
                  <div className="flex flex-wrap gap-1 mb-6 text-lg leading-relaxed">
                    {verseWords.map((word, i) => {
                      if (wordBankBlanks.includes(i)) {
                        const blankIdx = wordBankBlanks.indexOf(i);
                        const selectedOptionIdx = wordBankSelected[blankIdx];
                        const selectedWord = selectedOptionIdx !== undefined
                          ? wordBankOptions[selectedOptionIdx]
                          : null;
                        return (
                          <span
                            key={i}
                            className={`px-2 py-1 rounded border-2 border-dashed min-w-[60px] text-center ${
                              selectedWord ? 'border-memory bg-memory/10' : 'border-gray-300 bg-gray-50'
                            }`}
                          >
                            {selectedWord || '______'}
                          </span>
                        );
                      }
                      return <span key={i}>{word}</span>;
                    })}
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-xs font-medium text-muted-foreground mb-3">Word Bank:</div>
                    <div className="flex flex-wrap gap-2">
                      {wordBankOptions.map((word, i) => {
                        const isUsed = wordBankSelected.includes(i);
                        return (
                          <button
                            key={i}
                            className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${
                              isUsed
                                ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                : 'bg-white hover:bg-memory/10 hover:border-memory border-gray-300'
                            }`}
                            onClick={() => handleWordBankSelect(i)}
                            disabled={isUsed}
                          >
                            {word}
                          </button>
                        );
                      })}
                    </div>
                    {wordBankSelected.length > 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3"
                        onClick={handleWordBankUndo}
                      >
                        <RotateCcw className="h-4 w-4 mr-1" />
                        Undo Last
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ============================================================ */}
            {/* TAP TO REVEAL MODE */}
            {/* ============================================================ */}
            {quizMode === 'tap_reveal' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-xs font-medium text-memory mb-4">
                    Tap to reveal the verse phrase by phrase:
                  </div>
                  <div className="space-y-3 min-h-[150px]">
                    {phrases.map((phrase, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg transition-all ${
                          i < revealedPhrases
                            ? 'bg-memory/10 border border-memory/20'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {i < revealedPhrases ? phrase : '• • •'}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {revealedPhrases} / {phrases.length} revealed
                    </span>
                    <Button
                      variant="memory"
                      onClick={handleRevealNext}
                      disabled={revealedPhrases >= phrases.length}
                    >
                      <MousePointer className="h-4 w-4 mr-2" />
                      Reveal Next
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ============================================================ */}
            {/* FLASHCARD MODE */}
            {/* ============================================================ */}
            {quizMode === 'flashcard' && (
              <div className="mb-6">
                <div
                  className="relative h-[300px] cursor-pointer perspective-1000"
                  onClick={() => !selfRating && setIsFlipped(!isFlipped)}
                >
                  <div
                    className={`absolute inset-0 transition-transform duration-500 transform-style-3d ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front - Reference */}
                    <Card
                      className="absolute inset-0 flex items-center justify-center backface-hidden"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <CardContent className="text-center p-8">
                        <div className="text-3xl font-bold text-memory mb-4">
                          {currentVerse.reference}
                        </div>
                        <p className="text-muted-foreground">
                          Tap to flip and see the verse
                        </p>
                      </CardContent>
                    </Card>

                    {/* Back - Verse */}
                    <Card
                      className="absolute inset-0 flex items-center justify-center backface-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <CardContent className="text-center p-8">
                        <p className="text-lg leading-relaxed mb-4">
                          "{currentVerse.translations.ESV}"
                        </p>
                        <div className="text-sm text-muted-foreground">
                          — {currentVerse.reference} (ESV)
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {isFlipped && !selfRating && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground mb-3">How well did you know this?</p>
                    <div className="flex justify-center gap-3">
                      <Button
                        variant="outline"
                        className="border-red-200 hover:bg-red-50"
                        onClick={() => setSelfRating('hard')}
                      >
                        Didn't Know
                      </Button>
                      <Button
                        variant="outline"
                        className="border-yellow-200 hover:bg-yellow-50"
                        onClick={() => setSelfRating('medium')}
                      >
                        Partially
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-200 hover:bg-green-50"
                        onClick={() => setSelfRating('easy')}
                      >
                        Knew It
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ============================================================ */}
            {/* REORDER MODE */}
            {/* ============================================================ */}
            {quizMode === 'reorder' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-xs font-medium text-memory mb-4">
                    Drag phrases to arrange in correct order:
                  </div>
                  <div className="space-y-2">
                    {reorderPhrases.map((phrase, i) => (
                      <div
                        key={i}
                        draggable
                        onDragStart={() => handleDragStart(i)}
                        onDragOver={(e) => handleDragOver(e, i)}
                        onDragEnd={handleDragEnd}
                        className={`p-3 rounded-lg border-2 cursor-move transition-all ${
                          draggedIndex === i
                            ? 'border-memory bg-memory/10 shadow-lg'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-muted-foreground text-sm font-medium w-6">
                            {i + 1}.
                          </span>
                          <span>{phrase}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ============================================================ */}
            {/* LISTEN MODE */}
            {/* ============================================================ */}
            {quizMode === 'listen' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Button
                      variant={hasListened ? 'outline' : 'memory'}
                      size="lg"
                      onClick={handlePlayAudio}
                      disabled={isPlaying}
                      className="mb-4"
                    >
                      <Volume2 className={`h-5 w-5 mr-2 ${isPlaying ? 'animate-pulse' : ''}`} />
                      {isPlaying ? 'Playing...' : hasListened ? 'Listen Again' : 'Listen to Verse'}
                    </Button>
                    {hasListened && (
                      <p className="text-sm text-muted-foreground">
                        Now type what you heard:
                      </p>
                    )}
                  </div>

                  {hasListened && (
                    <>
                      <textarea
                        className="w-full min-h-[120px] p-4 text-lg leading-relaxed border rounded-lg focus:ring-2 focus:ring-memory focus:border-memory resize-none bg-background"
                        placeholder="Type the verse you heard..."
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        autoFocus
                      />
                      <div className="text-xs text-muted-foreground mt-1">
                        Press Ctrl+Enter to submit
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            )}

            {/* ============================================================ */}
            {/* PROGRESSIVE MODE */}
            {/* ============================================================ */}
            {quizMode === 'progressive' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-medium text-memory">
                      Level {progressiveLevel} - Fill in {Math.round(progressiveLevel * 20)}% of words:
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`w-3 h-3 rounded-full ${
                            level <= progressiveLevel ? 'bg-memory' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-lg leading-relaxed">
                    {verseWords.map((word, i) => {
                      const blankIdx = progressiveBlanks.indexOf(i);
                      if (blankIdx !== -1) {
                        return (
                          <input
                            key={i}
                            type="text"
                            className="border-b-2 border-memory bg-transparent text-center min-w-[60px] max-w-[120px] focus:outline-none focus:border-memory/70"
                            placeholder="..."
                            value={progressiveAnswers[blankIdx] || ''}
                            onChange={(e) => {
                              const newAnswers = [...progressiveAnswers];
                              newAnswers[blankIdx] = e.target.value;
                              setProgressiveAnswers(newAnswers);
                            }}
                          />
                        );
                      }
                      return <span key={i}>{word}</span>;
                    })}
                  </div>

                  {progressiveLevel < 4 && (
                    <div className="mt-4 text-center">
                      <Button variant="outline" onClick={handleProgressiveNext}>
                        Check & Advance to Level {progressiveLevel + 1}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* ============================================================ */}
            {/* COMMON CONTROLS */}
            {/* ============================================================ */}

            {/* Peek at Answer */}
            {['type_out', 'first_letter', 'progressive', 'listen'].includes(quizMode) && (
              <div className="flex gap-4 mb-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowAnswer(!showAnswer)}
                >
                  {showAnswer ? (
                    <>
                      <EyeOff className="h-4 w-4 mr-2" />
                      Hide Answer
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4 mr-2" />
                      Peek at Answer
                    </>
                  )}
                </Button>
              </div>
            )}

            {showAnswer && (
              <Card className="mb-4 bg-muted/50">
                <CardContent className="p-4">
                  <div className="text-xs font-medium text-muted-foreground mb-1">ESV:</div>
                  <p className="text-sm">{currentVerse.translations.ESV}</p>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            <Button
              variant="memory"
              className="w-full"
              size="lg"
              onClick={handleSubmit}
              disabled={
                (quizMode === 'type_out' && !userAnswer.trim()) ||
                (quizMode === 'listen' && !userAnswer.trim()) ||
                (quizMode === 'flashcard' && !selfRating)
              }
            >
              <Send className="h-5 w-5 mr-2" />
              {quizMode === 'flashcard' ? 'Finish' : 'Check Answer'}
            </Button>
          </section>
        )}

        {/* ================================================================== */}
        {/* RESULTS */}
        {/* ================================================================== */}
        {state === 'result' && currentVerse && result && (
          <section className="max-w-2xl mx-auto">
            <Card variant="memory">
              <CardHeader className="text-center">
                <div className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center mb-4 ${
                  result.bestScore >= 85 ? 'bg-gradient-to-br from-green-400 to-emerald-500' :
                  result.bestScore >= 70 ? 'bg-gradient-to-br from-yellow-400 to-amber-500' :
                  'bg-gradient-to-br from-gray-400 to-gray-500'
                }`}>
                  <span className="text-3xl font-bold text-white">{result.bestScore}%</span>
                </div>
                <CardTitle className="text-xl">{result.feedback}</CardTitle>
                <p className="text-muted-foreground">
                  Mode: {QUIZ_MODES.find(m => m.id === quizMode)?.label}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Correct Answer */}
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-sm font-medium mb-2">
                      {currentVerse.reference} (ESV):
                    </div>
                    <p className="text-sm leading-relaxed">
                      {currentVerse.translations.ESV}
                    </p>
                  </div>

                  {/* Show all translations */}
                  <details className="group">
                    <summary className="flex items-center gap-2 cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                      <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                      Show all translations
                    </summary>
                    <div className="mt-3 space-y-3">
                      {(['ESV', 'NIV', 'KJV', 'NASB'] as const).map((trans) => (
                        <div key={trans} className="bg-muted/30 rounded-lg p-3">
                          <div className="text-xs font-medium text-muted-foreground mb-1">{trans}:</div>
                          <p className="text-sm">{currentVerse.translations[trans]}</p>
                        </div>
                      ))}
                    </div>
                  </details>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={handleTryAgain}
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Try Again
                    </Button>
                    <Button
                      variant="memory"
                      className="flex-1"
                      onClick={startPractice}
                    >
                      <Shuffle className="h-4 w-4 mr-2" />
                      New Verse
                    </Button>
                  </div>

                  <Link href="/memory" className="block">
                    <Button variant="ghost" className="w-full">
                      Back to Menu
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </main>
    </div>
  );
}
