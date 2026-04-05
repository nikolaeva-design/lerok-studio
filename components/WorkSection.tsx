import { getReelVideoIds } from "@/lib/site";

function ReelCard({ videoId }: { videoId: string }) {
  const src = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&playsinline=1&iv_load_policy=3`;
  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-[20px] bg-[#0a0a0a] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] md:max-w-[360px] md:rounded-[24px]">
      <iframe
        title="Lerock reel"
        src={src}
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

        {/* Mobile: reel → promo → reel (avoids cramped middle column + border bugs). Desktop: 3 columns. */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-5">
          <div className="flex justify-center md:justify-end">
            <ReelCard videoId={id1} />
          </div>
          <div className="mx-auto flex w-full max-w-[400px] flex-col items-center justify-center rounded-[20px] border border-white/[0.1] bg-[#0c0c0c] px-5 py-10 text-center md:mx-0 md:max-w-none md:min-h-0 md:rounded-[24px] md:py-14">
            <p className="font-[family-name:var(--font-display)] text-[clamp(1.35rem,4vw,1.75rem)] leading-[1.15] tracking-[0.06em] text-white">
              FULL SERVICE
              <br />
              AI VIDEO
            </p>
            <p className="mt-8 font-[family-name:var(--font-display)] text-[11px] tracking-[0.2em] text-white/50 md:text-xs md:tracking-[0.24em]">
              LEROCK
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <ReelCard videoId={id2} />
          </div>
        </div>
      </div>
    </section>
  );
}
