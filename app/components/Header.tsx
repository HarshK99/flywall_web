"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

// Small internal helpers to reduce duplication
function Logo({ className = '', size = 'h-8' }: { className?: string; size?: string }) {
  return (
    <Link href="/" className={className}>
      <img src="/logo.png" alt="Flywall logo" className={`${size} w-auto object-contain`} />
    </Link>
  );
}

function NavLinks({ menu, className = '', onClick }: { menu: { label: string; href: string }[]; className?: string; onClick?: () => void }) {
  return (
    <nav className={className}>
      {menu.map((m) => (
        <Link key={m.label} href={m.href} onClick={onClick} className="text-zinc-700 hover:text-zinc-900">
          {m.label}
        </Link>
      ))}
    </nav>
  );
}

function CTAs() {
  return (
    <>
      <a href="#schedule" className="hidden md:inline-block rounded-md border border-primary bg-white px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/5">
        Schedule a Demo
      </a>
      <a href="#callback" className="hidden md:inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">
        Request a Callback
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
            <Link key={m.label} href={m.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50">
              {m.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <a href="#schedule" className="block rounded-md border border-primary px-3 py-2 text-center text-sm font-semibold text-primary">Schedule a Demo</a>
          <a href="#callback" className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white">Request a Callback</a>
        </div>

        <div className="pt-3 border-t flex items-center justify-between text-sm text-zinc-600">
          <div>
            <a href="mailto:info@flywall.example" className="text-sm text-zinc-600 hover:text-zinc-900">info@flywall.example</a>
          </div>
          <div className="text-right">
            <div>Contact</div>
            <a href="tel:+919876543210" className="font-semibold text-zinc-900">+91 98765 43210</a>
            <div className="text-xs text-zinc-500">Toll Free: <a href="tel:1800123456" className="font-semibold text-zinc-900">1800-123-456</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollThreshold(80);
  const menu = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "uPVC Windows", href: "/products/windows" },
    { label: "uPVC Doors", href: "/products/doors" },
    { label: "Why Prominance", href: "/why-prominance" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm relative">
      {/* Top utility bar: hidden smoothly when scrolled to avoid flicker/layout jumps */}
      <div className={`hidden sm:block bg-zinc-50 text-zinc-700 transition-all duration-200 ease-in-out overflow-hidden ${scrolled ? 'opacity-0 -translate-y-2 max-h-0 pointer-events-none' : 'opacity-100 translate-y-0 max-h-40'}`}>
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            {/* Logo moved into the utility bar */}
            <Logo className="flex items-center gap-3" size="h-8" />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-sm">
              <a href="mailto:info@flywall.example" className="text-sm text-zinc-600 hover:text-zinc-900">info@flywall.example</a>
              <span className="text-zinc-400">|</span>
              <a href="tel:+919876543210" className="font-semibold text-zinc-900">+91 98765 43210</a>
              <span className="hidden sm:inline text-zinc-400">|</span>
              <span className="hidden sm:inline text-sm">Toll Free: <a href="tel:1800123456" className="font-semibold text-zinc-900">1800-123-456</a></span>
            </div>
          </div>
        </div>
      </div>

      {/* Primary nav: we keep this in the DOM and adjust padding/logo size to avoid layout jumps */}
      <div className={`mx-auto max-w-7xl px-4 ${scrolled ? 'py-2' : 'py-4'} flex items-center justify-between transition-all duration-200`}>
        <div className="flex items-center gap-4">
          {/* mobile logo: show on small screens where utility bar is hidden */}
          <Logo className="sm:hidden" size={scrolled ? 'h-8' : 'h-10'} />
        </div>

        <NavLinks menu={menu} className="hidden lg:flex items-center gap-6 text-sm" />

        <div className="flex items-center gap-3">
          <CTAs />

          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            <span className="sr-only">Toggle menu</span>
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
