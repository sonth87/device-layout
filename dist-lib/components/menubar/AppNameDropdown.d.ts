import { AppConfig } from '../../types/app';
interface AppNameDropdownProps {
    appConfig: AppConfig | null;
    appId: string | null;
    activeId: string | null;
    setActiveId: (id: string | null) => void;
}
export declare function AppNameDropdown({ appConfig, appId, activeId, setActiveId, }: AppNameDropdownProps): import("react").JSX.Element | null;
export {};
