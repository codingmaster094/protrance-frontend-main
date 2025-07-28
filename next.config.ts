import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["protrance-backend-main.vercel.app"],
    formats: ["image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;
