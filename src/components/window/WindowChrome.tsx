'use client';

import { useState } from 'react';
import { X, Minus, Maximize2, Square } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/store';
import { useTheme } from '@/hooks/useTheme';
import { useViewportSize } from '@/hooks/useResizeObserver';

interface WindowChromeProps {
  windowId: string;
  onPointerDown: (e: React.PointerEvent) => void;
}

export function WindowChrome({ windowId, onPointerDown }: WindowChromeProps) {
  const { osTheme } = useTheme();
  return osTheme === 'windows'
    ? <WindowChromeWindows windowId={windowId} onPointerDown={onPointerDown} />
    : <WindowChromeMacOS windowId={windowId} onPointerDown={onPointerDown} />;
}

function WindowChromeMacOS({ windowId, onPointerDown }: WindowChromeProps) {
  const win = useStore((s) => s.windows[windowId]);
  const closeWindow = useStore((s) => s.closeWindow);
  const minimizeWindow = useStore((s) => s.minimizeWindow);
  const toggleMaximize = useStore((s) => s.toggleMaximize);
  const viewport = useViewportSize();
  const [hovering, setHovering] = useState(false);

  if (!win) return null;

  // Available desktop area: below menubar (28px), above dock (72px) + dock gap (16px)
  const viewportRect = {
    x: 0,
    y: 28,
    width: viewport.width,
    height: viewport.height - 28 - 88,
  };

  return (
    <div
      className={cn(
        'flex items-center gap-0 h-11 px-4 shrink-0',
        'select-none cursor-move',
        'border-b border-black/8 dark:border-white/8',
        win.isFocused
          ? 'bg-neutral-100/95 dark:bg-neutral-800/95'
          : 'bg-neutral-50/95 dark:bg-neutral-900/95',
      )}
      onPointerDown={onPointerDown}
      onDoubleClick={() => toggleMaximize(windowId, viewportRect)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Traffic lights */}
      <div
        className="flex items-center gap-2 mr-3"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => closeWindow(windowId)}
          className="w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75"
          style={{ backgroundColor: win.isFocused ? '#ff5f57' : '#d1d1d1' }}
          title="Close"
        >
          {hovering && win.isFocused && (
            <X className="w-2 h-2 text-red-900/80" strokeWidth={3} />
          )}
        </button>

        {/* Minimize */}
        <button
          onClick={() => minimizeWindow(windowId)}
          className="w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75"
          style={{ backgroundColor: win.isFocused ? '#febc2e' : '#d1d1d1' }}
          title="Minimize"
        >
          {hovering && win.isFocused && (
            <Minus className="w-2 h-2 text-yellow-900/80" strokeWidth={3} />
          )}
        </button>

        {/* Maximize / Green */}
        <button
          onClick={() => toggleMaximize(windowId, viewportRect)}
          className="w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75"
          style={{ backgroundColor: win.isFocused ? '#28c840' : '#d1d1d1' }}
          title={win.isMaximized ? 'Restore' : 'Maximize'}
        >
          {hovering && win.isFocused && (
            <Maximize2 className="w-1.5 h-1.5 text-green-900/80" strokeWidth={3} />
          )}
        </button>
      </div>

      {/* Centered title */}
      <div className="flex-1 flex items-center justify-center pointer-events-none">
        <span className={cn(
          'text-[13px] font-medium truncate max-w-[220px]',
          win.isFocused ? 'text-black/75 dark:text-white/80' : 'text-black/35 dark:text-white/35'
        )}>
          {win.title}
        </span>
      </div>

      {/* Balance spacer */}
      <div className="w-[72px]" />
    </div>
  );
}

function WindowChromeWindows({ windowId, onPointerDown }: WindowChromeProps) {
  const win = useStore((s) => s.windows[windowId]);
  const closeWindow = useStore((s) => s.closeWindow);
  const minimizeWindow = useStore((s) => s.minimizeWindow);
  const toggleMaximize = useStore((s) => s.toggleMaximize);
  const viewport = useViewportSize();

  if (!win) return null;

  const viewportRect = { x: 0, y: 0, width: viewport.width, height: viewport.height - 48 };

  return (
    <div
      className={cn(
        'flex items-center h-9 shrink-0',
        'bg-neutral-100/98 dark:bg-neutral-800/98',
        'border-b border-black/8 dark:border-white/8',
        'select-none cursor-move',
      )}
      onPointerDown={onPointerDown}
      onDoubleClick={() => toggleMaximize(windowId, viewportRect)}
    >
      <span className="flex-1 text-[12px] font-medium truncate text-black/75 dark:text-white/75 pl-3">
        {win.title}
      </span>
      <div className="flex items-center h-full" onPointerDown={(e) => e.stopPropagation()}>
        <button
          onClick={() => minimizeWindow(windowId)}
          className="w-11 h-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black/70 dark:text-white/70"
        >
          <Minus className="w-3.5 h-3.5" strokeWidth={2} />
        </button>
        <button
          onClick={() => toggleMaximize(windowId, viewportRect)}
          className="w-11 h-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black/70 dark:text-white/70"
        >
          <Square className="w-3 h-3" strokeWidth={2} />
        </button>
        <button
          onClick={() => closeWindow(windowId)}
          className="w-11 h-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors text-black/70 dark:text-white/70"
        >
          <X className="w-3.5 h-3.5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
