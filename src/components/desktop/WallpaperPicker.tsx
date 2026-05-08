'use client';

import { useStore } from '@/store';
import { WALLPAPERS } from '@/config/wallpapers.config';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface WallpaperPickerProps {
  onClose: () => void;
}

export function WallpaperPicker({ onClose }: WallpaperPickerProps) {
  const wallpaperId = useStore((s) => s.wallpaperId);
  const setWallpaper = useStore((s) => s.setWallpaper);

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl w-120 max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold">Choose Wallpaper</h2>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {WALLPAPERS.map((w) => (
            <button
              key={w.id}
              onClick={() => { setWallpaper(w.id); onClose(); }}
              className={cn(
                'aspect-video rounded-xl overflow-hidden border-2 transition-all',
                wallpaperId === w.id
                  ? 'border-blue-500 scale-105 shadow-lg'
                  : 'border-transparent hover:border-white/40 hover:scale-102'
              )}
            >
              <img
                src={w.thumbnail}
                alt={w.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <p className="text-xs text-black/40 dark:text-white/40 mt-4 text-center">
          Place custom wallpaper images in <code>/public/wallpapers/</code>
        </p>
      </div>
    </div>
  );
}
