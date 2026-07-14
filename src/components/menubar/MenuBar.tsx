"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";
import { createPortal } from "react-dom";
import { Wifi, Battery, Search, X } from "lucide-react";
import { useStore } from "@/store";
import { MenuBarClock } from "./MenuBarClock";
import { ControlCenter } from "./ControlCenter";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";
import { DEFAULT_MENU_BAR_MENUS } from "@/config/apps.config";
import { cn } from "@/lib/utils";
import type { MenuBarMenu, MenuBarItem, AppConfig } from "@/types/app";

// ─── MenuBar theme context (avoids prop-drilling to every button) ─────────────
const MenuBarThemeCtx = createContext<"light" | "dark">("dark");
/** Returns Tailwind classes for an inactive menu-bar button. */
function useMenuBtnClass() {
  const theme = useContext(MenuBarThemeCtx);
  return theme === "light"
    ? "text-black/80 hover:bg-black/10"
    : "text-white/85 hover:bg-white/10";
}

const menuBarButtonClass =
  "flex h-6 items-center rounded-md px-2.5 text-[13px] leading-none transition-colors";

// ─── Dropdown panel (portaled to body to escape overflow-hidden) ─────────────

interface DropdownPanelProps {
  anchorRef: React.RefObject<HTMLElement | null>;
  open: boolean;
  onClose: () => void;
  minWidth?: number;
  children: React.ReactNode;
}

function DropdownPanel({
  anchorRef,
  open,
  onClose,
  minWidth = 192,
  children,
}: DropdownPanelProps) {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !anchorRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    setPos({ top: rect.bottom + 6, left: rect.left });
  }, [open, anchorRef]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      // Don't close when clicking the trigger button or inside the panel
      if (anchorRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      onClose();
    };
    document.addEventListener("mousedown", handler, true);
    return () => document.removeEventListener("mousedown", handler, true);
  }, [open, onClose, anchorRef]);

  if (!open || !pos || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={panelRef}
      data-menu-portal="true"
      className="fixed z-[99999] outline-none"
      style={{ top: pos.top, left: pos.left, minWidth }}
    >
      <LiquidGlass variant="panel" className="py-1 px-1 w-full">
        {children}
      </LiquidGlass>
    </div>,
    document.body,
  );
}

// ─── Shared item components ──────────────────────────────────────────────────

