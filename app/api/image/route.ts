import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action') || 'home';
  
  // For now, return a simple SVG image
  // Later we can integrate dynamic image generation
  const svg = `
    <svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0052ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0084ff;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#grad1)" />
      <text x="300" y="250" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">FARFI</text>
      <text x="300" y="320" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle">Social DeFi Insights</text>
      <text x="300" y="380" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle">Discover what DeFi protocols</text>
      <text x="300" y="410" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle">your Farcaster friends are using</text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

export const dynamic = 'force-dynamic'; 