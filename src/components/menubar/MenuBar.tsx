'use client';

import { useState, useRef, useEffect } from 'react';
import { Wifi, Battery, Search } from 'lucide-react';
import { useStore } from '@/store';
import { MenuBarClock } from './MenuBarClock';
import { ControlCenter } from './ControlCenter';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';
import { cn } from '@/lib/utils';

const APP_MENUS: Record<string, { label: string; items: { label: string; shortcut?: string; separator?: boolean; disabled?: boolean }[] }[]> = {
  default: [
    {
      label: 'File',
      items: [
        { label: 'New Window', shortcut: '⌘N' },
        { label: 'New Tab', shortcut: '⌘T' },
        { separator: true, label: '' },
        { label: 'Close', shortcut: '⌘W' },
      ],
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', shortcut: '⌘Z' },
        { label: 'Redo', shortcut: '⌘⇧Z' },
        { separator: true, label: '' },
        { label: 'Cut', shortcut: '⌘X' },
        { label: 'Copy', shortcut: '⌘C' },
        { label: 'Paste', shortcut: '⌘V' },
        { label: 'Select All', shortcut: '⌘A' },
      ],
    },
    {
      label: 'View',
      items: [
        { label: 'Zoom In', shortcut: '⌘+' },
        { label: 'Zoom Out', shortcut: '⌘-' },
        { separator: true, label: '' },
        { label: 'Enter Full Screen', shortcut: '⌃⌘F' },
      ],
    },
    {
      label: 'Window',
      items: [
        { label: 'Minimize', shortcut: '⌘M' },
        { label: 'Zoom', shortcut: '' },
        { separator: true, label: '' },
        { label: 'Bring All to Front', shortcut: '' },
      ],
    },
    {
      label: 'Help',
      items: [
        { label: 'Desktop Layout Help', shortcut: '' },
      ],
    },
  ],
};

function MenuDropdown({ label, items }: { label: string; items: { label: string; shortcut?: string; separator?: boolean; disabled?: boolean }[] }) {
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

  return (
    <div ref={ref} className="relative">
      <button
        onMouseDown={() => setOpen((o) => !o)}
        className={cn(
          'px-2.5 h-7 flex items-center text-[13px] transition-colors rounded',
          open
            ? 'bg-blue-500 text-white'
            : 'hover:bg-black/10 dark:hover:bg-white/10 text-black/80 dark:text-white/85'
        )}
      >
        {label}
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 min-w-48 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-2xl rounded-xl shadow-2xl border border-black/10 dark:border-white/10 py-1 z-[9999]">
          {items.map((item, i) =>
            item.separator ? (
              <div key={i} className="my-1 mx-2 h-px bg-black/10 dark:bg-white/10" />
            ) : (
              <button
                key={i}
                className={cn(
                  'w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors',
                  item.disabled
                    ? 'text-black/30 dark:text-white/30 cursor-default'
                    : 'hover:bg-blue-500 hover:text-white cursor-default'
                )}
                onClick={() => setOpen(false)}
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

export function MenuBar() {
  const activeAppId = useStore((s) => s.activeAppId);
  const apps = useStore((s) => s.apps);
  const activeAppName = activeAppId ? (apps[activeAppId]?.name ?? 'Finder') : 'Finder';
  const menus = APP_MENUS.default;

  return (
    <LiquidGlass variant="menubar">
      <div className="flex items-center w-full h-7 px-2">

        {/* Left: Apple + app menus */}
        <div className="flex items-center shrink-0">
          {/* Apple logo */}
          <button className="px-2.5 h-7 flex items-center hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors">
            <span className="text-[15px] leading-none">&#xf8ff;</span>
          </button>
          {/* Active app name */}
          <button className="px-2.5 h-7 flex items-center hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors">
            <span className="text-[13px] font-semibold text-black/85 dark:text-white/90">{activeAppName}</span>
          </button>
          {/* App menu dropdowns */}
          {menus.map((menu) => (
            <MenuDropdown key={menu.label} label={menu.label} items={menu.items} />
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right: system icons */}
        <div className="flex items-center shrink-0">
          <button className="px-2 h-7 flex items-center hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors text-black/70 dark:text-white/75">
            <Search className="w-3.5 h-3.5" />
          </button>
          <button className="px-2 h-7 flex items-center hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors text-black/70 dark:text-white/75">
            <Wifi className="w-3.5 h-3.5" />
          </button>
          <button className="px-2 h-7 flex items-center hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors text-black/70 dark:text-white/75">
            <Battery className="w-3.5 h-3.5" />
          </button>
          <ControlCenter />
          <div className="px-2 h-7 flex items-center">
            <MenuBarClock />
          </div>
        </div>
      </div>
    </LiquidGlass>
  );
}
