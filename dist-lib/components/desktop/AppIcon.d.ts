import { AppConfig } from '../../types/app';
interface AppIconProps {
    appConfig: AppConfig;
    x: number;
    y: number;
    onOpen: (appConfig: AppConfig) => void;
    onDrop: (x: number, y: number) => void;
    onDragStart?: () => void;
    onDrag?: (x: number, y: number) => void;
    isSelected?: boolean;
    onSelect?: (appId: string, e: React.PointerEvent) => void;
    onUpAfterClick?: (appId: string) => void;
}
export declare function AppIcon({ appConfig, x, y, onOpen, onDrop, onDragStart, onDrag, isSelected, onSelect, onUpAfterClick, }: AppIconProps): import("react").JSX.Element;
export {};
