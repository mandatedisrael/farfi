import type { Metadata } from 'next';
import MiniAppProvider from './components/MiniAppProvider';

const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'FARFI - Social DeFi Insights',
  description: 'Discover DeFi protocols your Farcaster friends are using',
  openGraph: {
    title: 'FARFI - Social DeFi Insights',
    description: 'Discover DeFi protocols your Farcaster friends are using',
    images: [`${baseUrl}/api/image`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${baseUrl}/api/image`,
    'fc:frame:image:aspect_ratio': '1:1',
    'fc:frame:button:1': 'View DeFi Insights',
    'fc:frame:button:2': 'Connect Wallet',
    'fc:frame:post_url': `${baseUrl}/api/frame`,
  },
};

export default function Page() {
  return (
    <MiniAppProvider>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 fade-in relative">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
          <span>FARFI</span>
          <span role="img" aria-label="sparkles" className="sparkle-animate">✨</span>
        </h1>
        <p className="text-xl mb-8 text-center flex items-center gap-2">
          <span>Social DeFi Insights for Farcaster</span>
          <span role="img" aria-label="chart">📊</span>
        </p>
        <div className="text-center space-y-4">
          <p>
            Dig deep into what DeFi protocols your friends are using! <span role="img" aria-label="friends">🤝</span>
          </p>
        </div>
        {/* Coming Soon Section */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 text-lg font-semibold animate-pulse border-2 border-white/30" style={{letterSpacing: '0.04em'}}>
          <span role="img" aria-label="hourglass">⏳</span>
          Coming soon!
          <span role="img" aria-label="star">🌟</span>
        </div>
      </div>
    </MiniAppProvider>
  );
}
