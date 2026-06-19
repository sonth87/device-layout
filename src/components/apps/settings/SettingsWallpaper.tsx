'use client';

import { useState } from 'react';
import { useStore } from '@/store';
import { WALLPAPERS } from '@/config/wallpapers.config';
import { cn } from '@/lib/utils';
import { AppSection, AppGrid } from '@/components/apps/ui';

function ThumbnailImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full bg-zinc-200 dark:bg-zinc-800">
      {!loaded && (
        <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-850 animate-pulse" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export function SettingsWallpaper() {
  const wallpaperId = useStore((s) => s.wallpaperId);
  const setWallpaper = useStore((s) => s.setWallpaper);

  const statics = WALLPAPERS.filter((w) => !w.isLive);
  const lives   = WALLPAPERS.filter((w) => w.isLive);

  const renderItem = (w: typeof WALLPAPERS[0]) => (
    <button
      key={w.id}
      onClick={() => setWallpaper(w.id)}
      className={cn(
        'relative aspect-video overflow-hidden rounded-xl border-2 transition-all w-full',
        wallpaperId === w.id
          ? 'scale-105 border-blue-500 shadow-lg z-10'
          : 'border-transparent hover:border-black/20 dark:hover:border-white/20'
      )}
    >
      {w.isLive && (
        <span className="absolute top-1.5 right-1.5 px-1 py-0.5 bg-black/60 text-white text-[8px] font-bold tracking-wider rounded uppercase z-10 select-none">
          LIVE
        </span>
      )}
      <ThumbnailImage src={w.thumbnail} alt={w.name} />
    </button>
  );

  return (
    <div className="space-y-6">
      {statics.length > 0 && (
        <AppSection title="Static Wallpapers" description="Select a high-quality static background image.">
          <AppGrid narrow={2} medium={3} wide={3} gap="16px">
            {statics.map(renderItem)}
          </AppGrid>
        </AppSection>
      )}

      {lives.length > 0 && (
        <AppSection title="Live Wallpapers" description="Choose a loop-playing video wallpaper to make your desktop dynamic.">
          <AppGrid narrow={2} medium={3} wide={3} gap="16px">
            {lives.map(renderItem)}
          </AppGrid>
        </AppSection>
      )}
    </div>
  );
}
