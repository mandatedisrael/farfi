import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
  
  // For now, create a simple frame response
  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${baseUrl}/api/image" />
    <meta property="fc:frame:button:1" content="View DeFi Insights" />
    <meta property="fc:frame:button:2" content="Connect Wallet" />
    <meta property="fc:frame:post_url" content="${baseUrl}/api/frame" />
  </head>
  <body>
    <h1>FARFI - Social DeFi Insights</h1>
  </body>
</html>`;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export async function GET(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic'; 