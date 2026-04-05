import Link from "next/link";

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://www.instagram.com/lerock.studio",
    label: "Instagram",
    Icon: IconInstagram,
  },
  {
    href: "https://www.youtube.com/@lerock_studio",
    label: "YouTube",
    Icon: IconYouTube,
  },
  {
    href: "https://www.tiktok.com/@noema.lab",
    label: "TikTok",
    Icon: IconTikTok,
  },
  { href: "mailto:nikolaieva.lera@gmail.com", label: "Email", Icon: IconMail },
  {
    href: "https://x.com/museofyourlife3",
    label: "Twitter",
    Icon: IconX,
  },
] as const;

export function Footer() {
  return (
    <footer id="footer" className="scroll-mt-8 border-t border-white/[0.08] bg-black px-4 py-16 sm:px-5 sm:py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <div className="text-center">
          <p className="font-[family-name:var(--font-sans)] text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
            Connect
          </p>
          <p className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.85rem,5.25vw,2.4rem)] leading-none tracking-[-0.018em] text-white">
            LEROCK
          </p>
          <div
            className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent md:w-24"
            aria-hidden
          />
        </div>

        <nav
          aria-label="Social"
          className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:mt-12"
        >
          {socialLinks.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-[#0a0a0a] px-3.5 py-2.5 font-[family-name:var(--font-sans)] text-[9px] font-medium uppercase tracking-[0.14em] text-white/75 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-colors hover:border-[#b22222] hover:text-white sm:px-4 sm:text-[10px] sm:tracking-[0.14em]"
            >
              <Icon className="h-3.5 w-3.5 shrink-0 opacity-90 sm:h-4 sm:w-4" aria-hidden />
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-x-16 md:gap-y-0">
          <div className="space-y-6 text-left font-[family-name:var(--font-sans)] text-[15px] leading-[1.75] text-white/75 md:text-base md:leading-[1.8]">
            <p>
              Lerock is an AI video studio built for cinematic visuals—fantasy,
              sci-fi, fashion, and surreal worlds—with pacing and lighting that
              feel authored, not generic.
            </p>
            <p>
              From hero reels to campaigns and vertical social, we treat every
              frame as part of a larger story: mood, typography, and motion
              working together.
            </p>
          </div>
          <div className="space-y-6 text-left font-[family-name:var(--font-sans)] text-[15px] leading-[1.75] text-white/75 md:text-base md:leading-[1.8]">
            <p>
              Creative direction stays human; AI is the force multiplier—faster
              iteration, bolder variations, and scale that still feels considered.
              You get editorial judgment plus generative speed.
            </p>
            <p>
              Worldwide by default. Formats for web, broadcast, and social—
              <a
                href="mailto:nikolaieva.lera@gmail.com"
                className="text-white/90 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50"
              >
                say hello
              </a>{" "}
              to talk about your next piece.
            </p>
          </div>
        </div>

        <p className="mt-16 text-center font-[family-name:var(--font-sans)] text-xs text-white/30 md:mt-20">
          © {new Date().getFullYear()} Lerock. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
