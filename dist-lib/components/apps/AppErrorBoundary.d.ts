import { Component, ErrorInfo, ReactNode } from 'react';
interface AppErrorBoundaryProps {
    appId: string;
    appName: string;
    children: ReactNode;
}
interface AppErrorBoundaryState {
    error: Error | null;
    /** Bumped on every retry — used as `children`'s `key` to force a full remount, since clearing
     * `error` alone leaves React holding the same element tree that just crashed. */
    retryCount: number;
}
/**
 * Isolates a runtime crash to the single app that threw it. Without this, a render error
 * anywhere inside `AppContent` unmounts past the nearest ancestor boundary — which, before this
 * component existed, was nowhere inside the shell, so one broken app took down the whole window
 * manager (blank screen for every open app, not just the crashing one).
 */
export declare class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
    state: AppErrorBoundaryState;
    static getDerivedStateFromError(error: Error): Pick<AppErrorBoundaryState, 'error'>;
    componentDidCatch(error: Error, info: ErrorInfo): void;
    private handleRetry;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
