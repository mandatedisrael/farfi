'use client';

import { useEffect } from 'react';

export default function MiniAppProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@farcaster/miniapp-sdk')
        .then(({ sdk }) => {
          setTimeout(() => {
            sdk.actions.ready();
            console.log('✅ sdk.actions.ready() called');
          }, 0);
        })
        .catch((err) => {
          console.error('❌ Mini App SDK failed to load:', err);
        });
    }
  }, []);

  return <>{children}</>;
} 