export type GlassVariant = "dock" | "menubar" | "taskbar" | "window" | "panel" | "widget";
interface LiquidGlassProps {
    children?: React.ReactNode;
    className?: string;
    variant?: GlassVariant;
    forceGlass?: boolean;
    /** Overrides the variant's default radius (e.g. Dock scaling `--radius-dock` down with dockSize). */
    borderRadius?: string | number;
}
export declare function LiquidGlass({ children, className, variant, forceGlass, borderRadius, }: LiquidGlassProps): import("react/jsx-runtime").JSX.Element;
export {};
