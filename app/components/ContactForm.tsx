"use client"

import React, { useState } from 'react';
import { CONTACT_EMAIL } from '../config/siteText';

export type ContactFormData = {
  name: string;
  email: string;
  mobile: string;
  color: string;
  details: string;
};

type Props = {
  initial?: Partial<ContactFormData>;
  onSubmit?: (data: ContactFormData) => Promise<void> | void;
  className?: string;
};

export default function ContactForm({ initial, onSubmit, className = '' }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append('_captcha', 'false');
    formData.append('_next', '');
    formData.append('_subject', 'New Contact Form Submission - Flywall');

    try {
      const response = await fetch(`https://formsubmit.co/${CONTACT_EMAIL}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={className}>
        <div className="rounded-lg bg-green-50 p-6 text-center">
          <h3 className="text-lg font-semibold text-green-800">Message Sent!</h3>
          <p className="mt-2 text-green-700">Thank you for your enquiry. We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-6 rounded-lg  bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {/* <label htmlFor="FirstName" className="block text-sm font-medium text-zinc-700">Full name</label> */}
            <input
              id="FirstName"
              name="name"
              placeholder="Full Name"
              autoComplete="name"
              required
              className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            {/* <label htmlFor="Email" className="block text-sm font-medium text-zinc-700">Email address</label> */}
            <input
              id="Email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
              className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            {/* <label htmlFor="Mobile" className="block text-sm font-medium text-zinc-700">Mobile</label> */}
            <input
              id="Mobile"
              name="mobile"
              placeholder="+91 9XXXXXXXXX"
              autoComplete="tel"
              required
              className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

        </div>

        <div>
          {/* <label htmlFor="Details" className="block text-sm font-medium text-zinc-700">Requirement details</label> */}
          <textarea
            id="Details"
            name="details"
            placeholder="Briefly describe your requirement (dimensions, location, timeline)"
            rows={5}
            className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="flex items-center justify-between gap-4">

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="inline-flex items-center rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white shadow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </button>

        </div>
      </form>
    </div>
  );
}
