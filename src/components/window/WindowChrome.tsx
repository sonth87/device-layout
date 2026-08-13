'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Minus, Maximize2, Square, Copy, Calculator as CalcIcon, Check, ChevronDown, Sidebar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/store';
import { useShallow } from 'zustand/react/shallow';
import { useShallow as useShallowZustand } from 'zustand/react/shallow';
import { useTheme } from '@/hooks/useTheme';
import { useViewportSize } from '@/hooks/useResizeObserver';
import { useTranslation } from '@/hooks/useTranslation';

interface WindowChromeProps {
  windowId: string;
  onPointerDown: (e: React.PointerEvent) => void;
}

type CalculatorMode = 'basic' | 'scientific' | 'programmer';

function WindowChromeMacOS({ windowId, onPointerDown }: WindowChromeProps) {
  const win = useStore((s) => s.windows[windowId]);
  const appConfig = useStore((s) => s.apps[win?.appId ?? '']);
  const closeWindow = useStore((s) => s.closeWindow);
  const minimizeWindow = useStore((s) => s.minimizeWindow);
  const toggleMaximize = useStore((s) => s.toggleMaximize);
  const toggleFullScreen = useStore((s) => s.toggleFullScreen);
  const { config } = useTheme();
  const viewport = useViewportSize();
  const [hovering, setHovering] = useState(false);
  const { getAppName } = useTranslation();

  // Calculator custom titlebar states
  const [calcMode, setCalcMode] = useState<CalculatorMode>('basic');
  const [calcShowHistory, setCalcShowHistory] = useState(false);
  const [calcMenuOpen, setCalcMenuOpen] = useState(false);
  const calcDropdownRef = useRef<HTMLDivElement>(null);

  const isCalculator = win?.appId === 'calculator';

  // Listen to state changes from the Calculator app component
  useEffect(() => {
    if (!isCalculator) return;
    const handler = (e: Event) => {
      const ce = e as CustomEvent;
      if (ce.detail.windowId === windowId) {
        if (ce.detail.mode) setCalcMode(ce.detail.mode);
        if (ce.detail.showHistory !== undefined) setCalcShowHistory(ce.detail.showHistory);
      }
    };
    window.addEventListener('app:calculator:state-changed', handler);
    return () => window.removeEventListener('app:calculator:state-changed', handler);
  }, [isCalculator, windowId]);

  // Click outside listener for calculator mode dropdown
  useEffect(() => {
    if (!calcMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (calcDropdownRef.current && !calcDropdownRef.current.contains(e.target as Node)) {
        setCalcMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [calcMenuOpen]);

  if (!win) return null;

  const isTransparent = appConfig?.titleBarMode === 'transparent';

  const { top, bottom } = config.layout.window.maximizeInsets;
  const viewportRect = {
    x: 0,
    y: top,
    width: viewport.width,
    height: viewport.height - top - bottom,
  };

  const { osTheme } = useTheme();
  const isIPad = osTheme === 'ipad';

  return (
    <div
      data-windowchrome="true"
      className={cn(
        'flex items-center gap-0 h-(--window-chrome-height) px-4 shrink-0',
        'select-none cursor-move z-30',
        isTransparent
          ? 'bg-transparent border-b-0'
          : cn(
              'border-b border-black/8 dark:border-white/8',
              win.isFocused
                ? 'bg-neutral-100/95 dark:bg-[#151821]/97'
                : 'bg-neutral-50/95 dark:bg-[#0F1115]/97'
            )
      )}
      onPointerDown={onPointerDown}
      onClick={(e) => { e.stopPropagation(); }}
      onDoubleClick={() => toggleMaximize(windowId, viewportRect)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Traffic lights */}
      <div
        className={cn(
          "absolute left-4 flex items-center gap-2 origin-left transition-all duration-200 ease-out z-10",
          isIPad && "hover:scale-130 hover:gap-1.5"
        )}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => closeWindow(windowId)}
          className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75 active:scale-90"
          style={{ backgroundColor: (win.isFocused || hovering) ? '#ff5f57' : '#d1d1d1' }}
          title="Close"
        >
          {hovering && (
            <X className="w-2.5 h-2.5 text-red-950 dark:text-red-950/90" strokeWidth={3.5} />
          )}
        </button>

        {/* Minimize */}
        <button
          onClick={() => minimizeWindow(windowId)}
          className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75 active:scale-90"
          style={{ backgroundColor: (win.isFocused || hovering) ? '#febc2e' : '#d1d1d1' }}
          title="Minimize"
        >
          {hovering && (
            <Minus className="w-2.5 h-2.5 text-yellow-950 dark:text-yellow-950/90" strokeWidth={3.5} />
          )}
        </button>

        {/* Fullscreen / Green */}
        <button
          onClick={() => toggleFullScreen(windowId)}
          className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75 active:scale-90"
          style={{ backgroundColor: (win.isFocused || hovering) ? '#28c840' : '#d1d1d1' }}
          title={win.isFullScreen ? 'Exit Full Screen' : 'Enter Full Screen'}
        >
          {hovering && (
            <Maximize2 className="w-2 h-2 text-green-950 dark:text-green-950/90" strokeWidth={3.5} />
          )}
        </button>
      </div>

      {/* Centered title / Calculator Header Custom Overlay */}
      {isTransparent && win.appId === 'calculator' ? (
        <div className="flex-1 flex items-center justify-between pl-16 h-full select-none">
          {/* Sidebar Toggle */}
          <div onPointerDown={(e) => e.stopPropagation()}>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('app:calculator:toggle-history', { detail: { windowId } }));
              }}
              className={cn(
                "p-1.5 rounded-md transition-colors",
                calcShowHistory 
                  ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" 
                  : "text-neutral-400 hover:text-neutral-200 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
              title="Toggle History Sidebar"
            >
              <Sidebar className="w-4 h-4" />
            </button>
          </div>

          {/* Mode Selector Dropdown */}
          <div className="relative" ref={calcDropdownRef} onPointerDown={(e) => e.stopPropagation()}>
            <button
              onClick={() => setCalcMenuOpen(!calcMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-md active:bg-black/15 transition-all"
            >
              <CalcIcon className="w-3.5 h-3.5 text-neutral-500" />
              <span className="capitalize text-[11px]">{calcMode}</span>
              <ChevronDown className="w-3 h-3 text-neutral-400" />
            </button>
            {calcMenuOpen && (
              <div className="absolute right-0 mt-1 w-32 rounded-md bg-white dark:bg-[#2d2a27]/98 border border-black/10 dark:border-white/10 shadow-2xl p-1.5 space-y-0.5 z-50 backdrop-blur-xl">
                {(['basic', 'scientific', 'programmer'] as CalculatorMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('app:calculator:set-mode', { detail: { windowId, mode: m } }));
                      setCalcMenuOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-2 py-1 text-xs rounded flex items-center justify-between transition-colors",
                      calcMode === m
                        ? "bg-amber-500 text-white font-semibold"
                        : "text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10"
                    )}
                  >
                    <span className="capitalize">{m}</span>
                    {calcMode === m && <Check className="w-3 h-3 text-white" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center pointer-events-none">
          {!isTransparent && (
            <span className={cn(
              'text-[13px] font-medium truncate max-w-[220px]',
              win.isFocused ? 'text-black/75 dark:text-white/80' : 'text-black/35 dark:text-white/35'
            )}>
              {getAppName(win.appId, win.title)}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// OS theme Router function (moved to avoid name capture error)
export function WindowChrome({ windowId, onPointerDown }: WindowChromeProps) {
  const { osTheme } = useTheme();
  return osTheme === 'windows'
    ? <WindowChromeWindows windowId={windowId} onPointerDown={onPointerDown} />
    : <WindowChromeMacOS windowId={windowId} onPointerDown={onPointerDown} />;
}

function WindowChromeWindows({ windowId, onPointerDown }: WindowChromeProps) {
  const win = useStore((s) => s.windows[windowId]);
  const appConfig = useStore((s) => s.apps[win?.appId ?? '']);
  const closeWindow = useStore((s) => s.closeWindow);
  const minimizeWindow = useStore((s) => s.minimizeWindow);
  const toggleMaximize = useStore((s) => s.toggleMaximize);
  const enterFullScreen = useStore((s) => s.enterFullScreen);
  const exitFullScreen = useStore((s) => s.exitFullScreen);
  const { config } = useTheme();
  const viewport = useViewportSize();
  const { getAppName } = useTranslation();
  const [hovering, setHovering] = useState(false);

  // Calculator custom titlebar states
  const [calcMode, setCalcMode] = useState<CalculatorMode>('basic');
  const [calcShowHistory, setCalcShowHistory] = useState(false);
  const [calcMenuOpen, setCalcMenuOpen] = useState(false);
  const calcDropdownRef = useRef<HTMLDivElement>(null);

  const isCalculator = win?.appId === 'calculator';

  // Listen to state changes from the Calculator app component
  useEffect(() => {
    if (!isCalculator) return;
    const handler = (e: Event) => {
      const ce = e as CustomEvent;
      if (ce.detail.windowId === windowId) {
        if (ce.detail.mode) setCalcMode(ce.detail.mode);
        if (ce.detail.showHistory !== undefined) setCalcShowHistory(ce.detail.showHistory);
      }
    };
    window.addEventListener('app:calculator:state-changed', handler);
    return () => window.removeEventListener('app:calculator:state-changed', handler);
  }, [isCalculator, windowId]);

  // Click outside listener for calculator mode dropdown
  useEffect(() => {
    if (!calcMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (calcDropdownRef.current && !calcDropdownRef.current.contains(e.target as Node)) {
        setCalcMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [calcMenuOpen]);

  if (!win) return null;

  const isTransparent = appConfig?.titleBarMode === 'transparent';

  const { top, bottom } = config.layout.window.maximizeInsets;
  const viewportRect = {
    x: 0,
    y: top,
    width: viewport.width,
    height: viewport.height - top - bottom,
  };

  return (
    <div
      data-windowchrome="true"
      className={cn(
        'flex items-center h-(--window-chrome-height) shrink-0 z-30',
        isTransparent
          ? 'bg-transparent border-b-0'
          : 'bg-neutral-100/98 dark:bg-[#151821]/98 border-b border-black/8 dark:border-white/8',
        'select-none cursor-move',
      )}
      onPointerDown={onPointerDown}
      onClick={(e) => { e.stopPropagation(); }}
      onDoubleClick={() => toggleMaximize(windowId, viewportRect)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {isTransparent && win.appId === 'calculator' ? (
        <div className="flex-1 flex items-center gap-4 pl-3 h-full select-none">
          {/* Sidebar Toggle Button */}
          <div onPointerDown={(e) => e.stopPropagation()}>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('app:calculator:toggle-history', { detail: { windowId } }));
              }}
              className={cn(
                "p-1 rounded-md transition-colors",
                calcShowHistory 
                  ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" 
                  : "text-neutral-400 hover:text-neutral-200 dark:text-neutral-500 dark:hover:text-neutral-300"
              )}
            >
              <Sidebar className="w-4 h-4" />
            </button>
          </div>
          
          {/* Mode Selector Dropdown */}
          <div className="relative" ref={calcDropdownRef} onPointerDown={(e) => e.stopPropagation()}>
            <button
              onClick={() => setCalcMenuOpen(!calcMenuOpen)}
              className="flex items-center gap-1 px-2 py-0.5 text-xs font-semibold text-neutral-600 dark:text-neutral-300 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-md"
            >
              <CalcIcon className="w-3 h-3" />
              <span className="capitalize text-[11px]">{calcMode}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {calcMenuOpen && (
              <div className="absolute left-0 mt-1 w-32 rounded-md bg-white dark:bg-[#2d2a27]/98 border border-black/10 dark:border-white/10 shadow-2xl p-1.5 space-y-0.5 z-50 backdrop-blur-xl">
                {(['basic', 'scientific', 'programmer'] as CalculatorMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('app:calculator:set-mode', { detail: { windowId, mode: m } }));
                      setCalcMenuOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-2 py-1 text-xs rounded flex items-center justify-between transition-colors",
                      calcMode === m
                        ? "bg-amber-500 text-white font-semibold"
                        : "text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10"
                    )}
                  >
                    <span className="capitalize">{m}</span>
                    {calcMode === m && <Check className="w-3 h-3 text-white" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : isTransparent ? (
        <div className="flex-1 pointer-events-none" />
      ) : (
        <span className={cn(
          "flex-1 text-[12px] font-medium truncate pl-3 transition-colors",
          win.isFocused ? 'text-black/75 dark:text-white/75' : 'text-black/35 dark:text-white/35'
        )}>
          {getAppName(win.appId, win.title)}
        </span>
      )}
      <div className="flex items-center h-full pr-1" onPointerDown={(e) => e.stopPropagation()}>
        <button
          onClick={() => minimizeWindow(windowId)}
          className={cn(
            "w-11 h-full flex items-center justify-center transition-all duration-150 hover:scale-110 active:scale-95",
            (win.isFocused || hovering)
              ? "hover:bg-black/10 dark:hover:bg-white/10 text-black/70 dark:text-white/70"
              : "text-black/30 dark:text-white/30 pointer-events-none"
          )}
        >
          <Minus className="w-3.5 h-3.5" strokeWidth={2} />
        </button>
        <button
          onClick={() => {
            if (win.isFullScreen || win.isMaximized) {
              exitFullScreen(windowId);
            } else {
              enterFullScreen(windowId);
            }
          }}
          className={cn(
            "w-11 h-full flex items-center justify-center transition-all duration-150 hover:scale-110 active:scale-95",
            (win.isFocused || hovering)
              ? "hover:bg-black/10 dark:hover:bg-white/10 text-black/70 dark:text-white/70"
              : "text-black/30 dark:text-white/30 pointer-events-none"
          )}
          title={win.isMaximized || win.isFullScreen ? 'Restore' : 'Fullscreen'}
        >
          {win.isMaximized || win.isFullScreen ? (
            <Copy className="w-3 h-3 rotate-180" strokeWidth={2} />
          ) : (
            <Square className="w-3 h-3" strokeWidth={2} />
          )}
        </button>
        <button
          onClick={() => closeWindow(windowId)}
          className={cn(
            "w-11 h-full flex items-center justify-center transition-all duration-150 hover:scale-110 active:scale-95",
            (win.isFocused || hovering)
              ? "hover:bg-red-500 hover:text-white text-black/70 dark:text-white/70"
              : "text-black/30 dark:text-white/30 pointer-events-none"
          )}
        >
          <X className="w-3.5 h-3.5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
