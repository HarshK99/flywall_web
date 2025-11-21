"use client"

import React from 'react';

type Item = { label: string; img: string };

function ProductGrid({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((g) => (
          <div key={g.label} className="flex flex-col items-center bg-white rounded shadow-sm p-3">
            <div className="w-full h-28 bg-zinc-100 rounded overflow-hidden flex items-center justify-center">
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
  const windowItems: Item[] = [
    { label: 'Casement', img: '/products_styles/casement.jpg' },
    { label: 'Sliding', img: '/products_styles/sliding.jpg' },
    { label: 'Tilt & Turn', img: '/products_styles/tiltturn.jpg' },
    { label: 'Slide & Fold', img: '/products_styles/slidefold.jpg' },
  ];

  const doorItems: Item[] = [
    { label: 'Entrance Door', img: '/products_styles/door_entrance.jpg' },
    { label: 'Patio Sliding', img: '/products_styles/door_sliding.jpg' },
    { label: 'Bi-fold Door', img: '/products_styles/door_bifold.jpg' },
    { label: 'French Door', img: '/products_styles/door_french.jpg' },
  ];

  return (
    <div>
      <ProductGrid title="Window Types" items={windowItems} />
      <ProductGrid title="Door Types" items={doorItems} />
    </div>
  );
}
