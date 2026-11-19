'use client';

import { useStore } from '@/store';
import { AppIconImage } from '@/components/shared/AppIconImage';
import type { AppConfig } from '@/types/app';
import { useTranslation } from '@/hooks/useTranslation';

interface IPadDockProps {
  onOpenApp: (app: AppConfig) => void;
}

export function IPadDock({ onOpenApp }: IPadDockProps) {
  const dockAppIds = useStore((s) => s.dockAppIds);
  const apps = useStore((s) => s.apps);
  const runningAppIds = useStore((s) => s.runningAppIds);
  const windows = useStore((s) => s.windows);
  const launchApp = useStore((s) => s.launchApp);
  const { getAppName } = useTranslation();

  const allApps = Object.values(apps).filter((a) => !a.disabled);
  const dockApps = (
    dockAppIds.length > 0
      ? dockAppIds.map((id) => apps[id]).filter(Boolean)
      : allApps.slice(0, 6)
  ) as AppConfig[];

  const handleClick = (app: AppConfig) => {
    if (onOpenApp) {
      onOpenApp(app);
    } else {
      launchApp(app);
    }
  };

  return (
    <div
      className="rounded-3xl px-6 py-2.5 flex items-center justify-around gap-4"
      style={{
        background: 'rgba(255, 255, 255, 0.22)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        boxShadow: '0 2px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25)',
      }}
    >
      {dockApps.map((app) => {
        const isRunning = runningAppIds.includes(app.id);
        const hasMinimized = Object.values(windows).some(
          (w) => w.appId === app.id && w.isMinimized
        );

        return (
          <button
            key={app.id}
            onClick={() => handleClick(app)}
            className="relative flex flex-col items-center justify-center transition-transform active:scale-95 group cursor-pointer"
            aria-label={getAppName(app.id, app.name)}
          >
            <AppIconImage appConfig={app} size={64} />
            {/* Running indicator dot */}
            {isRunning && !hasMinimized && (
              <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
            )}
            {hasMinimized && (
              <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_1px_2px_rgba(0,0,0,0.3)] border border-white/20" />
            )}
          </button>
        );
      })}
    </div>
  );
}
