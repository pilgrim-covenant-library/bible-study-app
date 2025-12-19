'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Zap, Users, Clock, Trophy, Loader2, Wifi, WifiOff, Send, BookOpen, ArrowRight, Crown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { useRoom, GameVerse } from '@/hooks/useRoom';
import { isRealtimeDbAvailable } from '@/lib/firebase';
import { calculateSimilarity, SimilarityResult } from '@/lib/similarity';

const NUM_ROUNDS = 3;

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
    submitAnswer,
    startGame,
    nextRound,
    endGame,
    leaveRoom,
  } = useRoom();

  const [isJoining, setIsJoining] = useState(true);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [timeLeft, setTimeLeft] = useState(90);
  const [userAnswer, setUserAnswer] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [localResult, setLocalResult] = useState<SimilarityResult | null>(null);

  // Loading states for buttons to prevent double-clicks
  const [isReadyLoading, setIsReadyLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNextRoundLoading, setIsNextRoundLoading] = useState(false);

  // Ref to prevent double endGame() calls (race condition fix)
  const isEndingGameRef = useRef(false);

  // Get verse from room
  const verse = room?.currentVerse as GameVerse | undefined;

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

    const attemptJoin = async (name: string) => {
      setIsJoining(true);
      localStorage.setItem('playerName', name);

      const joined = await joinRoom(roomCode, name);
      if (!joined) {
        await createRoom(roomCode, name);
      }
      setIsJoining(false);
      setShowNameInput(false);
    };

    const storedName = localStorage.getItem('playerName');
    if (storedName) {
      setPlayerName(storedName);
      attemptJoin(storedName);
    } else {
      setShowNameInput(true);
      setIsJoining(false);
    }
  }, [roomCode, rtdbAvailable, joinRoom, createRoom]);

  const handleJoinOrCreate = async (name: string) => {
    setIsJoining(true);
    localStorage.setItem('playerName', name);

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

  // Reset state when entering countdown (new round)
  useEffect(() => {
    if (room?.status === 'countdown') {
      setCountdown(3);
      setUserAnswer('');
      setHasSubmitted(false);
      setLocalResult(null);
      setTimeLeft(90);
      setIsSubmitting(false);
      setIsNextRoundLoading(false);
      isEndingGameRef.current = false; // Reset for new round
    }
  }, [room?.status, room?.currentRound]);

  // Game timer
  useEffect(() => {
    if (room?.status === 'playing' && timeLeft > 0 && !hasSubmitted) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [room?.status, timeLeft, hasSubmitted]);

  // Check if both players have submitted - end round
  useEffect(() => {
    if (room?.status !== 'playing') return;
    if (isEndingGameRef.current) return; // Prevent double calls

    const allPlayers = Object.values(room.players || {});
    if (allPlayers.length >= 2 && allPlayers.every(p => p.currentRoundFinishedAt)) {
      isEndingGameRef.current = true;
      endGame();
    }
  }, [room, endGame]);

  // Check if all players are ready to start
  useEffect(() => {
    if (!room || room.status !== 'waiting' || !isHost) return;

    const allPlayers = Object.values(room.players || {});
    if (allPlayers.length >= 2 && allPlayers.every(p => p.isReady)) {
      startGame(NUM_ROUNDS);
    }
  }, [room, isHost, startGame]);

  const handleSubmit = useCallback(async () => {
    if (!verse || hasSubmitted || isSubmitting) return;

    setIsSubmitting(true);
    const result = calculateSimilarity(userAnswer, verse.translations);
    setLocalResult(result);
    setHasSubmitted(true);

    await submitAnswer(userAnswer, result.bestScore, result.bestTranslation);

    // If opponent has already submitted, end the round (with race condition protection)
    if (opponent?.currentRoundFinishedAt && !isEndingGameRef.current) {
      isEndingGameRef.current = true;
      endGame();
    }
    setIsSubmitting(false);
  }, [verse, userAnswer, hasSubmitted, isSubmitting, submitAnswer, opponent, endGame]);

  // Auto-submit when time runs out
  useEffect(() => {
    if (room?.status === 'playing' && timeLeft === 0 && !hasSubmitted) {
      handleSubmit();
    }
  }, [room?.status, timeLeft, hasSubmitted, handleSubmit]);

  const handleReadyClick = async () => {
    if (isReadyLoading) return;
    setIsReadyLoading(true);
    try {
      await setReady(true);
    } finally {
      setIsReadyLoading(false);
    }
  };

  const handleNextRound = async () => {
    if (!isHost || isNextRoundLoading) return;
    setIsNextRoundLoading(true);
    try {
      await nextRound();
    } finally {
      setIsNextRoundLoading(false);
    }
  };

  // Properly await leaveRoom before navigating to prevent race condition
  const handleLeaveRoom = useCallback(async () => {
    await leaveRoom();
    router.push('/memory');
  }, [leaveRoom, router]);

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
            <Button variant="ghost" size="icon" onClick={handleLeaveRoom}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-memory/10">
                <Zap className="h-5 w-5 text-memory" />
              </div>
              <div>
                <h1 className="font-semibold">Room: {roomCode}</h1>
                <p className="text-sm text-muted-foreground">
                  {room?.currentRound && room?.totalRounds
                    ? `Round ${room.currentRound} of ${room.totalRounds}`
                    : 'Scripture Memory Challenge'}
                </p>
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
                <span className={timeLeft <= 15 ? 'text-destructive' : ''}>
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
                <p className="text-sm text-muted-foreground mt-2">
                  {NUM_ROUNDS} rounds of scripture memory
                </p>
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
                    disabled={currentPlayer?.isReady || isReadyLoading}
                  >
                    {isReadyLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Setting ready...
                      </>
                    ) : currentPlayer?.isReady ? 'Ready!' : "I'm Ready"}
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
              <p className="text-lg text-muted-foreground mb-4">
                Round {room.currentRound} of {room.totalRounds}
              </p>
              <div className="text-9xl font-bold text-memory animate-pulse">
                {countdown || 'GO!'}
              </div>
              <p className="text-xl text-muted-foreground mt-4">
                Type the verse from memory!
              </p>
            </div>
          </section>
        )}

        {/* Playing State */}
        {room?.status === 'playing' && verse && (
          <section>
            {/* Score Bar */}
            <div className="flex justify-between items-center mb-6 p-4 bg-muted rounded-xl">
              <div className="text-center flex-1">
                <div className="text-sm text-muted-foreground">{currentPlayer?.name || 'You'}</div>
                <div className="text-2xl font-bold text-memory">{currentPlayer?.totalScore || 0}</div>
              </div>
              <div className="text-center px-4">
                <div className="text-xs text-muted-foreground">Round</div>
                <div className="text-lg font-bold">{room.currentRound}/{room.totalRounds}</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-sm text-muted-foreground">{opponent?.name || 'Opponent'}</div>
                <div className="text-2xl font-bold">{opponent?.totalScore || 0}</div>
              </div>
            </div>

            {/* Opponent Status */}
            {opponent && (
              <div className="mb-4 text-center">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                  opponent.currentRoundFinishedAt ? 'bg-success/10 text-success' : 'bg-muted'
                }`}>
                  {opponent.name}: {opponent.currentRoundFinishedAt ? 'Submitted!' : 'Typing...'}
                </span>
              </div>
            )}

            {/* Verse Reference */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-memory/10 rounded-full">
                <BookOpen className="h-5 w-5 text-memory" />
                <span className="text-xl font-bold text-memory">{verse.reference}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Type this verse from memory
              </p>
            </div>

            {/* Context Verses */}
            <Card className="mb-6">
              <CardContent className="p-6">
                {verse.context.before && (
                  <div className="mb-4 pb-4 border-b border-dashed">
                    <div className="text-xs font-medium text-muted-foreground mb-1">
                      {verse.context.before.reference}
                    </div>
                    <p className="text-muted-foreground italic">
                      {verse.context.before.text}
                    </p>
                  </div>
                )}

                <div className="relative">
                  <div className="text-xs font-medium text-memory mb-2">
                    {verse.reference} - TYPE THIS VERSE:
                  </div>
                  {!hasSubmitted ? (
                    <textarea
                      className="w-full min-h-[150px] p-4 text-lg leading-relaxed border rounded-lg focus:ring-2 focus:ring-memory focus:border-memory resize-none bg-background"
                      placeholder="Type the verse from memory..."
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      autoFocus
                    />
                  ) : (
                    <div className="w-full min-h-[150px] p-4 text-lg leading-relaxed border rounded-lg bg-muted/50">
                      {userAnswer || <span className="text-muted-foreground">(No answer submitted)</span>}
                    </div>
                  )}
                </div>

                {verse.context.after && (
                  <div className="mt-4 pt-4 border-t border-dashed">
                    <div className="text-xs font-medium text-muted-foreground mb-1">
                      {verse.context.after.reference}
                    </div>
                    <p className="text-muted-foreground italic">
                      {verse.context.after.text}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Submit Button or Result */}
            {!hasSubmitted ? (
              <Button
                variant="memory"
                className="w-full"
                size="lg"
                onClick={handleSubmit}
                disabled={!userAnswer.trim() || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Submit Answer
                  </>
                )}
              </Button>
            ) : localResult && (
              <Card className="bg-memory/5 border-memory/20">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-memory">{localResult.bestScore}%</div>
                    <div className="text-sm text-muted-foreground">
                      Best match: {localResult.bestTranslation}
                    </div>
                    <div className="text-lg font-medium mt-2">{localResult.feedback}</div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    {localResult.scores.map((s) => (
                      <div
                        key={s.translation}
                        className={`p-2 rounded ${
                          s.translation === localResult.bestTranslation
                            ? 'bg-memory/20 ring-2 ring-memory'
                            : 'bg-muted'
                        }`}
                      >
                        <div className="text-xs font-medium">{s.translation}</div>
                        <div className="text-lg font-bold">{s.score}%</div>
                      </div>
                    ))}
                  </div>

                  {opponent && !opponent.currentRoundFinishedAt && (
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Waiting for {opponent.name} to finish...
                    </p>
                  )}
                </CardContent>
              </Card>
            )}
          </section>
        )}

        {/* Round Results */}
        {room?.status === 'round_results' && verse && (
          <section className="max-w-2xl mx-auto">
            <Card variant="memory">
              <CardHeader className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Round {room.currentRound} of {room.totalRounds}
                </p>
                <CardTitle className="text-2xl">Round Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Round Scores */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`rounded-xl p-4 ${
                      (currentPlayer?.currentRoundScore || 0) >= (opponent?.currentRoundScore || 0)
                        ? 'bg-memory/10 ring-2 ring-memory'
                        : 'bg-muted'
                    }`}>
                      <div className="text-3xl font-bold text-memory">
                        {currentPlayer?.currentRoundScore || 0}%
                      </div>
                      <div className="text-sm font-medium">{currentPlayer?.name || 'You'}</div>
                      {currentPlayer?.currentRoundTranslation && (
                        <div className="text-xs text-muted-foreground">
                          Best: {currentPlayer.currentRoundTranslation}
                        </div>
                      )}
                      <div className="text-xs text-muted-foreground mt-1">
                        Running total: {(currentPlayer?.totalScore || 0) + (currentPlayer?.currentRoundScore || 0)}
                      </div>
                    </div>
                    <div className={`rounded-xl p-4 ${
                      (opponent?.currentRoundScore || 0) > (currentPlayer?.currentRoundScore || 0)
                        ? 'bg-memory/10 ring-2 ring-memory'
                        : 'bg-muted'
                    }`}>
                      <div className="text-3xl font-bold">
                        {opponent?.currentRoundScore || 0}%
                      </div>
                      <div className="text-sm font-medium">{opponent?.name || 'Opponent'}</div>
                      {opponent?.currentRoundTranslation && (
                        <div className="text-xs text-muted-foreground">
                          Best: {opponent.currentRoundTranslation}
                        </div>
                      )}
                      <div className="text-xs text-muted-foreground mt-1">
                        Running total: {(opponent?.totalScore || 0) + (opponent?.currentRoundScore || 0)}
                      </div>
                    </div>
                  </div>

                  {/* Correct Answer */}
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-sm font-medium mb-2">
                      {verse.reference} (ESV):
                    </div>
                    <p className="text-sm leading-relaxed">
                      {verse.translations.ESV}
                    </p>
                  </div>

                  {/* Your Answer */}
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-sm font-medium mb-2">Your answer:</div>
                    <p className="text-sm leading-relaxed">
                      {currentPlayer?.currentRoundAnswer || userAnswer || '(No answer)'}
                    </p>
                  </div>

                  {/* Opponent's Answer */}
                  {opponent?.currentRoundAnswer && (
                    <div className="bg-muted/50 rounded-xl p-4">
                      <div className="text-sm font-medium mb-2">{opponent.name}'s answer:</div>
                      <p className="text-sm leading-relaxed">
                        {opponent.currentRoundAnswer}
                      </p>
                    </div>
                  )}

                  {/* Next Round / Final Results Button */}
                  {isHost ? (
                    <Button
                      variant="memory"
                      className="w-full"
                      size="lg"
                      onClick={handleNextRound}
                      disabled={isNextRoundLoading}
                    >
                      {isNextRoundLoading ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Loading...
                        </>
                      ) : room.currentRound < room.totalRounds ? (
                        <>
                          Next Round
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </>
                      ) : (
                        <>
                          See Final Results
                          <Trophy className="h-5 w-5 ml-2" />
                        </>
                      )}
                    </Button>
                  ) : (
                    <p className="text-center text-muted-foreground">
                      Waiting for host to continue...
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Final Results */}
        {room?.status === 'final_results' && (
          <section className="max-w-2xl mx-auto">
            <Card variant="memory">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mb-4">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  {(currentPlayer?.totalScore || 0) > (opponent?.totalScore || 0)
                    ? 'You Win!'
                    : (currentPlayer?.totalScore || 0) < (opponent?.totalScore || 0)
                    ? `${opponent?.name} Wins!`
                    : "It's a Tie!"}
                </CardTitle>
                <p className="text-muted-foreground">
                  After {room.totalRounds} rounds
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Final Scores */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`rounded-xl p-6 text-center ${
                      (currentPlayer?.totalScore || 0) >= (opponent?.totalScore || 0)
                        ? 'bg-memory/10 ring-2 ring-memory'
                        : 'bg-muted'
                    }`}>
                      {(currentPlayer?.totalScore || 0) >= (opponent?.totalScore || 0) && (
                        <Crown className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                      )}
                      <div className="text-4xl font-bold text-memory">
                        {currentPlayer?.totalScore || 0}
                      </div>
                      <div className="text-sm font-medium mt-1">{currentPlayer?.name || 'You'}</div>
                      <div className="text-xs text-muted-foreground mt-2">
                        Rounds: {(currentPlayer?.roundScores || []).join(' + ')}
                      </div>
                    </div>
                    <div className={`rounded-xl p-6 text-center ${
                      (opponent?.totalScore || 0) > (currentPlayer?.totalScore || 0)
                        ? 'bg-memory/10 ring-2 ring-memory'
                        : 'bg-muted'
                    }`}>
                      {(opponent?.totalScore || 0) > (currentPlayer?.totalScore || 0) && (
                        <Crown className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                      )}
                      <div className="text-4xl font-bold">
                        {opponent?.totalScore || 0}
                      </div>
                      <div className="text-sm font-medium mt-1">{opponent?.name || 'Opponent'}</div>
                      <div className="text-xs text-muted-foreground mt-2">
                        Rounds: {(opponent?.roundScores || []).join(' + ')}
                      </div>
                    </div>
                  </div>

                  {/* Round Summary */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Round Summary</h4>
                    {room.roundResults && Object.entries(room.roundResults).map(([roundNum, result]) => (
                      <div key={roundNum} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="text-sm">
                          Round {roundNum}: {result.visibleVerse}
                        </span>
                        <div className="flex gap-4 text-sm">
                          <span className="text-memory font-medium">
                            {result.players[playerId || '']?.score || 0}%
                          </span>
                          <span className="text-muted-foreground">vs</span>
                          <span className="font-medium">
                            {result.players[opponent?.id || '']?.score || 0}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full" onClick={handleLeaveRoom}>
                    Back to Menu
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </main>
    </div>
  );
}
