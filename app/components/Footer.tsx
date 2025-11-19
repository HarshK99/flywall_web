"use client";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-200 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-md bg-white/0">
                <Image src="/logo.png" alt="Flywall logo" width={40} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <div>
                <div className="font-semibold text-zinc-100">Flywall</div>
                <div className="text-sm text-zinc-300">North East trusted source for uPVC windows and doors</div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h4 className="font-semibold text-zinc-100">Address</h4>
            <div className="mt-3 text-sm">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  "NORTH EAST FIBER, bor road, near raju parking, guwahati, 781035"
                )}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-start gap-2 text-zinc-300 hover:text-zinc-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 text-zinc-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                <span>NORTH EAST FIBER, bor road, near raju parking, guwahati, 781035</span>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-zinc-100">Contact</h4>
            <div className="mt-3 text-sm text-zinc-300 space-y-2">
              <div>
                <a href="tel:+919434577875" className="inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 text-zinc-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                  </svg>
                  <span>+91 9434577875</span>
                </a>
              </div>
              <div>
                <a href="tel:+915465465467" className="inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 text-zinc-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                  </svg>
                  <span>+91 5465465467</span>
                </a>
              </div>
              <div>
                <a href="mailto:support@flywall.example" className="inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 text-zinc-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>support@flywall.example</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 text-center text-xs text-zinc-500">© {year}. Flywall</div>
      </div>
    </footer>
  );
}
