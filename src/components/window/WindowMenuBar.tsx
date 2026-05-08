'use client';

import { useStore } from '@/store';

interface WindowMenuBarProps {
  windowId: string;
}

/**
 * Per-window menu bar area (optional, app-defined).
 * Renders below the chrome — apps can portal their menu content here.
 */
export function WindowMenuBar({ windowId }: WindowMenuBarProps) {
  const win = useStore((s) => s.windows[windowId]);
  if (!win) return null;

  return (
    <div
      id={`window-menubar-${windowId}`}
      className="flex items-center h-7 px-3 border-b border-black/10 dark:border-white/10 bg-(--window-chrome-bg) shrink-0 text-xs gap-4"
    >
      {/* App menu items are portalled here by the app component */}
    </div>
  );
}
