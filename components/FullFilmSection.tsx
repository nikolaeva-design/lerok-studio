"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getFullFilmEmbedSrc, HERO_YOUTUBE_WATCH_URL, publicAssetHref } from "@/lib/site";

/** Custom still from the film (no YouTube UI). Served from /public/images/. */
const FULL_FILM_POSTER_SRC = publicAssetHref("/images/full-film-poster.png");

function IconPlay({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export function FullFilmSection() {
  const [playing, setPlaying] = useState(false);
  const embedSrc = getFullFilmEmbedSrc({ autoplay: true });
  const [posterFallback, setPosterFallback] = useState(false);

  return (
    <section
      id="full-film"
      className="scroll-mt-8 border-t border-white/[0.08] bg-black px-3 pb-6 pt-2 sm:px-4 md:px-8 md:pb-10 lg:px-10 lg:pb-12"
    >
      <div className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[18px] bg-[#0a0a0a] shadow-[inset_0_0_100px_rgba(0,0,0,0.35)] sm:rounded-[22px] md:rounded-[32px]">
        {/* Tall film plane — poster + custom play until embed loads; then iframe */}
        <div className="relative min-h-[72svh] w-full md:min-h-[min(78svh,900px)]">
          <div className="absolute inset-0 overflow-hidden">
            {!playing ? (
              <>
                {!posterFallback ? (
                  <Image
                    src={FULL_FILM_POSTER_SRC}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={false}
                    onError={() => setPosterFallback(true)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#0a0a0a]" aria-hidden />
                )}
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play full film"
                  className="absolute inset-0 z-0 cursor-pointer border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b22222]"
                />
              </>
            ) : (
              <iframe
                title="Cupidon — full film (YouTube)"
                src={embedSrc}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full min-w-full w-[177.78vh] max-w-none -translate-x-1/2 -translate-y-1/2 border-0"
              />
            )}
          </div>

          {/* Gradients: readable type up top */}
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/90 via-black/25 to-black/65"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_65%_at_50%_45%,rgba(0,0,0,0.35)_0%,transparent_55%)]"
            aria-hidden
          />

          {/* Obscure YouTube “Watch on YouTube” / share area (iframe is cross-origin; we can’t remove it inside the player) */}
          {playing ? (
            <div
              className="absolute bottom-0 right-0 z-[2] h-[min(28%,220px)] w-[min(52%,320px)] cursor-default bg-gradient-to-tl from-black via-black/85 to-transparent"
              aria-hidden
            />
          ) : null}

          <div className="pointer-events-none relative z-[4] flex min-h-[72svh] flex-col items-center px-5 py-10 text-center md:min-h-[min(78svh,900px)] md:px-10 md:py-14">
            <div className="pointer-events-none max-w-[40rem]">
              <p className="font-[family-name:var(--font-sans)] text-[10px] font-semibold uppercase tracking-[0.42em] text-white/50">
                Full film
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4.5vw,2.85rem)] leading-[1.05] tracking-[0.04em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)]">
                Watch the full story of Cupidon
              </h2>
              <p className="mx-auto mt-5 max-w-lg font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/80 drop-shadow-[0_1px_12px_rgba(0,0,0,0.9)]">
                The hero above is a muted loop — play here for the complete cut with narrative, score, and sound.{" "}
                {!playing ? "Tap anywhere on the film to play." : "Use the player controls for sound and seeking."}
              </p>
            </div>

            <div className="pointer-events-none flex flex-1 flex-col items-center justify-end pb-2 pt-16 md:pt-24">
              <Link
                href={HERO_YOUTUBE_WATCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-white/[0.2] bg-black/50 px-8 py-3.5 font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-colors hover:border-[#b22222] hover:bg-black/60 hover:text-white"
              >
                <IconPlay className="h-4 w-4 text-[#b22222]" />
                Open on YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
