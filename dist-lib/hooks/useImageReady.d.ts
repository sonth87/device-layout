/**
 * True once `src` has actually decoded successfully. Deliberately does NOT
 * report ready on error — a caller using this to gate `backgroundImage: url(...)`
 * (e.g. Wallpaper.tsx) needs to keep showing its solid-color fallback when
 * the image 404s, instead of pointing background-image at a broken URL
 * (which renders as plain white, not the intended fallback).
 */
export declare function useImageReady(src: string, enabled?: boolean): boolean;
