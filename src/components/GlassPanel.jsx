import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function GlassPanel({ children, className, variant = 'light' }) {
  const variants = {
    light: 'glass-panel',
    heavy: 'glass-panel-heavy',
  };

  return (
    <div className={cn(
      'rounded-2xl p-4',
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
}
