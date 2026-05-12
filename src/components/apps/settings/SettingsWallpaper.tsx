'use client';

import { useStore } from '@/store';
import { WALLPAPERS } from '@/config/wallpapers.config';
import { cn } from '@/lib/utils';
import { AppSection, AppGrid } from '@/components/apps/ui';

export function SettingsWallpaper() {
  const wallpaperId = useStore((s) => s.wallpaperId);
  const setWallpaper = useStore((s) => s.setWallpaper);

  return (
    <div className="space-y-5">
      <AppSection>
        <AppGrid narrow={2} medium={3} wide={3} gap="12px">
          {WALLPAPERS.map((w) => (
            <button
              key={w.id}
              onClick={() => setWallpaper(w.id)}
              className={cn(
                'aspect-video overflow-hidden rounded-xl border-2 transition-all',
                wallpaperId === w.id
                  ? 'scale-105 border-blue-500 shadow-lg'
                  : 'border-transparent hover:border-black/20 dark:hover:border-white/20'
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={w.thumbnail} alt={w.name} className="h-full w-full object-cover" />
            </button>
          ))}
        </AppGrid>
      </AppSection>
    </div>
  );
}
