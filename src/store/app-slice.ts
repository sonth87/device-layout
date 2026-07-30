import type { AppConfig } from '@/types/app';
import { APPS_CONFIG } from '@/config/apps.config';

export interface AppSlice {
  apps: Record<string, AppConfig>;
  runningAppIds: string[];
  activeAppId: string | null;

  registerApps: (configs: AppConfig[]) => void;
  setRunning: (appId: string, running: boolean) => void;
  setActiveApp: (appId: string | null) => void;
  /**
   * Patch a registered app's config after `registerApps()` — e.g. a host app
   * updating its own `menuBarMenus` at runtime (checked state, item labels)
   * to reflect live app state. `apps` is already read reactively by MenuBar/
   * dock/etc via `useStore((s) => s.apps)`, so this alone is enough to make
   * any part of AppConfig dynamic — no separate "live config" concept needed.
   */
  updateAppConfig: (appId: string, patch: Partial<AppConfig>) => void;
}

type S = AppSlice;
type Setter = (fn: (state: S) => void) => void;

const INITIAL_APPS: Record<string, AppConfig> = {};
for (const cfg of APPS_CONFIG) {
  INITIAL_APPS[cfg.id] = cfg;
}

export function createAppSlice(set: Setter): AppSlice {
  return {
    apps: INITIAL_APPS,
    runningAppIds: [],
    activeAppId: null,

    registerApps(configs) {
      set((state) => {
        state.apps = {};
        for (const cfg of configs) {
          state.apps[cfg.id] = cfg;
        }
      });
    },

    setRunning(appId, running) {
      set((state) => {
        if (running && !state.runningAppIds.includes(appId)) {
          state.runningAppIds.push(appId);
        } else if (!running) {
          state.runningAppIds = state.runningAppIds.filter((id) => id !== appId);
        }
      });
    },

    setActiveApp(appId) {
      set((state) => {
        state.activeAppId = appId;
      });
    },

    updateAppConfig(appId, patch) {
      set((state) => {
        const existing = state.apps[appId];
        if (!existing) return;
        state.apps[appId] = { ...existing, ...patch };
      });
    },
  };
}
