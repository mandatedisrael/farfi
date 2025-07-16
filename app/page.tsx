import type { Metadata } from 'next';

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
    'fc:frame:button:1': 'View DeFi Insights',
    'fc:frame:button:2': 'Connect Wallet',
    'fc:frame:post_url': `${baseUrl}/api/frame`,
  },
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">FARFI</h1>
      <p className="text-xl mb-8 text-center">Social DeFi Insights for Farcaster</p>
      <div className="text-center">
        <p>Share this in Farcaster to start discovering</p>
        <p>what DeFi protocols your friends are using!</p>
      </div>
    </div>
  );
}
