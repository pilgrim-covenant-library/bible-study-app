'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookMarked, Construction, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

// Placeholder practice page - quiz questions will be added later
export default function BibleStudyPracticePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
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
              <h1 className="font-semibold">Bible Book Quiz</h1>
              <p className="text-sm text-muted-foreground">Test your knowledge</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Coming Soon Card */}
        <Card className="text-center py-12">
          <CardContent>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bible/10 mb-6">
              <Construction className="h-8 w-8 text-bible" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Quiz Coming Soon!</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We're preparing quiz questions to test your knowledge of Bible books, themes, authors, and key verses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/bible-study">
                <Button variant="bible">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Book Summaries
                </Button>
              </Link>
              <Link href="/theology/practice">
                <Button variant="outline">
                  Try Catechism Practice
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Preview of what's coming */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold mb-4">What to Expect</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Book Identification</CardTitle>
                <CardDescription>
                  Identify books by their themes, key verses, or summaries
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Author Attribution</CardTitle>
                <CardDescription>
                  Match books with their traditional authors
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Key Verse Recognition</CardTitle>
                <CardDescription>
                  Identify which book contains famous passages
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Canonical Ordering</CardTitle>
                <CardDescription>
                  Place books in their correct canonical groups
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
