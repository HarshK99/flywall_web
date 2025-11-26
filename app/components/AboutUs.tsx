"use client"

import React, { useEffect, useState } from 'react';
import { useInView } from '../lib/useInView';
import { ABOUT_TITLE, ABOUT_DESC } from '../config/siteText';

export default function HeroIntro() {
  const images = ['/hero/1.png', '/hero/2.png'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:py-12" ref={ref}>
      <div className="text-center">
        <h2 className={`text-3xl md:text-4xl font-extrabold ${inView ? 'animate-entry' : ''}`} style={{ ['--entry-delay' as any]: `0ms` }}>{ABOUT_TITLE}</h2>
        <p className={`mt-3 text-zinc-600 max-w-2xl mx-auto ${inView ? 'animate-entry' : ''}`} style={{ ['--entry-delay' as any]: `80ms` }}>{ABOUT_DESC}</p>
      </div>

      <div className="mt-8">
        <div className={`relative mx-auto max-w-4xl h-64 md:h-96 overflow-hidden rounded-lg ${inView ? 'animate-entry' : ''}`} style={{ ['--entry-delay' as any]: `160ms` }}>
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`About image ${i + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
