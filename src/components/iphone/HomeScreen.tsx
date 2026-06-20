'use client';

import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '@/store';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import { cn } from '@/lib/utils';
import type { AppConfig } from '@/types/app';
import { useTranslation } from '@/hooks/useTranslation';

interface HomeScreenProps {
  onOpenApp: (app: AppConfig) => void;
  statusBarHeight: number;
  navBarHeight: number;
  homeIndicatorHeight: number;
}

const COLS = 4;
const ROWS = 6;
const PAGE_SIZE = COLS * ROWS;
const LONG_PRESS_MS = 600;

export function IPhoneHomeScreen({ onOpenApp, statusBarHeight, navBarHeight, homeIndicatorHeight }: HomeScreenProps) {
  const apps = useStore((s) => s.apps);
  const [currentPage, setCurrentPage] = useState(0);
  const [jiggling, setJiggling] = useState(false);

  const appList = Object.values(apps).filter((a) => !a.disabled);

  const pages: AppConfig[][] = [];
  for (let i = 0; i < appList.length; i += PAGE_SIZE) {
    pages.push(appList.slice(i, i + PAGE_SIZE));
  }
  const totalPages = Math.max(1, pages.length);

  const goLeft = useCallback(() => setCurrentPage((p) => Math.max(0, p - 1)), []);
  const goRight = useCallback(() => {
    if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
  }, [currentPage, totalPages]);

  useSwipeGesture({ onSwipeLeft: goRight, onSwipeRight: goLeft, threshold: 60 });

  const currentApps = pages[currentPage] ?? [];

  // Long-press to enter jiggle mode
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onBgPointerDown = () => {
    longPressTimer.current = setTimeout(() => setJiggling(true), LONG_PRESS_MS);
  };
  const onBgPointerUp = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
  };

  // Tap outside icons while jiggling → exit jiggle
  const onBgClick = () => {
    if (jiggling) setJiggling(false);
  };

  // Extra 32px below icon grid so last row doesn't hide under page dots
  const bottomPad = navBarHeight + homeIndicatorHeight + 32;

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ paddingTop: statusBarHeight + 12, paddingBottom: bottomPad }}
      onPointerDown={onBgPointerDown}
      onPointerUp={onBgPointerUp}
      onPointerCancel={onBgPointerUp}
      onClick={onBgClick}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: currentPage > 0 ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: currentPage > 0 ? -60 : 60 }}
          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          className="grid h-full content-start px-4"
          style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gap: '16px 8px' }}
        >
          {currentApps.map((app, i) => (
            <AppIcon
              key={app.id}
              app={app}
              index={i}
              jiggling={jiggling}
              onOpen={onOpenApp}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Page dots — sit just above the dock */}
      <div
        className="absolute inset-x-0 flex justify-center items-center gap-1.5"
        style={{ bottom: navBarHeight + homeIndicatorHeight + 6, height: 16 }}
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrentPage(i); }}
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

interface AppIconProps {
  app: AppConfig;
  index: number;
  jiggling: boolean;
  onOpen: (app: AppConfig) => void;
}

function AppIcon({ app, index, jiggling, onOpen }: AppIconProps) {
  const { getAppName } = useTranslation();
  const displayName = getAppName(app.id, app.name);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const didLongPress = useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    didLongPress.current = false;
    longPressTimer.current = setTimeout(() => {
      didLongPress.current = true;
    }, LONG_PRESS_MS);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    e.stopPropagation();
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (didLongPress.current || jiggling) return;
    onOpen(app);
  };

  return (
    <button
      className="flex flex-col items-center gap-1.5 select-none"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={handleClick}
    >
      <motion.div
        animate={jiggling ? {
          rotate: [0, -2, 2, -2, 2, 0],
          transition: { repeat: Infinity, duration: 0.4, delay: (index % 5) * 0.05 }
        } : { rotate: 0 }}
        className="relative"
      >
        <AppIconImage appConfig={app} size={60} />
        {jiggling && (
          <button
            onClick={(e) => e.stopPropagation()}
            className="absolute -top-1 -left-1 w-5 h-5 bg-black/80 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-xs font-bold leading-none">×</span>
          </button>
        )}
      </motion.div>
      <span className="text-white text-[11px] font-medium text-center leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] max-w-[64px] truncate">
        {displayName}
      </span>
    </button>
  );
}
