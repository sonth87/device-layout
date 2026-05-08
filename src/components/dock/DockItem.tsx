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

const BASE_SIZE = 54;
const MAX_SIZE = 80;
const NEIGHBOR_SIZE = 68;
const MAGNETIC_RADIUS = 120;

export function DockItem({ appConfig, isRunning, hasMinimized, mouseX, onOpen }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [bouncing, setBouncing] = useState(false);

  // Magnification based on distance from cursor
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
          <div
            ref={ref}
            className="flex flex-col items-center relative"
            style={{ height: MAX_SIZE + 6 }}
          >
            <motion.button
              style={{ width: size, height: size }}
              className="relative flex items-center justify-center mt-auto"
              animate={bouncing ? { y: [0, -22, -2, -14, 0, -6, 0] } : { y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={handleClick}
              whileTap={{ scale: 0.88 }}
              aria-label={appConfig.name}
            >
              <motion.div style={{ width: size, height: size }}>
                <AppIconImage
                  appConfig={appConfig}
                  size={MAX_SIZE}
                  className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                />
              </motion.div>
            </motion.button>

            {/* Running / minimized indicator dot */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1">
              {isRunning && !hasMinimized && (
                <span className="w-1 h-1 rounded-full bg-white/80 shadow" />
              )}
              {hasMinimized && (
                <span className="w-1 h-1 rounded-full bg-white/40 shadow" />
              )}
            </div>
          </div>
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
