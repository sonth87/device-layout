'use client';

import { useState, useEffect, startTransition } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '@/store';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';
import { cn } from '@/lib/utils';
import type { AppConfig } from '@/types/app';
import { useTranslation } from '@/hooks/useTranslation';

interface AppSwitcherProps {
  open: boolean;
  onClose: () => void;
}

export function AppSwitcher({ open, onClose }: AppSwitcherProps) {
  const apps = useStore((s) => s.apps);
  const runningAppIds = useStore((s) => s.runningAppIds);
  const launchApp = useStore((s) => s.launchApp);
  const dockAppIds = useStore((s) => s.dockAppIds);
  const { getAppName } = useTranslation();

  // All pinned + running apps
  const switcherAppIds = Array.from(new Set([...runningAppIds, ...dockAppIds]));
  const switcherApps = switcherAppIds.map((id) => apps[id]).filter(Boolean) as AppConfig[];

  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (!open) return;
    startTransition(() => {
      setSelectedIdx(0);
    });

    const handler = (e: KeyboardEvent) => {
      if (!e.metaKey && !e.ctrlKey) { onClose(); return; }
      if (e.key === 'Tab') {
        e.preventDefault();
        setSelectedIdx((i) => e.shiftKey
          ? (i - 1 + switcherApps.length) % switcherApps.length
          : (i + 1) % switcherApps.length
        );
      }
      if (e.key === 'Escape') { onClose(); }
    };

    const upHandler = (e: KeyboardEvent) => {
      if (e.key === 'Meta' || e.key === 'Control') {
        // Commit selection on Meta/Ctrl release
        const app = switcherApps[selectedIdx];
        if (app) {
          launchApp(app);
        }
        onClose();
      }
    };

    window.addEventListener('keydown', handler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', handler);
      window.removeEventListener('keyup', upHandler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, switcherApps.length, selectedIdx]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.12 } }}
          transition={{ type: 'spring', stiffness: 600, damping: 40 }}
          className="fixed z-[9995] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <LiquidGlass variant="panel" className="px-4 py-3">
            <div className="flex items-end gap-3">
              {switcherApps.map((app, i) => (
                <button
                  key={app.id}
                  onClick={() => {
                    launchApp(app);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIdx(i)}
                  className="flex flex-col items-center gap-2 p-2 rounded-xl transition-colors"
                >
                  <motion.div
                    animate={{ scale: i === selectedIdx ? 1.15 : 1 }}
                    transition={{ type: 'spring', stiffness: 600, damping: 30 }}
                  >
                    <AppIconImage appConfig={app} size={52} />
                  </motion.div>
                  <span className={cn(
                    'text-[11px] font-medium truncate max-w-[60px] text-center',
                    i === selectedIdx ? 'text-white' : 'text-white/70'
                  )}>
                    {getAppName(app.id, app.name)}
                  </span>
                </button>
              ))}
            </div>
            {switcherApps[selectedIdx] && (
              <p className="text-center text-white/80 text-xs mt-1">
                {getAppName(switcherApps[selectedIdx].id, switcherApps[selectedIdx].name)}
              </p>
            )}
          </LiquidGlass>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
