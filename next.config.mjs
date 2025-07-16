/** @type {import('next').NextConfig} */
const nextConfig = {
    // Silence warnings
    // https://github.com/WalletConnect/walletconnect-monorepo/issues/1908
    webpack: (config, { isServer }) => {
      config.externals.push('pino-pretty', 'lokijs', 'encoding');

      // Handle Node.js built-in modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };

      // Allow importing of node: prefixed modules
      if (!isServer) {
        config.externals = {
          ...config.externals,
          'node:crypto': 'crypto',
          'node:buffer': 'buffer',
          'node:stream': 'stream',
          'node:util': 'util',
        };
      }

      return config;
    },
    experimental: {
      esmExternals: 'loose',
    },
  };
  
  export default nextConfig;
  