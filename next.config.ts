import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  typescript: {
    ignoreBuildErrors: true, // This will allow the build to proceed even if there are type errors
  },
};

export default nextConfig;
