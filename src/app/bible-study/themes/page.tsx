'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Lightbulb,
  BookOpen,
  Search,
  Tag,
  ChevronRight,
  Filter,
  TrendingUp,
  Hash,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { ALL_CHAPTER_SUMMARIES } from '@/data/bible-chapter-summaries';

// Theme category definitions with normalized keywords
const THEME_CATEGORIES: Record<string, { label: string; keywords: string[]; color: string }> = {
  covenant: {
    label: 'Covenant & Promise',
    keywords: ['covenant', 'promise', 'oath', 'vow', 'blessing'],
    color: 'bg-amber-500',
  },
  faith: {
    label: 'Faith & Trust',
    keywords: ['faith', 'trust', 'believe', 'obedience', 'faithful'],
    color: 'bg-green-500',
  },
  grace: {
    label: 'Grace & Mercy',
    keywords: ['grace', 'mercy', 'compassion', 'forgiveness', 'redemption'],
    color: 'bg-purple-500',
  },
  judgment: {
    label: 'Judgment & Justice',
    keywords: ['judgment', 'justice', 'wrath', 'punishment', 'retribution'],
    color: 'bg-red-500',
  },
  salvation: {
    label: 'Salvation & Deliverance',
    keywords: ['salvation', 'deliverance', 'rescue', 'save', 'redemption', 'exodus'],
    color: 'bg-blue-500',
  },
  sovereignty: {
    label: "God's Sovereignty",
    keywords: ['sovereign', 'providence', 'control', 'reign', 'kingdom', 'authority'],
    color: 'bg-indigo-500',
  },
  worship: {
    label: 'Worship & Prayer',
    keywords: ['worship', 'prayer', 'praise', 'sacrifice', 'offering', 'altar'],
    color: 'bg-pink-500',
  },
  holiness: {
    label: 'Holiness & Sanctification',
    keywords: ['holiness', 'holy', 'sanctification', 'purity', 'separation', 'clean'],
    color: 'bg-violet-500',
  },
  sin: {
    label: 'Sin & Repentance',
    keywords: ['sin', 'repentance', 'rebellion', 'transgression', 'iniquity', 'guilt'],
    color: 'bg-orange-500',
  },
  christ: {
    label: 'Christ & Messiah',
    keywords: ['christ', 'messiah', 'lamb', 'shepherd', 'king', 'servant', 'son'],
    color: 'bg-teal-500',
  },
  resurrection: {
    label: 'Life & Resurrection',
    keywords: ['resurrection', 'life', 'death', 'eternal', 'immortal', 'raised'],
    color: 'bg-emerald-500',
  },
  spirit: {
    label: 'Holy Spirit',
    keywords: ['spirit', 'pneuma', 'power', 'anointing', 'filling'],
    color: 'bg-cyan-500',
  },
};

interface ThemeOccurrence {
  bookId: string;
  bookName: string;
  chapter: number;
  chapterTitle: string;
  theme: string;
  fullTheme: string;
}

// Build the theme index from all chapter summaries
function buildThemeIndex(): Map<string, ThemeOccurrence[]> {
  const themeIndex = new Map<string, ThemeOccurrence[]>();

  for (const book of ALL_CHAPTER_SUMMARIES) {
    for (const chapter of book.chapters) {
      for (const theme of chapter.keyThemes) {
        // Normalize the theme for grouping
        const normalizedTheme = theme.toLowerCase().trim();

        if (!themeIndex.has(normalizedTheme)) {
          themeIndex.set(normalizedTheme, []);
        }

        themeIndex.get(normalizedTheme)!.push({
          bookId: book.bookId,
          bookName: book.bookName,
          chapter: chapter.chapter,
          chapterTitle: chapter.title,
          theme: normalizedTheme,
          fullTheme: theme,
        });
      }
    }
  }

  return themeIndex;
}

// Get category for a theme
function getCategoryForTheme(theme: string): string | null {
  const lowerTheme = theme.toLowerCase();
  for (const [categoryId, category] of Object.entries(THEME_CATEGORIES)) {
    if (category.keywords.some(keyword => lowerTheme.includes(keyword))) {
      return categoryId;
    }
  }
  return null;
}

