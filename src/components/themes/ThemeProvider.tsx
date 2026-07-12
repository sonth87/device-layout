'use client';

import { useEffect, useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useStore } from '@/store';
import { APPS_CONFIG } from '@/config/apps.config';
import { THEMES_CONFIG } from '@/config/themes.config';
import { GlassFilter } from '@/components/liquid-glass/GlassFilter';
import { WindowManager } from '@/components/window/WindowManager';
import { MacOSChrome } from './MacOSTheme';
import { IPadChrome } from './IPadTheme';
import { IPhoneChrome } from './IPhoneTheme';
import { WindowsChrome } from './WindowsTheme';
import { AndroidChrome } from './AndroidTheme';
import { Wallpaper } from '@/components/desktop/Wallpaper';
import { IconGrid } from '@/components/desktop/IconGrid';
import { WidgetLayer } from '@/components/widgets/WidgetLayer';
import { WidgetGalleryPanel } from '@/components/widgets/WidgetGalleryPanel';
import { Spotlight } from '@/components/macOS/Spotlight';
import { AppSwitcher } from '@/components/macOS/AppSwitcher';
import { NotificationBanner } from '@/components/notifications/NotificationBanner';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useWallpaperCycle } from '@/hooks/useWallpaperCycle';
import { getThemeCssVars } from '@/lib/theme-layout';
import type { AppConfig } from '@/types/app';

export interface ThemeProviderProps {
  /**
   * Apps to register on mount. Defaults to the built-in APPS_CONFIG so
   * existing (Next.js) callers are unaffected. A host embedding this as a
   * library (see src/lib.tsx) passes its own app list here instead.
   */
  apps?: AppConfig[];
}

/**
 * ThemeProvider — single root component.
 *
 * The desktop canvas (Wallpaper + IconGrid + WindowManager) is rendered
 * DIRECTLY inside this component and NEVER remounts on theme switch.
 * Only the chrome overlays (MacOSChrome, WindowsChrome, etc.) swap.
 * This prevents useWindowUrlSync from re-running and creating duplicate windows.
 */
export function ThemeProvider({ apps = APPS_CONFIG }: ThemeProviderProps = {}) {
  const osTheme = useStore((s) => s.osTheme);
  const colorScheme = useStore((s) => s.colorScheme);
  const resolvedColorScheme = useStore((s) => s.resolvedColorScheme);
  const resolveColorScheme = useStore((s) => s.resolveColorScheme);
  const registerApps = useStore((s) => s.registerApps);
  const launchApp = useStore((s) => s.launchApp);
  const glassEnabled = useStore((s) => s.glassEnabled);
  const isEditingWidgets = useStore((s) => s.isEditingWidgets);

  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [appSwitcherOpen, setAppSwitcherOpen] = useState(false);

  useKeyboardShortcuts({
    onSpotlight: () => setSpotlightOpen((v) => !v),
    onAppSwitcher: () => setAppSwitcherOpen((v) => !v),
  });

  useWallpaperCycle();

  useEffect(() => {
    registerApps(apps);
  }, [registerApps, apps]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      resolveColorScheme(mq.matches);
    };

    // Initialize and resolve based on current setting and system preference
    resolveColorScheme(mq.matches);

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [colorScheme, resolveColorScheme]);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-os-theme', osTheme);
    html.setAttribute('data-glass', glassEnabled ? 'true' : 'false');
    html.classList.toggle('dark', resolvedColorScheme === 'dark');
  }, [osTheme, resolvedColorScheme, glassEnabled]);

  const handleOpenApp = useCallback((appConfig: AppConfig) => {
    launchApp(appConfig);
  }, [launchApp]);

  const isMacLike = osTheme === 'macos' || osTheme === 'ipad';
  const showsDesktopIconGrid = osTheme !== 'ipad' && osTheme !== 'iphone' && osTheme !== 'android';
  const isMobile = osTheme === 'iphone' || osTheme === 'android';
  const themeConfig = THEMES_CONFIG[osTheme];

  // Phone frame: fill available height (up to 926px), derive width from 393:852 ratio
  const PHONE_RATIO = 393 / 852;
  const PHONE_MAX_H = 926;
  const PHONE_MAX_W = Math.round(PHONE_MAX_H * PHONE_RATIO); // 427px

  return (
    <div
      className="w-full h-full overflow-hidden relative select-none"
      data-os-theme={osTheme}
      data-glass={glassEnabled ? 'true' : 'false'}
      style={getThemeCssVars(themeConfig)}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* SVG filter singleton */}
      <GlassFilter />

      {/* Notification toasts — rendered above everything (outside phone frame) */}
      <NotificationBanner />

      {/* Spotlight + App Switcher (macOS / iPad only) */}
      {isMacLike && (
        <>
          <Spotlight
            open={spotlightOpen}
            onClose={() => setSpotlightOpen(false)}
          />
          <AppSwitcher
            open={appSwitcherOpen}
            onClose={() => setAppSwitcherOpen(false)}
          />
        </>
      )}

      {isMobile ? (
        /* ── Phone frame: fills viewport on small screens, capped on large ── */
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div
            className="relative overflow-hidden shadow-2xl ring-1 ring-white/10"
            style={{
              // Height: fill 100dvh with small padding, capped at PHONE_MAX_H
              height: `min(calc(100dvh - 32px), ${PHONE_MAX_H}px)`,
              // Width: derived from ratio, capped at PHONE_MAX_W; never exceeds 100vw
              width: `min(calc((min(calc(100dvh - 32px), ${PHONE_MAX_H}px)) * ${PHONE_RATIO}), 100vw)`,
              // Border-radius scales with height: 44px at max, smaller on small screens
              borderRadius: `min(44px, calc(min(calc(100dvh - 32px), ${PHONE_MAX_H}px) * 0.047))`,
            }}
          >
            {/* Wallpaper fills the phone frame */}
            <Wallpaper>{null}</Wallpaper>

            {/* Chrome — scoped inside the phone frame */}
            <AnimatePresence mode="wait">
              <motion.div
                key={osTheme}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {osTheme === 'iphone' && <IPhoneChrome onOpenApp={handleOpenApp} />}
                {osTheme === 'android' && <AndroidChrome onOpenApp={handleOpenApp} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <>
          {/* Desktop canvas — NEVER remounts, preserves WindowManager + useWindowUrlSync state */}
          <div className="absolute inset-0">
            <Wallpaper>
              <WidgetLayer />
              {showsDesktopIconGrid && <IconGrid key="icon-grid" onOpenApp={handleOpenApp} />}
              <WindowManager key="window-manager" />
            </Wallpaper>
          </div>

          {/* Widget gallery panel — slides up on Edit Widgets */}
          <AnimatePresence>
            {isEditingWidgets && <WidgetGalleryPanel />}
          </AnimatePresence>

          {/* Chrome overlay — animated cross-fade on theme switch */}
          <AnimatePresence mode="wait">
            <motion.div
              key={osTheme}
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {osTheme === 'macos'   && <MacOSChrome   onOpenApp={handleOpenApp} onSpotlight={() => setSpotlightOpen(true)} onAppSwitcher={() => setAppSwitcherOpen(true)} />}
              {osTheme === 'ipad'    && <IPadChrome    onOpenApp={handleOpenApp} />}
              {osTheme === 'windows' && <WindowsChrome onOpenApp={handleOpenApp} />}
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
