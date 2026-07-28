import { ReactNode } from 'react';
export interface FloatingWindowProps {
    onClose: () => void;
    children: ReactNode;
    /** Text hiện cạnh nút đóng trên title bar. Bỏ trống = chỉ có 3 nút đèn giao thông (giống About). */
    title?: ReactNode;
    /** Độ rộng khung (px). Default 288 (khớp AboutDialog cũ, w-72). */
    width?: number;
    /**
     * Chặn tương tác với mọi thứ phía sau (nền desktop mờ + không click xuyên qua được) —
     * đúng hành vi macOS "About This Mac". Đặt `false` cho cửa sổ tiện ích muốn giữ mở song
     * song khi vẫn thao tác app khác (vd cửa sổ xem log). Default: true.
     */
    blocking?: boolean;
    /** class Tailwind bổ sung cho vùng nội dung (children) — vd giới hạn chiều cao + scroll. */
    contentClassName?: string;
}
/**
 * Cửa sổ nổi, kéo-thả được, không thuộc WindowManager (không có windowId, không xuất hiện
 * trong Dock/App Switcher) — dùng cho hộp thoại ngắn hạn kiểu "About This Mac": info panel,
 * log viewer, v.v. AboutDialog.tsx compose lại từ chính component này.
 *
 * `data-windowchrome="true"` trên khung ngoài — BẮT BUỘC giữ nguyên, không phải trang trí.
 * Thiếu marker này thì kéo title bar sẽ đồng thời bị IconGrid's marquee-select coi là kéo
 * chọn vùng desktop (bôi đen icon bên dưới) vì cửa sổ này portal thẳng vào `document.body`,
 * nằm ngoài các nhánh DOM mà marquee-select tự động loại trừ (`id^="window-"`, dock, widget…)
 * — xem IconGrid.tsx's handleWindowPointerDown. Đã xác nhận đây là bug thật trước khi thêm
 * component này (kéo AboutDialog cũ bị dính do thiếu đúng marker này).
 */
export declare function FloatingWindow({ onClose, children, title, width, blocking, contentClassName, }: FloatingWindowProps): import('react').ReactPortal | null;
