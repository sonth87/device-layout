import { AppConfig } from '../../types/app';
interface AppIconImageProps {
    appConfig: AppConfig;
    size?: number;
    className?: string;
    fill?: boolean;
}
/**
 * Renders app icon: SVG/PNG image → Lucide icon → letter fallback.
 * Border radius and overflow clipping are strictly enforced with !important
 * to ensure no user styles can override the system squircle icon layout.
 */
export declare function AppIconImage({ appConfig, size, className, fill }: AppIconImageProps): import("react/jsx-runtime").JSX.Element;
export {};
