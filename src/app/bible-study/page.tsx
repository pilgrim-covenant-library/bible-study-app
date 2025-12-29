'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookMarked, ChevronRight, BookOpen, Scroll, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import {
  BIBLE_BOOK_SUMMARIES,
  CANONICAL_GROUPS,
  type Testament,
  type CanonicalGroup,
  type BibleBookSummary,
} from '@/data/bible-summaries';
import { ALL_CHAPTER_SUMMARIES } from '@/data/bible-chapter-summaries';

type TestamentFilter = 'all' | Testament;

// Group badge styling
function getGroupBadge(group: CanonicalGroup) {
  const styles: Record<CanonicalGroup, { bg: string; label: string }> = {
    law: { bg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300', label: 'Law' },
    history: { bg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300', label: 'History' },
    poetry: { bg: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300', label: 'Poetry' },
    major_prophets: { bg: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300', label: 'Major Prophet' },
    minor_prophets: { bg: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300', label: 'Minor Prophet' },
    gospels: { bg: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300', label: 'Gospel' },
    acts: { bg: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300', label: 'History' },
    pauline: { bg: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300', label: 'Pauline' },
    general: { bg: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300', label: 'General' },
    apocalyptic: { bg: 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300', label: 'Apocalyptic' },
  };
  return styles[group];
}

// Difficulty badge styling
function getDifficultyBadge(difficulty: string) {
  const styles: Record<string, string> = {
    easy: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    hard: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  };
  return styles[difficulty] || 'bg-gray-100 text-gray-800';
}

export default function BibleStudyPage() {
  const [testamentFilter, setTestamentFilter] = useState<TestamentFilter>('all');
  const [selectedGroup, setSelectedGroup] = useState<CanonicalGroup | 'all'>('all');

  // Filter books
  const filteredBooks = useMemo(() => {
    let books = BIBLE_BOOK_SUMMARIES;

    if (testamentFilter !== 'all') {
      books = books.filter(book => book.testament === testamentFilter);
    }

    if (selectedGroup !== 'all') {
      books = books.filter(book => book.canonicalGroup === selectedGroup);
    }

    return books;
  }, [testamentFilter, selectedGroup]);

  // Get available groups based on testament filter
  const availableGroups = useMemo(() => {
    if (testamentFilter === 'all') return CANONICAL_GROUPS;
    return CANONICAL_GROUPS.filter(g => g.testament === testamentFilter);
  }, [testamentFilter]);

  // Calculate stats
  const stats = useMemo(() => {
    const otBooks = BIBLE_BOOK_SUMMARIES.filter(b => b.testament === 'old').length;
    const ntBooks = BIBLE_BOOK_SUMMARIES.filter(b => b.testament === 'new').length;
    const totalChapters = ALL_CHAPTER_SUMMARIES.reduce((sum, book) => sum + book.chapters.length, 0);
    return {
      total: BIBLE_BOOK_SUMMARIES.length,
      ot: otBooks,
      nt: ntBooks,
      chapters: totalChapters,
    };
  }, []);

  // Group books by canonical group for display
  const booksByGroup = useMemo(() => {
    const groups: Record<string, BibleBookSummary[]> = {};
    filteredBooks.forEach(book => {
      if (!groups[book.canonicalGroup]) {
        groups[book.canonicalGroup] = [];
      }
      groups[book.canonicalGroup].push(book);
    });
    return groups;
  }, [filteredBooks]);

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
            <div className="p-2 rounded-lg bg-bible/10">
              <BookMarked className="h-5 w-5 text-bible" />
            </div>
            <div>
              <h1 className="font-semibold">Bible Study</h1>
              <p className="text-sm text-muted-foreground">Book Summaries & Quizzes</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <section className="mb-8">
          <Card variant="bible">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-bible">{stats.total}</div>
                  <div className="text-sm text-muted-foreground">Books</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-bible">{stats.chapters.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Chapter Summaries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-bible">{stats.ot}</div>
                  <div className="text-sm text-muted-foreground">Old Testament</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-bible">{stats.nt}</div>
                  <div className="text-sm text-muted-foreground">New Testament</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Quick Start</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/bible-study/practice">
              <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-bible/10">
                    <FileText className="h-5 w-5 text-bible" />
                  </div>
                  <div>
                    <div className="font-medium">Practice Quiz</div>
                    <div className="text-sm text-muted-foreground">Test your Bible book knowledge</div>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/bible-study/genesis">
              <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Scroll className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-medium">Start with Genesis</div>
                    <div className="text-sm text-muted-foreground">Begin at the beginning</div>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-6">
          <div className="flex flex-col gap-4">
            {/* Testament Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Testament</label>
              <div className="flex gap-2">
                <Button
                  variant={testamentFilter === 'all' ? 'bible' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setTestamentFilter('all');
                    setSelectedGroup('all');
                  }}
                >
                  All
                </Button>
                <Button
                  variant={testamentFilter === 'old' ? 'bible' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setTestamentFilter('old');
                    setSelectedGroup('all');
                  }}
                >
                  Old Testament
                </Button>
                <Button
                  variant={testamentFilter === 'new' ? 'bible' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setTestamentFilter('new');
                    setSelectedGroup('all');
                  }}
                >
                  New Testament
                </Button>
              </div>
            </div>

            {/* Group Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Canonical Group</label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedGroup === 'all' ? 'bible' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedGroup('all')}
                >
                  All Groups
                </Button>
                {availableGroups.map((group) => (
                  <Button
                    key={group.group}
                    variant={selectedGroup === group.group ? 'bible' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedGroup(group.group)}
                  >
                    {group.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Books List */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">
              {selectedGroup === 'all'
                ? testamentFilter === 'all'
                  ? 'All Books'
                  : testamentFilter === 'old'
                  ? 'Old Testament'
                  : 'New Testament'
                : CANONICAL_GROUPS.find(g => g.group === selectedGroup)?.label}
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Grouped Display */}
          {selectedGroup === 'all' ? (
            <div className="space-y-8">
              {availableGroups.map((groupInfo) => {
                const books = booksByGroup[groupInfo.group];
                if (!books || books.length === 0) return null;

                return (
                  <div key={groupInfo.group}>
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-base font-medium">{groupInfo.label}</h3>
                      <span className="text-xs text-muted-foreground">
                        ({books.length} book{books.length !== 1 ? 's' : ''})
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}

          {filteredBooks.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No books found for the selected filters.</p>
              <p className="text-sm mt-2">More books coming soon!</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

// Book Card Component
function BookCard({ book }: { book: BibleBookSummary }) {
  const groupBadge = getGroupBadge(book.canonicalGroup);

  return (
    <Link href={`/bible-study/${book.id}`}>
      <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5 h-full">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h4 className="font-medium">{book.name}</h4>
              <p className="text-xs text-muted-foreground">{book.abbreviation}</p>
            </div>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${groupBadge.bg}`}>
              {groupBadge.label}
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {book.overview.split('.')[0]}.
          </p>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">{book.author}</span>
            <span className={`px-1.5 py-0.5 rounded ${getDifficultyBadge(book.difficulty)}`}>
              {book.difficulty}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
