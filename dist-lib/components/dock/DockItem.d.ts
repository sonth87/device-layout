import { useMotionValue } from 'motion/react';
import { AppConfig } from '../../types/app';
interface DockItemProps {
    appConfig: AppConfig;
    isRunning: boolean;
    hasMinimized?: boolean;
    mouseX: ReturnType<typeof useMotionValue<number>>;
    onOpen: (app: AppConfig) => void;
    /** Icon size at rest — Settings > Desktop & Dock's "Size" slider (desktop-slice.ts's dockSize). */
    baseSize: number;
    /** Icon size when magnified (cursor directly over it) — baseSize * (1 + dockMagnification). Equals baseSize when magnification is "Off". */
    maxSize: number;
}
export declare function DockItem({ appConfig, isRunning, hasMinimized, mouseX, onOpen, baseSize, maxSize }: DockItemProps): import("react/jsx-runtime").JSX.Element;
export {};
