import React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// Meta (Infinity) Outline Icon
export function MetaIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-10 text-[#fba282]', className)}
      {...props}
    >
      <path d="M12 12c-2-2.8-4-4.5-6.5-4.5A4.5 4.5 0 001 12a4.5 4.5 0 004.5 4.5c2.5 0 4.5-1.7 6.5-4.5zm0 0c2 2.8 4 4.5 6.5 4.5A4.5 4.5 0 0023 12a4.5 4.5 0 00-4.5-4.5c-2.5 0-4.5 1.7-6.5 4.5z" />
    </svg>
  );
}

// Google Ads (Loop Triangle) Outline Icon
export function GoogleAdsIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-10 text-[#fba282]', className)}
      {...props}
    >
      {/* Upper diagonal pill */}
      <line x1="5.5" y1="18.5" x2="16.5" y2="4.5" />
      {/* Right diagonal loop */}
      <path d="M16.5 4.5a3 3 0 014.2 4.2L12 19.5a3 3 0 01-4.2-4.2l4.5-6" />
      {/* Bottom circle indicator */}
      <circle cx="6" cy="18" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Conversion Funnel Outline Icon (Users + Funnel)
export function ConversionFunnelIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-10 text-[#fba282]', className)}
      {...props}
    >
      {/* Top small users */}
      <circle cx="12" cy="4" r="1.5" />
      <path d="M9.5 8a2.5 2.5 0 015 0" />
      <circle cx="7" cy="5" r="1.2" />
      <path d="M5 8.5a2 2 0 013 0" />
      <circle cx="17" cy="5" r="1.2" />
      <path d="M16 8.5a2 2 0 013 0" />

      {/* Funnel */}
      <path d="M4 11h16l-6 6.5v3.5l-4-2v-1.5L4 11z" />
    </svg>
  );
}

// TikTok Outline Icon
export function TikTokIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-10 text-[#fba282]', className)}
      {...props}
    >
      <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
    </svg>
  );
}
