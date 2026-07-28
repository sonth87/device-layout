import * as React from "react";
export type GlassVariant = "dock" | "menubar" | "taskbar" | "window" | "panel" | "widget";
export interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    variant?: GlassVariant;
    forceGlass?: boolean;
    /** Overrides the variant's default radius (e.g. Dock scaling `--radius-dock` down with dockSize). */
    borderRadius?: string | number;
    ref?: React.Ref<HTMLDivElement>;
}
export declare function LiquidGlass({ children, className, variant, forceGlass, borderRadius, style, ref, ...props }: LiquidGlassProps): import("react/jsx-runtime").JSX.Element;
