'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Users,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { QuestionCard, QuestionProgress } from '@/components/one2one/QuestionCard';
import { useOne2OneSessionStore } from '@/stores/one2oneSessionStore';
import { getChapterQuestions, type ChapterQuestion } from '@/data/one2one-questions';
import { fetchChapter } from '@/lib/bible-api';

// Map book IDs to API-compatible names
const BOOK_ID_TO_API: Record<string, string> = {
  'genesis': 'genesis',
  'exodus': 'exodus',
  'leviticus': 'leviticus',
  'numbers': 'numbers',
  'deuteronomy': 'deuteronomy',
  'joshua': 'joshua',
  'judges': 'judges',
  'ruth': 'ruth',
  '1-samuel': '1samuel',
  '2-samuel': '2samuel',
  '1-kings': '1kings',
  '2-kings': '2kings',
  '1-chronicles': '1chronicles',
  '2-chronicles': '2chronicles',
  'ezra': 'ezra',
  'nehemiah': 'nehemiah',
  'esther': 'esther',
  'job': 'job',
  'psalms': 'psalms',
  'proverbs': 'proverbs',
  'ecclesiastes': 'ecclesiastes',
  'song-of-solomon': 'songofsolomon',
  'isaiah': 'isaiah',
  'jeremiah': 'jeremiah',
  'lamentations': 'lamentations',
  'ezekiel': 'ezekiel',
  'daniel': 'daniel',
  'hosea': 'hosea',
  'joel': 'joel',
  'amos': 'amos',
  'obadiah': 'obadiah',
  'jonah': 'jonah',
  'micah': 'micah',
  'nahum': 'nahum',
  'habakkuk': 'habakkuk',
  'zephaniah': 'zephaniah',
  'haggai': 'haggai',
  'zechariah': 'zechariah',
  'malachi': 'malachi',
  'matthew': 'matthew',
  'mark': 'mark',
  'luke': 'luke',
  'john': 'john',
  'acts': 'acts',
  'romans': 'romans',
  '1-corinthians': '1corinthians',
  '2-corinthians': '2corinthians',
  'galatians': 'galatians',
  'ephesians': 'ephesians',
  'philippians': 'philippians',
  'colossians': 'colossians',
  '1-thessalonians': '1thessalonians',
  '2-thessalonians': '2thessalonians',
  '1-timothy': '1timothy',
  '2-timothy': '2timothy',
  'titus': 'titus',
  'philemon': 'philemon',
  'hebrews': 'hebrews',
  'james': 'james',
  '1-peter': '1peter',
  '2-peter': '2peter',
  '1-john': '1john',
  '2-john': '2john',
  '3-john': '3john',
  'jude': 'jude',
  'revelation': 'revelation',
};

