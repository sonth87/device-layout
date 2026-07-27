import { AppConfig } from '../../types/app';
export declare const PAD = 20;
interface IconGridProps {
    onOpenApp: (appConfig: AppConfig) => void;
}
export declare function IconGrid({ onOpenApp }: IconGridProps): import("react").JSX.Element;
export {};
