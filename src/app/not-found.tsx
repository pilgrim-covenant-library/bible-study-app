import Link from 'next/link';
import { Book, Home, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <div className="max-w-md text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 p-4 rounded-2xl bg-primary/10 w-fit">
          <Book className="h-12 w-12 text-primary" />
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl font-bold text-primary/20 mb-2">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>

        {/* Message */}
        <p className="text-muted-foreground mb-6">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          But don&apos;t worry, there&apos;s plenty of Scripture to explore!
        </p>

        {/* Scripture quote */}
        <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4 mb-8 text-left">
          &ldquo;Your word is a lamp to my feet and a light to my path.&rdquo;
          <span className="block text-sm mt-1 not-italic">— Psalm 119:105</span>
        </blockquote>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Button>
          </Link>
          <Link href="/bible-study">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <BookOpen className="h-5 w-5 mr-2" />
              Bible Study
            </Button>
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">Or explore our features:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/trivia" className="text-sm text-trivia hover:underline">
              Trivia
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/memory" className="text-sm text-memory hover:underline">
              Memory
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/theology" className="text-sm text-theology hover:underline">
              Theology
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/history" className="text-sm text-history hover:underline">
              History
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
