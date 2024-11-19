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
}

export default nextConfig