export default function ThemeExplorerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  // Build the theme index once
  const themeIndex = useMemo(() => buildThemeIndex(), []);

  // Get all unique themes sorted by frequency
  const allThemes = useMemo(() => {
    const themes = Array.from(themeIndex.entries())
      .map(([theme, occurrences]) => ({
        theme,
        displayTheme: occurrences[0].fullTheme,
        count: occurrences.length,
        category: getCategoryForTheme(theme),
      }))
      .sort((a, b) => b.count - a.count);
    return themes;
  }, [themeIndex]);

  // Filter themes based on search and category
  const filteredThemes = useMemo(() => {
    let themes = allThemes;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      themes = themes.filter(t => t.theme.includes(query));
    }

    if (selectedCategory) {
      themes = themes.filter(t => t.category === selectedCategory);
    }

    return themes;
  }, [allThemes, searchQuery, selectedCategory]);

  // Get occurrences for selected theme
  const selectedOccurrences = useMemo(() => {
    if (!selectedTheme) return [];
    return themeIndex.get(selectedTheme) || [];
  }, [themeIndex, selectedTheme]);

  // Category stats
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    for (const theme of allThemes) {
      if (theme.category) {
        stats[theme.category] = (stats[theme.category] || 0) + theme.count;
      }
    }
    return stats;
  }, [allThemes]);

  // Get top themes (most frequent)
  const topThemes = useMemo(() => allThemes.slice(0, 20), [allThemes]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/bible-study">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-bible/10">
              <Lightbulb className="h-5 w-5 text-bible" />
            </div>
            <div>
              <h1 className="font-semibold">Theme Explorer</h1>
              <p className="text-sm text-muted-foreground">Discover themes across all 66 books</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <section className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-bible">{allThemes.length}</div>
                <div className="text-sm text-muted-foreground">Unique Themes</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-green-500">1,189</div>
                <div className="text-sm text-muted-foreground">Chapters</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-purple-500">
                  {Object.keys(THEME_CATEGORIES).length}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-amber-500">66</div>
                <div className="text-sm text-muted-foreground">Books</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search themes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-bible/50"
              />
            </div>
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(null)}
              className="shrink-0"
            >
              <Filter className="h-4 w-4 mr-2" />
              All Categories
            </Button>
          </div>
        </section>

        {/* Category Pills */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {Object.entries(THEME_CATEGORIES).map(([id, category]) => (
              <button
                key={id}
                onClick={() => setSelectedCategory(selectedCategory === id ? null : id)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === id
                    ? `${category.color} text-white`
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <Tag className="h-3.5 w-3.5" />
                {category.label}
                <span className="text-xs opacity-75">
                  ({categoryStats[id] || 0})
                </span>
              </button>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Theme List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Themes */}
            {!searchQuery && !selectedCategory && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="h-5 w-5 text-bible" />
                    Most Common Themes
                  </CardTitle>
                  <CardDescription>
                    Themes that appear most frequently across Scripture
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {topThemes.map(({ theme, displayTheme, count, category }) => {
                      const categoryData = category ? THEME_CATEGORIES[category] : null;
                      return (
                        <button
                          key={theme}
                          onClick={() => setSelectedTheme(selectedTheme === theme ? null : theme)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all ${
                            selectedTheme === theme
                              ? 'bg-bible text-white'
                              : 'bg-muted hover:bg-muted/80'
                          }`}
                        >
                          {categoryData && (
                            <span className={`w-2 h-2 rounded-full ${categoryData.color}`} />
                          )}
                          {displayTheme}
                          <span className="text-xs opacity-75">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Filtered Themes */}
            {(searchQuery || selectedCategory) && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Hash className="h-5 w-5 text-bible" />
                    {searchQuery ? `Search Results for "${searchQuery}"` : selectedCategory ? THEME_CATEGORIES[selectedCategory].label : 'Themes'}
                  </CardTitle>
                  <CardDescription>
                    {filteredThemes.length} themes found
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {filteredThemes.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {filteredThemes.map(({ theme, displayTheme, count, category }) => {
                        const categoryData = category ? THEME_CATEGORIES[category] : null;
                        return (
                          <button
                            key={theme}
                            onClick={() => setSelectedTheme(selectedTheme === theme ? null : theme)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all ${
                              selectedTheme === theme
                                ? 'bg-bible text-white'
                                : 'bg-muted hover:bg-muted/80'
                            }`}
                          >
                            {categoryData && (
                              <span className={`w-2 h-2 rounded-full ${categoryData.color}`} />
                            )}
                            {displayTheme}
                            <span className="text-xs opacity-75">({count})</span>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-8">
                      No themes found matching your search.
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Category Browse (when no search/filter) */}
            {!searchQuery && !selectedCategory && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-bible" />
                  Browse by Category
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(THEME_CATEGORIES).map(([id, category]) => (
                    <Card
                      key={id}
                      className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5"
                      onClick={() => setSelectedCategory(id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${category.color}`} />
                          <div className="flex-1">
                            <div className="font-medium">{category.label}</div>
                            <div className="text-sm text-muted-foreground">
                              {categoryStats[id] || 0} occurrences
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Selected Theme Detail */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {selectedTheme && selectedOccurrences.length > 0 ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Lightbulb className="h-5 w-5 text-bible" />
                      {selectedOccurrences[0].fullTheme}
                    </CardTitle>
                    <CardDescription>
                      Found in {selectedOccurrences.length} chapter{selectedOccurrences.length !== 1 ? 's' : ''}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="max-h-96 overflow-y-auto space-y-2">
                      {selectedOccurrences.map((occ, idx) => (
                        <Link
                          key={`${occ.bookId}-${occ.chapter}-${idx}`}
                          href={`/bible-study/${occ.bookId}#chapter-${occ.chapter}`}
                          className="block p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-bible/10 text-bible flex items-center justify-center text-xs font-medium">
                              {occ.chapter}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium">{occ.bookName}</div>
                              <div className="text-xs text-muted-foreground truncate">
                                {occ.chapterTitle}
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-muted/30">
                  <CardContent className="p-8 text-center">
                    <Lightbulb className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                    <p className="text-muted-foreground">
                      Select a theme to see where it appears across Scripture
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
