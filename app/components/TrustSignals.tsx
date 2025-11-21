"use client"

import React from 'react';

export default function TrustSignals() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
        <div className="flex items-center gap-4">
          <div className="font-semibold">SKZ Germany</div>
          <div>25+ Years Experience</div>
        </div>

        <div className="flex items-center gap-4">
          <div>Production Capacity: <span className="font-semibold">100k units/year</span></div>
          <div className="hidden sm:block">Trusted by architects and builders</div>
        </div>
      </div>
    </section>
  );
}
