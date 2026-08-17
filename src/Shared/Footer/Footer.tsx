'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const pageLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '#blogs' },
    { label: '404', href: '/404' },
  ];

  const infoLinks = [
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
    { label: 'Legal', href: '/legal' },
    { label: 'Coming soon', href: '/coming-soon' },
  ];

  return (
    <footer className={cn('relative w-full bg-black px-4 sm:px-8 pb-8 pt-12 sm:pt-16', className)}>
      {/* Large Rounded Card Container */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] sm:rounded-[48px] border border-white/10 bg-zinc-950 px-8 pt-12 pb-2 sm:px-14 sm:pt-16 sm:pb-4 lg:px-16 lg:pt-20">
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
          {/* Left Headline */}
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.15]">
              Ready to scale
              <br />
              your brand?
            </h2>
          </div>

          {/* Right Nav Columns */}
          <div className="flex gap-16 sm:gap-24">
            {/* Pages Column */}
            <div>
              <h3 className="text-sm font-medium text-white tracking-tight mb-4">Pages</h3>
              <ul className="flex flex-col gap-2.5">
                {pageLinks.map((link) => (
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

            {/* Information Column */}
            <div>
              <h3 className="text-sm font-medium text-white tracking-tight mb-4">Information</h3>
              <ul className="flex flex-col gap-2.5">
                {infoLinks.map((link) => (
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

        {/* Responsive Scalable SVG Big Text with Masked Stipple Noise */}
        <div className="pointer-events-none relative mt-12 sm:mt-16 flex w-full items-end justify-center overflow-hidden select-none">
          <svg
            viewBox="0 0 140 28"
            className="mx-auto w-full max-w-7xl px-2 sm:px-4"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Linear Gradient for Extroverts Title */}
              <linearGradient id="footerTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a14828" />
                <stop offset="48%" stopColor="#7c3aed" />
                <stop offset="75%" stopColor="#4f1db8" />
                <stop offset="100%" stopColor="#311075" />
              </linearGradient>

              {/* Noise Texture Filter Strictly Masked to Letterforms */}
              <filter id="footerTextNoise" x="-10%" y="-10%" width="120%" height="120%">
                {/* 1. Generate Noise */}
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.85"
                  numOctaves="3"
                  stitchTiles="stitch"
                  result="rawNoise"
                />
                {/* 2. Mask Noise strictly inside letter alpha */}
                <feComposite in="rawNoise" in2="SourceAlpha" operator="in" result="maskedNoise" />
                {/* 3. Blend masked noise over text graphic */}
                <feBlend in="maskedNoise" in2="SourceGraphic" mode="overlay" />
              </filter>
            </defs>

            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              fill="url(#footerTextGrad)"
              filter="url(#footerTextNoise)"
              className="font-sans font-medium tracking-tight"
              fontSize="24"
            >
              Extroverts
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
