import { WindowState } from '../types/window';
/**
 * Wire format: "appId:x,y,width,height[:flagsBitmask[:px,py,pw,ph]]"
 * Flags: 1 = minimized, 2 = maximized, 4 = fullscreen, 8 = focused
 * prevRect (px,py,pw,ph) is appended only when flags > 0 and prevRect exists.
 *
 * Example: "finder:100,200,800,600"
 *          "terminal:0,28,1440,868:2:300,200,600,400"  ← maximized, prevRect saved
 *          "notes:400,100,600,500:8"                   ← focused window
 */
export declare function encodeWindowToParam(w: WindowState): string;
export declare function decodeWindowFromParam(param: string): {
    appId: string;
    rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    prevRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null;
    isMinimized: boolean;
    isMaximized: boolean;
    isFullScreen: boolean;
    isFocused: boolean;
} | null;
