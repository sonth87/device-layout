'use client';

import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useAssetBase, resolveAssetUrl } from '@/lib/asset-base';
import type { WallpaperConfig } from '@/types/desktop';
import { RefreshCw } from 'lucide-react';

interface WallpaperThumbProps {
  wallpaper: WallpaperConfig;
  selected: boolean;
  /** Shown as a small badge (top-left) when this item is the active auto-cycle source (macOS shows a shuffle glyph on the selected custom-folder thumbnail). */
  cycling?: boolean;
  onClick: () => void;
  /** Colors render as plain circular swatches (macOS style); pictures/live render as rounded rectangular cards. */
  shape?: 'card' | 'circle';
  size?: 'sm' | 'md';
}

function PictureThumbImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full bg-zinc-200 dark:bg-zinc-800">
      {!loaded && <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-850 animate-pulse" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={cn('w-full h-full object-cover transition-opacity duration-300', loaded ? 'opacity-100' : 'opacity-0')}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}

/** Live wallpaper thumbnail — shows poster image at rest, plays video silently on hover. */
function LiveThumbPreview({ posterSrc, videoSrc, alt }: { posterSrc: string; videoSrc: string; alt: string }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };
  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative w-full h-full bg-zinc-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Poster image — fades out when video is playing */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={posterSrc}
        alt={alt}
        className={cn('absolute inset-0 w-full h-full object-cover transition-opacity duration-300', hovered ? 'opacity-0' : 'opacity-100')}
      />
      {/* Video — preloaded but paused until hover */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        preload="none"
        className={cn('absolute inset-0 w-full h-full object-cover transition-opacity duration-300', hovered ? 'opacity-100' : 'opacity-0')}
      />
    </div>
  );
}


export function WallpaperThumb({ wallpaper, selected, cycling, onClick, shape = 'card', size = 'md' }: WallpaperThumbProps) {
  const assetBase = useAssetBase();

  if (wallpaper.kind === 'color') {
    const dim = size === 'sm' ? 'w-9 h-9' : 'w-11 h-11';
    return (
      <button
        onClick={onClick}
        title={wallpaper.name}
        className={cn(
          'relative rounded-full shrink-0 transition-all border-2',
          dim,
          selected ? 'ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-[#151821] border-white/60' : 'border-black/10 dark:border-white/10 hover:scale-105'
        )}
        style={{ backgroundColor: wallpaper.colorHex }}
      />
    );
  }

  const thumbSrc = resolveAssetUrl(assetBase, wallpaper.thumbnail ?? wallpaper.url ?? '');
  const isCircleCard = shape === 'circle';
  const videoSrc = wallpaper.videoUrl ? resolveAssetUrl(assetBase, wallpaper.videoUrl) : null;

  return (
    <button
      onClick={onClick}
      title={wallpaper.name}
      className={cn(
        'relative overflow-hidden border-2 transition-all shrink-0',
        isCircleCard ? 'w-20 h-28 rounded-[28px]' : 'aspect-video rounded-(--radius-input) w-full',
        selected ? 'border-blue-500 scale-105 shadow-lg z-10' : 'border-transparent hover:border-white/40 hover:scale-102'
      )}
    >
      {wallpaper.kind === 'live' && (
        <span className="absolute top-1.5 right-1.5 px-1 py-0.5 bg-black/60 text-white text-[8px] font-bold tracking-wider rounded uppercase z-10 select-none pointer-events-none">
          LIVE
        </span>
      )}
      {cycling && (
        <span className="absolute top-1.5 left-1.5 z-10 w-4 h-4 rounded-full bg-black/60 flex items-center justify-center">
          <RefreshCw className="w-2.5 h-2.5 text-white" />
        </span>
      )}
      {wallpaper.kind === 'live' && videoSrc ? (
        <LiveThumbPreview posterSrc={thumbSrc} videoSrc={videoSrc} alt={wallpaper.name} />
      ) : (
        <PictureThumbImage src={thumbSrc} alt={wallpaper.name} />
      )}
    </button>
  );
}
