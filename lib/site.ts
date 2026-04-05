/**
 * URL prefix when the site is built with `SITE_BASE` (GitHub Pages under /repo/).
 * Injected at build via `next.config.ts` `env`; empty for root deployments.
 */
export function publicAssetHref(path: string): string {
  const base = (process.env.NEXT_PUBLIC_SITE_BASE ?? "").replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/** YouTube video ID for hero background */
export const HERO_YOUTUBE_ID = "H2bChXFp3ko";

/** Full film on YouTube (same ID — complete cut with sound and story) */
export const HERO_YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${HERO_YOUTUBE_ID}`;

/** Embed URL for the full film section. Use `autoplay` after a user click so playback starts without YouTube’s pre-play overlay. */
export function getFullFilmEmbedSrc(opts?: { autoplay?: boolean }): string {
  const params = new URLSearchParams({
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
    iv_load_policy: "3",
    controls: "1",
  });
  if (opts?.autoplay) {
    params.set("autoplay", "1");
    params.set("mute", "0");
  }
  return `https://www.youtube.com/embed/${HERO_YOUTUBE_ID}?${params.toString()}`;
}

/**
 * YouTube Shorts IDs for the Work section reels.
 * Defaults:
 * - https://youtube.com/shorts/iamovCOEa_0
 * - https://youtube.com/shorts/ggYoOCfye-c
 * Override with NEXT_PUBLIC_REEL_YOUTUBE_1 / _2 in `.env.local` if needed.
 */
const DEFAULT_REEL_1 = "iamovCOEa_0";
const DEFAULT_REEL_2 = "ggYoOCfye-c";

export function getReelVideoIds(): [string, string] {
  const a = process.env.NEXT_PUBLIC_REEL_YOUTUBE_1?.trim() || DEFAULT_REEL_1;
  const b = process.env.NEXT_PUBLIC_REEL_YOUTUBE_2?.trim() || DEFAULT_REEL_2;
  return [a, b];
}
