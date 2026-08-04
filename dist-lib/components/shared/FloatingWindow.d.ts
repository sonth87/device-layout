import { ReactNode } from 'react';
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
export declare function FloatingWindow({ onClose, children, title, width, height, blocking, resizable, minWidth, minHeight, contentClassName, container, }: FloatingWindowProps): import('react').ReactPortal | null;
