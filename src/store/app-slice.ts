import type { AppConfig } from '@/types/app';

export interface AppSlice {
  apps: Record<string, AppConfig>;
  runningAppIds: string[];
  activeAppId: string | null;

  registerApps: (configs: AppConfig[]) => void;
  setRunning: (appId: string, running: boolean) => void;
  setActiveApp: (appId: string | null) => void;
}

type S = AppSlice;
type Setter = (fn: (state: S) => void) => void;

export function createAppSlice(set: Setter): AppSlice {
  return {
    apps: {},
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
  };
}
