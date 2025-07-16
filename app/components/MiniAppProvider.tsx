'use client';

import { useEffect } from 'react';

export default function MiniAppProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initMiniApp = async () => {
      try {
        // Always try to import and call ready in client-side context
        const { sdk } = await import('@farcaster/miniapp-sdk');
        await sdk.actions.ready();
        console.log('✅ Mini App SDK: ready() called');
      } catch (error) {
        console.error('❌ Mini App SDK initialization failed:', error);
      }
    };

    // Only run on client
    if (typeof window !== 'undefined') {
      initMiniApp();
    }
  }, []);

  return <>{children}</>;
} 