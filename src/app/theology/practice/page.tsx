'use client';

import { useState, useCallback, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  ArrowLeft, BookOpen, Send, RotateCcw, Shuffle, Eye, EyeOff,
  Grid3X3, ArrowUpDown, Layers, GraduationCap, Clock,
  CheckSquare, MessageSquare, Link2, Star, Trophy, Pause, PlayCircle
} from 'lucide-react';
import { useSpacedRepetitionStore } from '@/stores/spacedRepetitionStore';
import { useTest107SessionStore } from '@/stores/test107SessionStore';
import {
  WESTMINSTER_CATECHISM,
  CATECHISM_CATEGORIES,
  type CatechismQuestion,
  type CatechismCategory,
  type Difficulty,
} from '@/data/westminster-catechism';
import {
  getDistractorsForQuestion,
  getEnhancedDistractorsForQuestion,
  selectDiverseDistractors,
} from '@/data/wsc-distractors';
import { calculateCatechismSimilarity, type CatechismSimilarityResult } from '@/lib/similarity';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Test107Progress, Test107Completion } from '@/components/theology/Test107Progress';
import { Test107ResumeModal } from '@/components/theology/Test107ResumeModal';

// ============================================================================
// TYPES & CONSTANTS
// ============================================================================

type PracticeState = 'select' | 'practice' | 'result';

type QuizMode =
  | 'flashcard'       // Flip card question <-> answer
  | 'word_bank'       // Fill blanks from word bank
  | 'reorder'         // Drag phrases to correct order
  | 'progressive'     // Progressive blanks (easy -> hard)
  | 'type_out'        // Full typing
  | 'mcq'             // Multiple choice (pick correct answer)
  | 'short_answer'    // Type key phrase only
  | 'scripture_match' // Match answer to Scripture proof
  | 'test_all_107';   // Sequential test: all 107 Q's MCQ then Free Response

interface QuizModeInfo {
  id: QuizMode;
  label: string;
  description: string;
  icon: React.ReactNode;
  difficulty: 'easy' | 'medium' | 'hard';
  recommended?: boolean;
}

const QUIZ_MODES: QuizModeInfo[] = [
  // === EASY ===
  {
    id: 'flashcard',
    label: 'Flashcard',
    description: 'Flip between question and answer',
    icon: <Layers className="h-5 w-5" />,
    difficulty: 'easy',
  },
  {
    id: 'word_bank',
    label: 'Word Bank',
    description: 'Fill blanks from word options',
    icon: <Grid3X3 className="h-5 w-5" />,
    difficulty: 'easy',
  },
  {
    id: 'reorder',
    label: 'Phrase Reorder',
    description: 'Arrange answer phrases in order',
    icon: <ArrowUpDown className="h-5 w-5" />,
    difficulty: 'easy',
  },
  // === MEDIUM ===
  {
    id: 'progressive',
    label: 'Progressive Blanks',
    description: 'Blanks increase each level',
    icon: <GraduationCap className="h-5 w-5" />,
    difficulty: 'medium',
  },
  {
    id: 'scripture_match',
    label: 'Scripture Match',
    description: 'Match answer to Scripture proof',
    icon: <Link2 className="h-5 w-5" />,
    difficulty: 'medium',
  },
  {
    id: 'mcq',
    label: 'Multiple Choice',
    description: 'Spot the Reformed answer',
    icon: <CheckSquare className="h-5 w-5" />,
    difficulty: 'medium',
    recommended: true,
  },
  // === HARD ===
  {
    id: 'short_answer',
    label: 'Short Answer',
    description: 'Type the key phrase only',
    icon: <MessageSquare className="h-5 w-5" />,
    difficulty: 'hard',
  },
  {
    id: 'type_out',
    label: 'Type Out',
    description: 'Type the entire answer',
    icon: <Send className="h-5 w-5" />,
    difficulty: 'hard',
  },
];

// Alternative catechism answers organized by WSC category for relevant MCQ distractors
// These are real answers from Catholic, Lutheran, Orthodox, and other catechisms
const ALTERNATIVE_CATECHISM_BY_CATEGORY: Record<CatechismCategory, { answer: string; source: string }[]> = {
  god_scripture: [
    // Q1-3: Purpose of man, Scripture
    { answer: "Man's chief end is to know, love, and serve God in this life, and to be happy with Him forever in the next.", source: "Baltimore Catechism" },
    { answer: "The Bible contains the word of God but must be interpreted through human reason and experience.", source: "Liberal Theology" },
    { answer: "Scripture and Sacred Tradition together form the one sacred deposit of the Word of God.", source: "Catholic Teaching" },
    { answer: "The purpose of life is to achieve enlightenment and escape the cycle of rebirth.", source: "Eastern Philosophy" },
    { answer: "Man's chief purpose is self-actualization and the pursuit of happiness in this life.", source: "Secular Humanism" },
  ],
  god_nature: [
    // Q4-6: Nature of God, Trinity
    { answer: "God is the Supreme Being, infinitely perfect, who made all things and keeps them in existence.", source: "Baltimore Catechism" },
    { answer: "There are three Divine Persons in one God: the Father, the Son, and the Holy Ghost.", source: "Baltimore Catechism" },
    { answer: "God is the unknowable essence beyond all human categories and descriptions.", source: "Orthodox Apophatic Theology" },
    { answer: "The Father alone is the one true God; the Son is a created being.", source: "Arian Teaching" },
    { answer: "God is the ground of all being, the ultimate concern of human existence.", source: "Liberal Theology" },
  ],
  decrees: [
    // Q7-12: Decrees, predestination
    { answer: "God's grace enables all people to respond to the Gospel, but this grace can be resisted.", source: "Arminian Teaching" },
    { answer: "God foreknew who would believe and elected them based on that foreseen faith.", source: "Arminian Teaching" },
    { answer: "God desires all to be saved and provides sufficient grace to everyone.", source: "Catholic Teaching" },
    { answer: "Predestination is based on God's foreknowledge of human choices.", source: "Wesleyan Teaching" },
    { answer: "There is no predestination; each person freely determines their own eternal destiny.", source: "Pelagian Teaching" },
  ],
  creation_providence: [
    // Q13-20: Creation, providence, covenant
    { answer: "God created the world through emanation from the divine essence.", source: "Gnostic Teaching" },
    { answer: "Angels are mediators between God and man, and we should pray to them for protection.", source: "Catholic Teaching" },
    { answer: "Providence works through natural laws that God established at creation.", source: "Deist Teaching" },
    { answer: "God created all things but does not actively intervene in worldly affairs.", source: "Deism" },
    { answer: "The covenant of works remains partially in effect alongside the covenant of grace.", source: "Neonomian Teaching" },
  ],
  fall_sin: [
    // Q21-28: Fall, original sin
    { answer: "Original sin is the sin we inherit from Adam, which deprived us of sanctifying grace and the right to heaven.", source: "Baltimore Catechism" },
    { answer: "Man is basically good but corrupted by society and environment.", source: "Liberal Theology" },
    { answer: "Sin is primarily a failure to reach one's potential rather than rebellion against God.", source: "Modern Teaching" },
    { answer: "Original sin only weakened man's nature; it did not totally corrupt it.", source: "Semi-Pelagian Teaching" },
    { answer: "We are born morally neutral and become sinners only by our own choices.", source: "Pelagian Teaching" },
  ],
  christ_redemption: [
    // Q29-38: Christ, offices, atonement
    { answer: "Christ's death was an example of love, not a substitutionary sacrifice for sin.", source: "Moral Influence Theory" },
    { answer: "Christ paid a ransom to Satan to free humanity from bondage.", source: "Ransom Theory" },
    { answer: "Christ's death was primarily a victory over the powers of evil.", source: "Christus Victor Theory" },
    { answer: "Jesus was adopted as God's Son at his baptism due to his perfect obedience.", source: "Adoptionist Teaching" },
    { answer: "Christ's human and divine natures are mixed into one new nature.", source: "Eutychian Teaching" },
  ],
  application: [
    // Q39-44: Justification, sanctification, adoption
    { answer: "We are saved by faith and works, through the grace of God and the merits of Jesus Christ.", source: "Catholic Teaching" },
    { answer: "Justification is a process of becoming righteous, not a one-time declaration.", source: "Catholic Teaching" },
    { answer: "I believe that I cannot by my own reason or strength believe in Jesus Christ, my Lord, or come to Him.", source: "Luther's Small Catechism" },
    { answer: "Believers may fall from grace and lose their salvation if they turn away from Christ.", source: "Wesleyan Teaching" },
    { answer: "Salvation is the process of theosis, by which we become partakers of the divine nature.", source: "Orthodox Teaching" },
  ],
  ten_commandments: [
    // Q45-81: Moral law, commandments
    { answer: "The Sabbath was changed to Sunday by apostolic authority and Church tradition.", source: "Catholic Teaching" },
    { answer: "Images of Christ and saints may be venerated as aids to devotion.", source: "Catholic Teaching" },
    { answer: "The moral law was fulfilled in Christ and is no longer binding on believers.", source: "Antinomian Teaching" },
    { answer: "The law serves only to show us our sin; it has no positive use for the believer.", source: "Lutheran Teaching" },
    { answer: "The ceremonial and civil laws of Moses remain binding on Christians today.", source: "Theonomic Teaching" },
  ],
  means_of_grace: [
    // Q82-107: Word, sacraments, prayer
    { answer: "The sacraments are outward signs instituted by Christ to give grace.", source: "Baltimore Catechism" },
    { answer: "Baptism works forgiveness of sins, delivers from death and the devil, and gives eternal salvation to all who believe.", source: "Luther's Small Catechism" },
    { answer: "In the Lord's Supper we receive the true body and blood of Christ under the bread and wine for the forgiveness of sins.", source: "Luther's Small Catechism" },
    { answer: "The bread and wine become the actual body and blood of Christ through transubstantiation.", source: "Catholic Teaching" },
    { answer: "Prayer is the raising of the mind and heart to God to adore Him, to thank Him, and to beg of Him all the graces we need.", source: "Baltimore Catechism" },
  ],
};

