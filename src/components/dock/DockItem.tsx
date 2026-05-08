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
        <Tooltip.Trigger asChild>
          {/*
           * Container: width follows size (so dock widens on hover),
           * but height is FIXED at DOCK_ITEM_HEIGHT.
           * flex-col + justify-end anchors children to the bottom,
           * so when the icon grows it overflows UPWARD — not down.
           * overflow-visible lets the icon escape the container boundary.
           */}
          <motion.div
            ref={ref}
            className="relative flex flex-col justify-end items-center overflow-visible"
            style={{ width: size, height: DOCK_ITEM_HEIGHT }}
          >
            {/* Icon — grows upward when magnified */}
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
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            sideOffset={12}
            className="bg-neutral-800/90 backdrop-blur-md text-white text-[12px] font-medium px-2.5 py-1 rounded-lg shadow-xl pointer-events-none border border-white/10"
          >
            {appConfig.name}
            <Tooltip.Arrow className="fill-neutral-800/90" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
