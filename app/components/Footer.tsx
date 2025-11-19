"use client";

export default function Footer() {
  return (
    <footer className="border-t bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="h-10 w-36 rounded-md bg-zinc-200 flex items-center justify-center font-semibold text-zinc-800">Logo</div>
            <p className="mt-3 text-sm text-zinc-600">Flywall uPVC windows — built to last.</p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-800">Products</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>Windows</li>
              <li>Doors</li>
              <li>Discover Fenesta</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-800">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>Careers</li>
              <li>Privacy Policies</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div id="contact">
            <h4 className="font-semibold text-zinc-800">Contact</h4>
            <div className="mt-3 text-sm text-zinc-600">
              <div>Phone: <a href="tel:+1800123456" className="text-zinc-700">+1 800 123 456</a></div>
              <div className="mt-1">Email: <a href="mailto:info@flywall.com" className="text-zinc-700">info@flywall.com</a></div>
            </div>

              <form className="mt-4 flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input placeholder="Your name" className="rounded-md border px-3 py-2 text-sm" />
                <input placeholder="Email" className="rounded-md border px-3 py-2 text-sm" />
                <button className="mt-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-primary-dark">Send Enquiry</button>
              </form>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Flywall. All rights reserved.</div>
      </div>
    </footer>
  );
}
