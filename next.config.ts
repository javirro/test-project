import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(webpackConfig) {
    return {
      ...webpackConfig,
      optimization: {
        minimize: false,
      },
    }
  },
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig
