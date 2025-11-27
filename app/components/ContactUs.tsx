"use client"

import React from 'react';
import ContactForm from './ContactForm';
import Card from './Card';

export default function ContactUs() {
  return (
    <section id="contact" className="section-neutral">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold">Get in Touch</h2>
          <p className="mt-2 text-zinc-600 constrain-text mx-auto">For enquiries, quotes or to schedule a free consultation our team is ready to assist. Fill the form or reach us via phone or email.</p>
        </div>

        <div>
          <Card className="p-6">
            <h3 className="text-xl font-semibold">Send an Enquiry</h3>
            <p className="mt-2 text-sm text-zinc-600">Share a few details and we'll get back within one business day.</p>
          </Card>

          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
 
