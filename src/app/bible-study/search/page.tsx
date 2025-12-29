'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Search,
  BookMarked,
  Lightbulb,
  Cross,
  BookOpen,
  ChevronDown,
  ChevronUp,
  X,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { ALL_CHAPTER_SUMMARIES, type ChapterSummary } from '@/data/bible-chapter-summaries';
import { BIBLE_BOOK_SUMMARIES } from '@/data/bible-summaries';

type SearchFilter = 'all' | 'summary' | 'themes' | 'christ';
type TestamentFilter = 'all' | 'old' | 'new';

interface SearchResult {
  chapter: ChapterSummary;
  bookName: string;
  matchType: 'summary' | 'themes' | 'christ' | 'title';
  matchedText: string;
}

// Get book name from bookId
function getBookName(bookId: string): string {
  const book = BIBLE_BOOK_SUMMARIES.find(b => b.id === bookId);
  return book?.name || bookId;
}

// Get testament from bookId
function getTestament(bookId: string): 'old' | 'new' {
  const book = BIBLE_BOOK_SUMMARIES.find(b => b.id === bookId);
  return book?.testament || 'old';
}

// Highlight matching text
function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 px-0.5 rounded">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

// Search result card component
function SearchResultCard({
  result,
  query,
  isExpanded,
  onToggle
}: {
  result: SearchResult;
  query: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const matchBadge = {
    title: { bg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300', label: 'Title' },
    summary: { bg: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300', label: 'Summary' },
    themes: { bg: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300', label: 'Theme' },
    christ: { bg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300', label: 'Christ Connection' },
  }[result.matchType];

  return (
    <Card className="overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <CardHeader className="pb-2 cursor-pointer hover:bg-muted/50 transition-colors">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-bible/10 text-bible font-semibold text-sm shrink-0">
                {result.chapter.chapter}
              </span>
              <div className="min-w-0">
                <Link
                  href={`/bible-study/${result.chapter.bookId}`}
                  className="text-xs text-muted-foreground hover:text-bible transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {result.bookName}
                </Link>
                <CardTitle className="text-base truncate">{result.chapter.title}</CardTitle>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${matchBadge.bg}`}>
                {matchBadge.label}
              </span>
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
            {highlightMatch(result.chapter.summary, query)}
          </p>

          {/* Key Themes */}
          {result.chapter.keyThemes.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-bible" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Key Themes</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {result.chapter.keyThemes.map((theme, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-muted rounded-full"
                  >
                    {highlightMatch(theme, query)}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Christ Connection */}
          {result.chapter.christConnection && (
            <div className="p-3 bg-bible/5 rounded-lg border border-bible/10">
              <div className="flex items-center gap-2 mb-2">
                <Cross className="h-4 w-4 text-bible" />
                <span className="text-xs font-medium text-bible uppercase tracking-wider">Christ Connection</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {highlightMatch(result.chapter.christConnection, query)}
              </p>
            </div>
          )}

          {/* Link to book */}
          <div className="pt-2">
            <Link href={`/bible-study/${result.chapter.bookId}`}>
              <Button variant="outline" size="sm" className="gap-2">
                <BookOpen className="h-4 w-4" />
                View {result.bookName}
              </Button>
            </Link>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState<SearchFilter>('all');
  const [testamentFilter, setTestamentFilter] = useState<TestamentFilter>('all');
  const [expandedResults, setExpandedResults] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);

  // Perform search
  const searchResults = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];

    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    for (const book of ALL_CHAPTER_SUMMARIES) {
      // Apply testament filter
      if (testamentFilter !== 'all' && getTestament(book.bookId) !== testamentFilter) {
        continue;
      }

      for (const chapter of book.chapters) {
        // Check title
        if ((searchFilter === 'all' || searchFilter === 'summary') &&
            chapter.title.toLowerCase().includes(lowerQuery)) {
          results.push({
            chapter,
            bookName: book.bookName,
            matchType: 'title',
            matchedText: chapter.title,
          });
          continue; // Avoid duplicate entries for same chapter
        }

        // Check summary
        if ((searchFilter === 'all' || searchFilter === 'summary') &&
            chapter.summary.toLowerCase().includes(lowerQuery)) {
          results.push({
            chapter,
            bookName: book.bookName,
            matchType: 'summary',
            matchedText: chapter.summary,
          });
          continue;
        }

        // Check key themes
        if ((searchFilter === 'all' || searchFilter === 'themes') &&
            chapter.keyThemes.some(theme => theme.toLowerCase().includes(lowerQuery))) {
          const matchedTheme = chapter.keyThemes.find(t => t.toLowerCase().includes(lowerQuery));
          results.push({
            chapter,
            bookName: book.bookName,
            matchType: 'themes',
            matchedText: matchedTheme || '',
          });
          continue;
        }

        // Check Christ connection
        if ((searchFilter === 'all' || searchFilter === 'christ') &&
            chapter.christConnection?.toLowerCase().includes(lowerQuery)) {
          results.push({
            chapter,
            bookName: book.bookName,
            matchType: 'christ',
            matchedText: chapter.christConnection || '',
          });
        }
      }
    }

    return results;
  }, [query, searchFilter, testamentFilter]);

  const toggleResult = useCallback((key: string) => {
    setExpandedResults(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  }, []);

  const clearSearch = useCallback(() => {
    setQuery('');
    setExpandedResults(new Set());
  }, []);

  // Suggested searches for common theological topics
  const suggestions = [
    'covenant', 'faith', 'grace', 'redemption', 'resurrection',
    'sacrifice', 'righteousness', 'judgment', 'mercy', 'promise'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/bible-study">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-bible/10">
                <Search className="h-5 w-5 text-bible" />
              </div>
              <div>
                <h1 className="font-semibold">Scripture Search</h1>
                <p className="text-sm text-muted-foreground">
                  Search 1,189 chapter summaries
                </p>
              </div>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search themes, summaries, Christ connections..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-bible"
            />
            {query && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Filter className="h-4 w-4" />
            Filters
            {showFilters ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>

          {/* Filters */}
          {showFilters && (
            <div className="mt-3 pt-3 border-t space-y-3">
              {/* Content Filter */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Search In</label>
                <div className="flex flex-wrap gap-2">
                  {([
                    { value: 'all', label: 'All Content' },
                    { value: 'summary', label: 'Summaries' },
                    { value: 'themes', label: 'Themes' },
                    { value: 'christ', label: 'Christ Connections' },
                  ] as const).map((filter) => (
                    <Button
                      key={filter.value}
                      variant={searchFilter === filter.value ? 'bible' : 'outline'}
                      size="sm"
                      onClick={() => setSearchFilter(filter.value)}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Testament Filter */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Testament</label>
                <div className="flex gap-2">
                  {([
                    { value: 'all', label: 'Both' },
                    { value: 'old', label: 'Old Testament' },
                    { value: 'new', label: 'New Testament' },
                  ] as const).map((filter) => (
                    <Button
                      key={filter.value}
                      variant={testamentFilter === filter.value ? 'bible' : 'outline'}
                      size="sm"
                      onClick={() => setTestamentFilter(filter.value)}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Empty State - Suggestions */}
        {!query && (
          <div className="text-center py-12">
            <BookMarked className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h2 className="text-lg font-semibold mb-2">Search Scripture Summaries</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Find chapters by themes, concepts, or Christ connections across all 66 books of the Bible.
            </p>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Try searching for:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {suggestions.map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="outline"
                    size="sm"
                    onClick={() => setQuery(suggestion)}
                    className="capitalize"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Query too short */}
        {query && query.length < 2 && (
          <div className="text-center py-12 text-muted-foreground">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Type at least 2 characters to search</p>
          </div>
        )}

        {/* Results */}
        {query.length >= 2 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">
                {searchResults.length} Result{searchResults.length !== 1 ? 's' : ''}
              </h2>
              {searchResults.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  for &ldquo;{query}&rdquo;
                </p>
              )}
            </div>

            {searchResults.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground mb-4">
                  No results found for &ldquo;{query}&rdquo;
                </p>
                <p className="text-sm text-muted-foreground">
                  Try a different search term or adjust your filters
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {searchResults.slice(0, 50).map((result) => {
                  const key = `${result.chapter.bookId}-${result.chapter.chapter}`;
                  return (
                    <SearchResultCard
                      key={key}
                      result={result}
                      query={query}
                      isExpanded={expandedResults.has(key)}
                      onToggle={() => toggleResult(key)}
                    />
                  );
                })}
                {searchResults.length > 50 && (
                  <p className="text-center text-sm text-muted-foreground py-4">
                    Showing first 50 of {searchResults.length} results. Try a more specific search term.
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
