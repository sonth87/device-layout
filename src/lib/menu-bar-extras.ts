'use client';

import { createContext, useContext, type ReactNode } from 'react';

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

/**
 * Cho phép app host (vd shell Electron của sky-app) đăng ký icon trạng thái trên menu bar,
 * cạnh đồng hồ hệ thống — giống "menu bar extras" của macOS thật (icon Wi-Fi, pin, hay icon
 * app nền như Dropbox/1Password).
 *
 * Thiết kế thuần prop (khác cặp callback+onProgress của update-actions.ts): host tự giữ
 * danh sách item trong state React của chính nó, nên chỉ cần truyền lại mảng mới mỗi lần
 * re-render là đủ — không cần thêm cơ chế subscription cho trường hợp phổ biến (vd trạng
 * thái 1 service nền).
 *
 * device-layout không có quyền truy cập IPC/mạng (ports & adapters, không phụ thuộc môi
 * trường) — không truyền item nào thì menu bar đơn giản là không vẽ icon nào ở đây.
 */
const MenuBarExtrasContext = createContext<MenuBarExtraItem[]>([]);

export const MenuBarExtrasProvider = MenuBarExtrasContext.Provider;

export function useMenuBarExtras(): MenuBarExtraItem[] {
  return useContext(MenuBarExtrasContext);
}
