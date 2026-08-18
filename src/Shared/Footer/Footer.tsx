'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { StoreBadges } from '@/Shared/Button/StoreBadges';
import { FooterFineGrainText } from './FooterFineGrainText';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const exploreLinks = [
    { label: 'Experiences', href: '/#experiences' },
    { label: 'Features', href: '/#features' },
    { label: 'Community', href: '/#results' },
    { label: 'FAQ', href: '/#faq' },
  ];

  const communityLinks = [
    { label: 'Themed Meetups', href: '/#features' },
    { label: 'Vibe Tokens (HVT)', href: '/#features' },
    { label: 'Private Circles', href: '/#features' },
    { label: 'Safety Guidelines', href: '/guidelines' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Community Standards', href: '/guidelines' },
  ];

  return (
    <footer className={cn('relative w-full bg-black px-4 sm:px-8 pb-8 pt-12 sm:pt-16', className)}>
      {/* Large Rounded Card Container */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] sm:rounded-[48px] border border-white/10 bg-zinc-950 px-8 pt-12 pb-4 sm:px-14 sm:pt-16 sm:pb-6 lg:px-16 lg:pt-20">
        {/* Subtle Ambient Radial Glows */}
        <div
          className="pointer-events-none absolute inset-0 select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Top-right warm amber bloom */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#9a3412]/15 blur-[100px]" />
          {/* Bottom center-left purple bloom */}
          <div className="absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-[#6d28d9]/20 blur-[100px]" />
        </div>

        {/* Top Content Row */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
          {/* Left Headline & Brand Info */}
          <div className="max-w-md">
            <span className="text-xs uppercase tracking-widest font-mono text-zinc-400">
              Join the Movement
            </span>
            <h2 className="mt-2 text-xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.15]">
              Turn city strangers into your crew
            </h2>
            <div className="mt-6 flex items-center justify-start">
              <StoreBadges />
            </div>
          </div>

          {/* Right Nav Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-14">
            {/* Explore Column */}
            <div>
              <h3 className="text-sm font-medium text-white tracking-tight mb-4">Explore</h3>
              <ul className="flex flex-col gap-2.5">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm font-normal text-zinc-400 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h3 className="text-sm font-medium text-white tracking-tight mb-4">Community</h3>
              <ul className="flex flex-col gap-2.5">
                {communityLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm font-normal text-zinc-400 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal / Info Column */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-medium text-white tracking-tight mb-4">Legal & Trust</h3>
              <ul className="flex flex-col gap-2.5">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm font-normal text-zinc-400 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Responsive Scalable Extroverts Big Text with High-Res Micro Grain */}
        <div className="pointer-events-none relative mt-12 sm:mt-16 flex w-full items-end justify-center overflow-hidden select-none">
          <FooterFineGrainText />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
