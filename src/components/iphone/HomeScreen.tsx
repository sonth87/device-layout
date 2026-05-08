'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '@/store';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import { cn } from '@/lib/utils';
import type { AppConfig } from '@/types/app';

interface HomeScreenProps {
  onOpenApp: (app: AppConfig) => void;
}

const COLS = 4;
const ROWS = 6;
const PAGE_SIZE = COLS * ROWS;

export function IPhoneHomeScreen({ onOpenApp }: HomeScreenProps) {
  const apps = useStore((s) => s.apps);
  const [currentPage, setCurrentPage] = useState(0);
  const [jiggling, setJiggling] = useState(false);

  const appList = Object.values(apps).filter((a) => !a.disabled);

  // Split apps into pages
  const pages: AppConfig[][] = [];
  for (let i = 0; i < appList.length; i += PAGE_SIZE) {
    pages.push(appList.slice(i, i + PAGE_SIZE));
  }
  const totalPages = Math.max(1, pages.length);

  const goLeft = useCallback(() => {
    setCurrentPage((p) => Math.max(0, p - 1));
  }, []);

  const goRight = useCallback(() => {
    if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
  }, [currentPage, totalPages]);

  useSwipeGesture({ onSwipeLeft: goRight, onSwipeRight: goLeft, threshold: 60 });

  const currentApps = pages[currentPage] ?? [];

  return (
    <div className="absolute inset-0 pt-10 pb-28 overflow-hidden" onDoubleClick={() => setJiggling((j) => !j)}>
      {/* Pages */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: currentPage > 0 ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: currentPage > 0 ? -60 : 60 }}
          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          className="grid gap-4 px-5 h-full content-start"
          style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
        >
          {currentApps.map((app, i) => (
            <button
              key={app.id}
              onClick={() => { if (!jiggling) onOpenApp(app); }}
              className="flex flex-col items-center gap-1.5"
            >
              <motion.div
                animate={jiggling ? {
                  rotate: [0, -2, 2, -2, 2, 0],
                  transition: { repeat: Infinity, duration: 0.4, delay: (i % 5) * 0.05 }
                } : { rotate: 0 }}
                className="relative"
              >
                <AppIconImage appConfig={app} size={56} />
                {jiggling && (
                  <button
                    onClick={(e) => { e.stopPropagation(); }}
                    className="absolute -top-1 -left-1 w-5 h-5 bg-black rounded-full flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-bold leading-none">×</span>
                  </button>
                )}
              </motion.div>
              <span className="text-white text-[10px] font-medium text-center leading-tight drop-shadow-md max-w-[60px] truncate">
                {app.name}
              </span>
            </button>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Page dots */}
      <div className="absolute bottom-24 inset-x-0 flex justify-center gap-1.5">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={cn(
              'rounded-full transition-all duration-200',
              i === currentPage ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'
            )}
          />
        ))}
      </div>
    </div>
  );
}
