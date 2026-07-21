'use client';

import { useState, useRef, useEffect } from 'react';
import { useStore } from '@/store';
import { THEMES_CONFIG } from '@/config/themes.config';
import { cn } from '@/lib/utils';
import { useAppLayout } from '@/hooks/useAppLayout';
import { AppSection, AppListGroup, AppListRow, AppToggle, AppGrid } from '@/components/apps/ui';
import type { OSTheme, ColorScheme } from '@/types/theme';
import { useTranslation } from '@/hooks/useTranslation';
import { useSimpleModeFeatures } from '@/contexts/SimpleModeContext';

const OS_THEMES: OSTheme[] = ['macos', 'ipad', 'iphone', 'windows', 'android'];

const ACCENT_OPTIONS = [
  { id: 'multicolor' as const, bg: 'bg-gradient-to-tr from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-500', label: 'Multicolor' },
  { id: 'blue' as const, bg: 'bg-[#007afe]', label: 'Blue' },
  { id: 'purple' as const, bg: 'bg-[#9d3fc6]', label: 'Purple' },
  { id: 'pink' as const, bg: 'bg-[#f353a7]', label: 'Pink' },
  { id: 'red' as const, bg: 'bg-[#e03b30]', label: 'Red' },
  { id: 'orange' as const, bg: 'bg-[#f38218]', label: 'Orange' },
  { id: 'yellow' as const, bg: 'bg-[#f5c400]', label: 'Yellow' },
  { id: 'green' as const, bg: 'bg-[#63be44]', label: 'Green' },
  { id: 'graphite' as const, bg: 'bg-[#8e8e93]', label: 'Graphite' },
];

const HIGHLIGHT_OPTIONS = [
  { id: 'automatic', label: 'Automatic', color: '#ffb3b3' },
  { id: 'blue', label: 'Blue', color: '#b3d7ff' },
  { id: 'purple', label: 'Purple', color: '#e5b3ff' },
  { id: 'pink', label: 'Pink', color: '#ffb3df' },
  { id: 'red', label: 'Red', color: '#ffb3b3' },
  { id: 'orange', label: 'Orange', color: '#ffd9b3' },
  { id: 'yellow', label: 'Yellow', color: '#fff5b3' },
  { id: 'green', label: 'Green', color: '#c7ffb3' },
  { id: 'graphite', label: 'Graphite', color: '#d9d9d9' },
];

const ACCENT_HEX_MAP: Record<string, string> = {
  multicolor: '#007afe',
  blue: '#007afe',
  purple: '#9d3fc6',
  pink: '#f353a7',
  red: '#e03b30',
  orange: '#f38218',
  yellow: '#f5c400',
  green: '#63be44',
  graphite: '#8e8e93',
};

