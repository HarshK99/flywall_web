"use client"

import React from 'react';

const features = [
  {
    title: 'Energy-efficient & Sustainable',
    desc: 'Designed to reduce heat loss and lower energy bills using high-performance uPVC profiles.',
  },
  {
    title: '100% Lead-free, UV-resistant',
    desc: 'Profiles are lead-free and engineered to withstand UV exposure without yellowing or warping.',
  },
  {
    title: 'Certified by SKZ Germany',
    desc: 'Manufactured and tested to European standards with SKZ certification for quality assurance.',
  },
  {
    title: 'Styles & Finishes',
    desc: 'Wide selection of styles and finishes, including realistic wood textures and custom colors.',
  },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 md:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
