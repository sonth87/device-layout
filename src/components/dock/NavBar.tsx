'use client';

import { useStore } from '@/store';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { AppConfig } from '@/types/app';

interface NavBarProps {
  onOpenApp: (app: AppConfig) => void;
}

/** Bottom navigation bar — used by iPhone OS and Android themes */
export function NavBar({ onOpenApp }: NavBarProps) {
  const dockAppIds = useStore((s) => s.dockAppIds).slice(0, 4); // Max 4 on mobile
  const apps = useStore((s) => s.apps);
  const runningAppIds = useStore((s) => s.runningAppIds);

  const navApps = dockAppIds.map((id) => apps[id]).filter(Boolean) as AppConfig[];

  return (
    <div
      className="absolute bottom-0 inset-x-0 z-50 flex items-center justify-around h-(--navbar-height) px-4 pb-safe"
      style={{
        background: 'var(--navbar-bg)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255,255,255,0.15)',
      }}
    >
      {navApps.map((app) => (
        <button
          key={app.id}
          onClick={() => onOpenApp(app)}
          className={cn(
            'flex flex-col items-center gap-1 p-2 rounded-xl transition-opacity',
            runningAppIds.includes(app.id) ? 'opacity-100' : 'opacity-70'
          )}
          aria-label={app.name}
        >
          {app.icon.startsWith('/') ? (
            <Image src={app.icon} alt={app.name} width={28} height={28} className="object-contain" />
          ) : (
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">{app.name.charAt(0)}</span>
            </div>
          )}
          <span className="text-[10px] text-white/80">{app.name}</span>
        </button>
      ))}
    </div>
  );
}
