'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap, BookOpen, Send, RotateCcw, Shuffle, ChevronDown, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { getRandomVerse, getVersesByCategory, getAllCategories, MemoryVerse } from '@/data/memory-verses';
import { calculateSimilarity, SimilarityResult } from '@/lib/similarity';

type PracticeState = 'select' | 'practice' | 'result';

export default function PracticePage() {
  const [state, setState] = useState<PracticeState>('select');
  const [currentVerse, setCurrentVerse] = useState<MemoryVerse | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState<SimilarityResult | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAnswer, setShowAnswer] = useState(false);
  const [practiceHistory, setPracticeHistory] = useState<{verse: string; score: number}[]>([]);

  const categories = getAllCategories();

  const startPractice = useCallback((category?: string) => {
    let verse: MemoryVerse;
    if (category && category !== 'all') {
      const categoryVerses = getVersesByCategory(category);
      verse = categoryVerses[Math.floor(Math.random() * categoryVerses.length)];
    } else {
      verse = getRandomVerse();
    }
    setCurrentVerse(verse);
    setUserAnswer('');
    setResult(null);
    setShowAnswer(false);
    setState('practice');
  }, []);

  const handleSubmit = useCallback(() => {
    if (!currentVerse || !userAnswer.trim()) return;

    const similarityResult = calculateSimilarity(userAnswer, currentVerse.translations);
    setResult(similarityResult);
    setPracticeHistory(prev => [
      { verse: currentVerse.reference, score: similarityResult.bestScore },
      ...prev.slice(0, 9), // Keep last 10
    ]);
    setState('result');
  }, [currentVerse, userAnswer]);

  const handleTryAgain = useCallback(() => {
    setUserAnswer('');
    setResult(null);
    setShowAnswer(false);
    setState('practice');
  }, []);

  const handleNewVerse = useCallback(() => {
    startPractice(selectedCategory);
  }, [startPractice, selectedCategory]);

  // Keyboard shortcut: Enter to submit (with Ctrl/Cmd)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && state === 'practice') {
        handleSubmit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state, handleSubmit]);

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
              <p className="text-sm text-muted-foreground">Scripture Memory</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Category Selection */}
        {state === 'select' && (
          <section className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Choose a Category</h2>
              <p className="text-muted-foreground">Select a category to practice verses from</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              <Button
                variant={selectedCategory === 'all' ? 'memory' : 'outline'}
                className="h-auto py-3"
                onClick={() => setSelectedCategory('all')}
              >
                All Verses
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'memory' : 'outline'}
                  className="h-auto py-3 capitalize"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>

            <Button
              variant="memory"
              size="lg"
              className="w-full"
              onClick={() => startPractice(selectedCategory)}
            >
              <Shuffle className="h-5 w-5 mr-2" />
              Start Practice
            </Button>

            {/* Practice History */}
            {practiceHistory.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Recent Practice</h3>
                <div className="space-y-2">
                  {practiceHistory.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-2 bg-muted rounded-lg">
                      <span className="text-sm">{item.verse}</span>
                      <span className={`text-sm font-medium ${
                        item.score >= 85 ? 'text-success' :
                        item.score >= 70 ? 'text-warning' : 'text-muted-foreground'
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

        {/* Practice Mode */}
        {state === 'practice' && currentVerse && (
          <section className="max-w-2xl mx-auto">
            {/* Verse Reference */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-memory/10 rounded-full">
                <BookOpen className="h-5 w-5 text-memory" />
                <span className="text-xl font-bold text-memory">{currentVerse.reference}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Type this verse from memory
              </p>
            </div>

            {/* Context Verses */}
            <Card className="mb-6">
              <CardContent className="p-6">
                {/* Before Context */}
                {currentVerse.context.before && (
                  <div className="mb-4 pb-4 border-b border-dashed">
                    <div className="text-xs font-medium text-muted-foreground mb-1">
                      {currentVerse.context.before.reference}
                    </div>
                    <p className="text-muted-foreground italic">
                      {currentVerse.context.before.text}
                    </p>
                  </div>
                )}

                {/* Target Verse Input Area */}
                <div className="relative">
                  <div className="text-xs font-medium text-memory mb-2">
                    {currentVerse.reference} - TYPE THIS VERSE:
                  </div>
                  <textarea
                    className="w-full min-h-[150px] p-4 text-lg leading-relaxed border rounded-lg focus:ring-2 focus:ring-memory focus:border-memory resize-none bg-background"
                    placeholder="Type the verse from memory..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    autoFocus
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    Press Ctrl+Enter to submit
                  </div>
                </div>

                {/* After Context */}
                {currentVerse.context.after && (
                  <div className="mt-4 pt-4 border-t border-dashed">
                    <div className="text-xs font-medium text-muted-foreground mb-1">
                      {currentVerse.context.after.reference}
                    </div>
                    <p className="text-muted-foreground italic">
                      {currentVerse.context.after.text}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Peek at Answer (optional) */}
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
              disabled={!userAnswer.trim()}
            >
              <Send className="h-5 w-5 mr-2" />
              Check Answer
            </Button>
          </section>
        )}

        {/* Results */}
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
                  Best match: {result.bestTranslation}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Score Breakdown */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {result.scores.map((s) => (
                      <div
                        key={s.translation}
                        className={`p-2 rounded ${
                          s.translation === result.bestTranslation
                            ? 'bg-memory/20 ring-2 ring-memory'
                            : 'bg-muted'
                        }`}
                      >
                        <div className="text-xs font-medium">{s.translation}</div>
                        <div className="text-lg font-bold">{s.score}%</div>
                      </div>
                    ))}
                  </div>

                  {/* Your Answer */}
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-sm font-medium mb-2">Your answer:</div>
                    <p className="text-sm leading-relaxed">
                      {userAnswer || '(No answer)'}
                    </p>
                  </div>

                  {/* Correct Answer */}
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-sm font-medium mb-2">
                      {currentVerse.reference} ({result.bestTranslation}):
                    </div>
                    <p className="text-sm leading-relaxed">
                      {currentVerse.translations[result.bestTranslation]}
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
                      onClick={handleNewVerse}
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
