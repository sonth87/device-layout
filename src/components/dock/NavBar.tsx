'use client';

import { useStore } from '@/store';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { cn } from '@/lib/utils';
import type { AppConfig } from '@/types/app';

interface NavBarProps {
  onOpenApp: (app: AppConfig) => void;
  /** Height in px of the nav bar row (does not include home indicator) */
  navBarHeight?: number;
}

/** Bottom dock — used by iPhone OS and Android themes */
export function NavBar({ onOpenApp, navBarHeight = 72 }: NavBarProps) {
  const dockAppIds = useStore((s) => s.dockAppIds).slice(0, 4);
  const apps = useStore((s) => s.apps);
  const runningAppIds = useStore((s) => s.runningAppIds);

  const navApps = dockAppIds.map((id) => apps[id]).filter(Boolean) as AppConfig[];

  return (
    <div
      className="flex items-center justify-around px-6"
      style={{
        height: navBarHeight,
        background: 'rgba(255,255,255,0.18)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      }}
    >
      {navApps.map((app) => (
        <button
          key={app.id}
          onClick={() => onOpenApp(app)}
          className={cn(
            'flex items-center justify-center transition-opacity active:scale-95',
            runningAppIds.includes(app.id) ? 'opacity-100' : 'opacity-90'
          )}
          aria-label={app.name}
        >
          <AppIconImage appConfig={app} size={52} />
        </button>
      ))}
    </div>
  );
}
