"use client"

import React, { useState } from 'react';

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
  const [form, setForm] = useState<ContactFormData>({
    name: initial?.name ?? '',
    email: initial?.email ?? '',
    mobile: initial?.mobile ?? '+91 ',
    color: initial?.color ?? '',
    details: initial?.details ?? '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.mobile.trim()) return;
    try {
      setSubmitting(true);
      if (onSubmit) await onSubmit(form);
      // simulate
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className={`rounded-lg border bg-white p-6 shadow-sm ${className}`}>
        <div className="text-green-600 font-semibold">Thank you — we'll contact you shortly.</div>
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border bg-white p-6 shadow-sm">
        <div className="sf-row sf-name">
          <label htmlFor="FirstName" className="sr-only">Name</label>
          <input
            id="FirstName"
            name="FirstName"
            placeholder="Name *"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            required
            className="sf-input mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        <div className="sf-row sf-email">
          <label htmlFor="Email" className="sr-only">Email</label>
          <input
            id="Email"
            name="Email"
            type="email"
            placeholder="Email *"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            required
            className="sf-input mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        <div className="sf-row sf-mobile">
          <label htmlFor="Mobile" className="sr-only">Mobile Number</label>
          <input
            id="Mobile"
            name="Mobile"
            placeholder="Mobile Number *"
            autoComplete="tel"
            value={form.mobile}
            onChange={(e) => update('mobile', e.target.value)}
            required
            className="sf-input mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        <div className="sf-row sf-color">
          <label htmlFor="Color" className="sr-only">Color Preference</label>
          <select
            id="Color"
            name="Color"
            value={form.color}
            onChange={(e) => update('color', e.target.value)}
            className="sf-input mt-1 w-full rounded-md border px-3 py-2"
          >
            <option value="">Choose a color</option>
            <option>White</option>
            <option>Wood Finish</option>
            <option>Anthracite</option>
            <option>Custom</option>
          </select>
        </div>

        <div className="sf-row sf-details">
          <label htmlFor="Details" className="sr-only">Requirement Details</label>
          <textarea
            id="Details"
            name="Details"
            placeholder="Requirement Details"
            value={form.details}
            onChange={(e) => update('details', e.target.value)}
            rows={4}
            className="sf-input mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        <div className="sf-row sf-submit">
          <button type="submit" disabled={submitting} className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow disabled:opacity-60">
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}
