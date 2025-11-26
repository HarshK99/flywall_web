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
      <form onSubmit={handleSubmit} className="space-y-6 rounded-lg  bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {/* <label htmlFor="FirstName" className="block text-sm font-medium text-zinc-700">Full name</label> */}
            <input
              id="FirstName"
              name="FirstName"
              placeholder="Full Name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            {/* <label htmlFor="Email" className="block text-sm font-medium text-zinc-700">Email address</label> */}
            <input
              id="Email"
              name="Email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            {/* <label htmlFor="Mobile" className="block text-sm font-medium text-zinc-700">Mobile</label> */}
            <input
              id="Mobile"
              name="Mobile"
              placeholder="+91 9XXXXXXXXX"
              autoComplete="tel"
              value={form.mobile}
              onChange={(e) => update('mobile', e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            {/* <label htmlFor="Color" className="block text-sm font-medium text-zinc-700">Color preference</label> */}
            <select
              id="Color"
              name="Color"
              value={form.color}
              onChange={(e) => update('color', e.target.value)}
              className={`mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 ${form.color === "" ? "text-zinc-400" : "text-zinc-900"}`}

            >
              <option value="" disabled hidden>Select a color</option>
                <option>Dark Oak</option>
                <option>Golden Oak</option>
                <option>Grey</option>
                <option>Silver</option>
                <option>Walnut</option>
                <option>Black</option>

            </select>
          </div>
        </div>

        <div>
          <label htmlFor="Details" className="block text-sm font-medium text-zinc-700">Requirement details</label>
          <textarea
            id="Details"
            name="Details"
            placeholder="Briefly describe your requirement (dimensions, location, timeline)"
            value={form.details}
            onChange={(e) => update('details', e.target.value)}
            rows={5}
            className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="flex items-center justify-between gap-4">

            <button type="submit" disabled={submitting} className="inline-flex items-center rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white shadow disabled:opacity-60">
              {submitting ? 'Submitting...' : 'Send enquiry'}
            </button>

        </div>
      </form>
    </div>
  );
}
