'use client';

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
  /**
   * "Show All" state, lifted to the parent (WallpaperPickerContent) so it
   * can hide sibling sections + the detail panel while one section is
   * expanded — matches macOS, where "Show All" takes over the whole view
   * rather than cramming a wrapping grid into the same narrow column.
   */
  expanded: boolean;
  onToggleExpanded: () => void;
}

/**
 * One labelled horizontally-scrolling row (macOS's Wallpaper settings
 * "Pictures" / "Colors" / custom-folder sections) with a "Show All (N)"
 * toggle that expands into a wrapping grid in place.
 */
export function WallpaperSection({
  title,
  items,
  selectedId,
  cyclingGroup,
  onSelect,
  leadingActions,
  shape = 'card',
  expanded,
  onToggleExpanded,
}: WallpaperSectionProps) {
  if (items.length === 0 && !leadingActions) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-2 px-0.5">
        <p className="text-[11px] font-semibold text-black/60 dark:text-white/60 select-none">{title}</p>
        {items.length > 0 && (
          <button
            onClick={onToggleExpanded}
            className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline select-none"
          >
            {expanded ? 'Show Less' : `Show All (${items.length})`}
          </button>
        )}
      </div>

      <div
        className={cn(
          shape === 'circle' ? 'items-end' : 'items-center',
          expanded ? 'flex flex-wrap gap-3' : 'flex gap-3 overflow-x-auto pb-1'
        )}
      >
        {leadingActions}
        {items.map((w) => (
          <div key={w.id} className={expanded ? (shape === 'circle' ? undefined : 'w-32') : 'shrink-0 w-24'}>
            <WallpaperThumb
              wallpaper={w}
              selected={w.id === selectedId}
              cycling={cyclingGroup && w.id === selectedId}
              onClick={() => onSelect(w.id)}
              shape={shape}
              size="md"
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
