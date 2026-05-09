'use client';

import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Wifi, Volume2, Sun, Moon, Monitor, Sliders } from 'lucide-react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';

export function ControlCenter() {
  const [open, setOpen] = useState(false);
  const colorScheme = useStore((s) => s.colorScheme);
  const setColorScheme = useStore((s) => s.setColorScheme);
  const glassEnabled = useStore((s) => s.glassEnabled);
  const setGlassEnabled = useStore((s) => s.setGlassEnabled);
  const [volume, setVolume] = useState(75);
  const [brightness, setBrightness] = useState(80);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex items-center gap-1"
          aria-label="Control Center"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={6}
          className="w-72 bg-white/85 dark:bg-neutral-800/85 backdrop-blur-2xl rounded-[var(--radius-card)] shadow-2xl border border-black/10 dark:border-white/10 p-4 z-9999"
        >
          <div className="grid grid-cols-2 gap-3">
            {/* WiFi */}
            <div className="bg-black/5 dark:bg-white/5 rounded-[var(--radius-input)] p-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                <Wifi className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold">Wi-Fi</p>
                <p className="text-[10px] text-black/50 dark:text-white/50">Connected</p>
              </div>
            </div>

            {/* Color scheme */}
            <div className="bg-black/5 dark:bg-white/5 rounded-[var(--radius-input)] p-3">
              <p className="text-xs font-semibold mb-2">Appearance</p>
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
                        : 'hover:bg-black/10 dark:hover:bg-white/10'
                    )}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Brightness */}
            <div className="col-span-2 bg-black/5 dark:bg-white/5 rounded-[var(--radius-input)] p-3">
              <div className="flex items-center gap-2 mb-2">
                <Sun className="w-3 h-3" />
                <p className="text-xs font-semibold">Brightness</p>
                <span className="text-[10px] text-black/40 dark:text-white/40 ml-auto">{brightness}%</span>
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
            <div className="col-span-2 bg-black/5 dark:bg-white/5 rounded-[var(--radius-input)] p-3">
              <div className="flex items-center gap-2 mb-2">
                <Volume2 className="w-3 h-3" />
                <p className="text-xs font-semibold">Sound</p>
                <span className="text-[10px] text-black/40 dark:text-white/40 ml-auto">{volume}%</span>
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
            <div className="col-span-2 bg-black/5 dark:bg-white/5 rounded-[var(--radius-input)] p-3 flex items-center justify-between">
              <p className="text-xs font-semibold">Liquid Glass</p>
              <button
                onClick={() => setGlassEnabled(!glassEnabled)}
                className={cn(
                  'w-10 h-5 rounded-full transition-colors relative',
                  glassEnabled ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-neutral-600'
                )}
              >
                <span className={cn(
                  'absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all',
                  glassEnabled ? 'left-5' : 'left-0.5'
                )} />
              </button>
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
