import { ReactNode } from 'react';
interface AppViewportSize {
    width: number;
    height: number;
}
export declare function AppViewportProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useAppViewport(): AppViewportSize;
export {};
