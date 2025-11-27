"use client"

import React from 'react';

type Props = {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function ContactItem({ icon, label, children, href, className = '' }: Props) {
  return (
    <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
      <div className="text-primary">{icon}</div>
      <div>
        <div className="text-xs text-zinc-500">{label}</div>
        {href ? (
          <a href={href} className="font-semibold text-zinc-900 block">
            {children}
          </a>
        ) : (
          <div className="text-zinc-600">{children}</div>
        )}
      </div>
    </div>
  );
}
