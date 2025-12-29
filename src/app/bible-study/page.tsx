'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookMarked, ChevronRight, BookOpen, Scroll, FileText, Search, Calendar, Bookmark, X, Clock, TrendingUp, Flame, Trophy, Target, Cross, RefreshCw, Sparkles, Shuffle, Lightbulb } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import {
  BIBLE_BOOK_SUMMARIES,
  CANONICAL_GROUPS,
  type Testament,
  type CanonicalGroup,
  type BibleBookSummary,
} from '@/data/bible-summaries';
import { ALL_CHAPTER_SUMMARIES, getChaptersByBook } from '@/data/bible-chapter-summaries';
import { useBookmarksStore } from '@/stores/bookmarksStore';
import { useReadingProgressStore } from '@/stores/readingProgressStore';

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

// Bookmarks Section Component
function BookmarksSection() {
  const { bookmarks, removeBookmark, getTotalBookmarks } = useBookmarksStore();
  const recentBookmarks = bookmarks.slice(0, 6); // Show up to 6 most recent
  const totalBookmarks = getTotalBookmarks();

  if (totalBookmarks === 0) {
    return null; // Don't show section if no bookmarks
  }

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bookmark className="h-5 w-5 text-amber-500" />
          <h2 className="text-lg font-semibold">Saved Chapters</h2>
          <span className="text-sm text-muted-foreground">({totalBookmarks})</span>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {recentBookmarks.map((bookmark) => (
          <Card key={`${bookmark.bookId}-${bookmark.chapter}`} className="group relative hover:shadow-md transition-all hover:-translate-y-0.5">
            <Link href={`/bible-study/${bookmark.bookId}`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold text-sm shrink-0">
                    {bookmark.chapter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground">{bookmark.bookName}</div>
                    <div className="font-medium text-sm truncate">{bookmark.chapterTitle}</div>
                  </div>
                </div>
              </CardContent>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeBookmark(bookmark.bookId, bookmark.chapter);
              }}
              className="absolute top-2 right-2 p-1.5 rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted"
              title="Remove bookmark"
            >
              <X className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          </Card>
        ))}
      </div>
      {totalBookmarks > 6 && (
        <div className="mt-3 text-center">
          <span className="text-sm text-muted-foreground">
            +{totalBookmarks - 6} more saved chapters
          </span>
        </div>
      )}
    </section>
  );
}

// Helper to get book name from bookId
function getBookNameFromId(bookId: string): string {
  const book = BIBLE_BOOK_SUMMARIES.find(b => b.id === bookId);
  return book?.name || bookId;
}

// Helper to get chapter title from bookId and chapter number
function getChapterTitle(bookId: string, chapter: number): string {
  const chapters = getChaptersByBook(bookId);
  const chapterData = chapters.find(c => c.chapter === chapter);
  return chapterData?.title || `Chapter ${chapter}`;
}

// Format relative time (e.g., "2 hours ago", "Yesterday")
function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  return date.toLocaleDateString();
}

