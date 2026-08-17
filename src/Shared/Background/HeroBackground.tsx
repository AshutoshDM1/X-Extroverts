import Image from 'next/image';
import { cn } from '@/lib/utils';
import React from 'react';

interface HeroBackgroundProps {
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode;
  priority?: boolean;
  blurAmount?: string;
}

export function HeroBackground({
  className,
  imageClassName,
  children,
  priority = true,
}: HeroBackgroundProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 z-0 overflow-hidden select-none',
        className,
      )}
      aria-hidden="true"
    >
      <Image
        src="/background.png"
        alt="Ambient background glow"
        fill
        priority={priority}
        sizes="100vw"
        className={cn(
          'object-cover object-bottom opacity-85 scale-110 blur-lg transition-opacity duration-300',
          imageClassName,
        )}
      />
      {children}
    </div>
  );
}

export default HeroBackground;
