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

  finder: [
    { label: 'File', items: [
      { label: 'New Finder Window', shortcut: '⌘N' },
      { label: 'New Folder', shortcut: '⌘⇧N' },
      { separator: true, label: '' },
      { label: 'Get Info', shortcut: '⌘I' },
      { label: 'Move to Trash', shortcut: '⌘⌫' },
      { separator: true, label: '' },
      { label: 'Close Window', shortcut: '⌘W' },
    ]},
    { label: 'Edit', items: [
      { label: 'Undo', shortcut: '⌘Z' },
      { separator: true, label: '' },
      { label: 'Cut', shortcut: '⌘X' },
      { label: 'Copy', shortcut: '⌘C' },
      { label: 'Paste', shortcut: '⌘V' },
      { label: 'Select All', shortcut: '⌘A' },
    ]},
    { label: 'View', items: [
      { label: 'As Icons', shortcut: '⌘1' },
      { label: 'As List', shortcut: '⌘2' },
      { label: 'As Columns', shortcut: '⌘3' },
      { separator: true, label: '' },
      { label: 'Show Path Bar', shortcut: '⌥⌘P' },
      { label: 'Show Status Bar', shortcut: '⌘/' },
    ]},
    { label: 'Go', items: [
      { label: 'Back', shortcut: '⌘[' },
      { label: 'Forward', shortcut: '⌘]' },
      { separator: true, label: '' },
      { label: 'Home', shortcut: '⇧⌘H' },
      { label: 'Desktop', shortcut: '⇧⌘D' },
      { label: 'Downloads', shortcut: '⌥⌘L' },
      { label: 'Documents', shortcut: '⇧⌘O' },
    ]},
    { label: 'Window', items: [
      { label: 'Minimize', shortcut: '⌘M' },
      { separator: true, label: '' },
      { label: 'Bring All to Front', shortcut: '' },
    ]},
    { label: 'Help', items: [{ label: 'Finder Help', shortcut: '⌘?' }]},
  ],

  terminal: [
    { label: 'Shell', items: [
      { label: 'New Tab', shortcut: '⌘T' },
      { label: 'New Window', shortcut: '⌘N' },
      { separator: true, label: '' },
      { label: 'Close', shortcut: '⌘W' },
      { label: 'Close All Windows', shortcut: '⌘Q' },
    ]},
    { label: 'Edit', items: [
      { label: 'Paste', shortcut: '⌘V' },
      { label: 'Select All', shortcut: '⌘A' },
      { separator: true, label: '' },
      { label: 'Find', shortcut: '⌘F' },
    ]},
    { label: 'View', items: [
      { label: 'Bigger', shortcut: '⌘+' },
      { label: 'Smaller', shortcut: '⌘-' },
      { separator: true, label: '' },
      { label: 'Clear Scrollback', shortcut: '⌘K' },
    ]},
    { label: 'Window', items: [
      { label: 'Minimize', shortcut: '⌘M' },
      { separator: true, label: '' },
      { label: 'Bring All to Front', shortcut: '' },
    ]},
    { label: 'Help', items: [{ label: 'Terminal Help', shortcut: '⌘?' }]},
  ],

  textedit: [
    { label: 'File', items: [
      { label: 'New', shortcut: '⌘N' },
      { label: 'Open...', shortcut: '⌘O' },
      { separator: true, label: '' },
      { label: 'Save', shortcut: '⌘S' },
      { label: 'Save As...', shortcut: '⇧⌘S' },
      { separator: true, label: '' },
      { label: 'Close', shortcut: '⌘W' },
    ]},
    { label: 'Edit', items: [
      { label: 'Undo', shortcut: '⌘Z' },
      { label: 'Redo', shortcut: '⌘⇧Z' },
      { separator: true, label: '' },
      { label: 'Cut', shortcut: '⌘X' },
      { label: 'Copy', shortcut: '⌘C' },
      { label: 'Paste', shortcut: '⌘V' },
      { label: 'Select All', shortcut: '⌘A' },
      { separator: true, label: '' },
      { label: 'Find', shortcut: '⌘F' },
    ]},
    { label: 'Format', items: [
      { label: 'Bold', shortcut: '⌘B' },
      { label: 'Italic', shortcut: '⌘I' },
      { label: 'Underline', shortcut: '⌘U' },
      { separator: true, label: '' },
      { label: 'Font Size +', shortcut: '⌘+' },
      { label: 'Font Size -', shortcut: '⌘-' },
    ]},
    { label: 'Window', items: [
      { label: 'Minimize', shortcut: '⌘M' },
    ]},
    { label: 'Help', items: [{ label: 'TextEdit Help', shortcut: '⌘?' }]},
  ],

  browser: [
    { label: 'File', items: [
      { label: 'New Tab', shortcut: '⌘T' },
      { label: 'New Window', shortcut: '⌘N' },
      { separator: true, label: '' },
      { label: 'Close Tab', shortcut: '⌘W' },
    ]},
    { label: 'Edit', items: [
      { label: 'Find', shortcut: '⌘F' },
      { label: 'Select All', shortcut: '⌘A' },
    ]},
    { label: 'View', items: [
      { label: 'Reload Page', shortcut: '⌘R' },
      { label: 'Force Reload', shortcut: '⇧⌘R' },
      { separator: true, label: '' },
      { label: 'Zoom In', shortcut: '⌘+' },
      { label: 'Zoom Out', shortcut: '⌘-' },
      { label: 'Actual Size', shortcut: '⌘0' },
      { separator: true, label: '' },
      { label: 'Developer Tools', shortcut: '⌥⌘I' },
    ]},
    { label: 'History', items: [
      { label: 'Back', shortcut: '⌘[' },
      { label: 'Forward', shortcut: '⌘]' },
      { separator: true, label: '' },
      { label: 'Show History', shortcut: '⌘Y' },
      { label: 'Clear History...', shortcut: '' },
    ]},
    { label: 'Window', items: [
      { label: 'Minimize', shortcut: '⌘M' },
    ]},
    { label: 'Help', items: [{ label: 'Browser Help', shortcut: '⌘?' }]},
  ],
};

const menuBarButtonClass =
  'flex h-6 items-center rounded-md px-2.5 text-[13px] leading-none transition-colors';

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
          menuBarButtonClass,
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

export function MenuBar({ onSpotlight }: { onSpotlight?: () => void } = {}) {
  const activeAppId = useStore((s) => s.activeAppId);
  const apps = useStore((s) => s.apps);
  const activeAppName = activeAppId ? (apps[activeAppId]?.name ?? 'Finder') : 'Finder';
  const menus = (activeAppId && APP_MENUS[activeAppId]) ? APP_MENUS[activeAppId] : APP_MENUS.default;

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
            <MenuDropdown key={menu.label} label={menu.label} items={menu.items} />
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
