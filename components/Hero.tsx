import { HERO_YOUTUBE_ID } from "@/lib/site";

/** Params: no deprecated showinfo; iv_load_policy=3 hides annotations. Quality is adaptive — sharpness depends on not upscaling the iframe (see below). */
const embedSrc = `https://www.youtube.com/embed/${HERO_YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_YOUTUBE_ID}&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`;

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-black px-3 pb-8 pt-1 sm:px-4 sm:pb-10 sm:pt-2 md:px-8 md:pb-14 lg:px-10 lg:pb-16"
    >
      {/* Rounded filmstrip — display type in Bebas like earlier builds */}
      <div className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[18px] bg-[#0a0a0a] sm:rounded-[22px] md:rounded-[32px]">
        <div className="relative aspect-[16/9] min-h-[200px] w-full sm:min-h-[240px] md:min-h-[320px] lg:min-h-[360px]">
          <div className="absolute inset-0 overflow-hidden">
            {/* 1:1 fill, no CSS scale (keeps sharpness). Nudge embed up so YouTube’s top channel chip / pink dot is clipped. */}
            <iframe
              title="Lerock hero reel"
              src={embedSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="pointer-events-none absolute inset-x-0 -top-12 h-[calc(100%+3rem)] w-full border-0"
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/40"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_42%,rgba(0,0,0,0.55)_0%,transparent_65%)]"
            aria-hidden
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6">
            <div className="relative w-full max-w-[min(90vw,42rem)]">
              <span className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,calc(0.5rem+11vw),8.5rem)] leading-[0.9] tracking-[0.02em] text-white drop-shadow-[0_4px_40px_rgba(0,0,0,0.65)]">
                LEROCK
              </span>
              <p className="mt-3 font-[family-name:var(--font-display)] text-[clamp(0.6875rem,calc(0.5rem+1.25vw),0.9rem)] leading-snug tracking-[0.1em] text-white/92 sm:mt-4 sm:tracking-[0.12em]">
                AI STUDIO · VIDEO PRODUCTION
              </p>
            </div>
          </div>
          {/* Cinematic framing: viewfinder brackets — hidden on small screens (misalign with rounded video + letterboxing) */}
          <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
            <div className="absolute left-3 top-3 h-8 w-8 rounded-tl-[8px] border-l border-t border-white/35 sm:left-4 sm:top-4 sm:h-10 sm:w-10 sm:rounded-tl-[10px] md:left-7 md:top-7 md:h-14 md:w-14 md:rounded-tl-[14px]" />
            <div className="absolute right-3 top-3 h-8 w-8 rounded-tr-[8px] border-r border-t border-white/35 sm:right-4 sm:top-4 sm:h-10 sm:w-10 sm:rounded-tr-[10px] md:right-7 md:top-7 md:h-14 md:w-14 md:rounded-tr-[14px]" />
            <div className="absolute bottom-3 left-3 h-8 w-8 rounded-bl-[8px] border-b border-l border-white/35 sm:bottom-4 sm:left-4 sm:h-10 sm:w-10 sm:rounded-bl-[10px] md:bottom-7 md:left-7 md:h-14 md:w-14 md:rounded-bl-[14px]" />
            <div className="absolute bottom-3 right-3 h-8 w-8 rounded-br-[8px] border-b border-r border-white/35 sm:bottom-4 sm:right-4 sm:h-10 sm:w-10 sm:rounded-br-[10px] md:bottom-7 md:right-7 md:h-14 md:w-14 md:rounded-br-[14px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
