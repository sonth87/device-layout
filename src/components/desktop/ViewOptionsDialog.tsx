'use client';

import { useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, File, Grid2X2, Grid3X3 } from 'lucide-react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';
import type { StackGroupBy } from '@/types/desktop';

export function ViewOptionsDialog() {
  const { t } = useTranslation();
  const open = useStore((s) => s.desktopViewOptionsOpen);
  const setOpen = useStore((s) => s.setDesktopViewOptionsOpen);

  const useStacks = useStore((s) => s.useStacks);
  const stackGroupBy = useStore((s) => s.stackGroupBy);
  const toggleStacks = useStore((s) => s.toggleStacks);
  const setStackGroupBy = useStore((s) => s.setStackGroupBy);

  const desktopSortBy = useStore((s) => s.desktopSortBy);
  const setDesktopSortBy = useStore((s) => s.setDesktopSortBy);

  const desktopIconSize = useStore((s) => s.desktopIconSize);
  const setDesktopIconSize = useStore((s) => s.setDesktopIconSize);

  const desktopGridSpacing = useStore((s) => s.desktopGridSpacing);
  const setDesktopGridSpacing = useStore((s) => s.setDesktopGridSpacing);

  const desktopTextSize = useStore((s) => s.desktopTextSize);
  const setDesktopTextSize = useStore((s) => s.setDesktopTextSize);

  const desktopLabelPosition = useStore((s) => s.desktopLabelPosition);
  const setDesktopLabelPosition = useStore((s) => s.setDesktopLabelPosition);

  // Drag logic
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const dragStart = useRef<{ mx: number; my: number; ox: number; oy: number } | null>(null);

  const onTitleBarPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('select') || (e.target as HTMLElement).closest('input')) return;
    e.preventDefault();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragStart.current = { mx: e.clientX, my: e.clientY, ox: offset.x, oy: offset.y };
  }, [offset]);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) return;
    setOffset({
      x: dragStart.current.ox + (e.clientX - dragStart.current.mx),
      y: dragStart.current.oy + (e.clientY - dragStart.current.my),
    });
  }, []);

  const onPointerUp = useCallback(() => {
    dragStart.current = null;
  }, []);

  const handleStackChange = (val: string) => {
    if (val === 'none') {
      if (useStacks) toggleStacks();
    } else {
      if (!useStacks) toggleStacks();
      setStackGroupBy(val as StackGroupBy);
    }
  };

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 99998 }}
    >
      <div
        className="relative flex flex-col bg-neutral-100/95 dark:bg-[#1c1c1e]/95 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 w-[280px] overflow-hidden pointer-events-auto text-black dark:text-white"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Titlebar */}
        <div
          className="w-full flex items-center justify-between px-4 pt-3 pb-2 border-b border-black/8 dark:border-white/8 cursor-move select-none bg-neutral-200/60 dark:bg-white/5"
          onPointerDown={onTitleBarPointerDown}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="flex items-center gap-2" onPointerDown={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-100"
              style={{ backgroundColor: '#ff5f57' }}
              title="Close"
            >
              {hovering && (
                <X className="w-2.5 h-2.5 text-red-950 dark:text-red-950/90" strokeWidth={3.5} />
              )}
            </button>
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#d1d1d1' }} />
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#d1d1d1' }} />
          </div>

          <span className="text-[13px] font-semibold text-black/80 dark:text-white/80 absolute left-1/2 -translate-x-1/2">
            Desktop
          </span>

          <div className="w-14" />
        </div>

        {/* Content */}
        <div className="flex flex-col p-4 gap-4 text-[13px] select-none">
          {/* Section 1: Stack & Sort */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="text-black/70 dark:text-white/70">Stack By:</span>
              <select
                value={useStacks ? stackGroupBy : 'none'}
                onChange={(e) => handleStackChange(e.target.value)}
                className="bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 rounded-md px-2 py-0.5 text-xs w-36 focus:outline-none"
              >
                <option value="none">None</option>
                <option value="kind">Kind</option>
                <option value="shared-by">Shared By</option>
                <option value="date-last-opened">Date Last Opened</option>
                <option value="date-added">Date Added</option>
                <option value="date-modified">Date Modified</option>
                <option value="date-created">Date Created</option>
                <option value="tags">Tags</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-black/70 dark:text-white/70">Sort By:</span>
              <select
                value={desktopSortBy}
                onChange={(e) => setDesktopSortBy(e.target.value as any)}
                className="bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 rounded-md px-2 py-0.5 text-xs w-36 focus:outline-none"
              >
                <option value="none">None</option>
                <option value="name">Name</option>
                <option value="kind">Kind</option>
              </select>
            </div>
          </div>

          <div className="h-px bg-black/10 dark:bg-white/10 -mx-4" />

          {/* Section 2: Icon Size & Grid Spacing */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-black/70 dark:text-white/70">Icon size:</span>
                <span className="text-xs text-black/50 dark:text-white/50">{desktopIconSize}×{desktopIconSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <File className="w-4 h-4 text-black/50 dark:text-white/50" />
                <input
                  type="range"
                  min="16"
                  max="128"
                  value={desktopIconSize}
                  onChange={(e) => setDesktopIconSize(Number(e.target.value))}
                  className="flex-1 h-1 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <File className="w-7 h-7 text-black/75 dark:text-white/75" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-black/70 dark:text-white/70">Grid spacing:</span>
              <div className="flex items-center gap-2">
                <Grid2X2 className="w-4 h-4 text-black/50 dark:text-white/50" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={desktopGridSpacing}
                  onChange={(e) => setDesktopGridSpacing(Number(e.target.value))}
                  className="flex-1 h-1 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <Grid3X3 className="w-6 h-6 text-black/75 dark:text-white/75" />
              </div>
            </div>
          </div>

          <div className="h-px bg-black/10 dark:bg-white/10 -mx-4" />

          {/* Section 3: Text Size & Label Position */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <span className="text-black/70 dark:text-white/70">Text size:</span>
              <select
                value={desktopTextSize}
                onChange={(e) => setDesktopTextSize(Number(e.target.value))}
                className="bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 rounded-md px-2 py-0.5 text-xs w-20 focus:outline-none"
              >
                {[10, 11, 12, 13, 14, 15, 16].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-black/70 dark:text-white/70">Label position:</span>
              <div className="flex gap-4">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="labelPosition"
                    value="bottom"
                    checked={desktopLabelPosition === 'bottom'}
                    onChange={() => setDesktopLabelPosition('bottom')}
                    className="w-3.5 h-3.5 text-blue-600 border-gray-300 focus:ring-blue-500 accent-blue-500"
                  />
                  <span>Bottom</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="labelPosition"
                    value="right"
                    checked={desktopLabelPosition === 'right'}
                    onChange={() => setDesktopLabelPosition('right')}
                    className="w-3.5 h-3.5 text-blue-600 border-gray-300 focus:ring-blue-500 accent-blue-500"
                  />
                  <span>Right</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
