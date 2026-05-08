'use client';

import { useStore } from '@/store';
import { THEMES_CONFIG } from '@/config/themes.config';
import { WALLPAPERS } from '@/config/wallpapers.config';
import { cn } from '@/lib/utils';
import type { OSTheme, ColorScheme } from '@/types/theme';
import type { AppContentProps } from './AppRegistry';

const OS_THEMES: OSTheme[] = ['macos', 'ipad', 'iphone', 'windows', 'android'];
const COLOR_SCHEMES: { id: ColorScheme; label: string }[] = [
  { id: 'auto', label: 'Auto' },
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
];

export function Settings({ windowId }: AppContentProps) {
  const osTheme = useStore((s) => s.osTheme);
  const colorScheme = useStore((s) => s.colorScheme);
  const glassEnabled = useStore((s) => s.glassEnabled);
  const wallpaperId = useStore((s) => s.wallpaperId);
  const setOSTheme = useStore((s) => s.setOSTheme);
  const setColorScheme = useStore((s) => s.setColorScheme);
  const setGlassEnabled = useStore((s) => s.setGlassEnabled);
  const setWallpaper = useStore((s) => s.setWallpaper);

  return (
    <div className="flex h-full bg-neutral-100 dark:bg-neutral-900">
      {/* Sidebar */}
      <aside className="w-48 shrink-0 bg-white dark:bg-neutral-800 border-r border-black/10 dark:border-white/10 p-3">
        <h2 className="text-xs font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider mb-3">Settings</h2>
        {['Appearance', 'Wallpaper'].map((section) => (
          <button key={section} className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium">
            {section}
          </button>
        ))}
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-auto p-6 space-y-8">

        {/* OS Theme */}
        <section>
          <h3 className="text-sm font-semibold mb-3">OS Theme</h3>
          <div className="grid grid-cols-3 gap-3">
            {OS_THEMES.map((theme) => {
              const config = THEMES_CONFIG[theme];
              return (
                <button
                  key={theme}
                  onClick={(e) => { e.stopPropagation(); setOSTheme(theme); }}
                  className={cn(
                    'p-3 rounded-xl border-2 text-left transition-all',
                    osTheme === theme
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-transparent bg-white dark:bg-neutral-800 hover:border-black/10 dark:hover:border-white/10'
                  )}
                >
                  <p className="text-xs font-semibold">{config.name}</p>
                  <p className="text-[10px] text-black/50 dark:text-white/50 mt-0.5">{config.description}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Color Scheme */}
        <section>
          <h3 className="text-sm font-semibold mb-3">Appearance</h3>
          <div className="flex gap-2">
            {COLOR_SCHEMES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setColorScheme(id)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  colorScheme === id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-neutral-800 hover:bg-black/5 dark:hover:bg-white/10'
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Liquid Glass */}
        <section>
          <h3 className="text-sm font-semibold mb-3">Effects</h3>
          <div className="flex items-center justify-between bg-white dark:bg-neutral-800 rounded-xl p-4">
            <div>
              <p className="text-sm font-medium">Liquid Glass</p>
              <p className="text-xs text-black/50 dark:text-white/50">WebGL-powered glass effect for macOS/iPad/iPhone themes</p>
            </div>
            <button
              onClick={() => setGlassEnabled(!glassEnabled)}
              className={cn(
                'w-11 h-6 rounded-full transition-colors relative shrink-0',
                glassEnabled ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-neutral-600'
              )}
            >
              <span className={cn(
                'absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all',
                glassEnabled ? 'left-[22px]' : 'left-0.5'
              )} />
            </button>
          </div>
        </section>

        {/* Wallpaper */}
        <section>
          <h3 className="text-sm font-semibold mb-3">Wallpaper</h3>
          <div className="grid grid-cols-3 gap-3">
            {WALLPAPERS.map((w) => (
              <button
                key={w.id}
                onClick={() => setWallpaper(w.id)}
                className={cn(
                  'aspect-video rounded-xl overflow-hidden border-2 transition-all',
                  wallpaperId === w.id ? 'border-blue-500 scale-105 shadow-lg' : 'border-transparent hover:border-black/20 dark:hover:border-white/20'
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.thumbnail}
                  alt={w.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
