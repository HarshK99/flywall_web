"use client";

import { useEffect, useState } from "react";
import { HERO_TITLE, HERO_DESCRIPTION, HERO_EXPLORE_LABEL, HERO_REQUEST_LABEL } from "../config/siteText";

const images = ["/hero/1.png", "/hero/2.png"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full" style={{ height: 'min(100vh, calc(100vw * 9 / 16))' }}>
      {/* Background images (crossfade) */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ objectPosition: 'center' }}
            aria-hidden
          />
        ))}

        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-24 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">{HERO_TITLE}</h1>
          <p className="mt-4 text-lg">{HERO_DESCRIPTION}</p>

          {/* <div className="mt-6 flex gap-3">
            <a
              href="#products"
              className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
            >
              {HERO_EXPLORE_LABEL}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-secondary px-5 py-3 text-sm font-medium text-primary hover:bg-secondary/10"
            >
              {HERO_REQUEST_LABEL}
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

