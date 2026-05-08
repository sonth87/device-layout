'use client';

import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { AppConfig } from '@/types/app';

interface TaskbarProps {
  onOpenApp: (app: AppConfig) => void;
}

export function Taskbar({ onOpenApp }: TaskbarProps) {
  const dockAppIds = useStore((s) => s.dockAppIds);
  const apps = useStore((s) => s.apps);
  const runningAppIds = useStore((s) => s.runningAppIds);
  const windows = useStore((s) => s.windows);
  const focusWindow = useStore((s) => s.focusWindow);

  const dockApps = dockAppIds.map((id) => apps[id]).filter(Boolean) as AppConfig[];

  // Running apps that have open windows
  const runningWindows = Object.values(windows);

  const handleClick = (app: AppConfig) => {
    const openWin = runningWindows.find((w) => w.appId === app.id);
    if (openWin) {
      focusWindow(openWin.id);
    } else {
      onOpenApp(app);
    }
  };

  return (
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
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/10 transition-colors">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <rect x="3" y="3" width="8" height="8" rx="1" className="fill-blue-400"/>
            <rect x="13" y="3" width="8" height="8" rx="1" className="fill-blue-500"/>
            <rect x="3" y="13" width="8" height="8" rx="1" className="fill-blue-500"/>
            <rect x="13" y="13" width="8" height="8" rx="1" className="fill-blue-400"/>
          </svg>
        </button>
      </div>

      {/* Pinned apps — centered */}
      <div className="flex items-center gap-1">
        {dockApps.map((app) => {
          const isRunning = runningAppIds.includes(app.id);
          return (
            <button
              key={app.id}
              onClick={() => handleClick(app)}
              className={cn(
                'w-10 h-10 flex items-center justify-center rounded-lg transition-colors relative',
                'hover:bg-white/10 active:bg-white/20',
                isRunning && 'bg-white/10'
              )}
              aria-label={app.name}
              title={app.name}
            >
              {app.icon.startsWith('/') ? (
                <Image src={app.icon} alt={app.name} width={28} height={28} className="object-contain" />
              ) : (
                <div className="w-7 h-7 rounded-md bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{app.name.charAt(0)}</span>
                </div>
              )}
              {/* Running indicator */}
              {isRunning && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-(--win-accent)" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
