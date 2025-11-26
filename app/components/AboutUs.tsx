"use client"

import React, { useEffect, useState } from 'react';
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

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">{ABOUT_TITLE}</h2>
        <p className="mt-3 text-zinc-600 max-w-2xl mx-auto">{ABOUT_DESC}</p>
      </div>

      <div className="mt-8">
        <div className="relative mx-auto max-w-4xl h-64 md:h-96 overflow-hidden rounded-lg">
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
