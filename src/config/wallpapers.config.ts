import type { WallpaperConfig } from '@/types/desktop';

export const WALLPAPERS: WallpaperConfig[] = [
  { id: 'bg-1', name: 'Sequoia Night',    url: '/wallpapers/bg-1.jpg', thumbnail: '/wallpapers/bg-1.jpg' },
  { id: 'bg-2', name: 'Deep Space',       url: '/wallpapers/bg-2.jpg', thumbnail: '/wallpapers/bg-2.jpg' },
  { id: 'bg-3', name: 'Aurora',           url: '/wallpapers/bg-3.jpg', thumbnail: '/wallpapers/bg-3.jpg' },
  { id: 'bg-4', name: 'Ocean',            url: '/wallpapers/bg-4.jpg', thumbnail: '/wallpapers/bg-4.jpg' },
  { id: 'bg-5', name: 'Horizon',          url: '/wallpapers/bg-5.jpg', thumbnail: '/wallpapers/bg-5.jpg' },
  { id: 'bg-6', name: 'Dusk',             url: '/wallpapers/bg-6.jpg', thumbnail: '/wallpapers/bg-6.jpg' },
  { id: 'bg-7', name: 'Midnight',         url: '/wallpapers/bg-7.jpg', thumbnail: '/wallpapers/bg-7.jpg' },
];

export const DEFAULT_WALLPAPER_ID = 'bg-1';
