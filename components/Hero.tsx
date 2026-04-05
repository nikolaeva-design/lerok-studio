import { getHeroEmbedSrc } from "@/lib/site";

const heroEmbedSrc = getHeroEmbedSrc();

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-black px-3 pb-4 pt-1 sm:px-4 sm:pb-8 sm:pt-2 md:px-8 md:pb-12 lg:px-10 lg:pb-14"
    >
      {/* Rounded filmstrip — min height scales with viewport so the frame feels full, not short */}
      <div className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[18px] bg-[#0a0a0a] shadow-[inset_0_0_120px_rgba(0,0,0,0.45)] sm:rounded-[22px] md:rounded-[32px]">
        <div className="relative aspect-[16/9] min-h-[max(13.5rem,40svh)] w-full sm:min-h-[max(18rem,50svh)] md:min-h-[420px] lg:min-h-[520px]">
          <div className="absolute inset-0 overflow-hidden">
            {/* 1:1 fill, no CSS scale (keeps sharpness). Nudge embed up so YouTube’s top channel chip / pink dot is clipped. */}
            <iframe
              title="Lerock hero reel"
              src={heroEmbedSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="eager"
              className="pointer-events-none absolute inset-x-0 -top-12 h-[calc(100%+3rem)] w-full border-0"
            />
          </div>
          {/* Film grain: tiled across full video frame (no blend-mode — avoids edge knockouts) */}
          <div
            className="pointer-events-none absolute inset-0 z-[1] opacity-[0.055]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "256px 256px",
            }}
            aria-hidden
          />
          {/* Grade + depth: lift subject, crush edges */}
          <div
            className="absolute inset-0 z-[2] bg-gradient-to-t from-black/80 via-black/20 to-black/50"
            aria-hidden
          />
          <div
            className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_65%_50%_at_50%_40%,rgba(0,0,0,0.5)_0%,transparent_62%)]"
            aria-hidden
          />
          {/* Stronger edge vignette — draws eye to center like a lens */}
          <div
            className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_95%_90%_at_50%_48%,transparent_30%,rgba(0,0,0,0.55)_100%)]"
            aria-hidden
          />
          {/* Subtle anamorphic letterbox mood (not full bars — just depth) */}
          <div
            className="absolute inset-x-0 top-0 z-[2] h-[14%] bg-gradient-to-b from-black/50 to-transparent sm:h-[12%]"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 z-[2] h-[20%] bg-gradient-to-t from-black/65 to-transparent sm:h-[15%] md:h-[18%]"
            aria-hidden
          />
          {/* Mobile: narrow corners only — hides YouTube share/logo flash without darkening the whole frame */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 z-[4] hidden h-[min(22%,120px)] w-[min(38%,200px)] bg-gradient-to-tr from-black/90 via-black/40 to-transparent max-md:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 z-[4] hidden h-[min(22%,120px)] w-[min(38%,200px)] bg-gradient-to-tl from-black/90 via-black/40 to-transparent max-md:block"
            aria-hidden
          />
          {/* Warm corner blooms — ties to reds in picture, adds volume */}
          <div
            className="pointer-events-none absolute -left-[20%] -top-[15%] z-[2] h-[55%] w-[50%] rounded-full bg-[#b22222]/[0.12] blur-[80px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-[15%] top-[5%] z-[2] h-[45%] w-[45%] rounded-full bg-[#7f1d1d]/[0.1] blur-[70px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-[10%] left-[15%] z-[2] h-[40%] w-[55%] rounded-full bg-[#450a0a]/[0.15] blur-[90px]"
            aria-hidden
          />
          <div className="absolute inset-0 z-[5] flex flex-col items-center justify-center px-4 text-center sm:px-6">
            <div className="relative w-full max-w-[min(90vw,42rem)]">
              <span className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,calc(0.5rem+11vw),8.5rem)] leading-[0.9] tracking-[0.02em] text-white drop-shadow-[0_4px_40px_rgba(0,0,0,0.65)]">
                LEROCK
              </span>
              <p className="mt-3 font-[family-name:var(--font-display)] text-[clamp(0.6875rem,calc(0.5rem+1.25vw),0.9rem)] leading-snug tracking-[0.1em] text-white/92 sm:mt-4 sm:tracking-[0.12em]">
                AI STUDIO · VIDEO PRODUCTION
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
