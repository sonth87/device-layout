'use client';

import { useStore } from '@/store';
import { useAssetBase, resolveAssetUrl } from '@/lib/asset-base';
import type { WallpaperConfig, WallpaperFitMode, WallpaperCycleInterval } from '@/types/desktop';

const FIT_MODE_LABELS: Record<WallpaperFitMode, string> = {
  fill: 'Fill Screen',
  fit: 'Fit to Screen',
  stretch: 'Stretch to Fill Screen',
  center: 'Center',
  tile: 'Tile',
};

const CYCLE_INTERVAL_LABELS: Record<WallpaperCycleInterval, string> = {
  '5m': 'Every 5 Minutes',
  '10m': 'Every 10 Minutes',
  '30m': 'Every 30 Minutes',
  '1h': 'Every Hour',
  '2h': 'Every 2 Hours',
  '5h': 'Every 5 Hours',
  '1d': 'Every Day',
};

const SELECT_CLS =
  'bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 ' +
  'text-black/80 dark:text-white/80 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none ' +
  'appearance-none cursor-pointer';

interface WallpaperDetailPanelProps {
  wallpaper: WallpaperConfig;
  cycleGroup: 'builtin' | 'custom';
  variant?: 'vertical' | 'horizontal';
}

export function WallpaperDetailPanel({ wallpaper, cycleGroup, variant = 'vertical' }: WallpaperDetailPanelProps) {
  const assetBase = useAssetBase();
  const fitMode = useStore((s) => s.wallpaperFitMode);
  const setWallpaperFitMode = useStore((s) => s.setWallpaperFitMode);
  const cycle = useStore((s) => s.wallpaperCycle);
  const setWallpaperCycle = useStore((s) => s.setWallpaperCycle);

  const previewUrl = wallpaper.kind !== 'color' ? resolveAssetUrl(assetBase, wallpaper.thumbnail ?? wallpaper.url ?? '') : null;
  const shuffleAppliesHere = cycle.group === cycleGroup;

  if (variant === 'vertical') {
    return (
      <div className="w-full space-y-4">
        {/* Preview */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
          {wallpaper.kind === 'color' ? (
            <div className="absolute inset-0" style={{ backgroundColor: wallpaper.colorHex }} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={previewUrl ?? undefined} alt={wallpaper.name} className="w-full h-full object-cover" />
          )}
        </div>

        {/* Controls */}
        <div className="space-y-3">
          {wallpaper.kind !== 'color' && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-black/60 dark:text-white/60">{wallpaper.name}</span>
              <div className="relative">
                <select
                  value={fitMode}
                  onChange={(e) => setWallpaperFitMode(e.target.value as WallpaperFitMode)}
                  className={SELECT_CLS}
                >
                  {(Object.keys(FIT_MODE_LABELS) as WallpaperFitMode[]).map((mode) => (
                    <option key={mode} value={mode} className="bg-white dark:bg-[#151821] text-black dark:text-white">
                      {FIT_MODE_LABELS[mode]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {wallpaper.kind !== 'color' && (
            <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
              <label className="flex items-center justify-between text-xs text-black/70 dark:text-white/70 select-none cursor-pointer">
                <span>Shuffle</span>
                <input
                  type="checkbox"
                  checked={shuffleAppliesHere && cycle.enabled}
                  onChange={(e) =>
                    setWallpaperCycle({ enabled: e.target.checked, group: cycleGroup })
                  }
                  className="accent-blue-500 w-3.5 h-3.5 cursor-pointer"
                />
              </label>

              {shuffleAppliesHere && cycle.enabled && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-black/50 dark:text-white/50">Interval</span>
                    <select
                      value={cycle.interval}
                      onChange={(e) => setWallpaperCycle({ interval: e.target.value as WallpaperCycleInterval })}
                      className={SELECT_CLS}
                    >
                      {(Object.keys(CYCLE_INTERVAL_LABELS) as WallpaperCycleInterval[]).map((interval) => (
                        <option key={interval} value={interval} className="bg-white dark:bg-[#151821] text-black dark:text-white">
                          {CYCLE_INTERVAL_LABELS[interval]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className="flex items-center justify-between text-[11px] text-black/50 dark:text-white/50 select-none cursor-pointer">
                    <span>Randomly</span>
                    <input
                      type="checkbox"
                      checked={cycle.randomOrder}
                      onChange={(e) => setWallpaperCycle({ randomOrder: e.target.checked })}
                      className="accent-blue-500 w-3.5 h-3.5 cursor-pointer"
                    />
                  </label>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex gap-5 items-start bg-neutral-50/50 dark:bg-white/2 p-3 rounded-2xl border border-black/5 dark:border-white/5">
      {/* Left: Preview */}
      <div className="relative w-1/2 max-w-[240px] aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shrink-0">
        {wallpaper.kind === 'color' ? (
          <div className="absolute inset-0" style={{ backgroundColor: wallpaper.colorHex }} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={previewUrl ?? undefined} alt={wallpaper.name} className="w-full h-full object-cover" />
        )}
      </div>

      {/* Right: Controls */}
      <div className="flex-1 space-y-3 min-w-0 pt-1">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold text-black/85 dark:text-white/90 truncate">{wallpaper.name}</span>
          {wallpaper.kind !== 'color' && (
            <div className="relative shrink-0">
              <select
                value={fitMode}
                onChange={(e) => setWallpaperFitMode(e.target.value as WallpaperFitMode)}
                className={SELECT_CLS}
              >
                {(Object.keys(FIT_MODE_LABELS) as WallpaperFitMode[]).map((mode) => (
                  <option key={mode} value={mode} className="bg-white dark:bg-[#151821] text-black dark:text-white">
                    {FIT_MODE_LABELS[mode]}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {wallpaper.kind !== 'color' && (
          <div className="space-y-2.5 pt-2.5 border-t border-black/5 dark:border-white/5">
            <label className="flex items-center justify-between text-xs text-black/70 dark:text-white/70 select-none cursor-pointer">
              <span>Shuffle</span>
              <input
                type="checkbox"
                checked={shuffleAppliesHere && cycle.enabled}
                onChange={(e) =>
                  setWallpaperCycle({ enabled: e.target.checked, group: cycleGroup })
                }
                className="accent-blue-500 w-3.5 h-3.5 cursor-pointer"
              />
            </label>

            {shuffleAppliesHere && cycle.enabled && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] text-black/50 dark:text-white/50">Interval</span>
                  <select
                    value={cycle.interval}
                    onChange={(e) => setWallpaperCycle({ interval: e.target.value as WallpaperCycleInterval })}
                    className={SELECT_CLS}
                  >
                    {(Object.keys(CYCLE_INTERVAL_LABELS) as WallpaperCycleInterval[]).map((interval) => (
                      <option key={interval} value={interval} className="bg-white dark:bg-[#151821] text-black dark:text-white">
                        {CYCLE_INTERVAL_LABELS[interval]}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="flex items-center justify-between text-[11px] text-black/50 dark:text-white/50 select-none cursor-pointer">
                  <span>Randomly</span>
                  <input
                    type="checkbox"
                    checked={cycle.randomOrder}
                    onChange={(e) => setWallpaperCycle({ randomOrder: e.target.checked })}
                    className="accent-blue-500 w-3.5 h-3.5 cursor-pointer"
                  />
                </label>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
