"use client"

import React from 'react';
import { PRODUCT_WINDOWS_TITLE, PRODUCT_DOORS_TITLE, PRODUCT_WINDOWS, PRODUCT_DOORS } from '../config/siteText';
import Card from './Card';

type Item = { label: string; img: string };

function ProductGrid({ title, items }: { title: string; items: Item[] }) {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(3);
  const intervalRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      if (w >= 1024) setVisible(3);
      else if (w >= 640) setVisible(2);
      else setVisible(1);
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  React.useEffect(() => {
    const maxIndex = Math.max(0, items.length - visible);
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 3000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [items.length, visible]);

  const slideWidthPercent = 100 / visible;

  return (
    <section className="w-full py-8" style={{ backgroundColor: '#0b3b61' }}>
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="text-2xl font-semibold mb-6 text-white">{title}</h3>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{ width: `${items.length * slideWidthPercent}%`, transform: `translateX(-${index * slideWidthPercent}%)` }}
          >
            {items.map((g) => (
              <div key={g.label} style={{ width: `${slideWidthPercent}%` }} className="px-2">
                <Card className="group flex flex-col items-center p-6 bg-white hover:bg-zinc-50 transition-colors duration-300">
                  <div className="w-full h-72 rounded overflow-hidden flex items-center justify-center">
                    <img
                      src={g.img}
                      alt={g.label}
                      className="w-48 h-48 sm:w-56 sm:h-56 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-95 group-hover:translate-y-1"
                    />
                  </div>
                  <div className="mt-4 text-base font-medium text-zinc-900">{g.label}</div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductGallery() {
  return (
    <div>
      <ProductGrid title={PRODUCT_WINDOWS_TITLE} items={PRODUCT_WINDOWS} />
      <ProductGrid title={PRODUCT_DOORS_TITLE} items={PRODUCT_DOORS} />
    </div>
  );
}
