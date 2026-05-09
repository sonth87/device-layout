'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useStore } from '@/store';
import { AppIconImage } from './AppIconImage';
import type { AppConfig } from '@/types/app';

// ─── About Dialog UI ─────────────────────────────────────────────────────────

export function AboutDialog({
  appConfig,
  onClose,
}: {
  appConfig: AppConfig;
  onClose: () => void;
}) {
  // Start centered; offset tracks drag delta from center
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const dragStart = useRef<{ mx: number; my: number; ox: number; oy: number } | null>(null);

  const onTitleBarPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    // Don't start drag from close button area
    if ((e.target as HTMLElement).closest('button')) return;
    e.preventDefault();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragStart.current = { mx: e.clientX, my: e.clientY, ox: offset.x, oy: offset.y };
  }, [offset]);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) return;
    setOffset({
      x: dragStart.current.ox + (e.clientX - dragStart.current.mx),
      y: dragStart.current.oy + (e.clientY - dragStart.current.my),
    });
  }, []);

  const onPointerUp = useCallback(() => {
    dragStart.current = null;
  }, []);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 99999 }}
    >
      {/* Backdrop — blocks background interaction but is transparent to clicks through pointer-events-none on wrapper */}
      <div className="absolute inset-0 pointer-events-auto" />

      {/* Dialog */}
      <div
        className="relative flex flex-col items-center bg-neutral-100/97 dark:bg-[#1c1c1e]/97 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 w-72 overflow-hidden pointer-events-auto"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Chrome / title bar — drag handle */}
        <div
          className="w-full flex items-center gap-2 px-4 pt-3.5 pb-2 border-b border-black/8 dark:border-white/8 cursor-move select-none bg-neutral-200/60 dark:bg-white/5"
          onPointerDown={onTitleBarPointerDown}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="flex items-center gap-2" onPointerDown={(e) => e.stopPropagation()}>
            {/* Close — only functional button */}
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100"
              style={{ backgroundColor: '#ff5f57' }}
              title="Close"
            >
              {hovering && (
                <X className="w-2 h-2 text-red-900/80" strokeWidth={3} />
              )}
            </button>
            {/* Minimize — always gray, no interaction */}
            <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: '#d1d1d1' }} />
            {/* Maximize — always gray, no interaction */}
            <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: '#d1d1d1' }} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center px-8 pt-6 pb-7 gap-3 select-none">
          <div className="w-20 h-20 mb-1">
            <AppIconImage appConfig={appConfig} size={80} />
          </div>
          <div className="text-[17px] font-bold text-black/90 dark:text-white/90 text-center">
            {appConfig.name}
          </div>
          <div className="text-[12px] text-black/50 dark:text-white/50 text-center">
            Version 1.0 (1.0)
          </div>
          <div className="w-full h-px bg-black/10 dark:bg-white/10 my-1" />
          <div className="text-[11px] text-black/40 dark:text-white/40 text-center leading-relaxed">
            Copyright © 2002–2024 Apple Inc.
            <br />
            All rights reserved.
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

// ─── Global listener — mount once in MacOSTheme ───────────────────────────────

/**
 * Listens for `app:menu:action` events with `action === 'about'` and displays
 * the AboutDialog for that app. Mount this once inside MacOSChrome.
 *
 * Any app can trigger it by dispatching:
 *   new CustomEvent('app:menu:action', { detail: { appId, action: 'about' } })
 */
export function GlobalAboutDialog() {
  const [targetAppConfig, setTargetAppConfig] = useState<AppConfig | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const { appId, action } = (e as CustomEvent<{ appId: string; action: string }>).detail;
      if (action !== 'about') return;
      const apps = useStore.getState().apps;
      const cfg = apps[appId];
      if (cfg) setTargetAppConfig(cfg);
    };
    window.addEventListener('app:menu:action', handler);
    return () => window.removeEventListener('app:menu:action', handler);
  }, []);

  if (!targetAppConfig) return null;
  return <AboutDialog appConfig={targetAppConfig} onClose={() => setTargetAppConfig(null)} />;
}
