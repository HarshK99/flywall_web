"use client"

import React from 'react';
import { BENEFITS } from '../config/siteText';

export default function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <h3 className="text-lg font-semibold mb-4">Customer-Centric Benefits</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {BENEFITS.map((b) => (
          <div key={b.title} className="flex items-start gap-3 bg-white rounded p-4 border">
            <div className="text-2xl">{b.icon}</div>
            <div>
              <div className="font-semibold">{b.title}</div>
              <div className="text-sm text-zinc-600">{b.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
