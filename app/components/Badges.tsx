"use client"

import React from 'react';

const BADGES: { id: string; label: string; src: string }[] = [
  { id: 'iso14001', label: 'ISO 14001', src: '/badges/iso14001.png' },
  { id: 'rohs', label: 'RoHS', src: '/badges/rohs.png' },
  { id: '15yr', label: '15 Year Warranty', src: '/badges/15yr.png' },
  { id: 'pe04', label: 'PE 04', src: '/badges/pe04.png' },
  { id: 'msme', label: 'MSME', src: '/badges/msme.png' },
  { id: 'iso9001', label: 'ISO 9001', src: '/badges/iso9001.png' },
];

export default function Badges() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold">Certifications & Badges</h3>
          <p className="mt-2 text-sm text-zinc-600">Recognitions and certifications that reflect our quality and compliance.</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center justify-items-center">
          {BADGES.map((b) => (
            <div key={b.id} className="flex items-center justify-center p-2">
              <img
                src={b.src}
                alt={b.label}
                className="h-10 md:h-14 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
