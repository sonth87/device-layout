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
}

const COLS = 4;
const ROWS = 6;
const PAGE_SIZE = COLS * ROWS; // 24 cells
const LONG_PRESS_MS = 600;

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
  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const [isHoldingIcon, setIsHoldingIcon] = useState(false);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(393); // Default iPhone screen width fallback
  const lastSwipeTime = useRef(0);

  // Refs to always have latest values inside window event listener closures (avoids stale closure bug)
  const currentPageRef = useRef(currentPage);
  const orderedAppIdsRef = useRef(orderedAppIds);
  const previewListRef = useRef(previewList);
  const activeDragIdRef = useRef(activeDragId);
  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);
  useEffect(() => {
    orderedAppIdsRef.current = orderedAppIds;
  }, [orderedAppIds]);
  useEffect(() => {
    previewListRef.current = previewList;
  }, [previewList]);
  useEffect(() => {
    activeDragIdRef.current = activeDragId;
  }, [activeDragId]);

  // Measure container width on mount/resize
  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width || 393);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const activeList = activeDragId ? previewList : orderedAppIds;
  let totalPages = Math.max(1, Math.ceil(activeList.length / PAGE_SIZE));
  if (activeDragId) {
    totalPages += 1;
  }

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
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onBgPointerDown = () => {
    longPressTimer.current = setTimeout(() => setJiggling(true), LONG_PRESS_MS);
  };
  const onBgPointerUp = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
  };

  const onBgClick = () => {
    if (jiggling) setJiggling(false);
  };

  const handleDragStart = (
    appId: string,
    event: PointerEvent | MouseEvent | TouchEvent,
  ) => {
    setActiveDragId(appId);
    setIsHoldingIcon(true);

    // Set initial pointer position
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

  const handleDragEnd = useCallback(() => {
    if (!activeDragId) return;

    // Commit layout from previewList instead of using stale state callbacks
    const currentList = [...previewList];

    // Clean up empty trailing pages (only keep pages that contain at least one app)
    let lastNonEmptyIndex = -1;
    for (let i = currentList.length - 1; i >= 0; i--) {
      if (currentList[i] !== null) {
        lastNonEmptyIndex = i;
        break;
      }
    }
    const neededPages = Math.max(
      1,
      Math.ceil((lastNonEmptyIndex + 1) / PAGE_SIZE),
    );
    const nextList = currentList.slice(0, neededPages * PAGE_SIZE);

    setOrderedAppIds(nextList);
    setPreviewList(nextList);

    // Prevent staying on a deleted trailing page
    if (currentPage >= neededPages) {
      setCurrentPage(neededPages - 1);
    }

    setActiveDragId(null);
    setIsHoldingIcon(false);
  }, [activeDragId, currentPage]);

  // Global window pointer listeners — registered ONCE when drag starts, reads fresh values via refs
  useEffect(() => {
    if (!activeDragId) return;

    const handlePointerMove = (e: PointerEvent) => {
      setPointerPos({ x: e.clientX, y: e.clientY });

      const page = currentPageRef.current;
      const dragId = activeDragIdRef.current;
      if (!dragId) return;

      // 1. Calculate hover index inside the current page grid
      const grids = containerRef.current?.querySelectorAll(".grid");
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

          let currentOriginList = [...orderedAppIdsRef.current];
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
        }
      }

      // 2. Edge swipe detection
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (containerRect) {
        const x = e.clientX;
        const now = Date.now();
        if (now - lastSwipeTime.current > 1200) {
          const page = currentPageRef.current;
          if (x < containerRect.left + 36 && page > 0) {
            changePage(page - 1);
            lastSwipeTime.current = now;
          } else if (x > containerRect.right - 36) {
            changePage(page + 1);
            lastSwipeTime.current = now;
          }
        }
      }
    };

    const handlePointerUp = () => {
      const latestPreview = [...previewListRef.current];
      const page = currentPageRef.current;

      let lastNonEmptyIndex = -1;
      for (let i = latestPreview.length - 1; i >= 0; i--) {
        if (latestPreview[i] !== null) {
          lastNonEmptyIndex = i;
          break;
        }
      }
      const neededPages = Math.max(
        1,
        Math.ceil((lastNonEmptyIndex + 1) / PAGE_SIZE),
      );
      const nextList = latestPreview.slice(0, neededPages * PAGE_SIZE);

      setOrderedAppIds(nextList);
      setPreviewList(nextList);

      if (page >= neededPages) {
        setCurrentPage(neededPages - 1);
      }

      setActiveDragId(null);
      setIsHoldingIcon(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
    // Only re-register when drag starts/ends — refs handle fresh values internally
  }, [activeDragId, changePage]);

  const handleBgDragEnd = (
    e: PointerEvent | MouseEvent | TouchEvent,
    info: PanInfo,
  ) => {
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

  const bottomPad = navBarHeight + homeIndicatorHeight + 32;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ paddingTop: statusBarHeight + 12, paddingBottom: bottomPad }}
      onPointerDown={onBgPointerDown}
      onPointerUp={onBgPointerUp}
      onPointerCancel={onBgPointerUp}
      onClick={onBgClick}
    >
      <div className="h-full w-full overflow-hidden">
        <motion.div
          drag={isHoldingIcon ? false : "x"}
          dragDirectionLock
          dragConstraints={{
            left: -(totalPages - 1) * containerWidth,
            right: 0,
          }}
          animate={{ x: -currentPage * containerWidth }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onDragEnd={handleBgDragEnd}
          className="flex h-full w-full cursor-grab active:cursor-grabbing"
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
        style={{ bottom: navBarHeight + homeIndicatorHeight + 6, height: 16 }}
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
              i === currentPage
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
    if (didLongPress.current || jiggling) return;
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
