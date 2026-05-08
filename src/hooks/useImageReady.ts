'use client';

import { useEffect, useState } from 'react';

export function useImageReady(src: string, enabled = true) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !src) return;

    let cancelled = false;
    const image = new Image();

    const markReady = () => {
      if (!cancelled) setLoadedSrc(src);
    };

    image.onload = markReady;
    image.onerror = markReady;
    image.src = src;

    if (image.complete) markReady();

    return () => {
      cancelled = true;
    };
  }, [src, enabled]);

  return enabled && !!src && loadedSrc === src;
}
