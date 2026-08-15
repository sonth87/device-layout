'use client';

import React, { useState } from 'react';
import { DeviceLayout } from '@/lib';
import type { AppConfig } from '@/types/app';
import type { OSTheme } from '@/types/theme';

function DemoApp({ windowId }: { appId: string; windowId: string }) {
  return (
    <div className="p-3 bg-slate-950 text-slate-100 h-full flex flex-col justify-between font-sans">
      <div>
        <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Live Preview Window
        </div>
        <p className="text-[11px] text-slate-400 leading-tight">
          Toggle options on the left to see live layout changes instantly!
        </p>
      </div>
      <div className="text-[10px] bg-slate-900/90 p-1.5 rounded border border-slate-800 font-mono text-slate-400">
        Window ID: {windowId}
      </div>
    </div>
  );
}

const sampleApps: AppConfig[] = [
  {
    id: 'demo-app',
    name: 'Interactive App',
    icon: 'lucide:Sparkles',
    iconColor: ['#3B82F6', '#1D4ED8'],
    render: DemoApp,
    defaultSize: { width: 380, height: 240 },
    hasMenuBar: true,
  },
];

export function SimpleModeBuilder() {
  const [isSimpleModeActive, setIsSimpleModeActive] = useState(true);
  const [osTheme, setOsTheme] = useState<OSTheme>('macos');
  const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('dark');
  const [dock, setDock] = useState(true);
  const [wallpaper, setWallpaper] = useState(true);
  const [clock, setClock] = useState(true);
  const [spotlight, setSpotlight] = useState(false);
  const [controlCenter, setControlCenter] = useState(false);
  const [copied, setCopied] = useState(false);

  const simpleModeConfig = isSimpleModeActive
    ? {
        dock,
        wallpaper,
        widgets: false,
        defaultApps: false,
        menuBar: {
          clock,
          spotlight,
          controlCenter,
        },
      }
    : false;

  const generatedCode = `<DeviceLayout
  colorScheme="${colorScheme}"
  osTheme="${osTheme}"
  isSimpleMode={${
    isSimpleModeActive
      ? JSON.stringify(simpleModeConfig, null, 2).replace(/"([^"]+)":/g, '$1:')
      : 'false'
  }}
  apps={myApps}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 border border-slate-800/80 rounded-2xl bg-slate-900/90 p-5 shadow-2xl text-slate-100 font-sans">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-200">🎛️ Visual Layout Configurator & Live Builder</h3>
          <p className="text-xs text-slate-400 mt-0.5">Toggle controls to update the live preview and generate matching TSX code.</p>
        </div>
        <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-full font-mono border border-indigo-500/30">
          Live Interactive Preview
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* Left Control Panel */}
        <div className="lg:col-span-4 space-y-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Mode Selection</h4>
            <label className="flex items-center gap-2 text-sm font-semibold text-indigo-300 cursor-pointer">
              <input
                type="checkbox"
                checked={isSimpleModeActive}
                onChange={(e) => setIsSimpleModeActive(e.target.checked)}
                className="rounded accent-indigo-500 w-4 h-4"
              />
              Enable Simple Mode (`isSimpleMode`)
            </label>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">OS Theme</h4>
            <div className="flex gap-2">
              {(['macos', 'windows', 'ipad'] as OSTheme[]).map((theme) => (
                <button
                  key={theme}
                  onClick={() => setOsTheme(theme)}
                  className={`px-2.5 py-1 text-xs rounded-md capitalize transition-colors ${
                    osTheme === theme
                      ? 'bg-indigo-600 text-white font-medium'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Color Scheme</h4>
            <div className="flex gap-2">
              {(['dark', 'light'] as const).map((scheme) => (
                <button
                  key={scheme}
                  onClick={() => setColorScheme(scheme)}
                  className={`px-2.5 py-1 text-xs rounded-md capitalize transition-colors ${
                    colorScheme === scheme
                      ? 'bg-blue-600 text-white font-medium'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {scheme}
                </button>
              ))}
            </div>
          </div>

          {isSimpleModeActive && (
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">SimpleMode Feature Flags</h4>
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer hover:text-white">
                <input
                  type="checkbox"
                  checked={dock}
                  onChange={(e) => setDock(e.target.checked)}
                  className="rounded accent-indigo-500 w-3.5 h-3.5"
                />
                Bottom Dock (`dock`)
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer hover:text-white">
                <input
                  type="checkbox"
                  checked={wallpaper}
                  onChange={(e) => setWallpaper(e.target.checked)}
                  className="rounded accent-indigo-500 w-3.5 h-3.5"
                />
                Wallpaper Image (`wallpaper`)
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer hover:text-white">
                <input
                  type="checkbox"
                  checked={clock}
                  onChange={(e) => setClock(e.target.checked)}
                  className="rounded accent-indigo-500 w-3.5 h-3.5"
                />
                MenuBar Clock (`menuBar.clock`)
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer hover:text-white">
                <input
                  type="checkbox"
                  checked={spotlight}
                  onChange={(e) => setSpotlight(e.target.checked)}
                  className="rounded accent-indigo-500 w-3.5 h-3.5"
                />
                Spotlight Search (`menuBar.spotlight`)
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer hover:text-white">
                <input
                  type="checkbox"
                  checked={controlCenter}
                  onChange={(e) => setControlCenter(e.target.checked)}
                  className="rounded accent-indigo-500 w-3.5 h-3.5"
                />
                Control Center (`menuBar.controlCenter`)
              </label>
            </div>
          )}
        </div>

        {/* Right Live Preview Canvas */}
        <div className="lg:col-span-8 h-[400px] border border-slate-800 rounded-xl overflow-hidden relative shadow-inner bg-slate-950">
          <DeviceLayout
            key={`${osTheme}-${colorScheme}-${isSimpleModeActive}-${dock}-${wallpaper}-${clock}-${spotlight}-${controlCenter}`}
            colorScheme={colorScheme}
            osTheme={osTheme}
            apps={sampleApps}
            isSimpleMode={simpleModeConfig}
          />
        </div>
      </div>

      {/* Bottom Code Block */}
      <div className="relative bg-slate-950 rounded-xl p-4 border border-slate-800">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-slate-400 font-mono">Generated TSX Code</span>
          <button
            onClick={handleCopy}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg transition-colors font-medium"
          >
            {copied ? '✓ Copied!' : 'Copy Code'}
          </button>
        </div>
        <pre className="text-xs font-mono text-emerald-400 overflow-x-auto p-1 leading-relaxed">
          {generatedCode}
        </pre>
      </div>
    </div>
  );
}
