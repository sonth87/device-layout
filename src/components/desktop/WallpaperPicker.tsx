'use client';

import { useState } from 'react';
import { useStore } from '@/store';
import { WALLPAPERS } from '@/config/wallpapers.config';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface WallpaperPickerProps {
  onClose: () => void;
}

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

export function WallpaperPicker({ onClose }: WallpaperPickerProps) {
  const wallpaperId = useStore((s) => s.wallpaperId);
  const setWallpaper = useStore((s) => s.setWallpaper);

  const statics = WALLPAPERS.filter((w) => !w.isLive);
  const lives   = WALLPAPERS.filter((w) => w.isLive);

  const renderItem = (w: typeof WALLPAPERS[0]) => (
    <button
      key={w.id}
      onClick={() => { setWallpaper(w.id); onClose(); }}
      className={cn(
        'relative aspect-video rounded-[var(--radius-input)] overflow-hidden border-2 transition-all w-full',
        wallpaperId === w.id
          ? 'border-blue-500 scale-105 shadow-lg'
          : 'border-transparent hover:border-white/40 hover:scale-102'
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
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white/90 dark:bg-[#151821]/95 backdrop-blur-xl rounded-[var(--radius-card)] p-6 shadow-2xl w-130 max-w-[95vw] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4 shrink-0">
          <h2 className="text-sm font-semibold">Choose Wallpaper</h2>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable list content */}
        <div className="max-h-[58vh] overflow-y-auto pr-1.5 space-y-5">
          {/* Static section */}
          {statics.length > 0 && (
            <div>
              <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2 select-none">
                Static Wallpapers
              </p>
              <div className="grid grid-cols-3 gap-3">
                {statics.map(renderItem)}
              </div>
            </div>
          )}

          {/* Live section */}
          {lives.length > 0 && (
            <div>
              <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2 select-none">
                Live Wallpapers
              </p>
              <div className="grid grid-cols-3 gap-3">
                {lives.map(renderItem)}
              </div>
            </div>
          )}
        </div>

        <p className="text-[10px] text-black/45 dark:text-white/45 mt-4 text-center select-none shrink-0">
          Place custom wallpaper files in <code>/public/wallpapers/</code>
        </p>
      </div>
    </div>
  );
}
