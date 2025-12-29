'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  BookOpen,
  Clock,
  ChevronRight,
  Target,
  Zap,
  BookMarked,
  Check,
  Lightbulb,
  Cross,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { READING_PLANS, type ReadingPlan } from '@/data/reading-plans';
import { BIBLE_BOOK_SUMMARIES } from '@/data/bible-summaries';
import { getChaptersByBook, type ChapterSummary } from '@/data/bible-chapter-summaries';

type DifficultyFilter = 'all' | 'easy' | 'medium' | 'intensive';
type CategoryFilter = 'all' | 'chronological' | 'thematic' | 'canonical' | 'overview';

// Get book name from bookId
function getBookName(bookId: string): string {
  const book = BIBLE_BOOK_SUMMARIES.find(b => b.id === bookId);
  return book?.name || bookId;
}

// Difficulty badge styling
function getDifficultyBadge(difficulty: string) {
  const styles: Record<string, { bg: string; label: string }> = {
    easy: { bg: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300', label: 'Easy' },
    medium: { bg: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300', label: 'Medium' },
    intensive: { bg: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300', label: 'Intensive' },
  };
  return styles[difficulty] || { bg: 'bg-gray-100 text-gray-800', label: difficulty };
}

// Category badge styling
function getCategoryBadge(category: string) {
  const styles: Record<string, { bg: string; label: string }> = {
    chronological: { bg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300', label: 'Chronological' },
    thematic: { bg: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300', label: 'Thematic' },
    canonical: { bg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300', label: 'Canonical' },
    overview: { bg: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300', label: 'Overview' },
  };
  return styles[category] || { bg: 'bg-gray-100 text-gray-800', label: category };
}

// Plan preview component
function PlanPreview({ plan, onClose }: { plan: ReadingPlan; onClose: () => void }) {
  const [previewDay, setPreviewDay] = useState(1);
  const dayReadings = plan.getDayReadings(previewDay);

  // Get chapter summaries for the readings
  const chapterDetails = useMemo(() => {
    if (!dayReadings) return [];

    const details: { bookName: string; chapter: ChapterSummary }[] = [];
    for (const reading of dayReadings.readings) {
      const bookChapters = getChaptersByBook(reading.bookId);
      for (const chNum of reading.chapters) {
        const chapter = bookChapters.find(c => c.chapter === chNum);
        if (chapter) {
          details.push({
            bookName: getBookName(reading.bookId),
            chapter,
          });
        }
      }
    }
    return details;
  }, [dayReadings]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <CardHeader className="border-b shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.duration} • {plan.chaptersPerDay}</CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6 overflow-y-auto flex-1">
          {/* Day Navigator */}
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPreviewDay(Math.max(1, previewDay - 1))}
              disabled={previewDay <= 1}
            >
              Previous Day
            </Button>
            <div className="text-center">
              <div className="text-lg font-semibold">Day {previewDay}</div>
              <div className="text-sm text-muted-foreground">of {plan.durationDays}</div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPreviewDay(Math.min(plan.durationDays, previewDay + 1))}
              disabled={previewDay >= plan.durationDays}
            >
              Next Day
            </Button>
          </div>

          {/* Day Readings */}
          {dayReadings && (
            <div className="space-y-4">
              <h4 className="font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-bible" />
                Today&apos;s Reading
              </h4>

              {/* Reading Overview */}
              <div className="p-3 bg-muted/50 rounded-lg">
                {dayReadings.readings.map((reading, idx) => (
                  <span key={reading.bookId}>
                    {idx > 0 && ', '}
                    <Link
                      href={`/bible-study/${reading.bookId}`}
                      className="text-bible hover:underline font-medium"
                      onClick={onClose}
                    >
                      {getBookName(reading.bookId)} {reading.chapters.length === 1
                        ? reading.chapters[0]
                        : `${reading.chapters[0]}-${reading.chapters[reading.chapters.length - 1]}`}
                    </Link>
                  </span>
                ))}
              </div>

              {/* Chapter Details */}
              <div className="space-y-3">
                {chapterDetails.map((detail, idx) => (
                  <Card key={idx} className="overflow-hidden">
                    <CardHeader className="pb-2 pt-3">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-bible/10 text-bible font-semibold text-sm">
                          {detail.chapter.chapter}
                        </span>
                        <div>
                          <div className="text-xs text-muted-foreground">{detail.bookName}</div>
                          <CardTitle className="text-sm">{detail.chapter.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-3 space-y-2">
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {detail.chapter.summary}
                      </p>
                      {detail.chapter.keyThemes.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {detail.chapter.keyThemes.slice(0, 3).map((theme, i) => (
                            <span key={i} className="text-[10px] px-1.5 py-0.5 bg-muted rounded-full">
                              {theme}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Jump to specific days */}
          <div className="mt-6 pt-4 border-t">
            <h4 className="text-sm font-medium mb-3">Jump to Day</h4>
            <div className="flex flex-wrap gap-2">
              {[1, Math.floor(plan.durationDays / 4), Math.floor(plan.durationDays / 2), Math.floor(plan.durationDays * 3 / 4), plan.durationDays].map(day => (
                <Button
                  key={day}
                  variant={previewDay === day ? 'bible' : 'outline'}
                  size="sm"
                  onClick={() => setPreviewDay(day)}
                >
                  Day {day}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Plan card component
function PlanCard({ plan, onPreview }: { plan: ReadingPlan; onPreview: () => void }) {
  const difficultyBadge = getDifficultyBadge(plan.difficulty);
  const categoryBadge = getCategoryBadge(plan.category);

  return (
    <Card className="h-full hover:shadow-md transition-all">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex gap-1.5">
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${categoryBadge.bg}`}>
              {categoryBadge.label}
            </span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${difficultyBadge.bg}`}>
              {difficultyBadge.label}
            </span>
          </div>
        </div>
        <CardTitle className="text-lg">{plan.name}</CardTitle>
        <CardDescription className="text-sm">
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Plan Stats */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{plan.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>{plan.chaptersPerDay}</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-1.5">
          {plan.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button
            variant="bible"
            size="sm"
            className="flex-1 gap-1"
            onClick={onPreview}
          >
            <BookOpen className="h-4 w-4" />
            Preview Plan
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ReadingPlansPage() {
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [previewPlan, setPreviewPlan] = useState<ReadingPlan | null>(null);

  // Filter plans
  const filteredPlans = useMemo(() => {
    return READING_PLANS.filter(plan => {
      if (difficultyFilter !== 'all' && plan.difficulty !== difficultyFilter) return false;
      if (categoryFilter !== 'all' && plan.category !== categoryFilter) return false;
      return true;
    });
  }, [difficultyFilter, categoryFilter]);

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
              <Calendar className="h-5 w-5 text-bible" />
            </div>
            <div>
              <h1 className="font-semibold">Reading Plans</h1>
              <p className="text-sm text-muted-foreground">Structured Bible reading schedules</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Intro Section */}
        <section className="mb-8">
          <Card variant="bible">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-bible/10 shrink-0">
                  <Target className="h-6 w-6 text-bible" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Start Your Bible Reading Journey</h2>
                  <p className="text-muted-foreground mb-4">
                    Choose a reading plan that fits your goals and schedule. Each plan includes chapter
                    summaries with Reformed commentary insights to deepen your understanding of Scripture.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <BookMarked className="h-4 w-4 text-bible" />
                      <span>{READING_PLANS.length} plans available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-bible" />
                      <span>Chapter summaries included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cross className="h-4 w-4 text-bible" />
                      <span>Christ-centered focus</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Filters */}
        <section className="mb-6">
          <div className="flex flex-col gap-4">
            {/* Difficulty Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Difficulty</label>
              <div className="flex flex-wrap gap-2">
                {(['all', 'easy', 'medium', 'intensive'] as const).map((diff) => (
                  <Button
                    key={diff}
                    variant={difficultyFilter === diff ? 'bible' : 'outline'}
                    size="sm"
                    onClick={() => setDifficultyFilter(diff)}
                  >
                    {diff === 'all' ? 'All Levels' : diff.charAt(0).toUpperCase() + diff.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <div className="flex flex-wrap gap-2">
                {(['all', 'chronological', 'thematic', 'canonical'] as const).map((cat) => (
                  <Button
                    key={cat}
                    variant={categoryFilter === cat ? 'bible' : 'outline'}
                    size="sm"
                    onClick={() => setCategoryFilter(cat)}
                  >
                    {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Plans Grid */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Available Plans</h2>
            <span className="text-sm text-muted-foreground">
              {filteredPlans.length} plan{filteredPlans.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {filteredPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onPreview={() => setPreviewPlan(plan)}
              />
            ))}
          </div>

          {filteredPlans.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No plans match your filters.</p>
              <p className="text-sm mt-2">Try adjusting your filters to see more plans.</p>
            </div>
          )}
        </section>

        {/* Tips Section */}
        <section className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-bible" />
                Tips for Success
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-bible font-bold">1.</span>
                  <span><strong>Start small:</strong> If you&apos;re new to Bible reading, try a shorter plan like the Gospels or Psalms & Proverbs.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-bible font-bold">2.</span>
                  <span><strong>Be consistent:</strong> Read at the same time each day to build a habit. Morning often works best.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-bible font-bold">3.</span>
                  <span><strong>Don&apos;t give up:</strong> If you miss a day, just pick up where you left off. Progress matters more than perfection.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-bible font-bold">4.</span>
                  <span><strong>Use the summaries:</strong> Our chapter summaries help you understand context and see Christ throughout Scripture.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Plan Preview Modal */}
      {previewPlan && (
        <PlanPreview
          plan={previewPlan}
          onClose={() => setPreviewPlan(null)}
        />
      )}
    </div>
  );
}
