import { cn } from '@/lib/utils';
import React from 'react';

interface AmbientGradientProps {
  className?: string;
  variant?: 'hero-mesh' | 'banner' | 'strip';
  children?: React.ReactNode;
}

export function AmbientGradient({
  className,
  variant = 'hero-mesh',
  children,
}: AmbientGradientProps) {
  if (variant === 'strip') {
    return (
      <div
        className={cn(
          'w-full h-20 bg-linear-to-r from-black via-[#632a1c] via-35% via-[#5b1ce6] via-55% via-[#1e0a4f] via-80% to-black',
          className,
        )}
      >
        {children}
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div
        className={cn(
          'relative w-full overflow-hidden bg-linear-to-r from-black via-[#5c2518] via-35% via-[#541ce0] via-55% via-[#1c084a] via-80% to-black',
          className,
        )}
      >
        {children}
      </div>
    );
  }

  // Default: hero-mesh - seamless full-height ambient glow with zero hard cuts
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden select-none z-0',
        className,
      )}
      aria-hidden="true"
    >
      {/* Full-width glow container spanning bottom-to-middle with no clipping cutoff */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left Warm Amber/Copper Orb */}
        <div className="absolute top-[45%] left-[22%] sm:left-[30%] -translate-x-1/2 -translate-y-1/2 h-[280px] sm:h-[480px] w-[360px] sm:w-[480px] rounded-full bg-[#bf5d35] blur-[110px] opacity-75" />

        {/* Right Vibrant Royal Violet/Indigo Orb */}
        <div className="absolute top-[42%] left-[65%] sm:left-[58%] -translate-x-1/2 -translate-y-1/2 h-[420px] sm:h-[540px] w-[460px] sm:w-[580px] rounded-full bg-[#5d1be8] blur-[120px] opacity-85" />

        {/* Central Fusion Glow (Magenta/Plum Core) */}
        <div className="absolute top-[46%] left-[45%] -translate-x-1/2 -translate-y-1/2 h-[300px] sm:h-[280px] w-[320px] sm:w-[400px] rounded-full bg-[#8a24a6] blur-[90px] opacity-60" />

        {/* Wide Horizontal Base Feathering */}
        <div className="absolute inset-x-0 bottom-0 top-[30%] bg-linear-to-r from-black via-[#5e271a]/30 via-34% via-[#5b1ce6]/40 via-55% via-[#1c084a]/25 via-78% to-black blur-[80px] opacity-80" />

        {/* Subtle Grain / Stipple Texture Matching background.png */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="ambient-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#ambient-noise)" />
        </svg>
      </div>

      {children}
    </div>
  );
}

export default AmbientGradient;
