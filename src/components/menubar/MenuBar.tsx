'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Wifi, Battery, Search } from 'lucide-react';
import { useStore } from '@/store';
import { MenuBarClock } from './MenuBarClock';
import { ControlCenter } from './ControlCenter';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';
import { DEFAULT_MENU_BAR_MENUS } from '@/config/apps.config';
import { cn } from '@/lib/utils';
import type { MenuBarMenu, MenuBarItem, AppConfig } from '@/types/app';

const menuBarButtonClass =
  'flex h-6 items-center rounded-md px-2.5 text-[13px] leading-none transition-colors';

// ─── Dropdown panel (portaled to body to escape overflow-hidden) ─────────────

interface DropdownPanelProps {
  anchorRef: React.RefObject<HTMLElement | null>;
  open: boolean;
  onClose: () => void;
  minWidth?: number;
  children: React.ReactNode;
}

function DropdownPanel({ anchorRef, open, onClose, minWidth = 192, children }: DropdownPanelProps) {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !anchorRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    setPos({ top: rect.bottom + 4, left: rect.left });
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
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, onClose, anchorRef]);

  if (!open || !pos || typeof document === 'undefined') return null;

  return createPortal(
    <div
      ref={panelRef}
      className="fixed bg-white/92 dark:bg-[#1e2030]/98 backdrop-blur-2xl rounded-(--radius-card) shadow-2xl border border-black/10 dark:border-white/10 py-1 px-1"
      style={{ top: pos.top, left: pos.left, minWidth, zIndex: 99999 }}
    >
      {children}
    </div>,
    document.body
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
        'w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors cursor-default rounded-(--radius-card)',
        disabled
          ? 'text-black/30 dark:text-white/30'
          : 'hover:bg-blue-500 hover:text-white'
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

// ─── App Name Dropdown ───────────────────────────────────────────────────────

function AppNameDropdown({
  appConfig,
  appId,
}: {
  appConfig: AppConfig | null;
  appId: string | null;
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeWindow = useStore((s) => s.closeWindow);

  const appName = appConfig?.name ?? 'Finder';
  const handleClose = useCallback(() => setOpen(false), []);

  const dispatchAction = (action: string) => {
    if (!appId) return;
    window.dispatchEvent(
      new CustomEvent('app:menu:action', { detail: { appId, action } })
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
        onMouseDown={() => setOpen((o) => !o)}
        className={cn(
          menuBarButtonClass,
          'font-semibold',
          open
            ? 'bg-blue-500 text-white'
            : 'hover:bg-black/10 dark:hover:bg-white/10 text-black/85 dark:text-white/90'
        )}
      >
        <span className="text-[13px] font-semibold">{appName}</span>
      </button>

      <DropdownPanel anchorRef={buttonRef} open={open} onClose={handleClose} minWidth={208}>
        <MenuItem
          label={`About ${appName}`}
          onClick={() => { setOpen(false); dispatchAction('about'); }}
          disabled={!appId}
        />
        <MenuSeparator />
        <MenuItem label="Services" disabled />
        <MenuSeparator />
        <MenuItem label={`Hide ${appName}`} shortcut="⌘H" disabled />
        <MenuItem label="Hide Others" shortcut="⌥⌘H" disabled />
        <MenuItem label="Show All" disabled />
        <MenuSeparator />
        <MenuItem label={`Quit ${appName}`} shortcut="⌘Q" onClick={handleQuit} />
      </DropdownPanel>
    </>
  );
}

// ─── Generic Menu Dropdown ───────────────────────────────────────────────────

function MenuDropdown({
  label,
  items,
  appId,
}: {
  label: string;
  items: MenuBarItem[];
  appId: string | null;
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => setOpen(false), []);

  const handleItemClick = (item: MenuBarItem) => {
    setOpen(false);
    if (item.action && appId) {
      window.dispatchEvent(
        new CustomEvent('app:menu:action', { detail: { appId, action: item.action } })
      );
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        onMouseDown={() => setOpen((o) => !o)}
        className={cn(
          menuBarButtonClass,
          open
            ? 'bg-blue-500 text-white'
            : 'hover:bg-black/10 dark:hover:bg-white/10 text-black/80 dark:text-white/85'
        )}
      >
        {label}
      </button>

      <DropdownPanel anchorRef={buttonRef} open={open} onClose={handleClose} minWidth={192}>
        {items.map((item, i) =>
          item.separator ? (
            <MenuSeparator key={`sep-${i}`} />
          ) : (
            <MenuItem
              key={item.key}
              label={item.label}
              shortcut={item.shortcut}
              disabled={item.disabled}
              onClick={() => handleItemClick(item)}
            />
          )
        )}
      </DropdownPanel>
    </>
  );
}

// ─── MenuBar ─────────────────────────────────────────────────────────────────

export function MenuBar({ onSpotlight }: { onSpotlight?: () => void } = {}) {
  const activeAppId = useStore((s) => s.activeAppId);
  const apps = useStore((s) => s.apps);
  const activeApp = activeAppId ? apps[activeAppId] : null;
  const menus: MenuBarMenu[] = activeApp?.menuBarMenus ?? DEFAULT_MENU_BAR_MENUS;

  return (
    <LiquidGlass variant="menubar">
      <div className="flex h-(--menubar-height) w-full items-center px-2">

        {/* Left: Apple + app menus */}
        <div className="flex shrink-0 items-center gap-0.5">
          {/* Apple logo */}
          <button className={cn(menuBarButtonClass, 'hover:bg-black/10 dark:hover:bg-white/10')}>
            <span className="text-[15px] leading-none">&#xf8ff;</span>
          </button>
          {/* Active app name dropdown */}
          <AppNameDropdown appConfig={activeApp} appId={activeAppId} />
          {/* App menu dropdowns */}
          {menus.map((menu) => (
            <MenuDropdown key={menu.label} label={menu.label} items={menu.items} appId={activeAppId} />
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right: system icons */}
        <div className="flex shrink-0 items-center gap-0.5">
          <button
            onClick={onSpotlight}
            className={cn(menuBarButtonClass, 'px-2 text-black/70 hover:bg-black/10 dark:text-white/75 dark:hover:bg-white/10')}
            title="Spotlight Search (⌘Space)"
          >
            <Search className="w-3.5 h-3.5" />
          </button>
          <button className={cn(menuBarButtonClass, 'px-2 text-black/70 hover:bg-black/10 dark:text-white/75 dark:hover:bg-white/10')}>
            <Wifi className="w-3.5 h-3.5" />
          </button>
          <button className={cn(menuBarButtonClass, 'px-2 text-black/70 hover:bg-black/10 dark:text-white/75 dark:hover:bg-white/10')}>
            <Battery className="w-3.5 h-3.5" />
          </button>
          <ControlCenter />
          <div className="flex h-6 items-center rounded-md px-2">
            <MenuBarClock />
          </div>
        </div>
      </div>
    </LiquidGlass>
  );
}