export function SettingsAppearance() {
  const osTheme     = useStore((s) => s.osTheme);
  const colorScheme = useStore((s) => s.colorScheme);
  const resolvedColorScheme = useStore((s) => s.resolvedColorScheme);
  const glassEnabled = useStore((s) => s.glassEnabled);
  const setOSTheme   = useStore((s) => s.setOSTheme);
  const setColorScheme = useStore((s) => s.setColorScheme);
  const setGlassEnabled = useStore((s) => s.setGlassEnabled);
  const glassMode = useStore((s) => s.glassMode);
  const setGlassMode = useStore((s) => s.setGlassMode);

  const accentColor = useStore((s) => s.accentColor);
  const highlightColor = useStore((s) => s.highlightColor);
  const allowDragOutOfBounds = useStore((s) => s.allowDragOutOfBounds);
  const setAccentColor = useStore((s) => s.setAccentColor);
  const setHighlightColor = useStore((s) => s.setHighlightColor);
  const setAllowDragOutOfBounds = useStore((s) => s.setAllowDragOutOfBounds);

  const { t, language } = useTranslation();

  const { isNarrow } = useAppLayout();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedHighlight = HIGHLIGHT_OPTIONS.find(o => o.id === highlightColor) || HIGHLIGHT_OPTIONS[0];

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

  const features = useSimpleModeFeatures();
  const allowedThemes = OS_THEMES.filter((theme) => features.allowedOSThemes.includes(theme));
  const showOSThemeSection = allowedThemes.length > 1;

  return (
    <div className="space-y-6">
      {/* OS Theme */}
      {showOSThemeSection && (
        <AppSection title={t.osTheme}>
          {isNarrow ? (
            <AppListGroup>
              {allowedThemes.map((theme) => (
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
              {allowedThemes.map((theme) => {
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
      )}

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

      {/* Theme Section */}
      <AppSection title="Theme">
        <AppListGroup className="!overflow-visible">
          {/* Accent Color Selection */}
          <div className="px-4 py-3 flex items-start justify-between gap-4">
            <span className="text-[15px] text-black dark:text-white pt-1 shrink-0">Color</span>
            <div className="flex items-start gap-1 flex-wrap justify-end">
              {ACCENT_OPTIONS.map((opt) => (
                <div key={opt.id} className="flex flex-col items-center gap-1 min-w-[36px] shrink-0">
                  <button
                    onClick={() => setAccentColor(opt.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full focus:outline-none transition-transform active:scale-95"
                  >
                    <div 
                      className={cn(
                        "w-5 h-5 rounded-full border border-black/10 dark:border-white/10 shadow-sm transition-all",
                        opt.bg,
                        accentColor === opt.id ? "scale-105" : "hover:scale-110"
                      )} 
                      style={{
                        boxShadow: accentColor === opt.id
                          ? `0 0 0 2px ${resolvedColorScheme === 'dark' ? '#2c2c2e' : '#ffffff'}, 0 0 0 4px ${ACCENT_HEX_MAP[opt.id]}`
                          : undefined
                      }}
                    />
                  </button>
                  {opt.id === 'multicolor' && (
                    <span className="text-[10px] text-black/40 dark:text-white/40 leading-none mt-0.5 whitespace-nowrap">
                      Multicolor
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Text Highlight Color Selection */}
          <AppListRow
            label="Text highlight color"
            control={
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(v => !v)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 border border-black/10 dark:border-white/10 rounded-lg text-xs text-black/85 dark:text-white/85 shadow-sm transition-all focus:outline-none min-w-[140px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/10 shrink-0"
                      style={{ 
                        backgroundColor: 
                          highlightColor === 'automatic'
                            ? {
                                multicolor: '#b3d7ff',
                                blue: '#b3d7ff',
                                purple: '#e5b3ff',
                                pink: '#ffb3df',
                                red: '#ffb3b3',
                                orange: '#ffd9b3',
                                yellow: '#fff5b3',
                                green: '#c7ffb3',
                                graphite: '#d9d9d9',
                              }[accentColor] || '#b3d7ff'
                            : selectedHighlight.color 
                      }}
                    />
                    <span>{selectedHighlight.label}</span>
                  </div>
                  <svg className="w-3 h-3 opacity-60 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 bottom-full mb-1 w-44 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-xl shadow-2xl py-1 z-50 overflow-hidden">
                    {HIGHLIGHT_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setHighlightColor(opt.id as any);
                          setDropdownOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-3 py-1.5 text-xs text-black/80 dark:text-white/80 hover:bg-accent-active hover:text-white transition-colors text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/10 shrink-0"
                            style={{ 
                              backgroundColor: 
                                opt.id === 'automatic'
                                  ? {
                                      multicolor: '#b3d7ff',
                                      blue: '#b3d7ff',
                                      purple: '#e5b3ff',
                                      pink: '#ffb3df',
                                      red: '#ffb3b3',
                                      orange: '#ffd9b3',
                                      yellow: '#fff5b3',
                                      green: '#c7ffb3',
                                      graphite: '#d9d9d9',
                                    }[accentColor] || '#b3d7ff'
                                  : opt.color 
                            }}
                          />
                          <span>{opt.label}</span>
                        </div>
                        {highlightColor === opt.id && (
                          <svg className="w-3.5 h-3.5 text-accent-active hover:text-white shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            }
          />
          <AppListRow
            label={language === 'vi' ? 'Cho phép kéo cửa sổ ra ngoài màn hình' : 'Allow dragging windows out of bounds'}
            control={
              <AppToggle
                checked={allowDragOutOfBounds}
                onChange={setAllowDragOutOfBounds}
              />
            }
          />
        </AppListGroup>
      </AppSection>
    </div>
  );
}
