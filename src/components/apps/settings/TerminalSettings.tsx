'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const FONT_SIZES = [12, 13, 14, 16, 18, 20];
const THEMES = [
  { id: 'dark', label: 'Dark', bg: '#1c1c1e', fg: '#ffffff' },
  { id: 'light', label: 'Light', bg: '#ffffff', fg: '#1c1c1e' },
  { id: 'solarized', label: 'Solarized', bg: '#002b36', fg: '#839496' },
  { id: 'dracula', label: 'Dracula', bg: '#282a36', fg: '#f8f8f2' },
];

export function TerminalSettings() {
  const [fontSize, setFontSize] = useState(14);
  const [termTheme, setTermTheme] = useState('dark');
  const [cursorStyle, setCursorStyle] = useState<'block' | 'bar' | 'underline'>('block');
  const [bellEnabled, setBellEnabled] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-1">Terminal</h2>
        <p className="text-sm text-black/50 dark:text-white/50 mb-5">
          Customize your terminal appearance and behavior.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Theme</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setTermTheme(t.id)}
              className={cn(
                'rounded-[var(--radius-card)] border-2 p-3 text-left transition-all',
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
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Font Size</h3>
        <div className="flex flex-wrap gap-2">
          {FONT_SIZES.map((size) => (
            <button
              key={size}
              onClick={() => setFontSize(size)}
              className={cn(
                'rounded-[var(--radius-input)] px-3.5 py-1.5 text-sm font-medium transition-all',
                fontSize === size
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10'
              )}
            >
              {size}px
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Cursor Style</h3>
        <div className="flex gap-2">
          {(['block', 'bar', 'underline'] as const).map((style) => (
            <button
              key={style}
              onClick={() => setCursorStyle(style)}
              className={cn(
                'rounded-[var(--radius-input)] px-4 py-2 text-sm font-medium capitalize transition-all',
                cursorStyle === style
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10'
              )}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Sound</h3>
          <div className="rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Bell Sound</p>
            <p className="text-xs text-black/50 dark:text-white/50 mt-0.5">Play a sound when the terminal bell is triggered</p>
          </div>
          <button
            onClick={() => setBellEnabled(!bellEnabled)}
            className={cn(
              'relative h-6 w-11 shrink-0 rounded-full transition-colors ml-4',
              bellEnabled ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-white/15'
            )}
          >
            <span className={cn(
              'absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all',
              bellEnabled ? 'left-5.5' : 'left-0.5'
            )} />
          </button>
        </div>
      </div>
    </div>
  );
}
