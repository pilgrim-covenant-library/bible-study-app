'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  Cross,
  ChevronRight,
  Search,
  Tag,
  Link2,
  BookMarked,
  ScrollText,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import {
  DOCTRINAL_INDEX,
  DOCTRINE_CATEGORIES,
  getDoctrinesByCategory,
  getRelatedDoctrines,
  type Doctrine,
  type DoctrineCategory,
} from '@/data/doctrinal-index';
import { BIBLE_BOOK_SUMMARIES } from '@/data/bible-summaries';

// Get book name from bookId
function getBookName(bookId: string): string {
  const book = BIBLE_BOOK_SUMMARIES.find(b => b.id === bookId);
  return book?.name || bookId;
}

// Category color mapping
const CATEGORY_COLORS: Record<DoctrineCategory, string> = {
  theology_proper: 'bg-blue-500',
  christology: 'bg-amber-500',
  pneumatology: 'bg-cyan-500',
  anthropology: 'bg-green-500',
  soteriology: 'bg-purple-500',
  ecclesiology: 'bg-pink-500',
  eschatology: 'bg-red-500',
};

const CATEGORY_BG: Record<DoctrineCategory, string> = {
  theology_proper: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  christology: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  pneumatology: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  anthropology: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  soteriology: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  ecclesiology: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
  eschatology: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
};

