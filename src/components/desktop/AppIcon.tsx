'use client';

import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { cn } from '@/lib/utils';
import { AppIconImage } from '@/components/shared/AppIconImage';
import type { AppConfig, ContextMenuAction } from '@/types/app';

const DRAG_THRESHOLD = 6; // px before we consider it a drag, not a click
const LONG_PRESS_MS = 700; // ms hold before mobile context menu fires

interface AppIconProps {
  appConfig: AppConfig;
  x: number;
  y: number;
  onOpen: (appConfig: AppConfig) => void;
  onDrop: (x: number, y: number) => void;
}

/** Tiny context menu list, shared between desktop (Radix) and mobile (portal overlay). */
function ContextMenuItems({
  items,
  appId,
  onClose,
}: {
  items: ContextMenuAction[];
  appId: string;
  onClose: () => void;
}) {
  const dispatch = (action: string) => {
    onClose();
    window.dispatchEvent(
      new CustomEvent('app:context:action', { detail: { appId, action } })
    );
  };
  return (
    <>
      {items.map((item) =>
        item.separator ? (
          <ContextMenu.Separator key={item.key} className="my-1 h-px bg-black/10 dark:bg-white/10" />
        ) : (
          <ContextMenu.Item
            key={item.key}
            disabled={item.disabled}
            onSelect={() => dispatch(item.action)}
            className="flex items-center justify-between px-3 py-1.5 rounded-[5px] cursor-default outline-none hover:bg-blue-500 hover:text-white data-disabled:opacity-40 transition-colors"
          >
            {item.label}
            {item.shortcut && <span className="text-[10px] opacity-50 ml-4">{item.shortcut}</span>}
          </ContextMenu.Item>
        )
      )}
    </>
  );
}

/** Fixed-position overlay context menu for mobile long-press. */
function MobileContextMenu({
  items,
  appId,
  anchorX,
  anchorY,
  onClose,
}: {
  items: ContextMenuAction[];
  appId: string;
  anchorX: number;
  anchorY: number;
  onClose: () => void;
}) {
  // Offset so the menu appears above/near the finger
  const menuWidth = 192;
  const left = Math.min(anchorX, window.innerWidth - menuWidth - 8);

  const dispatch = (action: string) => {
    onClose();
    window.dispatchEvent(
      new CustomEvent('app:context:action', { detail: { appId, action } })
    );
  };

  return createPortal(
    <>
      {/* backdrop */}
      <div
        className="fixed inset-0 z-9998"
        onPointerDown={onClose}
      />
      {/* menu */}
      <div
        className="fixed z-9999 min-w-48 bg-white/90 dark:bg-[#151821]/95 backdrop-blur-2xl rounded-menu shadow-2xl border border-black/10 dark:border-white/8 p-1 text-xs overflow-hidden"
        style={{ left, top: anchorY - 8, transform: 'translateY(-100%)' }}
      >
        {items.map((item) =>
          item.separator ? (
            <div key={item.key} className="my-1 h-px bg-black/10 dark:bg-white/10 mx-2" />
          ) : (
            <button
              key={item.key}
              disabled={item.disabled}
              onPointerDown={(e) => { e.stopPropagation(); dispatch(item.action); }}
              className={cn(
                'w-full flex items-center justify-between px-3 py-1.5 rounded-[5px] cursor-default outline-none text-left',
                item.disabled
                  ? 'opacity-40'
                  : 'hover:bg-blue-500 hover:text-white transition-colors'
              )}
            >
              <span>{item.label}</span>
              {item.shortcut && <span className="text-[10px] opacity-50 ml-4">{item.shortcut}</span>}
            </button>
          )
        )}
      </div>
    </>,
    document.body
  );
}

export function AppIcon({ appConfig, x, y, onOpen, onDrop }: AppIconProps) {
  const [dragging, setDragging] = useState(false);
  const [dragPos, setDragPos] = useState({ x, y });
  const [pressed, setPressed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState<{ x: number; y: number } | null>(null);
  const dragRef = useRef<{
    startMouseX: number;
    startMouseY: number;
    startX: number;
    startY: number;
    moved: boolean;
  } | null>(null);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTouchRef = useRef(false);

  // Update visual pos when store pos changes (unless mid-drag)
  const pos = dragging ? dragPos : { x, y };

  const cancelLongPress = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    setPressed(true);
    isTouchRef.current = e.pointerType === 'touch';

    dragRef.current = {
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startX: x,
      startY: y,
      moved: false,
    };

    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

    // Start long-press timer for touch devices
    if (isTouchRef.current && appConfig.contextMenu && appConfig.contextMenu.length > 0) {
      longPressTimerRef.current = setTimeout(() => {
        longPressTimerRef.current = null;
        // Only fire long-press if we haven't started dragging
        if (dragRef.current && !dragRef.current.moved) {
          // Release capture so the browser doesn't keep tracking the pointer
          try { (e.target as HTMLElement).releasePointerCapture(e.pointerId); } catch (_) { /* */ }
          setPressed(false);
          setMobileMenu({ x: dragRef.current.startMouseX, y: dragRef.current.startMouseY });
          dragRef.current = null;
          window.removeEventListener('pointermove', onMove);
          window.removeEventListener('pointerup', onUp);
        }
      }, LONG_PRESS_MS);
    }

    const onMove = (mv: PointerEvent) => {
      if (!dragRef.current) return;
      const dx = mv.clientX - dragRef.current.startMouseX;
      const dy = mv.clientY - dragRef.current.startMouseY;
      if (!dragRef.current.moved && Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
      // Movement exceeds threshold — cancel long-press and start dragging
      cancelLongPress();
      dragRef.current.moved = true;
      setDragging(true);
      setDragPos({
        x: dragRef.current.startX + dx,
        y: dragRef.current.startY + dy,
      });
    };

    const onUp = (up: PointerEvent) => {
      cancelLongPress();
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
    <>
      {mobileMenu && appConfig.contextMenu && appConfig.contextMenu.length > 0 && (
        <MobileContextMenu
          items={appConfig.contextMenu}
          appId={appConfig.id}
          anchorX={mobileMenu.x}
          anchorY={mobileMenu.y}
          onClose={() => setMobileMenu(null)}
        />
      )}
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
                  <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow">
                    {appConfig.badge}
                  </span>
                )}
              </div>
              <span
                className="block w-full max-w-19 text-white text-[11px] font-medium text-center leading-tight truncate"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6)' }}
              >
                {appConfig.name}
              </span>
            </button>
          </div>
        </ContextMenu.Trigger>

        {appConfig.contextMenu && appConfig.contextMenu.length > 0 && (
          <ContextMenu.Portal>
            <ContextMenu.Content className="min-w-48 bg-white/85 dark:bg-[#151821]/92 backdrop-blur-2xl rounded-menu shadow-2xl border border-black/10 dark:border-white/8 p-1 text-xs overflow-hidden z-9999">
              <ContextMenuItems
                items={appConfig.contextMenu}
                appId={appConfig.id}
                onClose={() => {/* Radix handles close */}}
              />
            </ContextMenu.Content>
          </ContextMenu.Portal>
        )}
      </ContextMenu.Root>
    </>
  );
}
