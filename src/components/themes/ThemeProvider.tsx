import { useEffect, useCallback, useState, useMemo } from 'react';
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
import { cn } from '@/lib/utils';
import type { AppConfig } from '@/types/app';
import type { SimpleModeProp } from '@/types/simple-mode';
import type { ColorScheme } from '@/types/theme';
import { resolveSimpleModeFeatures } from '@/utils/simple-mode-resolver';
import { SimpleModeProvider } from '@/contexts/SimpleModeContext';

export interface ThemeProviderProps {
  /**
   * Apps to register on mount. Defaults to the built-in APPS_CONFIG so
   * existing (Next.js) callers are unaffected. A host embedding this as a
   * library (see src/lib.tsx) passes its own app list here instead.
   */
  apps?: AppConfig[];
  /** Enables Simple Mode layout (boolean or detailed SimpleModeFeatures object). */
  isSimpleMode?: SimpleModeProp;
  /** Sets or overrides active color scheme ('dark' | 'light' | 'auto'). */
  colorScheme?: ColorScheme;
}

/**
 * ThemeProvider — single root component.
 *
 * The desktop canvas (Wallpaper + IconGrid + WindowManager) is rendered
 * DIRECTLY inside this component and NEVER remounts on theme switch.
 * Only the chrome overlays (MacOSChrome, WindowsChrome, etc.) swap.
 * This prevents useWindowUrlSync from re-running and creating duplicate windows.
 */
