'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { onSnapZoneChange, getSnapRect, type SnapZone } from '@/lib/snap-events';
import { useTheme } from '@/hooks/useTheme';

const ZONE_LABELS: Record<NonNullable<SnapZone>, string> = {
  left: 'Snap Left',
  right: 'Snap Right',
  top: 'Maximize',
  'top-left': 'Top Left',
  'top-right': 'Top Right',
  'bottom-left': 'Bottom Left',
  'bottom-right': 'Bottom Right',
};

interface ZoneStyle {
  bg: string;
  border: string;
  labelBg: string;
  labelText: string;
  highlight?: boolean; // top specular line for glass look
}

function getZoneStyle(osTheme: string): ZoneStyle {
  if (osTheme === 'macos') {
    return {
      bg: 'rgba(255,255,255,0.12)',
      border: 'rgba(255,255,255,0.55)',
      labelBg: 'rgba(255,255,255,0.18)',
      labelText: 'rgba(255,255,255,0.95)',
      highlight: true,
    };
  }
  // Windows (and others)
  return {
    bg: 'rgba(59,130,246,0.18)',
    border: 'rgba(59,130,246,0.55)',
    labelBg: 'rgba(59,130,246,0.30)',
    labelText: 'rgb(191,219,254)',
    highlight: false,
  };
}

function ZoneOverlay({ zone, style, topInset, bottomInset }: { zone: NonNullable<SnapZone>; style: ZoneStyle; topInset: number; bottomInset: number }) {
  const rect = getSnapRect(zone, topInset, bottomInset);
  if (!rect) return null;

  const inset = 6;

  return (
    <motion.div
      key={zone}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className="absolute pointer-events-none rounded-xl flex items-center justify-center overflow-hidden"
      style={{
        left: rect.x + inset,
        top: rect.y + inset,
        width: rect.width - inset * 2,
        height: rect.height - inset * 2,
        background: style.bg,
        border: `1.5px solid ${style.border}`,
        backdropFilter: 'blur(6px)',
      }}
    >
      {/* macOS glass specular highlight */}
      {style.highlight && (
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.7) 50%, transparent 95%)' }}
        />
      )}

      <span
        className="text-[13px] font-semibold px-3 py-1 rounded-full"
        style={{ background: style.labelBg, color: style.labelText, backdropFilter: 'blur(4px)' }}
      >
        {ZONE_LABELS[zone]}
      </span>
    </motion.div>
  );
}

export function SnapAssist() {
  const [activeZone, setActiveZone] = useState<SnapZone>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [topInset, setTopInset] = useState(0);
  const [bottomInset, setBottomInset] = useState(0);
  const { osTheme } = useTheme();
  const zoneStyle = getZoneStyle(osTheme);

  useEffect(() => {
    return onSnapZoneChange((zone, dragging, inset, bInset) => {
      setActiveZone(zone);
      setIsDragging(dragging);
      setTopInset(inset);
      setBottomInset(bInset);
    });
  }, []);

  if (!isDragging) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-9990">
      <AnimatePresence>
        {activeZone && (
          <ZoneOverlay
            key={activeZone}
            zone={activeZone}
            style={zoneStyle}
            topInset={topInset}
            bottomInset={bottomInset}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
