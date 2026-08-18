'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface StoreBadgesProps {
  className?: string;
  imageClassName?: string;
}

export function StoreBadges({ className, imageClassName }: StoreBadgesProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center border border-muted rounded-lg overflow-hidden',
        className,
      )}
    >
      <a
        href="https://play.google.com/store/apps/details?id=com.pro.nubpack"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block "
      >
        <Image
          src="/play-store.png"
          alt="Get it on Google Play"
          width={180}
          height={54}
          className={cn('h-11 sm:h-12 w-auto object-contain', imageClassName)}
          priority
        />
      </a>
    </div>
  );
}

export default StoreBadges;
