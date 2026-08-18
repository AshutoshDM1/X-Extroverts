'use client';

import React from 'react';
import { Sparkles, Award, ShieldCheck, MessageCircle } from 'lucide-react';
import { Section } from '@/Shared/Seaction/Section';
import { cn } from '@/lib/utils';

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  glowColor: 'purple' | 'orange';
}

const features: ServiceItem[] = [
  {
    icon: Sparkles,
    title: 'Themed Meetups',
    description: 'Curated city parties from music jams to game nights.',
    glowColor: 'purple',
  },
  {
    icon: Award,
    title: 'Vibe Tokens',
    description: 'Earn HVTs and level up from Bronze to VIP Club.',
    glowColor: 'orange',
  },
  {
    icon: ShieldCheck,
    title: 'Private Circles',
    description: 'Verified profiles and girls-exclusive safe spaces.',
    glowColor: 'purple',
  },
  {
    icon: MessageCircle,
    title: 'Live Moments',
    description: 'Real-time group chats and shared memory feeds.',
    glowColor: 'orange',
  },
];

export function PerformanceSolutions() {
  return (
    <Section id="features" size="default" padding="default">
      {/* Section Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium tracking-wide text-zinc-400">Features</span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.15]">
          Designed for connection
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-400 font-normal">
          Simple tools to host, discover, and vibe with your crowd.
        </p>
      </div>

      {/* 2x2 Minimal Feature Grid */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className={cn(
                'group relative min-h-60 sm:min-h-64 w-full overflow-hidden rounded-3xl sm:rounded-2xl border border-white/10 bg-zinc-950 p-8 sm:p-10 text-center transition-all duration-300',
                'flex flex-col items-center justify-center hover:border-white/25 active:scale-[0.99] shadow-2xl',
              )}
            >
              {/* CSS Ambient Gradient Background with High-Fidelity Grain Texture */}
              <div
                className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
                aria-hidden="true"
              >
                {feature.glowColor === 'purple' ? (
                  <>
                    <div className="absolute -bottom-16 -left-12 h-64 w-64 rounded-full bg-[#5b1ce6]/35 blur-[75px] transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute -top-16 -right-12 h-64 w-64 rounded-full bg-[#3b0764]/30 blur-[75px]" />
                  </>
                ) : (
                  <>
                    <div className="absolute -bottom-16 -right-12 h-64 w-64 rounded-full bg-[#c2410c]/35 blur-[75px] transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute -top-16 -left-12 h-64 w-64 rounded-full bg-[#7c2d12]/25 blur-[75px]" />
                  </>
                )}

                {/* Tactile Micro-Grain Stipple Noise */}
                <svg
                  className="absolute inset-0 h-full w-full opacity-10 mix-blend-overlay"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <filter id={`card-noise-${index}`} x="0%" y="0%" width="100%" height="100%">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="1.3"
                      numOctaves="4"
                      stitchTiles="stitch"
                      result="noise"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="1 0 0 0 0
                              0 1 0 0 0
                              0 0 1 0 0
                              0 0 0 3.5 -0.9"
                      in="noise"
                      result="stipple"
                    />
                  </filter>
                  <rect
                    width="100%"
                    height="100%"
                    filter={`url(#card-noise-${index})`}
                    fill="#ffffff"
                  />
                </svg>

                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/40" />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Coral Icon */}
                <div className="mb-4 flex size-12 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-8 sm:size-9 text-[#fba282] stroke-2" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="mt-2 max-w-xs sm:max-w-sm text-xs sm:text-sm leading-relaxed text-zinc-400 font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default PerformanceSolutions;
