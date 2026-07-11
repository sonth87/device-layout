'use client';

import { useState } from 'react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';
// Plain <img> instead of next/image: this file is imported by the library
// build (src/lib.tsx), which has no Next.js image-optimization server.
import { Search } from 'lucide-react';
import { MenuBarClock } from '@/components/menubar/MenuBarClock';
import { StartMenu } from '@/components/windows/StartMenu';
import { SystemTray } from '@/components/windows/SystemTray';
import type { AppConfig } from '@/types/app';
import { useTranslation } from '@/hooks/useTranslation';

interface TaskbarProps {
  onOpenApp: (app: AppConfig) => void;
}

export function Taskbar({ onOpenApp }: TaskbarProps) {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [systemTrayOpen, setSystemTrayOpen] = useState(false);

  const dockAppIds = useStore((s) => s.dockAppIds);
  const apps = useStore((s) => s.apps);
  const runningAppIds = useStore((s) => s.runningAppIds);
  const launchApp = useStore((s) => s.launchApp);
  const { t, getAppName } = useTranslation();

  const dockApps = dockAppIds.map((id) => apps[id]).filter(Boolean) as AppConfig[];
  const handleClick = (app: AppConfig) => {
    launchApp(app);
  };

  return (
    <>
      {/* Start Menu */}
      <StartMenu
        open={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        onOpenApp={(app) => { onOpenApp(app); setStartMenuOpen(false); }}
      />

      {/* System Tray Panel */}
      <SystemTray
        open={systemTrayOpen}
        onClose={() => setSystemTrayOpen(false)}
      />

      <div
        className="absolute bottom-0 inset-x-0 z-50 flex items-center justify-center h-(--taskbar-height)"
        style={{
          background: 'var(--taskbar-bg)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Start button */}
        <div className="absolute left-4 flex items-center gap-2">
          <button
            onClick={() => { setStartMenuOpen((v) => !v); setSystemTrayOpen(false); }}
            className={cn(
              'w-8 h-8 flex items-center justify-center rounded hover:bg-white/10 transition-colors',
              startMenuOpen && 'bg-white/15'
            )}
            title="Start"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <rect x="3" y="3" width="8" height="8" rx="1" className="fill-blue-400"/>
              <rect x="13" y="3" width="8" height="8" rx="1" className="fill-blue-500"/>
              <rect x="3" y="13" width="8" height="8" rx="1" className="fill-blue-500"/>
              <rect x="13" y="13" width="8" height="8" rx="1" className="fill-blue-400"/>
            </svg>
          </button>
          <button className="px-2 h-8 flex items-center gap-1.5 rounded hover:bg-white/10 transition-colors text-xs text-white/60">
            <Search className="w-3.5 h-3.5" />
            <span>{t.search}</span>
          </button>
        </div>

        {/* Pinned apps — centered */}
        <div className="flex items-center gap-1">
          {dockApps.map((app) => {
            const isRunning = runningAppIds.includes(app.id);
            const displayName = getAppName(app.id, app.name);
            return (
              <button
                key={app.id}
                onClick={() => handleClick(app)}
                className={cn(
                  'w-10 h-10 flex items-center justify-center rounded-lg transition-colors relative',
                  'hover:bg-white/10 active:bg-white/20',
                  isRunning && 'bg-white/10'
                )}
                aria-label={displayName}
                title={displayName}
              >
                {app.icon.startsWith('/') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={app.icon} alt={displayName} width={28} height={28} className="object-contain" />
                ) : (
                  <div className="w-7 h-7 rounded-md bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{displayName.charAt(0)}</span>
                  </div>
                )}
                {isRunning && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-(--win-accent)" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right side: clock + system tray */}
        <div className="absolute right-2 flex items-center">
          <button
            onClick={() => { setSystemTrayOpen((v) => !v); setStartMenuOpen(false); }}
            className={cn(
              'px-2 h-8 flex items-center rounded hover:bg-white/10 transition-colors',
              systemTrayOpen && 'bg-white/15'
            )}
            title="System tray"
          >
            <span className="text-xs text-white/80 tabular-nums"><MenuBarClock /></span>
          </button>
        </div>
      </div>
    </>
  );
}
