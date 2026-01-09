'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Users, ChevronRight, History, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { BookChapterSelector } from '@/components/one2one/BookChapterSelector';
import { useOne2OneSessionStore } from '@/stores/one2oneSessionStore';
import { ONE2ONE_QUESTIONS } from '@/types';
import { BIBLE_BOOKS, type BibleBook } from '@/data/one2one-questions';

export default function One2OnePage() {
  const router = useRouter();
  const {
    startSession,
    hasActiveSession,
    currentSession,
    sessionHistory,
    deleteSession,
    clearCurrentSession,
  } = useOne2OneSessionStore();

  const [selectedBook, setSelectedBook] = useState<BibleBook | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  const handleBookChapterSelect = (book: BibleBook, chapter: number) => {
    setSelectedBook(book);
    setSelectedChapter(chapter);
  };

  const handleStartSession = () => {
    if (!selectedBook || !selectedChapter) return;

    // Start a new session
    startSession(
      selectedBook.id,
      selectedBook.name,
      selectedChapter,
      undefined // chapterTitle will be loaded from questions data
    );

    // Navigate to session page
    router.push('/one2one/session');
  };

  const handleResumeSession = () => {
    if (currentSession) {
      router.push('/one2one/session');
    }
  };

  const handleDeleteHistory = (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Delete this session from history?')) {
      deleteSession(sessionId);
    }
  };

  const canStartSession = selectedBook && selectedChapter;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-one2one/10">
              <Users className="h-5 w-5 text-one2one" />
            </div>
            <div>
              <h1 className="font-semibold">One2One Bible Study</h1>
              <p className="text-sm text-muted-foreground">Partner Bible reading</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Resume Active Session Banner */}
        {hasActiveSession() && currentSession && (
          <section className="mb-6">
            <Card className="border-one2one bg-one2one/5">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-one2one">Continue Your Session</p>
                    <p className="text-sm text-muted-foreground">
                      {currentSession.passageReference} • Question{' '}
                      {currentSession.currentQuestionIndex + 1}/7
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        if (confirm('Discard current session?')) {
                          clearCurrentSession();
                        }
                      }}
                    >
                      Discard
                    </Button>
                    <Button variant="one2one" size="sm" onClick={handleResumeSession}>
                      Resume
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* The 7 Questions */}
        <section className="mb-8">
          <Card variant="one2one">
            <CardHeader>
              <CardTitle>The One2One Method</CardTitle>
              <CardDescription>
                A simple, reproducible way to read the Bible with someone else using 7 questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {ONE2ONE_QUESTIONS.map((q) => (
                  <div key={q.id} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-one2one/10 text-one2one flex items-center justify-center text-sm font-medium">
                      {q.id}
                    </div>
                    <div>
                      <p className="font-medium">{q.title}</p>
                      <p className="text-sm text-muted-foreground">{q.instruction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Book and Chapter Selection */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Choose Your Passage</h2>
          <Card>
            <CardContent className="p-6">
              <BookChapterSelector
                selectedBook={selectedBook}
                selectedChapter={selectedChapter}
                onSelect={handleBookChapterSelect}
              />
            </CardContent>
          </Card>
        </section>

        {/* Start Button */}
        <section className="mb-8">
          <Button
            variant="one2one"
            size="lg"
            className="w-full"
            disabled={!canStartSession}
            onClick={handleStartSession}
          >
            Start Session
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
          <p className="text-sm text-center text-muted-foreground mt-4">
            You can study alone or invite a partner to join
          </p>
        </section>

        {/* Session History */}
        {sessionHistory.length > 0 && (
          <section>
            <button
              type="button"
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-4"
            >
              <History className="h-4 w-4" />
              Previous Sessions ({sessionHistory.length})
              <ChevronRight
                className={`h-4 w-4 transition-transform ${showHistory ? 'rotate-90' : ''}`}
              />
            </button>

            {showHistory && (
              <div className="space-y-2">
                {sessionHistory.slice(0, 10).map((session) => (
                  <Card
                    key={session.id}
                    className="cursor-pointer hover:border-one2one/40 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{session.passageReference}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(session.createdAt).toLocaleDateString()} •{' '}
                            {session.responseCount}/7 questions answered
                            {session.isComplete && (
                              <span className="text-one2one ml-2">✓ Complete</span>
                            )}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => handleDeleteHistory(session.id, e)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}
