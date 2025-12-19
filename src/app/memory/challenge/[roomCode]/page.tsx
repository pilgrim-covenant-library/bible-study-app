'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Zap, Users, Clock, Trophy, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

// Sample verse for demo (in production, fetch from Firebase RTDB)
const DEMO_VERSE = {
  reference: 'John 3:16',
  fullText: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
  translation: 'ESV',
};

// Create blanks from verse
function createBlanks(text: string, difficulty: 'easy' | 'medium' | 'hard') {
  const words = text.split(' ');
  const percentages = { easy: 0.2, medium: 0.4, hard: 0.6 };
  const numBlanks = Math.max(2, Math.floor(words.length * percentages[difficulty]));

  // Pick random indices for blanks
  const indices = new Set<number>();
  while (indices.size < numBlanks) {
    const idx = Math.floor(Math.random() * words.length);
    // Skip short words
    if (words[idx].replace(/[.,!?;:'"]/g, '').length >= 3) {
      indices.add(idx);
    }
  }

  const blanks = Array.from(indices).sort((a, b) => a - b).map((idx, i) => ({
    index: i,
    wordIndex: idx,
    answer: words[idx].replace(/[.,!?;:'"]/g, ''),
    punctuation: words[idx].replace(/[^.,!?;:'"]/g, ''),
  }));

  return { blanks, words };
}

type GameState = 'waiting' | 'countdown' | 'playing' | 'results';

export default function ChallengePage() {
  const params = useParams();
  const roomCode = params.roomCode as string;

  const [gameState, setGameState] = useState<GameState>('waiting');
  const [countdown, setCountdown] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const { blanks, words } = createBlanks(DEMO_VERSE.fullText, 'medium');

  // Demo: Start game when ready
  useEffect(() => {
    if (isReady && gameState === 'waiting') {
      setGameState('countdown');
    }
  }, [isReady, gameState]);

  // Countdown timer
  useEffect(() => {
    if (gameState === 'countdown' && countdown > 0) {
      const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === 'countdown' && countdown === 0) {
      setGameState('playing');
    }
  }, [gameState, countdown]);

  // Game timer
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === 'playing' && timeLeft === 0) {
      setGameState('results');
    }
  }, [gameState, timeLeft]);

  // Calculate score when answers change
  useEffect(() => {
    let correct = 0;
    blanks.forEach((blank) => {
      if (answers[blank.index]?.toLowerCase().trim() === blank.answer.toLowerCase()) {
        correct++;
      }
    });
    setScore(correct * 100);
  }, [answers, blanks]);

  const handleAnswerChange = (index: number, value: string) => {
    setAnswers(prev => ({ ...prev, [index]: value }));
  };

  const allCorrect = blanks.every(
    blank => answers[blank.index]?.toLowerCase().trim() === blank.answer.toLowerCase()
  );

  // Auto-finish when all correct
  useEffect(() => {
    if (gameState === 'playing' && allCorrect) {
      setGameState('results');
    }
  }, [gameState, allCorrect]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/memory">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-memory/10">
                <Zap className="h-5 w-5 text-memory" />
              </div>
              <div>
                <h1 className="font-semibold">Room: {roomCode}</h1>
                <p className="text-sm text-muted-foreground">Scripture Memory Challenge</p>
              </div>
            </div>
          </div>

          {gameState === 'playing' && (
            <div className="flex items-center gap-2 text-lg font-mono">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className={timeLeft <= 10 ? 'text-destructive' : ''}>
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Waiting State */}
        {gameState === 'waiting' && (
          <section className="max-w-md mx-auto text-center">
            <Card variant="memory">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Waiting for Players</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${isReady ? 'bg-success' : 'bg-muted'}`} />
                    <span>You {isReady ? '(Ready)' : ''}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-muted animate-pulse" />
                    <span className="text-muted-foreground">Waiting for opponent...</span>
                  </div>

                  <Button
                    variant="memory"
                    className="w-full"
                    onClick={() => setIsReady(true)}
                    disabled={isReady}
                  >
                    {isReady ? 'Ready!' : "I'm Ready"}
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    (Demo: Click ready to start with a sample verse)
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Countdown */}
        {gameState === 'countdown' && (
          <section className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="text-9xl font-bold text-memory animate-countdown">
                {countdown || 'GO!'}
              </div>
              <p className="text-xl text-muted-foreground mt-4">Get ready to fill in the blanks!</p>
            </div>
          </section>
        )}

        {/* Playing State */}
        {gameState === 'playing' && (
          <section>
            {/* Scores */}
            <div className="flex justify-between mb-6">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Your Score</div>
                <div className="text-2xl font-bold text-memory">{score}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Opponent</div>
                <div className="text-2xl font-bold text-muted-foreground">{opponentScore}</div>
              </div>
            </div>

            {/* Verse Reference */}
            <div className="text-center mb-6">
              <span className="text-lg font-semibold text-primary">{DEMO_VERSE.reference}</span>
              <span className="text-muted-foreground ml-2">({DEMO_VERSE.translation})</span>
            </div>

            {/* Verse with Blanks */}
            <Card>
              <CardContent className="p-6">
                <p className="verse-text leading-loose">
                  {words.map((word, idx) => {
                    const blank = blanks.find(b => b.wordIndex === idx);
                    if (blank) {
                      const isCorrect = answers[blank.index]?.toLowerCase().trim() === blank.answer.toLowerCase();
                      return (
                        <span key={idx}>
                          <Input
                            className={`inline-block w-24 h-8 text-center mx-1 ${
                              isCorrect ? 'border-success text-success' : ''
                            }`}
                            value={answers[blank.index] || ''}
                            onChange={(e) => handleAnswerChange(blank.index, e.target.value)}
                            placeholder="___"
                          />
                          {blank.punctuation}
                          {' '}
                        </span>
                      );
                    }
                    return <span key={idx}>{word} </span>;
                  })}
                </p>
              </CardContent>
            </Card>

            {/* Progress */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{Object.keys(answers).length} / {blanks.length} blanks filled</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-memory transition-all"
                  style={{ width: `${(Object.keys(answers).length / blanks.length) * 100}%` }}
                />
              </div>
            </div>
          </section>
        )}

        {/* Results */}
        {gameState === 'results' && (
          <section className="max-w-md mx-auto text-center">
            <Card variant="memory">
              <CardHeader>
                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mb-4 animate-score">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  {score >= opponentScore ? 'You Win!' : 'Nice Try!'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-4xl font-bold text-memory mb-2">{score}</div>
                    <div className="text-sm text-muted-foreground">Your Score</div>
                  </div>

                  <div className="text-left space-y-2">
                    <p className="font-medium">Correct Answers:</p>
                    {blanks.map((blank) => (
                      <div key={blank.index} className="flex justify-between text-sm">
                        <span>{blank.answer}</span>
                        <span className={
                          answers[blank.index]?.toLowerCase().trim() === blank.answer.toLowerCase()
                            ? 'text-success'
                            : 'text-destructive'
                        }>
                          {answers[blank.index] || '(empty)'}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Link href="/memory" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Back to Menu
                      </Button>
                    </Link>
                    <Button
                      variant="memory"
                      className="flex-1"
                      onClick={() => {
                        setGameState('waiting');
                        setAnswers({});
                        setTimeLeft(60);
                        setCountdown(3);
                        setIsReady(false);
                      }}
                    >
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
