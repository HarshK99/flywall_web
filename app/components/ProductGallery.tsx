"use client"

import React from 'react';

const gallery = [
  { label: 'Casement', img: '/products_styles/casement.jpg' },
  { label: 'Sliding', img: '/products_styles/sliding.jpg' },
  { label: 'Tilt & Turn', img: '/products_styles/tiltturn.jpg' },
  { label: 'Slide & Fold', img: '/products_styles/slidefold.jpg' },
];

export default function ProductGallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <h3 className="text-xl font-semibold mb-4">Our Window & Door Types</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {gallery.map((g) => (
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
