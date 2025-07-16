import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
  
  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FARFI - Social DeFi Insights</title>
    <meta name="description" content="Discover DeFi protocols your Farcaster friends are using" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="FARFI - Social DeFi Insights" />
    <meta property="og:description" content="Discover DeFi protocols your Farcaster friends are using" />
    <meta property="og:image" content="${baseUrl}/api/image" />
    
    <!-- Frame metadata -->
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${baseUrl}/api/image" />
    <meta property="fc:frame:image:aspect_ratio" content="1:1" />
    <meta property="fc:frame:button:1" content="View DeFi Insights" />
    <meta property="fc:frame:button:2" content="Connect Wallet" />
    <meta property="fc:frame:post_url" content="${baseUrl}/api/frame" />
  </head>
  <body>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui, sans-serif; padding: 1rem;">
      <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">FARFI</h1>
      <p style="font-size: 1.25rem; margin-bottom: 2rem; text-align: center;">Social DeFi Insights for Farcaster</p>
      <div style="text-align: center;">
        <p>Share this in Farcaster to start discovering</p>
        <p>what DeFi protocols your friends are using!</p>
      </div>
    </div>
  </body>
</html>`;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

export const dynamic = 'force-dynamic'; 