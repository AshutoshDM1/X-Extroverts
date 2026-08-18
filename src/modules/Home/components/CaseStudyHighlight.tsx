'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/Shared/Seaction/Section';
import { cn } from '@/lib/utils';

interface CaseStudyHighlightProps {
  imageSrc?: string;
  className?: string;
}

export function CaseStudyHighlight({ imageSrc, className }: CaseStudyHighlightProps) {
  const stats = [
    { number: '15+', label: 'Curated Themes' },
    { number: '10k+', label: 'Tokens Earned' },
    { number: '500+', label: 'City Hangouts' },
  ];

  return (
    <Section size="default" padding="default" className={cn('bg-black', className)}>
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image Container with Mockup */}
        <div className="relative aspect-4/3 w-full lg:col-span-3">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt="Community hangout preview"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/mockup/image2-Photoroom.png"
                alt="App screenshot showing community hangouts"
                width={360}
                height={600}
                className="relative top-0 md:top-10 object-contain h-100 sm:h-150 w-auto"
                priority
              />
            </div>
          )}
        </div>

        {/* Right Column: Content & Stats */}
        <div className="flex flex-col justify-center lg:col-span-5">
          {/* Tagline */}
          <span className="text-[11px] font-medium uppercase tracking-wide text-zinc-400">
            COMMUNITY SPOTLIGHT
          </span>

          {/* Main Headline */}
          <h2 className="mt-4 text-2xl sm:text-2xl lg:text-4xl font-normal tracking-tight text-white leading-[1.15]">
            Strangers today.
            <br />
            Your crew tomorrow.
          </h2>

          {/* Description Paragraph */}
          <p className="mt-5 text-sm leading-relaxed text-zinc-400 font-normal max-w-xl">
            From midnight food cravings to weekend music jams, Extroverts brings together people who
            share your vibe in safe, real-world city meetups.
          </p>

          {/* Stats Metrics Row */}
          <div className="mt-12 flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex-1 min-w-20">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
                    {stat.number}
                  </div>

                  <div className="mt-2 text-xs sm:text-sm text-zinc-400 font-normal">
                    {stat.label}
                  </div>
                </div>
                {index < stats.length - 1 && (
                  <div
                    key={`divider-${index}`}
                    className="hidden sm:block h-14 w-px bg-white/15 shrink-0"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CaseStudyHighlight;
