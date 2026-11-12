import { AppConfig } from '../../types/app';
interface ChromeProps {
    onOpenApp: (app: AppConfig) => void;
    /**
     * Running on a real touch device: swipes belong to the browser/OS and to the
     * apps themselves, so they must not open the simulated Control Center / lock.
     */
    isRealDevice?: boolean;
}
export declare function IPadChrome({ onOpenApp, isRealDevice }: ChromeProps): import("react/jsx-runtime").JSX.Element;
export { IPadChrome as IPadShell, IPadChrome as IPadTheme };
