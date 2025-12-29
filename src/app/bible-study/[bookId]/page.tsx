'use client';

import { useState } from 'react';
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
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import {
  getBookById,
  getNextBook,
  getPreviousBook,
  type CanonicalGroup,
} from '@/data/bible-summaries';
import { getChaptersByBook, type ChapterSummary } from '@/data/bible-chapter-summaries';

type TabId = 'overview' | 'outline' | 'chapters' | 'themes' | 'christ' | 'study';

const TABS: { id: TabId; label: string; icon: typeof BookOpen }[] = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'outline', label: 'Outline', icon: FileText },
  { id: 'chapters', label: 'Chapters', icon: List },
  { id: 'themes', label: 'Themes', icon: Lightbulb },
  { id: 'christ', label: 'Christ', icon: Cross },
  { id: 'study', label: 'Study', icon: HelpCircle },
];

// Chapter card component with expandable content
function ChapterCard({ chapter, isExpanded, onToggle }: {
  chapter: ChapterSummary;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <Card className="overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <CardHeader className="pb-2 cursor-pointer hover:bg-muted/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-bible/10 text-bible font-semibold text-sm">
                {chapter.chapter}
              </span>
              <CardTitle className="text-base">{chapter.title}</CardTitle>
            </div>
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            )}
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
        </CardContent>
      )}
    </Card>
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

  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [expandedChapters, setExpandedChapters] = useState<Set<number>>(new Set());

  if (!book) {
    notFound();
  }

  const prevBook = getPreviousBook(bookId);
  const nextBook = getNextBook(bookId);
  const groupBadge = getGroupBadge(book.canonicalGroup);
  const chapterSummaries = getChaptersByBook(bookId);

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
            <span className={`ml-auto text-xs px-2 py-1 rounded-full font-medium ${groupBadge.bg}`}>
              {groupBadge.label}
            </span>
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
          <div className="space-y-4">
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
              Each summary highlights key themes and shows how the chapter points to Christ.
            </p>
            <div className="space-y-3">
              {chapterSummaries.map((chapter) => (
                <ChapterCard
                  key={chapter.chapter}
                  chapter={chapter}
                  isExpanded={expandedChapters.has(chapter.chapter)}
                  onToggle={() => toggleChapter(chapter.chapter)}
                />
              ))}
            </div>
          </div>
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
