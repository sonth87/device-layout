'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Power, User } from 'lucide-react';
import { useStore } from '@/store';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { cn } from '@/lib/utils';
import type { AppConfig } from '@/types/app';
import { useTranslation } from '@/hooks/useTranslation';

interface StartMenuProps {
  open: boolean;
  onClose: () => void;
  onOpenApp: (app: AppConfig) => void;
}

const RECOMMENDED = [
  { label: 'Welcome.txt', subtitle: 'Just now', icon: '📄' },
  { label: 'System Settings', subtitle: '5 minutes ago', icon: '⚙️' },
  { label: 'README.md', subtitle: 'Today', icon: '📝' },
];

export function StartMenu({ open, onClose, onOpenApp }: StartMenuProps) {
  const [search, setSearch] = useState('');
  const apps = useStore((s) => s.apps);
  const dockAppIds = useStore((s) => s.dockAppIds);
  const { t, getAppName } = useTranslation();

  const pinnedApps = dockAppIds.map((id) => apps[id]).filter(Boolean) as AppConfig[];
  const allApps = Object.values(apps).filter((a) => !a.disabled) as AppConfig[];
  const filteredApps = search
    ? allApps.filter((a) => getAppName(a.id, a.name).toLowerCase().includes(search.toLowerCase()))
    : [];

  const handleApp = (app: AppConfig) => {
    onOpenApp(app);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9980]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 500, damping: 38 }}
            className="fixed z-[9981] bottom-12 left-1/2 -translate-x-1/2 w-[640px] max-w-[95vw] bg-neutral-900/95 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
            style={{ maxHeight: '480px' }}
          >
            {/* Search bar */}
            <div className="px-6 pt-5 pb-3">
              <div className="flex items-center gap-2.5 bg-white/10 rounded-xl px-3.5 py-2.5 border border-white/15">
                <Search className="w-4 h-4 text-white/50 shrink-0" />
                <input
                  autoFocus
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for apps, files, settings"
                  className="flex-1 bg-transparent text-[13px] text-white placeholder:text-white/40 outline-none"
                />
              </div>
            </div>

            {search ? (
              /* Search results */
              <div className="px-4 pb-4 overflow-y-auto max-h-72">
                {filteredApps.length === 0 ? (
                  <p className="text-center text-white/40 text-sm py-6">No results for &ldquo;{search}&rdquo;</p>
                ) : (
                  filteredApps.map((app) => (
                    <button
                      key={app.id}
                      onClick={() => handleApp(app)}
                      className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-white/10 transition-colors text-left"
                    >
                      <AppIconImage appConfig={app} size={32} />
                      <div>
                        <p className="text-[13px] text-white font-medium">{getAppName(app.id, app.name)}</p>
                        <p className="text-[11px] text-white/40">{app.category ?? 'Application'}</p>
                      </div>
                    </button>
                  ))
                )}
              </div>
            ) : (
              <>
                {/* Pinned apps */}
                <div className="px-6 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[12px] font-semibold text-white/60 uppercase tracking-widest">Pinned</h3>
                    <button className="text-[11px] text-white/40 hover:text-white/70 transition-colors">All apps →</button>
                  </div>
                  <div className="grid grid-cols-6 gap-1">
                    {pinnedApps.map((app) => (
                      <button
                        key={app.id}
                        onClick={() => handleApp(app)}
                        className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                      >
                        <AppIconImage appConfig={app} size={36} />
                        <span className="text-[10px] text-white/80 truncate w-full text-center leading-tight">{getAppName(app.id, app.name)}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recommended */}
                <div className="px-6 pb-3 border-t border-white/8">
                  <h3 className="text-[12px] font-semibold text-white/60 uppercase tracking-widest mt-3 mb-2">Recommended</h3>
                  <div className="grid grid-cols-3 gap-1">
                    {RECOMMENDED.map((item) => (
                      <button
                        key={item.label}
                        className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors text-left"
                      >
                        <span className="text-2xl w-8 text-center shrink-0">{item.icon}</span>
                        <div className="min-w-0">
                          <p className="text-[12px] text-white/90 font-medium truncate">{item.label}</p>
                          <p className="text-[10px] text-white/40 truncate">{item.subtitle}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Footer: User + Power */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-white/8 mt-auto">
              <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-[12px] text-white/80 font-medium">User</span>
              </button>
              <button
                className="p-2 rounded-xl hover:bg-white/10 transition-colors"
                title="Power"
              >
                <Power className="w-4.5 h-4.5 text-white/60" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
