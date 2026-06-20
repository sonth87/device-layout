'use client';

import { useState, useEffect, useRef, useCallback, startTransition } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';
import { useStore } from '@/store';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { cn } from '@/lib/utils';
import type { AppConfig } from '@/types/app';
import { useTranslation } from '@/hooks/useTranslation';

interface SpotlightProps {
  open: boolean;
  onClose: () => void;
}

interface Result {
  type: 'app' | 'action';
  label: string;
  subtitle?: string;
  app?: AppConfig;
  action?: () => void;
}

export function Spotlight({ open, onClose }: SpotlightProps) {
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const apps = useStore((s) => s.apps);
  const launchApp = useStore((s) => s.launchApp);
  const { t, getAppName } = useTranslation();

  // Focus input when opened
  useEffect(() => {
    if (open) {
      startTransition(() => {
        setQuery('');
        setSelectedIdx(0);
      });
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleOpenApp = useCallback((app: AppConfig) => {
    launchApp(app);
    onClose();
  }, [launchApp, onClose]);

  const appList = Object.values(apps).filter((a) => !a.disabled);

  const results: Result[] = query.trim()
    ? appList
        .filter((a) => getAppName(a.id, a.name).toLowerCase().includes(query.toLowerCase()))
        .map((a) => ({
          type: 'app' as const,
          label: getAppName(a.id, a.name),
          subtitle: a.category ?? 'Application',
          app: a,
        }))
    : appList.slice(0, 8).map((a) => ({
        type: 'app' as const,
        label: getAppName(a.id, a.name),
        subtitle: 'Application',
        app: a,
      }));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIdx((i) => Math.min(i + 1, results.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIdx((i) => Math.max(i - 1, 0)); }
    if (e.key === 'Enter' && results[selectedIdx]?.app) {
      handleOpenApp(results[selectedIdx].app!);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9990] bg-black/30 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: -10 }}
            transition={{ type: 'spring', stiffness: 600, damping: 40 }}
            className="fixed z-[9991] left-1/2 top-[18%] -translate-x-1/2 w-[640px] max-w-[95vw]"
          >
            <LiquidGlass variant="window" className="overflow-hidden shadow-2xl">
              {/* Search input row */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-black/10 dark:border-white/10">
                <Search className="w-5 h-5 text-black/40 dark:text-white/40 shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelectedIdx(0); }}
                  onKeyDown={handleKeyDown}
                  placeholder={t.search}
                  className="flex-1 bg-transparent text-[17px] font-light outline-none placeholder:text-black/30 dark:placeholder:text-white/30"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Results */}
              {results.length > 0 && (
                <div className="max-h-80 overflow-y-auto py-1">
                  {results.length > 0 && (
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/30 px-4 pt-2 pb-1">
                      {query ? t.search : t.applications}
                    </p>
                  )}
                  {results.map((r, i) => (
                    <button
                      key={r.label + i}
                      onClick={() => r.app && handleOpenApp(r.app)}
                      onMouseEnter={() => setSelectedIdx(i)}
                      className={cn(
                        'flex items-center gap-3 w-full px-4 py-2 text-left transition-colors',
                        i === selectedIdx
                          ? 'bg-blue-500 text-white'
                          : 'hover:bg-black/5 dark:hover:bg-white/5'
                      )}
                    >
                      {r.app && (
                        <AppIconImage appConfig={r.app} size={32} />
                      )}
                      <div>
                        <p className={cn('text-[13px] font-medium', i === selectedIdx ? 'text-white' : '')}>{r.label}</p>
                        {r.subtitle && (
                          <p className={cn('text-[11px]', i === selectedIdx ? 'text-white/70' : 'text-black/40 dark:text-white/40')}>
                            {r.subtitle}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {query && results.length === 0 && (
                <div className="py-8 text-center text-black/40 dark:text-white/40 text-sm">
                  No results for &ldquo;{query}&rdquo;
                </div>
              )}
            </LiquidGlass>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
