import { AppConfig } from '../../types/app';
export declare function AboutDialog({ appConfig, onClose, }: {
    appConfig: AppConfig;
    onClose: () => void;
}): import('react').ReactPortal | null;
/**
 * Listens for `app:menu:action` events with `action === 'about'` and displays
 * the AboutDialog for that app. Mount this once inside MacOSChrome.
 *
 * Any app can trigger it by dispatching:
 *   new CustomEvent('app:menu:action', { detail: { appId, action: 'about' } })
 */
export declare function GlobalAboutDialog(): import("react").JSX.Element | null;
