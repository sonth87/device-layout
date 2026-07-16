'use client';

import { useEffect } from 'react';
import { ThemeProvider } from '@/components/themes/ThemeProvider';
import { useStore } from '@/store';
import type { AppConfig } from '@/types/app';

const HelloWorldApp: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white dark:bg-zinc-950 text-black dark:text-white p-6">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold mb-2">Hello World</h1>
        <p className="text-zinc-500 dark:text-zinc-400">This is a custom app running in Simple Mode.</p>
      </div>
    </div>
  );
};

const customApps: AppConfig[] = [
  {
    id: 'hello-world',
    name: 'Hello World',
    icon: 'lucide:Smile',
    iconColor: ['#10b981', '#059669'],
    render: HelloWorldApp,
    defaultSize: { width: 480, height: 320 },
    minSize: { width: 250, height: 180 },
    menuBarMenus: [
      {
        label: 'Hello World',
        items: [
          { key: 'greet', label: 'Greet User', action: 'greet' },
          { key: 'sep1', label: '', separator: true },
          { key: 'close', label: 'Close App', action: 'close' }
        ]
      },
      {
        label: 'Edit',
        items: [
          { key: 'copy', label: 'Copy Hello', action: 'copy' }
        ]
      }
    ]
  }
];

export default function SimpleDesktopPage() {
  const launchApp = useStore((s) => s.launchApp);

  useEffect(() => {
    // Automatically launch our sample hello-world app on mount
    launchApp(customApps[0]);
  }, [launchApp]);

  return (
    <main className="w-full h-screen overflow-hidden">
      <ThemeProvider apps={customApps} isSimpleMode={true} />
    </main>
  );
}
