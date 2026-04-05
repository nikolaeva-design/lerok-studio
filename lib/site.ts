/** YouTube video ID for hero background */
export const HERO_YOUTUBE_ID = "H2bChXFp3ko";

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
