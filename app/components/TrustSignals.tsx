"use client"

import React from 'react';
import CounterBox from './CounterBox';
import {TRUST_YEARS, TRUST_CAPACITY } from '../config/siteText';
import Card from './Card';

export default function TrustSignals() {
  // parse TRUST_CAPACITY like "Production Capacity: 100k units/year"
  const capParts = TRUST_CAPACITY.split(':');
  const capLabel = capParts[0] ?? 'Capacity';
  const capValueRaw = (capParts[1] ?? '').trim();

  // Try to extract a number from the capacity string (e.g. '100k')
  const extractNumber = (s: string) => {
    const m = s.match(/([0-9,.]+)\s*(k|m)?/i);
    if (!m) return NaN;
    let num = parseFloat(m[1].replace(/,/g, ''));
    const scale = (m[2] || '').toLowerCase();
    if (scale === 'k') num = Math.floor(num * 1000);
    if (scale === 'm') num = Math.floor(num * 1000000);
    return num;
  };

  const capacityNumber = extractNumber(capValueRaw) || 0;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">Why choose us</h2>
        <p className="mt-2 text-zinc-600">Trusted certifications and production capability</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="p-6 text-center"><CounterBox label={TRUST_YEARS} target={25} suffix="+" duration={1200} /></Card>
        <Card className="p-6 text-center"><CounterBox label={capLabel} target={capacityNumber} suffix="" duration={1500} /></Card>
      </div>
    </section>
  );
}
