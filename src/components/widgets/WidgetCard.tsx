'use client';

import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { useStore } from '@/store';
import { WIDGET_SIZE_PX } from '@/types/widget';
import { getWidgetDef } from '@/config/widgets.config';
import { WidgetRenderer } from './WidgetRenderer';
import type { WidgetInstance } from '@/types/widget';

interface Props {
  instance: WidgetInstance;
}

const DRAG_THRESHOLD = 4;

export function WidgetCard({ instance }: Props) {
  const moveWidget   = useStore((s) => s.moveWidget);
  const removeWidget = useStore((s) => s.removeWidget);
  const isEditing    = useStore((s) => s.isEditingWidgets);

  const def = getWidgetDef(instance.definitionId);
  const { w, h } = WIDGET_SIZE_PX[instance.size];

  const [pos, setPos] = useState({ x: instance.x, y: instance.y });
  const dragRef = useRef<{ startMouseX: number; startMouseY: number; startX: number; startY: number; moved: boolean } | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    if ((e.target as Element).closest('[data-widget-remove]')) return;
    e.stopPropagation();
    e.preventDefault();

    dragRef.current = {
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startX: pos.x,
      startY: pos.y,
      moved: false,
    };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

    const onMove = (ev: PointerEvent) => {
      if (!dragRef.current) return;
      const dx = ev.clientX - dragRef.current.startMouseX;
      const dy = ev.clientY - dragRef.current.startMouseY;
      if (!dragRef.current.moved && Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
      dragRef.current.moved = true;
      setPos({ x: dragRef.current.startX + dx, y: dragRef.current.startY + dy });
    };

    const onUp = (ev: PointerEvent) => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      if (!dragRef.current) return;
      const dx = ev.clientX - dragRef.current.startMouseX;
      const dy = ev.clientY - dragRef.current.startMouseY;
      const finalX = dragRef.current.startX + dx;
      const finalY = dragRef.current.startY + dy;
      dragRef.current = null;
      setPos({ x: finalX, y: finalY });
      moveWidget(instance.instanceId, finalX, finalY);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  if (!def) return null;

  return (
    <motion.div
      className="absolute"
      style={{ left: pos.x, top: pos.y, width: w, height: h, zIndex: 5 }}
      animate={isEditing ? { rotate: [-0.8, 0.8, -0.8] } : { rotate: 0 }}
      transition={isEditing
        ? { repeat: Infinity, duration: 0.25, ease: 'easeInOut' }
        : { duration: 0.15 }}
      onPointerDown={handlePointerDown}
    >
      {/* Remove button — visible only in editing mode */}
      {isEditing && (
        <button
          data-widget-remove
          onClick={() => removeWidget(instance.instanceId)}
          className="absolute -top-2 -left-2 z-10 w-5 h-5 bg-black/80 border border-white/20 rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 transition-colors"
          aria-label="Remove widget"
        >
          <X className="w-3 h-3 text-white" />
        </button>
      )}
      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <WidgetRenderer componentKey={def.componentKey} size={instance.size} />
      </div>
    </motion.div>
  );
}
