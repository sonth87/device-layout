'use client';

import { AnimatePresence } from 'motion/react';
import { useStore } from '@/store';
import { Window } from './Window';
import { useWindowUrlSync } from '@/hooks/useWindowUrlSync';

export function WindowManager() {
  useWindowUrlSync();

  const windows = useStore((s) => s.windows);
  // Sort by zIndex so AnimatePresence exits in correct order
  const windowIds = Object.values(windows)
    .sort((a, b) => a.zIndex - b.zIndex)
    .map((w) => w.id);

  return (
    // Full-screen layer — pointer-events-none so clicks pass through to desktop
    // Individual Window components handle their own pointer events
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {windowIds.map((id) => (
          <Window key={id} windowId={id} />
        ))}
      </AnimatePresence>
    </div>
  );
}
