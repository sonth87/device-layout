'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useDragControls, type PanInfo } from 'motion/react';
import { useStore } from '@/store';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { cn } from '@/lib/utils';
import type { AppConfig } from '@/types/app';
import { useTranslation } from '@/hooks/useTranslation';

interface IPadHomeScreenProps {
  onOpenApp: (app: AppConfig) => void;
}

const COLS = 6;
const ROWS = 4;
const PAGE_SIZE = COLS * ROWS; // 24 cells
const DOCK_COUNT = 6;
const LONG_PRESS_MS = 600;

// Helper to shift items in the flat list when a cell is occupied
const getPreviewList = (
  originalList: (string | null)[],
  from: number,
  to: number
): (string | null)[] => {
  const result = [...originalList];
  const item = result[from];
  
  // Set the source slot to null
  result[from] = null;
  
  // If the target slot is empty, we can just put it there!
  if (originalList[to] === null) {
    result[to] = item;
    return result;
  }
  
  // If target slot is occupied, shift elements to make room
  if (from > to) {
    // Shift elements from 'to' to 'from - 1' right by 1
    for (let i = from; i > to; i--) {
      result[i] = result[i - 1];
    }
    result[to] = item;
  } else {
    // from < to
    // Shift elements from 'from + 1' to 'to' left by 1
    for (let i = from; i < to; i++) {
      result[i] = result[i + 1];
    }
    result[to] = item;
  }
  return result;
};

