'use client';

import { create } from 'zustand';
import type { UpdateStatus } from './update-actions';

interface UpdateStatusStore {
  status: UpdateStatus | null;
  setStatus: (s: UpdateStatus) => void;
}

/**
 * Separate, non-persisted zustand store (NOT part of RootStore/store/index.ts)
 * — this is ephemeral runtime status re-fetched from the host every session,
 * never worth persisting or coupling to the main store's partialize list.
 * Read by SidebarItem's badge (Settings.tsx) even when Settings isn't the
 * active app, and by SettingsUpdate.tsx for the panel body — both need the
 * SAME fetch to have happened once, hence a shared store instead of local
 * useState in each.
 */
export const useUpdateStatusStore = create<UpdateStatusStore>((set) => ({
  status: null,
  setStatus: (status) => set({ status }),
}));

export function hasAvailableUpdate(status: UpdateStatus | null): boolean {
  if (!status) return false;
  return status.pendingRendererVersion !== null || status.nativeUpdateDownloaded;
}
