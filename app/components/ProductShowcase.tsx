const products = [
  "Tilt & Turn",
  "Glass to Glass",
  "Fixed",
  "Casement",
  "Bay",
  "Sliding",
  "Villa",
];

function ProductCard({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border p-4 bg-white">
      <div className="h-32 w-full rounded-md bg-zinc-100 flex items-center justify-center text-zinc-300">
        Image
      </div>
      <div className="w-full text-center font-medium text-zinc-800">{name}</div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-zinc-900">Product Showcase</h2>
      <p className="mt-2 text-zinc-600">Explore our product categories</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p} name={p} />
        ))}
      </div>
    </section>
  );
}
