'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap, Users, BookOpen, Plus, Play, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { generateRoomCode, isValidRoomCode } from '@/lib/utils';

export default function MemoryPage() {
  const [mode, setMode] = useState<'menu' | 'create' | 'join'>('menu');
  const [roomCode, setRoomCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [joinError, setJoinError] = useState('');

  const handleCreateRoom = () => {
    const code = generateRoomCode();
    setGeneratedCode(code);
    setMode('create');
  };

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleJoinRoom = () => {
    if (!isValidRoomCode(roomCode)) {
      setJoinError('Invalid room code. Please enter a 6-character code.');
      return;
    }
    // Navigate to room
    window.location.href = `/memory/challenge/${roomCode.toUpperCase()}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href={mode === 'menu' ? '/' : '/memory'}>
            <Button variant="ghost" size="icon" onClick={() => mode !== 'menu' && setMode('menu')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-memory/10">
              <Zap className="h-5 w-5 text-memory" />
            </div>
            <div>
              <h1 className="font-semibold">Scripture Memory</h1>
              <p className="text-sm text-muted-foreground">Challenge a friend</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {mode === 'menu' && (
          <>
            {/* Mode Selection */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-center mb-6">How do you want to play?</h2>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Create Room */}
                <Card
                  variant="memory"
                  className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
                  onClick={handleCreateRoom}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4">
                      <Plus className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle>Create Room</CardTitle>
                    <CardDescription>
                      Start a new challenge and invite a friend
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Join Room */}
                <Card
                  variant="memory"
                  className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
                  onClick={() => setMode('join')}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle>Join Room</CardTitle>
                    <CardDescription>
                      Enter a code to join an existing challenge
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Solo Practice */}
                <Link href="/memory/practice">
                  <Card
                    variant="memory"
                    className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 h-full"
                  >
                    <CardHeader className="text-center">
                      <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
                        <BookOpen className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle>Solo Practice</CardTitle>
                      <CardDescription>
                        Practice memorizing verses on your own
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            </section>
          </>
        )}

        {mode === 'create' && (
          <section className="max-w-md mx-auto text-center">
            <Card variant="memory">
              <CardHeader>
                <CardTitle>Your Room Code</CardTitle>
                <CardDescription>
                  Share this code with your friend to start the challenge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-xl p-6 mb-6">
                  <div className="room-code text-memory">{generatedCode}</div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mb-4"
                  onClick={handleCopyCode}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Code
                    </>
                  )}
                </Button>

                <Link href={`/memory/challenge/${generatedCode}`}>
                  <Button variant="memory" className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Enter Room
                  </Button>
                </Link>

                <p className="text-sm text-muted-foreground mt-4">
                  Waiting for your friend to join...
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {mode === 'join' && (
          <section className="max-w-md mx-auto">
            <Card variant="memory">
              <CardHeader className="text-center">
                <CardTitle>Join a Room</CardTitle>
                <CardDescription>
                  Enter the 6-character code shared by your friend
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Input
                      placeholder="Enter room code"
                      value={roomCode}
                      onChange={(e) => {
                        setRoomCode(e.target.value.toUpperCase());
                        setJoinError('');
                      }}
                      className="text-center text-2xl tracking-widest font-mono uppercase"
                      maxLength={6}
                      error={!!joinError}
                    />
                    {joinError && (
                      <p className="text-sm text-destructive mt-2">{joinError}</p>
                    )}
                  </div>

                  <Button
                    variant="memory"
                    className="w-full"
                    onClick={handleJoinRoom}
                    disabled={roomCode.length !== 6}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Join Challenge
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
