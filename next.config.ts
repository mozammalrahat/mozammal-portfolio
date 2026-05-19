import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment the lines below if deploying to a repository (not username.github.io)
  // basePath: '/mozammal-portfolio',
  // assetPrefix: '/mozammal-portfolio',
};

export default nextConfig;
