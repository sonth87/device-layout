'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { AppIconImage } from '@/components/shared/AppIconImage';
import type { AppConfig } from '@/types/app';
import { useTranslation } from '@/hooks/useTranslation';
import { useUpdateStatusStore, hasAvailableUpdate } from '@/lib/update-status-store';
import { useStore } from '@/store';

interface DockItemProps {
  appConfig: AppConfig;
  isRunning: boolean;
  hasMinimized?: boolean;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  onOpen: (app: AppConfig) => void;
  /** Icon size at rest — Settings > Desktop & Dock's "Size" slider (desktop-slice.ts's dockSize). */
  baseSize: number;
  /** Icon size when magnified (cursor directly over it) — baseSize * (1 + dockMagnification). Equals baseSize when magnification is "Off". */
  maxSize: number;
}

const MAGNETIC_RADIUS = 120;

export function DockItem({ appConfig, isRunning, hasMinimized, mouseX, onOpen, baseSize, maxSize }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [bouncing, setBouncing] = useState(false);
  const { getAppName } = useTranslation();
  const displayName = getAppName(appConfig.id, appConfig.name);
  const showOpenAppIndicators = useStore((s) => s.showOpenAppIndicators);

  // Update badge — chỉ cho icon Settings, phạm vi hẹp (không đổi AppConfig.badge
  // field chung/pipeline Dock khác). Xem docs/dev/versioning.md's mục OTA Update.
  const updateStatus = useUpdateStatusStore((s) => s.status);
  const showUpdateBadge = appConfig.id === 'settings' && hasAvailableUpdate(updateStatus);

  // Total height of the dock item slot: icon area + dot indicator area.
  // This is the fixed height the dock uses — icons overflow UPWARD beyond this.
  const itemHeight = baseSize + 10;

  // Magnification: map cursor distance → icon size
  const distance = useTransform(mouseX, (mx) => {
    if (!ref.current) return MAGNETIC_RADIUS + 1;
    const rect = ref.current.getBoundingClientRect();
    return Math.abs(mx - (rect.left + rect.width / 2));
  });

  const rawSize = useTransform(distance, [0, MAGNETIC_RADIUS], [maxSize, baseSize], { clamp: true });
  const size = useSpring(rawSize, { stiffness: 350, damping: 22, mass: 0.5 });

  // useTransform only recomputes `rawSize` when `distance` (its input motion
  // value) changes — i.e. when the mouse moves over the dock. If the user
  // changes dockSize/dockMagnification in Settings without touching the dock
  // (the common case — Settings is a separate window), baseSize/maxSize
  // change but rawSize/size stay stuck at whatever they last evaluated to,
  // so icons visually don't resize until the next hover. `distance.jump()`
  // to its own current value is a no-op (MotionValue only notifies on an
  // actual change) — `dirty()` unconditionally re-notifies dependents
  // (rawSize's transform) without moving the cursor, forcing it to
  // recompute against the new baseSize/maxSize closed over by that
  // transform.
  useEffect(() => {
    distance.dirty();
  }, [baseSize, maxSize, distance]);

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
          style={{ width: size, height: itemHeight }}
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
              aria-label={displayName}
            >
              <AppIconImage
                appConfig={appConfig}
                size={maxSize}
                fill
                className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
              />
              {showUpdateBadge && (
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#11141B]" />
              )}
            </motion.button>
          </Tooltip.Trigger>

          {/* Running / minimized indicator dot — always 6 px, below icon */}
          <div className="shrink-0 h-1.5 flex items-center justify-center gap-1 -mb-0.5">
            {showOpenAppIndicators && isRunning && !hasMinimized && (
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
            )}
            {showOpenAppIndicators && hasMinimized && (
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_1px_2px_rgba(0,0,0,0.3)] border border-white/20" />
            )}
          </div>
        </motion.div>

        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            sideOffset={8}
            className="
              relative overflow-hidden
              rounded-[var(--radius-card)]
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
            <span className="relative z-10">{displayName}</span>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
