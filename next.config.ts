import type { NextConfig } from "next";

/**
 * For GitHub Pages at `https://<user>.github.io/<repo>/`, set env at build time:
 *   SITE_BASE=/<repo> npm run build
 * Omit for root hosting (e.g. Vercel or user.github.io repo with custom domain).
 */
const siteBase = process.env.SITE_BASE?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  // Static export has no Image Optimization API — required or `/_next/image` breaks in production.
  images: {
    unoptimized: true,
  },
  // Same value as `basePath`, inlined for client components that reference `public/` by URL (e.g. poster image).
  env: {
    NEXT_PUBLIC_SITE_BASE: siteBase,
  },
  ...(siteBase ? { basePath: siteBase, assetPrefix: `${siteBase}/` } : {}),
};

export default nextConfig;
