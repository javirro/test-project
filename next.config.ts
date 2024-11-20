import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/token-details/:tokenAddress/overview',
        destination: '/token-details/[tokenAddress]/overview',
      },
    ];
  },
}

export default nextConfig