// Doctrine detail view
function DoctrineDetail({ doctrine, onClose }: { doctrine: Doctrine; onClose: () => void }) {
  const relatedDoctrines = useMemo(() => getRelatedDoctrines(doctrine.id), [doctrine.id]);
  const categoryInfo = DOCTRINE_CATEGORIES.find(c => c.id === doctrine.category);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        <CardHeader className="border-b shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs px-2 py-0.5 rounded font-medium ${CATEGORY_BG[doctrine.category]}`}>
                  {categoryInfo?.name}
                </span>
                {doctrine.wscQuestions && doctrine.wscQuestions.length > 0 && (
                  <span className="text-xs px-2 py-0.5 rounded bg-muted font-medium">
                    WSC Q{doctrine.wscQuestions.join(', Q')}
                  </span>
                )}
              </div>
              <CardTitle className="text-xl">{doctrine.name}</CardTitle>
              {doctrine.confessionalReference && (
                <CardDescription className="mt-1">{doctrine.confessionalReference}</CardDescription>
              )}
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Definition */}
          <div className="p-4 bg-bible/5 rounded-lg border border-bible/10">
            <div className="flex items-center gap-2 mb-2">
              <ScrollText className="h-4 w-4 text-bible" />
              <span className="text-sm font-medium text-bible">Definition</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">{doctrine.definition}</p>
          </div>

          {/* Key Scripture Passages */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-bible" />
              Key Scripture Passages ({doctrine.keyPassages.length})
            </h3>
            <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
              {doctrine.keyPassages.map((passage, idx) => (
                <Link
                  key={`${passage.bookId}-${passage.chapter}-${idx}`}
                  href={`/bible-study/${passage.bookId}#chapter-${passage.chapter}`}
                  className="group flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  onClick={onClose}
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-bible/10 text-bible font-semibold text-xs shrink-0">
                    {passage.chapter}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{getBookName(passage.bookId)}</span>
                      <ChevronRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                      {passage.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Doctrines */}
          {relatedDoctrines.length > 0 && (
            <div className="pt-4 border-t">
              <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                <Link2 className="h-4 w-4 text-purple-500" />
                Related Doctrines
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedDoctrines.map(related => (
                  <span
                    key={related.id}
                    className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400"
                  >
                    {related.shortName}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links to Westminster Catechism */}
          {doctrine.wscQuestions && doctrine.wscQuestions.length > 0 && (
            <div className="pt-4 border-t">
              <Link href="/theology" onClick={onClose}>
                <Button variant="outline" className="w-full gap-2">
                  <BookMarked className="h-4 w-4" />
                  Study in Westminster Shorter Catechism
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Doctrine card component
function DoctrineCard({ doctrine, onClick }: { doctrine: Doctrine; onClick: () => void }) {
  const categoryInfo = DOCTRINE_CATEGORIES.find(c => c.id === doctrine.category);

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-1">
          <span className={`w-2 h-2 rounded-full ${CATEGORY_COLORS[doctrine.category]}`} />
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
            {categoryInfo?.name}
          </span>
        </div>
        <CardTitle className="text-base">{doctrine.name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {doctrine.definition}
        </p>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {doctrine.keyPassages.length} passages
          </span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function DoctrinalIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DoctrineCategory | null>(null);
  const [selectedDoctrine, setSelectedDoctrine] = useState<Doctrine | null>(null);

  // Filter doctrines
  const filteredDoctrines = useMemo(() => {
    let doctrines = DOCTRINAL_INDEX;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      doctrines = doctrines.filter(d =>
        d.name.toLowerCase().includes(query) ||
        d.shortName.toLowerCase().includes(query) ||
        d.definition.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      doctrines = doctrines.filter(d => d.category === selectedCategory);
    }

    return doctrines;
  }, [searchQuery, selectedCategory]);

  // Group doctrines by category when no filter
  const doctrinesByCategory = useMemo(() => {
    if (selectedCategory || searchQuery) return null;
    return DOCTRINE_CATEGORIES.map(cat => ({
      ...cat,
      doctrines: getDoctrinesByCategory(cat.id),
    }));
  }, [selectedCategory, searchQuery]);

  // Calculate total passages
  const totalPassages = useMemo(() => {
    return DOCTRINAL_INDEX.reduce((sum, d) => sum + d.keyPassages.length, 0);
  }, []);

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
              <Cross className="h-5 w-5 text-bible" />
            </div>
            <div>
              <h1 className="font-semibold">Doctrinal Scripture Index</h1>
              <p className="text-sm text-muted-foreground">Reformed theology grounded in Scripture</p>
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
                <div className="text-3xl font-bold text-bible">{DOCTRINAL_INDEX.length}</div>
                <div className="text-sm text-muted-foreground">Doctrines</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-purple-500">{totalPassages}</div>
                <div className="text-sm text-muted-foreground">Scripture References</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-amber-500">{DOCTRINE_CATEGORIES.length}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-green-500">5</div>
                <div className="text-sm text-muted-foreground">TULIP Points</div>
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
                placeholder="Search doctrines..."
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
              All Categories
            </Button>
          </div>
        </section>

        {/* Category Pills */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {DOCTRINE_CATEGORIES.map((cat) => {
              const count = getDoctrinesByCategory(cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? `${CATEGORY_COLORS[cat.id]} text-white`
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  <Tag className="h-3.5 w-3.5" />
                  {cat.name}
                  <span className="text-xs opacity-75">({count})</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Doctrines Display */}
        {searchQuery || selectedCategory ? (
          // Filtered view - flat list
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">
                {selectedCategory
                  ? DOCTRINE_CATEGORIES.find(c => c.id === selectedCategory)?.name
                  : `Search Results for "${searchQuery}"`}
              </h2>
              <span className="text-sm text-muted-foreground">
                {filteredDoctrines.length} doctrine{filteredDoctrines.length !== 1 ? 's' : ''}
              </span>
            </div>
            {filteredDoctrines.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDoctrines.map(doctrine => (
                  <DoctrineCard
                    key={doctrine.id}
                    doctrine={doctrine}
                    onClick={() => setSelectedDoctrine(doctrine)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Cross className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No doctrines found matching your search.</p>
              </div>
            )}
          </section>
        ) : (
          // Grouped by category view
          <section className="space-y-10">
            {doctrinesByCategory?.map(category => (
              <div key={category.id}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-3 h-3 rounded-full ${CATEGORY_COLORS[category.id]}`} />
                  <div>
                    <h2 className="text-lg font-semibold">{category.name}</h2>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.doctrines.map(doctrine => (
                    <DoctrineCard
                      key={doctrine.id}
                      doctrine={doctrine}
                      onClick={() => setSelectedDoctrine(doctrine)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Educational Note */}
        <section className="mt-12">
          <Card variant="bible">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-bible/10 shrink-0">
                  <Lightbulb className="h-6 w-6 text-bible" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">How to Use This Index</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    This doctrinal index connects Reformed theology to its Scriptural foundations.
                    Each doctrine includes key Bible passages that establish and illuminate the teaching.
                    Click on any passage reference to go directly to that chapter in the Bible Study section.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The doctrines are organized using classical Reformed categories and include references
                    to the Westminster Shorter Catechism (WSC) and Westminster Confession of Faith (WCF)
                    for further study.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Doctrine Detail Modal */}
      {selectedDoctrine && (
        <DoctrineDetail
          doctrine={selectedDoctrine}
          onClose={() => setSelectedDoctrine(null)}
        />
      )}
    </div>
  );
}
