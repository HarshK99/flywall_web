"use client";

import { useRef, useState } from "react";

const products = [
  "Tilt & Turn",
  "Glass to Glass",
  "Fixed",
  "Casement",
  "Bay",
  "Sliding",
  "Villa",
];

function ProductCard({ name, idx }: { name: string; idx: number }) {
  const imageUrl = `/products_styles/${idx + 1}.jpg`;

  return (
    <div className="flex-shrink-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 px-2">
      <div className="rounded-sm bg-white overflow-hidden shadow-sm">
        <div
          className="h-72 w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
          role="img"
          aria-label={name}
        />
        <div className="p-4 text-center font-medium text-zinc-800">{name}</div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scrollByPage = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    // amount to scroll: width of container viewport
    const amount = el.clientWidth;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
    // update buttons after a short delay
    setTimeout(() => {
      setIsAtStart(el.scrollLeft <= 10);
      setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
    }, 500);
  };

  // touch swipe handlers for mobile
  let startX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) scrollByPage("next");
      else scrollByPage("prev");
    }
  };

  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-16 bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-zinc-900">Product Showcase</h2>
        <p className="mt-2 text-zinc-600">Explore our product categories</p>
      </div>

      <div className="relative mt-6">
        {/* arrows for desktop */}
        <button
          aria-label="Previous"
          onClick={() => scrollByPage("prev")}
          className={`hidden lg:inline-flex absolute left-0 top-1/2 -translate-y-1/2 z-20 ml-2 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm text-primary hover:bg-white`}
          disabled={isAtStart}
        >
          ‹
        </button>

        <button
          aria-label="Next"
          onClick={() => scrollByPage("next")}
          className={`hidden lg:inline-flex absolute right-0 top-1/2 -translate-y-1/2 z-20 mr-2 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm text-primary hover:bg-white`}
          disabled={isAtEnd}
        >
          ›
        </button>

        <div
          ref={trackRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="no-scrollbar flex touch-pan-x overflow-x-auto scrollbar-hide -mx-2 px-2"
        >
          {products.map((p, i) => (
            <ProductCard key={p} name={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
