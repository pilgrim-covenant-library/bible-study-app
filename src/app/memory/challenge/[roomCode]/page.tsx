'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Zap, Users, Clock, Trophy, Loader2, Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { useRoom } from '@/hooks/useRoom';
import { isRealtimeDbAvailable } from '@/lib/firebase';

// Create blanks from verse
function createBlanks(text: string, difficulty: 'easy' | 'medium' | 'hard') {
  const words = text.split(' ');
  const percentages = { easy: 0.2, medium: 0.4, hard: 0.6 };
  const numBlanks = Math.max(2, Math.floor(words.length * percentages[difficulty]));

  // Use seeded random for consistent blanks across players
  const seed = text.length;
  const seededRandom = (i: number) => {
    const x = Math.sin(seed + i) * 10000;
    return x - Math.floor(x);
  };

  // Pick indices for blanks deterministically
  const indices = new Set<number>();
  let attempts = 0;
  while (indices.size < numBlanks && attempts < 100) {
    const idx = Math.floor(seededRandom(attempts) * words.length);
    // Skip short words
    if (words[idx].replace(/[.,!?;:'"]/g, '').length >= 3) {
      indices.add(idx);
    }
    attempts++;
  }

  const blanks = Array.from(indices).sort((a, b) => a - b).map((idx, i) => ({
    index: i,
    wordIndex: idx,
    answer: words[idx].replace(/[.,!?;:'"]/g, ''),
    punctuation: words[idx].replace(/[^.,!?;:'"]/g, ''),
  }));

  return { blanks, words };
}

export default function ChallengePage() {
  const params = useParams();
  const router = useRouter();
  const roomCode = params.roomCode as string;

  const {
    room,
    playerId,
    isHost,
    isConnected,
    error,
    joinRoom,
    createRoom,
    setReady,
    updateScore,
    startGame,
    endGame,
    leaveRoom,
  } = useRoom();

  const [isJoining, setIsJoining] = useState(true);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [localScore, setLocalScore] = useState(0);

  // Get verse and blanks
  const verse = room?.verse;
  const { blanks, words } = useMemo(() => {
    if (!verse) return { blanks: [], words: [] };
    return createBlanks(verse.fullText, 'medium');
  }, [verse]);

  // Get players list
  const players = useMemo(() => {
    if (!room?.players) return [];
    return Object.values(room.players).sort((a, b) => a.joinedAt - b.joinedAt);
  }, [room?.players]);

  const currentPlayer = players.find(p => p.id === playerId);
  const opponent = players.find(p => p.id !== playerId);

  // Check if Firebase RTDB is available
  const rtdbAvailable = isRealtimeDbAvailable();

  // Auto-join room on mount
  useEffect(() => {
    if (!rtdbAvailable) {
      setIsJoining(false);
      return;
    }

    // Check for stored player name
    const storedName = localStorage.getItem('playerName');
    if (storedName) {
      setPlayerName(storedName);
      handleJoinOrCreate(storedName);
    } else {
      setShowNameInput(true);
      setIsJoining(false);
    }
  }, [roomCode, rtdbAvailable]);

  const handleJoinOrCreate = async (name: string) => {
    setIsJoining(true);
    localStorage.setItem('playerName', name);

    // Try to join first, if fails then create
    const joined = await joinRoom(roomCode, name);
    if (!joined) {
      await createRoom(roomCode, name);
    }
    setIsJoining(false);
    setShowNameInput(false);
  };

  // Countdown timer
  useEffect(() => {
    if (room?.status === 'countdown' && countdown > 0) {
      const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [room?.status, countdown]);

  // Reset countdown when game starts
  useEffect(() => {
    if (room?.status === 'countdown') {
      setCountdown(3);
    }
  }, [room?.status]);

  // Game timer
  useEffect(() => {
    if (room?.status === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (room?.status === 'playing' && timeLeft === 0) {
      endGame();
    }
  }, [room?.status, timeLeft, endGame]);

  // Calculate and sync score when answers change
  useEffect(() => {
    if (!blanks.length) return;

    let correct = 0;
    blanks.forEach((blank) => {
      if (answers[blank.index]?.toLowerCase().trim() === blank.answer.toLowerCase()) {
        correct++;
      }
    });
    const newScore = correct * 100;
    const progress = Math.round((correct / blanks.length) * 100);

    setLocalScore(newScore);
    updateScore(newScore, progress);
  }, [answers, blanks, updateScore]);

  // Check if all players are ready to start
  useEffect(() => {
    if (!room || room.status !== 'waiting' || !isHost) return;

    const allPlayers = Object.values(room.players || {});
    if (allPlayers.length >= 2 && allPlayers.every(p => p.isReady)) {
      startGame();
    }
  }, [room, isHost, startGame]);

  // Check if all correct - end game early
  useEffect(() => {
    if (room?.status !== 'playing' || !blanks.length) return;

    const allCorrect = blanks.every(
      blank => answers[blank.index]?.toLowerCase().trim() === blank.answer.toLowerCase()
    );

    if (allCorrect) {
      endGame();
    }
  }, [room?.status, blanks, answers, endGame]);

  const handleAnswerChange = (index: number, value: string) => {
    setAnswers(prev => ({ ...prev, [index]: value }));
  };

  const handleReadyClick = async () => {
    await setReady(true);
  };

  // Show name input if needed
  if (showNameInput) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Enter Your Name</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (playerName.trim()) {
                handleJoinOrCreate(playerName.trim());
              }
            }}>
              <Input
                placeholder="Your name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="mb-4"
                autoFocus
              />
              <Button
                type="submit"
                variant="memory"
                className="w-full"
                disabled={!playerName.trim()}
              >
                Join Room
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show loading state
  if (isJoining) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-memory" />
          <p className="text-muted-foreground">Connecting to room...</p>
        </div>
      </div>
    );
  }

  // Show error if RTDB not available
  if (!rtdbAvailable) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <WifiOff className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <CardTitle>Multiplayer Unavailable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Real-time multiplayer requires Firebase to be configured.
            </p>
            <Link href="/memory">
              <Button variant="outline">Back to Menu</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show error
  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Link href="/memory">
              <Button variant="outline">Back to Menu</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/memory" onClick={() => leaveRoom()}>
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

          <div className="flex items-center gap-4">
            {isConnected ? (
              <Wifi className="h-4 w-4 text-success" />
            ) : (
              <WifiOff className="h-4 w-4 text-destructive" />
            )}

            {room?.status === 'playing' && (
              <div className="flex items-center gap-2 text-lg font-mono">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className={timeLeft <= 10 ? 'text-destructive' : ''}>
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Waiting State */}
        {room?.status === 'waiting' && (
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
                  {players.map((player) => (
                    <div key={player.id} className="flex items-center justify-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${player.isReady ? 'bg-success' : 'bg-muted'}`} />
                      <span>
                        {player.name}
                        {player.id === playerId && ' (You)'}
                        {player.isReady && ' - Ready!'}
                      </span>
                    </div>
                  ))}

                  {players.length < 2 && (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-muted animate-pulse" />
                      <span className="text-muted-foreground">Waiting for opponent...</span>
                    </div>
                  )}

                  <Button
                    variant="memory"
                    className="w-full"
                    onClick={handleReadyClick}
                    disabled={currentPlayer?.isReady}
                  >
                    {currentPlayer?.isReady ? 'Ready!' : "I'm Ready"}
                  </Button>

                  {players.length >= 2 && !players.every(p => p.isReady) && (
                    <p className="text-sm text-muted-foreground">
                      Waiting for all players to be ready...
                    </p>
                  )}

                  {players.length < 2 && (
                    <p className="text-sm text-muted-foreground">
                      Share room code <strong>{roomCode}</strong> with a friend to play!
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Countdown */}
        {room?.status === 'countdown' && (
          <section className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="text-9xl font-bold text-memory animate-pulse">
                {countdown || 'GO!'}
              </div>
              <p className="text-xl text-muted-foreground mt-4">Get ready to fill in the blanks!</p>
            </div>
          </section>
        )}

        {/* Playing State */}
        {room?.status === 'playing' && verse && (
          <section>
            {/* Scores */}
            <div className="flex justify-between mb-6">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">
                  {currentPlayer?.name || 'You'}
                </div>
                <div className="text-2xl font-bold text-memory">{localScore}</div>
                <div className="text-xs text-muted-foreground">{currentPlayer?.progress || 0}%</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">
                  {opponent?.name || 'Opponent'}
                </div>
                <div className="text-2xl font-bold text-muted-foreground">{opponent?.score || 0}</div>
                <div className="text-xs text-muted-foreground">{opponent?.progress || 0}%</div>
              </div>
            </div>

            {/* Verse Reference */}
            <div className="text-center mb-6">
              <span className="text-lg font-semibold text-primary">{verse.reference}</span>
              <span className="text-muted-foreground ml-2">({verse.translation})</span>
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
        {room?.status === 'results' && (
          <section className="max-w-md mx-auto text-center">
            <Card variant="memory">
              <CardHeader>
                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mb-4">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  {localScore >= (opponent?.score || 0) ? 'You Win!' : 'Nice Try!'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Final Scores */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-xl p-4">
                      <div className="text-2xl font-bold text-memory">{localScore}</div>
                      <div className="text-sm text-muted-foreground">{currentPlayer?.name || 'You'}</div>
                    </div>
                    <div className="bg-muted rounded-xl p-4">
                      <div className="text-2xl font-bold text-muted-foreground">{opponent?.score || 0}</div>
                      <div className="text-sm text-muted-foreground">{opponent?.name || 'Opponent'}</div>
                    </div>
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
                    <Link href="/memory" className="flex-1" onClick={() => leaveRoom()}>
                      <Button variant="outline" className="w-full">
                        Back to Menu
                      </Button>
                    </Link>
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
