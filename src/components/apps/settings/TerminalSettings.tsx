'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useAppLayout } from '@/hooks/useAppLayout';
import { AppSection, AppListGroup, AppListRow, AppToggle, AppGrid } from '@/components/apps/ui';

const FONT_SIZES = [12, 13, 14, 16, 18, 20];
const THEMES = [
  { id: 'dark',      label: 'Dark',      bg: '#1c1c1e', fg: '#ffffff' },
  { id: 'light',     label: 'Light',     bg: '#ffffff', fg: '#1c1c1e' },
  { id: 'solarized', label: 'Solarized', bg: '#002b36', fg: '#839496' },
  { id: 'dracula',   label: 'Dracula',   bg: '#282a36', fg: '#f8f8f2' },
];
const CURSOR_STYLES = ['block', 'bar', 'underline'] as const;

export function TerminalSettings() {
  const [fontSize, setFontSize]       = useState(14);
  const [termTheme, setTermTheme]     = useState('dark');
  const [cursorStyle, setCursorStyle] = useState<'block' | 'bar' | 'underline'>('block');
  const [bellEnabled, setBellEnabled] = useState(false);

  const { isNarrow } = useAppLayout();

  return (
    <div className="space-y-6">
      {/* Theme */}
      <AppSection title="Theme">
        {isNarrow ? (
          <AppListGroup>
            {THEMES.map((t) => (
              <AppListRow
                key={t.id}
                label={t.label}
                icon={
                  <span
                    className="w-6 h-6 rounded-md shrink-0 flex items-center justify-center text-[10px] font-mono"
                    style={{ background: t.bg, color: t.fg }}
                  >$</span>
                }
                active={termTheme === t.id}
                onPress={() => setTermTheme(t.id)}
              />
            ))}
          </AppListGroup>
        ) : (
          <AppGrid narrow={2} medium={4} wide={4} gap="12px">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => setTermTheme(t.id)}
                className={cn(
                  'rounded-xl border-2 p-3 text-left transition-all',
                  termTheme === t.id
                    ? 'border-blue-500'
                    : 'border-transparent hover:border-black/10 dark:hover:border-white/10'
                )}
                style={{ background: t.bg }}
              >
                <p className="text-xs font-mono mb-1" style={{ color: t.fg }}>$ _</p>
                <p className="text-xs font-medium" style={{ color: t.fg }}>{t.label}</p>
              </button>
            ))}
          </AppGrid>
        )}
      </AppSection>

      {/* Font Size */}
      <AppSection title="Font Size">
        {isNarrow ? (
          <AppListGroup>
            {FONT_SIZES.map((size) => (
              <AppListRow
                key={size}
                label={`${size}px`}
                active={fontSize === size}
                onPress={() => setFontSize(size)}
              />
            ))}
          </AppListGroup>
        ) : (
          <div className="flex flex-wrap gap-2">
            {FONT_SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={cn(
                  'rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all',
                  fontSize === size
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10'
                )}
              >
                {size}px
              </button>
            ))}
          </div>
        )}
      </AppSection>

      {/* Cursor Style */}
      <AppSection title="Cursor Style">
        {isNarrow ? (
          <AppListGroup>
            {CURSOR_STYLES.map((style) => (
              <AppListRow
                key={style}
                label={style.charAt(0).toUpperCase() + style.slice(1)}
                active={cursorStyle === style}
                onPress={() => setCursorStyle(style)}
              />
            ))}
          </AppListGroup>
        ) : (
          <div className="flex gap-2">
            {CURSOR_STYLES.map((style) => (
              <button
                key={style}
                onClick={() => setCursorStyle(style)}
                className={cn(
                  'rounded-lg px-4 py-2 text-sm font-medium capitalize transition-all',
                  cursorStyle === style
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10'
                )}
              >
                {style}
              </button>
            ))}
          </div>
        )}
      </AppSection>

      {/* Sound */}
      <AppSection title="Sound">
        <AppListGroup>
          <AppListRow
            label="Bell Sound"
            subtitle="Play a sound when the terminal bell is triggered"
            control={<AppToggle checked={bellEnabled} onChange={setBellEnabled} />}
          />
        </AppListGroup>
      </AppSection>
    </div>
  );
}
