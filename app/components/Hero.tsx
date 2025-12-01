"use client";

import { useEffect, useState } from "react";
import { HERO_TITLE, HERO_DESCRIPTION, HERO_DESCRIPTION_MOBILE, HERO_EXPLORE_LABEL, HERO_REQUEST_LABEL } from "../config/siteText";

const images = ["/hero/1.png", "/hero/2.png"];

function DesktopHero({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative w-full pt-20 lg:pt-0" style={{ height: 'min(100vh, calc(100vw * 9 / 16))' }}>
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

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-24 h-full flex items-center justify-center lg:justify-start">
          <div className="max-w-2xl text-white text-center lg:text-left">
            <p className="text-4xl sm:text-5xl font-extrabold leading-tight">{HERO_TITLE}</p>
            <p className="mt-4 text-lg break-words max-w-prose">{HERO_DESCRIPTION}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileHero() {
  // Always show the single mobile image (no rotation)
  const mobileSrc = '/hero/1_mobile.png';

  return (
    <section className="relative w-full pt-0 overflow-hidden">
      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <img
          src={mobileSrc}
          alt=""
          className="w-full h-auto object-cover block"
          aria-hidden
        />
      </div>

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-2xl text-white text-center px-6">
          <p className="text-4xl sm:text-5xl font-extrabold leading-tight">{HERO_TITLE}</p>
          <p className="mt-4 text-sm">{HERO_DESCRIPTION_MOBILE}</p>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <>
      <div className="md:hidden">
        <MobileHero />
      </div>
      <div className="hidden md:block">
        <DesktopHero images={images} />
      </div>
    </>
  );
}

