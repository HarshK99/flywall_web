"use client"

import React from 'react';

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 text-center">
      <div className="inline-flex flex-col sm:flex-row gap-3 items-center">
        <a href="#schedule" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md">Schedule a Demo</a>
        <a href="#callback" className="rounded-md border border-primary px-5 py-3 text-sm font-semibold text-primary bg-white">Request a Callback</a>
      </div>
    </section>
  );
}
