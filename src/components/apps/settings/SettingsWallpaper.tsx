'use client';

import { useStore } from '@/store';
import { WALLPAPERS } from '@/config/wallpapers.config';
import { cn } from '@/lib/utils';

export function SettingsWallpaper() {
  const wallpaperId = useStore((s) => s.wallpaperId);
  const setWallpaper = useStore((s) => s.setWallpaper);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold mb-1">Wallpaper</h2>
        <p className="text-sm text-black/50 dark:text-white/50 mb-5">
          Choose a wallpaper for your desktop.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {WALLPAPERS.map((w) => (
          <button
            key={w.id}
            onClick={() => setWallpaper(w.id)}
            className={cn(
              'aspect-video overflow-hidden rounded-[var(--radius-card)] border-2 transition-all',
              wallpaperId === w.id
                ? 'scale-105 border-blue-500 shadow-lg'
                : 'border-transparent hover:border-black/20 dark:hover:border-white/20'
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={w.thumbnail}
              alt={w.name}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
