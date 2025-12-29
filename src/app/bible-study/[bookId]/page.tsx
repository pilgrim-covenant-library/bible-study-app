'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  BookMarked,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Cross,
  Lightbulb,
  Quote,
  Users,
  Calendar,
  FileText,
  HelpCircle,
  List,
  Check,
  Bookmark,
  Link2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import {
  getBookById,
  getNextBook,
  getPreviousBook,
  type CanonicalGroup,
} from '@/data/bible-summaries';
import { getChaptersByBook, ALL_CHAPTER_SUMMARIES, type ChapterSummary } from '@/data/bible-chapter-summaries';
import { useReadingProgressStore } from '@/stores/readingProgressStore';
import { useBookmarksStore } from '@/stores/bookmarksStore';
import { BIBLE_BOOK_SUMMARIES } from '@/data/bible-summaries';

type TabId = 'overview' | 'outline' | 'chapters' | 'themes' | 'christ' | 'study';

const TABS: { id: TabId; label: string; icon: typeof BookOpen }[] = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'outline', label: 'Outline', icon: FileText },
  { id: 'chapters', label: 'Chapters', icon: List },
  { id: 'themes', label: 'Themes', icon: Lightbulb },
  { id: 'christ', label: 'Christ', icon: Cross },
  { id: 'study', label: 'Study', icon: HelpCircle },
];

// Helper to get book name
function getBookName(bookId: string): string {
  const book = BIBLE_BOOK_SUMMARIES.find(b => b.id === bookId);
  return book?.name || bookId;
}

// Interface for related chapter results
interface RelatedChapter {
  bookId: string;
  bookName: string;
  chapter: number;
  title: string;
  matchingThemes: string[];
  score: number;
}

// Normalize a theme for matching (lowercase, remove punctuation)
function normalizeTheme(theme: string): string {
  return theme.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
}

// Extract significant words from themes for matching
function extractThemeWords(themes: string[]): Set<string> {
  const words = new Set<string>();
  const stopWords = new Set(['the', 'and', 'of', 'in', 'to', 'a', 'as', 'for', 'with', 'on', 'by', 'from', 'at', 'is', 'an']);

  themes.forEach(theme => {
    normalizeTheme(theme).split(/\s+/).forEach(word => {
      if (word.length > 2 && !stopWords.has(word)) {
        words.add(word);
      }
    });
  });

  return words;
}

// Find related chapters based on theme similarity
function findRelatedChapters(
  currentBookId: string,
  currentChapter: number,
  currentThemes: string[],
  limit: number = 5
): RelatedChapter[] {
  if (currentThemes.length === 0) return [];

  const currentWords = extractThemeWords(currentThemes);
  if (currentWords.size === 0) return [];

  const candidates: RelatedChapter[] = [];

  // Scan all chapters for theme matches
  for (const book of ALL_CHAPTER_SUMMARIES) {
    for (const chapter of book.chapters) {
      // Skip the current chapter
      if (book.bookId === currentBookId && chapter.chapter === currentChapter) continue;

      const chapterWords = extractThemeWords(chapter.keyThemes);
      const matchingWords: string[] = [];

      // Find matching theme words
      currentWords.forEach(word => {
        if (chapterWords.has(word)) {
          matchingWords.push(word);
        }
      });

      // Only include chapters with at least 2 matching theme words
      if (matchingWords.length >= 2) {
        // Find the original themes that matched
        const matchingThemes = chapter.keyThemes.filter(theme => {
          const normalized = normalizeTheme(theme);
          return matchingWords.some(word => normalized.includes(word));
        });

        candidates.push({
          bookId: book.bookId,
          bookName: book.bookName,
          chapter: chapter.chapter,
          title: chapter.title,
          matchingThemes: matchingThemes.slice(0, 3),
          score: matchingWords.length,
        });
      }
    }
  }

  // Sort by score (most matches first) and take top results
  // Also prioritize diversity: try to show chapters from different books
  candidates.sort((a, b) => {
    // First sort by score
    if (b.score !== a.score) return b.score - a.score;
    // Then by testament diversity (mix OT and NT)
    return 0;
  });

  // Select diverse results (limit per book to ensure variety)
  const selected: RelatedChapter[] = [];
  const bookCounts = new Map<string, number>();
  const maxPerBook = 2;

  for (const candidate of candidates) {
    const count = bookCounts.get(candidate.bookId) || 0;
    if (count < maxPerBook) {
      selected.push(candidate);
      bookCounts.set(candidate.bookId, count + 1);
      if (selected.length >= limit) break;
    }
  }

  return selected;
}

