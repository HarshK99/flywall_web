"use client"

import React from 'react';
import { INTRO_TITLE, INTRO_DESC } from '../config/siteText';

export default function HeroIntro() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">{INTRO_TITLE}</h2>
        <p className="mt-3 text-zinc-600 max-w-2xl mx-auto">{INTRO_DESC}</p>
      </div>
    </section>
  );
}
