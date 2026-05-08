'use client';

import { ThemeProvider } from '@/components/themes/ThemeProvider';

export default function DesktopPage() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <ThemeProvider />
    </main>
  );
}
