import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.instagram.com https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.google.com",
              "frame-src https://www.instagram.com https://maps.google.com https://www.google.com https://www.googletagmanager.com",
              "img-src 'self' data: blob: https: https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://stats.g.doubleclick.net",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
