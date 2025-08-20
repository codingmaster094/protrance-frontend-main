import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['de'], // only German for now
    defaultLocale: 'de',
    localeDetection: false, // disables automatic detection
  },
  images: {
    domains: ["protrance-backend-main.vercel.app"],
    formats: ["image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;
