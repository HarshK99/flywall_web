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
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { SOCIAL_LINKS, FOOTER_GOOGLE_REVIEW } from '../config/siteText';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 text-zinc-200 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-7">
        <div className="grid grid-cols-1 lg:gap-30 gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
                className="inline-flex items-start gap-2 text-zinc-300 hover:text-primary"
              >
                <FaMapMarkerAlt className="h-4 w-4 flex-shrink-0 text-zinc-300 hover:text-primary" aria-hidden />
                <span>{FOOTER_ADDRESS}</span>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-zinc-100">Contact</h4>
            <div className="mt-3 text-sm text-zinc-300 space-y-2">
              <div>
                <a href={`tel:${FOOTER_PHONE_1.replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-2 text-zinc-300 hover:text-primary">
                  <FaPhoneAlt className="h-4 w-4 flex-shrink-0 text-zinc-300 hover:text-primary" aria-hidden />
                  <span>{FOOTER_PHONE_1}</span>
                </a>
              </div>
              <div>
                <a href={`tel:${FOOTER_PHONE_2.replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-2 text-zinc-300 hover:text-primary">
                  <FaPhoneAlt className="h-4 w-4 flex-shrink-0 text-zinc-300 hover:text-primary" aria-hidden />
                  <span>{FOOTER_PHONE_2}</span>
                </a>
              </div>
              <div>
                <a href={`mailto:${FOOTER_SUPPORT_EMAIL}`} className="inline-flex items-center gap-2 text-zinc-300 hover:text-primary">
                  <FaEnvelope className="h-4 w-4 flex-shrink-0 text-zinc-300 hover:text-primary" aria-hidden />
                  <span>{FOOTER_SUPPORT_EMAIL}</span>
                </a>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-sm font-semibold text-zinc-100 mb-2">Follow & Reviews</div>
              <div className="flex items-center gap-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FOOTER_MAP_QUERY)}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-md text-zinc-300 hover:text-primary"
                  aria-label="Open in Google Maps"
                >
                  <FaMapMarkerAlt className="h-4 w-4" />
                </a>

                {/* Instagram */}
                {(() => {
                  const ig = SOCIAL_LINKS.find((s) => s.name.toLowerCase() === 'instagram');
                  return ig ? (
                    <a href={ig.href} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center h-9 w-9 rounded-md text-zinc-300 hover:text-primary" aria-label="Instagram">
                      <FaInstagram className="h-4 w-4" />
                    </a>
                  ) : null;
                })()}

                {/* Facebook */}
                {(() => {
                  const fb = SOCIAL_LINKS.find((s) => s.name.toLowerCase() === 'facebook');
                  return fb ? (
                    <a href={fb.href} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center h-9 w-9 rounded-md text-zinc-300 hover:text-primary" aria-label="Facebook">
                      <FaFacebookF className="h-4 w-4" />
                    </a>
                  ) : null;
                })()}

                {/* Google Review */}
                {FOOTER_GOOGLE_REVIEW ? (
                  <a href={FOOTER_GOOGLE_REVIEW} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center h-9 w-9 rounded-md text-zinc-300 hover:text-primary" aria-label="Google Review">
                    <FaGoogle className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="mt-8 bg-zinc-900 text-center text-xs text-zinc-500 py-4">{FOOTER_COPYRIGHT.replace('2025', String(year))}</div>
    </footer>
  );
}
