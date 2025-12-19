'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, HelpCircle, Trophy, Clock, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { shuffleArray } from '@/lib/utils';
import type { TriviaQuestion, TriviaCategory } from '@/types';

// Sample trivia questions (in production, load from JSON file or API)
const SAMPLE_QUESTIONS: TriviaQuestion[] = [
  {
    id: '1',
    question: 'Who was the first man God created?',
    answer: 'Adam',
    options: ['Adam', 'Noah', 'Abraham', 'Moses'],
    correctIndex: 0,
    category: 'old_testament',
    difficulty: 'easy',
    reference: 'Genesis 2:7',
    explanation: 'God formed Adam from the dust of the ground and breathed life into him.',
  },
  {
    id: '2',
    question: 'How many days did God take to create the world?',
    answer: '6',
    options: ['5', '6', '7', '8'],
    correctIndex: 1,
    category: 'old_testament',
    difficulty: 'easy',
    reference: 'Genesis 1:31-2:2',
  },
  {
    id: '3',
    question: 'Who was swallowed by a great fish?',
    answer: 'Jonah',
    options: ['Elijah', 'Jonah', 'Daniel', 'Job'],
    correctIndex: 1,
    category: 'old_testament',
    difficulty: 'easy',
    reference: 'Jonah 1:17',
  },
  {
    id: '4',
    question: 'Which disciple walked on water with Jesus?',
    answer: 'Peter',
    options: ['Peter', 'John', 'James', 'Andrew'],
    correctIndex: 0,
    category: 'new_testament',
    difficulty: 'easy',
    reference: 'Matthew 14:28-29',
  },
  {
    id: '5',
    question: 'In which city was Jesus born?',
    answer: 'Bethlehem',
    options: ['Jerusalem', 'Bethlehem', 'Nazareth', 'Capernaum'],
    correctIndex: 1,
    category: 'gospels',
    difficulty: 'easy',
    reference: 'Matthew 2:1',
  },
  {
    id: '6',
    question: 'How many books are in the New Testament?',
    answer: '27',
    options: ['21', '27', '39', '66'],
    correctIndex: 1,
    category: 'new_testament',
    difficulty: 'medium',
  },
  {
    id: '7',
    question: 'Who killed Goliath?',
    answer: 'David',
    options: ['Saul', 'Jonathan', 'David', 'Samuel'],
    correctIndex: 2,
    category: 'old_testament',
    difficulty: 'easy',
    reference: '1 Samuel 17:50',
  },
  {
    id: '8',
    question: 'Which river did John the Baptist baptize Jesus in?',
    answer: 'Jordan',
    options: ['Nile', 'Euphrates', 'Jordan', 'Tigris'],
    correctIndex: 2,
    category: 'gospels',
    difficulty: 'easy',
    reference: 'Matthew 3:13',
  },
  {
    id: '9',
    question: 'How many plagues did God send on Egypt?',
    answer: '10',
    options: ['7', '10', '12', '40'],
    correctIndex: 1,
    category: 'old_testament',
    difficulty: 'medium',
    reference: 'Exodus 7-12',
  },
  {
    id: '10',
    question: 'Who denied Jesus three times?',
    answer: 'Peter',
    options: ['Judas', 'Peter', 'Thomas', 'John'],
    correctIndex: 1,
    category: 'gospels',
    difficulty: 'easy',
    reference: 'Matthew 26:69-75',
  },
];

const CATEGORIES: { value: TriviaCategory | 'all'; label: string; color: string }[] = [
  { value: 'all', label: 'All Categories', color: 'bg-trivia' },
  { value: 'old_testament', label: 'Old Testament', color: 'bg-amber-600' },
  { value: 'new_testament', label: 'New Testament', color: 'bg-blue-600' },
  { value: 'gospels', label: 'Gospels', color: 'bg-green-600' },
  { value: 'characters', label: 'Characters', color: 'bg-purple-600' },
];

type Difficulty = 'easy' | 'medium' | 'hard';

