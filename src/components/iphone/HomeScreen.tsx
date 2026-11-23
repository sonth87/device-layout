"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useDragControls, type PanInfo } from "motion/react";
import { useStore } from "@/store";
import { AppIconImage } from "@/components/shared/AppIconImage";
import { cn } from "@/lib/utils";
import type { AppConfig } from "@/types/app";
import { useTranslation } from "@/hooks/useTranslation";

interface HomeScreenProps {
  onOpenApp: (app: AppConfig) => void;
  statusBarHeight: number;
  navBarHeight: number;
  homeIndicatorHeight: number;
  /**
   * Running full-bleed on a real phone: the device draws its own status bar and
   * home indicator, so offset content by the CSS safe-area insets instead.
   */
  useSafeArea?: boolean;
}

const COLS = 4;
const ROWS = 6;
const PAGE_SIZE = COLS * ROWS; // 24 cells
const GRID_PAD_X = 16; // matches px-4 on .grid
const EDGE_SWIPE_ZONE = 36;
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
  to: number,
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

export function IPhoneHomeScreen({
  onOpenApp,
  statusBarHeight,
  navBarHeight,
  homeIndicatorHeight,
  useSafeArea = false,
}: HomeScreenProps) {
  const apps = useStore((s) => s.apps);
  const { getAppName } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [jiggling, setJiggling] = useState(false);

  // Initialize grid slots array mapping to app IDs or null
  const [orderedAppIds, setOrderedAppIds] = useState<(string | null)[]>(() => {
    const appsMap = useStore.getState().apps;
    const enabledApps = Object.values(appsMap)
      .filter((a) => !a.disabled)
      .map((a) => a.id);
    const totalPages = Math.max(1, Math.ceil(enabledApps.length / PAGE_SIZE));
    const list: (string | null)[] = [...enabledApps];
    while (list.length < totalPages * PAGE_SIZE) {
      list.push(null);
    }
    return list;
  });

  const [previewList, setPreviewList] =
    useState<(string | null)[]>(orderedAppIds);

  // Keep the grid in sync with the registered apps. The initial snapshot above
  // is taken during the first render — before ThemeProvider's registerApps()
  // effect runs — so a host that passes its own `apps` (e.g. builtInApps={false})
  // would otherwise be left with the built-in IDs, none of which exist anymore,
  // and the home screen renders empty. Preserve the user's arrangement for apps
  // that still exist, drop removed ones, and append newly registered apps.
  const enabledAppIdsKey = Object.values(apps)
    .filter((a) => !a.disabled)
    .map((a) => a.id)
    .join("\u0000");
  useEffect(() => {
    const enabledIds = enabledAppIdsKey ? enabledAppIdsKey.split("\u0000") : [];
    const enabledSet = new Set(enabledIds);
    setOrderedAppIds((prev) => {
      const kept = prev.map((id) => (id && enabledSet.has(id) ? id : null));
      const present = new Set(kept.filter(Boolean));
      const missing = enabledIds.filter((id) => !present.has(id));
      if (missing.length === 0 && kept.every((id, i) => id === prev[i])) {
        return prev;
      }
      // Fill freed slots first, then extend with new pages as needed.
      const next = [...kept];
      for (const id of missing) {
        const slot = next.indexOf(null);
        if (slot === -1) next.push(id);
        else next[slot] = id;
      }
      // Trim trailing empty pages, keeping at least one page.
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
  }, [enabledAppIdsKey]);

  useEffect(() => {
    setPreviewList(orderedAppIds);
  }, [orderedAppIds]);
  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const [isHoldingIcon, setIsHoldingIcon] = useState(false);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  const bgDragControls = useDragControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(393); // Default iPhone screen width fallback
  const lastSwipeTime = useRef(0);

  const activeList = activeDragId ? previewList : orderedAppIds;
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
  const orderedAppIdsRef = useRef(orderedAppIds);
  const previewListRef = useRef(previewList);
  const activeDragIdRef = useRef(activeDragId);
  const isHoldingIconRef = useRef(isHoldingIcon);

  useEffect(() => {
    currentPageRef.current = effectivePage;
  }, [effectivePage]);
  useEffect(() => {
    totalPagesRef.current = totalPages;
  }, [totalPages]);
  useEffect(() => {
    maxDragPageRef.current = maxDragPage;
  }, [maxDragPage]);
  useEffect(() => {
    orderedAppIdsRef.current = orderedAppIds;
  }, [orderedAppIds]);
  useEffect(() => {
    previewListRef.current = previewList;
  }, [previewList]);
  useEffect(() => {
    activeDragIdRef.current = activeDragId;
  }, [activeDragId]);
  useEffect(() => {
    isHoldingIconRef.current = isHoldingIcon;
  }, [isHoldingIcon]);

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
        setContainerWidth(entry.contentRect.width || 393);
      }
    });
    resizeObserver.observe(target);
    return () => resizeObserver.disconnect();
  }, []);

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
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const didBgLongPress = useRef(false);
  const bgPointerStart = useRef<{ x: number; y: number } | null>(null);

  const clearBgLongPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const onBgPointerDown = (e: React.PointerEvent) => {
    if (
      activeDragIdRef.current ||
      (e.target as HTMLElement | null)?.closest("[data-app-id]")
    ) {
      return;
    }
    didBgLongPress.current = false;
    bgPointerStart.current = { x: e.clientX, y: e.clientY };
    clearBgLongPress();
    longPressTimer.current = setTimeout(() => {
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
      (e.target as HTMLElement | null)?.closest("[data-app-id]")
    ) {
      return;
    }
    bgDragControls.start(e);
  };

  const handleDragStart = (
    appId: string,
    event: PointerEvent | MouseEvent | TouchEvent,
  ) => {
    activeDragIdRef.current = appId;
    isHoldingIconRef.current = true;
    setActiveDragId(appId);
    setIsHoldingIcon(true);

    const clientX =
      "touches" in event
        ? (event as TouchEvent).touches[0].clientX
        : (event as MouseEvent).clientX;
    const clientY =
      "touches" in event
        ? (event as TouchEvent).touches[0].clientY
        : (event as MouseEvent).clientY;
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
      const innerLeft = vpRect.left + GRID_PAD_X;
      const innerWidth = Math.max(1, vpRect.width - GRID_PAD_X * 2);
      const innerTop = vpRect.top;
      const innerHeight = Math.max(1, vpRect.height);

      let col = Math.floor(((clientX - innerLeft) / innerWidth) * COLS);
      let row = Math.floor(((clientY - innerTop) / innerHeight) * ROWS);

      if (clampToGrid) {
        col = Math.max(0, Math.min(COLS - 1, col));
        row = Math.max(0, Math.min(ROWS - 1, row));
      } else if (col < 0 || col >= COLS || row < 0 || row >= ROWS) {
        return;
      }

      const targetCellIndex = row * COLS + col;
      const targetFlatIndex = page * PAGE_SIZE + targetCellIndex;

      const currentOriginList = [...orderedAppIdsRef.current];
      const fromIndex = currentOriginList.indexOf(dragId);

      if (fromIndex !== -1 && targetFlatIndex !== fromIndex) {
        if (targetFlatIndex >= currentOriginList.length) {
          const targetLength = (page + 1) * PAGE_SIZE;
          while (currentOriginList.length < targetLength) {
            currentOriginList.push(null);
          }
        }

        const nextPreview = getPreviewList(
          currentOriginList,
          fromIndex,
          targetFlatIndex,
        );
        orderedAppIdsRef.current = nextPreview;
        previewListRef.current = nextPreview;
        setPreviewList(nextPreview);
        setOrderedAppIds(nextPreview);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      setPointerPos({ x: e.clientX, y: e.clientY });

      const dragId = activeDragIdRef.current;
      if (!dragId) return;

      const containerRect = containerRef.current?.getBoundingClientRect();
      let page = currentPageRef.current;

      // 1. Edge swipe detection (bounded to valid pages so it never overshoots into blank space)
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

      // 2. Calculate hover index inside the stationary viewport bounds for the current page
      const insidePhone =
        !!containerRect &&
        e.clientX >= containerRect.left &&
        e.clientX <= containerRect.right &&
        e.clientY >= containerRect.top &&
        e.clientY <= containerRect.bottom;
      moveDraggedAppToCell(e.clientX, e.clientY, page, insidePhone);
    };

    const handlePointerUp = () => {
      const latestPreview = [...previewListRef.current];
      const page = currentPageRef.current;

      const { nextList, nextPage } = compactPages(latestPreview, page);

      orderedAppIdsRef.current = nextList;
      previewListRef.current = nextList;
      currentPageRef.current = nextPage;
      activeDragIdRef.current = null;
      isHoldingIconRef.current = false;

      setOrderedAppIds(nextList);
      setPreviewList(nextList);
      setCurrentPage(nextPage);
      setActiveDragId(null);
      setIsHoldingIcon(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [activeDragId]);

  const handleBgDragEnd = (
    e: PointerEvent | MouseEvent | TouchEvent,
    info: PanInfo,
  ) => {
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

  const bottomPad = navBarHeight + homeIndicatorHeight + 32;
  const withInset = (px: number, side: "top" | "bottom") =>
    useSafeArea ? `calc(env(safe-area-inset-${side}, 0px) + ${px}px)` : px;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-clip"
      style={{
        paddingTop: withInset(statusBarHeight + 12, "top"),
        paddingBottom: withInset(bottomPad, "bottom"),
      }}
      onPointerDown={onBgPointerDown}
      onPointerMove={onBgPointerMove}
      onPointerUp={onBgPointerUp}
      onPointerCancel={onBgPointerUp}
      onClick={onBgClick}
    >
      <div
        ref={viewportRef}
        className="h-full w-full overflow-clip"
        onPointerDown={onViewportPointerDown}
      >
        <motion.div
          drag="x"
          dragControls={bgDragControls}
          dragListener={false}
          dragDirectionLock
          dragConstraints={{
            left: -(totalPages - 1) * containerWidth,
            right: 0,
          }}
          animate={{ x: -effectivePage * containerWidth }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onDragEnd={handleBgDragEnd}
          className="flex h-full cursor-grab active:cursor-grabbing"
          style={{ width: totalPages * containerWidth }}
        >
          {pages.map((page, pageIdx) => (
            <div
              key={pageIdx}
              className="h-full shrink-0 grid px-4"
              style={{
                gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                gridTemplateRows: `repeat(${ROWS}, 1fr)`,
                gap: "16px 8px",
                width: containerWidth,
              }}
            >
              {page.map((appId, i) => {
                if (appId) {
                  const app = apps[appId];
                  if (app) {
                    return (
                      <AppIcon
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
                    className="flex flex-col items-center gap-1.5 opacity-0 pointer-events-none select-none"
                  >
                    <div style={{ width: 60, height: 60 }} />
                    <span className="text-[11px] leading-tight max-w-[64px] truncate">
                      Empty
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Page dots */}
      <div
        className="absolute inset-x-0 flex justify-center items-center gap-1.5"
        style={{
          bottom: withInset(navBarHeight + homeIndicatorHeight + 6, "bottom"),
          height: 16,
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              changePage(i);
            }}
            className={cn(
              "rounded-full transition-all duration-200",
              i === effectivePage
                ? "w-4 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/50",
            )}
          />
        ))}
      </div>

      {/* Drag Overlay Clone */}
      {activeDragId && apps[activeDragId] && (
        <div
          className="fixed pointer-events-none z-[99999] flex flex-col items-center gap-1.5 select-none"
          style={{
            left: pointerPos.x - 30, // Center of 60px icon
            top: pointerPos.y - 30,
            width: 60,
            transform: "scale(1.15)",
            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))",
          }}
        >
          <AppIconImage appConfig={apps[activeDragId]} size={60} />
          <span className="text-white text-[11px] font-semibold text-center leading-tight drop-shadow-md max-w-[64px] truncate">
            {getAppName(activeDragId, apps[activeDragId].name)}
          </span>
        </div>
      )}
    </div>
  );
}

interface AppIconProps {
  app: AppConfig;
  index: number;
  jiggling: boolean;
  activeDragId: string | null;
  onPointerDownStart: () => void;
  onPointerDownEnd: () => void;
  onOpen: (app: AppConfig) => void;
  onDragStart: (appId: string, event: any) => void;
}

function AppIcon({
  app,
  index,
  jiggling,
  activeDragId,
  onPointerDownStart,
  onPointerDownEnd,
  onOpen,
  onDragStart,
}: AppIconProps) {
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
      const dist = Math.hypot(
        e.clientX - pointerDownPos.current.x,
        e.clientY - pointerDownPos.current.y,
      );
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
      className="flex flex-col items-center gap-1.5 select-none relative cursor-grab active:cursor-grabbing"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onClick={handleClick}
      style={{
        touchAction: "none",
        zIndex: isDragged ? 100 : 10,
        visibility: isDragged ? "hidden" : "visible",
      }}
    >
      <motion.div
        animate={
          jiggling
            ? {
                rotate: [0, -3.5, 3.5, -3.5, 3.5, 0],
                x: [0, -1.2, 1.2, -1.2, 1.2, 0],
                y: [0, 1.2, -1.2, 1.2, -1.2, 0],
                transition: {
                  repeat: Infinity,
                  duration: 0.5,
                  delay: (index % 5) * 0.05,
                },
              }
            : { rotate: 0, x: 0, y: 0 }
        }
        className="relative pointer-events-none"
      >
        <AppIconImage appConfig={app} size={60} />
      </motion.div>
      <span className="text-white text-[11px] font-medium text-center leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] max-w-[64px] truncate pointer-events-none">
        {displayName}
      </span>
    </motion.div>
  );
}
