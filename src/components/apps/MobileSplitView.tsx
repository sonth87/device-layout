'use client';

import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '@/store';
import { useAppViewport } from './AppViewport';
import { useHideMobileAppHeader } from '@/components/mobile/MobileAppViewer';

// Context so detail panels can access the back handler without prop drilling
const MobileSplitBackContext = createContext<(() => void) | null>(null);

export function useMobileSplitBack() {
  return useContext(MobileSplitBackContext);
}

/**
 * Reusable hook for master-detail split views.
 * Automatically clears the selection on mobile/mockup screens (so it shows the list menu)
 * and defaults to defaultValue on desktop/large screens.
 */
export function useSplitViewSelection<T>(defaultValue: T) {
  const osTheme = useStore((s) => s.osTheme);
  const isMobileOS = osTheme === 'iphone' || osTheme === 'android';

  const [selectedId, setSelectedId] = useState<T | null>(() => {
    return isMobileOS ? null : defaultValue;
  });
  const { width } = useAppViewport();
  const isMobile = width > 0 && width < 480;
  const lastIsMobile = useRef<boolean | null>(isMobileOS);

  useEffect(() => {
    if (width === 0) return;
    if (lastIsMobile.current !== isMobile) {
      const targetId = isMobile ? null : defaultValue;
      requestAnimationFrame(() => {
        setSelectedId(targetId);
      });
      lastIsMobile.current = isMobile;
    }
  }, [width, isMobile, defaultValue]);

  return [selectedId, setSelectedId] as const;
}

interface MobileSplitViewProps {
  list: ReactNode;
  detail: ReactNode | null;
  onBack: () => void;
  detailTitle?: string;
  className?: string;
  listClassName?: string;
  detailClassName?: string;
  sidebarWidth?: string;
}

const SLIDE = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { type: 'spring' as const, stiffness: 420, damping: 40 },
};

export function MobileSplitView({
  list,
  detail,
  onBack,
  className = '',
  listClassName = '',
  detailClassName = '',
  sidebarWidth = 'w-60',
}: MobileSplitViewProps) {
  const osTheme = useStore((s) => s.osTheme);
  const isMobileOS = osTheme === 'iphone' || osTheme === 'android';

  const { width } = useAppViewport();
  const isMobile = (width > 0 && width < 480) || (width === 0 && isMobileOS);
  const hideAppHeader = useHideMobileAppHeader();

  // Tell MobileAppViewer to hide its own header bar when we're showing detail
  useEffect(() => {
    if (!isMobile || !hideAppHeader) return;
    hideAppHeader(detail !== null);
    return () => hideAppHeader(false);
  }, [isMobile, detail, hideAppHeader]);

  if (!isMobile) {
    return (
      <div className={`flex h-full ${className}`}>
        <aside className={`${sidebarWidth} shrink-0 border-r border-black/10 dark:border-white/10 overflow-y-auto ${listClassName}`}>
          {list}
        </aside>
        <main className={`flex-1 min-w-0 ${detailClassName}`}>
          {detail ?? (
            <div className="flex h-full items-center justify-center text-sm text-black/30 dark:text-white/30">
              Select an item
            </div>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className={`relative h-full overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${listClassName}`}>
        {list}
      </div>

      <AnimatePresence>
        {detail !== null && (
          <motion.div
            key="detail"
            {...SLIDE}
            className={`absolute inset-0 bg-white dark:bg-[#0F1115] ${detailClassName}`}
          >
            <MobileSplitBackContext.Provider value={onBack}>
              {detail}
            </MobileSplitBackContext.Provider>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
