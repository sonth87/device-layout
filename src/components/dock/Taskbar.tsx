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
import { AppIconImage } from '@/components/shared/AppIconImage';

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
  const restoreWindow = useStore((s) => s.restoreWindow);
  const focusWindow = useStore((s) => s.focusWindow);
  const windows = useStore((s) => s.windows);
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
          borderTop: '1px solid var(--taskbar-border)',
        }}
      >
        {/* Center Taskbar Group */}
        <div className="flex items-center gap-1.5">
          {/* Start button */}
          <button
            onClick={() => { setStartMenuOpen((v) => !v); setSystemTrayOpen(false); }}
            className={cn(
              'w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20 transition-colors',
              startMenuOpen && 'bg-black/10 dark:bg-white/15'
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

          {/* Search Button */}
          <button
            onClick={() => { setStartMenuOpen((v) => !v); setSystemTrayOpen(false); }}
            className={cn(
              'w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20 transition-colors',
              startMenuOpen && 'bg-black/10 dark:bg-white/15'
            )}
            title="Search"
          >
            <Search className="w-4 h-4 text-black/70 dark:text-white/80" />
          </button>

          {/* App Icons with Hover Previews */}
          {dockApps.map((app) => {
            const isRunning = runningAppIds.includes(app.id);
            const displayName = getAppName(app.id, app.name);
            const appWindows = Object.values(windows).filter((w) => w.appId === app.id);

            return (
              <div key={app.id} className="relative group/taskitem flex items-center justify-center">
                <button
                  onClick={() => handleClick(app)}
                  className={cn(
                    'w-10 h-10 flex items-center justify-center rounded-lg transition-colors relative',
                    'hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20',
                    isRunning && 'bg-black/5 dark:bg-white/10'
                  )}
                  aria-label={displayName}
                  title={displayName}
                >
                  <AppIconImage appConfig={app} size={28} />
                  {isRunning && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-(--win-accent)" />
                  )}
                </button>

                {/* Hover Window Previews */}
                {appWindows.length > 0 && (
                  <div className="hidden group-hover/taskitem:flex absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 bg-[#f3f3f3]/95 dark:bg-[#1f242b]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 p-2 rounded-xl shadow-2xl z-50 flex flex-col gap-1.5 w-40 pointer-events-auto select-none">
                    {appWindows.map((win) => (
                      <div
                        key={win.id}
                        onClick={() => {
                          restoreWindow(win.id);
                          focusWindow(win.id);
                        }}
                        className="flex flex-col gap-1.5 w-full text-left"
                      >
                        {/* Title bar */}
                        <div className="flex items-center gap-1.5 px-1 pb-1 border-b border-black/5 dark:border-white/5 text-[10px] text-black/80 dark:text-white/80 font-semibold truncate">
                          <AppIconImage appConfig={app} size={14} />
                          <span className="truncate">{win.title}</span>
                        </div>
                        {/* Mock window body */}
                        <div
                          className={cn(
                            "h-20 rounded-md overflow-hidden flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90 shadow-inner border border-black/5 dark:border-white/5",
                            app.id === 'terminal' ? 'bg-black text-[6px] text-green-400 font-mono p-1.5 justify-start items-start' :
                            app.id === 'settings' ? 'bg-slate-200 dark:bg-neutral-800 p-1 flex gap-1' :
                            'bg-gradient-to-br from-blue-500 to-indigo-600'
                          )}
                        >
                          {app.id === 'terminal' ? (
                            <div>
                              <p>Microsoft Windows [Version 10.0.22631]</p>
                              <p className="mt-1">C:\Users\User&gt;_</p>
                            </div>
                          ) : app.id === 'settings' ? (
                            <>
                              <div className="w-1/3 h-full bg-black/5 dark:bg-white/5 rounded-sm" />
                              <div className="flex-1 h-full bg-black/10 dark:bg-white/10 rounded-sm" />
                            </>
                          ) : (
                            <AppIconImage appConfig={app} size={28} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right side: clock + system tray */}
        <div className="absolute right-2 flex items-center">
          <button
            onClick={() => { setSystemTrayOpen((v) => !v); setStartMenuOpen(false); }}
            className={cn(
              'px-2 h-8 flex items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors',
              systemTrayOpen && 'bg-black/10 dark:bg-white/15'
            )}
            title="System tray"
          >
            <span className="text-xs text-black/80 dark:text-white/80 tabular-nums"><MenuBarClock /></span>
          </button>
        </div>
      </div>
    </>
  );
}