export default function One2OneSessionPage() {
  const router = useRouter();
  const {
    currentSession,
    isLoadingPassage,
    passageError,
    setPassageText,
    setPassageError,
    setLoadingPassage,
    saveResponse,
    goToQuestion,
    nextQuestion,
    prevQuestion,
    completeSession,
    clearCurrentSession,
    getProgress,
    getCurrentResponse,
  } = useOne2OneSessionStore();

  const [questions, setQuestions] = useState<ChapterQuestion[]>([]);
  const [showPassage, setShowPassage] = useState(true);
  const [isCompleting, setIsCompleting] = useState(false);

  // Redirect if no active session
  useEffect(() => {
    if (!currentSession) {
      router.replace('/one2one');
    }
  }, [currentSession, router]);

  // Load passage and questions when session starts
  useEffect(() => {
    if (!currentSession || currentSession.passageText) return;

    // Capture session values to avoid stale closure issues
    const { bookId, chapter } = currentSession;

    async function loadData() {
      setLoadingPassage(true);
      try {
        // Load passage text
        const apiBook = BOOK_ID_TO_API[bookId] || bookId;
        const verses = await fetchChapter(apiBook, chapter, 'ESV');

        if (verses.length > 0) {
          const passageText = verses
            .map(v => `${v.verse}. ${v.text}`)
            .join('\n');
          setPassageText(passageText);
        } else {
          setPassageError('Failed to load passage. Please try again.');
        }

        // Load questions for this chapter
        const chapterQuestions = await getChapterQuestions(
          bookId,
          chapter
        );
        setQuestions(chapterQuestions.questions);

      } catch (error) {
        console.error('Error loading session data:', error);
        setPassageError('Error loading passage. Please check your connection.');
      }
    }

    loadData();
  }, [currentSession, setPassageText, setPassageError, setLoadingPassage]);

  // Handle response changes with debounce
  const handleResponseChange = useCallback(
    (response: string) => {
      if (!currentSession) return;
      const questionId = currentSession.currentQuestionIndex + 1;
      saveResponse(questionId, response);
    },
    [currentSession, saveResponse]
  );

  // Handle session completion
  const handleComplete = async () => {
    setIsCompleting(true);
    completeSession();
    // Small delay for visual feedback
    await new Promise(resolve => setTimeout(resolve, 500));
    router.push('/one2one');
  };

  // Handle leaving session
  const handleLeave = () => {
    if (currentSession && currentSession.responses.length > 0) {
      if (confirm('You have unsaved progress. Are you sure you want to leave?')) {
        clearCurrentSession();
        router.push('/one2one');
      }
    } else {
      clearCurrentSession();
      router.push('/one2one');
    }
  };

  if (!currentSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-one2one" />
      </div>
    );
  }

  const progress = getProgress();
  const currentQuestion = questions[currentSession.currentQuestionIndex];
  const currentResponse = getCurrentResponse();
  const isLastQuestion = currentSession.currentQuestionIndex === 6;
  const isFirstQuestion = currentSession.currentQuestionIndex === 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={handleLeave}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-one2one/10">
                  <Users className="h-4 w-4 text-one2one" />
                </div>
                <div>
                  <h1 className="font-semibold text-sm">
                    {currentSession.passageReference}
                  </h1>
                  <p className="text-xs text-muted-foreground">
                    Question {progress.current} of {progress.total}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Progress:</span>
                <span className="font-medium text-one2one">{progress.percentage}%</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPassage(!showPassage)}
                className="hidden md:flex items-center gap-1"
              >
                <BookOpen className="h-4 w-4" />
                {showPassage ? 'Hide' : 'Show'} Passage
              </Button>
            </div>
          </div>

          {/* Question progress dots */}
          <div className="mt-3">
            <QuestionProgress
              questions={questions.length > 0 ? questions : []}
              currentIndex={currentSession.currentQuestionIndex}
              responses={currentSession.responses}
              onQuestionSelect={goToQuestion}
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className={`grid gap-6 ${showPassage ? 'lg:grid-cols-2' : ''}`}>
          {/* Passage Panel */}
          {showPassage && (
            <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-10rem)] lg:overflow-hidden">
              <Card className="h-full">
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-one2one" />
                    <h2 className="font-semibold">{currentSession.passageReference}</h2>
                  </div>
                  <span className="text-xs text-muted-foreground">ESV</span>
                </div>
                <CardContent className="p-4 h-[calc(100%-3.5rem)] overflow-y-auto">
                  {isLoadingPassage ? (
                    <div className="flex items-center justify-center h-32">
                      <Loader2 className="h-6 w-6 animate-spin text-one2one" />
                    </div>
                  ) : passageError ? (
                    <div className="flex flex-col items-center justify-center h-32 text-center">
                      <AlertCircle className="h-8 w-8 text-destructive mb-2" />
                      <p className="text-sm text-muted-foreground">{passageError}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => window.location.reload()}
                      >
                        Retry
                      </Button>
                    </div>
                  ) : (
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      {currentSession.passageText?.split('\n').map((verse, i) => (
                        <p key={i} className="text-sm leading-relaxed mb-2">
                          {verse}
                        </p>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Question Panel */}
          <div className="space-y-6">
            {currentQuestion ? (
              <QuestionCard
                question={currentQuestion}
                questionNumber={currentSession.currentQuestionIndex + 1}
                totalQuestions={7}
                response={currentResponse}
                onResponseChange={handleResponseChange}
                autoFocus
              />
            ) : (
              <Card>
                <CardContent className="p-8 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin text-one2one" />
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={prevQuestion}
                disabled={isFirstQuestion}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>

              {isLastQuestion ? (
                <Button
                  variant="one2one"
                  onClick={handleComplete}
                  disabled={isCompleting}
                >
                  {isCompleting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Completing...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Complete Session
                    </>
                  )}
                </Button>
              ) : (
                <Button variant="one2one" onClick={nextQuestion}>
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>

            {/* Mobile passage toggle */}
            <div className="lg:hidden">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowPassage(!showPassage)}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                {showPassage ? 'Hide' : 'Show'} Passage
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
