'use client';

import { useStore } from '@/store';
import { THEMES_CONFIG } from '@/config/themes.config';
import { cn } from '@/lib/utils';
import { useAppLayout } from '@/hooks/useAppLayout';
import { AppSection, AppListGroup, AppListRow, AppToggle, AppGrid } from '@/components/apps/ui';
import type { OSTheme, ColorScheme } from '@/types/theme';

const OS_THEMES: OSTheme[] = ['macos', 'ipad', 'iphone', 'windows', 'android'];
const COLOR_SCHEMES: { id: ColorScheme; label: string }[] = [
  { id: 'auto', label: 'Auto' },
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
];

export function SettingsAppearance() {
  const osTheme   = useStore((s) => s.osTheme);
  const colorScheme = useStore((s) => s.colorScheme);
  const glassEnabled = useStore((s) => s.glassEnabled);
  const setOSTheme   = useStore((s) => s.setOSTheme);
  const setColorScheme = useStore((s) => s.setColorScheme);
  const setGlassEnabled = useStore((s) => s.setGlassEnabled);

  const { isNarrow } = useAppLayout();

  return (
    <div className="space-y-6">
      {/* OS Theme */}
      <AppSection title="OS Theme">
        {isNarrow ? (
          <AppListGroup>
            {OS_THEMES.map((theme) => (
              <AppListRow
                key={theme}
                label={THEMES_CONFIG[theme].name}
                active={osTheme === theme}
                onPress={() => setOSTheme(theme)}
              />
            ))}
          </AppListGroup>
        ) : (
          <AppGrid narrow={2} medium={3} wide={3} gap="12px">
            {OS_THEMES.map((theme) => {
              const config = THEMES_CONFIG[theme];
              return (
                <button
                  key={theme}
                  onClick={() => setOSTheme(theme)}
                  className={cn(
                    'rounded-xl border-2 p-3 text-left transition-all',
                    osTheme === theme
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-transparent bg-white hover:border-black/10 dark:bg-white/5 dark:hover:border-white/10'
                  )}
                >
                  <p className="text-sm font-semibold">{config.name}</p>
                  <p className="mt-1 text-xs text-black/50 dark:text-white/50 leading-5">{config.description}</p>
                </button>
              );
            })}
          </AppGrid>
        )}
      </AppSection>

      {/* Color Scheme */}
      <AppSection title="Color Scheme">
        {isNarrow ? (
          <AppListGroup>
            {COLOR_SCHEMES.map(({ id, label }) => (
              <AppListRow
                key={id}
                label={label}
                active={colorScheme === id}
                onPress={() => setColorScheme(id)}
              />
            ))}
          </AppListGroup>
        ) : (
          <div className="flex gap-2">
            {COLOR_SCHEMES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setColorScheme(id)}
                className={cn(
                  'rounded-lg px-4 py-2 text-sm font-medium transition-all',
                  colorScheme === id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10'
                )}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </AppSection>

      {/* Effects */}
      <AppSection title="Effects">
        <AppListGroup>
          <AppListRow
            label="Liquid Glass"
            subtitle="Glass effect for macOS / iPad / iPhone themes"
            control={<AppToggle checked={glassEnabled} onChange={setGlassEnabled} />}
          />
        </AppListGroup>
      </AppSection>
    </div>
  );
}
