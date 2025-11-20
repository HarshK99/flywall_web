import Link from "next/link";

export default function Header() {
  const nav = [
    "Home",
    "About Us",
    "Products",
    "Contact Us",
  ];

  return (
    <header className="w-full border-b bg-white/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className="h-10 w-40 overflow-hidden rounded-md bg-white/0 flex items-center">
              <img src="/logo.png" alt="Flywall logo" width={44} height={44} className="object-contain" />
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link key={n} href="#" className="text-zinc-700 hover:text-zinc-900">
              {n}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">

          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
          >
            Enquiry
          </a>
        </div>
      </div>
    </header>
  );
}
