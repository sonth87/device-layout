import { AppConfig } from '../types/app';
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
export declare function createAppSlice(set: Setter): AppSlice;
export {};
