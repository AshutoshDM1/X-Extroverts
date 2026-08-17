'use client';

import React from 'react';
import { Section } from '@/Shared/Seaction/Section';
import { cn } from '@/lib/utils';

// Custom SVG Brand/Venue Logos matching the aesthetic
function Logo1({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity duration-200',
        className,
      )}
    >
      <svg className="h-6 w-6 fill-current" viewBox="0 0 32 32">
        <path d="M16 3C8.82 3 3 8.82 3 16c0 5.48 3.39 10.17 8.21 12.11L16 29l4.79-.89C25.61 26.17 29 21.48 29 16c0-7.18-5.82-13-13-13zm0 22.3L13 24l-1-4h8l-1 4-3 1.3zM22 17H10v-3h12v3zm1-6H9V8h14v3z" />
      </svg>
      <span className="text-base font-medium tracking-tight">Social Circles</span>
    </div>
  );
}

function Logo2({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity duration-200',
        className,
      )}
    >
      <svg className="h-6 w-6 fill-current" viewBox="0 0 32 32">
        <path d="M16 2L4 9v14l12 7 12-7V9L16 2zm0 4.2l8 4.6v9.4l-8 4.6-8-4.6v-9.4l8-4.6zm0 6a3.8 3.8 0 100 7.6 3.8 3.8 0 000-7.6z" />
      </svg>
      <span className="text-base font-medium tracking-tight">Music Jam Society</span>
    </div>
  );
}

function Logo3({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity duration-200',
        className,
      )}
    >
      <svg className="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 32 32">
        <path d="M16 4v24M16 8a4 4 0 014 4c0 2-4 4-4 4s-4-2-4-4a4 4 0 014-4zM16 16a4 4 0 014 4c0 2-4 4-4 4s-4-2-4-4a4 4 0 014-4z" />
      </svg>
      <span className="text-base font-medium tracking-wide uppercase">Board Clubs</span>
    </div>
  );
}

function Logo4({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity duration-200',
        className,
      )}
    >
      <svg className="h-6 w-6 fill-current" viewBox="0 0 32 32">
        <path d="M16 6a10 10 0 00-10 10h20A10 10 0 0016 6zm-10 13c1.5 0 2.5 1 4 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1v2c-1.5 0-2.5-1-4-1s-2.5 1-4 1-2.5-1-4-1-2.5 1-4 1-2.5-1-4-1v-2zm0 5c1.5 0 2.5 1 4 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1v2c-1.5 0-2.5-1-4-1s-2.5 1-4 1-2.5-1-4-1-2.5 1-4 1-2.5-1-4-1v-2z" />
      </svg>
      <span className="text-base font-medium tracking-tight">Sunset Hikers</span>
    </div>
  );
}

function Logo5({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity duration-200',
        className,
      )}
    >
      <svg className="h-6 w-6 fill-current" viewBox="0 0 32 32">
        <path d="M16 2A14 14 0 002 16a14 14 0 0010.5 13.5l3.5-6.5H10a8 8 0 010-16h12a8 8 0 016.9 12l4.8-1.5A14 14 0 0016 2zm-2.5 10.5L10 19h6a8 8 0 010 16H4a8 8 0 01-6.9-12l-4.8 1.5A14 14 0 0013.5 12.5z" />
      </svg>
      <span className="text-base font-medium tracking-tight">City Foodies</span>
    </div>
  );
}

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

export function BrandMarquee() {
  return (
    <Section padding="sm" noContainer className="select-none">
      {/* Title */}
      <div className="text-center mb-8">
        <p className="text-xs sm:text-sm font-medium tracking-wide text-zinc-400">
          Popular hangout spots & community circles
        </p>
      </div>

      {/* Marquee Track with Side Fades */}
      <div className="relative mx-auto flex w-full max-w-7xl items-center overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max shrink-0 animate-marquee items-center justify-around gap-16 pr-16">
          {logos.map((Logo, idx) => (
            <Logo key={`logo-1-${idx}`} className="text-zinc-300 shrink-0" />
          ))}
          {logos.map((Logo, idx) => (
            <Logo key={`logo-2-${idx}`} className="text-zinc-300 shrink-0" />
          ))}
          {logos.map((Logo, idx) => (
            <Logo key={`logo-3-${idx}`} className="text-zinc-300 shrink-0" />
          ))}
        </div>

        <div
          aria-hidden="true"
          className="flex w-max shrink-0 animate-marquee items-center justify-around gap-16 pr-16"
        >
          {logos.map((Logo, idx) => (
            <Logo key={`logo-dup-1-${idx}`} className="text-zinc-300 shrink-0" />
          ))}
          {logos.map((Logo, idx) => (
            <Logo key={`logo-dup-2-${idx}`} className="text-zinc-300 shrink-0" />
          ))}
          {logos.map((Logo, idx) => (
            <Logo key={`logo-dup-3-${idx}`} className="text-zinc-300 shrink-0" />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default BrandMarquee;
