'use client';

import { lazy, Suspense, type ComponentType } from 'react';

/**
 * Registry of per-app settings panels.
 * Key must match AppConfig.appSettings.
 * Add a new entry here when adding app-specific settings.
 */
const APP_SETTINGS_MAP: Record<string, ReturnType<typeof lazy>> = {
  TerminalSettings: lazy(() =>
    import('./TerminalSettings').then((m) => ({ default: m.TerminalSettings }))
  ),
};

interface AppSettingsPanelProps {
  settingsKey: string;
}

export function AppSettingsPanel({ settingsKey }: AppSettingsPanelProps) {
  const Panel = APP_SETTINGS_MAP[settingsKey] as ComponentType | undefined;
  if (!Panel) {
    return (
      <div className="flex h-40 items-center justify-center text-sm text-black/40 dark:text-white/40">
        No settings panel registered for &quot;{settingsKey}&quot;.
      </div>
    );
  }
  return (
    <Suspense fallback={
      <div className="flex h-40 items-center justify-center text-sm text-black/40 dark:text-white/40">
        Loading…
      </div>
    }>
      <Panel />
    </Suspense>
  );
}
