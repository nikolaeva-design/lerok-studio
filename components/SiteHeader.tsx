"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#reels", label: "Work" },
  { href: "#footer", label: "Contact" },
] as const;

function IconMenu({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

const linkClassName =
  "font-[family-name:var(--font-sans)] text-[10px] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-white";

/** Top bar: Bebas wordmark + nav (drawer on small screens) */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-40 border-b border-white/[0.06] bg-black">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 sm:px-5 sm:py-5 md:px-10 md:py-6">
        <Link
          href="#hero"
          className="shrink-0 font-[family-name:var(--font-display)] text-[1.35rem] leading-none tracking-[-0.015em] text-white sm:text-[1.6rem] md:text-[2rem]"
          onClick={() => setMenuOpen(false)}
        >
          LEROCK
        </Link>

        <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-x-12">
          {links.map(({ href, label }) => (
            <Link key={`${href}-${label}`} href={href} className={linkClassName}>
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-white/85 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/[0.06] bg-black md:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <nav aria-label="Primary mobile" className="mx-auto flex max-w-[1600px] flex-col gap-1 px-4 py-4 sm:px-5">
          {links.map(({ href, label }) => (
            <Link
              key={`${href}-${label}`}
              href={href}
              className={`${linkClassName} rounded-md px-3 py-3`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
