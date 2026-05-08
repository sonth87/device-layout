import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Desktop Layout',
  description: 'A browser-based desktop OS simulator — boilerplate/framework',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body className="h-screen w-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
