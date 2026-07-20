"use client";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { cn } from "@/lib/utils";
import { AppIconImage } from "@/components/shared/AppIconImage";
import type { AppConfig, ContextMenuAction } from "@/types/app";
import { useTranslation } from "@/hooks/useTranslation";
import { useStore } from "@/store";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";

const DRAG_THRESHOLD = 6; // px before we consider it a drag, not a click
const LONG_PRESS_MS = 700; // ms hold before mobile context menu fires

interface AppIconProps {
  appConfig: AppConfig;
  x: number;
  y: number;
  onOpen: (appConfig: AppConfig) => void;
  onDrop: (x: number, y: number) => void;
  onDragStart?: () => void;
  onDrag?: (x: number, y: number) => void;
  isSelected?: boolean;
  onSelect?: (appId: string, e: React.PointerEvent) => void;
  onUpAfterClick?: (appId: string) => void;
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
      new CustomEvent("app:context:action", { detail: { appId, action } }),
    );
  };
  return (
    <>
      {items.map((item) =>
        item.separator ? (
          <ContextMenu.Separator
            key={item.key}
            className="my-1 h-px bg-black/10 dark:bg-white/10"
          />
        ) : (
          <ContextMenu.Item
            key={item.key}
            disabled={item.disabled}
            onSelect={() => dispatch(item.action)}
            className="flex items-center justify-between px-3 py-1.5 rounded-[5px] cursor-default outline-none hover:bg-blue-500 hover:text-white data-disabled:opacity-40 transition-colors"
          >
            {item.label}
            {item.shortcut && (
              <span className="text-[10px] opacity-50 ml-4">
                {item.shortcut}
              </span>
            )}
          </ContextMenu.Item>
        ),
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
      new CustomEvent("app:context:action", { detail: { appId, action } }),
    );
  };

  return createPortal(
    <>
      {/* backdrop */}
      <div className="fixed inset-0 z-9998" onPointerDown={onClose} />
      {/* menu */}
      <div
        className="fixed z-9999 min-w-48 bg-white/90 dark:bg-[#151821]/95 backdrop-blur-2xl rounded-menu shadow-2xl border border-black/10 dark:border-white/8 p-1 text-xs overflow-hidden"
        style={{ left, top: anchorY - 8, transform: "translateY(-100%)" }}
      >
        {items.map((item) =>
          item.separator ? (
            <div
              key={item.key}
              className="my-1 h-px bg-black/10 dark:bg-white/10 mx-2"
            />
          ) : (
            <button
              key={item.key}
              disabled={item.disabled}
              onPointerDown={(e) => {
                e.stopPropagation();
                dispatch(item.action);
              }}
              className={cn(
                "w-full flex items-center justify-between px-3 py-1.5 rounded-[5px] cursor-default outline-none text-left",
                item.disabled
                  ? "opacity-40"
                  : "hover:bg-blue-500 hover:text-white transition-colors",
              )}
            >
              <span>{item.label}</span>
              {item.shortcut && (
                <span className="text-[10px] opacity-50 ml-4">
                  {item.shortcut}
                </span>
              )}
            </button>
          ),
        )}
      </div>
    </>,
    document.body,
  );
}

