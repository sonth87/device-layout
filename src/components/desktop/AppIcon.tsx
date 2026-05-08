'use client';

import { useRef, useState } from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { cn } from '@/lib/utils';
import { AppIconImage } from '@/components/shared/AppIconImage';
import type { AppConfig } from '@/types/app';

const DRAG_THRESHOLD = 6; // px before we consider it a drag, not a click

interface AppIconProps {
  appConfig: AppConfig;
  x: number;
  y: number;
  onOpen: (appConfig: AppConfig) => void;
  onDrop: (x: number, y: number) => void;
}

export function AppIcon({ appConfig, x, y, onOpen, onDrop }: AppIconProps) {
  const [dragging, setDragging] = useState(false);
  const [dragPos, setDragPos] = useState({ x, y });
  const [pressed, setPressed] = useState(false);
  const dragRef = useRef<{
    startMouseX: number;
    startMouseY: number;
    startX: number;
    startY: number;
    moved: boolean;
  } | null>(null);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Update visual pos when store pos changes (unless mid-drag)
  const pos = dragging ? dragPos : { x, y };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    setPressed(true);

    dragRef.current = {
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startX: x,
      startY: y,
      moved: false,
    };

    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

    const onMove = (mv: PointerEvent) => {
      if (!dragRef.current) return;
      const dx = mv.clientX - dragRef.current.startMouseX;
      const dy = mv.clientY - dragRef.current.startMouseY;
      if (!dragRef.current.moved && Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
      dragRef.current.moved = true;
      setDragging(true);
      setDragPos({
        x: dragRef.current.startX + dx,
        y: dragRef.current.startY + dy,
      });
    };

    const onUp = (up: PointerEvent) => {
      setPressed(false);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);

      if (!dragRef.current) return;
      const dx = up.clientX - dragRef.current.startMouseX;
      const dy = up.clientY - dragRef.current.startMouseY;
      const moved = dragRef.current.moved;
      dragRef.current = null;
      setDragging(false);

      if (moved) {
        // Commit drag position
        onDrop(x + dx, y + dy);
      } else {
        // It's a click — handle double-click-to-open
        clickCountRef.current += 1;
        if (clickCountRef.current === 2) {
          clickCountRef.current = 0;
          if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
          onOpen(appConfig);
        } else {
          clickTimerRef.current = setTimeout(() => {
            clickCountRef.current = 0;
          }, 350);
        }
      }
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger asChild>
        <div
          className={cn(
            'absolute pointer-events-auto',
            appConfig.disabled && 'opacity-40 pointer-events-none'
          )}
          style={{ left: pos.x, top: pos.y, width: 88, zIndex: dragging ? 1000 : 1 }}
        >
          <button
            className={cn(
              'flex w-full flex-col items-center gap-2 p-2.5 rounded-xl select-none',
              // Match the fixed 88px icon slot so long labels do not shift icon alignment.
              'hover:bg-white/15 focus:outline-none',
              'transition-transform duration-75',
              pressed && !dragging && 'scale-90 opacity-80',
              dragging && 'scale-105 opacity-90 drop-shadow-2xl',
            )}
            onPointerDown={handlePointerDown}
            aria-label={`Open ${appConfig.name}`}
          >
            <div className="relative">
              <AppIconImage appConfig={appConfig} size={64} className="drop-shadow-xl" />
              {appConfig.badge !== undefined && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow">
                  {appConfig.badge}
                </span>
              )}
            </div>
            <span
              className="block w-full max-w-[76px] text-white text-[11px] font-medium text-center leading-tight truncate"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6)' }}
            >
              {appConfig.name}
            </span>
          </button>
        </div>
      </ContextMenu.Trigger>

      {appConfig.contextMenu && appConfig.contextMenu.length > 0 && (
        <ContextMenu.Portal>
          <ContextMenu.Content className="min-w-48 bg-white/85 dark:bg-neutral-800/85 backdrop-blur-2xl rounded-xl shadow-2xl border border-black/10 dark:border-white/10 p-1 text-xs overflow-hidden z-[9999]">
            {appConfig.contextMenu.map((item) =>
              item.separator ? (
                <ContextMenu.Separator key={item.key} className="my-1 h-px bg-black/10 dark:bg-white/10" />
              ) : (
                <ContextMenu.Item
                  key={item.key}
                  disabled={item.disabled}
                  className="flex items-center justify-between px-3 py-1.5 rounded-lg cursor-default outline-none hover:bg-blue-500 hover:text-white data-[disabled]:opacity-40 transition-colors"
                >
                  {item.label}
                  {item.shortcut && <span className="text-[10px] opacity-50 ml-4">{item.shortcut}</span>}
                </ContextMenu.Item>
              )
            )}
          </ContextMenu.Content>
        </ContextMenu.Portal>
      )}
    </ContextMenu.Root>
  );
}
