'use client';

import { RefreshCw } from 'lucide-react';

export function RefreshButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-primary/90 text-white shadow-lg hover:bg-primary hover:scale-110 active:scale-95 transition-all"
      title="Refresh page"
      aria-label="Refresh page"
    >
      <RefreshCw className="h-5 w-5" />
    </button>
  );
}
