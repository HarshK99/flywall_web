"use client"

import React, { useEffect, useState } from 'react';
import { PRODUCT_WINDOWS_TITLE, PRODUCT_DOORS_TITLE, PRODUCT_WINDOWS, PRODUCT_DOORS } from '../config/siteText';
import Card from './Card';

type Item = { label: string; img: string };

function ProductGrid({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="w-full py-8" style={{ backgroundColor: '#0b3b61' }}>
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="text-2xl font-semibold mb-6 text-white">{title}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((g) => (
            <Card key={g.label} className="group flex flex-col items-center p-6 bg-white hover:bg-zinc-50 transition-colors duration-300">
              <div className="w-full h-72 rounded overflow-hidden flex items-center justify-center">
                <img
                  src={g.img}
                  alt={g.label}
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-95 group-hover:translate-y-1"
                />
              </div>
              <div className="mt-4 text-base font-medium text-zinc-900">{g.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileCarousel({ title, items }: { title: string; items: Item[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 3500);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section className="w-full py-8" style={{ backgroundColor: '#0b3b61' }}>
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="text-2xl font-semibold mb-6 text-white">{title}</h3>

        <div className="relative h-96">
          {items.map((g, i) => (
            <div
              key={g.label}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${i === index ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
              <div className="mx-auto max-w-md">
                <Card className="group flex flex-col items-center p-6 bg-white transition-colors duration-200">
                  <div className="w-full h-72 rounded overflow-hidden flex items-center justify-center">
                    <img src={g.img} alt={g.label} className="w-56 h-56 object-contain" />
                  </div>
                  <div className="mt-4 text-base font-medium text-zinc-900 text-center">{g.label}</div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductGallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640); // mobile only
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileCarousel title={PRODUCT_WINDOWS_TITLE} items={PRODUCT_WINDOWS} />
      ) : (
        <ProductGrid title={PRODUCT_WINDOWS_TITLE} items={PRODUCT_WINDOWS} />
      )}
    </div>
  );
}
