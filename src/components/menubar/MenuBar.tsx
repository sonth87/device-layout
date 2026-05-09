'use client';

import { useState, useRef, useEffect } from 'react';
import { Wifi, Battery, Search } from 'lucide-react';
import { useStore } from '@/store';
import { MenuBarClock } from './MenuBarClock';
import { ControlCenter } from './ControlCenter';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';
import { DEFAULT_MENU_BAR_MENUS } from '@/config/apps.config';
import { cn } from '@/lib/utils';
import type { MenuBarMenu, MenuBarItem } from '@/types/app';

const menuBarButtonClass =
  'flex h-6 items-center rounded-md px-2.5 text-[13px] leading-none transition-colors';

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const handleItemClick = (item: MenuBarItem) => {
    setOpen(false);
    if (item.action && appId) {
      window.dispatchEvent(
        new CustomEvent('app:menu:action', { detail: { appId, action: item.action } })
      );
    }
  };

  return (
    <div ref={ref} className="relative">
      <button
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
      {open && (
          <div className="absolute top-full left-0 mt-1 min-w-48 bg-white/90 dark:bg-[#151821]/95 backdrop-blur-2xl rounded-[var(--radius-card)] shadow-2xl border border-black/10 dark:border-white/8 py-1 z-9999">
          {items.map((item, i) =>
            item.separator ? (
              <div key={`sep-${i}`} className="my-1 mx-2 h-px bg-black/10 dark:bg-white/10" />
            ) : (
              <button
                key={item.key}
                disabled={item.disabled}
                className={cn(
                  'w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors',
                  item.disabled
                    ? 'text-black/30 dark:text-white/30 cursor-default'
                    : 'hover:bg-blue-500 hover:text-white cursor-default'
                )}
                onClick={() => handleItemClick(item)}
              >
                <span>{item.label}</span>
                {item.shortcut && (
                  <span className="text-[11px] opacity-50 ml-6">{item.shortcut}</span>
                )}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

export function MenuBar({ onSpotlight }: { onSpotlight?: () => void } = {}) {
  const activeAppId = useStore((s) => s.activeAppId);
  const apps = useStore((s) => s.apps);
  const activeAppName = activeAppId ? (apps[activeAppId]?.name ?? 'Finder') : 'Finder';
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
          {/* Active app name */}
          <button className={cn(menuBarButtonClass, 'font-semibold hover:bg-black/10 dark:hover:bg-white/10')}>
            <span className="text-[13px] font-semibold text-black/85 dark:text-white/90">{activeAppName}</span>
          </button>
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
