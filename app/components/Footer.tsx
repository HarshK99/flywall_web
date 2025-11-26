"use client";

import {
  FOOTER_BRAND,
  FOOTER_TAGLINE,
  FOOTER_MAP_QUERY,
  FOOTER_ADDRESS,
  FOOTER_PHONE_1,
  FOOTER_PHONE_2,
  FOOTER_SUPPORT_EMAIL,
  FOOTER_COPYRIGHT,
  LOGO_ALT,
} from "../config/siteText";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-200 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-md bg-white/0">
                <img src="/logo.png" alt={LOGO_ALT} width={48} height={48} className="object-contain" />
              </div>
              <div>
                <div className="font-semibold text-zinc-100">{FOOTER_BRAND}</div>
                <div className="text-sm text-zinc-300">{FOOTER_TAGLINE}</div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h4 className="font-semibold text-zinc-100">Address</h4>
              <div className="mt-3 text-sm">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FOOTER_MAP_QUERY)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-start gap-2 text-zinc-300 hover:text-zinc-100"
              >
                <FaMapMarkerAlt className="h-4 w-4 flex-shrink-0 text-zinc-300" aria-hidden />
                <span>{FOOTER_ADDRESS}</span>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-zinc-100">Contact</h4>
            <div className="mt-3 text-sm text-zinc-300 space-y-2">
              <div>
                <a href={`tel:${FOOTER_PHONE_1.replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-100">
                  <FaPhoneAlt className="h-4 w-4 flex-shrink-0 text-zinc-300" aria-hidden />
                  <span>{FOOTER_PHONE_1}</span>
                </a>
              </div>
              <div>
                <a href={`tel:${FOOTER_PHONE_2.replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-100">
                  <FaPhoneAlt className="h-4 w-4 flex-shrink-0 text-zinc-300" aria-hidden />
                  <span>{FOOTER_PHONE_2}</span>
                </a>
              </div>
              <div>
                <a href={`mailto:${FOOTER_SUPPORT_EMAIL}`} className="inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-100">
                  <FaEnvelope className="h-4 w-4 flex-shrink-0 text-zinc-300" aria-hidden />
                  <span>{FOOTER_SUPPORT_EMAIL}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 text-center text-xs text-zinc-500">{FOOTER_COPYRIGHT.replace('2025', String(year))}</div>
      </div>
    </footer>
  );
}
