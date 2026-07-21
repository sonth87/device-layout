'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/themes/ThemeProvider';
import { useStore } from '@/store';
import type { AppConfig } from '@/types/app';
import type { SimpleModeProp } from '@/types/simple-mode';
import type { OSTheme } from '@/types/theme';
import { SlidersHorizontal, ChevronDown, ChevronRight, Check, Sun, Moon } from 'lucide-react';

const HelloWorldApp: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white dark:bg-zinc-950 text-black dark:text-white p-6 select-none font-sans">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold mb-2 text-indigo-500">Hello World</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          This is a custom host app running in Modular Simple Mode.
        </p>
      </div>
    </div>
  );
};

const customApps: AppConfig[] = [
  {
    id: 'hello-world',
    name: 'Hello World',
    icon: 'lucide:Smile',
    iconColor: ['#10b981', '#059669'],
    render: HelloWorldApp,
    defaultSize: { width: 480, height: 320 },
    minSize: { width: 250, height: 180 },
    menuBarMenus: [
      {
        label: 'Hello World',
        items: [
          { key: 'greet', label: 'Greet User', action: 'greet' },
          { key: 'sep1', label: '', separator: true },
          { key: 'close', label: 'Close App', action: 'close' },
        ],
      },
      {
        label: 'Edit',
        items: [{ key: 'copy', label: 'Copy Hello', action: 'copy' }],
      },
    ],
  },
];

const AVAILABLE_DEFAULT_APPS = [
  { id: 'settings', name: 'Settings' },
  { id: 'finder', name: 'Finder' },
  { id: 'calculator', name: 'Calculator' },
  { id: 'notes', name: 'Notes' },
  { id: 'calendar', name: 'Calendar' },
  { id: 'photos', name: 'Photos' },
  { id: 'messages', name: 'Messages' },
  { id: 'music', name: 'Music' },
  { id: 'terminal', name: 'Terminal' },
  { id: 'browser', name: 'Browser' },
];

