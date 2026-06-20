'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';
import { useStore } from '@/store';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { cn } from '@/lib/utils';
import type { AppConfig } from '@/types/app';
import { useTranslation } from '@/hooks/useTranslation';

interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
  onOpenApp: (app: AppConfig) => void;
}

export function AndroidAppDrawer({ open, onClose, onOpenApp }: AppDrawerProps) {
  const [search, setSearch] = useState('');
  const apps = useStore((s) => s.apps);
  const { t, getAppName } = useTranslation();

  const allApps = Object.values(apps).filter((a) => !a.disabled) as AppConfig[];
  const filtered = search
    ? allApps.filter((a) => getAppName(a.id, a.name).toLowerCase().includes(search.toLowerCase()))
    : allApps;

  const handle = (app: AppConfig) => { onOpenApp(app); onClose(); };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-9980 bg-black"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => { if (info.offset.y > 100) onClose(); }}
            className="absolute bottom-0 inset-x-0 z-9981 bg-neutral-900/96 backdrop-blur-3xl rounded-t-3xl max-h-[85%] flex flex-col overflow-hidden"
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 bg-white/30 rounded-full" />
            </div>

            {/* Search */}
            <div className="px-4 py-2">
              <div className="flex items-center gap-2.5 bg-white/10 rounded-2xl px-3 py-2.5">
                <Search className="w-4 h-4 text-white/50 shrink-0" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t.search}
                  className="flex-1 bg-transparent text-[13px] text-white placeholder:text-white/40 outline-none"
                />
                {search && <button onClick={() => setSearch('')}><X className="w-3.5 h-3.5 text-white/40" /></button>}
              </div>
            </div>

            {/* Apps grid */}
            <div className="flex-1 overflow-y-auto px-4 pb-8">
              <div className="grid grid-cols-4 gap-y-5 gap-x-2 py-4">
                {filtered.map((app) => (
                  <button
                    key={app.id}
                    onClick={() => handle(app)}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-14 h-14 rounded-2xl overflow-hidden">
                      <AppIconImage appConfig={app} size={56} />
                    </div>
                    <span className="text-white/80 text-[10px] text-center leading-tight max-w-[60px] truncate">
                      {getAppName(app.id, app.name)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
