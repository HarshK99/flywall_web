"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MENU,
  CONTACT_EMAIL,
  CONTACT_PHONE_1,
  CONTACT_PHONE_2,
  CTA_SCHEDULE,
  CTA_CALLBACK,
  LOGO_ALT,
  MOBILE_TOGGLE_LABEL,
} from "../config/siteText";

// Small internal helpers to reduce duplication
function Logo({ className = '', size = 'h-8' }: { className?: string; size?: string }) {
  return (
    <Link href="/" className={className}>
      <img src="/logo.png" alt={LOGO_ALT} className={`${size} w-auto object-contain`} />
    </Link>
  );
}

function NavLinks({ menu, className = '', onClick, dark = false }: { menu: { label: string; href: string }[]; className?: string; onClick?: () => void; dark?: boolean }) {
  const base = 'uppercase tracking-wide text-sm font-medium px-2 py-0.5 rounded transition-colors duration-200';
  const darkStyles = 'text-white hover:bg-white/6 hover:text-primary';
  const lightStyles = 'text-zinc-700 hover:bg-zinc-100 hover:text-primary';
  return (
    <nav className={className}>
      {menu.map((m) => (
        <Link key={m.label} href={m.href} onClick={onClick} className={`${base} ${dark ? darkStyles : lightStyles}`}>
          {m.label}
        </Link>
      ))}
    </nav>
  );
}

function CTAs({ dark = false }: { dark?: boolean }) {
  if (dark) {
    return (
      <>
        <a href="#schedule" className="hidden md:inline-block rounded-md border border-white bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-white/5 transition-colors duration-200">
          {CTA_SCHEDULE}
        </a>
       
      </>
    );
  }

  return (
    <>
      <a href="#schedule" className="hidden md:inline-block rounded-md border border-primary bg-white px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors duration-200">
        {CTA_SCHEDULE}
      </a>
    </>
  );
}

function MobileMenu({ menu, open, setOpen }: { menu: { label: string; href: string }[]; open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div id="mobile-menu" className={`${open ? 'block' : 'hidden'} lg:hidden border-t bg-white`}>
      <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
        <div className="flex flex-col gap-2">
          {menu.map((m) => (
            <Link key={m.label} href={m.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-primary uppercase tracking-wide transition-colors duration-150">
              {m.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <a href="#schedule" className="block rounded-md border border-primary px-3 py-2 text-center text-sm font-semibold text-primary">{CTA_SCHEDULE}</a>
          <a href="#callback" className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white">{CTA_CALLBACK}</a>
        </div>

        <div className="pt-3 border-t flex items-center justify-between text-sm text-zinc-600">
          <div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-zinc-600 hover:text-zinc-900">{CONTACT_EMAIL}</a>
          </div>
          <div className="text-right">
            <div>Contact</div>
            <a href={`tel:${CONTACT_PHONE_1.replace(/[^0-9+]/g, '')}`} className="font-semibold text-zinc-900">{CONTACT_PHONE_1}</a>
            <div className="text-xs text-zinc-500">Toll Free: <a href={`tel:${CONTACT_PHONE_2.replace(/[^0-9+]/g, '')}`} className="font-semibold text-zinc-900">{CONTACT_PHONE_2}</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollThreshold(80);
  const menu = MENU;

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-sm relative ${scrolled ? 'bg-white/90 border-b' : 'bg-zinc-900'} `}>
      {/* Top utility bar: hidden smoothly when scrolled to avoid flicker/layout jumps */}
      <div className={`hidden sm:block bg-zinc-50 text-zinc-700 transition-all duration-200 ease-in-out overflow-hidden ${scrolled ? 'opacity-0 -translate-y-2 max-h-0 pointer-events-none' : 'opacity-100 translate-y-0 max-h-40'}`}>
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            {/* Logo moved into the utility bar */}
            <Logo className="flex items-center gap-3" size="h-8" />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-sm">
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-zinc-600 hover:text-zinc-900">{CONTACT_EMAIL}</a>
                <span className="text-zinc-400">|</span>
                <a href={`tel:${CONTACT_PHONE_1.replace(/[^0-9+]/g, '')}`} className="font-semibold text-zinc-900">{CONTACT_PHONE_1}</a>
                <span className="hidden sm:inline text-zinc-400">|</span>
                <a href={`tel:${CONTACT_PHONE_2.replace(/[^0-9+]/g, '')}`} className="font-semibold text-zinc-900">{CONTACT_PHONE_2}</a>
              </div>
          </div>
        </div>
      </div>

      {/* Primary nav: we keep this in the DOM and adjust padding/logo size to avoid layout jumps */}
      <div className={`mx-auto max-w-7xl px-4 ${scrolled ? 'py-1 text-zinc-700' : 'py-3 text-white'} flex items-center justify-between transition-all duration-200`}>
        <div className="flex items-center gap-4">
          {/* mobile logo: show on small screens where utility bar is hidden */}
          <Logo className="sm:hidden" size={scrolled ? 'h-7' : 'h-9'} />
          {/* desktop logo for sticky header when scrolled */}
          {scrolled && <Logo className="hidden sm:flex" size="h-7" />}
        </div>

        <NavLinks menu={menu} className="hidden lg:flex items-center gap-4 text-sm" dark={!scrolled} />

        <div className="flex items-center gap-3">
          <CTAs dark={!scrolled} />

          {/* Mobile menu button */}
          <button
            className={`lg:hidden inline-flex items-center justify-center rounded-md p-2 ${scrolled ? 'text-zinc-700 hover:bg-zinc-100' : 'text-white hover:bg-white/10'}`}
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            <span className="sr-only">{MOBILE_TOGGLE_LABEL}</span>
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel (componentized) */}
      <MobileMenu menu={menu} open={open} setOpen={setOpen} />
      </header>
  );
}

  // track scroll to toggle compact header
  function useScrollThreshold(threshold = 80) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > threshold);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);
    return scrolled;
  }
