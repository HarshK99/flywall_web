"use client"

import React from 'react';

type CardProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
};

export default function Card({ as: Component = 'div', className = '', children, ...rest }: CardProps) {
  const cls = `card ${className}`.trim();
  // React.ElementType covers intrinsic and custom components
  // @ts-ignore allow dynamic element type with rest props
  return (
    <Component className={cls} {...rest}>
      {children}
    </Component>
  );
}
