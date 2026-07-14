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

/** "Live Wallpapers" — each entry maps to a video in /wallpapers/live/. */
export const LIVE_WALLPAPERS: WallpaperConfig[] = [
  {
    id: "live-1",
    name: "Live 1",
    kind: "live",
    url: "/wallpapers/live/live-1.jpg",
    thumbnail: "/wallpapers/live/live-1.jpg",
    videoUrl: "/wallpapers/live/live-1.mp4",
  },
  {
    id: "live-2",
    name: "Live 2",
    kind: "live",
    url: "/wallpapers/live/live-2.jpg",
    thumbnail: "/wallpapers/live/live-2.jpg",
    videoUrl: "/wallpapers/live/live-2.mp4",
  },
  {
    id: "live-3",
    name: "Live 3",
    kind: "live",
    url: "/wallpapers/live/live-3.jpg",
    thumbnail: "/wallpapers/live/live-3.jpg",
    videoUrl: "/wallpapers/live/live-3.mp4",
  },
  {
    id: "live-4",
    name: "Live 4",
    kind: "live",
    url: "/wallpapers/live/live-4.jpg",
    thumbnail: "/wallpapers/live/live-4.jpg",
    videoUrl: "/wallpapers/live/live-4.mp4",
  },
  {
    id: "live-5",
    name: "Live 5",
    kind: "live",
    url: "/wallpapers/live/live-5.jpg",
    thumbnail: "/wallpapers/live/live-5.jpg",
    videoUrl: "/wallpapers/live/live-5.mp4",
  },
  {
    id: "live-6",
    name: "Live 6",
    kind: "live",
    url: "/wallpapers/live/live-6.jpg",
    thumbnail: "/wallpapers/live/live-6.jpg",
    videoUrl: "/wallpapers/live/live-6.mp4",
  },
];

/**
 * "Colors" section — solid-color wallpapers, macOS-style swatch set. No
 * url/thumbnail (rendered as a plain background-color div, see Wallpaper.tsx).
 */
export const WALLPAPER_COLORS: WallpaperConfig[] = [
  { id: "color-black", name: "Black", kind: "color", colorHex: "#000000" },
  { id: "color-slate-blue", name: "Slate Blue", kind: "color", colorHex: "#6971B5" },
  { id: "color-sky-blue", name: "Sky Blue", kind: "color", colorHex: "#13A3CD" },
  { id: "color-rose", name: "Rose", kind: "color", colorHex: "#DF6B76" },
  { id: "color-blue", name: "Blue", kind: "color", colorHex: "#3352CD" },
  { id: "color-peach", name: "Peach", kind: "color", colorHex: "#FEDCC8" },
  { id: "color-cream", name: "Cream", kind: "color", colorHex: "#F7E2CC" },
  { id: "color-gold", name: "Gold", kind: "color", colorHex: "#D2A14E" },
  { id: "color-magenta", name: "Magenta", kind: "color", colorHex: "#CC458E" },
  { id: "color-red", name: "Red", kind: "color", colorHex: "#E13B19" },
  { id: "color-pale-pink", name: "Pale Pink", kind: "color", colorHex: "#F7D7D3" },
  { id: "color-light-gray", name: "Light Gray", kind: "color", colorHex: "#E3E4E6" },
  { id: "color-soft-pink", name: "Soft Pink", kind: "color", colorHex: "#FEDEE6" },
  { id: "color-dark-gray", name: "Dark Gray", kind: "color", colorHex: "#6F737D" },
  { id: "color-silver", name: "Silver", kind: "color", colorHex: "#B9BDC5" },
  { id: "color-charcoal", name: "Charcoal", kind: "color", colorHex: "#555759" },
  { id: "color-teal", name: "Teal", kind: "color", colorHex: "#026A71" },
  { id: "color-mint", name: "Mint", kind: "color", colorHex: "#62C4A5" },
  { id: "color-yellow", name: "Yellow", kind: "color", colorHex: "#FDB515" },
];

/** All built-in wallpapers (pictures + live + colors) — used for id lookups. */
export const ALL_WALLPAPERS: WallpaperConfig[] = [
  ...WALLPAPERS,
  ...LIVE_WALLPAPERS,
  ...WALLPAPER_COLORS,
];

export const DEFAULT_WALLPAPER_ID = "bg-1";
