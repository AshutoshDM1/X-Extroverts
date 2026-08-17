'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/Shared/Seaction/Section';
import { cn } from '@/lib/utils';

interface CampaignCardProps {
  title: string;
  metric: string;
  imageSrc: string;
  className?: string;
  invert?: boolean;
  inverted?: boolean;
}

function CampaignCard({ title, metric, imageSrc, className, invert, inverted }: CampaignCardProps) {
  const isFlipped = invert || inverted;

  return (
    <div
      className={cn(
        'group relative w-full overflow-hidden rounded-3xl sm:rounded-[32px] transition-all duration-300',
        'aspect-3/4 sm:aspect-4/5 max-w-md mx-auto',
        className,
      )}
    >
      {/* Background Mockup Image */}
      <div className="absolute inset-0 select-none overflow-hidden flex items-end justify-center p-6 pb-0 bg-zinc-950">
        <Image
          src={imageSrc}
          alt={title}
          width={360}
          height={540}
          className={cn(
            'h-[88%] w-auto object-contain transition-transform duration-500',
            isFlipped
              ? '-scale-x-100 group-hover:-scale-x-105 group-hover:scale-y-105'
              : 'group-hover:scale-105',
          )}
        />
        {/* Top Dark Gradient for Title Legibility */}
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Overlay Content at Top */}
      <div className="relative z-10 flex flex-col items-center p-6 pt-7 sm:pt-8 sm:px-8 text-center">
        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">{title}</h3>
        <p className="mt-1 text-xs sm:text-sm text-zinc-300 font-normal">{metric}</p>
      </div>
    </div>
  );
}

export function CampaignResults() {
  return (
    <Section id="experiences" size="default" padding="default">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Top-Aligned Card 1 */}
        <div className="w-full flex justify-center lg:justify-start">
          <CampaignCard
            title="City Hangouts & Parties"
            metric="15+ Themes & Custom Capacities"
            imageSrc="/mockup/image1-Photoroom.png"
          />
        </div>

        {/* Right Column: Title Header + Bottom Card 2 */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Section Header Content */}
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-wider font-medium text-zinc-400">
              Experiences
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white leading-[1.15] font-medium">
              Real connections.
              <br />
              Unforgettable hangouts.
            </h2>
            <p className="mt-4 text-sm max-w-sm leading-relaxed text-zinc-400 font-normal">
              Find your crew, explore curated city parties, and turn spontaneous moments into
              lifelong memories.
            </p>
          </div>

          {/* Card 2 Positioned Below the Header with Inverted/Mirrored Phone Angle */}
          <div className="mt-12 lg:mt-16 w-full flex justify-center lg:justify-start">
            <CampaignCard
              title="Vibe Tokens & Community"
              inverted
              metric="Bronze to VIP Club Status"
              imageSrc="/mockup/image2-Photoroom.png"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CampaignResults;
