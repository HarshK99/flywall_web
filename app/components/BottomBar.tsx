"use client"

import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { CONTACT_PHONE_1 } from '../config/siteText';

export default function BottomBar() {
  return (
    <nav
      role="navigation"
      aria-label="Mobile bottom actions"
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t shadow-lg"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' ,backgroundColor: 'var(--bg-dark)' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
            href={`tel:${CONTACT_PHONE_1.replace(/[^0-9+]/g, '')}`}
            className="w-1/2 inline-flex items-center gap-3 justify-center py-3 text-sm font-medium text-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={`Call ${CONTACT_PHONE_1}`}
          >
            <FaPhoneAlt className="h-5 w-5 text-primary" aria-hidden />
            <span className="text-white">CALL</span>
          </a>

          <a
            href="#contact"
            className="w-1/2 inline-flex items-center gap-3 justify-center py-3 text-sm font-medium text-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Enquire — open contact form"
          >
            <FaEnvelope className="h-5 w-5 text-primary" aria-hidden />
            <span className="text-white">ENQUIRE</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
