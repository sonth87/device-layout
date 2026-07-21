'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '@/store';
import { useWallpaperImport } from '@/lib/wallpaper-import';
import { useWallpaperCatalog } from '@/lib/wallpaper-catalog';
import { WallpaperSection } from './WallpaperSection';
import { WallpaperDetailPanel } from './WallpaperDetailPanel';

/**
 * Full wallpaper picker content: the selected wallpaper's config panel on
 * top (preview + Fit Mode + Shuffle — macOS puts this at the top of the
 * right-hand pane, but with only one column here it reads better above the
 * lists), then Pictures / Colors / custom-folder sections stacked below,
 * each scrolling horizontally with "Show All" unrolling straight down in
 * place (no separate full-screen view — matches the flow of a single-column
 * settings panel). Rendered by both WallpaperPicker (desktop right-click
 * modal) and SettingsWallpaper (Settings app page).
 */
export function WallpaperPickerContent({ variant = 'vertical' }: { variant?: 'vertical' | 'horizontal' } = {}) {
  const wallpaperId = useStore((s) => s.wallpaperId);
  const setWallpaper = useStore((s) => s.setWallpaper);
  const customWallpapers = useStore((s) => s.customWallpapers);
  const addCustomWallpaper = useStore((s) => s.addCustomWallpaper);
  const wallpaperCycle = useStore((s) => s.wallpaperCycle);

  const importWallpaper = useWallpaperImport();
  const catalog = useWallpaperCatalog();
  const [importing, setImporting] = useState(false);

  const selected = catalog.all.find((w) => w.id === wallpaperId)
    ?? customWallpapers.find((w) => w.id === wallpaperId)
    ?? catalog.pictures[0];

  const selectedIsCustom = customWallpapers.some((w) => w.id === wallpaperId);

  async function handleImport() {
    if (!importWallpaper || importing) return;
    setImporting(true);
    try {
      const wallpaper = await importWallpaper();
      if (wallpaper) {
        addCustomWallpaper(wallpaper);
        setWallpaper(wallpaper.id);
      }
    } finally {
      setImporting(false);
    }
  }

  return (
    <div className="space-y-5">
      <WallpaperDetailPanel wallpaper={selected} cycleGroup={selectedIsCustom ? 'custom' : 'builtin'} variant={variant} />

      <WallpaperSection
        title="Pictures"
        items={catalog.pictures}
        selectedId={wallpaperId}
        cyclingGroup={wallpaperCycle.enabled && wallpaperCycle.group === 'builtin'}
        onSelect={setWallpaper}
      />

      {catalog.live.length > 0 && (
        <WallpaperSection
          title="Live Wallpapers"
          items={catalog.live}
          selectedId={wallpaperId}
          onSelect={setWallpaper}
        />
      )}

      <WallpaperSection
        title="Colors"
        items={catalog.colors}
        selectedId={wallpaperId}
        onSelect={setWallpaper}
        shape="circle"
      />

      <WallpaperSection
        title="Your Photos"
        items={customWallpapers}
        selectedId={wallpaperId}
        cyclingGroup={wallpaperCycle.enabled && wallpaperCycle.group === 'custom'}
        onSelect={setWallpaper}
        leadingActions={
          importWallpaper && (
            <button
              onClick={handleImport}
              disabled={importing}
              title="Add a Photo"
              className="shrink-0 w-24 aspect-video rounded-(--radius-input) border-2 border-dashed border-black/15 dark:border-white/15 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors text-black/40 dark:text-white/40 disabled:opacity-50"
            >
              <Plus className="w-5 h-5" />
            </button>
          )
        }
      />
    </div>
  );
}


