"use client"

import React from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE_2, CONTACT_PHONE_1, FOOTER_ADDRESS } from '../config/siteText';
import ContactForm from './ContactForm';
import Card from './Card';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactItem from './ContactItem';

export default function ContactUs() {
  return (
    <section id="contact" className="section-neutral">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold">Get in Touch</h2>
          <p className="mt-2 text-zinc-600 constrain-text mx-auto">For enquiries, quotes or to schedule a free consultation our team is ready to assist. Fill the form or reach us via phone or email.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <Card className="p-6">
              <h3 className="text-xl font-semibold">Send an enquiry</h3>
              <p className="mt-2 text-sm text-zinc-600">Share a few details and we'll get back within one business day.</p>
            </Card>
              <div className="mt-6">
            <ContactForm />
              </div>
          </div>

          <aside className="text-sm text-zinc-700">
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">Contact Details</h3>

              <div className="grid grid-cols-1 gap-3">
                <ContactItem icon={<FaPhoneAlt />} label="Phone">
                    <>
                      <a href={`tel:${CONTACT_PHONE_2.replace(/[^0-9+]/g, '')}`} className="font-semibold text-zinc-900">{CONTACT_PHONE_2}</a>
                      <span className="text-zinc-500">, </span>
                      <a href={`tel:${CONTACT_PHONE_1.replace(/[^0-9+]/g, '')}`} className="font-semibold text-zinc-900">{CONTACT_PHONE_1}</a>
                    </>
                  </ContactItem>

                <ContactItem icon={<FaEnvelope />} label="Email" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </ContactItem>

                <ContactItem icon={<FaMapMarkerAlt />} label="Head Office">
                  {FOOTER_ADDRESS}
                </ContactItem>
              </div>

              <div className="pt-4 border-t">
                <div className="text-sm text-zinc-600">Office hours</div>
                <div className="font-medium">Mon - Sat: 9:00 AM - 6:00 PM</div>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}
 
