'use client';

import { useState, useCallback, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

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
   * Chặn tương tác với mọi thứ phía sau (nền desktop mờ + không click xuyên qua được) —
   * đúng hành vi macOS "About This Mac". Đặt `false` cho cửa sổ tiện ích muốn giữ mở song
   * song khi vẫn thao tác app khác (vd cửa sổ xem log). Default: true.
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
  blocking = true,
  resizable = false,
  minWidth = 260,
  minHeight = 160,
  contentClassName,
}: FloatingWindowProps) {
  // Bắt đầu ở giữa màn hình; offset lưu độ lệch so với tâm sau khi kéo.
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width, height });
  const [hovering, setHovering] = useState(false);
  const dragStart = useRef<{ mx: number; my: number; ox: number; oy: number } | null>(null);
  const resizeStart = useRef<{ mx: number; my: number; w: number; h: number } | null>(null);

  const onTitleBarPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).closest('button')) return; // không kéo khi bấm nút đóng
      e.preventDefault();
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      dragStart.current = { mx: e.clientX, my: e.clientY, ox: offset.x, oy: offset.y };
    },
    [offset],
  );

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) return;
    setOffset({
      x: dragStart.current.ox + (e.clientX - dragStart.current.mx),
      y: dragStart.current.oy + (e.clientY - dragStart.current.my),
    });
  }, []);

  const onPointerUp = useCallback(() => {
    dragStart.current = null;
  }, []);

  const onResizePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation(); // không để title bar's onPointerMove tưởng đây là kéo di chuyển
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      resizeStart.current = {
        mx: e.clientX,
        my: e.clientY,
        w: size.width,
        h: size.height ?? minHeight,
      };
    },
    [size, minHeight],
  );

  const onResizePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!resizeStart.current) return;
      setSize({
        width: Math.max(minWidth, resizeStart.current.w + (e.clientX - resizeStart.current.mx)),
        height: Math.max(minHeight, resizeStart.current.h + (e.clientY - resizeStart.current.my)),
      });
    },
    [minWidth, minHeight],
  );

  const onResizePointerUp = useCallback(() => {
    resizeStart.current = null;
  }, []);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 99999 }}
    >
      {/* Backdrop — chỉ chặn tương tác phía sau khi blocking=true. Khi false, không render
          gì cả (thay vì render với pointer-events-none) để tránh 1 lớp div rỗng vô nghĩa
          vẫn nằm trong DOM. */}
      {blocking && <div className="absolute inset-0 pointer-events-auto" />}

      <div
        data-windowchrome="true"
        className="relative flex flex-col bg-neutral-100/97 dark:bg-[#1c1c1e]/97 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 overflow-hidden pointer-events-auto"
        style={{
          width: size.width,
          height: size.height,
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
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
              className="w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100"
              style={{ backgroundColor: '#ff5f57' }}
              title="Close"
            >
              {hovering && <X className="w-2 h-2 text-red-900/80" strokeWidth={3} />}
            </button>
            {/* Thu nhỏ/phóng to — chỉ trang trí, không tương tác, giống About gốc */}
            <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: '#d1d1d1' }} />
            <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: '#d1d1d1' }} />
          </div>
          {title && (
            <span className="flex-1 text-center text-[12px] font-medium text-black/60 dark:text-white/60 select-none">
              {title}
            </span>
          )}
        </div>

        {/* Nội dung — do caller cung cấp toàn bộ. min-h-0 để vùng cuộn bên trong hoạt động
            đúng khi contentClassName của caller đặt overflow-y-auto trên container cao cố định. */}
        <div className={contentClassName ?? 'flex flex-col items-center px-8 pt-6 pb-7 gap-3 select-none'}>
          {children}
        </div>

        {resizable && (
          <div
            onPointerDown={onResizePointerDown}
            onPointerMove={onResizePointerMove}
            onPointerUp={onResizePointerUp}
            onPointerCancel={onResizePointerUp}
            className="absolute bottom-0 right-0 h-4 w-4 cursor-nwse-resize"
            style={{ touchAction: 'none' }}
            title="Kéo để đổi kích thước"
          >
            <svg viewBox="0 0 16 16" className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 opacity-40">
              <path
                d="M14 2L2 14M14 8L8 14M14 14L14 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
