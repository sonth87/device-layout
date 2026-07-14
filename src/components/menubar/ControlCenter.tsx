'use client';

import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Wifi, Volume2, Sun, Moon, Monitor, Sliders } from 'lucide-react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';

export function ControlCenter() {
  const [open, setOpen] = useState(false);
  const colorScheme = useStore((s) => s.colorScheme);
  const setColorScheme = useStore((s) => s.setColorScheme);
  const glassEnabled = useStore((s) => s.glassEnabled);
  const setGlassEnabled = useStore((s) => s.setGlassEnabled);
  const wallpaperTextTheme = useStore((s) => s.wallpaperTextTheme);
  const [volume, setVolume] = useState(75);
  const [brightness, setBrightness] = useState(80);

  const triggerCls = wallpaperTextTheme === 'light'
    ? 'text-black/70 hover:bg-black/10'
    : 'text-white/80 hover:bg-white/10';

  const textPrimary = wallpaperTextTheme === 'light' ? 'text-black/90' : 'text-white/90';
  const textSecondary = wallpaperTextTheme === 'light' ? 'text-black/55' : 'text-white/55';
  const textTertiary = wallpaperTextTheme === 'light' ? 'text-black/45' : 'text-white/45';
  const subBg = wallpaperTextTheme === 'light' ? 'bg-black/5' : 'bg-white/5';
  const appearanceBtnCls = wallpaperTextTheme === 'light'
    ? 'hover:bg-black/10 text-black/70'
    : 'hover:bg-white/10 text-white/80';

  return (
    <Popover.Root open={open} onOpenChange={setOpen} modal={false}>
      <Popover.Trigger asChild>
        <button
          className={`p-1.5 rounded-md transition-colors flex items-center gap-1 ${triggerCls}`}
          aria-label="Control Center"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={6}
          className="w-72 z-[9999] outline-none"
          onInteractOutside={(e) => {
            // Don't close when clicking inside the popover's own children
            const target = e.target as Element;
            if (target.closest('[data-radix-popper-content-wrapper]')) e.preventDefault();
          }}
          onFocusOutside={(e) => e.preventDefault()}
        >
          <LiquidGlass variant="panel" className="p-4 w-full">
            <div className="grid grid-cols-2 gap-3">
            {/* WiFi */}
            <div className={cn("rounded-[var(--radius-input)] p-3 flex items-center gap-2", subBg)}>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                <Wifi className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className={cn("text-xs font-semibold", textPrimary)}>Wi-Fi</p>
                <p className={cn("text-[10px]", textSecondary)}>Connected</p>
              </div>
            </div>

            {/* Color scheme */}
            <div className={cn("rounded-[var(--radius-input)] p-3", subBg)}>
              <p className={cn("text-xs font-semibold mb-2", textPrimary)}>Appearance</p>
              <div className="flex gap-1">
                {[
                  { id: 'light' as const, icon: <Sun className="w-3 h-3" /> },
                  { id: 'auto' as const, icon: <Monitor className="w-3 h-3" /> },
                  { id: 'dark' as const, icon: <Moon className="w-3 h-3" /> },
                ].map(({ id, icon }) => (
                  <button
                    key={id}
                    onClick={() => setColorScheme(id)}
                    className={cn(
                      'flex-1 flex items-center justify-center py-1 rounded-md text-[10px] transition-colors',
                      colorScheme === id
                        ? 'bg-blue-500 text-white'
                        : appearanceBtnCls
                    )}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Brightness */}
            <div className={cn("col-span-2 rounded-[var(--radius-input)] p-3", subBg)}>
              <div className="flex items-center gap-2 mb-2">
                <Sun className={cn("w-3 h-3", textPrimary)} />
                <p className={cn("text-xs font-semibold", textPrimary)}>Brightness</p>
                <span className={cn("text-[10px] ml-auto", textTertiary)}>{brightness}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={brightness}
                onChange={(e) => setBrightness(+e.target.value)}
                className="w-full h-1.5 accent-blue-500"
              />
            </div>

            {/* Volume */}
            <div className={cn("col-span-2 rounded-[var(--radius-input)] p-3", subBg)}>
              <div className="flex items-center gap-2 mb-2">
                <Volume2 className={cn("w-3 h-3", textPrimary)} />
                <p className={cn("text-xs font-semibold", textPrimary)}>Sound</p>
                <span className={cn("text-[10px] ml-auto", textTertiary)}>{volume}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(+e.target.value)}
                className="w-full h-1.5 accent-blue-500"
              />
            </div>

            {/* Glass toggle */}
            <div className={cn("col-span-2 rounded-[var(--radius-input)] p-3 flex items-center justify-between", subBg)}>
              <p className={cn("text-xs font-semibold", textPrimary)}>Liquid Glass</p>
              <button
                onClick={() => setGlassEnabled(!glassEnabled)}
                className={cn(
                  'w-10 h-5 rounded-full transition-colors relative',
                  glassEnabled ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-white/15'
                )}
              >
                <span className={cn(
                  'absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all',
                  glassEnabled ? 'left-5' : 'left-0.5'
                )} />
              </button>
            </div>
            </div>
          </LiquidGlass>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

