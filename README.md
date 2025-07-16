# FARFI

**Social DeFi Insights Farcaster Frame**

FARFI (FARcaster + DeFI) is a social DeFi discovery Farcaster Frame that helps users discover what DeFi protocols their Farcaster friends and followers are using. Built on Base testnet with OnchainKit.

## 🎯 What is FARFI?

FARFI provides social-driven DeFi insights by:
- Showing DeFi protocols your Farcaster friends are using
- Providing social proof for DeFi strategies
- Recommending protocols based on your social graph
- Enabling discovery of new DeFi opportunities through trusted connections

## 🚀 Current Status

### ✅ Completed (Phase 1)
- **Farcaster Frame Foundation**: Complete Frame structure with proper metadata
- **Base Testnet Integration**: Connected to Base Sepolia for transactions
- **OnchainKit Integration**: Wallet connectivity and transaction components
- **Frame API Routes**: `/api/frame` and `/api/image` endpoints
- **Dynamic Images**: SVG-based Frame images with FARFI branding

### 🔄 Development Roadmap

**Phase 2: Social Layer**
- [ ] Farcaster user authentication & FID extraction  
- [ ] Social graph integration (followers/following)
- [ ] Wallet address mapping for Farcaster users

**Phase 3: DeFi Integration**
- [ ] DeFi protocol tracking (Aave, Uniswap, Base protocols)
- [ ] Social DeFi insights engine
- [ ] Base ecosystem protocol analysis

**Phase 4: User Experience**  
- [ ] Frame-optimized UI for insights display
- [ ] Social DeFi recommendation system
- [ ] Advanced analytics and trends

## 🛠️ Tech Stack

- **Farcaster Frames**: Interactive social experiences
- **OnchainKit**: Base's toolkit for onchain apps
- **Next.js**: React framework with API routes
- **Base Sepolia**: Testnet for development
- **Neynar SDK**: Farcaster API integration
- **Tailwind CSS**: Styling
- **TypeScript**: Type safety

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/mandatedisrael/farfi.git
cd farfi

# Install dependencies
npm install

# Run development server
npm run dev
```

### Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_URL=http://localhost:3000
NEYNAR_API_KEY=your_neynar_api_key
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_api_key
```

## 🧪 Testing the Frame

### Option 1: Warpcast Frame Validator
1. Visit [Warpcast Frame Validator](https://warpcast.com/~/developers/frames)
2. Enter `http://localhost:3000` (or your deployed URL)
3. Test button interactions

### Option 2: Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 3: Share in Farcaster
- Deploy to a public URL
- Share the URL in a Farcaster cast
- The Frame will automatically embed

## 🔗 Base Testnet Integration

FARFI is configured for Base Sepolia testnet:
- **Chain ID**: 84532
- **Network**: baseSepolia
- **Faucet**: [Base Sepolia Faucet](https://www.alchemy.com/faucets/base-sepolia)

## 📡 API Routes

- `/api/frame` - Frame interaction handler
- `/api/image` - Dynamic Frame image generation
- Base integration ready for DeFi protocol tracking

## 🤝 Contributing

FARFI is in active development. Contributions welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📚 Learn More

- [Farcaster Frames Documentation](https://docs.farcaster.xyz/reference/frames/spec)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Base Developer Resources](https://www.base.org/builders)
- [Neynar API Documentation](https://docs.neynar.com/)

## 🎉 What's Next?

FARFI aims to become the go-to social DeFi discovery platform in the Farcaster ecosystem. Join us in building the future of social-driven DeFi!

---

Built with ❤️ by the FARFI team
