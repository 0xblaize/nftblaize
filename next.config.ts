import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // optional, keeps React strict mode
  typescript: {
    // ignore TS errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
