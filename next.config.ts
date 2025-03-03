import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    sri: {
      algorithm: "sha512",
    },
  },
};

export default nextConfig;
