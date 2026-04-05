import Image from "next/image";
import Link from "next/link";
import { HERO_YOUTUBE_WATCH_URL, publicAssetHref } from "@/lib/site";

/** Custom still from the film. Served from /public/images/. */
const FULL_FILM_POSTER_SRC = publicAssetHref("/images/full-film-poster.png");

function IconPlay({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

/**
 * Static cover only — no embedded player. The whole block links to YouTube in a new tab.
 */
export function FullFilmSection() {
  return (
    <section
      id="full-film"
      className="scroll-mt-8 border-t border-white/[0.08] bg-black px-3 pb-4 pt-2 sm:px-4 md:px-8 md:pb-10 lg:px-10 lg:pb-12"
    >
      <div className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[18px] bg-[#0a0a0a] shadow-[inset_0_0_100px_rgba(0,0,0,0.35)] sm:rounded-[22px] md:rounded-[32px]">
        <Link
          href={HERO_YOUTUBE_WATCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch the full Cupidon film on YouTube. Opens in a new tab."
          className="group relative block min-h-[min(52svh,32rem)] w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b22222] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:min-h-[min(62svh,40rem)] md:min-h-[min(78svh,900px)]"
        >
          <span className="absolute inset-0 block overflow-hidden" aria-hidden>
            <Image
              src={FULL_FILM_POSTER_SRC}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(1600px, 96vw)"
              priority={false}
              fetchPriority="low"
            />
          </span>

          {/* Light wash over the whole still */}
          <div className="pointer-events-none absolute inset-0 z-[1] bg-black/18" aria-hidden />

          {/* Dark band behind the copy at the bottom */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(55%,500px)] bg-gradient-to-t from-black/92 via-black/55 to-transparent sm:h-[min(52%,480px)]"
            aria-hidden
          />

          <div className="relative z-[4] flex min-h-[min(52svh,32rem)] flex-col items-center justify-end px-5 pb-8 pt-10 text-center sm:min-h-[min(62svh,40rem)] sm:pb-10 md:min-h-[min(78svh,900px)] md:px-10 md:pb-12 md:pt-14">
            <div className="max-w-[40rem]">
              <p className="font-[family-name:var(--font-sans)] text-[10px] font-semibold uppercase tracking-[0.42em] text-white/60">
                Full film
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4.5vw,2.85rem)] leading-[1.05] tracking-[0.04em] text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
                Watch the full story of Cupidon
              </h2>
              <p className="mx-auto mt-4 max-w-full px-0.5 text-balance font-[family-name:var(--font-sans)] text-[11px] leading-tight text-white/90 sm:max-w-none sm:px-0 sm:text-sm sm:whitespace-nowrap">
                Tap for full film with sound on YouTube — muted above.
              </p>
              <span className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full border border-white/[0.28] bg-black/35 px-8 py-3.5 font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-colors group-hover:border-[#b22222] group-hover:bg-black/50">
                <IconPlay className="h-4 w-4 text-[#b22222]" />
                Open on YouTube
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
