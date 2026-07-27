import { ReactNode } from 'react';
interface AppGridProps {
    /** Columns per breakpoint. Defaults: narrow=2, medium=3, wide=4 */
    narrow?: number;
    medium?: number;
    wide?: number;
    gap?: string;
    children: ReactNode;
    className?: string;
}
/**
 * A responsive CSS grid that uses container width (not viewport width).
 * Automatically picks the right column count for phone frame / desktop window.
 *
 * Example:
 *   <AppGrid narrow={2} medium={3} wide={4}>
 *     {photos.map(p => <PhotoCard key={p.id} photo={p} />)}
 *   </AppGrid>
 */
export declare function AppGrid({ narrow, medium, wide, gap, children, className, }: AppGridProps): import("react").JSX.Element;
export {};
