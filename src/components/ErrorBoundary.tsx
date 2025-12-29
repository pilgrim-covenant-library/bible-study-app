'use client';

import { Component, type ReactNode } from 'react';
import { Book, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-accent/5 p-4">
          <div className="max-w-md w-full text-center space-y-6">
            {/* App Icon */}
            <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Book className="h-8 w-8 text-primary" />
            </div>

            {/* Message */}
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Something went wrong
              </h1>
              <p className="text-muted-foreground">
                Don&apos;t worry - even the best of us encounter errors.
                Let&apos;s get you back to studying God&apos;s Word.
              </p>
            </div>

            {/* Scripture Encouragement */}
            <blockquote className="text-sm italic text-muted-foreground border-l-4 border-primary pl-4 text-left mx-auto max-w-xs">
              &ldquo;The steadfast love of the LORD never ceases; his mercies never come to an end.&rdquo;
              <span className="block text-xs mt-1 not-italic">— Lamentations 3:22-23</span>
            </blockquote>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                <RefreshCw className="h-5 w-5" />
                Try Again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
              >
                <Home className="h-5 w-5" />
                Go Home
              </Link>
            </div>

            {/* Dev Error Details */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mt-4 p-4 bg-muted rounded-lg">
                <summary className="cursor-pointer text-sm font-medium">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 text-xs overflow-auto text-red-600 dark:text-red-400">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
