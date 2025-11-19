"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What are the advantages of uPVC windows?",
    a: "uPVC windows are durable, low-maintenance, energy-efficient and offer good sound insulation. They resist rot and corrosion and are available in a variety of finishes.",
  },
  {
    q: "Are uPVC windows energy efficient?",
    a: "Yes — when combined with double glazing and proper seals, uPVC windows reduce heat transfer and can lower energy bills.",
  },
  {
    q: "How do I maintain uPVC windows?",
    a: "Wipe frames with a mild detergent and water; check seals and hardware annually for best performance.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h3 className="text-2xl font-semibold text-zinc-900">Frequently Asked Questions</h3>

      <div className="mt-6 space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="rounded-md border bg-white">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full px-4 py-3 text-left flex items-center justify-between"
            >
              <span className="font-medium text-zinc-800">{f.q}</span>
              <span className="text-zinc-500">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <div className="px-4 pb-4 text-zinc-700">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