export function AppIcon({
  appConfig,
  x,
  y,
  onOpen,
  onDrop,
  onDragStart,
  onDrag,
  isSelected = false,
  onSelect,
  onUpAfterClick,
}: AppIconProps) {
  const iconSize = useStore((s) => s.desktopIconSize);
  const labelPosition = useStore((s) => s.desktopLabelPosition);
  const textSize = useStore((s) => s.desktopTextSize);

  const [dragging, setDragging] = useState(false);
  const { getAppName } = useTranslation();
  const displayName = getAppName(appConfig.id, appConfig.name);
  const [dragPos, setDragPos] = useState({ x, y });
  const [pressed, setPressed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState<{ x: number; y: number } | null>(
    null,
  );
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

  // Store latest props to avoid stale closures in pointer events
  const latestProps = useRef({ x, y, onDrop, onOpen, onDragStart, onDrag, onUpAfterClick });
  latestProps.current = { x, y, onDrop, onOpen, onDragStart, onDrag, onUpAfterClick };

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
    isTouchRef.current = e.pointerType === "touch";

    if (onSelect) {
      onSelect(appConfig.id, e);
    }

    dragRef.current = {
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startX: x,
      startY: y,
      moved: false,
    };

    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

    // Start long-press timer for touch devices
    if (
      isTouchRef.current &&
      appConfig.contextMenu &&
      appConfig.contextMenu.length > 0
    ) {
      longPressTimerRef.current = setTimeout(() => {
        longPressTimerRef.current = null;
        // Only fire long-press if we haven't started dragging
        if (dragRef.current && !dragRef.current.moved) {
          // Release capture so the browser doesn't keep tracking the pointer
          try {
            (e.target as HTMLElement).releasePointerCapture(e.pointerId);
          } catch (_) {
            /* */
          }
          setPressed(false);
          setMobileMenu({
            x: dragRef.current.startMouseX,
            y: dragRef.current.startMouseY,
          });
          dragRef.current = null;
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("pointerup", onUp);
        }
      }, LONG_PRESS_MS);
    }

    const onMove = (mv: PointerEvent) => {
      if (!dragRef.current) return;
      const dx = mv.clientX - dragRef.current.startMouseX;
      const dy = mv.clientY - dragRef.current.startMouseY;
      if (!dragRef.current.moved && Math.hypot(dx, dy) < DRAG_THRESHOLD) return;

      cancelLongPress();
      const firstDrag = !dragRef.current.moved;
      dragRef.current.moved = true;
      setDragging(true);

      const nextX = dragRef.current.startX + dx;
      const nextY = dragRef.current.startY + dy;

      setDragPos({ x: nextX, y: nextY });

      if (firstDrag && latestProps.current.onDragStart) {
        latestProps.current.onDragStart();
      }
      if (latestProps.current.onDrag) {
        latestProps.current.onDrag(nextX, nextY);
      }
    };

    const onUp = (up: PointerEvent) => {
      cancelLongPress();
      setPressed(false);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);

      if (!dragRef.current) return;
      const dx = up.clientX - dragRef.current.startMouseX;
      const dy = up.clientY - dragRef.current.startMouseY;
      const moved = dragRef.current.moved;
      const startX = dragRef.current.startX;
      const startY = dragRef.current.startY;
      dragRef.current = null;
      setDragging(false);

      if (moved) {
        // Commit drag position using the original startX/startY to avoid double-adding dx/dy
        latestProps.current.onDrop(startX + dx, startY + dy);
      } else {
        if (latestProps.current.onUpAfterClick) {
          latestProps.current.onUpAfterClick(appConfig.id);
        }
        // It's a click — handle double-click-to-open
        clickCountRef.current += 1;
        if (clickCountRef.current === 2) {
          clickCountRef.current = 0;
          if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
          latestProps.current.onOpen(appConfig);
        } else {
          clickTimerRef.current = setTimeout(() => {
            clickCountRef.current = 0;
          }, 350);
        }
      }
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  return (
    <>
      {mobileMenu &&
        appConfig.contextMenu &&
        appConfig.contextMenu.length > 0 && (
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
            data-app-icon="true"
            data-app-id={appConfig.id}
            className={cn(
              "absolute pointer-events-auto",
              appConfig.disabled && "opacity-40 pointer-events-none",
            )}
            style={{
              left: pos.x,
              top: pos.y,
              width: labelPosition === 'bottom' ? iconSize + 56 : iconSize + 104,
              zIndex: dragging ? 1000 : 1,
              transition: dragging
                ? "none"
                : "left 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            <button
              className={cn(
                "flex w-full items-center select-none rounded-lg",
                labelPosition === 'bottom' ? "flex-col text-center gap-2 p-2" : "flex-row text-left gap-3 p-2",
                "focus:outline-none transition-transform duration-75",
                isSelected
                  ? "bg-white/8 dark:bg-white/5"
                  : "hover:bg-white/15",
                pressed && !dragging && "scale-90 opacity-80",
                dragging && "scale-105 opacity-90 drop-shadow-2xl",
              )}
              onPointerDown={handlePointerDown}
              aria-label={`Open ${displayName}`}
            >
              <div className="relative shrink-0">
                <AppIconImage
                  appConfig={appConfig}
                  size={iconSize}
                  className="drop-shadow-xl"
                />
                {appConfig.badge !== undefined && (
                  <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow">
                    {appConfig.badge}
                  </span>
                )}
              </div>
              <span
                className={cn(
                  "block w-full text-white font-medium leading-tight px-0 py-0.5 rounded-[4px] border border-transparent",
                  labelPosition === 'bottom' ? "text-center mx-auto" : "text-left"
                )}
                style={{
                  fontSize: `${textSize}px`,
                  maxWidth: labelPosition === 'bottom' ? `${iconSize + 48}px` : '100px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  wordBreak: 'break-word',
                  backgroundColor: isSelected ? 'var(--accent-color)' : undefined,
                  borderColor: isSelected ? 'rgba(255,255,255,0.1)' : 'transparent',
                  textShadow: isSelected
                    ? 'none'
                    : "0 1px 0px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6)",
                }}
              >
                {displayName}
              </span>
            </button>
          </div>
        </ContextMenu.Trigger>

        {appConfig.contextMenu && appConfig.contextMenu.length > 0 && (
          <ContextMenu.Portal>
            <ContextMenu.Content asChild className="min-w-48 outline-none z-[99999]">
              <LiquidGlass variant="panel" className="p-1 text-xs">
                <div>
                  <ContextMenuItems
                    items={appConfig.contextMenu}
                    appId={appConfig.id}
                    onClose={() => {
                      /* Radix handles close */
                    }}
                  />
                </div>
              </LiquidGlass>
            </ContextMenu.Content>
          </ContextMenu.Portal>
        )}
      </ContextMenu.Root>
    </>
  );
}
