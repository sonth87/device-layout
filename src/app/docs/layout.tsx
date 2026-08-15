import { RootProvider } from 'fumadocs-ui/provider/next';
import 'fumadocs-ui/style.css';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <style>{`
        /* 1. Lock outer browser viewport completely (Window never scrolls) */
        html, body {
          height: 100vh !important;
          max-height: 100vh !important;
          overflow: hidden !important;
          overscroll-behavior: none !important;
          user-select: auto !important;
          -webkit-user-select: auto !important;
        }

        /* 2. Left Sidebar: Independent scroll container pinned to 100vh */
        aside, [data-sidebar-placeholder], #nd-sidebar {
          height: 100vh !important;
          max-height: 100vh !important;
          overflow-y: auto !important;
        }

        /* 3. Right Main Content Area: Independent scroll container pinned to 100vh */
        main, [grid-area="main"], article, .fd-page, #nd-docs-layout {
          height: 100vh !important;
          max-height: 100vh !important;
          overflow-y: auto !important;
          overscroll-behavior: contain !important;
        }
      `}</style>
      {children}
    </RootProvider>
  );
}
