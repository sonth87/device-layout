'use client';

import { useState, useCallback, useRef, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useStore } from '@/store';
import { useTheme } from '@/hooks/useTheme';

const EDGE_SNAP_ESCAPE = 50;

function applyEdgeSnap(
  raw: number,
  snapLo: number,
  snapHi: number,
  hardMin: number,
  hardMax: number,
): number {
  const c = Math.max(hardMin, Math.min(hardMax, raw));

  if (snapLo > hardMin && c < snapLo) {
    const over = snapLo - c;
    return over < EDGE_SNAP_ESCAPE ? snapLo : c + EDGE_SNAP_ESCAPE;
  }
  if (snapHi < hardMax && c > snapHi) {
    const over = c - snapHi;
    return over < EDGE_SNAP_ESCAPE ? snapHi : c - EDGE_SNAP_ESCAPE;
  }
  return c;
}

export interface FloatingWindowProps {
  onClose: () => void;
  children: ReactNode;
  /** Text hiện cạnh nút đóng trên title bar. Bỏ trống = chỉ có 3 nút đèn giao thông (giống About). */
  title?: ReactNode;
  /** Độ rộng khung lúc mở (px). Default 288 (khớp AboutDialog cũ, w-72). */
  width?: number;
  /**
   * Độ cao khung lúc mở (px). Bỏ trống = tự cao theo nội dung (hành vi gốc, dùng cho panel
   * ngắn như About). Đặt số cụ thể cho panel dài cần cuộn bên trong (log, danh sách) —
   * BẮT BUỘC nếu `resizable=true`, vì kéo-giãn chiều cao vô nghĩa nếu khung vẫn tự co theo
   * nội dung.
   */
  height?: number;
  /**
   * Chặn tương tác với mọi thứ phía sau (nền desktop mờ + không click xuyên qua được).
   * Đặt `true` nếu muốn tạo modal chặn click phía sau. Default: false.
   */
  blocking?: boolean;
  /** Cho kéo-giãn từ góc dưới-phải. Default: false (giữ nguyên kích thước cố định, đúng
   * hành vi About gốc). Bật cho cửa sổ "kiểu app thật" (quản lý engine, cài đặt…). */
  resizable?: boolean;
  minWidth?: number;
  minHeight?: number;
  /** class Tailwind bổ sung cho vùng nội dung (children). Mặc định co theo nội dung + căn
   * giữa (khớp About); truyền `w-full h-full ...` khi dùng resizable để nội dung lấp đầy
   * khung đã kéo-giãn thay vì co lại giữa khung. */
  contentClassName?: string;
  /**
   * Node DOM để portal vào — mặc định `document.body`. Truyền vào root class của app gọi
   * (vd `.tts-studio-root`/`.ceremony-root`) khi `children` dùng biến theme CSS custom
   * property scoped theo root đó, nếu không portal ra thẳng `document.body` sẽ NẰM NGOÀI
   * subtree đó và mất hết theme (đúng Rule 4, docs/guides/app-css-theming.md của app gọi —
   * `createPortal` thủ công phải route vào container root class, không phải `document.body`
   * mặc định). Chrome của chính FloatingWindow (title bar, khung ngoài) không bị ảnh hưởng
   * vì dùng class Tailwind `dark:` trực tiếp, không phụ thuộc biến theme của app.
   */
  container?: Element | DocumentFragment | null;
}

/**
 * Cửa sổ nổi, kéo-thả được, không thuộc WindowManager (không có windowId, không xuất hiện
 * trong Dock/App Switcher) — dùng cho hộp thoại ngắn hạn kiểu "About This Mac": info panel,
 * log viewer, panel cài đặt, v.v. AboutDialog.tsx compose lại từ chính component này.
 *
 * `data-windowchrome="true"` trên khung ngoài — BẮT BUỘC giữ nguyên, không phải trang trí.
 * Thiếu marker này thì kéo title bar sẽ đồng thời bị IconGrid's marquee-select coi là kéo
 * chọn vùng desktop (bôi đen icon bên dưới) vì cửa sổ này portal thẳng vào `document.body`,
 * nằm ngoài các nhánh DOM mà marquee-select tự động loại trừ (`id^="window-"`, dock, widget…)
 * — xem IconGrid.tsx's handleWindowPointerDown.
 */
