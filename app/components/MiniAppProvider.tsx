'use client';

import { useEffect } from 'react';

export default function MiniAppProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initMiniApp = async () => {
      try {
        // Check if we're in a Mini App environment
        const url = new URL(window.location.href);
        const isMiniApp = url.pathname.includes('/frame') || 
                         url.searchParams.get('miniApp') === 'true' ||
                         window.parent !== window;

        if (isMiniApp) {
          // Dynamically import the SDK only in Mini App context
          const { sdk } = await import('@farcaster/miniapp-sdk');
          
          // Initialize the SDK
          await sdk.actions.ready();
          console.log('Mini App SDK initialized successfully');
        }
      } catch (error) {
        console.error('Failed to initialize Mini App SDK:', error);
        // Fallback: still show content even if SDK fails
      }
    };

    initMiniApp();
  }, []);

  return <>{children}</>;
} 