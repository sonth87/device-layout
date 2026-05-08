'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '@/store';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import { cn } from '@/lib/utils';
import type { AppConfig } from '@/types/app';

interface IPadHomeScreenProps {
  onOpenApp: (app: AppConfig) => void;
}

const COLS = 6;
const ROWS = 5;
const PAGE_SIZE = COLS * ROWS;

// Dock at bottom shows up to 6 apps
const DOCK_COUNT = 6;

export function IPadHomeScreen({ onOpenApp }: IPadHomeScreenProps) {
  const apps = useStore((s) => s.apps);
  const [currentPage, setCurrentPage] = useState(0);
  const [jiggling, setJiggling] = useState(false);

  const appList = Object.values(apps).filter((a) => !a.disabled);
  const dockApps = appList.slice(0, DOCK_COUNT);
  const mainApps = appList.slice(DOCK_COUNT);

  // Split main apps into pages
  const pages: AppConfig[][] = [];
  for (let i = 0; i < mainApps.length; i += PAGE_SIZE) {
    pages.push(mainApps.slice(i, i + PAGE_SIZE));
  }
  const totalPages = Math.max(1, pages.length);

  const goLeft = useCallback(() => setCurrentPage((p) => Math.max(0, p - 1)), []);
  const goRight = useCallback(() => {
    if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
  }, [currentPage, totalPages]);

  useSwipeGesture({ onSwipeLeft: goRight, onSwipeRight: goLeft, threshold: 80 });

  const currentApps = pages[currentPage] ?? [];

  return (
    <div
      className="absolute inset-0 pt-12 pb-36 px-6 overflow-hidden flex flex-col"
      onDoubleClick={() => setJiggling((j) => !j)}
    >
      {/* App grid */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: currentPage > 0 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: currentPage > 0 ? -80 : 80 }}
            transition={{ type: 'spring', stiffness: 450, damping: 42 }}
            className="grid h-full content-start gap-x-4 gap-y-6"
            style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
          >
            {currentApps.map((app, i) => (
              <button
                key={app.id}
                onClick={() => { if (!jiggling) onOpenApp(app); }}
                className="flex flex-col items-center gap-2 min-w-0"
              >
                <motion.div
                  animate={jiggling ? {
                    rotate: [0, -2, 2, -2, 2, 0],
                    transition: { repeat: Infinity, duration: 0.4, delay: (i % 8) * 0.04 },
                  } : { rotate: 0 }}
                  className="relative"
                >
                  <AppIconImage appConfig={app} size={72} />
                  {jiggling && (
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-black/80 rounded-full flex items-center justify-center shadow"
                    >
                      <span className="text-white text-xs font-bold leading-none">×</span>
                    </button>
                  )}
                </motion.div>
                <span className="text-white text-xs font-medium text-center leading-tight drop-shadow-md max-w-[72px] truncate">
                  {app.name}
                </span>
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page dots */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 py-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={cn(
                'rounded-full transition-all duration-200',
                i === currentPage ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50',
              )}
            />
          ))}
        </div>
      )}

      {/* iPad Dock — frosted glass bar */}
      <div className="absolute bottom-3 inset-x-6 z-10">
        <div
          className="rounded-3xl px-6 py-3 flex items-center justify-around"
          style={{
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            boxShadow: '0 2px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25)',
          }}
        >
          {dockApps.map((app) => (
            <button
              key={app.id}
              onClick={() => onOpenApp(app)}
              className="flex flex-col items-center gap-1.5"
            >
              <AppIconImage appConfig={app} size={64} />
              <span className="text-white/80 text-[10px] font-medium">{app.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
