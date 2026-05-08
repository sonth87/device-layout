'use client';

import { useEffect, useState } from 'react';
import { useStore } from '@/store';

export function useStoreHydrated() {
  const [hydrated, setHydrated] = useState(() => useStore.persist.hasHydrated());

  useEffect(() => {
    const unsubscribeHydrate = useStore.persist.onHydrate(() => {
      setHydrated(false);
    });

    const unsubscribeFinish = useStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });

    return () => {
      unsubscribeHydrate();
      unsubscribeFinish();
    };
  }, []);

  return hydrated;
}