const DIFFICULTIES: { value: Difficulty | 'all'; label: string; color: string; bgColor: string }[] = [
  { value: 'all', label: 'All', color: 'bg-trivia', bgColor: 'bg-trivia/20 text-trivia' },
  { value: 'easy', label: 'Easy', color: 'bg-green-600', bgColor: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-600', bgColor: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400' },
  { value: 'hard', label: 'Hard', color: 'bg-red-600', bgColor: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400' },
];

type GameState = 'menu' | 'playing' | 'results';

export default function TriviaPage() {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [selectedCategory, setSelectedCategory] = useState<TriviaCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [answers, setAnswers] = useState<{ questionId: string; correct: boolean }[]>([]);

  // Timer
  useEffect(() => {
    if (gameState === 'playing' && !showResult && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(-1); // Time's up
    }
  }, [gameState, timeLeft, showResult]);

  const startGame = () => {
    let filtered = SAMPLE_QUESTIONS;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(q => q.category === selectedCategory);
    }
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty === selectedDifficulty);
    }
    const shuffled = shuffleArray(filtered).slice(0, 10);
    setQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setAnswers([]);
    setTimeLeft(15);
    setGameState('playing');
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const question = questions[currentQuestion];
    const isCorrect = answerIndex === question.correctIndex;

    if (isCorrect) {
      const timeBonus = Math.floor(timeLeft * 5);
      const streakBonus = streak * 10;
      setScore(s => s + 100 + timeBonus + streakBonus);
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }

    setAnswers(prev => [...prev, { questionId: question.id, correct: isCorrect }]);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(c => c + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(15);
    } else {
      setGameState('results');
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={gameState === 'menu' ? '/' : '/trivia'}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => gameState !== 'menu' && setGameState('menu')}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-trivia/10">
                <HelpCircle className="h-5 w-5 text-trivia" />
              </div>
              <div>
                <h1 className="font-semibold">Bible Trivia</h1>
                <p className="text-sm text-muted-foreground">Test your knowledge</p>
              </div>
            </div>
          </div>

          {gameState === 'playing' && (
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Score</div>
                <div className="font-bold text-trivia">{score}</div>
              </div>
              {streak > 0 && (
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Streak</div>
                  <div className="font-bold text-streak animate-fire">{streak}x</div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Menu */}
        {gameState === 'menu' && (
          <section className="max-w-md mx-auto">
            <Card variant="trivia">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Ready to Play?</CardTitle>
                <CardDescription>
                  Answer 10 questions to test your Bible knowledge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Difficulty</label>
                    <div className="grid grid-cols-4 gap-2">
                      {DIFFICULTIES.map((diff) => (
                        <Button
                          key={diff.value}
                          variant={selectedDifficulty === diff.value ? 'default' : 'outline'}
                          size="sm"
                          className={selectedDifficulty === diff.value ? diff.color : ''}
                          onClick={() => setSelectedDifficulty(diff.value)}
                        >
                          {diff.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <div className="grid grid-cols-2 gap-2">
                      {CATEGORIES.map((cat) => (
                        <Button
                          key={cat.value}
                          variant={selectedCategory === cat.value ? 'default' : 'outline'}
                          size="sm"
                          className={selectedCategory === cat.value ? cat.color : ''}
                          onClick={() => setSelectedCategory(cat.value)}
                        >
                          {cat.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button variant="trivia" size="lg" className="w-full" onClick={startGame}>
                    Start Game
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Playing */}
        {gameState === 'playing' && question && (
          <section className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="flex items-center gap-2">
                <Clock className={`h-4 w-4 ${timeLeft <= 5 ? 'text-destructive' : 'text-muted-foreground'}`} />
                <span className={`font-mono ${timeLeft <= 5 ? 'text-destructive' : ''}`}>
                  {timeLeft}s
                </span>
              </div>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-trivia transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {question.category.replace('_', ' ')}
                  </span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full uppercase ${
                    DIFFICULTIES.find(d => d.value === question.difficulty)?.bgColor || ''
                  }`}>
                    {question.difficulty}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-center mb-8">{question.question}</h2>

                <div className="grid gap-3">
                  {question.options.map((option, index) => {
                    let buttonClass = 'h-auto py-4 px-6 text-left justify-start';

                    if (showResult) {
                      if (index === question.correctIndex) {
                        buttonClass += ' bg-success/20 border-success text-success hover:bg-success/20';
                      } else if (index === selectedAnswer) {
                        buttonClass += ' bg-destructive/20 border-destructive text-destructive hover:bg-destructive/20';
                      }
                    }

                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className={buttonClass}
                        onClick={() => !showResult && handleAnswer(index)}
                        disabled={showResult}
                      >
                        <span className="mr-3 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm">
                          {String.fromCharCode(65 + index)}
                        </span>
                        {option}
                        {showResult && index === question.correctIndex && (
                          <CheckCircle className="ml-auto h-5 w-5 text-success" />
                        )}
                        {showResult && index === selectedAnswer && index !== question.correctIndex && (
                          <XCircle className="ml-auto h-5 w-5 text-destructive" />
                        )}
                      </Button>
                    );
                  })}
                </div>

                {/* Result Feedback */}
                {showResult && (
                  <div className="mt-6 text-center">
                    {selectedAnswer === question.correctIndex ? (
                      <p className="text-success font-medium">Correct! +{100 + Math.floor((15 - timeLeft) * 5)} points</p>
                    ) : (
                      <p className="text-destructive font-medium">
                        {selectedAnswer === -1 ? "Time's up!" : 'Incorrect'}
                      </p>
                    )}
                    {question.explanation && (
                      <p className="text-sm text-muted-foreground mt-2">{question.explanation}</p>
                    )}
                    {question.reference && (
                      <p className="text-sm text-muted-foreground mt-1">📖 {question.reference}</p>
                    )}

                    <Button variant="trivia" className="mt-4" onClick={nextQuestion}>
                      {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        )}

        {/* Results */}
        {gameState === 'results' && (
          <section className="max-w-md mx-auto text-center">
            <Card variant="trivia">
              <CardHeader>
                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center mb-4 animate-score">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Game Over!</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted rounded-xl p-6">
                    <div className="text-5xl font-bold text-trivia mb-2">{score}</div>
                    <div className="text-muted-foreground">Total Score</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-success">
                        {answers.filter(a => a.correct).length}
                      </div>
                      <div className="text-sm text-muted-foreground">Correct</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-destructive">
                        {answers.filter(a => !a.correct).length}
                      </div>
                      <div className="text-sm text-muted-foreground">Incorrect</div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Link href="/" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Home
                      </Button>
                    </Link>
                    <Button
                      variant="trivia"
                      className="flex-1"
                      onClick={() => {
                        setGameState('menu');
                      }}
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Play Again
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </main>
    </div>
  );
}
