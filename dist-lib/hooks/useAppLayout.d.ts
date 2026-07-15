export type AppLayoutSize = 'narrow' | 'medium' | 'wide';
export interface AppLayout {
    /** Container width in px (0 before first measure) */
    width: number;
    /** Container height in px */
    height: number;
    /** < 480px  — phone frame or very small window */
    isNarrow: boolean;
    /** 480–719px — tablet split or medium window */
    isMedium: boolean;
    /** ≥ 720px  — full desktop window */
    isWide: boolean;
    /** Convenience: 'narrow' | 'medium' | 'wide' */
    size: AppLayoutSize;
    /** Number of grid columns appropriate for the current size */
    cols: (narrow: number, medium: number, wide: number) => number;
}
/**
 * Returns layout information based on the app's own container width,
 * NOT the browser viewport. Works correctly inside phone frames.
 *
 * Usage:
 *   const { isNarrow, cols } = useAppLayout();
 *   <div style={{ gridTemplateColumns: `repeat(${cols(1, 2, 3)}, 1fr)` }}>
 */
export declare function useAppLayout(): AppLayout;
