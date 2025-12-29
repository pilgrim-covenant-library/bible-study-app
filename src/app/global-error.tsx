'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error for debugging (in production, this would go to an error tracking service)
    console.error('Application error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '2rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            backgroundColor: '#fafafa',
            color: '#1a1a1a',
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              fontSize: '28px',
            }}
          >
            <span role="img" aria-label="Book">
              📖
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              textAlign: 'center',
            }}
          >
            Something went wrong
          </h1>

          {/* Encouraging message */}
          <p
            style={{
              color: '#6b7280',
              marginBottom: '1.5rem',
              textAlign: 'center',
              maxWidth: '400px',
              lineHeight: '1.6',
            }}
          >
            Don&apos;t worry - even the best of us encounter errors. Let&apos;s
            get you back to studying God&apos;s Word.
          </p>

          {/* Scripture encouragement */}
          <blockquote
            style={{
              fontStyle: 'italic',
              color: '#4b5563',
              marginBottom: '2rem',
              textAlign: 'center',
              maxWidth: '350px',
              padding: '1rem',
              borderLeft: '3px solid #3b82f6',
              backgroundColor: '#f3f4f6',
              borderRadius: '0 8px 8px 0',
            }}
          >
            &ldquo;The steadfast love of the LORD never ceases; his mercies
            never come to an end.&rdquo;
            <br />
            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              - Lamentations 3:22-23
            </span>
          </blockquote>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => reset()}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3b82f6')}
            >
              Try again
            </button>

            <button
              onClick={() => (window.location.href = '/')}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'transparent',
                color: '#3b82f6',
                border: '2px solid #3b82f6',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#eff6ff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Go to Home
            </button>
          </div>

          {/* Error digest for debugging (only shown if available) */}
          {error.digest && (
            <p
              style={{
                marginTop: '2rem',
                fontSize: '0.75rem',
                color: '#9ca3af',
              }}
            >
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
