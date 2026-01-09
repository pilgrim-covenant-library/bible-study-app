'use client';

import { useState, useMemo } from 'react';
import { BookOpen, ChevronDown, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { BIBLE_BOOKS, type BibleBook } from '@/data/one2one-questions';

interface BookChapterSelectorProps {
  selectedBook: BibleBook | null;
  selectedChapter: number | null;
  onSelect: (book: BibleBook, chapter: number) => void;
}

export function BookChapterSelector({
  selectedBook,
  selectedChapter,
  onSelect,
}: BookChapterSelectorProps) {
  const [showBookList, setShowBookList] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTestament, setActiveTestament] = useState<'OT' | 'NT'>('NT');

  // Filter books by search query and testament
  const filteredBooks = useMemo(() => {
    let books = BIBLE_BOOKS.filter(b => b.testament === activeTestament);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      books = BIBLE_BOOKS.filter(b =>
        b.name.toLowerCase().includes(query)
      );
    }

    return books;
  }, [activeTestament, searchQuery]);

  // Generate chapter numbers for selected book
  const chapterNumbers = useMemo(() => {
    if (!selectedBook) return [];
    return Array.from({ length: selectedBook.chapters }, (_, i) => i + 1);
  }, [selectedBook]);

  const handleBookSelect = (book: BibleBook) => {
    setShowBookList(false);
    setSearchQuery('');
    onSelect(book, 1); // Default to chapter 1
  };

  const handleChapterSelect = (chapter: number) => {
    if (selectedBook) {
      onSelect(selectedBook, chapter);
    }
  };

  return (
    <div className="space-y-4">
      {/* Book Selector */}
      <div>
        <label className="block text-sm font-medium mb-2">Select a Book</label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowBookList(!showBookList)}
            className="w-full flex items-center justify-between p-3 rounded-lg border bg-card hover:border-one2one/40 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-one2one" />
              <span className={selectedBook ? 'font-medium' : 'text-muted-foreground'}>
                {selectedBook ? selectedBook.name : 'Choose a Bible book...'}
              </span>
            </div>
            <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${showBookList ? 'rotate-180' : ''}`} />
          </button>

          {/* Book Dropdown */}
          {showBookList && (
            <Card className="absolute z-50 mt-2 w-full max-h-96 overflow-hidden shadow-lg">
              <div className="p-3 border-b">
                {/* Search */}
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>

                {/* Testament Tabs */}
                {!searchQuery && (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveTestament('OT')}
                      className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                        activeTestament === 'OT'
                          ? 'bg-one2one text-white'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      Old Testament (39)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTestament('NT')}
                      className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                        activeTestament === 'NT'
                          ? 'bg-one2one text-white'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      New Testament (27)
                    </button>
                  </div>
                )}
              </div>

              {/* Book List */}
              <div className="max-h-64 overflow-y-auto p-2">
                <div className="grid grid-cols-2 gap-1">
                  {filteredBooks.map((book) => (
                    <button
                      key={book.id}
                      type="button"
                      onClick={() => handleBookSelect(book)}
                      className={`text-left p-2 rounded-lg text-sm transition-colors ${
                        selectedBook?.id === book.id
                          ? 'bg-one2one/10 text-one2one font-medium'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <span className="block truncate">{book.name}</span>
                      <span className="text-xs text-muted-foreground">{book.chapters} ch</span>
                    </button>
                  ))}
                </div>

                {filteredBooks.length === 0 && (
                  <p className="text-center text-muted-foreground py-4">
                    No books found matching &quot;{searchQuery}&quot;
                  </p>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Chapter Selector */}
      {selectedBook && (
        <div>
          <label className="block text-sm font-medium mb-2">
            Select a Chapter ({selectedBook.chapters} total)
          </label>
          <div className="grid grid-cols-10 gap-1">
            {chapterNumbers.map((chapter) => (
              <button
                key={chapter}
                type="button"
                onClick={() => handleChapterSelect(chapter)}
                className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  selectedChapter === chapter
                    ? 'bg-one2one text-white'
                    : 'bg-muted hover:bg-one2one/20 hover:text-one2one'
                }`}
              >
                {chapter}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selection Summary */}
      {selectedBook && selectedChapter && (
        <Card variant="one2one" className="bg-one2one/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-one2one/10">
                <BookOpen className="h-5 w-5 text-one2one" />
              </div>
              <div>
                <p className="font-semibold text-one2one">
                  {selectedBook.name} {selectedChapter}
                </p>
                <p className="text-sm text-muted-foreground">
                  Ready to begin your One2One study session
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
