import { getReelEmbedSrc, getReelVideoIds } from "@/lib/site";

function ReelCard({ videoId, label }: { videoId: string; label: string }) {
  const src = getReelEmbedSrc(videoId);
  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[20px] bg-[#0a0a0a] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] md:mx-auto md:max-w-[360px] md:rounded-[24px]">
      <iframe
        title={label}
        src={src}
        loading="lazy"
        className="absolute inset-x-0 -top-12 h-[calc(100%+3rem)] w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export function WorkSection() {
  const [id1, id2] = getReelVideoIds();

  return (
    <section
      id="reels"
      className="scroll-mt-8 border-t border-white/[0.08] bg-black px-3 py-14 sm:px-4 sm:py-16 md:px-8 md:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-sans)] text-[10px] font-semibold uppercase tracking-[0.45em] text-white/40">
              Work
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.65rem,6.5vw,3rem)] leading-[1.05] tracking-[0.04em] text-white">
              <span className="inline sm:whitespace-nowrap">SHORT FORM</span>
              <span className="mx-1.5 text-white/40 sm:mx-2">&amp;</span>
              <span className="inline sm:whitespace-nowrap">SOCIAL</span>
            </h2>
          </div>
          <p className="max-w-md font-[family-name:var(--font-sans)] text-sm text-white/45 md:text-right">
            YouTube Shorts — selected reels.
          </p>
        </div>

        {/* Mobile: one shared width for reels + promo. Desktop: 3 columns. */}
        <div className="mx-auto w-full max-w-[400px] md:max-w-none">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-5">
            <div className="md:flex md:justify-end">
              <ReelCard videoId={id1} label="Lerock reel — Short 1" />
            </div>
            <div className="flex w-full flex-col items-center justify-center rounded-[20px] border border-white/[0.1] bg-[#0c0c0c] px-4 py-6 text-center md:min-h-0 md:rounded-[24px] md:px-5 md:py-10">
              <p className="font-[family-name:var(--font-display)] text-[clamp(1.35rem,4vw,1.75rem)] leading-[1.1] tracking-[0.06em] text-white">
                FULL SERVICE
                <br />
                AI VIDEO
              </p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-[11px] tracking-[0.2em] text-white/50 md:mt-5 md:text-xs md:tracking-[0.24em]">
                LEROCK
              </p>
            </div>
            <div className="md:flex md:justify-start">
              <ReelCard videoId={id2} label="Lerock reel — Short 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
