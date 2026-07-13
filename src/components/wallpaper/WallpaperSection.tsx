'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { WallpaperConfig } from '@/types/desktop';
import { WallpaperThumb } from './WallpaperThumb';

interface WallpaperSectionProps {
  title: string;
  items: WallpaperConfig[];
  selectedId: string;
  cyclingGroup?: boolean;
  onSelect: (id: string) => void;
  /** Rendered before the swatches — macOS's Colors section has shuffle + add buttons here. */
  leadingActions?: React.ReactNode;
  shape?: 'card' | 'circle';
}

/**
 * One labelled horizontally-scrolling row (macOS's Wallpaper settings
 * "Pictures" / "Colors" / custom-folder sections) with a "Show All (N)"
 * toggle that unrolls straight down into a wrapping grid in place — no
 * separate full-screen view, matches a single-column settings panel.
 */
export function WallpaperSection({
  title,
  items,
  selectedId,
  cyclingGroup,
  onSelect,
  leadingActions,
  shape = 'card',
}: WallpaperSectionProps) {
  const [expanded, setExpanded] = useState(false);

  if (items.length === 0 && !leadingActions) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-2 px-0.5">
        <p className="text-[11px] font-semibold text-black/60 dark:text-white/60 select-none">{title}</p>
        {items.length > 0 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline select-none"
          >
            {expanded ? 'Show Less' : `Show All (${items.length})`}
          </button>
        )}
      </div>

      <div
        className={cn(
          shape === 'circle' ? 'items-start' : 'items-center',
          expanded ? 'flex flex-wrap gap-2 p-1.5' : 'flex gap-3 overflow-x-auto p-1.5'
        )}
      >
        {leadingActions}
        {items.map((w) => (
          <div
            key={w.id}
            className={
              expanded
                ? shape === 'circle' ? 'w-12' : 'w-24'
                : shape === 'circle' ? 'shrink-0 w-12' : 'shrink-0 w-24'
            }
          >
            <WallpaperThumb
              wallpaper={w}
              selected={w.id === selectedId}
              cycling={cyclingGroup && w.id === selectedId}
              onClick={() => onSelect(w.id)}
              shape={shape}
              size={expanded && shape === 'circle' ? 'sm' : 'md'}
            />
            {shape === 'circle' && (
              <p className="text-[10px] text-center mt-1 text-black/60 dark:text-white/60 truncate select-none">{w.name}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
