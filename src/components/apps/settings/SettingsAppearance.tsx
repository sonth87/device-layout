'use client';

import { useStore } from '@/store';
import { THEMES_CONFIG } from '@/config/themes.config';
import { cn } from '@/lib/utils';
import { useAppLayout } from '@/hooks/useAppLayout';
import { AppSection, AppListGroup, AppListRow, AppToggle, AppGrid } from '@/components/apps/ui';
import type { OSTheme, ColorScheme } from '@/types/theme';
import { useTranslation } from '@/hooks/useTranslation';

const OS_THEMES: OSTheme[] = ['macos', 'ipad', 'iphone', 'windows', 'android'];

export function SettingsAppearance() {
  const osTheme     = useStore((s) => s.osTheme);
  const colorScheme = useStore((s) => s.colorScheme);
  const glassEnabled = useStore((s) => s.glassEnabled);
  const setOSTheme   = useStore((s) => s.setOSTheme);
  const setColorScheme = useStore((s) => s.setColorScheme);
  const setGlassEnabled = useStore((s) => s.setGlassEnabled);
  const glassMode = useStore((s) => s.glassMode);
  const setGlassMode = useStore((s) => s.setGlassMode);
  const { t } = useTranslation();

  const { isNarrow } = useAppLayout();

  const COLOR_SCHEMES: { id: ColorScheme; label: string; preview: React.ReactNode }[] = [
    {
      id: 'auto',
      label: t.colorSchemeAuto,
      preview: (
        <div className="w-full h-full rounded-lg flex overflow-hidden border border-black/5 dark:border-white/5">
          <div className="flex-1 bg-slate-100 p-1.5 flex flex-col gap-1 border-r border-black/5">
            <div className="flex-1 bg-white rounded-l-md shadow-sm p-1 flex flex-col justify-between border-y border-l border-black/5">
              <div className="flex gap-0.5">
                <div className="w-1 h-1 rounded-full bg-red-400" />
                <div className="w-1 h-1 rounded-full bg-yellow-400" />
              </div>
              <div className="h-1.5 bg-red-100 rounded-l w-4" />
            </div>
          </div>
          <div className="flex-1 bg-[#1b2030] p-1.5 flex flex-col gap-1">
            <div className="flex-1 bg-[#151821] rounded-r-md shadow-sm p-1 flex flex-col justify-between border-y border-r border-white/5">
              <div className="flex gap-0.5 justify-end">
                <div className="w-1 h-1 rounded-full bg-yellow-400" />
                <div className="w-1 h-1 rounded-full bg-green-400" />
              </div>
              <div className="h-1.5 bg-red-950 rounded-r w-4 ml-auto" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'light',
      label: t.colorSchemeLight,
      preview: (
        <div className="w-full h-full bg-slate-100 rounded-lg p-1.5 flex flex-col gap-1 border border-black/5">
          <div className="flex-1 bg-white rounded-md shadow-sm p-1 flex flex-col justify-between border border-black/5">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 rounded-full bg-red-400" />
              <div className="w-1 h-1 rounded-full bg-yellow-400" />
              <div className="w-1 h-1 rounded-full bg-green-400" />
            </div>
            <div className="h-1.5 bg-red-100 rounded w-6" />
          </div>
        </div>
      ),
    },
    {
      id: 'dark',
      label: t.colorSchemeDark,
      preview: (
        <div className="w-full h-full bg-[#1b2030] rounded-lg p-1.5 flex flex-col gap-1 border border-white/5">
          <div className="flex-1 bg-[#151821] rounded-md shadow-sm p-1 flex flex-col justify-between border border-white/5">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 rounded-full bg-red-400" />
              <div className="w-1 h-1 rounded-full bg-yellow-400" />
              <div className="w-1 h-1 rounded-full bg-green-400" />
            </div>
            <div className="h-1.5 bg-red-950 rounded w-6" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* OS Theme */}
      <AppSection title={t.osTheme}>
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
                  <p className="text-sm font-semibold text-black/90 dark:text-white/90">{config.name}</p>
                  <p className="mt-1 text-xs text-black/50 dark:text-white/50 leading-5">{config.description}</p>
                </button>
              );
            })}
          </AppGrid>
        )}
      </AppSection>

      {/* Color Scheme */}
      <AppSection title={t.colorScheme}>
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
          <div className="flex gap-5">
            {COLOR_SCHEMES.map(({ id, label, preview }) => (
              <button
                key={id}
                onClick={() => setColorScheme(id)}
                className="flex flex-col items-center gap-1.5 focus:outline-none"
              >
                <div
                  className={cn(
                    'w-24 h-16 rounded-xl p-0.5 transition-all',
                    colorScheme === id
                      ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-neutral-900'
                      : 'hover:opacity-80'
                  )}
                >
                  {preview}
                </div>
                <span
                  className={cn(
                    'text-xs font-semibold',
                    colorScheme === id ? 'text-black dark:text-white' : 'text-black/60 dark:text-white/60'
                  )}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        )}
      </AppSection>

      {/* Effects */}
      <AppSection title={t.effects}>
        <AppListGroup>
          <AppListRow
            label={t.liquidGlass}
            subtitle={t.liquidGlassDesc}
            control={<AppToggle checked={glassEnabled} onChange={setGlassEnabled} />}
          />
        </AppListGroup>
      </AppSection>

      {/* Liquid Glass Mode */}
      {glassEnabled && (
        <AppSection title="Liquid Glass">
          <p className="text-xs text-black/50 dark:text-white/50 mb-3 -mt-2">
            Choose your preferred look for Liquid Glass.
          </p>
          <div className="flex gap-5">
            {[
              {
                id: 'clear' as const,
                label: 'Clear',
                preview: (
                  <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-100/30 via-transparent to-transparent" />
                    <div className="w-16 h-10 rounded-lg bg-white/10 border border-white/40 shadow-md flex items-center justify-center backdrop-blur-[3px] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
                      <div className="w-8 h-4 rounded bg-white/20 border border-white/10" />
                    </div>
                  </div>
                ),
              },
              {
                id: 'tinted' as const,
                label: 'Tinted',
                preview: (
                  <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600">
                    <div className="w-16 h-10 rounded-lg bg-white/25 border border-white/25 shadow-md flex items-center justify-center backdrop-blur-[16px] overflow-hidden">
                      <div className="w-8 h-4 rounded bg-white/30 border border-white/10" />
                    </div>
                  </div>
                ),
              },
            ].map(({ id, label, preview }) => (
              <button
                key={id}
                onClick={() => setGlassMode(id)}
                className="flex flex-col items-center gap-1.5 focus:outline-none"
              >
                <div
                  className={cn(
                    'w-24 h-16 rounded-xl p-0.5 transition-all',
                    glassMode === id
                      ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-neutral-900'
                      : 'hover:opacity-80'
                  )}
                >
                  {preview}
                </div>
                <span
                  className={cn(
                    'text-xs font-semibold',
                    glassMode === id ? 'text-black dark:text-white' : 'text-black/60 dark:text-white/60'
                  )}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </AppSection>
      )}
    </div>
  );
}
