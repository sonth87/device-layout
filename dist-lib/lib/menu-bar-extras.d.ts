import { ReactNode } from 'react';
/** Trạng thái ngữ nghĩa cho chấm màu chồng lên icon — device-layout tự quyết định
 * đúng màu/hiệu ứng cho từng trạng thái, host chỉ khai "đang là gì". */
export type MenuBarExtraStatus = 'ok' | 'busy' | 'error' | 'neutral';
export interface MenuBarExtraItem {
    /** Key ổn định — dùng làm React key và giữ nguyên item khi danh sách re-render. */
    id: string;
    /** Icon hiện trong nút trên menu bar (thường là 1 icon lucide-react). Host tự quyết
     * kích thước/màu của icon; chấm trạng thái do device-layout vẽ đè lên trên. */
    icon: ReactNode;
    /** Chấm màu nhỏ ở góc dưới-phải icon. Bỏ qua = không có chấm (chỉ icon trơn). */
    status?: MenuBarExtraStatus;
    /** Label hỗ trợ trợ năng + tooltip khi hover nút. */
    label: string;
    /** Nội dung popover hiện ra khi bấm icon. Host toàn quyền quyết định markup/tương tác. */
    content: ReactNode;
}
export declare const MenuBarExtrasProvider: import('react').Provider<MenuBarExtraItem[]>;
export declare function useMenuBarExtras(): MenuBarExtraItem[];
