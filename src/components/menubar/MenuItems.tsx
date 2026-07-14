"use client";

import { useState, useRef, useEffect, useCallback, createContext, useContext } from "react";
import { createPortal } from "react-dom";
import { ChevronRight } from "lucide-react";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";
import { cn } from "@/lib/utils";
import type { MenuBarItem } from "@/types/app";
import { translations, type TranslationKey } from "@/hooks/useTranslation";

type TranslationDict = Record<TranslationKey, string>;

// ─── MenuBar theme context (avoids prop-drilling to every button) ─────────────
export const MenuBarThemeCtx = createContext<"light" | "dark">("dark");

/** Returns Tailwind classes for an inactive menu-bar button. */
export function useMenuBtnClass() {
  const theme = useContext(MenuBarThemeCtx);
  return theme === "light"
    ? "text-black/80 hover:bg-black/10"
    : "text-white/85 hover:bg-white/10";
}

export const menuBarButtonClass =
  "flex h-6 items-center rounded-md px-2.5 text-[13px] leading-none transition-colors";

export function MenuItem({
  label,
  shortcut,
  disabled,
  onClick,
}: {
  label: string;
  shortcut?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors cursor-default rounded-lg text-left",
        disabled
          ? "text-black/30 dark:text-white/30"
          : "hover:bg-accent-active hover:text-white text-black dark:text-white",
      )}
      onClick={onClick}
    >
      <span>{label}</span>
      {shortcut && (
        <span className="text-[11px] opacity-50 ml-6">{shortcut}</span>
      )}
    </button>
  );
}

export function MenuSeparator() {
  return <div className="my-1 mx-2 h-px bg-black/10 dark:bg-white/10" />;
}

export function getMenuLabel(label: string, t: TranslationDict) {
  const map: Record<string, TranslationKey> = {
    File: "menuFile",
    Edit: "menuEdit",
    View: "menuView",
    Window: "menuWindow",
    Help: "menuHelp",
    History: "menuHistory",
    Format: "menuFormat",
    Shell: "menuShell",
    Go: "menuGo",
  };
  const key = map[label];
  return key ? t[key] : label;
}

export function getMenuItemLabel(label: string, t: TranslationDict) {
  const map: Record<string, TranslationKey> = {
    "New Window": "menuNewWindow",
    "New Tab": "menuNewTab",
    Close: "menuClose",
    "Close All Windows": "menuCloseAll",
    "Close Window": "menuClose",
    Undo: "menuUndo",
    Redo: "menuRedo",
    Cut: "menuCut",
    Copy: "menuCopy",
    Paste: "menuPaste",
    "Select All": "menuSelectAll",
    Find: "menuFind",
    Minimize: "menuMinimize",
    Zoom: "menuZoom",
    "Bring All to Front": "menuBringAllToFront",
    "Zoom In": "menuZoomIn",
    "Zoom Out": "menuZoomOut",
    "Enter Full Screen": "menuFullscreen",
    "Desktop Layout Help": "menuHelp2",
    "New Finder Window": "menuNewWindow",
    "New Folder": "menuNewWindow",
  };
  const key = map[label];
  return key ? t[key] : label;
}

export function MenuItemRow({
  item,
  t,
  onSelect,
}: {
  item: MenuBarItem;
  t: TranslationDict;
  onSelect: (item: MenuBarItem) => void;
}) {
  const [subOpen, setSubOpen] = useState(false);
  const [subPos, setSubPos] = useState<{ top: number; left: number } | null>(null);
  const rowRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasChildren = !!item.children && item.children.length > 0;

  const openSub = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setSubPos({ top: rect.top - 4, left: rect.right + 2 });
    setSubOpen(true);
  }, []);

  const closeSubDelayed = useCallback(() => {
    closeTimer.current = setTimeout(() => setSubOpen(false), 150);
  }, []);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  if (!hasChildren) {
    return (
      <MenuItem
        label={getMenuItemLabel(item.label, t)}
        shortcut={item.shortcut}
        disabled={item.disabled}
        onClick={() => onSelect(item)}
      />
    );
  }

  return (
    <div
      onMouseEnter={openSub}
      onMouseLeave={closeSubDelayed}
    >
      <button
        ref={rowRef}
        disabled={item.disabled}
        className={cn(
          "w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors cursor-default rounded-lg text-left",
          item.disabled
            ? "text-black/30 dark:text-white/30"
            : subOpen
              ? "bg-accent-active text-white"
              : "hover:bg-accent-active hover:text-white text-black dark:text-white",
        )}
      >
        <span>{getMenuItemLabel(item.label, t)}</span>
        <ChevronRight className="w-3.5 h-3.5 ml-6 opacity-60" />
      </button>

      {subOpen && subPos && typeof document !== "undefined" &&
        createPortal(
          <div
            data-menu-portal="true"
            className="fixed z-[99999] outline-none"
            style={{ top: subPos.top, left: subPos.left, minWidth: 192 }}
            onMouseEnter={openSub}
            onMouseLeave={closeSubDelayed}
          >
            <LiquidGlass variant="panel" className="py-1 px-1 w-full">
              {item.children!.map((child, i) =>
                child.separator ? (
                  <MenuSeparator key={`sep-${i}`} />
                ) : (
                  <MenuItemRow key={child.key} item={child} t={t} onSelect={onSelect} />
                ),
              )}
            </LiquidGlass>
          </div>,
          document.body,
        )}
    </div>
  );
}
