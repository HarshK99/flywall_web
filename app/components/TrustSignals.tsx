"use client"

import React from 'react';
import { TRUST_SKZ, TRUST_YEARS, TRUST_CAPACITY } from '../config/siteText';

export default function TrustSignals() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
        <div className="flex items-center gap-4">
          <div className="font-semibold">{TRUST_SKZ}</div>
          <div>{TRUST_YEARS}</div>
        </div>

        <div className="flex items-center gap-4">
          <div>{TRUST_CAPACITY.split(':')[0]}: <span className="font-semibold">{TRUST_CAPACITY.split(':')[1].trim()}</span></div>
          <div className="hidden sm:block">Trusted by architects and builders</div>
        </div>
      </div>
    </section>
  );
}
