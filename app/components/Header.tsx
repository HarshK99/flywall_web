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
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// Small internal helpers to reduce duplication
function Logo({ className = '', size = 'h-10' }: { className?: string; size?: string }) {
  return (
    <Link href="/" className={className}>
      <img src="/logo.png" alt={LOGO_ALT} className={`${size} w-auto object-contain`} />
    </Link>
  );
}

function NavLinks({ menu, className = '', onClick, dark = false }: { menu: { label: string; href: string }[]; className?: string; onClick?: () => void; dark?: boolean }) {
  const base = 'uppercase tracking-wide text-sm font-medium px-2 py-0.5 rounded transition-colors duration-360';
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

function NavBar({ dark = false, mobileMenuId = 'mobile-menu', menu, open, setOpen }: { dark?: boolean; mobileMenuId?: string; menu: { label: string; href: string }[]; open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Logo className="sm:hidden" size="h-15" />
        {/* <Logo className="hidden sm:flex" size="h-12" /> */}
      </div>

      <NavLinks menu={menu} className="hidden lg:flex items-center gap-4 text-sm" dark={dark} />

      <div className="flex items-center gap-3">
        <button
          className={`lg:hidden inline-flex items-center justify-center rounded-md p-2 'text-white hover:bg-white/10'}`}
          aria-controls={mobileMenuId}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
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
  );
}

function CompactNavBar({ menu, open, setOpen }: { menu: { label: string; href: string }[]; open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-white">
      <Logo size="h-10" />
      <NavLinks menu={menu} className="hidden lg:flex items-center gap-4 text-sm" dark={true} />
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
          aria-controls="mobile-menu-compact"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
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
  );
}

function MobileMenu({ menu, open, setOpen, id = 'mobile-menu' }: { menu: { label: string; href: string }[]; open: boolean; setOpen: (v: boolean) => void; id?: string }) {
  return (
    <div id={id} className={`${open ? 'block' : 'hidden'} lg:hidden border-t`} style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-7xl px-4 py-4 space-y-3 text-white">
        <div className="flex flex-col gap-2">
            {menu.map((m) => (
            <Link key={m.label} href={m.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/5 hover:text-primary uppercase tracking-wide transition-colors duration-150">
              {m.label}
            </Link>
          ))}
        </div>

        {/* <div className="flex flex-col gap-2 pt-2">
          <a href="#schedule" className="block rounded-md border border-primary px-3 py-2 text-center text-sm font-semibold text-primary">{CTA_SCHEDULE}</a>
          <a href="#callback" className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white">{CTA_CALLBACK}</a>
        </div> */}

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
  const scrolled = useScrollThreshold(120);
  const menu = MENU;
  // viewport-based styling handled via CSS media queries rather than runtime state

  return (
    <>
      {/* Main header: not sticky, full height */}
      <header className="site-header w-full relative">
        {/* Top utility bar: always visible */}
        <div className="hidden sm:block text-white" style={{ backgroundColor: 'var(--bg-dark)' }}>
          <div className="mx-auto max-w-7xl px-4 flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <Logo className="flex items-center gap-1" size="h-15" />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 text-sm">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 text-sm text-zinc-200 hover:text-white">
                  <FaEnvelope className="h-4 w-4 text-primary" aria-hidden />
                  <span className="hidden sm:inline">{CONTACT_EMAIL}</span>
                </a>

                <span className="text-zinc-400">|</span>

                <a href={`tel:${CONTACT_PHONE_1.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 font-semibold text-zinc-200">
                  <FaPhoneAlt className="h-4 w-4 text-primary" aria-hidden />
                  <span className="sr-only">Primary phone</span>
                  <span className="hidden sm:inline">{CONTACT_PHONE_1}</span>
                </a>

                <span className="hidden sm:inline text-zinc-400">|</span>

                <a href={`tel:${CONTACT_PHONE_2.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 font-semibold text-zinc-200">
                  <FaPhoneAlt className="h-4 w-4 text-primary" aria-hidden />
                  <span className="sr-only">Toll free</span>
                  <span className="hidden sm:inline">{CONTACT_PHONE_2}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Primary nav: always light */}
        <NavBar dark={false} mobileMenuId="mobile-menu" menu={menu} open={open} setOpen={setOpen} />

        {/* Mobile menu panel */}
        <MobileMenu menu={menu} open={open} setOpen={setOpen} />
      </header>

      {/* Compact sticky header: appears after scroll */}
      {scrolled && (
        <header className="compact-header fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-sm" style={{ backgroundColor: 'var(--bg-dark)' }}>
          <CompactNavBar menu={menu} open={open} setOpen={setOpen} />
          {/* Mobile menu for compact header */}
          {open && <MobileMenu menu={menu} open={open} setOpen={setOpen} id="mobile-menu-compact" />}
        </header>
      )}
    </>
  );
}

  // track scroll to toggle compact header
  function useScrollThreshold(threshold = 120) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > threshold);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);
    return scrolled;
  }