export function ThemeProvider({ apps, isSimpleMode = false, colorScheme: colorSchemeProp }: ThemeProviderProps = {}) {
  const osTheme = useStore((s) => s.osTheme);
  const colorScheme = useStore((s) => s.colorScheme);
  const setColorScheme = useStore((s) => s.setColorScheme);
  const resolvedColorScheme = useStore((s) => s.resolvedColorScheme);
  const resolveColorScheme = useStore((s) => s.resolveColorScheme);

  useEffect(() => {
    if (colorSchemeProp && colorSchemeProp !== colorScheme) {
      setColorScheme(colorSchemeProp);
    }
  }, [colorSchemeProp, colorScheme, setColorScheme]);
  const registerApps = useStore((s) => s.registerApps);
  const launchApp = useStore((s) => s.launchApp);
  const glassEnabled = useStore((s) => s.glassEnabled);
  const isEditingWidgets = useStore((s) => s.isEditingWidgets);
  const accentColor = useStore((s) => s.accentColor);
  const highlightColor = useStore((s) => s.highlightColor);

  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [appSwitcherOpen, setAppSwitcherOpen] = useState(false);
  const [isRealMobile, setIsRealMobile] = useState(false);

  // Normalize simple mode feature flags
  const features = useMemo(() => resolveSimpleModeFeatures(isSimpleMode, osTheme), [isSimpleMode, osTheme]);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const isNarrow = window.innerWidth <= 768;
      setIsRealMobile(isMobileUA || isNarrow);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useKeyboardShortcuts({
    onSpotlight: () => setSpotlightOpen((v) => !v),
    onAppSwitcher: () => setAppSwitcherOpen((v) => !v),
  });

  useWallpaperCycle();

  // Filter default apps based on resolved features.defaultApps (boolean | string[])
  const appsToRegister = useMemo(() => {
    let defaultAppsList: AppConfig[] = [];

    if (features.defaultApps === true) {
      defaultAppsList = APPS_CONFIG;
    } else if (Array.isArray(features.defaultApps)) {
      const allowedIds = new Set(features.defaultApps);
      defaultAppsList = APPS_CONFIG.filter((a) => allowedIds.has(a.id));
    }

    if (apps) {
      const customIds = new Set(apps.map((a) => a.id));
      const filteredDefaults = defaultAppsList.filter((a) => !customIds.has(a.id));
      return [...apps, ...filteredDefaults];
    }

    return defaultAppsList;
  }, [apps, features.defaultApps]);

  useEffect(() => {
    registerApps(appsToRegister);
  }, [registerApps, appsToRegister]);

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

  const activeOSTheme = osTheme;

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-os-theme', activeOSTheme);
    html.setAttribute('data-glass', glassEnabled ? 'true' : 'false');
    html.classList.toggle('dark', resolvedColorScheme === 'dark');

    // Sync accent color
    const ACCENT_COLOR_MAP: Record<string, string> = {
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
    const accentHex = ACCENT_COLOR_MAP[accentColor] || '#007afe';
    html.style.setProperty('--accent-color', accentHex);
    html.style.setProperty('--win-accent', accentHex);

    // Sync highlight color
    const HIGHLIGHT_COLOR_MAP: Record<string, string> = {
      blue: 'rgba(0, 122, 254, 0.25)',
      purple: 'rgba(157, 63, 198, 0.25)',
      pink: 'rgba(243, 83, 167, 0.25)',
      red: 'rgba(224, 59, 48, 0.25)',
      orange: 'rgba(243, 130, 24, 0.25)',
      yellow: 'rgba(245, 196, 0, 0.3)',
      green: 'rgba(99, 190, 68, 0.25)',
      graphite: 'rgba(142, 142, 147, 0.3)',
    };

    let highlightVal = '';
    if (highlightColor === 'automatic') {
      const mappedAccent = accentColor === 'multicolor' ? 'blue' : accentColor;
      highlightVal = HIGHLIGHT_COLOR_MAP[mappedAccent] || 'rgba(0, 122, 254, 0.25)';
    } else {
      highlightVal = HIGHLIGHT_COLOR_MAP[highlightColor] || 'rgba(0, 122, 254, 0.25)';
    }
    html.style.setProperty('--highlight-color', highlightVal);
  }, [activeOSTheme, resolvedColorScheme, glassEnabled, accentColor, highlightColor]);

  const handleOpenApp = useCallback((appConfig: AppConfig) => {
    launchApp(appConfig);
  }, [launchApp]);

  const isMacLike = activeOSTheme === 'macos' || activeOSTheme === 'ipad';
  const showsDesktopIconGrid = activeOSTheme !== 'ipad' && activeOSTheme !== 'iphone' && activeOSTheme !== 'android';
  const isMobile = activeOSTheme === 'iphone' || activeOSTheme === 'android';
  
  let themeConfig = THEMES_CONFIG[activeOSTheme];
  if (features.isSimpleModeActive && activeOSTheme === 'macos' && !features.dock) {
    // Override macOS layout parameters in simple mode to remove Dock bottom insets if dock is hidden
    themeConfig = {
      ...themeConfig,
      hasDock: false,
      layout: {
        ...themeConfig.layout,
        desktopInsets: { top: 28, right: 0, bottom: 0, left: 0 },
        chrome: {
          ...themeConfig.layout.chrome,
          dockHeight: 0,
          dockOffsetBottom: 0,
        },
        window: {
          ...themeConfig.layout.window,
          maximizeInsets: { top: 28, bottom: 0 },
        },
      },
    };
  }

  // Phone frame: fill available height (up to 926px), derive width from 393:852 ratio
  const PHONE_RATIO = 393 / 852;
  const PHONE_MAX_H = 926;

  return (
    <SimpleModeProvider features={features}>
      <div
        className={cn(
          "w-full h-full overflow-hidden relative select-none",
          resolvedColorScheme === 'dark' && 'dark'
        )}
        data-os-theme={activeOSTheme}
        data-glass={glassEnabled ? 'true' : 'false'}
        style={getThemeCssVars(themeConfig)}
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* SVG filter singleton */}
        <GlassFilter />

        {/* Notification toasts — rendered above everything (outside phone frame) */}
        <NotificationBanner />

        {/* Spotlight + App Switcher (macOS / iPad only) */}
        {isMacLike && !features.isSimpleModeActive && (
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
          <div className={cn(
            "absolute inset-0 flex items-center justify-center",
            isRealMobile ? "bg-transparent" : "bg-black/60"
          )}>
            <div
              className={cn(
                "relative overflow-hidden",
                !isRealMobile && "shadow-2xl ring-1 ring-white/10"
              )}
              style={{
                // Height: fill 100dvh with small padding, capped at PHONE_MAX_H (stretches to 100% on real mobile)
                height: isRealMobile ? "100%" : `min(calc(100dvh - 32px), ${PHONE_MAX_H}px)`,
                // Width: derived from ratio, capped at PHONE_MAX_W (stretches to 100% on real mobile)
                width: isRealMobile ? "100%" : `min(calc((min(calc(100dvh - 32px), ${PHONE_MAX_H}px)) * ${PHONE_RATIO}), 100vw)`,
                // Border-radius scales with height: 44px at max (flat 0px on real mobile)
                borderRadius: isRealMobile ? "0px" : `min(44px, calc(min(calc(100dvh - 32px), ${PHONE_MAX_H}px) * 0.047))`,
              }}
            >
              {/* Wallpaper fills the phone frame */}
              <Wallpaper>{null}</Wallpaper>

              {/* Chrome — scoped inside the phone frame */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOSTheme}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeOSTheme === 'iphone' && <IPhoneChrome onOpenApp={handleOpenApp} />}
                  {activeOSTheme === 'android' && <AndroidChrome onOpenApp={handleOpenApp} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <>
            {/* Desktop canvas — NEVER remounts, preserves WindowManager + useWindowUrlSync state */}
            <div className="absolute inset-0">
              <Wallpaper>
                {features.widgets.showWidgets && <WidgetLayer />}
                {(showsDesktopIconGrid && (!features.isSimpleModeActive || features.iconGrid)) && (
                  <IconGrid key="icon-grid" onOpenApp={handleOpenApp} />
                )}
                <WindowManager key="window-manager" />
              </Wallpaper>
            </div>

            {/* Widget gallery panel — slides up on Edit Widgets */}
            <AnimatePresence>
              {features.widgets.allowGalleryEdit && isEditingWidgets && <WidgetGalleryPanel />}
            </AnimatePresence>

            {/* Chrome overlay — animated cross-fade on theme switch */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOSTheme}
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {activeOSTheme === 'macos'   && <MacOSChrome isSimpleMode={features.isSimpleModeActive} onOpenApp={handleOpenApp} onSpotlight={features.menuBar.spotlight ? () => setSpotlightOpen(true) : undefined} onAppSwitcher={features.menuBar.appSwitcher ? () => setAppSwitcherOpen(true) : undefined} />}
                {activeOSTheme === 'ipad'    && <IPadChrome    onOpenApp={handleOpenApp} />}
                {activeOSTheme === 'windows' && <WindowsChrome onOpenApp={handleOpenApp} />}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </SimpleModeProvider>
  );
}

