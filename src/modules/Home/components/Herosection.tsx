'use client';

import { Section } from '@/Shared/Seaction/Section';
import HeroBackground from '@/Shared/Background/HeroBackground';
import { WaitlistButton } from '@/Shared/Button/WaitlistButton';
import { Particles } from '@/components/ui/particles';
import { HeroMockup } from './HeroMockup';

export function Herosection() {
  return (
    <Section
      size="default"
      padding="none"
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center pt-20 sm:pt-24 pb-12 overflow-hidden"
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
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4">
        {/* Top Pill Badge */}
        <div className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/4 px-5 py-1.5 backdrop-blur-md transition-all hover:border-white/25">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-300">
            STRANGERS. HANGOUTS. MEMORIES.
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mt-8 text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12]">
          Turn city strangers into
          <br />
          your real-world crew
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-lg text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Discover themed meetups, host spontaneous hangouts, and connect with people who share your
          authentic vibe.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <WaitlistButton showIcon href="/signup" text="SignUp Now" />
        </div>

        {/* Phone Mockup Component */}
        <HeroMockup className="hidden" />
      </div>
    </Section>
  );
}

export default Herosection;
