import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minamiumezawa.jp",
      },
    ],
  },
};

export default nextConfig;