function MenuItem({
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
        "w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors cursor-default rounded-lg",
        disabled
          ? "text-black/30 dark:text-white/30"
          : "hover:bg-accent-active hover:text-white",
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

function MenuSeparator() {
  return <div className="my-1 mx-2 h-px bg-black/10 dark:bg-white/10" />;
}

import { useTranslation, TranslationKey } from "@/hooks/useTranslation";

function getMenuLabel(label: string, t: any) {
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

function getMenuItemLabel(label: string, t: any) {
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

// ─── App Name Dropdown ───────────────────────────────────────────────────────

function AppNameDropdown({
  appConfig,
  appId,
  activeId,
  setActiveId,
}: {
  appConfig: AppConfig | null;
  appId: string | null;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}) {
  const open = activeId === "app-name";
  const setOpen = useCallback(
    (o: boolean | ((prev: boolean) => boolean)) => {
      const nextOpen = typeof o === "function" ? o(open) : o;
      setActiveId(nextOpen ? "app-name" : null);
    },
    [open, setActiveId],
  );

  const btnClass = useMenuBtnClass();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeWindow = useStore((s) => s.closeWindow);
  const { t, getAppName } = useTranslation();

  const appName = appConfig
    ? getAppName(appConfig.id, appConfig.name)
    : t.appNameFinder;
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const dispatchAction = (action: string) => {
    if (!appId) return;
    window.dispatchEvent(
      new CustomEvent("app:menu:action", { detail: { appId, action } }),
    );
  };

  const handleQuit = () => {
    setOpen(false);
    if (!appId) return;
    const { windows } = useStore.getState();
    const appWindows = Object.values(windows).filter((w) => w.appId === appId);
    appWindows.forEach((w) => closeWindow(w.id));
  };

  return (
    <>
      <button
        ref={buttonRef}
        onMouseDown={(e) => {
          if (e.button !== 0) return;
          setOpen((o) => !o);
        }}
        onMouseEnter={() => {
          if (activeId !== null) setActiveId("app-name");
        }}
        className={cn(
          menuBarButtonClass,
          "font-semibold",
          open ? "bg-accent-active text-white" : btnClass,
        )}
      >
        <span className="text-[13px] font-semibold">{appName}</span>
      </button>

      <DropdownPanel
        anchorRef={buttonRef}
        open={open}
        onClose={handleClose}
        minWidth={208}
      >
        <MenuItem
          label={`${t.aboutApp} ${appName}`}
          onClick={() => {
            setOpen(false);
            dispatchAction("about");
          }}
          disabled={!appId}
        />
        <MenuSeparator />
        <MenuItem label={t.services} disabled />
        <MenuSeparator />
        <MenuItem label={`${t.hide} ${appName}`} shortcut="⌘H" disabled />
        <MenuItem label={t.hideOthers} shortcut="⌥⌘H" disabled />
        <MenuItem label={t.showAll} disabled />
        <MenuSeparator />
        <MenuItem
          label={`${t.quit} ${appName}`}
          shortcut="⌘Q"
          onClick={handleQuit}
        />
      </DropdownPanel>
    </>
  );
}

// ─── Generic Menu Dropdown ───────────────────────────────────────────────────

function MenuDropdown({
  label,
  items,
  appId,
  activeId,
  setActiveId,
}: {
  label: string;
  items: MenuBarItem[];
  appId: string | null;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}) {
  const open = activeId === label;
  const setOpen = useCallback(
    (o: boolean | ((prev: boolean) => boolean)) => {
      const nextOpen = typeof o === "function" ? o(open) : o;
      setActiveId(nextOpen ? label : null);
    },
    [open, label, setActiveId],
  );

  const btnClass = useMenuBtnClass();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const handleItemClick = (item: MenuBarItem) => {
    setOpen(false);
    if (item.action && appId) {
      window.dispatchEvent(
        new CustomEvent("app:menu:action", {
          detail: { appId, action: item.action },
        }),
      );
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        onMouseDown={(e) => {
          if (e.button !== 0) return;
          setOpen((o) => !o);
        }}
        onMouseEnter={() => {
          if (activeId !== null) setActiveId(label);
        }}
        className={cn(
          menuBarButtonClass,
          open ? "bg-accent-active text-white" : btnClass,
        )}
      >
        {getMenuLabel(label, t)}
      </button>

      <DropdownPanel
        anchorRef={buttonRef}
        open={open}
        onClose={handleClose}
        minWidth={192}
      >
        {items.map((item, i) =>
          item.separator ? (
            <MenuSeparator key={`sep-${i}`} />
          ) : (
            <MenuItem
              key={item.key}
              label={getMenuItemLabel(item.label, t)}
              shortcut={item.shortcut}
              disabled={item.disabled}
              onClick={() => handleItemClick(item)}
            />
          ),
        )}
      </DropdownPanel>
    </>
  );
}

// ─── Apple Menu Dropdown ─────────────────────────────────────────────────────

function PersonalAboutDialog({ onClose }: { onClose: () => void }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const dragStart = useRef<{
    mx: number;
    my: number;
    ox: number;
    oy: number;
  } | null>(null);

  const onTitleBarPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).closest("button")) return;
      e.preventDefault();
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      dragStart.current = {
        mx: e.clientX,
        my: e.clientY,
        ox: offset.x,
        oy: offset.y,
      };
    },
    [offset],
  );

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

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 99999 }}
    >
      <div className="absolute inset-0" onClick={onClose} />
      <div
        className="relative flex flex-col items-center bg-neutral-100/97 dark:bg-[#1c1c1e]/97 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 w-80 overflow-hidden"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Title bar */}
        <div
          className="w-full flex items-center gap-2 px-4 pt-3.5 pb-2 border-b border-black/8 dark:border-white/8 cursor-move select-none bg-neutral-200/60 dark:bg-white/5"
          onPointerDown={onTitleBarPointerDown}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div
            className="flex items-center gap-2"
            onPointerDown={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#ff5f57" }}
            >
              {hovering && (
                <X className="w-2 h-2 text-red-900/80" strokeWidth={3} />
              )}
            </button>
            <div
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: "#d1d1d1" }}
            />
            <div
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: "#d1d1d1" }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center px-8 pt-6 pb-7 gap-2 select-none">
          <div className="w-20 h-20 mb-1 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
            S
          </div>
          <div className="text-[17px] font-bold text-black/90 dark:text-white/90">
            Skyline
          </div>
          <div className="text-[13px] text-black/55 dark:text-white/55">
            sonth87@gmail.com
          </div>
          <div className="w-full h-px bg-black/10 dark:bg-white/10 my-2" />
          <div className="text-[12px] text-black/45 dark:text-white/45 text-center leading-relaxed">
            macOS Desktop Layout
            <br />
            Version 1.0 · Built with Next.js & React
          </div>
          <a
            href="https://github.com/sonth87/device-layout"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mt-1"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 fill-current"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            sonth87/device-layout
          </a>
          <div className="text-[11px] text-black/35 dark:text-white/35 text-center mt-1">
            © 2024 Skyline. All rights reserved.
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function AppleMenuDropdown({
  activeId,
  setActiveId,
}: {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}) {
  const open = activeId === "apple";
  const setOpen = useCallback(
    (o: boolean | ((prev: boolean) => boolean)) => {
      const nextOpen = typeof o === "function" ? o(open) : o;
      setActiveId(nextOpen ? "apple" : null);
    },
    [open, setActiveId],
  );

  const btnClass = useMenuBtnClass();
  const [showAbout, setShowAbout] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const apps = useStore((s) => s.apps);
  const launchApp = useStore((s) => s.launchApp);
  const { t } = useTranslation();
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const handleSystemSettings = () => {
    setOpen(false);
    const settingsApp = apps["settings"];
    if (settingsApp) launchApp(settingsApp);
  };

  return (
    <>
      <button
        ref={buttonRef}
        onMouseDown={(e) => {
          if (e.button !== 0) return;
          setOpen((o) => !o);
        }}
        onMouseEnter={() => {
          if (activeId !== null) setActiveId("apple");
        }}
        className={cn(
          menuBarButtonClass,
          open ? "bg-accent-active text-white" : btnClass,
        )}
      >
        <span className="text-2xl leading-none">&#xf8ff;</span>
      </button>

      <DropdownPanel
        anchorRef={buttonRef}
        open={open}
        onClose={handleClose}
        minWidth={220}
      >
        <MenuItem
          label={t.aboutThisMac}
          onClick={() => {
            setOpen(false);
            setShowAbout(true);
          }}
        />
        <MenuSeparator />
        <MenuItem label={t.systemSettings} onClick={handleSystemSettings} />
      </DropdownPanel>

      {showAbout && <PersonalAboutDialog onClose={() => setShowAbout(false)} />}
    </>
  );
}

