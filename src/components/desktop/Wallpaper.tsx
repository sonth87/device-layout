'use client';

import { useState } from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { useStore } from '@/store';
import { WALLPAPERS } from '@/config/wallpapers.config';
import { useImageReady } from '@/hooks/useImageReady';
import { useStoreHydrated } from '@/hooks/useStoreHydrated';
import { WallpaperPicker } from './WallpaperPicker';

interface WallpaperProps {
  children: React.ReactNode;
}

export function Wallpaper({ children }: WallpaperProps) {
  const wallpaperId = useStore((s) => s.wallpaperId);
  const hydrated = useStoreHydrated();
  const [pickerOpen, setPickerOpen] = useState(false);

  const wallpaper = WALLPAPERS.find((w) => w.id === wallpaperId);
  const wallpaperUrl = wallpaper?.url ?? '/wallpapers/bg-1.jpg';
  const wallpaperReady = useImageReady(wallpaperUrl, hydrated);
  const backgroundImage = hydrated && wallpaperReady ? `url(${wallpaperUrl})` : 'none';

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger asChild>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundColor: '#fff',
            backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 120ms ease-out',
          }}
        >
          {children}
        </div>
      </ContextMenu.Trigger>

      <ContextMenu.Portal>
        <ContextMenu.Content className="min-w-44 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-xl rounded-xl shadow-2xl border border-black/10 dark:border-white/10 p-1 z-9999 text-xs">
          <ContextMenu.Item
            onSelect={() => setPickerOpen(true)}
            className="flex items-center px-3 py-1.5 rounded-lg cursor-default hover:bg-blue-500 hover:text-white transition-colors outline-none"
          >
            Change Wallpaper…
          </ContextMenu.Item>
          <ContextMenu.Separator className="my-1 h-px bg-black/10 dark:bg-white/10" />
          <ContextMenu.Item
            className="flex items-center px-3 py-1.5 rounded-lg cursor-default hover:bg-blue-500 hover:text-white transition-colors outline-none opacity-50"
            disabled
          >
            Sort Icons By Name
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>

      {pickerOpen && <WallpaperPicker onClose={() => setPickerOpen(false)} />}
    </ContextMenu.Root>
  );
}