export function IPadHomeScreen({ onOpenApp }: IPadHomeScreenProps) {
  const apps = useStore((s) => s.apps);
  const { getAppName } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [jiggling, setJiggling] = useState(false);

  // Initialize main desktop grid slots (excluding dock apps)
  const [orderedMainAppIds, setOrderedMainAppIds] = useState<(string | null)[]>(() => {
    const appsMap = useStore.getState().apps;
    const allApps = Object.values(appsMap).filter((a) => !a.disabled);
    const mainAppsList = allApps.slice(DOCK_COUNT).map((a) => a.id);
    const totalPages = Math.max(1, Math.ceil(mainAppsList.length / PAGE_SIZE));
    const list: (string | null)[] = [...mainAppsList];
    while (list.length < totalPages * PAGE_SIZE) {
      list.push(null);
    }
    return list;
  });

  const [previewList, setPreviewList] = useState<(string | null)[]>(orderedMainAppIds);
  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const [isHoldingIcon, setIsHoldingIcon] = useState(false);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(768); // iPad screen width fallback
  const lastSwipeTime = useRef(0);

  // Refs to always have latest values inside window event listener closures (avoids stale closure bug)
  const currentPageRef = useRef(currentPage);
  const orderedMainAppIdsRef = useRef(orderedMainAppIds);
  const previewListRef = useRef(previewList);
  const activeDragIdRef = useRef(activeDragId);
  useEffect(() => { currentPageRef.current = currentPage; }, [currentPage]);
  useEffect(() => { orderedMainAppIdsRef.current = orderedMainAppIds; }, [orderedMainAppIds]);
  useEffect(() => { previewListRef.current = previewList; }, [previewList]);
  useEffect(() => { activeDragIdRef.current = activeDragId; }, [activeDragId]);

  // Measure container width on mount/resize
  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width || 768);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const appList = Object.values(apps).filter((a) => !a.disabled);
  const dockApps = appList.slice(0, DOCK_COUNT);

  const activeList = activeDragId ? previewList : orderedMainAppIds;
  let totalPages = Math.max(1, Math.ceil(activeList.length / PAGE_SIZE));
  if (activeDragId) {
    totalPages += 1;
  }
 
  // Split main apps into pages, ensuring empty page is pre-populated with nulls for dragging
  const pages: (string | null)[][] = [];
  for (let i = 0; i < totalPages * PAGE_SIZE; i += PAGE_SIZE) {
    const pageSlice = activeList.slice(i, i + PAGE_SIZE);
    while (pageSlice.length < PAGE_SIZE) {
      pageSlice.push(null);
    }
    pages.push(pageSlice);
  }

  const changePage = useCallback((nextPage: number) => {
    if (nextPage === currentPageRef.current) return;
    setCurrentPage(nextPage);
  }, []);

  // Long-press background to enter edit mode
  const bgLongPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onBgPointerDown = () => {
    bgLongPressTimer.current = setTimeout(() => setJiggling(true), LONG_PRESS_MS);
  };
  const onBgPointerUp = () => {
    if (bgLongPressTimer.current) clearTimeout(bgLongPressTimer.current);
  };

  const onBgClick = () => {
    if (jiggling) setJiggling(false);
  };

  const handleDragStart = (appId: string, event: PointerEvent | MouseEvent | TouchEvent) => {
    setActiveDragId(appId);
    setIsHoldingIcon(true);
    
    // Set initial pointer position
    const clientX = 'touches' in event ? (event as TouchEvent).touches[0].clientX : (event as MouseEvent).clientX;
    const clientY = 'touches' in event ? (event as TouchEvent).touches[0].clientY : (event as MouseEvent).clientY;
    setPointerPos({ x: clientX, y: clientY });
  };

  const handleDragEnd = useCallback(() => {
    // Left legacy handler empty or simple
  }, []);

  // Global window pointer listeners — registered ONCE when drag starts, reads fresh values via refs
  useEffect(() => {
    if (!activeDragId) return;

    const handlePointerMove = (e: PointerEvent) => {
      setPointerPos({ x: e.clientX, y: e.clientY });

      const page = currentPageRef.current;
      const dragId = activeDragIdRef.current;
      if (!dragId) return;

      // 1. Calculate hover index inside the current page grid
      const grids = containerRef.current?.querySelectorAll('.grid');
      const gridEl = grids?.[page];
      if (gridEl) {
        const rect = gridEl.getBoundingClientRect();
        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;

        const col = Math.floor(localX / (rect.width / COLS));
        const row = Math.floor(localY / (rect.height / ROWS));

        if (col >= 0 && col < COLS && row >= 0 && row < ROWS) {
          const targetCellIndex = row * COLS + col;
          const targetFlatIndex = page * PAGE_SIZE + targetCellIndex;

          // Always use ref for latest list — no stale closure
          let currentOriginList = [...orderedMainAppIdsRef.current];
          const fromIndex = currentOriginList.indexOf(dragId);

          if (fromIndex !== -1 && targetFlatIndex !== fromIndex) {
            // Expand list to accommodate new page if needed
            if (targetFlatIndex >= currentOriginList.length) {
              const targetLength = (page + 1) * PAGE_SIZE;
              while (currentOriginList.length < targetLength) {
                currentOriginList.push(null);
              }
            }

            const nextPreview = getPreviewList(currentOriginList, fromIndex, targetFlatIndex);
            // Update both state and refs immediately
            orderedMainAppIdsRef.current = nextPreview;
            previewListRef.current = nextPreview;
            setPreviewList(nextPreview);
            setOrderedMainAppIds(nextPreview);
          }
        }
      }

      // 2. Edge swipe detection
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (containerRect) {
        const x = e.clientX;
        const now = Date.now();
        if (now - lastSwipeTime.current > 1200) {
          const page = currentPageRef.current;
          if (x < containerRect.left + 50 && page > 0) {
            changePage(page - 1);
            lastSwipeTime.current = now;
          } else if (x > containerRect.right - 50) {
            changePage(page + 1);
            lastSwipeTime.current = now;
          }
        }
      }
    };

    const handlePointerUp = () => {
      // Read fresh values from refs at the moment of drop
      const latestPreview = [...previewListRef.current];
      const page = currentPageRef.current;

      let lastNonEmptyIndex = -1;
      for (let i = latestPreview.length - 1; i >= 0; i--) {
        if (latestPreview[i] !== null) {
          lastNonEmptyIndex = i;
          break;
        }
      }
      const neededPages = Math.max(1, Math.ceil((lastNonEmptyIndex + 1) / PAGE_SIZE));
      const nextList = latestPreview.slice(0, neededPages * PAGE_SIZE);
      
      setOrderedMainAppIds(nextList);
      setPreviewList(nextList);

      if (page >= neededPages) {
        setCurrentPage(neededPages - 1);
      }

      setActiveDragId(null);
      setIsHoldingIcon(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  // Only re-register when drag starts/ends — refs handle fresh values internally
  }, [activeDragId, changePage]);

  const handleBgDragEnd = (e: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    void e;
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    let nextPage = currentPage;
    const swipeThreshold = containerWidth / 4;

    if (offset < -swipeThreshold || velocity < -300) {
      nextPage = Math.min(totalPages - 1, currentPage + 1);
    } else if (offset > swipeThreshold || velocity > 300) {
      nextPage = Math.max(0, currentPage - 1);
    }

    changePage(nextPage);
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex flex-col overflow-hidden px-6 pt-12 pb-36 pointer-events-auto"
      onPointerDown={onBgPointerDown}
      onPointerUp={onBgPointerUp}
      onPointerCancel={onBgPointerUp}
      onClick={onBgClick}
    >
      {/* App grid */}
      <div className="flex-1 overflow-hidden">
        <motion.div
          drag={isHoldingIcon ? false : "x"}
          dragDirectionLock
          dragConstraints={{ left: -(totalPages - 1) * containerWidth, right: 0 }}
          animate={{ x: -currentPage * containerWidth }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onDragEnd={handleBgDragEnd}
          className="flex h-full w-full cursor-grab active:cursor-grabbing"
        >
          {pages.map((page, pageIdx) => (
            <div
              key={pageIdx}
              className="h-full shrink-0 grid gap-x-4 gap-y-6"
              style={{
                gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                gridTemplateRows: `repeat(${ROWS}, 1fr)`,
                width: containerWidth
              }}
            >
              {page.map((appId, i) => {
                if (appId) {
                  const app = apps[appId];
                  if (app) {
                    return (
                      <IPadAppIcon
                        key={app.id}
                        app={app}
                        index={i}
                        jiggling={jiggling}
                        activeDragId={activeDragId}
                        onPointerDownStart={() => setIsHoldingIcon(true)}
                        onPointerDownEnd={() => setIsHoldingIcon(false)}
                        onOpen={onOpenApp}
                        onDragStart={handleDragStart}
                      />
                    );
                  }
                }

                // Render an empty grid cell placeholder to preserve spacing
                return (
                  <div
                    key={`empty-${i}`}
                    className="flex flex-col items-center gap-2 min-w-0 opacity-0 pointer-events-none select-none"
                  >
                    <div style={{ width: 72, height: 72 }} />
                    <span className="text-xs leading-tight max-w-[72px] truncate">Empty</span>
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Page dots */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 py-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); changePage(i); }}
              className={cn(
                'rounded-full transition-all duration-200',
                i === currentPage ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50',
              )}
            />
          ))}
        </div>
      )}

      {/* iPad Dock */}
      <div className="absolute bottom-3 inset-x-6 z-10 pointer-events-auto">
        <div
          className="rounded-3xl px-6 py-3 flex items-center justify-around"
          style={{
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            boxShadow: '0 2px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25)',
          }}
        >
          {dockApps.map((app) => (
            <button
              key={app.id}
              onClick={() => onOpenApp(app)}
              className="flex flex-col items-center gap-1.5"
            >
              <AppIconImage appConfig={app} size={64} />
              <span className="text-white/80 text-[10px] font-medium">{getAppName(app.id, app.name)}</span>
            </button>
          ))}
        </div>
      </div>
 
      {/* Drag Overlay Clone */}
      {activeDragId && apps[activeDragId] && (
        <div
          className="fixed pointer-events-none z-[99999] flex flex-col items-center gap-2 select-none"
          style={{
            left: pointerPos.x - 36, // Center of 72px icon
            top: pointerPos.y - 36,
            width: 72,
            transform: 'scale(1.15)',
            filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.35))',
          }}
        >
          <AppIconImage appConfig={apps[activeDragId]} size={72} />
          <span className="text-white text-xs font-semibold text-center leading-tight drop-shadow-md max-w-[72px] truncate">
            {getAppName(activeDragId, apps[activeDragId].name)}
          </span>
        </div>
      )}
    </div>
  );
}

