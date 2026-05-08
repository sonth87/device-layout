/**
 * Forward-declare the combined store type so slice creators can reference it
 * without circular imports. Each slice file imports from here.
 */
import type { WindowSlice } from './window-slice';
import type { AppSlice } from './app-slice';
import type { ThemeSlice } from './theme-slice';
import type { DesktopSlice } from './desktop-slice';
import type { NotificationSlice } from './notification-slice';
import type { VFSSlice } from './vfs-slice';

export type RootStore = WindowSlice & AppSlice & ThemeSlice & DesktopSlice & NotificationSlice & VFSSlice;
