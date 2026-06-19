'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';
import { useStore } from '@/store';
import { WIDGET_REGISTRY, getWidgetsByApp } from '@/config/widgets.config';
import { WIDGET_SIZE_PX } from '@/types/widget';
import { cn } from '@/lib/utils';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { WidgetRenderer } from './WidgetRenderer';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';
import type { WidgetDefinition, WidgetSize } from '@/types/widget';

/* ── Drag ghost that follows the pointer when dragging from the panel ── */
interface GhostState {
  def: WidgetDefinition;
  size: WidgetSize;
  x: number;
  y: number;
}

function DragGhost({ ghost }: { ghost: GhostState }) {
  const { w, h } = WIDGET_SIZE_PX[ghost.size];
  return createPortal(
    <div
      className="fixed pointer-events-none z-[99999] rounded-[20px] overflow-hidden opacity-80"
      style={{
        left: ghost.x - w / 2,
        top:  ghost.y - h / 2,
        width: w,
        height: h,
      }}
    >
      <LiquidGlass variant="widget" className="w-full h-full">
        <WidgetRenderer componentKey={ghost.def.componentKey} size={ghost.size} />
      </LiquidGlass>
    </div>,
    document.body
  );
}

/* ── Single widget preview card inside the panel ── */
function WidgetPreviewCard({
  def,
  size,
  onDragStart,
}: {
  def: WidgetDefinition;
  size: WidgetSize;
  onDragStart: (def: WidgetDefinition, size: WidgetSize, startX: number, startY: number) => void;
}) {
  const { w, h } = WIDGET_SIZE_PX[size];
  const scale = Math.min(140 / w, 110 / h);
  const displayW = Math.round(w * scale);
  const displayH = Math.round(h * scale);

  return (
    <div
      className="flex flex-col items-center gap-1.5 cursor-grab active:cursor-grabbing select-none"
      onPointerDown={(e) => {
        e.preventDefault();
        onDragStart(def, size, e.clientX, e.clientY);
      }}
    >
      <div
        className="rounded-[14px] overflow-hidden bg-white/5 border border-white/10"
        style={{ width: displayW, height: displayH }}
      >
        <div style={{ width: w, height: h, transform: `scale(${scale})`, transformOrigin: 'top left', pointerEvents: 'none' }}>
          <LiquidGlass variant="widget" className="w-full h-full">
            <WidgetRenderer componentKey={def.componentKey} size={size} />
          </LiquidGlass>
        </div>
      </div>
      <p className="text-black/60 dark:text-white/70 text-[10px] text-center leading-tight max-w-[120px] truncate">{size}</p>
    </div>
  );
}

/* ── Sidebar app row ── */
function AppRow({
  appId,
  selected,
  onClick,
}: {
  appId: string;
  selected: boolean;
  onClick: () => void;
}) {
  const apps = useStore((s) => s.apps);
  const app = appId === '__built-in__' ? null : apps[appId];
  const label = app?.name ?? 'Built-in';

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-2.5 px-3 py-1.5 rounded-[8px] text-left transition-colors',
        selected
          ? 'bg-black/10 dark:bg-white/15 text-black dark:text-white'
          : 'text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/8 hover:text-black dark:hover:text-white'
      )}
    >
      {app ? (
        <AppIconImage appConfig={app} size={20} className="rounded-md shrink-0" />
      ) : (
        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 shrink-0" />
      )}
      <span className="text-[13px] truncate">{label}</span>
    </button>
  );
}

