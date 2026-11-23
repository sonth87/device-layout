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
const EDGE_SWIPE_ZONE = 50;
const EDGE_SWIPE_COOLDOWN_MS = 900;
const LONG_PRESS_MS = 600;

function compactPages(
  list: (string | null)[],
  currentPage: number,
): { nextList: (string | null)[]; nextPage: number } {
  const totalChunks = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const keptChunks: (string | null)[][] = [];
  let nextPage = 0;

  for (let p = 0; p < totalChunks; p++) {
    const chunk = list.slice(p * PAGE_SIZE, (p + 1) * PAGE_SIZE);
    while (chunk.length < PAGE_SIZE) chunk.push(null);
    const hasApp = chunk.some((id) => id !== null);
    if (hasApp) {
      if (p === currentPage) {
        nextPage = keptChunks.length;
      } else if (p < currentPage) {
        nextPage = keptChunks.length + 1;
      }
      keptChunks.push(chunk);
    }
  }

  if (keptChunks.length === 0) {
    keptChunks.push(new Array(PAGE_SIZE).fill(null));
    nextPage = 0;
  } else {
    nextPage = Math.max(0, Math.min(nextPage, keptChunks.length - 1));
  }

  return {
    nextList: keptChunks.flat(),
    nextPage,
  };
}

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
  const dockAppIds = useStore((s) => s.dockAppIds);
  const { getAppName } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [jiggling, setJiggling] = useState(false);

  // Initialize main desktop grid slots (excluding dock apps)
  const [orderedMainAppIds, setOrderedMainAppIds] = useState<(string | null)[]>(() => {
    const state = useStore.getState();
    const appsMap = state.apps;
    const allApps = Object.values(appsMap).filter((a) => !a.disabled);
    const dockIds = new Set(
      state.dockAppIds.length > 0
        ? state.dockAppIds
        : allApps.slice(0, DOCK_COUNT).map((a) => a.id)
    );
    const mainAppsList = allApps.filter((a) => !dockIds.has(a.id)).map((a) => a.id);
    const totalPages = Math.max(1, Math.ceil(mainAppsList.length / PAGE_SIZE));
    const list: (string | null)[] = [...mainAppsList];
    while (list.length < totalPages * PAGE_SIZE) {
      list.push(null);
    }
    return list;
  });

  const [previewList, setPreviewList] = useState<(string | null)[]>(orderedMainAppIds);

  // Sync grid when registered apps or dockAppIds change (e.g. after ThemeProvider's registerApps effect)
  const mainAppIdsKey = (() => {
    const allApps = Object.values(apps).filter((a) => !a.disabled);
    const dockIds = new Set(
      dockAppIds.length > 0
        ? dockAppIds
        : allApps.slice(0, DOCK_COUNT).map((a) => a.id)
    );
    return allApps
      .filter((a) => !dockIds.has(a.id))
      .map((a) => a.id)
      .join('\u0000');
  })();

  useEffect(() => {
    const mainIds = mainAppIdsKey ? mainAppIdsKey.split('\u0000') : [];
    const mainSet = new Set(mainIds);
    setOrderedMainAppIds((prev) => {
      const kept = prev.map((id) => (id && mainSet.has(id) ? id : null));
      const present = new Set(kept.filter(Boolean));
      const missing = mainIds.filter((id) => !present.has(id));
      if (missing.length === 0 && kept.every((id, i) => id === prev[i])) {
        return prev;
      }
      const next = [...kept];
      for (const id of missing) {
        const slot = next.indexOf(null);
        if (slot === -1) next.push(id);
        else next[slot] = id;
      }
      let last = -1;
      for (let i = next.length - 1; i >= 0; i--) {
        if (next[i] !== null) {
          last = i;
          break;
        }
      }
      const pageCount = Math.max(1, Math.ceil((last + 1) / PAGE_SIZE));
      const trimmed = next.slice(0, pageCount * PAGE_SIZE);
      while (trimmed.length < pageCount * PAGE_SIZE) trimmed.push(null);
      return trimmed;
    });
  }, [mainAppIdsKey]);

  useEffect(() => {
    setPreviewList(orderedMainAppIds);
  }, [orderedMainAppIds]);

  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const [isHoldingIcon, setIsHoldingIcon] = useState(false);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  const bgDragControls = useDragControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(768); // iPad screen width fallback
  const lastSwipeTime = useRef(0);

  const activeList = activeDragId ? previewList : orderedMainAppIds;
  let totalPages = 1;
  let maxDragPage = 0;
  if (activeDragId) {
    let lastOtherIndex = -1;
    for (let i = activeList.length - 1; i >= 0; i--) {
      if (activeList[i] !== null && activeList[i] !== activeDragId) {
        lastOtherIndex = i;
        break;
      }
    }
    const basePages = Math.max(1, Math.ceil((lastOtherIndex + 1) / PAGE_SIZE));
    maxDragPage = basePages;
    totalPages = Math.max(basePages + 1, currentPage + 1);
  } else {
    let lastIndex = -1;
    for (let i = activeList.length - 1; i >= 0; i--) {
      if (activeList[i] !== null) {
        lastIndex = i;
        break;
      }
    }
    totalPages = Math.max(1, Math.ceil((lastIndex + 1) / PAGE_SIZE));
    maxDragPage = totalPages - 1;
  }

  const effectivePage = Math.min(currentPage, Math.max(0, totalPages - 1));

  // Refs to always have latest values inside window event listener closures (avoids stale closure bug)
  const currentPageRef = useRef(effectivePage);
  const totalPagesRef = useRef(totalPages);
  const maxDragPageRef = useRef(maxDragPage);
  const orderedMainAppIdsRef = useRef(orderedMainAppIds);
  const previewListRef = useRef(previewList);
  const activeDragIdRef = useRef(activeDragId);
  const isHoldingIconRef = useRef(isHoldingIcon);

  useEffect(() => { currentPageRef.current = effectivePage; }, [effectivePage]);
  useEffect(() => { totalPagesRef.current = totalPages; }, [totalPages]);
  useEffect(() => { maxDragPageRef.current = maxDragPage; }, [maxDragPage]);
  useEffect(() => { orderedMainAppIdsRef.current = orderedMainAppIds; }, [orderedMainAppIds]);
  useEffect(() => { previewListRef.current = previewList; }, [previewList]);
  useEffect(() => { activeDragIdRef.current = activeDragId; }, [activeDragId]);
  useEffect(() => { isHoldingIconRef.current = isHoldingIcon; }, [isHoldingIcon]);

  useEffect(() => {
    if (!activeDragId && currentPage >= totalPages) {
      const clamped = Math.max(0, totalPages - 1);
      currentPageRef.current = clamped;
      setCurrentPage(clamped);
    }
  }, [activeDragId, currentPage, totalPages]);

  // Measure viewport width on mount/resize
  useEffect(() => {
    const target = viewportRef.current ?? containerRef.current;
    if (!target) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width || 768);
      }
    });
    resizeObserver.observe(target);
    return () => resizeObserver.disconnect();
  }, []);

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
    const clamped = Math.max(0, Math.min(nextPage, totalPagesRef.current - 1));
    if (clamped === currentPageRef.current) return;
    currentPageRef.current = clamped;
    setCurrentPage(clamped);
  }, []);

  // Long-press background to enter edit mode
  const bgLongPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const didBgLongPress = useRef(false);
  const bgPointerStart = useRef<{ x: number; y: number } | null>(null);

  const clearBgLongPress = () => {
    if (bgLongPressTimer.current) {
      clearTimeout(bgLongPressTimer.current);
      bgLongPressTimer.current = null;
    }
  };

  const onBgPointerDown = (e: React.PointerEvent) => {
    if (
      activeDragIdRef.current ||
      (e.target as HTMLElement | null)?.closest('[data-app-id]')
    ) {
      return;
    }
    didBgLongPress.current = false;
    bgPointerStart.current = { x: e.clientX, y: e.clientY };
    clearBgLongPress();
    bgLongPressTimer.current = setTimeout(() => {
      didBgLongPress.current = true;
      setJiggling(true);
    }, LONG_PRESS_MS);
  };

  const onBgPointerMove = (e: React.PointerEvent) => {
    if (!bgPointerStart.current) return;
    const dist = Math.hypot(
      e.clientX - bgPointerStart.current.x,
      e.clientY - bgPointerStart.current.y,
    );
    if (dist > 8) {
      clearBgLongPress();
    }
  };

  const onBgPointerUp = () => {
    bgPointerStart.current = null;
    clearBgLongPress();
  };

  const onBgClick = () => {
    if (didBgLongPress.current) {
      didBgLongPress.current = false;
      return;
    }
    if (jiggling) setJiggling(false);
  };

  const onViewportPointerDown = (e: React.PointerEvent) => {
    if (
      activeDragIdRef.current ||
      isHoldingIconRef.current ||
      (e.target as HTMLElement | null)?.closest('[data-app-id]')
    ) {
      return;
    }
    bgDragControls.start(e);
  };

  const handleDragStart = (appId: string, event: PointerEvent | MouseEvent | TouchEvent) => {
    activeDragIdRef.current = appId;
    isHoldingIconRef.current = true;
    setActiveDragId(appId);
    setIsHoldingIcon(true);

    const clientX = 'touches' in event ? (event as TouchEvent).touches[0].clientX : (event as MouseEvent).clientX;
    const clientY = 'touches' in event ? (event as TouchEvent).touches[0].clientY : (event as MouseEvent).clientY;
    setPointerPos({ x: clientX, y: clientY });
  };

  // Global window pointer listeners — registered ONCE when drag starts, reads fresh values via refs
  useEffect(() => {
    if (!activeDragId) return;

    const moveDraggedAppToCell = (
      clientX: number,
      clientY: number,
      page: number,
      clampToGrid: boolean,
    ) => {
      const dragId = activeDragIdRef.current;
      const vpEl = viewportRef.current;
      if (!dragId || !vpEl) return;

      const vpRect = vpEl.getBoundingClientRect();
      const innerWidth = Math.max(1, vpRect.width);
      const innerHeight = Math.max(1, vpRect.height);

      let col = Math.floor(((clientX - vpRect.left) / innerWidth) * COLS);
      let row = Math.floor(((clientY - vpRect.top) / innerHeight) * ROWS);

      if (clampToGrid) {
        col = Math.max(0, Math.min(COLS - 1, col));
        row = Math.max(0, Math.min(ROWS - 1, row));
      } else if (col < 0 || col >= COLS || row < 0 || row >= ROWS) {
        return;
      }

      const targetCellIndex = row * COLS + col;
      const targetFlatIndex = page * PAGE_SIZE + targetCellIndex;

      const currentOriginList = [...orderedMainAppIdsRef.current];
      const fromIndex = currentOriginList.indexOf(dragId);

      if (fromIndex !== -1 && targetFlatIndex !== fromIndex) {
        if (targetFlatIndex >= currentOriginList.length) {
          const targetLength = (page + 1) * PAGE_SIZE;
          while (currentOriginList.length < targetLength) {
            currentOriginList.push(null);
          }
        }

        const nextPreview = getPreviewList(currentOriginList, fromIndex, targetFlatIndex);
        orderedMainAppIdsRef.current = nextPreview;
        previewListRef.current = nextPreview;
        setPreviewList(nextPreview);
        setOrderedMainAppIds(nextPreview);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      setPointerPos({ x: e.clientX, y: e.clientY });

      const dragId = activeDragIdRef.current;
      if (!dragId) return;

      const containerRect = containerRef.current?.getBoundingClientRect();
      let page = currentPageRef.current;

      // 1. Edge swipe detection (bounded to valid pages)
      if (containerRect) {
        const x = e.clientX;
        const now = Date.now();
        if (now - lastSwipeTime.current > EDGE_SWIPE_COOLDOWN_MS) {
          if (x < containerRect.left + EDGE_SWIPE_ZONE && page > 0) {
            page = page - 1;
            currentPageRef.current = page;
            setCurrentPage(page);
            lastSwipeTime.current = now;
            moveDraggedAppToCell(e.clientX, e.clientY, page, true);
            return;
          } else if (
            x > containerRect.right - EDGE_SWIPE_ZONE &&
            page < maxDragPageRef.current
          ) {
            page = page + 1;
            totalPagesRef.current = Math.max(totalPagesRef.current, page + 1);
            currentPageRef.current = page;
            setCurrentPage(page);
            lastSwipeTime.current = now;
            moveDraggedAppToCell(e.clientX, e.clientY, page, true);
            return;
          }
        }
      }

      // 2. Calculate hover index inside stationary viewport bounds
      const insideScreen =
        !!containerRect &&
        e.clientX >= containerRect.left &&
        e.clientX <= containerRect.right &&
        e.clientY >= containerRect.top &&
        e.clientY <= containerRect.bottom;
      moveDraggedAppToCell(e.clientX, e.clientY, page, insideScreen);
    };

    const handlePointerUp = () => {
      const latestPreview = [...previewListRef.current];
      const page = currentPageRef.current;

      const { nextList, nextPage } = compactPages(latestPreview, page);

      orderedMainAppIdsRef.current = nextList;
      previewListRef.current = nextList;
      currentPageRef.current = nextPage;
      activeDragIdRef.current = null;
      isHoldingIconRef.current = false;

      setOrderedMainAppIds(nextList);
      setPreviewList(nextList);
      setCurrentPage(nextPage);
      setActiveDragId(null);
      setIsHoldingIcon(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [activeDragId]);

  const handleBgDragEnd = (e: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    void e;
    if (activeDragIdRef.current || isHoldingIconRef.current) return;

    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const maxPage = Math.max(0, totalPagesRef.current - 1);
    const basePage = Math.min(currentPageRef.current, maxPage);

    let nextPage = basePage;
    const swipeThreshold = containerWidth / 4;

    if (offset < -swipeThreshold || velocity < -300) {
      nextPage = Math.min(maxPage, basePage + 1);
    } else if (offset > swipeThreshold || velocity > 300) {
      nextPage = Math.max(0, basePage - 1);
    }

    changePage(nextPage);
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex flex-col overflow-clip px-6 pt-12 pb-36 pointer-events-auto"
      onPointerDown={onBgPointerDown}
      onPointerMove={onBgPointerMove}
      onPointerUp={onBgPointerUp}
      onPointerCancel={onBgPointerUp}
      onClick={onBgClick}
    >
      {/* App grid */}
      <div
        ref={viewportRef}
        className="flex-1 overflow-clip"
        onPointerDown={onViewportPointerDown}
      >
        <motion.div
          drag="x"
          dragControls={bgDragControls}
          dragListener={false}
          dragDirectionLock
          dragConstraints={{ left: -(totalPages - 1) * containerWidth, right: 0 }}
          animate={{ x: -effectivePage * containerWidth }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onDragEnd={handleBgDragEnd}
          className="flex h-full cursor-grab active:cursor-grabbing"
          style={{ width: totalPages * containerWidth }}
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
                        onPointerDownStart={() => {
                          isHoldingIconRef.current = true;
                          setIsHoldingIcon(true);
                        }}
                        onPointerDownEnd={() => {
                          if (!activeDragIdRef.current) {
                            isHoldingIconRef.current = false;
                            setIsHoldingIcon(false);
                          }
                        }}
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
        <div
          className="flex justify-center gap-2 py-2"
          onPointerDown={(e) => e.stopPropagation()}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); changePage(i); }}
              className={cn(
                'rounded-full transition-all duration-200',
                i === effectivePage ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50',
              )}
            />
          ))}
        </div>
      )}
 
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
    if (didLongPress.current || isDraggingInitiated.current || jiggling) {
      isDraggingInitiated.current = false;
      return;
    }
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
