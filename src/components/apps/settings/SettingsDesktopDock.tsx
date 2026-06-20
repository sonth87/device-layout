'use client';

import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { useTranslation } from '@/hooks/useTranslation';

export function SettingsDesktopDock() {
  const dockAppIds  = useStore((s) => s.dockAppIds);
  const apps        = useStore((s) => s.apps);
  const pinToDock   = useStore((s) => s.pinToDock);
  const unpinFromDock = useStore((s) => s.unpinFromDock);
  const { t } = useTranslation();

  const allApps = Object.values(apps).filter((a) => !a.disabled);

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-sm font-semibold mb-1">{t.dockApps}</h3>
        <p className="text-xs text-black/40 dark:text-white/40 mb-3">
          {t.dockAppsDesc}
        </p>
        <div className="space-y-1.5">
          {allApps.map((app) => {
            const pinned = dockAppIds.includes(app.id);
            return (
              <div
                key={app.id}
                className="flex items-center justify-between rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-2.5"
              >
                <div className="flex items-center gap-3">
                  <AppIconImage appConfig={app} size={32} />
                  <span className="text-sm font-medium">{app.name}</span>
                </div>
                <button
                  onClick={() => pinned ? unpinFromDock(app.id) : pinToDock(app.id)}
                  className={cn(
                    'relative h-6 w-11 shrink-0 rounded-full transition-colors',
                    pinned ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-white/15'
                  )}
                >
                  <span className={cn(
                    'absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all',
                    pinned ? 'left-5.5' : 'left-0.5'
                  )} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