const QUIZ_MODE_COLORS: Record<'easy' | 'medium' | 'hard', string> = {
  easy: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
  medium: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20',
  hard: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20',
};

const DIFFICULTY_LABELS: Record<Difficulty, { label: string; color: string }> = {
  easy: { label: 'Easy', color: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30' },
  medium: { label: 'Medium', color: 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30' },
  hard: { label: 'Hard', color: 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30' },
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

function calculateScore(userText: string, correctText: string): number {
  const userWords = getWords(userText).map(normalizeWord);
  const correctWords = getWords(correctText).map(normalizeWord);

  if (correctWords.length === 0) return 0;

  let matches = 0;
  for (let i = 0; i < Math.max(userWords.length, correctWords.length); i++) {
    if (userWords[i] === correctWords[i]) matches++;
  }

  return Math.round((matches / correctWords.length) * 100);
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

function TheologyPracticeContent() {
  const searchParams = useSearchParams();

  // Core state
  const [state, setState] = useState<PracticeState>('select');
  const [currentQuestion, setCurrentQuestion] = useState<CatechismQuestion | null>(null);
  const [quizMode, setQuizMode] = useState<QuizMode>('flashcard');
  const [score, setScore] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');

  // Filter state from URL params
  const categoryParam = searchParams.get('category') as CatechismCategory | null;
  const difficultyParam = searchParams.get('difficulty') as Difficulty | null;
  const dueParam = searchParams.get('due') === 'true';
  const newParam = searchParams.get('new') === 'true';

  const [selectedCategory, setSelectedCategory] = useState<CatechismCategory | 'all'>(categoryParam || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>(difficultyParam || 'all');

  // Mode-specific state
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  // Word Bank
  const [wordBankSelected, setWordBankSelected] = useState<number[]>([]);
  const [wordBankOptions, setWordBankOptions] = useState<string[]>([]);
  const [wordBankBlanks, setWordBankBlanks] = useState<number[]>([]);

  // Flashcard
  const [isFlipped, setIsFlipped] = useState(false);
  const [selfRating, setSelfRating] = useState<'easy' | 'medium' | 'hard' | null>(null);

  // Reorder
  const [reorderPhrases, setReorderPhrases] = useState<string[]>([]);
  const [correctOrder, setCorrectOrder] = useState<string[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // Progressive
  const [progressiveLevel, setProgressiveLevel] = useState(1);
  const [progressiveBlanks, setProgressiveBlanks] = useState<number[]>([]);
  const [progressiveAnswers, setProgressiveAnswers] = useState<string[]>([]);

  // MCQ Mode - now includes intelligent distractors with explanations
  const [mcqOptions, setMcqOptions] = useState<{ answer: string; source: string; isCorrect: boolean; explanation?: string }[]>([]);
  const [mcqSelected, setMcqSelected] = useState<number | null>(null);

  // Short Answer Mode
  const [shortAnswerInput, setShortAnswerInput] = useState('');

  // Scripture Match Mode
  const [scriptureOptions, setScriptureOptions] = useState<string[]>([]);
  const [scriptureSelected, setScriptureSelected] = useState<string | null>(null);

  // Test All 107 Mode
  const [test107ShowResumeModal, setTest107ShowResumeModal] = useState(false);
  const [test107ShowCompletion, setTest107ShowCompletion] = useState(false);
  const [test107SimilarityResult, setTest107SimilarityResult] = useState<CatechismSimilarityResult | null>(null);

  // Test All 107 Store
  const {
    currentSession: test107Session,
    startNewSession: startTest107Session,
    resumeSession: resumeTest107,
    recordAnswer: recordTest107Answer,
    advanceQuestion: advanceTest107Question,
    advanceToPhase2: advanceToTest107Phase2,
    loopSession: loopTest107,
    pauseSession: pauseTest107,
    abandonSession: abandonTest107,
    hasActiveSession: hasTest107Session,
  } = useTest107SessionStore();

  // Check for active Test All 107 session on mount
  useEffect(() => {
    if (hasTest107Session()) {
      setTest107ShowResumeModal(true);
    }
  }, [hasTest107Session]);

  // Spaced Repetition
  const { recordReview, getDueVerses, getVerseProgress, verses } = useSpacedRepetitionStore();
  const dueQuestions = useMemo(() =>
    getDueVerses().filter(v => v.verseId.startsWith('wsc-')),
    [getDueVerses]
  );

  // Get answer text
  const answerText = currentQuestion?.answer || '';
  const answerWords = useMemo(() => getWords(answerText), [answerText]);

  // Get available questions based on filters
  const availableQuestions = useMemo(() => {
    let questions = [...WESTMINSTER_CATECHISM];

    if (dueParam && dueQuestions.length > 0) {
      const dueIds = new Set(dueQuestions.map(d => d.verseId));
      questions = questions.filter(q => dueIds.has(q.id));
    } else if (newParam) {
      questions = questions.filter(q => !verses[q.id]);
    } else {
      if (selectedCategory !== 'all') {
        questions = questions.filter(q => q.category === selectedCategory);
      }
      if (selectedDifficulty !== 'all') {
        questions = questions.filter(q => q.difficulty === selectedDifficulty);
      }
    }

    return questions;
  }, [selectedCategory, selectedDifficulty, dueParam, newParam, dueQuestions, verses]);

  // ============================================================================
  // INITIALIZATION FUNCTIONS
  // ============================================================================

  const initializeWordBank = useCallback((words: string[]) => {
    const blankCount = Math.max(2, Math.floor(words.length * 0.4));
    const indices = Array.from({ length: words.length }, (_, i) => i);
    const shuffledIndices = shuffleArray(indices);
    const blanks = shuffledIndices.slice(0, blankCount).sort((a, b) => a - b);

    const correctWords = blanks.map(i => words[i]);
    const distractors = ['the', 'and', 'to', 'of', 'a', 'in', 'that', 'is', 'was', 'for', 'it', 'with', 'as', 'his', 'on', 'be'];
    const extraWords = shuffleArray(distractors).slice(0, Math.min(4, blankCount));
    const options = shuffleArray([...correctWords, ...extraWords]);

    setWordBankBlanks(blanks);
    setWordBankOptions(options);
    setWordBankSelected([]);
  }, []);

  const initializeReorder = useCallback((text: string) => {
    const phrases = splitIntoPhrases(text);
    setCorrectOrder(phrases);
    setReorderPhrases(shuffleArray(phrases));
  }, []);

  const initializeProgressive = useCallback((words: string[], level: number) => {
    const blankPercent = Math.min(0.8, 0.2 * level);
    const blankCount = Math.max(1, Math.floor(words.length * blankPercent));
    const indices = Array.from({ length: words.length }, (_, i) => i);
    const blanks = shuffleArray(indices).slice(0, blankCount).sort((a, b) => a - b);

    setProgressiveBlanks(blanks);
    setProgressiveAnswers(new Array(blanks.length).fill(''));
  }, []);

  const initializeMcq = useCallback((question: CatechismQuestion) => {
    // Try to get intelligent distractors first (question-specific or category fallback)
    const intelligentDistractors = getDistractorsForQuestion(question.id, question.category);

    let distractorOptions: { answer: string; source: string; isCorrect: boolean; explanation?: string }[] = [];

    if (intelligentDistractors.length >= 3) {
      // Use intelligent distractors - these are plausible-but-wrong with explanations
      const shuffledDistractors = shuffleArray(intelligentDistractors).slice(0, 3);
      distractorOptions = shuffledDistractors.map(d => ({
        answer: d.text,
        source: 'Carefully study the answer!', // Hide the type/source during quiz
        isCorrect: false,
        explanation: d.explanation,
      }));
    } else {
      // Fall back to alternative catechism distractors
      const categoryDistractors = ALTERNATIVE_CATECHISM_BY_CATEGORY[question.category] || [];
      const shuffledCategoryDistractors = shuffleArray(categoryDistractors);
      let distractors = shuffledCategoryDistractors.slice(0, 3);

      // If not enough in category, fall back to other categories
      if (distractors.length < 3) {
        const otherCategories = (Object.keys(ALTERNATIVE_CATECHISM_BY_CATEGORY) as CatechismCategory[])
          .filter(cat => cat !== question.category);
        const fallbackPool = otherCategories.flatMap(cat => ALTERNATIVE_CATECHISM_BY_CATEGORY[cat]);
        const shuffledFallback = shuffleArray(fallbackPool);
        distractors = [...distractors, ...shuffledFallback.slice(0, 3 - distractors.length)];
      }

      distractorOptions = distractors.map(d => ({
        answer: d.answer,
        source: d.source,
        isCorrect: false,
      }));
    }

    // Create the correct answer option
    const correctOption = {
      answer: question.answer,
      source: 'Westminster Shorter Catechism',
      isCorrect: true,
      explanation: 'This is the correct Reformed answer from the Westminster Shorter Catechism.',
    };

    // Shuffle all options together
    const options = shuffleArray([correctOption, ...distractorOptions]);
    setMcqOptions(options);
    setMcqSelected(null);
  }, []);

  const initializeScriptureMatch = useCallback((question: CatechismQuestion) => {
    if (question.scriptureProofs.length === 0) {
      // Fallback if no scripture proofs - use random scriptures
      setScriptureOptions(['Genesis 1:1', 'John 3:16', 'Romans 8:28', 'Psalm 23:1']);
      setScriptureSelected(null);
      return;
    }

    // Get the correct scripture (first one from the proofs)
    const correctScripture = question.scriptureProofs[0];

    // Get distractors from other questions' scripture proofs
    const allScriptures = WESTMINSTER_CATECHISM
      .filter(q => q.id !== question.id)
      .flatMap(q => q.scriptureProofs)
      .filter(s => s !== correctScripture);

    const distractors = shuffleArray(allScriptures).slice(0, 3);

    // If not enough distractors, add some common ones
    const fallbackScriptures = ['Genesis 1:1', 'John 3:16', 'Romans 8:28', 'Psalm 23:1', 'Isaiah 53:5'];
    while (distractors.length < 3) {
      const fallback = fallbackScriptures.find(s => s !== correctScripture && !distractors.includes(s));
      if (fallback) distractors.push(fallback);
      else break;
    }

    const options = shuffleArray([correctScripture, ...distractors]);
    setScriptureOptions(options);
    setScriptureSelected(null);
  }, []);

  // Test All 107 - Initialize MCQ with enhanced cross-tradition distractors
  const initializeTest107Mcq = useCallback((question: CatechismQuestion) => {
    // Get enhanced distractors including cross-tradition answers
    const enhancedDistractors = getEnhancedDistractorsForQuestion(
      question.id,
      question.category,
      true // Include cross-tradition distractors
    );

    // Select 3 diverse distractors
    const selectedDistractors = selectDiverseDistractors(enhancedDistractors, 3);

    const distractorOptions = selectedDistractors.map(d => ({
      answer: d.text,
      source: 'Study carefully!',
      isCorrect: false,
      explanation: d.explanation,
    }));

    // Create the correct answer option
    const correctOption = {
      answer: question.answer,
      source: 'Westminster Shorter Catechism',
      isCorrect: true,
      explanation: 'This is the correct Reformed answer from the Westminster Shorter Catechism.',
    };

    // Shuffle all options
    const options = shuffleArray([correctOption, ...distractorOptions]);
    setMcqOptions(options);
    setMcqSelected(null);
  }, []);

  // Test All 107 - Start or resume
  const startTest107Practice = useCallback(() => {
    if (hasTest107Session()) {
      // Resume existing session
      resumeTest107();
      const session = useTest107SessionStore.getState().currentSession;
      if (session) {
        const question = WESTMINSTER_CATECHISM[session.currentQuestionIndex];
        setCurrentQuestion(question);

        if (session.currentPhase === 'mcq') {
          initializeTest107Mcq(question);
        } else {
          setUserAnswer('');
          setTest107SimilarityResult(null);
        }

        setQuizMode('test_all_107');
        setState('practice');
      }
    } else {
      // Start new session
      startTest107Session();
      const question = WESTMINSTER_CATECHISM[0]; // Start with Q1
      setCurrentQuestion(question);
      initializeTest107Mcq(question);
      setQuizMode('test_all_107');
      setState('practice');
    }
  }, [hasTest107Session, resumeTest107, startTest107Session, initializeTest107Mcq]);

  // Test All 107 - Handle MCQ submit
  const handleTest107McqSubmit = useCallback(() => {
    if (!currentQuestion || mcqSelected === null) return;

    const selectedOption = mcqOptions[mcqSelected];
    const score = selectedOption?.isCorrect ? 100 : 0;
    const distractorTexts = mcqOptions.filter(o => !o.isCorrect).map(o => o.answer);

    // Record the answer
    recordTest107Answer(
      test107Session?.currentQuestionIndex || 0,
      'mcq',
      selectedOption?.answer || '',
      currentQuestion.answer,
      score,
      distractorTexts
    );

    // Move to result state briefly to show feedback
    setScore(score);
    setFeedback(score === 100 ? 'Correct!' : 'Incorrect - study the explanation below.');
    setState('result');
  }, [currentQuestion, mcqSelected, mcqOptions, recordTest107Answer, test107Session]);

  // Test All 107 - Handle Free Response submit
  const handleTest107FreeResponseSubmit = useCallback(() => {
    if (!currentQuestion || !userAnswer.trim()) return;

    // Calculate similarity score
    const result = calculateCatechismSimilarity(userAnswer, currentQuestion.answer);
    setTest107SimilarityResult(result);

    // Record the answer
    recordTest107Answer(
      test107Session?.currentQuestionIndex || 0,
      'free_response',
      userAnswer,
      currentQuestion.answer,
      result.score
    );

    setScore(result.score);
    setFeedback(result.feedback);
    setState('result');
  }, [currentQuestion, userAnswer, recordTest107Answer, test107Session]);

  // Test All 107 - Advance to next question
  const advanceTest107 = useCallback(() => {
    const { nextIndex, phaseComplete, sessionComplete } = advanceTest107Question();

    if (sessionComplete) {
      // Show completion modal
      setTest107ShowCompletion(true);
      setState('select');
      return;
    }

    if (phaseComplete) {
      // Move to Phase 2 (Free Response)
      advanceToTest107Phase2();
      const question = WESTMINSTER_CATECHISM[0]; // Start Phase 2 at Q1
      setCurrentQuestion(question);
      setUserAnswer('');
      setTest107SimilarityResult(null);
      setState('practice');
      return;
    }

    // Move to next question
    const question = WESTMINSTER_CATECHISM[nextIndex];
    setCurrentQuestion(question);

    if (test107Session?.currentPhase === 'mcq') {
      initializeTest107Mcq(question);
    } else {
      setUserAnswer('');
      setTest107SimilarityResult(null);
    }

    setState('practice');
  }, [advanceTest107Question, advanceToTest107Phase2, test107Session, initializeTest107Mcq]);

  // Test All 107 - Pause and exit
  const handleTest107Pause = useCallback(() => {
    pauseTest107();
    setState('select');
    setQuizMode('flashcard'); // Reset to default mode
  }, [pauseTest107]);

  // Test All 107 - Handle loop (restart from Q1)
  const handleTest107Loop = useCallback(() => {
    loopTest107();
    setTest107ShowCompletion(false);
    const question = WESTMINSTER_CATECHISM[0];
    setCurrentQuestion(question);
    initializeTest107Mcq(question);
    setQuizMode('test_all_107');
    setState('practice');
  }, [loopTest107, initializeTest107Mcq]);

  // Test All 107 - Handle finish (complete session)
  const handleTest107Finish = useCallback(() => {
    setTest107ShowCompletion(false);
    abandonTest107();
    setState('select');
    setQuizMode('flashcard');
  }, [abandonTest107]);

  // Test All 107 - Resume modal handlers
  const handleTest107Resume = useCallback(() => {
    setTest107ShowResumeModal(false);
    startTest107Practice();
  }, [startTest107Practice]);

  const handleTest107StartFresh = useCallback(() => {
    setTest107ShowResumeModal(false);
    abandonTest107();
    startTest107Session();
    const question = WESTMINSTER_CATECHISM[0];
    setCurrentQuestion(question);
    initializeTest107Mcq(question);
    setQuizMode('test_all_107');
    setState('practice');
  }, [abandonTest107, startTest107Session, initializeTest107Mcq]);

  // ============================================================================
  // START PRACTICE
  // ============================================================================

  const startPractice = useCallback(() => {
    if (availableQuestions.length === 0) return;

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];

    setCurrentQuestion(question);
    setScore(0);
    setFeedback('');
    setShowAnswer(false);
    setUserAnswer('');

    const words = getWords(question.answer);

    switch (quizMode) {
      case 'word_bank':
        initializeWordBank(words);
        break;
      case 'flashcard':
        setIsFlipped(false);
        setSelfRating(null);
        break;
      case 'reorder':
        initializeReorder(question.answer);
        break;
      case 'progressive':
        setProgressiveLevel(1);
        initializeProgressive(words, 1);
        break;
      case 'type_out':
        setUserAnswer('');
        break;
      case 'mcq':
        initializeMcq(question);
        break;
      case 'short_answer':
        setShortAnswerInput('');
        break;
      case 'scripture_match':
        initializeScriptureMatch(question);
        break;
    }

    setState('practice');
  }, [availableQuestions, quizMode, initializeWordBank, initializeReorder, initializeProgressive, initializeMcq, initializeScriptureMatch]);

  // ============================================================================
  // SUBMIT HANDLERS
  // ============================================================================

  const handleSubmit = useCallback(() => {
    if (!currentQuestion) return;

    let finalScore = 0;
    let userText = '';

    switch (quizMode) {
      case 'type_out':
        if (!userAnswer.trim()) return;
        userText = userAnswer;
        finalScore = calculateScore(userText, currentQuestion.answer);
        break;

      case 'word_bank': {
        const words = answerWords;
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
        finalScore = calculateScore(userText, currentQuestion.answer);
        break;
      }

      case 'flashcard':
        finalScore = selfRating === 'easy' ? 100 : selfRating === 'medium' ? 70 : 40;
        break;

      case 'reorder': {
        let correct = 0;
        for (let i = 0; i < reorderPhrases.length; i++) {
          if (reorderPhrases[i] === correctOrder[i]) correct++;
        }
        finalScore = Math.round((correct / correctOrder.length) * 100);
        break;
      }

      case 'progressive': {
        const words = answerWords;
        let correct = 0;
        progressiveBlanks.forEach((blankIdx, i) => {
          const expected = normalizeWord(words[blankIdx]);
          const actual = normalizeWord(progressiveAnswers[i] || '');
          if (expected === actual) correct++;
        });
        finalScore = Math.round((correct / progressiveBlanks.length) * 100);
        break;
      }

      case 'mcq': {
        if (mcqSelected === null) return;
        const selectedOption = mcqOptions[mcqSelected];
        finalScore = selectedOption?.isCorrect ? 100 : 0;
        break;
      }

      case 'short_answer': {
        if (!shortAnswerInput.trim()) return;
        // Use shortAnswer field if available, otherwise first few words of answer
        const expectedPhrase = currentQuestion.shortAnswer ||
          getWords(currentQuestion.answer).slice(0, 5).join(' ');
        finalScore = calculateScore(shortAnswerInput, expectedPhrase);
        break;
      }

      case 'scripture_match': {
        if (!scriptureSelected) return;
        const correctScripture = currentQuestion.scriptureProofs[0];
        finalScore = scriptureSelected === correctScripture ? 100 : 0;
        break;
      }
    }

    setScore(finalScore);
    setFeedback(
      finalScore >= 95 ? 'Perfect!' :
      finalScore >= 85 ? 'Excellent!' :
      finalScore >= 70 ? 'Good job!' :
      finalScore >= 50 ? 'Nice effort!' : 'Keep practicing!'
    );

    // Record to spaced repetition
    recordReview(currentQuestion.id, `WSC Q${currentQuestion.number}`, finalScore, quizMode);

    setState('result');
  }, [currentQuestion, quizMode, userAnswer, answerWords, wordBankBlanks, wordBankSelected, wordBankOptions, selfRating, reorderPhrases, correctOrder, progressiveBlanks, progressiveAnswers, recordReview, mcqSelected, mcqOptions, shortAnswerInput, scriptureSelected]);

  // ============================================================================
  // MODE-SPECIFIC HANDLERS
  // ============================================================================

  const handleWordBankSelect = useCallback((optionIndex: number) => {
    const nextBlankIdx = wordBankSelected.length;
    if (nextBlankIdx >= wordBankBlanks.length) return;
    setWordBankSelected([...wordBankSelected, optionIndex]);
  }, [wordBankSelected, wordBankBlanks.length]);

  const handleWordBankUndo = useCallback(() => {
    if (wordBankSelected.length === 0) return;
    setWordBankSelected(wordBankSelected.slice(0, -1));
  }, [wordBankSelected]);

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

  const handleProgressiveNext = useCallback(() => {
    if (!currentQuestion) return;

    const words = getWords(currentQuestion.answer);
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
  }, [currentQuestion, progressiveBlanks, progressiveAnswers, progressiveLevel, handleSubmit, initializeProgressive]);

  // ============================================================================
  // RESET
  // ============================================================================

  const handleTryAgain = useCallback(() => {
    if (!currentQuestion) return;

    setScore(0);
    setFeedback('');
    setShowAnswer(false);
    setUserAnswer('');

    const words = getWords(currentQuestion.answer);

    switch (quizMode) {
      case 'word_bank':
        initializeWordBank(words);
        break;
      case 'flashcard':
        setIsFlipped(false);
        setSelfRating(null);
        break;
      case 'reorder':
        initializeReorder(currentQuestion.answer);
        break;
      case 'progressive':
        setProgressiveLevel(1);
        initializeProgressive(words, 1);
        break;
      case 'type_out':
        setUserAnswer('');
        break;
      case 'mcq':
        initializeMcq(currentQuestion);
        break;
      case 'short_answer':
        setShortAnswerInput('');
        break;
      case 'scripture_match':
        initializeScriptureMatch(currentQuestion);
        break;
    }

    setState('practice');
  }, [currentQuestion, quizMode, initializeWordBank, initializeReorder, initializeProgressive, initializeMcq, initializeScriptureMatch]);

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
          <Link href="/theology">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-theology/10">
              <BookOpen className="h-5 w-5 text-theology" />
            </div>
            <div>
              <h1 className="font-semibold">Catechism Practice</h1>
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
                        ? 'border-theology bg-theology/10 ring-2 ring-theology/20'
                        : QUIZ_MODE_COLORS[mode.difficulty]
                    }`}
                    onClick={() => setQuizMode(mode.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`${quizMode === mode.id ? 'text-theology' : 'text-muted-foreground'}`}>
                        {mode.icon}
                      </div>
                      <div className="flex items-center gap-1">
                        {mode.recommended && (
                          <span className="flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded font-medium bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400">
                            <Star className="h-3 w-3" />
                          </span>
                        )}
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium uppercase ${
                          mode.difficulty === 'easy'
                            ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400'
                            : mode.difficulty === 'medium'
                              ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400'
                              : 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400'
                        }`}>
                          {mode.difficulty}
                        </span>
                      </div>
                    </div>
                    <div className="font-medium text-sm">{mode.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{mode.description}</div>
                  </button>
                ))}
              </div>

              {/* Test All 107 - Special Mode Card */}
              <button
                className="mt-4 w-full p-5 rounded-xl border-2 border-dashed border-theology/50
                           bg-gradient-to-r from-theology/5 via-blue-500/5 to-green-500/5
                           hover:border-theology hover:from-theology/10 hover:via-blue-500/10 hover:to-green-500/10
                           transition-all text-left"
                onClick={startTest107Practice}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-theology to-blue-600 text-white">
                      <Trophy className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">Test All 107</span>
                        <span className="text-[10px] px-2 py-0.5 rounded font-medium uppercase bg-gradient-to-r from-theology to-blue-600 text-white">
                          Challenge
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Sequential MCQ (Q1-107), then Free Response. Progress saved automatically.
                      </p>
                    </div>
                  </div>
                  <PlayCircle className="h-6 w-6 text-theology" />
                </div>
                {hasTest107Session() && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>You have an active session - click to resume</span>
                  </div>
                )}
              </button>
            </div>

            {/* Filters (only show if not coming from URL params) */}
            {!dueParam && !newParam && (
              <div className="mb-8 space-y-4">
                {/* Difficulty */}
                <div>
                  <label className="block text-sm font-medium mb-2">Difficulty</label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['all', 'easy', 'medium', 'hard'] as const).map((diff) => (
                      <Button
                        key={diff}
                        variant={selectedDifficulty === diff ? 'default' : 'outline'}
                        size="sm"
                        className={selectedDifficulty === diff && diff !== 'all' ?
                          diff === 'easy' ? 'bg-green-600' :
                          diff === 'medium' ? 'bg-yellow-600' : 'bg-red-600'
                          : selectedDifficulty === diff ? 'bg-theology' : ''
                        }
                        onClick={() => setSelectedDifficulty(diff)}
                      >
                        {diff === 'all' ? 'All' : diff.charAt(0).toUpperCase() + diff.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <Button
                      variant={selectedCategory === 'all' ? 'default' : 'outline'}
                      size="sm"
                      className={selectedCategory === 'all' ? 'bg-theology' : ''}
                      onClick={() => setSelectedCategory('all')}
                    >
                      All ({WESTMINSTER_CATECHISM.length})
                    </Button>
                    {CATECHISM_CATEGORIES.map((cat) => {
                      const count = WESTMINSTER_CATECHISM.filter(q => q.category === cat.value).length;
                      return (
                        <Button
                          key={cat.value}
                          variant={selectedCategory === cat.value ? 'default' : 'outline'}
                          size="sm"
                          className={selectedCategory === cat.value ? 'bg-theology' : ''}
                          onClick={() => setSelectedCategory(cat.value)}
                        >
                          {cat.label} ({count})
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Info about current filter */}
            <div className="mb-4 text-center text-sm text-muted-foreground">
              {dueParam && `${dueQuestions.length} questions due for review`}
              {newParam && `${availableQuestions.length} new questions to learn`}
              {!dueParam && !newParam && `${availableQuestions.length} questions available`}
            </div>

            <Button
              variant="theology"
              size="lg"
              className="w-full"
              onClick={startPractice}
              disabled={availableQuestions.length === 0}
            >
              <Shuffle className="h-5 w-5 mr-2" />
              Start Practice
            </Button>
          </section>
        )}

        {/* ================================================================== */}
        {/* PRACTICE MODE */}
        {/* ================================================================== */}
        {state === 'practice' && currentQuestion && (
          <section className="max-w-2xl mx-auto">
            {/* Test All 107 - Progress Component */}
            {quizMode === 'test_all_107' && test107Session && (
              <Test107Progress
                phase={test107Session.currentPhase}
                currentQuestion={test107Session.currentQuestionIndex + 1}
                phase1Completed={test107Session.phase1Results.length}
                phase2Completed={test107Session.phase2Results.length}
                phase1Score={test107Session.phase1Score}
                phase2Score={test107Session.phase2Score}
                loopCount={test107Session.loopCount}
              />
            )}

            {/* Question Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-theology/10 rounded-full mb-2">
                <BookOpen className="h-5 w-5 text-theology" />
                <span className="text-xl font-bold text-theology">Q{currentQuestion.number}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${DIFFICULTY_LABELS[currentQuestion.difficulty].color}`}>
                  {DIFFICULTY_LABELS[currentQuestion.difficulty].label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {CATECHISM_CATEGORIES.find(c => c.value === currentQuestion.category)?.label}
                </span>
              </div>
            </div>

            {/* Question */}
            <Card className="mb-6">
              <CardContent className="p-6 text-center">
                <p className="text-lg font-medium">{currentQuestion.question}</p>
              </CardContent>
            </Card>

            {/* ============================================================ */}
            {/* TYPE OUT MODE */}
            {/* ============================================================ */}
            {quizMode === 'type_out' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-xs font-medium text-theology mb-2">
                    Type the answer from memory:
                  </div>
                  <textarea
                    className="w-full min-h-[150px] p-4 text-lg leading-relaxed border rounded-lg focus:ring-2 focus:ring-theology focus:border-theology resize-none bg-background"
                    placeholder="Type the answer..."
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
            {/* WORD BANK MODE */}
            {/* ============================================================ */}
            {quizMode === 'word_bank' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-xs font-medium text-theology mb-4">
                    Fill in the blanks using the word bank:
                  </div>
                  <div className="flex flex-wrap gap-1 mb-6 text-lg leading-relaxed">
                    {answerWords.map((word, i) => {
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
                              selectedWord ? 'border-theology bg-theology/10 text-foreground' : 'border-border bg-muted/50 text-muted-foreground'
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
                                ? 'bg-muted text-muted-foreground border-muted cursor-not-allowed opacity-50'
                                : 'bg-background text-foreground hover:bg-theology/10 hover:text-theology hover:border-theology border-border'
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
            {/* FLASHCARD MODE */}
            {/* ============================================================ */}
            {quizMode === 'flashcard' && (
              <div className="mb-6">
                <div
                  className="relative h-[250px] cursor-pointer"
                  onClick={() => !selfRating && setIsFlipped(!isFlipped)}
                >
                  <Card className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${
                    isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}>
                    <CardContent className="text-center p-8">
                      <p className="text-muted-foreground mb-4">Think about the answer, then tap to reveal</p>
                      <p className="text-lg font-medium">{currentQuestion.question}</p>
                    </CardContent>
                  </Card>

                  <Card className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${
                    isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <CardContent className="text-center p-8">
                      <p className="text-lg leading-relaxed">
                        &ldquo;{currentQuestion.answer}&rdquo;
                      </p>
                      {currentQuestion.shortAnswer && (
                        <p className="text-sm text-theology mt-3">
                          Key: {currentQuestion.shortAnswer}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {isFlipped && !selfRating && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground mb-3">How well did you know this?</p>
                    <div className="flex justify-center gap-3">
                      <Button
                        variant="outline"
                        className="border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20"
                        onClick={() => setSelfRating('hard')}
                      >
                        Didn&apos;t Know
                      </Button>
                      <Button
                        variant="outline"
                        className="border-yellow-200 dark:border-yellow-800 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                        onClick={() => setSelfRating('medium')}
                      >
                        Partially
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20"
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
                  <div className="text-xs font-medium text-theology mb-4">
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
                            ? 'border-theology bg-theology/10 shadow-lg'
                            : 'border-gray-200 dark:border-gray-700 bg-card hover:border-gray-300 dark:hover:border-gray-600'
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
            {/* PROGRESSIVE MODE */}
            {/* ============================================================ */}
            {quizMode === 'progressive' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-medium text-theology">
                      Level {progressiveLevel} - Fill in {Math.round(progressiveLevel * 20)}% of words:
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`w-3 h-3 rounded-full ${
                            level <= progressiveLevel ? 'bg-theology' : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-lg leading-relaxed">
                    {answerWords.map((word, i) => {
                      const blankIdx = progressiveBlanks.indexOf(i);
                      if (blankIdx !== -1) {
                        return (
                          <input
                            key={i}
                            type="text"
                            className="border-b-2 border-theology bg-transparent text-center min-w-[60px] max-w-[120px] focus:outline-none focus:border-theology/70"
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
            {/* MCQ MODE */}
            {/* ============================================================ */}
            {quizMode === 'mcq' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-xs font-medium text-theology mb-2">
                    Which is the Reformed (Westminster) answer?
                  </div>
                  <div className="text-xs text-muted-foreground mb-4">
                    Some options are from other catechisms - spot the difference!
                  </div>
                  <div className="space-y-3">
                    {mcqOptions.map((option, i) => (
                      <button
                        key={i}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          mcqSelected === i
                            ? 'border-theology bg-theology/10 ring-2 ring-theology/20'
                            : 'border-border bg-card hover:border-theology/50 hover:bg-muted/50'
                        }`}
                        onClick={() => setMcqSelected(i)}
                      >
                        <div className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${
                            mcqSelected === i
                              ? 'bg-theology text-white'
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="text-sm leading-relaxed">{option.answer}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ============================================================ */}
            {/* SHORT ANSWER MODE */}
            {/* ============================================================ */}
            {quizMode === 'short_answer' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-xs font-medium text-theology mb-2">
                    Type the key phrase (not the full answer):
                  </div>
                  {currentQuestion?.shortAnswer && (
                    <div className="text-xs text-muted-foreground mb-4">
                      Hint: {getWords(currentQuestion.shortAnswer).length} words
                    </div>
                  )}
                  <input
                    type="text"
                    className="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-theology focus:border-theology bg-background"
                    placeholder="Type the key phrase..."
                    value={shortAnswerInput}
                    onChange={(e) => setShortAnswerInput(e.target.value)}
                    autoFocus
                  />
                  <div className="text-xs text-muted-foreground mt-2">
                    Focus on the essential theological concept in the answer
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ============================================================ */}
            {/* SCRIPTURE MATCH MODE */}
            {/* ============================================================ */}
            {quizMode === 'scripture_match' && (
              <div className="mb-6 space-y-4">
                {/* Show the answer */}
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <div className="text-xs font-medium text-muted-foreground mb-2">Answer:</div>
                    <p className="text-sm leading-relaxed">{currentQuestion?.answer}</p>
                  </CardContent>
                </Card>

                {/* Scripture options */}
                <Card>
                  <CardContent className="p-6">
                    <div className="text-xs font-medium text-theology mb-4">
                      Which Scripture proves this answer?
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {scriptureOptions.map((scripture) => (
                        <button
                          key={scripture}
                          className={`p-4 rounded-lg border-2 transition-all text-center ${
                            scriptureSelected === scripture
                              ? 'border-theology bg-theology/10 ring-2 ring-theology/20'
                              : 'border-border bg-card hover:border-theology/50 hover:bg-muted/50'
                          }`}
                          onClick={() => setScriptureSelected(scripture)}
                        >
                          <span className="text-sm font-medium">{scripture}</span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* ============================================================ */}
            {/* TEST ALL 107 MODE */}
            {/* ============================================================ */}
            {quizMode === 'test_all_107' && test107Session && (
              <>
                {/* Phase 1: MCQ */}
                {test107Session.currentPhase === 'mcq' && (
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="text-xs font-medium text-theology mb-2">
                        Phase 1: Multiple Choice - Which is the correct Reformed answer?
                      </div>
                      <div className="text-xs text-muted-foreground mb-4">
                        Options include answers from Catholic, Lutheran, and other traditions.
                      </div>
                      <div className="space-y-3">
                        {mcqOptions.map((option, i) => (
                          <button
                            key={i}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                              mcqSelected === i
                                ? 'border-theology bg-theology/10 ring-2 ring-theology/20'
                                : 'border-border bg-card hover:border-theology/50 hover:bg-muted/50'
                            }`}
                            onClick={() => setMcqSelected(i)}
                          >
                            <div className="flex items-start gap-3">
                              <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${
                                mcqSelected === i
                                  ? 'bg-theology text-white'
                                  : 'bg-muted text-muted-foreground'
                              }`}>
                                {String.fromCharCode(65 + i)}
                              </span>
                              <span className="text-sm leading-relaxed">{option.answer}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Phase 2: Free Response */}
                {test107Session.currentPhase === 'free_response' && (
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-2">
                        Phase 2: Free Response - Type the answer from memory
                      </div>
                      <div className="text-xs text-muted-foreground mb-4">
                        Your answer will be scored based on accuracy and key theological terms.
                      </div>
                      <textarea
                        className="w-full min-h-[150px] p-4 text-lg leading-relaxed border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-background"
                        placeholder="Type the catechism answer..."
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        autoFocus
                      />
                      <div className="text-xs text-muted-foreground mt-2">
                        Press Ctrl+Enter to submit
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Test All 107 Controls */}
                <div className="flex gap-4">
                  <Button variant="outline" onClick={handleTest107Pause}>
                    <Pause className="h-4 w-4 mr-2" />
                    Save & Exit
                  </Button>
                  <Button
                    variant="theology"
                    className="flex-1"
                    onClick={
                      test107Session.currentPhase === 'mcq'
                        ? handleTest107McqSubmit
                        : handleTest107FreeResponseSubmit
                    }
                    disabled={
                      (test107Session.currentPhase === 'mcq' && mcqSelected === null) ||
                      (test107Session.currentPhase === 'free_response' && !userAnswer.trim())
                    }
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Submit Answer
                  </Button>
                </div>
              </>
            )}

            {/* ============================================================ */}
            {/* COMMON CONTROLS */}
            {/* ============================================================ */}

            {/* Peek at Answer */}
            {['type_out', 'progressive', 'short_answer'].includes(quizMode) && (
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
                  <div className="text-xs font-medium text-muted-foreground mb-1">Answer:</div>
                  <p className="text-sm">{currentQuestion.answer}</p>
                </CardContent>
              </Card>
            )}

            {/* Submit Button - Not shown for test_all_107 (has its own controls) */}
            {quizMode !== 'test_all_107' && (
              <Button
                variant="theology"
                className="w-full"
                size="lg"
                onClick={handleSubmit}
                disabled={
                  (quizMode === 'type_out' && !userAnswer.trim()) ||
                  (quizMode === 'flashcard' && !selfRating) ||
                  (quizMode === 'mcq' && mcqSelected === null) ||
                  (quizMode === 'short_answer' && !shortAnswerInput.trim()) ||
                  (quizMode === 'scripture_match' && !scriptureSelected)
                }
              >
                <Send className="h-5 w-5 mr-2" />
                {quizMode === 'flashcard' ? 'Finish' : 'Check Answer'}
              </Button>
            )}
          </section>
        )}

        {/* ================================================================== */}
        {/* RESULTS */}
        {/* ================================================================== */}
        {state === 'result' && currentQuestion && (
          <section className="max-w-2xl mx-auto">
            <Card variant="theology">
              <CardHeader className="text-center">
                <div className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center mb-4 ${
                  score >= 85 ? 'bg-gradient-to-br from-green-400 to-emerald-500' :
                  score >= 70 ? 'bg-gradient-to-br from-yellow-400 to-amber-500' :
                  'bg-gradient-to-br from-gray-400 to-gray-500'
                }`}>
                  <span className="text-3xl font-bold text-white">{score}%</span>
                </div>
                <CardTitle className="text-xl">{feedback}</CardTitle>
                <p className="text-muted-foreground">
                  Mode: {quizMode === 'test_all_107'
                    ? `Test All 107 - ${test107Session?.currentPhase === 'mcq' ? 'Phase 1 (MCQ)' : 'Phase 2 (Free Response)'}`
                    : QUIZ_MODES.find(m => m.id === quizMode)?.label}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Question & Answer */}
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-sm font-medium mb-2">
                      Q{currentQuestion.number}: {currentQuestion.question}
                    </div>
                    <p className="text-sm leading-relaxed">
                      <strong>A:</strong> {currentQuestion.answer}
                    </p>
                    {currentQuestion.shortAnswer && (
                      <p className="text-xs text-theology mt-2">
                        Key phrase: {currentQuestion.shortAnswer}
                      </p>
                    )}
                  </div>

                  {/* Scripture Proofs */}
                  {currentQuestion.scriptureProofs.length > 0 && (
                    <div className="text-sm">
                      <div className="text-xs font-medium text-muted-foreground mb-1">
                        Scripture Proofs:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {currentQuestion.scriptureProofs.map((proof, i) => (
                          <span key={i} className="px-2 py-1 bg-muted rounded text-xs">
                            {proof}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Test All 107 - Free Response Similarity Breakdown */}
                  {quizMode === 'test_all_107' && test107Session?.currentPhase === 'free_response' && test107SimilarityResult && (
                    <div className="border rounded-xl overflow-hidden">
                      <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-xs font-medium text-blue-700 dark:text-blue-300">
                        Similarity Analysis
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="bg-muted rounded-lg p-3 text-center">
                            <div className="text-lg font-bold">{test107SimilarityResult.wordAccuracy}%</div>
                            <div className="text-xs text-muted-foreground">Word Accuracy</div>
                          </div>
                          <div className="bg-muted rounded-lg p-3 text-center">
                            <div className="text-lg font-bold">{test107SimilarityResult.orderAccuracy}%</div>
                            <div className="text-xs text-muted-foreground">Word Order</div>
                          </div>
                          <div className="bg-muted rounded-lg p-3 text-center">
                            <div className="text-lg font-bold">{test107SimilarityResult.keyTermAccuracy}%</div>
                            <div className="text-xs text-muted-foreground">Key Terms</div>
                          </div>
                          <div className="bg-muted rounded-lg p-3 text-center">
                            <div className="text-lg font-bold">{test107SimilarityResult.phraseAccuracy}%</div>
                            <div className="text-xs text-muted-foreground">Phrase Match</div>
                          </div>
                        </div>
                        {test107SimilarityResult.missingKeyTerms.length > 0 && (
                          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                            <div className="text-xs font-medium text-amber-700 dark:text-amber-300 mb-1">
                              Missing Key Terms:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {test107SimilarityResult.missingKeyTerms.slice(0, 5).map((term, i) => (
                                <span key={i} className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs text-amber-700 dark:text-amber-300">
                                  {term}
                                </span>
                              ))}
                              {test107SimilarityResult.missingKeyTerms.length > 5 && (
                                <span className="text-xs text-amber-600">+{test107SimilarityResult.missingKeyTerms.length - 5} more</span>
                              )}
                            </div>
                          </div>
                        )}
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="text-xs font-medium mb-1">Your Answer:</div>
                          <p className="text-sm text-muted-foreground">{userAnswer}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MCQ Explanation - show all options with explanations */}
                  {(quizMode === 'mcq' || (quizMode === 'test_all_107' && test107Session?.currentPhase === 'mcq')) && mcqOptions.length > 0 && (
                    <div className="border rounded-xl overflow-hidden">
                      <div className="bg-muted px-4 py-2 text-xs font-medium">
                        Why Each Answer is Right or Wrong:
                      </div>
                      <div className="divide-y">
                        {mcqOptions.map((option, i) => (
                          <div
                            key={i}
                            className={`p-3 text-sm ${
                              option.isCorrect
                                ? 'bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500'
                                : mcqSelected === i
                                  ? 'bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500'
                                  : ''
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                option.isCorrect
                                  ? 'bg-green-500 text-white'
                                  : mcqSelected === i
                                    ? 'bg-red-500 text-white'
                                    : 'bg-muted text-muted-foreground'
                              }`}>
                                {String.fromCharCode(65 + i)}
                              </span>
                              <div className="flex-1">
                                <p className="text-sm leading-relaxed">{option.answer}</p>
                                {option.explanation && (
                                  <p className={`text-xs mt-2 p-2 rounded ${
                                    option.isCorrect
                                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                                      : 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300'
                                  }`}>
                                    {option.isCorrect ? '✓ ' : '✗ '}{option.explanation}
                                  </p>
                                )}
                                {!option.explanation && option.source && (
                                  <p className={`text-xs mt-1 ${
                                    option.isCorrect
                                      ? 'text-green-600 dark:text-green-400 font-medium'
                                      : 'text-muted-foreground'
                                  }`}>
                                    Source: {option.source}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SR Status - Hide for Test All 107 mode */}
                  {quizMode !== 'test_all_107' && (() => {
                    const progress = getVerseProgress(currentQuestion.id);
                    if (!progress) return null;
                    const nextReviewDays = Math.ceil(
                      (new Date(progress.nextReviewDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
                    );
                    return (
                      <div className="bg-theology/10 rounded-xl p-4 border border-theology/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="h-4 w-4 text-theology" />
                          <span className="text-sm font-medium">Spaced Repetition</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-center text-sm">
                          <div>
                            <div className="text-lg font-bold text-theology">
                              {nextReviewDays <= 0 ? 'Now' : `${nextReviewDays}d`}
                            </div>
                            <div className="text-xs text-muted-foreground">Next Review</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold">{progress.repetitions}</div>
                            <div className="text-xs text-muted-foreground">Streak</div>
                          </div>
                          <div>
                            <div className={`text-lg font-bold ${
                              progress.easeFactor >= 2.5 ? 'text-green-600' :
                              progress.easeFactor >= 2.0 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {progress.easeFactor >= 2.5 ? 'Strong' :
                               progress.easeFactor >= 2.0 ? 'Learning' : 'Weak'}
                            </div>
                            <div className="text-xs text-muted-foreground">Memory</div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Action Buttons */}
                  {quizMode === 'test_all_107' ? (
                    // Test All 107 - specific action buttons
                    <div className="space-y-3 pt-4">
                      <Button
                        variant="theology"
                        className="w-full"
                        onClick={advanceTest107}
                      >
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Next Question (Q{(test107Session?.currentQuestionIndex || 0) + 2} of 107)
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={handleTest107Pause}
                      >
                        <Pause className="h-4 w-4 mr-2" />
                        Save & Exit
                      </Button>
                    </div>
                  ) : (
                    // Regular modes - standard action buttons
                    <>
                      <div className="flex gap-4 pt-4">
                        <Button variant="outline" className="flex-1" onClick={handleTryAgain}>
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Try Again
                        </Button>
                        <Button variant="theology" className="flex-1" onClick={startPractice}>
                          <Shuffle className="h-4 w-4 mr-2" />
                          New Question
                        </Button>
                      </div>

                      <Link href="/theology" className="block">
                        <Button variant="ghost" className="w-full">
                          Back to Menu
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Test All 107 - Resume Modal */}
        {test107ShowResumeModal && test107Session && (
          <Test107ResumeModal
            isOpen={test107ShowResumeModal}
            session={test107Session}
            onResume={handleTest107Resume}
            onStartFresh={handleTest107StartFresh}
            onClose={() => setTest107ShowResumeModal(false)}
          />
        )}

        {/* Test All 107 - Completion Modal */}
        {test107ShowCompletion && test107Session && (
          <Test107Completion
            phase1Score={test107Session.phase1Score}
            phase2Score={test107Session.phase2Score}
            phase1Results={test107Session.phase1Results}
            phase2Results={test107Session.phase2Results}
            loopCount={test107Session.loopCount}
            onLoop={handleTest107Loop}
            onFinish={handleTest107Finish}
          />
        )}
      </main>
    </div>
  );
}

export default function TheologyPracticePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    }>
      <TheologyPracticeContent />
    </Suspense>
  );
}
