'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { onSnapZoneChange, getSnapRect, type SnapZone } from '@/lib/snap-events';

const ZONE_LABELS: Record<NonNullable<SnapZone>, string> = {
  left: 'Snap Left',
  right: 'Snap Right',
  top: 'Maximize',
  'top-left': 'Top Left',
  'top-right': 'Top Right',
  'bottom-left': 'Bottom Left',
  'bottom-right': 'Bottom Right',
};

function ZoneOverlay({ zone }: { zone: NonNullable<SnapZone> }) {
  const rect = getSnapRect(zone);
  if (!rect) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.12 }}
      className="absolute pointer-events-none rounded-lg flex items-center justify-center"
      style={{
        left: rect.x + 4,
        top: rect.y + 4,
        width: rect.width - 8,
        height: rect.height - 8,
        background: 'rgba(59,130,246,0.18)',
        border: '2px solid rgba(59,130,246,0.55)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <span className="text-blue-200 text-sm font-semibold bg-blue-500/30 px-3 py-1 rounded-full">
        {ZONE_LABELS[zone]}
      </span>
    </motion.div>
  );
}

export function SnapAssist() {
  const [activeZone, setActiveZone] = useState<SnapZone>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    return onSnapZoneChange((zone, dragging) => {
      setActiveZone(zone);
      setIsDragging(dragging);
    });
  }, []);

  if (!isDragging) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[9990]">
      <AnimatePresence>
        {activeZone && <ZoneOverlay key={activeZone} zone={activeZone} />}
      </AnimatePresence>
    </div>
  );
}
