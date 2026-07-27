import { AppConfig } from '../../types/app';
interface DockProps {
    onOpenApp: (app: AppConfig) => void;
}
export declare function Dock({ onOpenApp }: DockProps): import("react").JSX.Element;
export {};
