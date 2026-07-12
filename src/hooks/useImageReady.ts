'use client';

import { useEffect, useState } from 'react';

/**
 * True once `src` has actually decoded successfully. Deliberately does NOT
 * report ready on error — a caller using this to gate `backgroundImage: url(...)`
 * (e.g. Wallpaper.tsx) needs to keep showing its solid-color fallback when
 * the image 404s, instead of pointing background-image at a broken URL
 * (which renders as plain white, not the intended fallback).
 */
export function useImageReady(src: string, enabled = true) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [erroredSrc, setErroredSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !src) return;

    let cancelled = false;
    const image = new Image();

    image.onload = () => {
      if (!cancelled) setLoadedSrc(src);
    };
    image.onerror = () => {
      if (!cancelled) setErroredSrc(src);
    };
    image.src = src;

    if (image.complete) setLoadedSrc(src);

    return () => {
      cancelled = true;
    };
  }, [src, enabled]);

  return enabled && !!src && loadedSrc === src && erroredSrc !== src;
}
