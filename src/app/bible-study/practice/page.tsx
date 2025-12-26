'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  BookMarked,
  BookOpen,
  Check,
  X,
  RotateCcw,
  ChevronRight,
  Filter,
  Shuffle,
  Trophy,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import {
  BIBLE_QUIZ_QUESTIONS,
  getRandomQuestions,
  QUIZ_CATEGORY_LABELS,
  QUIZ_DIFFICULTY_LABELS,
  type QuizCategory,
  type BibleQuizQuestion,
} from '@/data/bible-quizzes';

type QuizState = 'setup' | 'active' | 'review' | 'complete';
type Testament = 'all' | 'old' | 'new';
type Difficulty = 'all' | 'easy' | 'medium' | 'hard';
type Category = 'all' | QuizCategory;

interface QuizAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
}

// Shuffle answers for display
function shuffleAnswers(question: BibleQuizQuestion): string[] {
  const answers = [question.correctAnswer, ...question.distractors];
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
}

export default function BibleStudyPracticePage() {
  // Quiz configuration
  const [questionCount, setQuestionCount] = useState(10);
  const [testament, setTestament] = useState<Testament>('all');
  const [difficulty, setDifficulty] = useState<Difficulty>('all');
  const [category, setCategory] = useState<Category>('all');

  // Quiz state
  const [quizState, setQuizState] = useState<QuizState>('setup');
  const [questions, setQuestions] = useState<BibleQuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Available question counts
  const availableQuestions = useMemo(() => {
    let filtered = [...BIBLE_QUIZ_QUESTIONS];

    if (testament !== 'all') {
      const otBooks = [
        'genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy',
        'joshua', 'judges', 'ruth', '1-samuel', '2-samuel',
        '1-kings', '2-kings', '1-chronicles', '2-chronicles',
        'ezra', 'nehemiah', 'esther',
        'job', 'psalms', 'proverbs', 'ecclesiastes', 'song-of-solomon',
        'isaiah', 'jeremiah', 'lamentations', 'ezekiel', 'daniel',
        'hosea', 'joel', 'amos', 'obadiah', 'jonah', 'micah',
        'nahum', 'habakkuk', 'zephaniah', 'haggai', 'zechariah', 'malachi'
      ];
      filtered = filtered.filter(q =>
        testament === 'old' ? otBooks.includes(q.bookId) : !otBooks.includes(q.bookId)
      );
    }

    if (difficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty === difficulty);
    }

    if (category !== 'all') {
      filtered = filtered.filter(q => q.category === category);
    }

    return filtered.length;
  }, [testament, difficulty, category]);

  // Start quiz
  const startQuiz = useCallback(() => {
    const filters: {
      category?: QuizCategory;
      difficulty?: 'easy' | 'medium' | 'hard';
      testament?: 'old' | 'new';
    } = {};

    if (category !== 'all') filters.category = category;
    if (difficulty !== 'all') filters.difficulty = difficulty;
    if (testament !== 'all') filters.testament = testament;

    const selectedQuestions = getRandomQuestions(questionCount, filters);
    setQuestions(selectedQuestions);
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);

    if (selectedQuestions.length > 0) {
      setShuffledAnswers(shuffleAnswers(selectedQuestions[0]));
    }

    setQuizState('active');
  }, [questionCount, category, difficulty, testament]);

  // Handle answer selection
  const handleAnswer = (answer: string) => {
    if (showFeedback) return;

    setSelectedAnswer(answer);
    setShowFeedback(true);

    const currentQuestion = questions[currentIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;

    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      selectedAnswer: answer,
      isCorrect,
    }]);
  };

  // Move to next question
  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setShuffledAnswers(shuffleAnswers(questions[nextIdx]));
    } else {
      setQuizState('complete');
    }
  };

  // Reset quiz
  const resetQuiz = () => {
    setQuizState('setup');
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  // Calculate score
  const score = useMemo(() => {
    const correct = answers.filter(a => a.isCorrect).length;
    const total = answers.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, total, percentage };
  }, [answers]);

  // Get current question
  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/bible-study">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-bible/10">
              <BookMarked className="h-5 w-5 text-bible" />
            </div>
            <div>
              <h1 className="font-semibold">Bible Book Quiz</h1>
              <p className="text-sm text-muted-foreground">
                {quizState === 'setup' && 'Configure your quiz'}
                {quizState === 'active' && `Question ${currentIndex + 1} of ${questions.length}`}
                {quizState === 'complete' && 'Quiz Complete!'}
              </p>
            </div>
          </div>
          {quizState === 'active' && (
            <div className="ml-auto text-sm text-muted-foreground">
              Score: {answers.filter(a => a.isCorrect).length}/{answers.length}
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Setup Screen */}
        {quizState === 'setup' && (
          <div className="space-y-8">
            {/* Stats Card */}
            <Card variant="bible">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-bible">
                      {BIBLE_QUIZ_QUESTIONS.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Questions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-bible">66</div>
                    <div className="text-sm text-muted-foreground">Books Covered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-bible">5</div>
                    <div className="text-sm text-muted-foreground">Categories</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-bible">
                      {availableQuestions}
                    </div>
                    <div className="text-sm text-muted-foreground">Matching Filters</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Filter Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Quiz Settings
                </CardTitle>
                <CardDescription>
                  Customize your quiz experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Question Count */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Number of Questions</label>
                  <div className="flex gap-2 flex-wrap">
                    {[5, 10, 15, 20, 25].map((count) => (
                      <Button
                        key={count}
                        variant={questionCount === count ? 'bible' : 'outline'}
                        size="sm"
                        onClick={() => setQuestionCount(Math.min(count, availableQuestions))}
                        disabled={count > availableQuestions}
                      >
                        {count}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Testament Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Testament</label>
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      variant={testament === 'all' ? 'bible' : 'outline'}
                      size="sm"
                      onClick={() => setTestament('all')}
                    >
                      All
                    </Button>
                    <Button
                      variant={testament === 'old' ? 'bible' : 'outline'}
                      size="sm"
                      onClick={() => setTestament('old')}
                    >
                      Old Testament
                    </Button>
                    <Button
                      variant={testament === 'new' ? 'bible' : 'outline'}
                      size="sm"
                      onClick={() => setTestament('new')}
                    >
                      New Testament
                    </Button>
                  </div>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Difficulty</label>
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      variant={difficulty === 'all' ? 'bible' : 'outline'}
                      size="sm"
                      onClick={() => setDifficulty('all')}
                    >
                      All Levels
                    </Button>
                    {(['easy', 'medium', 'hard'] as const).map((diff) => (
                      <Button
                        key={diff}
                        variant={difficulty === diff ? 'bible' : 'outline'}
                        size="sm"
                        onClick={() => setDifficulty(diff)}
                      >
                        {QUIZ_DIFFICULTY_LABELS[diff]}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Question Category</label>
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      variant={category === 'all' ? 'bible' : 'outline'}
                      size="sm"
                      onClick={() => setCategory('all')}
                    >
                      All Categories
                    </Button>
                    {(Object.keys(QUIZ_CATEGORY_LABELS) as QuizCategory[]).map((cat) => (
                      <Button
                        key={cat}
                        variant={category === cat ? 'bible' : 'outline'}
                        size="sm"
                        onClick={() => setCategory(cat)}
                      >
                        {QUIZ_CATEGORY_LABELS[cat]}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Start Button */}
            <div className="flex justify-center">
              <Button
                variant="bible"
                size="lg"
                onClick={startQuiz}
                disabled={availableQuestions === 0}
                className="gap-2"
              >
                <Shuffle className="h-5 w-5" />
                Start Quiz ({Math.min(questionCount, availableQuestions)} questions)
              </Button>
            </div>

            {availableQuestions === 0 && (
              <p className="text-center text-sm text-muted-foreground">
                No questions match your filters. Try adjusting your selections.
              </p>
            )}
          </div>
        )}

        {/* Active Quiz */}
        {quizState === 'active' && currentQuestion && (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-bible transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    currentQuestion.difficulty === 'easy'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      : currentQuestion.difficulty === 'medium'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                  }`}>
                    {QUIZ_DIFFICULTY_LABELS[currentQuestion.difficulty]}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {QUIZ_CATEGORY_LABELS[currentQuestion.category]}
                  </span>
                </div>
                <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {shuffledAnswers.map((answer, index) => {
                  const isSelected = selectedAnswer === answer;
                  const isCorrect = answer === currentQuestion.correctAnswer;
                  const showCorrect = showFeedback && isCorrect;
                  const showIncorrect = showFeedback && isSelected && !isCorrect;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(answer)}
                      disabled={showFeedback}
                      className={`
                        w-full p-4 rounded-lg border text-left transition-all
                        ${!showFeedback && 'hover:border-bible hover:bg-bible/5 cursor-pointer'}
                        ${isSelected && !showFeedback && 'border-bible bg-bible/10'}
                        ${showCorrect && 'border-green-500 bg-green-50 dark:bg-green-900/20'}
                        ${showIncorrect && 'border-red-500 bg-red-50 dark:bg-red-900/20'}
                        ${showFeedback && !isCorrect && !isSelected && 'opacity-50'}
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{answer}</span>
                        {showCorrect && <Check className="h-5 w-5 text-green-500" />}
                        {showIncorrect && <X className="h-5 w-5 text-red-500" />}
                      </div>
                    </button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Feedback & Next */}
            {showFeedback && (
              <Card className={
                selectedAnswer === currentQuestion.correctAnswer
                  ? 'border-green-500 bg-green-50/50 dark:bg-green-900/10'
                  : 'border-red-500 bg-red-50/50 dark:bg-red-900/10'
              }>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {selectedAnswer === currentQuestion.correctAnswer ? (
                      <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                    ) : (
                      <div className="p-2 rounded-full bg-red-100 dark:bg-red-900/30">
                        <X className="h-4 w-4 text-red-600" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-medium">
                        {selectedAnswer === currentQuestion.correctAnswer
                          ? 'Correct!'
                          : `Incorrect. The answer is: ${currentQuestion.correctAnswer}`
                        }
                      </p>
                      {currentQuestion.explanation && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {currentQuestion.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {showFeedback && (
              <div className="flex justify-end">
                <Button variant="bible" onClick={nextQuestion} className="gap-2">
                  {currentIndex < questions.length - 1 ? (
                    <>
                      Next Question
                      <ChevronRight className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      See Results
                      <Trophy className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Results Screen */}
        {quizState === 'complete' && (
          <div className="space-y-8">
            {/* Score Card */}
            <Card variant="bible" className="text-center">
              <CardContent className="py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-bible/20 mb-6">
                  {score.percentage >= 80 ? (
                    <Trophy className="h-10 w-10 text-bible" />
                  ) : score.percentage >= 60 ? (
                    <Target className="h-10 w-10 text-bible" />
                  ) : (
                    <BookOpen className="h-10 w-10 text-bible" />
                  )}
                </div>
                <h2 className="text-3xl font-bold mb-2">
                  {score.correct} / {score.total}
                </h2>
                <div className="text-5xl font-bold text-bible mb-4">
                  {score.percentage}%
                </div>
                <p className="text-muted-foreground">
                  {score.percentage >= 90
                    ? 'Excellent! You know your Bible well!'
                    : score.percentage >= 70
                    ? 'Great job! Keep studying!'
                    : score.percentage >= 50
                    ? 'Good effort! Review the book summaries to improve.'
                    : 'Keep learning! The book summaries can help you grow.'}
                </p>
              </CardContent>
            </Card>

            {/* Answer Review */}
            <Card>
              <CardHeader>
                <CardTitle>Review Your Answers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {questions.map((question, index) => {
                  const answer = answers[index];
                  const isCorrect = answer?.isCorrect;

                  return (
                    <div
                      key={question.id}
                      className={`p-4 rounded-lg border ${
                        isCorrect
                          ? 'border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-900/10'
                          : 'border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-900/10'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm mb-1">{question.question}</p>
                          <p className="text-sm text-muted-foreground">
                            Your answer: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                              {answer?.selectedAnswer}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-muted-foreground">
                              Correct answer: <span className="text-green-600">{question.correctAnswer}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="bible" onClick={startQuiz} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Try Again
              </Button>
              <Button variant="outline" onClick={resetQuiz} className="gap-2">
                <Filter className="h-4 w-4" />
                Change Settings
              </Button>
              <Link href="/bible-study">
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  <BookOpen className="h-4 w-4" />
                  Study Book Summaries
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
