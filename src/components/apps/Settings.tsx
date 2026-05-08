'use client';

import { useRef, useState } from 'react';
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
const SETTINGS_SECTIONS = [
  { id: 'appearance', label: 'Appearance' },
  { id: 'wallpaper', label: 'Wallpaper' },
] as const;

type SettingsSection = typeof SETTINGS_SECTIONS[number]['id'];

export function Settings({ windowId }: AppContentProps) {
  const osTheme = useStore((s) => s.osTheme);
  const colorScheme = useStore((s) => s.colorScheme);
  const glassEnabled = useStore((s) => s.glassEnabled);
  const wallpaperId = useStore((s) => s.wallpaperId);
  const setOSTheme = useStore((s) => s.setOSTheme);
  const setColorScheme = useStore((s) => s.setColorScheme);
  const setGlassEnabled = useStore((s) => s.setGlassEnabled);
  const setWallpaper = useStore((s) => s.setWallpaper);
  const [activeSection, setActiveSection] = useState<SettingsSection>('appearance');
  const appearanceRef = useRef<HTMLElement | null>(null);
  const wallpaperRef = useRef<HTMLElement | null>(null);

  void windowId;

  const handleSectionSelect = (section: SettingsSection) => {
    setActiveSection(section);
    const target = section === 'appearance' ? appearanceRef.current : wallpaperRef.current;
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex h-full flex-col bg-neutral-100 dark:bg-neutral-900 md:flex-row">
      <aside className="w-full shrink-0 border-b border-black/10 bg-white p-3 dark:border-white/10 dark:bg-neutral-800 md:w-52 md:border-b-0 md:border-r">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-black/40 dark:text-white/40">Settings</h2>
        <div className="flex gap-2 md:flex-col">
          {SETTINGS_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionSelect(section.id)}
              className={cn(
                'rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60',
                activeSection === section.id
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              )}
              aria-current={activeSection === section.id ? 'page' : undefined}
            >
              {section.label}
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="space-y-8">
          <section ref={appearanceRef}>
            <h3 className="mb-3 text-sm font-semibold">OS Theme</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {OS_THEMES.map((theme) => {
                const config = THEMES_CONFIG[theme];
                return (
                  <button
                    key={theme}
                    onClick={(e) => { e.stopPropagation(); setOSTheme(theme); }}
                    className={cn(
                      'rounded-xl border-2 p-3 text-left transition-all',
                      osTheme === theme
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-transparent bg-white hover:border-black/10 dark:bg-neutral-800 dark:hover:border-white/10'
                    )}
                  >
                    <p className="text-sm font-semibold">{config.name}</p>
                    <p className="mt-1 text-xs leading-5 text-black/50 dark:text-white/50">{config.description}</p>
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-sm font-semibold">Appearance</h3>
            <div className="flex flex-wrap gap-2">
              {COLOR_SCHEMES.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setColorScheme(id)}
                  className={cn(
                    'rounded-lg px-4 py-2 text-sm font-medium transition-all',
                    colorScheme === id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white hover:bg-black/5 dark:bg-neutral-800 dark:hover:bg-white/10'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-sm font-semibold">Effects</h3>
            <div className="flex flex-col gap-4 rounded-xl bg-white p-4 sm:flex-row sm:items-center sm:justify-between dark:bg-neutral-800">
              <div>
                <p className="text-sm font-medium">Liquid Glass</p>
                <p className="text-xs text-black/50 dark:text-white/50">WebGL-powered glass effect for macOS/iPad/iPhone themes</p>
              </div>
              <button
                onClick={() => setGlassEnabled(!glassEnabled)}
                className={cn(
                  'relative h-6 w-11 shrink-0 rounded-full transition-colors',
                  glassEnabled ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-neutral-600'
                )}
              >
                <span className={cn(
                  'absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all',
                  glassEnabled ? 'left-[22px]' : 'left-0.5'
                )} />
              </button>
            </div>
          </section>

          <section ref={wallpaperRef}>
            <h3 className="mb-3 text-sm font-semibold">Wallpaper</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {WALLPAPERS.map((w) => (
                <button
                  key={w.id}
                  onClick={() => setWallpaper(w.id)}
                  className={cn(
                    'aspect-video overflow-hidden rounded-xl border-2 transition-all',
                    wallpaperId === w.id ? 'scale-105 border-blue-500 shadow-lg' : 'border-transparent hover:border-black/20 dark:hover:border-white/20'
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.thumbnail}
                    alt={w.name}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
