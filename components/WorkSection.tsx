import { getReelEmbedSrc, getReelVideoIds } from "@/lib/site";

function ReelCard({ videoId, label }: { videoId: string; label: string }) {
  const src = getReelEmbedSrc(videoId);
  return (
    <div className="w-full md:mx-auto md:max-w-[360px]">
      <div className="rounded-[28px] bg-[#0c0c0c] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/[0.09] sm:p-3">
        {/* 9:16 aperture — iframe fills edge-to-edge; overflow clips to rounded rect (same curve as inner radius) */}
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[22px] bg-black [clip-path:inset(0_round_22px)]">
          <iframe
            title={label}
            src={src}
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export function WorkSection() {
  const [id1, id2, id3] = getReelVideoIds();

  return (
    <section
      id="reels"
      className="scroll-mt-8 border-t border-white/[0.08] bg-black px-3 py-14 sm:px-4 sm:py-16 md:px-8 md:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-sans)] text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
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

        {/* Mobile: one shared width for reels. Desktop: 3 Shorts. */}
        <div className="mx-auto w-full max-w-[400px] md:max-w-none">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-5">
            <div className="md:flex md:justify-end">
              <ReelCard videoId={id1} label="Lerock reel — Short 1" />
            </div>
            <div className="md:flex md:justify-center">
              <ReelCard videoId={id2} label="Lerock reel — Short 2" />
            </div>
            <div className="md:flex md:justify-start">
              <ReelCard videoId={id3} label="Lerock reel — Short 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
