'use client';

import { useStore } from '@/store';
import { THEMES_CONFIG } from '@/config/themes.config';
import { cn } from '@/lib/utils';
import type { OSTheme, ColorScheme } from '@/types/theme';

const OS_THEMES: OSTheme[] = ['macos', 'ipad', 'iphone', 'windows', 'android'];
const COLOR_SCHEMES: { id: ColorScheme; label: string }[] = [
  { id: 'auto', label: 'Auto' },
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
];

export function SettingsAppearance() {
  const osTheme = useStore((s) => s.osTheme);
  const colorScheme = useStore((s) => s.colorScheme);
  const glassEnabled = useStore((s) => s.glassEnabled);
  const setOSTheme = useStore((s) => s.setOSTheme);
  const setColorScheme = useStore((s) => s.setColorScheme);
  const setGlassEnabled = useStore((s) => s.setGlassEnabled);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-1">Appearance</h2>
        <p className="text-sm text-black/50 dark:text-white/50 mb-5">
          Customize the look and feel of your desktop environment.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold mb-3">OS Theme</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {OS_THEMES.map((theme) => {
                const config = THEMES_CONFIG[theme];
                return (
                  <button
                    key={theme}
                    onClick={(e) => { e.stopPropagation(); setOSTheme(theme); }}
                    className={cn(
                      'rounded-[var(--radius-card)] border-2 p-3 text-left transition-all',
                      osTheme === theme
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-transparent bg-white hover:border-black/10 dark:bg-white/5 dark:hover:border-white/10'
                    )}
                  >
                    <p className="text-sm font-semibold">{config.name}</p>
                    <p className="mt-1 text-xs text-black/50 dark:text-white/50 leading-5">
                      {config.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Color Scheme</h3>
            <div className="flex gap-2">
              {COLOR_SCHEMES.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setColorScheme(id)}
                  className={cn(
                    'rounded-[var(--radius-input)] px-4 py-2 text-sm font-medium transition-all',
                    colorScheme === id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Effects</h3>
            <div className="rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Liquid Glass</p>
                <p className="text-xs text-black/50 dark:text-white/50 mt-0.5">
                  WebGL-powered glass effect for macOS / iPad / iPhone themes
                </p>
              </div>
              <button
                onClick={() => setGlassEnabled(!glassEnabled)}
                className={cn(
                  'relative h-6 w-11 shrink-0 rounded-full transition-colors ml-4',
                  glassEnabled ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-white/15'
                )}
              >
                <span className={cn(
                  'absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all',
                  glassEnabled ? 'left-5.5' : 'left-0.5'
                )} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
