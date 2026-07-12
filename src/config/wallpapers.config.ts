import type { WallpaperConfig } from "@/types/desktop";

/** "Pictures" section — built-in static photos, shown in the picker's horizontal scroller. */
export const WALLPAPERS: WallpaperConfig[] = [
  {
    id: "bg-1",
    name: "Sequoia Night",
    kind: "picture",
    url: "/wallpapers/bg-1.jpg",
    thumbnail: "/wallpapers/bg-1.jpg",
  },
  {
    id: "bg-2",
    name: "Deep Space",
    kind: "picture",
    url: "/wallpapers/bg-2.jpg",
    thumbnail: "/wallpapers/bg-2.jpg",
  },
  {
    id: "bg-3",
    name: "Aurora",
    kind: "picture",
    url: "/wallpapers/bg-3.jpg",
    thumbnail: "/wallpapers/bg-3.jpg",
  },
  {
    id: "bg-4",
    name: "Ocean",
    kind: "picture",
    url: "/wallpapers/bg-4.jpg",
    thumbnail: "/wallpapers/bg-4.jpg",
  },
  {
    id: "bg-5",
    name: "Horizon",
    kind: "picture",
    url: "/wallpapers/bg-5.jpg",
    thumbnail: "/wallpapers/bg-5.jpg",
  },
  {
    id: "bg-6",
    name: "Dusk",
    kind: "picture",
    url: "/wallpapers/bg-6.jpg",
    thumbnail: "/wallpapers/bg-6.jpg",
  },
  {
    id: "bg-7",
    name: "Midnight",
    kind: "picture",
    url: "/wallpapers/bg-7.jpg",
    thumbnail: "/wallpapers/bg-7.jpg",
  },
  {
    id: "bg-8",
    name: "Mountain",
    kind: "picture",
    url: "/wallpapers/bg-8.jpg",
    thumbnail: "/wallpapers/bg-8.jpg",
  },
  {
    id: "bg-9",
    name: "Snow",
    kind: "picture",
    url: "/wallpapers/bg-9.jpg",
    thumbnail: "/wallpapers/bg-9.jpg",
  },
  {
    id: "bg-10",
    name: "Stars",
    kind: "picture",
    url: "/wallpapers/bg-10.jpg",
    thumbnail: "/wallpapers/bg-10.jpg",
  },
  {
    id: "bg-11",
    name: "Stars",
    kind: "picture",
    url: "/wallpapers/bg-11.jpg",
    thumbnail: "/wallpapers/bg-11.jpg",
  },
  {
    id: "bg-12",
    name: "Stars",
    kind: "picture",
    url: "/wallpapers/bg-12.jpg",
    thumbnail: "/wallpapers/bg-12.jpg",
  },
  {
    id: "bg-13",
    name: "Stars",
    kind: "picture",
    url: "/wallpapers/bg-13.jpg",
    thumbnail: "/wallpapers/bg-13.jpg",
  },
  {
    id: "bg-14",
    name: "Stars",
    kind: "picture",
    url: "/wallpapers/bg-14.jpg",
    thumbnail: "/wallpapers/bg-14.jpg",
  },
  {
    id: "bg-15",
    name: "Stars",
    kind: "picture",
    url: "/wallpapers/bg-15.jpg",
    thumbnail: "/wallpapers/bg-15.jpg",
  },
  {
    id: "bg-16",
    name: "Stars",
    kind: "picture",
    url: "/wallpapers/bg-16.jpg",
    thumbnail: "/wallpapers/bg-16.jpg",
  },
];

/** "Live Wallpapers" — separate from WALLPAPERS so the picker can render them as their own section if needed; also included via ALL_WALLPAPERS for lookup-by-id. */
export const LIVE_WALLPAPERS: WallpaperConfig[] = [
  {
    id: "live-sky",
    name: "Abstract Sky (Live)",
    kind: "live",
    url: "/wallpapers/bg-3.jpg",
    thumbnail: "/wallpapers/bg-3.jpg",
    videoUrl: "/wallpapers/live/live-1.mp4",
  },
  {
    id: "live-kitten",
    name: "Adorable Kitten (Live)",
    kind: "live",
    url: "/wallpapers/bg-1.jpg",
    thumbnail: "/wallpapers/bg-1.jpg",
    videoUrl: "/wallpapers/live/live-2.mp4",
  },
];

/**
 * "Colors" section — solid-color wallpapers, macOS-style swatch set. No
 * url/thumbnail (rendered as a plain background-color div, see Wallpaper.tsx).
 */
export const WALLPAPER_COLORS: WallpaperConfig[] = [
  { id: "color-black", name: "Black", kind: "color", colorHex: "#000000" },
  { id: "color-graphite", name: "Graphite", kind: "color", colorHex: "#5A5F6B" },
  { id: "color-silver", name: "Silver", kind: "color", colorHex: "#C7CCD1" },
  { id: "color-blue", name: "Blue", kind: "color", colorHex: "#2C4BA0" },
  { id: "color-teal", name: "Teal", kind: "color", colorHex: "#2FA6A0" },
  { id: "color-green", name: "Green", kind: "color", colorHex: "#3D8B4C" },
  { id: "color-yellow", name: "Yellow", kind: "color", colorHex: "#E8C34A" },
  { id: "color-orange", name: "Orange", kind: "color", colorHex: "#E08A3C" },
  { id: "color-red", name: "Red", kind: "color", colorHex: "#C24C3D" },
  { id: "color-pink", name: "Pink", kind: "color", colorHex: "#D9789A" },
  { id: "color-purple", name: "Purple", kind: "color", colorHex: "#7B5DA5" },
];

/** All built-in wallpapers (pictures + live + colors) — used for id lookups. */
export const ALL_WALLPAPERS: WallpaperConfig[] = [
  ...WALLPAPERS,
  ...LIVE_WALLPAPERS,
  ...WALLPAPER_COLORS,
];

export const DEFAULT_WALLPAPER_ID = "bg-1";