interface IPadAppIconProps {
  app: AppConfig;
  index: number;
  jiggling: boolean;
  activeDragId: string | null;
  onPointerDownStart: () => void;
  onPointerDownEnd: () => void;
  onOpen: (app: AppConfig) => void;
  onDragStart: (appId: string, event: any) => void;
}

function IPadAppIcon({
  app,
  index,
  jiggling,
  activeDragId,
  onPointerDownStart,
  onPointerDownEnd,
  onOpen,
  onDragStart,
}: IPadAppIconProps) {
  const { getAppName } = useTranslation();
  const displayName = getAppName(app.id, app.name);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const didLongPress = useRef(false);
  const pointerDownPos = useRef({ x: 0, y: 0 });
  const isDraggingInitiated = useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    pointerDownPos.current = { x: e.clientX, y: e.clientY };
    isDraggingInitiated.current = false;
    didLongPress.current = false;
    onPointerDownStart(); // Disable parent drag immediately

    longPressTimer.current = setTimeout(() => {
      didLongPress.current = true;
      if (!isDraggingInitiated.current) {
        isDraggingInitiated.current = true;
        onDragStart(app.id, e.nativeEvent);
      }
    }, LONG_PRESS_MS);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDraggingInitiated.current) return;
    
    if (pointerDownPos.current.x !== 0 || pointerDownPos.current.y !== 0) {
      const dist = Math.hypot(e.clientX - pointerDownPos.current.x, e.clientY - pointerDownPos.current.y);
      if (dist > 5) {
        if (longPressTimer.current) clearTimeout(longPressTimer.current);
        isDraggingInitiated.current = true;
        onDragStart(app.id, e.nativeEvent);
      }
    }
  };

  const handlePointerUp = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
    pointerDownPos.current = { x: 0, y: 0 };
    onPointerDownEnd(); // Enable parent drag back
  };

  const handlePointerCancel = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
    pointerDownPos.current = { x: 0, y: 0 };
    onPointerDownEnd();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (didLongPress.current || jiggling) return;
    onOpen(app);
  };

  const isDragged = activeDragId === app.id;

  return (
    <motion.div
      layout={!isDragged}
      data-app-id={app.id}
      className="flex flex-col items-center gap-2 min-w-0 select-none relative cursor-grab active:cursor-grabbing"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onClick={handleClick}
      style={{
        touchAction: 'none',
        zIndex: isDragged ? 100 : 10,
        visibility: isDragged ? 'hidden' : 'visible',
      }}
    >
      <motion.div
        animate={jiggling ? {
          rotate: [0, -3.5, 3.5, -3.5, 3.5, 0],
          x: [0, -1.2, 1.2, -1.2, 1.2, 0],
          y: [0, 1.2, -1.2, 1.2, -1.2, 0],
          transition: { repeat: Infinity, duration: 0.5, delay: (index % 8) * 0.04 },
        } : { rotate: 0, x: 0, y: 0 }}
        className="relative pointer-events-none"
      >
        <AppIconImage appConfig={app} size={72} />
      </motion.div>
      <span className="text-white text-xs font-medium text-center leading-tight drop-shadow-md max-w-[72px] truncate pointer-events-none">
        {displayName}
      </span>
    </motion.div>
  );
}