export function FloatingWindow({
  onClose,
  children,
  title,
  width = 288,
  height,
  blocking = false,
  resizable = false,
  minWidth = 260,
  minHeight = 160,
  contentClassName,
  container,
}: FloatingWindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const allowDragOutOfBounds = useStore((s) => s.allowDragOutOfBounds);
  const { config } = useTheme();

  const topInset = config.hasMenuBar ? config.layout.window.dragTopInset : 0;
  const bottomInset = config.layout.chrome.taskbarHeight;

  // Clear focus from all standard windows while FloatingWindow is active
  const clearStandardWindowFocus = useCallback(() => {
    useStore.setState((state) => {
      let changed = false;
      for (const win of Object.values(state.windows)) {
        if (win.isFocused) {
          win.isFocused = false;
          changed = true;
        }
      }
      if (state.focusedWindowId !== null) {
        state.focusedWindowId = null;
        changed = true;
      }
    });
  }, []);

  useEffect(() => {
    clearStandardWindowFocus();

    return () => {
      const openWins = Object.values(useStore.getState().windows).filter((w) => !w.isMinimized);
      if (openWins.length > 0) {
        const topWin = [...openWins].sort((a, b) => b.zIndex - a.zIndex)[0];
        if (topWin) {
          useStore.getState().focusWindow(topWin.id);
        }
      }
    };
  }, [clearStandardWindowFocus]);

  // null = chưa từng kéo/resize, khung vẫn nằm giữa màn hình qua flex centering của container ngoài
  const [anchor, setAnchor] = useState<{ left: number; top: number } | null>(null);
  const [size, setSize] = useState({ width, height });
  const [hovering, setHovering] = useState(false);
  const dragStart = useRef<{ mx: number; my: number; left: number; top: number } | null>(null);
  const resizeStart = useRef<{ mx: number; my: number; w: number; h: number } | null>(null);

  const ensureAnchor = useCallback((): { left: number; top: number } => {
    if (anchor) return anchor;
    if (!windowRef.current) return { left: 0, top: topInset };
    const rect = windowRef.current.getBoundingClientRect();
    const next = { left: rect.left, top: Math.max(topInset, rect.top) };
    setAnchor(next);
    return next;
  }, [anchor, topInset]);

  const onTitleBarPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).closest('button')) return; // không kéo khi bấm nút đóng
      clearStandardWindowFocus();
      e.preventDefault();
      e.stopPropagation(); // Stop propagation to prevent desktop marquee selection
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      const { left, top } = ensureAnchor();
      dragStart.current = { mx: e.clientX, my: e.clientY, left, top };
    },
    [ensureAnchor, clearStandardWindowFocus],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragStart.current) return;
      e.preventDefault();
      e.stopPropagation();

      const winEl = windowRef.current;
      const winW = winEl?.offsetWidth ?? size.width;
      const winH = winEl?.offsetHeight ?? (size.height ?? 300);

      const vpW = window.innerWidth;
      const vpH = window.innerHeight;

      const rawX = dragStart.current.left + (e.clientX - dragStart.current.mx);
      const rawY = dragStart.current.top + (e.clientY - dragStart.current.my);

      const minOverlap = 200;
      const hardMinX = allowDragOutOfBounds ? -(winW - Math.min(minOverlap, winW)) : 0;
      const hardMaxX = allowDragOutOfBounds ? vpW - Math.min(minOverlap, winW) : vpW - winW;
      const hardMinY = topInset;
      const hardMaxY = allowDragOutOfBounds ? vpH - Math.min(minOverlap, winH) : vpH - bottomInset - winH;

      const clampedHardMaxX = Math.max(hardMinX, hardMaxX);
      const clampedHardMaxY = Math.max(hardMinY, hardMaxY);

      const nextX = applyEdgeSnap(rawX, 0, vpW - winW, hardMinX, clampedHardMaxX);
      const nextY = applyEdgeSnap(rawY, topInset, vpH - bottomInset - winH, hardMinY, clampedHardMaxY);

      setAnchor({ left: nextX, top: nextY });
    },
    [allowDragOutOfBounds, topInset, bottomInset, size],
  );

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStart.current) {
      e.preventDefault();
      e.stopPropagation();
      dragStart.current = null;
    }
  }, []);

  const onResizePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation(); // không để title bar's onPointerMove tưởng đây là kéo di chuyển
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      ensureAnchor(); // neo góc trên-trái TRƯỚC khi đổi size
      resizeStart.current = {
        mx: e.clientX,
        my: e.clientY,
        w: size.width,
        h: size.height ?? minHeight,
      };
    },
    [ensureAnchor, size, minHeight],
  );

  const onResizePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!resizeStart.current) return;
      e.preventDefault();
      e.stopPropagation();
      const vpW = window.innerWidth;
      const vpH = window.innerHeight;
      const left = anchor?.left ?? 0;
      const top = anchor?.top ?? 0;
      const maxW = Math.max(minWidth, vpW - left);
      const maxH = Math.max(minHeight, vpH - top - bottomInset);
      setSize({
        width: Math.min(maxW, Math.max(minWidth, resizeStart.current.w + (e.clientX - resizeStart.current.mx))),
        height: Math.min(maxH, Math.max(minHeight, resizeStart.current.h + (e.clientY - resizeStart.current.my))),
      });
    },
    [anchor, minWidth, minHeight, bottomInset],
  );

  const onResizePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (resizeStart.current) {
      e.preventDefault();
      e.stopPropagation();
      resizeStart.current = null;
    }
  }, []);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className={
        anchor
          ? 'fixed inset-0 pointer-events-none'
          : 'fixed inset-0 flex items-center justify-center pointer-events-none'
      }
      style={{ zIndex: 99999 }}
    >
      {/* Backdrop — chỉ chặn tương tác phía sau khi blocking=true */}
      {blocking && (
        <div
          className="absolute inset-0 pointer-events-auto"
          onPointerDown={clearStandardWindowFocus}
        />
      )}

      <div
        ref={windowRef}
        data-windowchrome="true"
        className="relative flex flex-col bg-neutral-100/97 dark:bg-[#1c1c1e]/97 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 overflow-hidden pointer-events-auto select-none"
        style={
          anchor
            ? { position: 'absolute', left: anchor.left, top: anchor.top, width: size.width, height: size.height }
            : { width: size.width, height: size.height }
        }
        onPointerDownCapture={clearStandardWindowFocus}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Chrome / title bar — vùng kéo */}
        <div
          className="w-full flex shrink-0 items-center gap-2 px-4 pt-3.5 pb-2 border-b border-black/8 dark:border-white/8 cursor-move select-none bg-neutral-200/60 dark:bg-white/5"
          onPointerDown={onTitleBarPointerDown}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="flex items-center gap-2" onPointerDown={(e) => e.stopPropagation()}>
            {/* Đóng — nút duy nhất có tác dụng */}
            <button
              onClick={onClose}
              className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-100"
              style={{ backgroundColor: '#ff5f57' }}
              title="Close"
            >
              {hovering && <X className="w-2.5 h-2.5 text-red-950 dark:text-red-950/90" strokeWidth={3.5} />}
            </button>
            {/* Thu nhỏ/phóng to — chỉ trang trí */}
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#d1d1d1' }} />
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#d1d1d1' }} />
          </div>
          {title && (
            <span className="flex-1 text-center text-[12px] font-medium text-black/60 dark:text-white/60 select-none">
              {title}
            </span>
          )}
        </div>

        {/* Nội dung */}
        <div className={contentClassName ?? 'flex flex-col items-center px-8 pt-6 pb-7 gap-3 select-none'}>
          {children}
        </div>

        {/* Vùng bắt kéo resize */}
        {resizable && (
          <div
            onPointerDown={onResizePointerDown}
            onPointerMove={onResizePointerMove}
            onPointerUp={onResizePointerUp}
            onPointerCancel={onResizePointerUp}
            className="absolute bottom-0 right-0 h-4 w-4 cursor-nwse-resize"
            style={{ touchAction: 'none' }}
            title="Kéo để đổi kích thước"
          />
        )}
      </div>
    </div>,
    container ?? document.body,
  );
}

