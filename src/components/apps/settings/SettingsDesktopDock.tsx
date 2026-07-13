'use client';

import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { useTranslation } from '@/hooks/useTranslation';

// Magnification is a multiplier on top of Size (0 = "Off", up to ~1.4x at
// "Large"). DOCK_SIZE_MIN=12 goes below macOS's real range (~16px) — user
// wants the option to shrink the dock to a thin strip.
const DOCK_SIZE_MIN = 12;
const DOCK_SIZE_MAX = 64;
const DOCK_MAGNIFICATION_MAX = 1.4;

const SLIDER_CLS = 'w-full h-1 accent-red-500';

export function SettingsDesktopDock() {
  const dockAppIds  = useStore((s) => s.dockAppIds);
  const apps        = useStore((s) => s.apps);
  const pinToDock   = useStore((s) => s.pinToDock);
  const unpinFromDock = useStore((s) => s.unpinFromDock);
  const dockSize = useStore((s) => s.dockSize);
  const setDockSize = useStore((s) => s.setDockSize);
  const dockMagnification = useStore((s) => s.dockMagnification);
  const setDockMagnification = useStore((s) => s.setDockMagnification);
  const dockAutoHide = useStore((s) => s.dockAutoHide);
  const showOpenAppIndicators = useStore((s) => s.showOpenAppIndicators);
  const setDockAutoHide = useStore((s) => s.setDockAutoHide);
  const setShowOpenAppIndicators = useStore((s) => s.setShowOpenAppIndicators);
  const { t } = useTranslation();

  const allApps = Object.values(apps).filter((a) => !a.disabled);

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-sm font-semibold text-black/90 dark:text-white/90 mb-3">{t.desktopDock}</h3>
        <div className="rounded-card bg-white dark:bg-white/5 px-4 py-3 space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between text-xs text-black/50 dark:text-white/50 mb-1.5">
                <span>{t.dockSize}</span>
              </div>
              <input
                type="range"
                min={DOCK_SIZE_MIN}
                max={DOCK_SIZE_MAX}
                value={dockSize}
                onChange={(e) => setDockSize(+e.target.value)}
                className={SLIDER_CLS}
              />
            </div>
            <div>
              <div className="flex items-center justify-between text-xs text-black/50 dark:text-white/50 mb-1.5">
                <span>{t.dockMagnification}</span>
                <span className="text-black/30 dark:text-white/30">
                  {dockMagnification === 0 ? t.dockMagnificationOff : ''}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={DOCK_MAGNIFICATION_MAX}
                step={0.05}
                value={dockMagnification}
                onChange={(e) => setDockMagnification(+e.target.value)}
                className={SLIDER_CLS}
              />
            </div>
          </div>

          <div className="h-px bg-black/5 dark:bg-white/5 -mx-4" />

          {/* Switch 1: Auto Hide */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-black/80 dark:text-white/80">Automatically hide and show the Dock</span>
            <button
              onClick={() => setDockAutoHide(!dockAutoHide)}
              className={cn(
                'relative h-5 w-9 shrink-0 rounded-full transition-colors',
                dockAutoHide ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-white/15'
              )}
            >
              <span className={cn(
                'absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all',
                dockAutoHide ? 'left-4.5' : 'left-0.5'
              )} />
            </button>
          </div>

          <div className="h-px bg-black/5 dark:bg-white/5 -mx-4" />

          {/* Switch 2: Show Indicators */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-black/80 dark:text-white/80">Show indicators for open applications</span>
            <button
              onClick={() => setShowOpenAppIndicators(!showOpenAppIndicators)}
              className={cn(
                'relative h-5 w-9 shrink-0 rounded-full transition-colors',
                showOpenAppIndicators ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-white/15'
              )}
            >
              <span className={cn(
                'absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all',
                showOpenAppIndicators ? 'left-4.5' : 'left-0.5'
              )} />
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-black/90 dark:text-white/90 mb-1">{t.dockApps}</h3>
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
                  <span className="text-sm font-medium text-black/90 dark:text-white/90">{app.name}</span>
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