// ─── MenuBar ─────────────────────────────────────────────────────────────────

export function MenuBar({ onSpotlight }: { onSpotlight?: () => void } = {}) {
  const activeAppId = useStore((s) => s.activeAppId);
  const apps = useStore((s) => s.apps);
  const activeApp = activeAppId ? apps[activeAppId] : null;
  const menus: MenuBarMenu[] =
    activeApp?.menuBarMenus ?? DEFAULT_MENU_BAR_MENUS;
  const wallpaperTextTheme = useStore((s) => s.wallpaperTextTheme);

  // Build text / hover classes that adapt to wallpaper luminance rather than
  // the system color scheme, so dark text is used on bright wallpapers and
  // vice versa, regardless of Light/Dark Mode.
  const iconClass =
    wallpaperTextTheme === "light"
      ? "text-black/70 hover:bg-black/10"
      : "text-white/80 hover:bg-white/10";
  const iconBtnClass = cn(menuBarButtonClass, "px-2", iconClass);

  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);

  return (
    <MenuBarThemeCtx.Provider value={wallpaperTextTheme}>
      <LiquidGlass variant="menubar">
        <div
          data-menubar="true"
          className="flex h-(--menubar-height) w-full items-center px-2"
        >
          {/* Left: Apple + app menus */}
          <div className="flex shrink-0 items-center gap-0.5">
            {/* Apple menu */}
            <AppleMenuDropdown
              activeId={activeDropdownId}
              setActiveId={setActiveDropdownId}
            />
            {/* Active app name dropdown */}
            <AppNameDropdown
              appConfig={activeApp}
              appId={activeAppId}
              activeId={activeDropdownId}
              setActiveId={setActiveDropdownId}
            />
            {/* App menu dropdowns */}
            {menus.map((menu) => (
              <MenuDropdown
                key={menu.label}
                label={menu.label}
                items={menu.items}
                appId={activeAppId}
                activeId={activeDropdownId}
                setActiveId={setActiveDropdownId}
              />
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right: system icons */}
          <div className="flex shrink-0 items-center gap-0.5">
            <button
              onClick={onSpotlight}
              className={iconBtnClass}
              title="Spotlight Search (⌘Space)"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
            <button className={iconBtnClass}>
              <Wifi className="w-3.5 h-3.5" />
            </button>
            <button className={iconBtnClass}>
              <Battery className="w-3.5 h-3.5" />
            </button>
            <ControlCenter />
            <div className="flex h-6 items-center rounded-md px-2">
              <MenuBarClock />
            </div>
          </div>
        </div>
      </LiquidGlass>
    </MenuBarThemeCtx.Provider>
  );
}
