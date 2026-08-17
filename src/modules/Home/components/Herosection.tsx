'use client';

import { Section } from '@/Shared/Seaction/Section';
import HeroBackground from '@/Shared/Background/HeroBackground';
import { WaitlistButton } from '@/Shared/Button/WaitlistButton';
import { Particles } from '@/components/ui/particles';

export function Herosection() {
  return (
    <Section
      size="sm"
      padding="none"
      className="min-h-[91vh] flex flex-col items-center justify-center text-center py-24"
    >
      {/* Background Ambient Glow */}
      <HeroBackground />

      {/* Interactive Particles Layer */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={70}
        ease={70}
        size={0.7}
        color="#ffffff"
        refresh
      />

      {/* Main Foreground Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-1.5 backdrop-blur-md transition-all hover:border-white/25">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-300">
            STRANGERS. HANGOUTS. MEMORIES.
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mt-8 text-2xl font-normal tracking-tight text-white sm:text-3xl md:text-5xl lg:text-6xl leading-[1.15]">
          Turn city strangers into
          <br />
          your real-world crew
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-base text-zinc-400 sm:text-lg leading-relaxed font-normal">
          Discover themed meetups, host spontaneous hangouts, and connect with people who share your
          authentic vibe.
        </p>
        {/* CTA Button */}
        <div className="mt-10">
          <WaitlistButton href="#signup" text="SignUp Now" />
        </div>
      </div>
    </Section>
  );
}

export default Herosection;
