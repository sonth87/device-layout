import { WindowSlice } from './window-slice';
import { AppSlice } from './app-slice';
import { ThemeSlice } from './theme-slice';
import { DesktopSlice } from './desktop-slice';
import { NotificationSlice } from './notification-slice';
import { VFSSlice } from './vfs-slice';
export type RootStore = WindowSlice & AppSlice & ThemeSlice & DesktopSlice & NotificationSlice & VFSSlice;