export default function SimpleDesktopPage() {
  const launchApp = useStore((s) => s.launchApp);
  const colorScheme = useStore((s) => s.colorScheme);
  const setColorScheme = useStore((s) => s.setColorScheme);

  const [activePreset, setActivePreset] = useState<'minimal' | 'wallpaper' | 'kiosk' | 'custom'>('custom');

  // Custom interactive toggles state
  const [customWallpaper, setCustomWallpaper] = useState(true);
  const [customContextMenu, setCustomContextMenu] = useState(true);
  const [customWallpaperPicker, setCustomWallpaperPicker] = useState(true);
  const [customIconGrid, setCustomIconGrid] = useState(true);
  const [customClock, setCustomClock] = useState(true);
  const [customControlCenter, setCustomControlCenter] = useState(true);
  const [customSpotlight, setCustomSpotlight] = useState(true);
  const [customWidgets, setCustomWidgets] = useState(true);
  const [customDock, setCustomDock] = useState(false);

  // Default Apps granular state & collapse state
  const [customDefaultAppsMaster, setCustomDefaultAppsMaster] = useState(true);
  const [selectedDefaultApps, setSelectedDefaultApps] = useState<string[]>(['settings', 'calculator', 'notes']);
  const [defaultAppsCollapsed, setDefaultAppsCollapsed] = useState(false);

  const [customAllowedOSThemes, setCustomAllowedOSThemes] = useState<OSTheme[]>(['macos', 'windows']);
  const [customDrawerOpen, setCustomDrawerOpen] = useState(false);

  useEffect(() => {
    launchApp(customApps[0]);
  }, [launchApp]);

  let simpleModeConfig: SimpleModeProp = true;

  if (activePreset === 'wallpaper') {
    simpleModeConfig = {
      wallpaper: true,
      contextMenu: true,
      wallpaperPicker: true,
      iconGrid: true,
    };
  } else if (activePreset === 'kiosk') {
    simpleModeConfig = {
      wallpaper: true,
      contextMenu: true,
      wallpaperPicker: true,
      iconGrid: true,
      menuBar: {
        clock: true,
        controlCenter: true,
        spotlight: true,
      },
      defaultApps: ['settings', 'calculator'],
      allowedOSThemes: ['macos', 'windows'],
    };
  } else if (activePreset === 'custom') {
    simpleModeConfig = {
      wallpaper: customWallpaper,
      contextMenu: customContextMenu,
      wallpaperPicker: customWallpaperPicker,
      iconGrid: customIconGrid,
      menuBar: {
        clock: customClock,
        controlCenter: customControlCenter,
        spotlight: customSpotlight,
      },
      widgets: customWidgets,
      dock: customDock,
      defaultApps: customDefaultAppsMaster ? selectedDefaultApps : false,
      allowedOSThemes: customAllowedOSThemes,
    };
  }

  const toggleOSTheme = (theme: OSTheme) => {
    if (customAllowedOSThemes.includes(theme)) {
      if (customAllowedOSThemes.length > 1) {
        setCustomAllowedOSThemes(customAllowedOSThemes.filter((t) => t !== theme));
      }
    } else {
      setCustomAllowedOSThemes([...customAllowedOSThemes, theme]);
    }
  };

  const toggleDefaultApp = (appId: string) => {
    if (selectedDefaultApps.includes(appId)) {
      setSelectedDefaultApps(selectedDefaultApps.filter((id) => id !== appId));
    } else {
      setSelectedDefaultApps([...selectedDefaultApps, appId]);
    }
  };

  const isDarkMode = colorScheme === 'dark';

  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex flex-col font-sans select-none">
      {/* Top Banner Control Bar for the Demo Page */}
      <header className="h-12 bg-zinc-900/90 border-b border-zinc-800 px-4 flex items-center justify-between z-50 text-zinc-200 text-xs shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-white text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Simple Mode Playground
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400 hidden sm:inline">Modular Layout Configuration</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Light/Dark Theme Toggle Button */}
          <button
            onClick={() => setColorScheme(isDarkMode ? 'light' : 'dark')}
            className="p-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 mr-2"
            title={`Switch to ${isDarkMode ? 'Light' : 'Dark'} Mode`}
          >
            {isDarkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden lg:inline text-[11px]">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-300" />
                <span className="hidden lg:inline text-[11px]">Dark Mode</span>
              </>
            )}
          </button>

          <span className="text-zinc-400 mr-1 hidden md:inline">Preset:</span>
          <button
            onClick={() => setActivePreset('minimal')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activePreset === 'minimal'
                ? 'bg-indigo-600 text-white font-medium'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            }`}
          >
            Full Minimal (True)
          </button>
          <button
            onClick={() => setActivePreset('wallpaper')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activePreset === 'wallpaper'
                ? 'bg-indigo-600 text-white font-medium'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            }`}
          >
            Wallpaper + Context Menu
          </button>
          <button
            onClick={() => setActivePreset('kiosk')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activePreset === 'kiosk'
                ? 'bg-indigo-600 text-white font-medium'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            }`}
          >
            Kiosk (Clock + Mac/Win)
          </button>
          <button
            onClick={() => {
              setActivePreset('custom');
              setCustomDrawerOpen(!customDrawerOpen);
            }}
            className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
              activePreset === 'custom'
                ? 'bg-indigo-600 text-white font-medium'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Custom Config</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${customDrawerOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </header>

      {/* Main Viewport rendering ThemeProvider in Simple Mode */}
      <main className="flex-1 relative overflow-hidden">
        <ThemeProvider
          key={JSON.stringify(simpleModeConfig) + colorScheme}
          apps={customApps}
          isSimpleMode={simpleModeConfig}
        />

        {/* Custom Interactive Toggle Panel Drawer */}
        {activePreset === 'custom' && customDrawerOpen && (
          <div className="absolute top-3 right-4 z-[9999] w-80 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4 shadow-2xl text-xs text-zinc-200 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 sticky top-0 bg-zinc-900/95 pt-0.5 z-10">
              <span className="font-bold text-white text-sm flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
                Custom Feature Flags
              </span>
              <button
                onClick={() => setCustomDrawerOpen(false)}
                className="text-zinc-400 hover:text-white text-xs px-2 py-0.5 rounded bg-zinc-800"
              >
                Close
              </button>
            </div>

            {/* Desktop & Wallpaper */}
            <div className="space-y-2">
              <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                Desktop & Wallpaper
              </div>
              <label className="flex items-center justify-between cursor-pointer hover:text-white">
                <span>Render Wallpaper</span>
                <input
                  type="checkbox"
                  checked={customWallpaper}
                  onChange={(e) => setCustomWallpaper(e.target.checked)}
                  className="accent-indigo-500 w-4 h-4 cursor-pointer"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer hover:text-white">
                <span>Desktop Context Menu</span>
                <input
                  type="checkbox"
                  checked={customContextMenu}
                  onChange={(e) => setCustomContextMenu(e.target.checked)}
                  className="accent-indigo-500 w-4 h-4 cursor-pointer"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer hover:text-white">
                <span>Wallpaper Picker Modal</span>
                <input
                  type="checkbox"
                  checked={customWallpaperPicker}
                  onChange={(e) => setCustomWallpaperPicker(e.target.checked)}
                  className="accent-indigo-500 w-4 h-4 cursor-pointer"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer hover:text-white">
                <span>Desktop Icon Grid</span>
                <input
                  type="checkbox"
                  checked={customIconGrid}
                  onChange={(e) => setCustomIconGrid(e.target.checked)}
                  className="accent-indigo-500 w-4 h-4 cursor-pointer"
                />
              </label>
            </div>

            {/* Top MenuBar */}
            <div className="space-y-2 border-t border-zinc-800 pt-2.5">
              <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                Top MenuBar Items
              </div>
              <label className="flex items-center justify-between cursor-pointer hover:text-white">
                <span>Clock & Date</span>
                <input
                  type="checkbox"
                  checked={customClock}
                  onChange={(e) => setCustomClock(e.target.checked)}
                  className="accent-indigo-500 w-4 h-4 cursor-pointer"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer hover:text-white">
                <span>Control Center</span>
                <input
                  type="checkbox"
                  checked={customControlCenter}
                  onChange={(e) => setCustomControlCenter(e.target.checked)}
                  className="accent-indigo-500 w-4 h-4 cursor-pointer"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer hover:text-white">
                <span>Spotlight Search</span>
                <input
                  type="checkbox"
                  checked={customSpotlight}
                  onChange={(e) => setCustomSpotlight(e.target.checked)}
                  className="accent-indigo-500 w-4 h-4 cursor-pointer"
                />
              </label>
            </div>

            {/* Layout Components */}
            <div className="space-y-2 border-t border-zinc-800 pt-2.5">
              <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                Widgets & Dock
              </div>
              <label className="flex items-center justify-between cursor-pointer hover:text-white">
                <span>Desktop Widgets</span>
                <input
                  type="checkbox"
                  checked={customWidgets}
                  onChange={(e) => setCustomWidgets(e.target.checked)}
                  className="accent-indigo-500 w-4 h-4 cursor-pointer"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer hover:text-white">
                <span>Bottom Dock</span>
                <input
                  type="checkbox"
                  checked={customDock}
                  onChange={(e) => setCustomDock(e.target.checked)}
                  className="accent-indigo-500 w-4 h-4 cursor-pointer"
                />
              </label>
            </div>

            {/* Collapsible Default Apps Section */}
            <div className="space-y-2 border-t border-zinc-800 pt-2.5">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setDefaultAppsCollapsed(!defaultAppsCollapsed)}
                  className="flex items-center gap-1.5 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider hover:text-zinc-200 transition-colors"
                >
                  {defaultAppsCollapsed ? (
                    <ChevronRight className="w-3 h-3 text-indigo-400" />
                  ) : (
                    <ChevronDown className="w-3 h-3 text-indigo-400" />
                  )}
                  <span>Default System Apps</span>
                </button>
                <input
                  type="checkbox"
                  checked={customDefaultAppsMaster}
                  onChange={(e) => setCustomDefaultAppsMaster(e.target.checked)}
                  className="accent-indigo-500 w-4 h-4 cursor-pointer"
                  title="Master Toggle Default Apps"
                />
              </div>

              {!defaultAppsCollapsed && customDefaultAppsMaster && (
                <div className="pl-2.5 space-y-1.5 border-l border-zinc-800 mt-1.5">
                  {AVAILABLE_DEFAULT_APPS.map((app) => {
                    const isChecked = selectedDefaultApps.includes(app.id);
                    return (
                      <label key={app.id} className="flex items-center justify-between cursor-pointer hover:text-white text-[11px]">
                        <span className="capitalize">{app.name}</span>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleDefaultApp(app.id)}
                          className="accent-indigo-500 w-3.5 h-3.5 cursor-pointer"
                        />
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Allowed OS Themes */}
            <div className="space-y-2 border-t border-zinc-800 pt-2.5">
              <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                Allowed OS Themes in Settings
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {(['macos', 'windows', 'ipad', 'iphone', 'android'] as OSTheme[]).map((theme) => {
                  const isChecked = customAllowedOSThemes.includes(theme);
                  return (
                    <button
                      key={theme}
                      onClick={() => toggleOSTheme(theme)}
                      className={`px-2 py-1 rounded-md text-[11px] font-medium capitalize border transition-all flex items-center gap-1 ${
                        isChecked
                          ? 'bg-indigo-600 text-white border-indigo-500'
                          : 'bg-zinc-800/80 text-zinc-400 border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3" />}
                      <span>{theme}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
