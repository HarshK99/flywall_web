const reviews = [
  {
    name: "Asha Kapoor",
    date: "Aug 12, 2025",
    text: "Excellent build quality and quick installation. Our home feels warmer already.",
  },
  {
    name: "Rahul Menon",
    date: "Jul 30, 2025",
    text: "Stylish designs and very helpful team during customization.",
  },
  {
    name: "Priya Sharma",
    date: "Jun 18, 2025",
    text: "Low maintenance and great sound insulation — highly recommend.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-2xl font-semibold text-zinc-900">Customer Appreciations</h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-lg border bg-white p-4">
              <div className="text-sm font-medium text-zinc-800">{r.name}</div>
              <div className="text-xs text-zinc-500">{r.date}</div>
              <p className="mt-3 text-zinc-700">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
