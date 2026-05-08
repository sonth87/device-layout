'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { AppIconImage } from '@/components/shared/AppIconImage';
import type { AppConfig } from '@/types/app';

interface DockItemProps {
  appConfig: AppConfig;
  isRunning: boolean;
  hasMinimized?: boolean;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  onOpen: (app: AppConfig) => void;
}

export const BASE_SIZE = 54;
export const MAX_SIZE = 80;
const MAGNETIC_RADIUS = 120;

// Total height of the dock item slot: icon area + dot indicator area.
// This is the fixed height the dock uses — icons overflow UPWARD beyond this.
export const DOCK_ITEM_HEIGHT = BASE_SIZE + 6;

export function DockItem({ appConfig, isRunning, hasMinimized, mouseX, onOpen }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [bouncing, setBouncing] = useState(false);

  // Magnification: map cursor distance → icon size
  const distance = useTransform(mouseX, (mx) => {
    if (!ref.current) return MAGNETIC_RADIUS + 1;
    const rect = ref.current.getBoundingClientRect();
    return Math.abs(mx - (rect.left + rect.width / 2));
  });

  const rawSize = useTransform(distance, [0, MAGNETIC_RADIUS], [MAX_SIZE, BASE_SIZE], { clamp: true });
  const size = useSpring(rawSize, { stiffness: 350, damping: 22, mass: 0.5 });

  const handleClick = () => {
    setBouncing(true);
    setTimeout(() => setBouncing(false), 700);
    onOpen(appConfig);
  };

  return (
    <Tooltip.Provider delayDuration={500}>
      <Tooltip.Root>
        {/*
         * Outer container: animated width drives dock pill expansion.
         * Height is FIXED so the glass dock doesn't grow on hover.
         * overflow-visible lets the magnified icon escape upward.
         * ref here gives a stable center for distance measurement.
         */}
        <motion.div
          ref={ref}
          className="relative flex flex-col justify-end items-center overflow-visible"
          style={{ width: size, height: DOCK_ITEM_HEIGHT }}
        >
          {/*
           * Tooltip.Trigger wraps the button directly (not the outer container).
           * This way the tooltip anchors to the button's rendered top edge,
           * which rises as the icon magnifies — tooltip never gets covered.
           */}
          <Tooltip.Trigger asChild>
            <motion.button
              style={{ width: size, height: size }}
              className="relative shrink-0 flex items-center justify-center"
              animate={bouncing ? { y: [0, -22, -2, -14, 0, -6, 0] } : { y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={handleClick}
              whileTap={{ scale: 0.88 }}
              aria-label={appConfig.name}
            >
              <AppIconImage
                appConfig={appConfig}
                size={MAX_SIZE}
                fill
                className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
              />
            </motion.button>
          </Tooltip.Trigger>

          {/* Running / minimized indicator dot — always 6 px, below icon */}
          <div className="shrink-0 h-1.5 flex items-center gap-1">
            {isRunning && !hasMinimized && (
              <span className="w-1 h-1 rounded-full bg-white/80 shadow" />
            )}
            {hasMinimized && (
              <span className="w-1 h-1 rounded-full bg-white/40 shadow" />
            )}
          </div>
        </motion.div>

        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            sideOffset={8}
            className="
              relative overflow-hidden
              rounded-xl
              backdrop-blur-2xl
              bg-white/20 dark:bg-white/10
              border border-white/40 dark:border-white/20
              shadow-[0_8px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)]
              text-white dark:text-white text-[12px] font-medium px-3 py-1.5
              pointer-events-none
              z-50
            "
          >
            {/* top specular */}
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.85) 50%, transparent 95%)' }}
            />
            <span className="relative z-10">{appConfig.name}</span>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
