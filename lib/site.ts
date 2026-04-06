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

/**
 * YouTube iframe params (embed quality is adaptive; player picks the best stream for the iframe size and network).
 * Upload source at max quality in YouTube Studio — embed cannot force 1080p via URL.
 */
const EMBED_BASE: Record<string, string> = {
  modestbranding: "1",
  rel: "0",
  playsinline: "1",
  iv_load_policy: "3",
  cc_load_policy: "0",
  fs: "1",
};

/** Hero background loop — muted autoplay, minimal chrome. */
export function getHeroEmbedSrc(): string {
  const id = HERO_YOUTUBE_ID;
  const q = new URLSearchParams({
    ...EMBED_BASE,
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: id,
    controls: "0",
  });
  return `https://www.youtube.com/embed/${id}?${q.toString()}`;
}

/** Work section Shorts — below the fold; caller should set iframe loading="lazy". */
export function getReelEmbedSrc(videoId: string): string {
  const q = new URLSearchParams({
    ...EMBED_BASE,
    controls: "0",
  });
  return `https://www.youtube.com/embed/${videoId}?${q.toString()}`;
}

/**
 * YouTube Shorts IDs for the Work section (three columns).
 * Defaults:
 * - https://youtube.com/shorts/iamovCOEa_0
 * - https://youtube.com/shorts/VZ3z3rerppk
 * - https://youtube.com/shorts/ggYoOCfye-c
 * Override with NEXT_PUBLIC_REEL_YOUTUBE_1 / _2 / _3 in `.env.local` if needed.
 */
const DEFAULT_REEL_1 = "iamovCOEa_0";
const DEFAULT_REEL_2 = "VZ3z3rerppk";
const DEFAULT_REEL_3 = "ggYoOCfye-c";

export function getReelVideoIds(): [string, string, string] {
  const a = process.env.NEXT_PUBLIC_REEL_YOUTUBE_1?.trim() || DEFAULT_REEL_1;
  const b = process.env.NEXT_PUBLIC_REEL_YOUTUBE_2?.trim() || DEFAULT_REEL_2;
  const c = process.env.NEXT_PUBLIC_REEL_YOUTUBE_3?.trim() || DEFAULT_REEL_3;
  return [a, b, c];
}
