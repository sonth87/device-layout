import { AppConfig } from '../types/app';
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
export declare function createAppSlice(set: Setter): AppSlice;
export {};
