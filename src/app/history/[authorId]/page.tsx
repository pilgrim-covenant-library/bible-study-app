'use client';

import { useState, useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  ScrollText,
  BookOpen,
  Calendar,
  Quote,
  Lightbulb,
  ExternalLink,
  FileText,
  ChevronDown,
  ChevronUp,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { getAuthorById, type AuthorWork, type AuthorId } from '@/data/church-history-authors';

type TabId = 'biography' | 'works' | 'theology' | 'quotes';

const TABS: { id: TabId; label: string; icon: typeof BookOpen }[] = [
  { id: 'biography', label: 'Biography', icon: Calendar },
  { id: 'works', label: 'Works', icon: BookOpen },
  { id: 'theology', label: 'Theology', icon: Lightbulb },
  { id: 'quotes', label: 'Quotes', icon: Quote },
];

// Resource type badge styling
function getResourceBadge(type: string) {
  const styles: Record<string, string> = {
    PDF: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    ePub: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    HTML: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    Audio: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  };
  return styles[type] || 'bg-gray-100 text-gray-800';
}

// Source badge styling
function getSourceBadge(source: string) {
  const styles: Record<string, { bg: string; label: string }> = {
    CCEL: { bg: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800', label: 'CCEL' },
    'Archive.org': { bg: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800', label: 'Archive.org' },
    Monergism: { bg: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800', label: 'Monergism' },
    Gutenberg: { bg: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800', label: 'Gutenberg' },
    Yale: { bg: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800', label: 'Yale' },
    Other: { bg: 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800', label: 'Other' },
  };
  return styles[source] || styles.Other;
}

// Tradition badge styling
function getTraditionBadge(tradition: string) {
  const styles: Record<string, string> = {
    early_church: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    reformation: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    puritan: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    american_reformed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    great_awakening: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
    modern_reformed: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  };
  const labels: Record<string, string> = {
    early_church: 'Early Church',
    reformation: 'Reformation',
    puritan: 'Puritan',
    american_reformed: 'American Reformed',
    great_awakening: 'Great Awakening',
    modern_reformed: 'Modern Reformed',
  };
  return {
    className: styles[tradition] || 'bg-gray-100 text-gray-800',
    label: labels[tradition] || tradition,
  };
}

// Expandable Work Card component
function WorkCard({ work }: { work: AuthorWork }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden">
      <div
        className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold">{work.title}</h3>
              {work.year && (
                <span className="text-xs text-muted-foreground">({work.year})</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{work.summary}</p>
          </div>
          <Button variant="ghost" size="icon" className="shrink-0">
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 pt-0 border-t bg-muted/30">
          <div className="pt-4 space-y-4">
            {/* Summary */}
            <div>
              <h4 className="text-sm font-medium mb-2">Summary</h4>
              <p className="text-sm text-muted-foreground">{work.summary}</p>
            </div>

            {/* Significance */}
            <div>
              <h4 className="text-sm font-medium mb-2">Historical Significance</h4>
              <p className="text-sm text-muted-foreground">{work.significance}</p>
            </div>

            {/* Free Resources */}
            {work.freeLinks.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Free Resources
                </h4>
                <div className="grid gap-2">
                  {work.freeLinks.map((resource, idx) => {
                    const sourceBadge = getSourceBadge(resource.source);
                    return (
                      <a
                        key={idx}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg border hover:bg-background transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`px-2 py-0.5 rounded text-xs font-medium border ${sourceBadge.bg}`}>
                            {sourceBadge.label}
                          </div>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-medium ${getResourceBadge(resource.format)}`}>
                            {resource.format}
                          </span>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-history transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}

export default function AuthorDetailPage() {
  const params = useParams();
  const authorId = params.authorId as AuthorId;
  const author = getAuthorById(authorId);

  const [activeTab, setActiveTab] = useState<TabId>('biography');

  if (!author) {
    notFound();
  }

  const badge = getTraditionBadge(author.tradition);

  // Count total resources
  const totalResources = useMemo(() => {
    return author.majorWorks.reduce((sum, work) => sum + work.freeLinks.length, 0);
  }, [author]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/history">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-history/10">
                <ScrollText className="h-5 w-5 text-history" />
              </div>
              <div>
                <h1 className="font-semibold">{author.name}</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{author.lifespan}</span>
                </div>
              </div>
            </div>
            <span className={`ml-auto text-xs px-2 py-1 rounded-full font-medium ${badge.className}`}>
              {badge.label}
            </span>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 overflow-x-auto pb-1">
            {TABS.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'history' : 'ghost'}
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
        {/* Biography Tab */}
        {activeTab === 'biography' && (
          <div className="space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{author.biography.overview}</p>
              </CardContent>
            </Card>

            {/* Life Stages */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Life & Ministry</h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-history/20" />

                <div className="space-y-6">
                  {author.biography.lifeStages.map((stage, index) => (
                    <Card key={index} className="relative ml-8">
                      {/* Timeline dot */}
                      <div className="absolute -left-6 top-6 w-3 h-3 rounded-full bg-history border-2 border-background" />

                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-base">{stage.title}</CardTitle>
                          <span className="text-xs text-muted-foreground">{stage.period}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Works Tab */}
        {activeTab === 'works' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Major Works</h2>
              <span className="text-sm text-muted-foreground">
                {author.majorWorks.length} works | {totalResources} free resources
              </span>
            </div>

            <div className="space-y-4">
              {author.majorWorks.map((work, index) => (
                <WorkCard key={index} work={work} />
              ))}
            </div>
          </div>
        )}

        {/* Theology Tab */}
        {activeTab === 'theology' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold mb-4">Theological Positions</h2>

            <div className="space-y-4">
              {author.theologicalPositions.map((position, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-history" />
                      {position.topic}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{position.position}</p>
                    {position.distinctives.length > 0 && (
                      <div className="mb-3">
                        <span className="text-xs text-muted-foreground">Key distinctives:</span>
                        <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                          {position.distinctives.slice(0, 3).map((d, idx) => (
                            <li key={idx}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {position.scriptureReferences.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-xs text-muted-foreground mr-1">Scripture:</span>
                        {position.scriptureReferences.slice(0, 4).map((ref, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-0.5 bg-history/10 text-history rounded-full"
                          >
                            {ref}
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

        {/* Quotes Tab */}
        {activeTab === 'quotes' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold mb-4">Notable Quotes</h2>

            <div className="space-y-4">
              {author.notableQuotes.map((quote, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="bg-history/5 p-6">
                    <Quote className="h-8 w-8 text-history/30 mb-2" />
                    <blockquote className="text-lg italic leading-relaxed">
                      &ldquo;{quote.text}&rdquo;
                    </blockquote>
                  </div>
                  {quote.source && (
                    <CardContent className="py-3 bg-muted/30">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="h-3.5 w-3.5" />
                        <span>Source: {quote.source}</span>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Quick Navigation */}
        <section className="mt-12 pt-8 border-t">
          <h2 className="text-lg font-semibold mb-4">Other Theologians</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Show other authors */}
            {/* This would dynamically show other authors from the data */}
          </div>
          <div className="mt-4 text-center">
            <Link href="/history">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Theologians
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
