"use client"

import React from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE_2, CONTACT_PHONE_1, FOOTER_ADDRESS } from '../config/siteText';
import ContactForm from './ContactForm';
import Card from './Card';

export default function ContactUs() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-extrabold">Get in Touch With Us</h2>
          <p className="mt-2 text-zinc-600">Our team is ready to answer your queries and provide tailored solutions.</p>

          <div className="mt-6">
            <Card className="p-4"><ContactForm /></Card>
          </div>
        </div>

        <aside className="text-sm text-zinc-700">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Contact Details</h3>
            <div className="mt-3 space-y-2">
              <div>Toll-Free: <a href={`tel:${CONTACT_PHONE_2.replace(/[^0-9+]/g, '')}`} className="font-semibold text-zinc-900">{CONTACT_PHONE_2}</a></div>
              <div>Direct: <a href={`tel:${CONTACT_PHONE_1.replace(/[^0-9+]/g, '')}`} className="font-semibold text-zinc-900">{CONTACT_PHONE_1}</a></div>
              <div>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-zinc-900">{CONTACT_EMAIL}</a></div>
              <div>Fax: <span className="text-zinc-600">(033) 1234 5678</span></div>

              <h4 className="mt-4 font-semibold">Location</h4>
              <div className="mt-1">Corporate Head Office: <div className="text-zinc-600">{FOOTER_ADDRESS}</div></div>
            </div>
          </Card>
        </aside>
      </div>
    </section>
  );
}
