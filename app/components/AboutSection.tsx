export default function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h3 className="text-2xl font-semibold text-zinc-900">About Flywall uPVC Windows</h3>
          <p className="mt-4 text-zinc-700">
            Flywall uPVC windows are engineered for longevity. Key features
            include enhanced durability to withstand weathering, excellent
            thermal performance to improve energy efficiency, and options for
            double glazing to optimise insulation. Our systems are designed for
            easy customization and maintenance.
          </p>
          <ul className="mt-4 list-disc pl-6 text-zinc-700">
            <li>High durability and corrosion resistance</li>
            <li>Energy efficiency and thermal insulation</li>
            <li>Double glazing options for soundproofing</li>
            <li>Low maintenance and long life</li>
          </ul>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        <div className="rounded-lg bg-zinc-100 p-6 text-zinc-500">
          <div className="h-48 w-full rounded-md bg-zinc-200 flex items-center justify-center">
            About Image
          </div>
        </div>
      </div>
    </section>
  );
}
