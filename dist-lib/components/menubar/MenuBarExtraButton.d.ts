import { MenuBarExtraItem } from '../../lib/menu-bar-extras';
/**
 * 1 icon "menu bar extra" do host đăng ký (xem lib/menu-bar-extras.ts) — nút trigger +
 * popover, style khớp ControlCenter.tsx (cùng LiquidGlass variant="panel", cùng
 * align/sideOffset) để nhất quán với các popover khác trên menu bar.
 *
 * Không dùng markup cố định như ControlCenter — `item.content` do host cung cấp toàn bộ,
 * vì mỗi host cần hiển thị thông tin khác nhau (ví dụ sky-app hiện trạng thái service TTS).
 */
export declare function MenuBarExtraButton({ item, forceDark, }: {
    item: MenuBarExtraItem;
    forceDark?: boolean;
}): import("react/jsx-runtime").JSX.Element;
