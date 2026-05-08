'use client';

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

interface AppViewportSize {
  width: number;
  height: number;
}

const AppViewportContext = createContext<AppViewportSize>({ width: 0, height: 0 });

export function AppViewportProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<AppViewportSize>({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      startTransition(() => {
        setSize({ width, height });
      });
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <AppViewportContext.Provider value={size}>
      <div ref={ref} className="h-full w-full">
        {children}
      </div>
    </AppViewportContext.Provider>
  );
}

export function useAppViewport() {
  return useContext(AppViewportContext);
}
