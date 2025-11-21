"use client"

import React from 'react';
import { FaBolt, FaLeaf, FaAward, FaPaintBrush } from 'react-icons/fa';
import { FEATURES } from '../config/siteText';

export default function FeatureGrid() {
  // Use Font Awesome icons from react-icons/fa

  const Icon = ({ name }: { name: string }) => {
    switch (name) {
      case 'energy':
        return <FaBolt className="h-6 w-6" aria-hidden />;
      case 'leadfree':
        return <FaLeaf className="h-6 w-6" aria-hidden />;
      case 'certified':
        return <FaAward className="h-6 w-6" aria-hidden />;
      case 'styles':
        return <FaPaintBrush className="h-6 w-6" aria-hidden />;
      default:
        return <FaLeaf className="h-6 w-6" aria-hidden />;
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 md:py-10">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">Advantage of Flywall Windows</h2>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {FEATURES.map((f) => {
          const key = f.icon ?? 'styles';
          return (
            <article
              key={f.title}
              className="icon-box2 rounded-lg bg-white p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 focus-within:ring-2 focus-within:ring-primary"
              tabIndex={0}
            >
              <div className="mb-3 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center">
                  <Icon name={key} />
                </div>
              </div>

              <h4 className="text-center font-semibold text-lg">{f.title}</h4>
              <p className="mt-3 text-sm text-zinc-600 text-center">{f.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
