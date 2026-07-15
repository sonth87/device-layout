/**
 * Syncs open window state ↔ URL search params.
 *
 * On mount: waits for app registry, then reads `?w=` params and hydrates the store.
 * On store change: writes current windows back to URL (shallow replaceState).
 */
export declare function useWindowUrlSync(): void;
