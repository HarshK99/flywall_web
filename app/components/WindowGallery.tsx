"use client"

import React, { useEffect, useState } from 'react';
import { WINDOW_STYLES_TITLE, WINDOW_STYLES } from '../config/siteText';
import Card from './Card';

type Item = { label: string; img: string };

export default function WindowGallery() {
  const getInitialMobile = () => {
    if (typeof window === 'undefined') return false;
    const mq = window.matchMedia?.('(max-width: 639px)');
    return mq ? mq.matches : window.innerWidth < 640;
  };

  const [isMobile, setIsMobile] = useState<boolean>(getInitialMobile);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 639px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile('matches' in e ? e.matches : mq.matches);

    if (mq.addEventListener) mq.addEventListener('change', handler as EventListener);
    else mq.addListener(handler as (this: MediaQueryList, ev: MediaQueryListEvent) => any);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler as EventListener);
      else mq.removeListener(handler as (this: MediaQueryList, ev: MediaQueryListEvent) => any);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileGallery title={WINDOW_STYLES_TITLE} items={WINDOW_STYLES} />
      ) : (
        <DesktopGallery title={WINDOW_STYLES_TITLE} items={WINDOW_STYLES} />
      )}
    </div>
  );
}

function MobileGallery({ title, items }: { title: string; items: Item[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 500);
    return () => clearInterval(id);
  }, [items.length]);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, [index]);

  const item = items[index];

     return (
       <section className="w-full py-8" style={{ backgroundColor: '#0b3b61' }}>
      <div className="mx-auto max-w-7xl px-4">
           <h3 className="text-2xl font-semibold mb-6 text-white">{title}</h3>

        <div className="flex justify-center">
          <div className={`max-w-md w-full transition-opacity duration-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <Card className="group flex flex-col items-center p-4" style={{ backgroundColor: 'var(--window-card-bg)', color: 'var(--window-card-text)' }}>
              <div className="w-full h-72 rounded overflow-hidden flex items-center justify-center">
                <img src={item.img} alt={item.label} className="w-56 h-56 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
              </div>
              <div className="mt-4 text-base font-medium text-center">{item.label}</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopGallery({ title, items }: { title: string; items: Item[] }) {
  const visible = 4;
  const extended = [...items, ...items.slice(0, visible)];
  const [index, setIndex] = useState(0);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [gapPx, setGapPx] = useState(16);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      const containerW = container.clientWidth;
      const cs = getComputedStyle(track);
      const gap = parseFloat(cs.gap || cs.columnGap || '16') || 16;
      setGapPx(gap);
      const w = (containerW - gap * (visible - 1)) / visible;
      setCardWidth(w);
    };
    measure();
    window.addEventListener('resize', measure, { passive: true });
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onEnd = () => {
      if (index >= items.length) {
        track.style.transition = 'none';
        setIndex(0);
        track.getBoundingClientRect();
        track.style.transition = '';
      }
    };

    track.addEventListener('transitionend', onEnd);
    return () => track.removeEventListener('transitionend', onEnd);
  }, [index, items.length]);

  const translate = -(index * (cardWidth + gapPx));

  return (
    <section className="w-full py-8" style={{ backgroundColor: '#0b3b61' }}>
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="text-2xl font-semibold mb-6 text-white">{title}</h3>

        <div ref={containerRef} className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 items-stretch"
            style={{ transform: `translateX(${translate}px)`, transition: 'transform 600ms ease' }}
          >
            {extended.map((g, idx) => (
              <div key={`${g.label}-${idx}`} style={{ flex: `0 0 ${cardWidth}px` }}>
                <Card className="group flex flex-col items-center p-4" style={{ backgroundColor: 'var(--window-card-bg)', color: 'var(--window-card-text)' }}>
                  <div className="w-full h-64 rounded overflow-hidden flex items-center justify-center">
                    <img src={g.img} alt={g.label} className="w-48 h-48 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
                  </div>
                  <div className="mt-4 text-base font-medium text-center">{g.label}</div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
