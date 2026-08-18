'use client';

import React from 'react';
import { FloatingBlob } from './FloatingBlob';
import { cn } from '@/lib/utils';

interface HeroFloatingBlobsProps {
  className?: string;
}

export function HeroFloatingBlobs({ className }: HeroFloatingBlobsProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 z-0 overflow-hidden select-none',
        className,
      )}
      aria-hidden="true"
    >
      {/* Top-Left Corner: ~40% cut-off */}
      <div className="absolute top-16 -left-16 sm:-top-20 sm:-left-20 lg:-top-10 lg:-left-24 opacity-80 sm:opacity-90">
        <FloatingBlob variant={1} size={340} animate={false} priority />
      </div>

      {/* Top-Right Corner: ~45% cut-off */}
      <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 lg:-top-24 lg:-right-24 opacity-80 sm:opacity-90">
        <FloatingBlob variant={2} size={360} animate={false} priority />
      </div>

      {/* Middle-Left Border: ~50% cut-off */}
      <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 -left-24 lg:-left-28 opacity-70 sm:opacity-85">
        <FloatingBlob variant={3} size={300} animate={false} />
      </div>

      {/* Middle-Right Border: ~50% cut-off */}
      <div className="hidden sm:block absolute top-[48%] -translate-y-1/2 -right-24 lg:-right-28 opacity-70 sm:opacity-85">
        <FloatingBlob variant={4} size={300} animate={false} />
      </div>

      {/* Bottom-Left Corner: ~40% cut-off */}
      <div className="absolute -bottom-20 -left-16 sm:-bottom-24 sm:-left-20 lg:-bottom-28 lg:-left-24 opacity-75 sm:opacity-85">
        <FloatingBlob variant={5} size={320} animate={false} />
      </div>

      {/* Bottom-Right Corner: ~40% cut-off */}
      <div className="absolute -bottom-20 -right-16 sm:-bottom-24 sm:-right-20 lg:-bottom-28 lg:-right-24 opacity-75 sm:opacity-85">
        <FloatingBlob variant={6} size={340} animate={false} />
      </div>
    </div>
  );
}

export default HeroFloatingBlobs;
