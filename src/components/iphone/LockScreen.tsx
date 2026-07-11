'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useStore } from '@/store';
import { WALLPAPERS } from '@/config/wallpapers.config';
import { useImageReady } from '@/hooks/useImageReady';
import { useStoreHydrated } from '@/hooks/useStoreHydrated';
import { resolveAssetUrl, useAssetBase } from '@/lib/asset-base';

function LockClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <>{time}</>;
}

interface LockScreenProps {
  onUnlock: () => void;
}

export function LockScreen({ onUnlock }: LockScreenProps) {
  const wallpaperId = useStore((s) => s.wallpaperId);
  const hydrated = useStoreHydrated();
  const assetBase = useAssetBase();
  const wallpaper = WALLPAPERS.find((w) => w.id === wallpaperId);
  const wallpaperUrl = resolveAssetUrl(assetBase, wallpaper?.url ?? '/wallpapers/bg-1.jpg');
  const wallpaperReady = useImageReady(wallpaperUrl, hydrated);
  const backgroundImage = hydrated && wallpaperReady ? `url(${wallpaperUrl})` : 'none';

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <motion.div
      key="lockscreen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -60, transition: { duration: 0.4, ease: 'easeIn' } }}
      className="absolute inset-0 z-9999 flex flex-col items-center select-none"
      style={{
        backgroundColor: '#fff',
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-16 flex-1">
        {/* Clock */}
        <div className="text-white text-7xl font-thin tracking-tighter leading-none">
          <LockClock />
        </div>
        {/* Date */}
        <p className="text-white/80 text-lg font-medium mt-2">{dateStr}</p>

        {/* Notifications preview */}
        <div className="mt-8 w-72 space-y-2 max-h-52 overflow-hidden">
          {[
            { app: 'Messages', message: 'You have a new message' },
            { app: 'Calendar', message: 'Meeting in 15 minutes' },
          ].map((n, i) => (
            <div key={i} className="bg-white/15 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/20">
              <p className="text-[10px] font-semibold text-white/60 uppercase">{n.app}</p>
              <p className="text-[13px] text-white/90 mt-0.5">{n.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Swipe up hint */}
      <div className="relative z-10 pb-12 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="cursor-pointer"
          onClick={onUnlock}
        >
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </motion.div>
        <p className="text-white/60 text-[12px] font-medium tracking-wide">Swipe up to unlock</p>
      </div>
    </motion.div>
  );
}
