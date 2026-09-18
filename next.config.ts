import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images straight from Cloudinary instead of proxying via /_next/image.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/xykwtyr0/**",
      },
    ],
  },
};

export default nextConfig;
