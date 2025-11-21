"use client"

import React from 'react';
import { CTA_SCHEDULE, CTA_CALLBACK, CTA_INTRO } from '../config/siteText';

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 text-center">
      <p className="mb-4 text-lg text-zinc-700">{CTA_INTRO}</p>
      <div className="inline-flex flex-col sm:flex-row gap-3 items-center">
        <a href="#schedule" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md">{CTA_SCHEDULE}</a>
        <a href="#callback" className="rounded-md border border-primary px-5 py-3 text-sm font-semibold text-primary bg-white">{CTA_CALLBACK}</a>
      </div>
    </section>
  );
}
