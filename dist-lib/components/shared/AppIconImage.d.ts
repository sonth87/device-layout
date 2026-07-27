import { AppConfig } from '../../types/app';
interface AppIconImageProps {
    appConfig: AppConfig;
    size?: number;
    className?: string;
    fill?: boolean;
}
/**
 * Renders app icon: SVG/PNG image → Lucide icon → letter fallback.
 * Border radius is driven by the `--radius-icon` CSS variable so all themes
 * stay consistent without any JS calculation.
 */
export declare function AppIconImage({ appConfig, size, className, fill }: AppIconImageProps): import("react").JSX.Element;
export {};