// Chapter card component with expandable content
function ChapterCard({ chapter, bookId, isExpanded, onToggle }: {
  chapter: ChapterSummary;
  bookId: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const { isChapterRead, markChapterRead, markChapterUnread } = useReadingProgressStore();
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarksStore();
  const isRead = isChapterRead(bookId, chapter.chapter);
  const bookmarked = isBookmarked(bookId, chapter.chapter);

  // Compute related chapters only when expanded (memoized for performance)
  const relatedChapters = useMemo(() => {
    if (!isExpanded) return [];
    return findRelatedChapters(bookId, chapter.chapter, chapter.keyThemes, 5);
  }, [isExpanded, bookId, chapter.chapter, chapter.keyThemes]);

  const handleReadToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isRead) {
      markChapterUnread(bookId, chapter.chapter);
    } else {
      markChapterRead(bookId, chapter.chapter);
    }
  };

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarked) {
      removeBookmark(bookId, chapter.chapter);
    } else {
      addBookmark({
        bookId,
        chapter: chapter.chapter,
        bookName: getBookName(bookId),
        chapterTitle: chapter.title,
      });
    }
  };

  return (
    <Card
      id={`chapter-${chapter.chapter}`}
      className={`overflow-hidden ${isRead ? 'border-green-500/30 bg-green-50/30 dark:bg-green-900/10' : ''}`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <CardHeader className="pb-2 cursor-pointer hover:bg-muted/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handleReadToggle}
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${
                  isRead
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-bible/10 text-bible hover:bg-bible/20'
                }`}
                title={isRead ? 'Mark as unread' : 'Mark as read'}
              >
                {isRead ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="font-semibold text-sm">{chapter.chapter}</span>
                )}
              </button>
              <CardTitle className={`text-base ${isRead ? 'text-muted-foreground' : ''}`}>
                {chapter.title}
              </CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleBookmarkToggle}
                className={`p-1.5 rounded-full transition-all ${
                  bookmarked
                    ? 'text-amber-500 hover:text-amber-600'
                    : 'text-muted-foreground hover:text-amber-500'
                }`}
                title={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
              >
                <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} />
              </button>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          </div>
        </CardHeader>
      </button>
      {isExpanded && (
        <CardContent className="pt-0 pb-4 space-y-4">
          {/* Summary */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {chapter.summary}
          </p>

          {/* Key Themes */}
          {chapter.keyThemes.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-bible" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Key Themes</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {chapter.keyThemes.map((theme, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-muted rounded-full"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Christ Connection */}
          {chapter.christConnection && (
            <div className="p-3 bg-bible/5 rounded-lg border border-bible/10">
              <div className="flex items-center gap-2 mb-2">
                <Cross className="h-4 w-4 text-bible" />
                <span className="text-xs font-medium text-bible uppercase tracking-wider">Christ Connection</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {chapter.christConnection}
              </p>
            </div>
          )}

          {/* Related Chapters */}
          {relatedChapters.length > 0 && (
            <div className="pt-2 border-t">
              <div className="flex items-center gap-2 mb-3">
                <Link2 className="h-4 w-4 text-purple-500" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Related Chapters</span>
              </div>
              <div className="grid gap-2">
                {relatedChapters.map((related) => (
                  <Link
                    key={`${related.bookId}-${related.chapter}`}
                    href={`/bible-study/${related.bookId}#chapter-${related.chapter}`}
                    className="group flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold text-xs shrink-0">
                      {related.chapter}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{related.bookName}</span>
                        <ChevronRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm font-medium truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {related.title}
                      </div>
                      {related.matchingThemes.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {related.matchingThemes.map((theme, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-1.5 py-0.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full"
                            >
                              {theme}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}

// Chapters Tab Content with progress tracking
function ChaptersTabContent({
  bookId,
  chapterSummaries,
  expandedChapters,
  toggleChapter,
  expandAll,
  collapseAll,
  expandAndScrollTo,
}: {
  bookId: string;
  chapterSummaries: ChapterSummary[];
  expandedChapters: Set<number>;
  toggleChapter: (chapter: number) => void;
  expandAll: () => void;
  collapseAll: () => void;
  expandAndScrollTo: (chapter: number) => void;
}) {
  const { getBookProgress, markChapterRead, markChapterUnread, getNextUnreadChapter } = useReadingProgressStore();
  const progress = getBookProgress(bookId, chapterSummaries.length);
  const nextUnread = getNextUnreadChapter(bookId, chapterSummaries.length);

  const markAllRead = () => {
    chapterSummaries.forEach(ch => markChapterRead(bookId, ch.chapter));
  };

  const markAllUnread = () => {
    chapterSummaries.forEach(ch => markChapterUnread(bookId, ch.chapter));
  };

  const handleContinueReading = () => {
    if (nextUnread) {
      expandAndScrollTo(nextUnread);
    }
  };

  return (
    <div className="space-y-4">
      {/* Progress Card */}
      <Card className="bg-gradient-to-r from-bible/5 to-green-500/5 border-bible/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-bible" />
              <span className="font-medium">Reading Progress</span>
            </div>
            <span className="text-sm font-semibold text-bible">
              {progress.read} / {progress.total} chapters
            </span>
          </div>
          <div className="relative h-3 bg-muted rounded-full overflow-hidden mb-3">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-bible to-green-500 rounded-full transition-all duration-500"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {progress.percentage === 100
                ? 'Complete!'
                : progress.percentage > 0
                ? `${progress.percentage}% complete`
                : 'Not started'}
            </span>
            <div className="flex gap-2">
              {progress.read < progress.total && (
                <Button variant="outline" size="sm" onClick={markAllRead}>
                  Mark All Read
                </Button>
              )}
              {progress.read > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllUnread}>
                  Reset
                </Button>
              )}
            </div>
          </div>

          {/* Continue to Next Unread */}
          {nextUnread && progress.read > 0 && progress.read < progress.total && (
            <div className="mt-4 pt-4 border-t border-bible/10">
              <Button
                variant="bible"
                className="w-full gap-2"
                onClick={handleContinueReading}
              >
                <ChevronRight className="h-4 w-4" />
                Continue to Chapter {nextUnread}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">
          Chapter Summaries
          <span className="ml-2 text-sm font-normal text-muted-foreground">
            ({chapterSummaries.length} chapters)
          </span>
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={expandAll}
            disabled={expandedChapters.size === chapterSummaries.length}
          >
            Expand All
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={collapseAll}
            disabled={expandedChapters.size === 0}
          >
            Collapse All
          </Button>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Reformed commentary insights from Matthew Henry, John Calvin, Matthew Poole, and Jean Ostervald.
        Click the chapter number to mark as read. Each summary highlights key themes and shows how the chapter points to Christ.
      </p>
      <div className="space-y-3">
        {chapterSummaries.map((chapter) => (
          <ChapterCard
            key={chapter.chapter}
            chapter={chapter}
            bookId={bookId}
            isExpanded={expandedChapters.has(chapter.chapter)}
            onToggle={() => toggleChapter(chapter.chapter)}
          />
        ))}
      </div>
    </div>
  );
}

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

// Connection type badge styling
function getConnectionBadge(type: string) {
  const styles: Record<string, { bg: string; label: string }> = {
    prophecy: { bg: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300', label: 'Prophecy' },
    type: { bg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300', label: 'Type' },
    theme: { bg: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300', label: 'Theme' },
    direct: { bg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300', label: 'Direct' },
  };
  return styles[type] || { bg: 'bg-gray-100 text-gray-800', label: type };
}

export default function BookDetailPage() {
  const params = useParams();
  const bookId = params.bookId as string;
  const book = getBookById(bookId);

  const chapterSummaries = getChaptersByBook(bookId);

  // Parse initial chapter from URL hash (lazy initialization avoids setState in effect)
  const getInitialChapterFromHash = (): number | null => {
    if (typeof window === 'undefined') return null;
    const hash = window.location.hash;
    if (hash && hash.startsWith('#chapter-')) {
      const chapterNum = parseInt(hash.replace('#chapter-', ''), 10);
      if (!isNaN(chapterNum) && chapterSummaries.some(c => c.chapter === chapterNum)) {
        return chapterNum;
      }
    }
    return null;
  };

  const initialChapter = getInitialChapterFromHash();
  const [activeTab, setActiveTab] = useState<TabId>(initialChapter !== null ? 'chapters' : 'overview');
  const [expandedChapters, setExpandedChapters] = useState<Set<number>>(
    initialChapter !== null ? new Set([initialChapter]) : new Set()
  );
  const hasScrolled = useRef(false);

  // Handle scroll-to-chapter on initial load (only the scroll side effect, not state)
  useEffect(() => {
    if (hasScrolled.current) return;

    const hash = window.location.hash;
    if (hash && hash.startsWith('#chapter-')) {
      const chapterNum = parseInt(hash.replace('#chapter-', ''), 10);
      if (!isNaN(chapterNum) && chapterSummaries.some(c => c.chapter === chapterNum)) {
        hasScrolled.current = true;

        // Scroll to the chapter after a short delay to allow rendering
        setTimeout(() => {
          const element = document.getElementById(`chapter-${chapterNum}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add a highlight effect
            element.classList.add('ring-2', 'ring-bible', 'ring-offset-2');
            setTimeout(() => {
              element.classList.remove('ring-2', 'ring-bible', 'ring-offset-2');
            }, 2000);
          }
        }, 100);
      }
    }
  }, [chapterSummaries]);

  if (!book) {
    notFound();
  }

  // Computed values - safe because book is defined after the notFound() check
  const prevBook = getPreviousBook(bookId);
  const nextBook = getNextBook(bookId);
  const groupBadge = getGroupBadge(book.canonicalGroup);

  const toggleChapter = (chapter: number) => {
    setExpandedChapters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(chapter)) {
        newSet.delete(chapter);
      } else {
        newSet.add(chapter);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setExpandedChapters(new Set(chapterSummaries.map(c => c.chapter)));
  };

  const collapseAll = () => {
    setExpandedChapters(new Set());
  };

  const expandAndScrollTo = (chapter: number) => {
    // Expand the chapter if not already expanded
    setExpandedChapters(prev => {
      const newSet = new Set(prev);
      newSet.add(chapter);
      return newSet;
    });

    // Scroll to the chapter after a short delay
    setTimeout(() => {
      const element = document.getElementById(`chapter-${chapter}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add a highlight effect
        element.classList.add('ring-2', 'ring-bible', 'ring-offset-2');
        setTimeout(() => {
          element.classList.remove('ring-2', 'ring-bible', 'ring-offset-2');
        }, 2000);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/bible-study">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-bible/10">
                <BookMarked className="h-5 w-5 text-bible" />
              </div>
              <div>
                <h1 className="font-semibold">{book.name}</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{book.testament === 'old' ? 'Old Testament' : 'New Testament'}</span>
                  <span>•</span>
                  <span>{book.abbreviation}</span>
                </div>
              </div>
            </div>
            {groupBadge && (
              <span className={`ml-auto text-xs px-2 py-1 rounded-full font-medium ${groupBadge.bg}`}>
                {groupBadge.label}
              </span>
            )}
          </div>

          {/* Tabs */}
          <div className="flex gap-1 overflow-x-auto pb-1">
            {TABS.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'bible' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-1.5"
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Metadata Card */}
            <Card>
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Author</div>
                      <div className="font-medium">{book.author}</div>
                      {book.authorNotes && (
                        <div className="text-xs text-muted-foreground">{book.authorNotes}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Date Written</div>
                      <div className="font-medium">{book.dateWritten}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Original Audience</div>
                      <div className="font-medium">{book.originalAudience}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Genre</div>
                      <div className="flex flex-wrap gap-1">
                        {book.literaryGenre.map((genre, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-muted rounded-full">
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{book.overview}</p>
              </CardContent>
            </Card>

            {/* Purpose */}
            <Card>
              <CardHeader>
                <CardTitle>Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{book.purpose}</p>
              </CardContent>
            </Card>

            {/* Key Verses */}
            {book.keyVerses.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Quote className="h-5 w-5 text-bible" />
                    Key Verses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {book.keyVerses.map((verse, idx) => (
                    <div key={idx} className="p-4 bg-bible/5 rounded-lg">
                      <blockquote className="italic text-foreground mb-2">
                        &ldquo;{verse.text}&rdquo;
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-bible">{verse.reference}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{verse.significance}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Outline Tab */}
        {activeTab === 'outline' && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-4">Book Outline</h2>
            {book.outline.map((section, idx) => (
              <Card key={idx}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{section.section}</CardTitle>
                    <span className="text-sm text-muted-foreground">{section.chapters}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{section.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Chapters Tab */}
        {activeTab === 'chapters' && (
          <ChaptersTabContent
            bookId={bookId}
            chapterSummaries={chapterSummaries}
            expandedChapters={expandedChapters}
            toggleChapter={toggleChapter}
            expandAll={expandAll}
            collapseAll={collapseAll}
            expandAndScrollTo={expandAndScrollTo}
          />
        )}

        {/* Themes Tab */}
        {activeTab === 'themes' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold mb-4">Key Themes</h2>
            {book.keyThemes.map((theme, idx) => (
              <Card key={idx}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-bible" />
                    {theme.theme}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{theme.description}</p>
                  {theme.keyPassages.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-xs text-muted-foreground mr-1">Key passages:</span>
                      {theme.keyPassages.map((passage, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-xs px-2 py-0.5 bg-bible/10 text-bible rounded-full"
                        >
                          {passage}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Christ Tab */}
        {activeTab === 'christ' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold mb-4">Christ in {book.name}</h2>
            {book.christConnection.map((connection, idx) => {
              const badge = getConnectionBadge(connection.type);
              return (
                <Card key={idx}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Cross className="h-4 w-4 text-bible" />
                      <CardTitle className="text-base flex-1">Christ Connection</CardTitle>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badge.bg}`}>
                        {badge.label}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{connection.description}</p>
                    {connection.passages.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-xs text-muted-foreground mr-1">See:</span>
                        {connection.passages.map((passage, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-xs px-2 py-0.5 bg-bible/10 text-bible rounded-full"
                          >
                            {passage}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Study Tab */}
        {activeTab === 'study' && (
          <div className="space-y-6">
            {/* Practical Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-bible" />
                  Practical Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {book.practicalApplications.map((app, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-bible font-bold">{idx + 1}.</span>
                      <span className="text-muted-foreground">{app}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Study Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-bible" />
                  Study Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {book.studyQuestions.map((question, idx) => (
                    <li key={idx} className="p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">{idx + 1}. {question}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Key Characters (if available) */}
            {book.keyCharacters && book.keyCharacters.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-bible" />
                    Key Characters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {book.keyCharacters.map((char, idx) => (
                      <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium">{char.name}</div>
                        <div className="text-sm text-muted-foreground">{char.role}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Key Events (if available) */}
            {book.keyEvents && book.keyEvents.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Key Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {book.keyEvents.map((event, idx) => (
                      <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{event.event}</span>
                          <span className="text-xs text-bible">{event.reference}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{event.significance}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Book Navigation */}
        <section className="mt-12 pt-8 border-t">
          <div className="flex justify-between items-center">
            {prevBook ? (
              <Link href={`/bible-study/${prevBook.id}`}>
                <Button variant="outline" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Previous</div>
                    <div className="font-medium">{prevBook.name}</div>
                  </div>
                </Button>
              </Link>
            ) : (
              <div />
            )}

            <Link href="/bible-study">
              <Button variant="ghost" size="sm">
                All Books
              </Button>
            </Link>

            {nextBook ? (
              <Link href={`/bible-study/${nextBook.id}`}>
                <Button variant="outline" className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Next</div>
                    <div className="font-medium">{nextBook.name}</div>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