// Reading Streak Section Component
function ReadingStreakSection() {
  const { getStreakStats, getTotalChaptersRead } = useReadingProgressStore();
  const streakStats = getStreakStats();
  const totalRead = getTotalChaptersRead();

  // Don't show if user hasn't started reading
  if (totalRead === 0) {
    return null;
  }

  // Determine streak status and messaging
  const getStreakMessage = () => {
    if (streakStats.readToday && streakStats.currentStreak >= 7) {
      return "Amazing dedication! Keep it up!";
    } else if (streakStats.readToday && streakStats.currentStreak >= 3) {
      return "You're building a great habit!";
    } else if (streakStats.readToday) {
      return "Great job reading today!";
    } else if (streakStats.currentStreak > 0) {
      return "Read today to keep your streak!";
    } else {
      return "Start a new streak today!";
    }
  };

  // Get flame color based on streak
  const getFlameColor = () => {
    if (streakStats.currentStreak >= 30) return 'text-purple-500';
    if (streakStats.currentStreak >= 14) return 'text-red-500';
    if (streakStats.currentStreak >= 7) return 'text-orange-500';
    if (streakStats.currentStreak >= 3) return 'text-amber-500';
    return 'text-gray-400';
  };

  return (
    <section className="mb-8">
      <Card className="bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-yellow-500/5 border-orange-500/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            {/* Streak Info */}
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full bg-background/80 ${streakStats.readToday ? 'ring-2 ring-orange-500/50' : ''}`}>
                <Flame className={`h-8 w-8 ${getFlameColor()} ${streakStats.currentStreak > 0 ? 'animate-pulse' : ''}`} />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">
                    {streakStats.currentStreak}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    day{streakStats.currentStreak !== 1 ? 's' : ''} streak
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{getStreakMessage()}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden sm:flex items-center gap-6">
              <div className="text-center">
                <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                  <Trophy className="h-4 w-4" />
                  <span className="text-xl font-bold">{streakStats.longestStreak}</span>
                </div>
                <span className="text-xs text-muted-foreground">Best Streak</span>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                  <Target className="h-4 w-4" />
                  <span className="text-xl font-bold">{streakStats.totalDaysRead}</span>
                </div>
                <span className="text-xs text-muted-foreground">Total Days</span>
              </div>
            </div>
          </div>

          {/* Mobile stats row */}
          <div className="flex sm:hidden items-center justify-around mt-4 pt-4 border-t border-border/50">
            <div className="text-center">
              <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                <Trophy className="h-4 w-4" />
                <span className="text-lg font-bold">{streakStats.longestStreak}</span>
              </div>
              <span className="text-xs text-muted-foreground">Best Streak</span>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                <Target className="h-4 w-4" />
                <span className="text-lg font-bold">{streakStats.totalDaysRead}</span>
              </div>
              <span className="text-xs text-muted-foreground">Total Days</span>
            </div>
            <div className="text-center">
              <div className={`flex items-center gap-1.5 ${streakStats.readToday ? 'text-green-500' : 'text-muted-foreground'}`}>
                <div className={`w-3 h-3 rounded-full ${streakStats.readToday ? 'bg-green-500' : 'bg-muted'}`} />
                <span className="text-sm font-medium">{streakStats.readToday ? 'Done' : 'Pending'}</span>
              </div>
              <span className="text-xs text-muted-foreground">Today</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

// Reading Activity Calendar Component - shows a heatmap of reading activity
function ReadingActivityCalendar() {
  const { getReadingActivityByDate, getTotalChaptersRead } = useReadingProgressStore();
  const totalRead = getTotalChaptersRead();

  // Don't show if user hasn't started reading
  if (totalRead === 0) {
    return null;
  }

  // Get last 35 days (5 weeks) of activity
  const activity = getReadingActivityByDate(35);
  const activityEntries = Object.entries(activity);

  // Get intensity level (0-4) based on chapters read
  const getIntensity = (chapters: number): number => {
    if (chapters === 0) return 0;
    if (chapters === 1) return 1;
    if (chapters <= 3) return 2;
    if (chapters <= 5) return 3;
    return 4;
  };

  // Get color class based on intensity
  const getColorClass = (intensity: number): string => {
    const colors = [
      'bg-muted', // 0 - no activity
      'bg-green-200 dark:bg-green-900', // 1 - light
      'bg-green-400 dark:bg-green-700', // 2 - medium
      'bg-green-500 dark:bg-green-600', // 3 - good
      'bg-green-600 dark:bg-green-500', // 4 - great
    ];
    return colors[intensity];
  };

  // Format date for tooltip
  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  // Get day of week label
  const getDayLabel = (index: number): string => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return days[index];
  };

  // Group by weeks (Sunday to Saturday)
  const weeks: { date: string; chapters: number }[][] = [];
  let currentWeek: { date: string; chapters: number }[] = [];

  activityEntries.forEach(([date, chapters]) => {
    const dayOfWeek = new Date(date).getDay();

    // Start new week on Sunday (day 0)
    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentWeek.push({ date, chapters });
  });

  // Push the last week
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  // Calculate stats for this period
  const totalDaysWithReading = activityEntries.filter(([, count]) => count > 0).length;
  const totalChaptersInPeriod = activityEntries.reduce((sum, [, count]) => sum + count, 0);

  return (
    <section className="mb-8">
      <Card className="bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 border-green-500/20">
        <CardContent className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-500" />
              <h2 className="text-lg font-semibold">Reading Activity</h2>
            </div>
            <div className="text-sm text-muted-foreground">
              Last 5 weeks
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="flex gap-1 mb-4">
            {/* Day labels */}
            <div className="flex flex-col gap-1 mr-1">
              {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                <div key={day} className="h-4 w-4 text-[10px] text-muted-foreground flex items-center justify-center">
                  {getDayLabel(day)}
                </div>
              ))}
            </div>

            {/* Weeks */}
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {/* Pad the first week if it doesn't start on Sunday */}
                {weekIndex === 0 && week.length < 7 && (
                  Array(7 - week.length).fill(null).map((_, i) => (
                    <div key={`pad-${i}`} className="h-4 w-4" />
                  ))
                )}
                {week.map(({ date, chapters }) => {
                  const intensity = getIntensity(chapters);
                  return (
                    <div
                      key={date}
                      className={`h-4 w-4 rounded-sm ${getColorClass(intensity)} transition-all hover:ring-2 hover:ring-green-400 cursor-default`}
                      title={`${formatDate(date)}: ${chapters} chapter${chapters !== 1 ? 's' : ''} read`}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Legend and Stats */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Less</span>
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((intensity) => (
                  <div
                    key={intensity}
                    className={`h-3 w-3 rounded-sm ${getColorClass(intensity)}`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">More</span>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>{totalDaysWithReading} active days</span>
              <span>{totalChaptersInPeriod} chapters</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

// Continue Reading Section Component
function ContinueReadingSection() {
  const { getRecentReadings, getTotalChaptersRead } = useReadingProgressStore();
  const recentReadings = getRecentReadings(4); // Show up to 4 recent readings
  const totalRead = getTotalChaptersRead();

  if (totalRead === 0) {
    return null; // Don't show section if no reading history
  }

  // Calculate overall progress
  const totalChapters = 1189; // Total chapters in the Bible
  const progressPercentage = Math.round((totalRead / totalChapters) * 100);

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-green-500" />
          <h2 className="text-lg font-semibold">Continue Reading</h2>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TrendingUp className="h-4 w-4" />
          <span>{totalRead} of {totalChapters} chapters read ({progressPercentage}%)</span>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="mb-4">
        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Recent Readings */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {recentReadings.map((reading) => (
          <Card key={`${reading.bookId}-${reading.chapter}`} className="group hover:shadow-md transition-all hover:-translate-y-0.5 border-green-500/20">
            <Link href={`/bible-study/${reading.bookId}`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 font-semibold text-sm shrink-0">
                    {reading.chapter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground">{getBookNameFromId(reading.bookId)}</div>
                    <div className="font-medium text-sm truncate">{getChapterTitle(reading.bookId, reading.chapter)}</div>
                    <div className="text-xs text-muted-foreground mt-1">{formatRelativeTime(reading.readAt)}</div>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}

// Daily Devotional Component - shows a Christ Connection meditation
function DailyDevotional() {
  const [refreshKey, setRefreshKey] = useState(0);

  // Get today's devotional based on date (deterministic)
  const devotional = useMemo(() => {
    // Build list of all chapters with Christ connections
    const chaptersWithChrist: {
      bookId: string;
      bookName: string;
      chapter: number;
      title: string;
      christConnection: string;
      summary: string;
    }[] = [];

    for (const book of ALL_CHAPTER_SUMMARIES) {
      for (const chapter of book.chapters) {
        if (chapter.christConnection) {
          chaptersWithChrist.push({
            bookId: book.bookId,
            bookName: book.bookName,
            chapter: chapter.chapter,
            title: chapter.title,
            christConnection: chapter.christConnection,
            summary: chapter.summary,
          });
        }
      }
    }

    // Use date + refreshKey to select a devotional
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
    );
    const index = (dayOfYear + refreshKey) % chaptersWithChrist.length;

    return chaptersWithChrist[index];
  }, [refreshKey]);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  if (!devotional) return null;

  return (
    <section className="mb-8">
      <Card className="bg-gradient-to-br from-purple-500/5 via-violet-500/5 to-indigo-500/5 border-purple-500/20 overflow-hidden">
        <CardContent className="p-0">
          {/* Header */}
          <div className="px-4 pt-4 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-purple-500/10">
                <Cross className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  Daily Devotional
                  <Sparkles className="h-4 w-4 text-amber-500" />
                </h2>
                <p className="text-xs text-muted-foreground">Christ Connection</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRefresh}
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              title="Get another devotional"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="px-4 pb-4">
            {/* Chapter Reference */}
            <div className="flex items-center gap-2 mb-3">
              <Link
                href={`/bible-study/${devotional.bookId}`}
                className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
              >
                {devotional.bookName} {devotional.chapter}
              </Link>
              <span className="text-muted-foreground">—</span>
              <span className="text-sm text-muted-foreground italic">{devotional.title}</span>
            </div>

            {/* Christ Connection */}
            <blockquote className="pl-4 border-l-2 border-purple-500/50 text-sm text-foreground leading-relaxed">
              {devotional.christConnection}
            </blockquote>

            {/* Summary Preview */}
            <p className="mt-3 text-xs text-muted-foreground line-clamp-2">
              {devotional.summary}
            </p>

            {/* Action */}
            <div className="mt-4">
              <Link href={`/bible-study/${devotional.bookId}`}>
                <Button variant="outline" size="sm" className="gap-2 text-purple-600 dark:text-purple-400 border-purple-500/30 hover:bg-purple-500/10">
                  <BookOpen className="h-4 w-4" />
                  Read Full Chapter
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

// Random Chapter Component
function RandomChapterCard() {
  const router = useRouter();

  const goToRandomChapter = () => {
    // Build list of all chapters with their book info
    const allChapters: { bookId: string; chapter: number }[] = [];
    for (const book of ALL_CHAPTER_SUMMARIES) {
      for (const chapter of book.chapters) {
        allChapters.push({ bookId: book.bookId, chapter: chapter.chapter });
      }
    }

    // Select a random chapter
    const randomIndex = Math.floor(Math.random() * allChapters.length);
    const selected = allChapters[randomIndex];

    // Navigate to the book page (with chapter hash for potential future scrolling)
    router.push(`/bible-study/${selected.bookId}#chapter-${selected.chapter}`);
  };

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5"
      onClick={goToRandomChapter}
    >
      <CardContent className="p-4 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-emerald-500/10">
          <Shuffle className="h-5 w-5 text-emerald-500" />
        </div>
        <div>
          <div className="font-medium">Random Chapter</div>
          <div className="text-sm text-muted-foreground">Discover something new</div>
        </div>
        <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
      </CardContent>
    </Card>
  );
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

        {/* Reading Streak */}
        <ReadingStreakSection />

        {/* Reading Activity Calendar */}
        <ReadingActivityCalendar />

        {/* Daily Devotional */}
        <DailyDevotional />

        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Quick Start</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/bible-study/search">
              <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Search className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="font-medium">Search Scripture</div>
                    <div className="text-sm text-muted-foreground">Find themes & topics</div>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/bible-study/practice">
              <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-bible/10">
                    <FileText className="h-5 w-5 text-bible" />
                  </div>
                  <div>
                    <div className="font-medium">Practice Quiz</div>
                    <div className="text-sm text-muted-foreground">Test your Bible knowledge</div>
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
            <Link href="/bible-study/plans">
              <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="font-medium">Reading Plans</div>
                    <div className="text-sm text-muted-foreground">Structured Bible reading</div>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/bible-study/themes">
              <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Lightbulb className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-medium">Theme Explorer</div>
                    <div className="text-sm text-muted-foreground">Discover themes across Scripture</div>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
            <RandomChapterCard />
          </div>
        </section>

        {/* Continue Reading Section */}
        <ContinueReadingSection />

        {/* Bookmarks Section */}
        <BookmarksSection />

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
  const chapterCount = getChaptersByBook(book.id).length;

  return (
    <Link href={`/bible-study/${book.id}`}>
      <Card className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5 h-full">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h4 className="font-medium">{book.name}</h4>
              <p className="text-xs text-muted-foreground">
                {book.abbreviation} • {chapterCount} chapter{chapterCount !== 1 ? 's' : ''}
              </p>
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
