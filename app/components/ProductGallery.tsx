"use client"

import React from 'react';
import { PRODUCT_WINDOWS_TITLE, PRODUCT_DOORS_TITLE, PRODUCT_WINDOWS, PRODUCT_DOORS } from '../config/siteText';

type Item = { label: string; img: string };

function ProductGrid({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((g) => (
          <div key={g.label} className="flex flex-col items-center bg-white rounded shadow-sm p-3">
            <div className="w-full h-56 bg-zinc-100 rounded overflow-hidden flex items-center justify-center">
              <img src={g.img} alt={g.label} className="object-cover h-full w-full" />
            </div>
            <div className="mt-2 text-sm font-medium">{g.label}</div>
          </div>
        ))}
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
