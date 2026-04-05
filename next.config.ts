import type { NextConfig } from "next";

/**
 * For GitHub Pages at `https://<user>.github.io/<repo>/`, set env at build time:
 *   SITE_BASE=/<repo> npm run build
 * Omit for root hosting (e.g. Vercel or user.github.io repo with custom domain).
 */
const siteBase = process.env.SITE_BASE?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  ...(siteBase ? { basePath: siteBase, assetPrefix: `${siteBase}/` } : {}),
};

export default nextConfig;
