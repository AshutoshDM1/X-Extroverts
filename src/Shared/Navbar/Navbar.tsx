'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/Shared/Logo/Logo';
import { WaitlistButton } from '@/Shared/Button/WaitlistButton';

const navLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'Features', href: '#features' },
  { label: 'Community', href: '#results' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex items-center gap-6">
          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-normal text-zinc-300 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Reusable CTA Button */}
          <div className="hidden sm:flex items-center">
            <WaitlistButton href="#signup" text="SignUp" />
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-lg px-6 py-4 shadow-xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <WaitlistButton
                href="#signup"
                text="SignUp"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
