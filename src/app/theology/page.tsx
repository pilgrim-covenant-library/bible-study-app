'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ChevronRight, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { CATECHISM_CATEGORIES, WESTMINSTER_CATECHISM, type CatechismCategory, type Difficulty } from '@/data/westminster-catechism';
import { useSpacedRepetitionStore } from '@/stores/spacedRepetitionStore';

type _FilterMode = 'all' | 'category' | 'difficulty' | 'due';

const DIFFICULTIES: { value: Difficulty | 'all'; label: string; color: string }[] = [
  { value: 'all', label: 'All', color: 'bg-theology' },
  { value: 'easy', label: 'Easy', color: 'bg-green-600' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-600' },
  { value: 'hard', label: 'Hard', color: 'bg-red-600' },
];

export default function TheologyPage() {
  const [selectedCategory, setSelectedCategory] = useState<CatechismCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const { verses, getDueVerses } = useSpacedRepetitionStore();

  // Calculate stats
  const stats = useMemo(() => {
    const totalQuestions = WESTMINSTER_CATECHISM.length;
    const learnedQuestions = Object.keys(verses).filter(id => id.startsWith('wsc-')).length;
    const dueQuestions = getDueVerses().filter(v => v.verseId.startsWith('wsc-')).length;

    return {
      total: totalQuestions,
      learned: learnedQuestions,
      due: dueQuestions,
      progress: Math.round((learnedQuestions / totalQuestions) * 100),
    };
  }, [verses, getDueVerses]);

  // Get category stats
  const categoryStats = useMemo(() => {
    return CATECHISM_CATEGORIES.map(cat => {
      const questions = WESTMINSTER_CATECHISM.filter(q => q.category === cat.value);
      const learned = questions.filter(q => verses[q.id]).length;
      return {
        ...cat,
        total: questions.length,
        learned,
        progress: Math.round((learned / questions.length) * 100),
      };
    });
  }, [verses]);

  // Build practice URL with filters
  const getPracticeUrl = () => {
    const params = new URLSearchParams();
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    if (selectedDifficulty !== 'all') params.set('difficulty', selectedDifficulty);
    const queryString = params.toString();
    return `/theology/practice${queryString ? `?${queryString}` : ''}`;
  };

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
            <div className="p-2 rounded-lg bg-theology/10">
              <BookOpen className="h-5 w-5 text-theology" />
            </div>
            <div>
              <h1 className="font-semibold">Systematic Theology</h1>
              <p className="text-sm text-muted-foreground">Westminster Shorter Catechism</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Overview */}
        <section className="mb-8">
          <Card variant="theology">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold mb-1">Your Progress</h2>
                  <p className="text-muted-foreground">
                    {stats.learned} of {stats.total} questions learned
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-theology">{stats.progress}%</div>
                    <div className="text-sm text-muted-foreground">Complete</div>
                  </div>
                  {stats.due > 0 && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-500">{stats.due}</div>
                      <div className="text-sm text-muted-foreground">Due Today</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4 h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-theology transition-all duration-500"
                  style={{ width: `${stats.progress}%` }}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Quick Start</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/theology/practice">
              <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-theology/10">
                    <Target className="h-5 w-5 text-theology" />
                  </div>
                  <div>
                    <div className="font-medium">Practice All</div>
                    <div className="text-sm text-muted-foreground">{stats.total} questions</div>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>

            {stats.due > 0 && (
              <Link href="/theology/practice?due=true">
                <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5 border-amber-500/30">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10">
                      <TrendingUp className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <div className="font-medium">Review Due</div>
                      <div className="text-sm text-muted-foreground">{stats.due} questions</div>
                    </div>
                    <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                  </CardContent>
                </Card>
              </Link>
            )}

            <Link href="/theology/practice?new=true">
              <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <BookOpen className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <div className="font-medium">Learn New</div>
                    <div className="text-sm text-muted-foreground">{stats.total - stats.learned} remaining</div>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Custom Practice */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Custom Practice</h2>
          <Card variant="theology">
            <CardContent className="p-6 space-y-4">
              {/* Difficulty Filter */}
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

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    size="sm"
                    className={selectedCategory === 'all' ? 'bg-theology' : ''}
                    onClick={() => setSelectedCategory('all')}
                  >
                    All Categories
                  </Button>
                  {CATECHISM_CATEGORIES.map((cat) => (
                    <Button
                      key={cat.value}
                      variant={selectedCategory === cat.value ? 'default' : 'outline'}
                      size="sm"
                      className={selectedCategory === cat.value ? 'bg-theology' : ''}
                      onClick={() => setSelectedCategory(cat.value)}
                    >
                      {cat.label}
                    </Button>
                  ))}
                </div>
              </div>

              <Link href={getPracticeUrl()}>
                <Button variant="theology" size="lg" className="w-full">
                  Start Practice
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Categories Grid */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Study by Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryStats.map((cat) => (
              <Link key={cat.value} href={`/theology/practice?category=${cat.value}`}>
                <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5 h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{cat.label}</CardTitle>
                      <span className="text-xs text-muted-foreground">{cat.questions}</span>
                    </div>
                    <CardDescription className="text-sm">{cat.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">
                        {cat.learned}/{cat.total} learned
                      </span>
                      <span className="font-medium text-theology">{cat.progress}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-theology transition-all"
                        style={{ width: `${cat.progress}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
