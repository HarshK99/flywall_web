"use client"

import React from 'react';
import { FEATURES } from '../config/siteText';

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 md:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((f) => (
          <div key={f.title} className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
