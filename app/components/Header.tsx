"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

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
    <header className="w-full border-b bg-white/80 backdrop-blur-sm">
      {/* non-sticky header content - hide when scrolled */}
      <div className={`${scrolled ? 'opacity-0 pointer-events-none -translate-y-2' : 'opacity-100 translate-y-0'} transition-all duration-200 ease-in-out`}
        aria-hidden={scrolled}
      >
      {/* Top utility bar */}
      <div className="bg-zinc-50 text-zinc-700">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            {/* Logo moved into the utility bar */}
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Flywall logo" className="h-8 w-auto object-contain" />
            </Link>
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

      {/* Primary nav */}
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* logo removed from primary nav - it's in the utility bar now */}

          {/* trust badge removed per request */}
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {menu.map((m) => (
            <Link key={m.label} href={m.href} className="text-zinc-700 hover:text-zinc-900">
              {m.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#schedule" className="hidden md:inline-block rounded-md border border-primary bg-white px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/5">
            Schedule a Demo
          </a>

          <a href="#callback" className="hidden md:inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">
            Request a Callback
          </a>

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

      {/* Mobile menu panel */}
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

      </div>

      {/* Compact sticky header shown on scroll */}
        {scrolled && (
          <div className="fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <img src="/logo.png" alt="Flywall logo" className="h-8 w-auto object-contain" />
              </Link>

              <nav className="hidden lg:flex items-center gap-6 text-sm">
                {menu.map((m) => (
                  <Link key={m.label} href={m.href} className="text-zinc-700 hover:text-zinc-900">
                    {m.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <a href="#callback" className="hidden md:inline-block rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">Request a Callback</a>
                <button className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100" onClick={() => setOpen((s) => !s)}>
                  <span className="sr-only">Toggle menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
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
