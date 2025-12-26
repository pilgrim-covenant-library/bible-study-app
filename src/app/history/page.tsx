'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, ScrollText, ChevronRight, BookOpen, Calendar, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { CHURCH_HISTORY_AUTHORS, type ChurchHistoryAuthor } from '@/data/church-history-authors';

type TraditionFilter = 'all' | 'early_church' | 'reformation' | 'puritan' | 'american_reformed';

const TRADITION_FILTERS: { value: TraditionFilter; label: string }[] = [
  { value: 'all', label: 'All Traditions' },
  { value: 'early_church', label: 'Early Church' },
  { value: 'reformation', label: 'Reformation' },
  { value: 'puritan', label: 'Puritan' },
  { value: 'american_reformed', label: 'American Reformed' },
];

// Tradition badge styling
function getTraditionBadge(tradition: string) {
  const styles: Record<string, string> = {
    early_church: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    reformation: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    puritan: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    american_reformed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  };
  const labels: Record<string, string> = {
    early_church: 'Early Church',
    reformation: 'Reformation',
    puritan: 'Puritan',
    american_reformed: 'American Reformed',
  };
  return {
    className: styles[tradition] || 'bg-gray-100 text-gray-800',
    label: labels[tradition] || tradition,
  };
}

export default function HistoryPage() {
  const [selectedTradition, setSelectedTradition] = useState<TraditionFilter>('all');

  // Filter authors based on selected tradition
  const filteredAuthors = useMemo(() => {
    if (selectedTradition === 'all') return CHURCH_HISTORY_AUTHORS;
    return CHURCH_HISTORY_AUTHORS.filter(author => author.tradition === selectedTradition);
  }, [selectedTradition]);

  // Calculate stats
  const stats = useMemo(() => {
    const totalWorks = CHURCH_HISTORY_AUTHORS.reduce((sum, author) => sum + author.majorWorks.length, 0);
    const totalResources = CHURCH_HISTORY_AUTHORS.reduce(
      (sum, author) => sum + author.majorWorks.reduce((wSum, work) => wSum + work.freeLinks.length, 0),
      0
    );
    return {
      authors: CHURCH_HISTORY_AUTHORS.length,
      works: totalWorks,
      resources: totalResources,
    };
  }, []);

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
            <div className="p-2 rounded-lg bg-history/10">
              <ScrollText className="h-5 w-5 text-history" />
            </div>
            <div>
              <h1 className="font-semibold">Church History</h1>
              <p className="text-sm text-muted-foreground">Reformed Theologians & Their Writings</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <section className="mb-8">
          <Card variant="history">
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-history">{stats.authors}</div>
                  <div className="text-sm text-muted-foreground">Theologians</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-history">{stats.works}</div>
                  <div className="text-sm text-muted-foreground">Major Works</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-history">{stats.resources}</div>
                  <div className="text-sm text-muted-foreground">Free Resources</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tradition Filter */}
        <section className="mb-6">
          <div className="flex flex-wrap gap-2">
            {TRADITION_FILTERS.map((filter) => (
              <Button
                key={filter.value}
                variant={selectedTradition === filter.value ? 'history' : 'outline'}
                size="sm"
                onClick={() => setSelectedTradition(filter.value)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </section>

        {/* Authors Grid */}
        <section>
          <h2 className="text-lg font-semibold mb-4">
            {selectedTradition === 'all' ? 'All Theologians' : `${TRADITION_FILTERS.find(f => f.value === selectedTradition)?.label} Theologians`}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {filteredAuthors.map((author) => {
              const badge = getTraditionBadge(author.tradition);
              return (
                <Link key={author.id} href={`/history/${author.id}`}>
                  <Card className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl mb-1">{author.name}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{author.lifespan}</span>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${badge.className}`}>
                          {badge.label}
                        </span>
                      </div>
                      <CardDescription className="line-clamp-3">
                        {author.biography.overview}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Key works preview */}
                      <div className="mb-4">
                        <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          Notable Works
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {author.majorWorks.slice(0, 3).map((work) => (
                            <span
                              key={work.title}
                              className="text-xs px-2 py-0.5 bg-muted rounded-full"
                            >
                              {work.title}
                            </span>
                          ))}
                          {author.majorWorks.length > 3 && (
                            <span className="text-xs px-2 py-0.5 text-muted-foreground">
                              +{author.majorWorks.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Stats row */}
                      <div className="flex items-center justify-between text-sm border-t pt-3">
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <FileText className="h-3.5 w-3.5" />
                            {author.majorWorks.length} works
                          </span>
                          <span className="flex items-center gap-1">
                            <ExternalLink className="h-3.5 w-3.5" />
                            {author.majorWorks.reduce((sum, w) => sum + w.freeLinks.length, 0)} resources
                          </span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Timeline Overview */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold mb-4">Historical Timeline</h2>
          <Card>
            <CardContent className="p-6">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-history/20" />

                {/* Timeline items */}
                <div className="space-y-6">
                  {CHURCH_HISTORY_AUTHORS.map((author, index) => {
                    const badge = getTraditionBadge(author.tradition);
                    return (
                      <div key={author.id} className="relative pl-10">
                        {/* Timeline dot */}
                        <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-history border-2 border-background" />

                        <div className="flex items-center gap-3">
                          <div>
                            <Link
                              href={`/history/${author.id}`}
                              className="font-medium hover:text-history transition-colors"
                            >
                              {author.name}
                            </Link>
                            <span className="text-sm text-muted-foreground ml-2">
                              ({author.lifespan})
                            </span>
                          </div>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${badge.className}`}>
                            {badge.label}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                          {author.biography.lifeStages[0].description.split('.')[0]}.
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
