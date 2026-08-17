'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroMockupProps {
  imageSrc?: string;
  className?: string;
}

export function HeroMockup({
  imageSrc = '/mockup/image3-Photoroom.png',
  className,
}: HeroMockupProps) {
  return (
    <div
      className={cn('relative mt-10 w-full max-w-sm sm:max-w-md mx-auto select-none', className)}
    >
      {/* Subtle Ambient Radial Bloom behind Phone */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-full bg-linear-to-r from-[#5b1ce6]/30 via-[#c2410c]/20 to-[#5b1ce6]/30 blur-3xl -z-10 opacity-70"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex items-center justify-center">
        <Image
          src={imageSrc}
          alt="Extroverts App Mobile Interface"
          width={400}
          height={700}
          className="w-full max-w-90 h-auto object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.95)] scale-110"
          priority
        />
      </div>
    </div>
  );
}

export default HeroMockup;
