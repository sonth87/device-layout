"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store";
import { AppIconImage } from "./AppIconImage";
import type { AppConfig } from "@/types/app";
import { FloatingWindow } from "./FloatingWindow";

import { useTranslation } from "@/hooks/useTranslation";

// ─── About Dialog UI ─────────────────────────────────────────────────────────
// Compose lại từ FloatingWindow (chrome + kéo-thả dùng chung) — xem
// FloatingWindow.tsx cho lý do có data-windowchrome + backdrop chặn tương tác.
// blocking=true (mặc định) giữ nguyên hành vi modal gốc của About.

export function AboutDialog({
  appConfig,
  onClose,
}: {
  appConfig: AppConfig;
  onClose: () => void;
}) {
  const { getAppName } = useTranslation();

  return (
    <FloatingWindow onClose={onClose} width={288}>
      <div className="w-20 h-20 mb-1">
        <AppIconImage appConfig={appConfig} size={80} />
      </div>
      <div className="text-[17px] font-bold text-black/90 dark:text-white/90 text-center">
        {getAppName(appConfig.id, appConfig.name)}
      </div>
      <div className="text-[12px] text-black/50 dark:text-white/50 text-center">
        Version 1.0 (1.0)
      </div>
      <div className="w-full h-px bg-black/10 dark:bg-white/10 my-1" />
      <div className="text-[11px] text-black/40 dark:text-white/40 text-center leading-relaxed">
        Copyright © 2026 Skyline
        <br />
        All rights reserved.
      </div>
    </FloatingWindow>
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
  const [targetAppConfig, setTargetAppConfig] = useState<AppConfig | null>(
    null,
  );

  useEffect(() => {
    const handler = (e: Event) => {
      const { appId, action } = (
        e as CustomEvent<{ appId: string; action: string }>
      ).detail;
      if (action !== "about") return;
      const apps = useStore.getState().apps;
      const cfg = apps[appId];
      if (cfg) setTargetAppConfig(cfg);
    };
    window.addEventListener("app:menu:action", handler);
    return () => window.removeEventListener("app:menu:action", handler);
  }, []);

  if (!targetAppConfig) return null;
  return (
    <AboutDialog
      appConfig={targetAppConfig}
      onClose={() => setTargetAppConfig(null)}
    />
  );
}
