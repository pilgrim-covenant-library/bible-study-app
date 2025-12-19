'use client';

import { ThemeProvider } from 'next-themes';
import { type ReactNode, useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';

interface ProvidersProps {
  children: ReactNode;
}

function AuthInitializer({ children }: { children: ReactNode }) {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    const unsubscribe = initialize();
    return () => unsubscribe();
  }, [initialize]);

  return <>{children}</>;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthInitializer>{children}</AuthInitializer>
    </ThemeProvider>
  );
}
