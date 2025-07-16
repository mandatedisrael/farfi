import { NextResponse } from 'next/server';

export async function GET() {
  // Generate a 1024x1024 SVG that can be converted to PNG
  // This meets Farcaster manifest requirements
  const svg = `
    <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0052ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0084ff;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="1024" height="1024" fill="url(#grad1)" />
      <circle cx="512" cy="400" r="120" fill="white" opacity="0.2"/>
      <text x="512" y="420" font-family="Arial, sans-serif" font-size="80" font-weight="bold" fill="white" text-anchor="middle">FARFI</text>
      <text x="512" y="580" font-family="Arial, sans-serif" font-size="32" fill="white" text-anchor="middle">Social DeFi Insights</text>
      <text x="512" y="650" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle">Discover DeFi protocols</text>
      <text x="512" y="680" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle">your friends are using</text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}

export const dynamic = 'force-dynamic'; 