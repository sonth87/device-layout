'use client';

import { useStore } from '@/store';

interface WindowStatusBarProps {
  windowId: string;
}

export function WindowStatusBar({ windowId }: WindowStatusBarProps) {
  const win = useStore((s) => s.windows[windowId]);
  if (!win) return null;

  return (
    <div
      id={`window-statusbar-${windowId}`}
      className="flex items-center h-6 px-3 border-t border-black/10 dark:border-white/10 bg-(--window-chrome-bg) shrink-0 text-xs text-black/50 dark:text-white/50"
    >
      {/* App status content is portalled here */}
    </div>
  );
}