/* ── Main panel ── */
export function WidgetGalleryPanel() {
  const closeWidgetGallery = useStore((s) => s.closeWidgetGallery);
  const addWidget          = useStore((s) => s.addWidget);
  const apps               = useStore((s) => s.apps);

  const [search, setSearch]       = useState('');
  const [selectedApp, setSelectedApp] = useState<string>('__all__');
  const [ghost, setGhost]         = useState<GhostState | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<{ def: WidgetDefinition; size: WidgetSize } | null>(null);

  // All unique app IDs that have widgets (includes '__built-in__')
  const appIds = [...new Set(WIDGET_REGISTRY.map((w) => w.appId))];

  // Filtered widget list
  const filtered = WIDGET_REGISTRY.filter((w) => {
    const matchesApp = selectedApp === '__all__' || w.appId === selectedApp;
    const q = search.toLowerCase();
    const matchesSearch = !q ||
      w.name.toLowerCase().includes(q) ||
      (w.description ?? '').toLowerCase().includes(q) ||
      (apps[w.appId]?.name ?? '').toLowerCase().includes(q);
    return matchesApp && matchesSearch;
  });

  // Group by appId for display
  const byApp: Record<string, WidgetDefinition[]> = {};
  for (const w of filtered) {
    if (!byApp[w.appId]) byApp[w.appId] = [];
    byApp[w.appId].push(w);
  }

  /* ── Pointer drag from panel → desktop ── */
  const startDrag = useCallback((def: WidgetDefinition, size: WidgetSize, startX: number, startY: number) => {
    draggingRef.current = { def, size };
    setGhost({ def, size, x: startX, y: startY });

    const onMove = (e: PointerEvent) => {
      setGhost((g) => g ? { ...g, x: e.clientX, y: e.clientY } : null);
    };

    const onUp = (e: PointerEvent) => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);

      // Check if dropped outside the panel (onto desktop)
      const panel = panelRef.current;
      const onDesktop = panel ? !panel.contains(e.target as Node) : true;

      if (onDesktop && draggingRef.current) {
        const { def: d, size: sz } = draggingRef.current;
        const { w, h } = WIDGET_SIZE_PX[sz];
        addWidget(d, sz, e.clientX - w / 2, e.clientY - h / 2);
      }

      draggingRef.current = null;
      setGhost(null);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }, [addWidget]);

  /* Dismiss on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeWidgetGallery(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [closeWidgetGallery]);

  const isDragging = ghost !== null;

  return (
    <>
      {/* Scrim */}
      <motion.div
        className="fixed inset-0 z-[1000] bg-black/20 dark:bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
        exit={{ opacity: 0 }}
        onClick={closeWidgetGallery}
      />

      {/* Panel */}
      <motion.div
        ref={panelRef}
        className="fixed bottom-0 left-1/2 z-[1002] flex flex-col w-full max-w-[960px]"
        style={{ height: '58vh' }}
        initial={{ y: '100%', x: '-50%' }}
        animate={{ y: isDragging ? '110%' : 0, x: '-50%' }}
        exit={{ y: '100%', x: '-50%' }}
        transition={{ type: 'spring', stiffness: 340, damping: 36 }}
      >
        {/* Glass card */}
        <div className="flex-1 mx-3 mb-0 rounded-t-[20px] overflow-hidden bg-white/85 dark:bg-[rgba(28,28,30,0.88)] backdrop-blur-3xl border border-black/10 dark:border-white/[0.08] flex flex-col shadow-2xl">

          {/* Content */}
          <div className="flex flex-1 overflow-hidden">
            {/* ── Left sidebar ── */}
            <div className="w-52 shrink-0 border-r border-black/[0.06] dark:border-white/[0.06] flex flex-col p-3 gap-1 overflow-y-auto">
              {/* Search */}
              <div className="relative mb-2">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/30 dark:text-white/30"/>
                <input
                  type="text"
                  placeholder="Search Widgets"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-black/5 dark:bg-white/8 text-black dark:text-white text-[13px] placeholder-black/30 dark:placeholder-white/30 rounded-[8px] pl-8 pr-3 py-1.5 outline-none border border-black/10 dark:border-white/10 focus:border-black/20 dark:focus:border-white/20 transition-colors"
                />
                {search && (
                  <button onClick={() => setSearch('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60">
                    <X className="w-3 h-3"/>
                  </button>
                )}
              </div>

              {/* All Widgets */}
              <button
                onClick={() => setSelectedApp('__all__')}
                className={cn(
                  'w-full flex items-center gap-2.5 px-3 py-1.5 rounded-[8px] text-left transition-colors',
                  selectedApp === '__all__' ? 'bg-black/10 dark:bg-white/15 text-black dark:text-white' : 'text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/8 hover:text-black dark:hover:text-white'
                )}
              >
                <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-purple-500 shrink-0" />
                <span className="text-[13px]">All Widgets</span>
              </button>

              {appIds.map((id) => (
                <AppRow
                  key={id}
                  appId={id}
                  selected={selectedApp === id}
                  onClick={() => setSelectedApp(id)}
                />
              ))}
            </div>

            {/* ── Right content area ── */}
            <div className="flex-1 overflow-y-auto p-4">
              {Object.keys(byApp).length === 0 ? (
                <div className="flex items-center justify-center h-full text-black/30 dark:text-white/30 text-sm">
                  No widgets found
                </div>
              ) : (
                Object.entries(byApp).map(([appId, defs]) => {
                  const appLabel = appId === '__built-in__' ? 'Built-in' : (apps[appId]?.name ?? appId);
                  return (
                    <div key={appId} className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-black dark:text-white text-[13px] font-semibold">{appLabel}</p>
                        {appId !== '__built-in__' && (
                          <p className="text-black/30 dark:text-white/30 text-[11px]">From {appLabel}</p>
                        )}
                      </div>
                      {defs.map((def) => (
                        <div key={def.id} className="mb-4">
                          <p className="text-black/50 dark:text-white/50 text-[11px] mb-2 font-medium">{def.name}</p>
                          <div className="flex flex-wrap gap-4">
                            {def.sizes.map((sz) => (
                              <WidgetPreviewCard
                                key={sz}
                                def={def}
                                size={sz}
                                onDragStart={startDrag}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-black/[0.06] dark:border-white/[0.06] shrink-0">
            <p className="text-black/40 dark:text-white/40 text-[12px]">Drag a widget to place it on the desktop…</p>
            <button
              onClick={closeWidgetGallery}
              className="px-5 py-1.5 bg-red-500 hover:bg-red-600 text-white text-[13px] font-semibold rounded-[8px] transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </motion.div>

      {/* Drag ghost follows cursor */}
      <AnimatePresence>
        {ghost && <DragGhost ghost={ghost} />}
      </AnimatePresence>
    </>
  );
}
