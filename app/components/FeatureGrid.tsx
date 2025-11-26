"use client"

import React from 'react';
import { FaBolt, FaLeaf, FaAward, FaPaintBrush } from 'react-icons/fa';
import { FEATURES } from '../config/siteText';
import Card from './Card';
import { useInView } from '../lib/useInView';

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
    <section className="mx-auto max-w-7xl px-4 py-6 md:py-10 section-neutral">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold section-title">Advantage of Flywall Windows</h2>
        <p className="mt-2 text-zinc-600 constrain-text mx-auto">High-performance uPVC windows designed for energy efficiency, durability and modern aesthetics.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {FEATURES.map((f, idx) => {
          const key = f.icon ?? 'styles';
          const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });
          return (
            <div key={f.title} ref={ref} style={{ ['--entry-delay' as any]: `${idx * 90}ms` }} className={inView ? 'animate-entry' : ''}>
              <Card
                as="article"
                className="p-6 focus-within:ring-2 focus-within:ring-primary"
                tabIndex={0}
              >
                <div className="mb-3 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center">
                    <Icon name={key} />
                  </div>
                </div>

                <h4 className="text-center font-semibold text-lg">{f.title}</h4>
                <p className="mt-3 text-sm text-zinc-600 text-center">{f.desc}</p>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
