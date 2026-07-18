'use client';

import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

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

function AppCrashedFallback({ appName, error, onRetry }: { appName: string; error: Error; onRetry: () => void }) {
  const { t } = useTranslation();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
      <AlertTriangle className="h-6 w-6 text-black/30 dark:text-white/30" />
      <div className="text-sm font-medium text-black/70 dark:text-white/70">
        {appName} {t.appCrashedTitle}
      </div>
      <div className="max-w-xs break-words text-xs text-black/40 dark:text-white/40">{error.message}</div>
      <button
        type="button"
        onClick={onRetry}
        className="mt-1 flex items-center gap-1.5 rounded-full bg-black/5 px-3.5 py-1.5 text-xs font-medium text-black/70 transition-colors hover:bg-black/10 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15"
      >
        <RefreshCw className="h-3 w-3" />
        {t.appCrashedRetry}
      </button>
    </div>
  );
}

/**
 * Isolates a runtime crash to the single app that threw it. Without this, a render error
 * anywhere inside `AppContent` unmounts past the nearest ancestor boundary — which, before this
 * component existed, was nowhere inside the shell, so one broken app took down the whole window
 * manager (blank screen for every open app, not just the crashing one).
 */
export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = { error: null, retryCount: 0 };

  static getDerivedStateFromError(error: Error): Pick<AppErrorBoundaryState, 'error'> {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(`[AppErrorBoundary] App "${this.props.appId}" crashed:`, error, info.componentStack);
  }

  private handleRetry = () => {
    this.setState((s) => ({ error: null, retryCount: s.retryCount + 1 }));
  };

  render() {
    if (this.state.error) {
      return <AppCrashedFallback appName={this.props.appName} error={this.state.error} onRetry={this.handleRetry} />;
    }
    return <div key={this.state.retryCount} className="h-full w-full">{this.props.children}</div>;
  }
}
