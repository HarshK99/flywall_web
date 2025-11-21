"use client"

import React from 'react';
import { FaHeadphones, FaLock, FaTools, FaLeaf } from 'react-icons/fa';
import { BENEFITS } from '../config/siteText';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  headphones: FaHeadphones,
  lock: FaLock,
  tools: FaTools,
  leaf: FaLeaf,
};

export default function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <h3 className="text-lg font-semibold mb-6 text-center">Customer-Centric Benefits</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {BENEFITS.map((b) => (
          <article
            key={b.title}
            className="our-process-item bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-center"
            aria-labelledby={`benefit-${b.title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
              {(() => {
                const IconComp = iconMap[b.icon ?? 'leaf'] ?? FaLeaf;
                return <IconComp className="h-6 w-6" />;
              })()}
            </div>

            <h4 id={`benefit-${b.title.replace(/\s+/g, '-').toLowerCase()}`} className="text-lg font-semibold">
              <strong>{b.title}</strong>
            </h4>

            <p className="mt-3 text-sm text-zinc-600">{b.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
