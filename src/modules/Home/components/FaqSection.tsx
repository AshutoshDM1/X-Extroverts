'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from '@/Shared/Seaction/Section';
import { cn } from '@/lib/utils';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is Extroverts and how does it work?',
    answer:
      'Extroverts connects you with real people in your city through themed meetups, spontaneous hangouts, and curated events—turning online strangers into real-world crews and shared memories.',
  },
  {
    id: 'faq-2',
    question: 'How do Honorary Vibe Tokens (HVTs) and Club Tiers work?',
    answer:
      'HVTs are reputation points earned by hosting positive hangouts, participating actively, and receiving community superlatives. Earning tokens unlocks higher tiers from Bronze Club to Ivory Club and exclusive VIP events.',
  },
  {
    id: 'faq-3',
    question: 'How does Extroverts keep hangouts safe and private?',
    answer:
      'We build safety into every interaction with verified member profiles, Girls Exclusive mode for women-only gatherings, Private Circles, and Confidential mode where exact meetup locations are revealed only after host RSVP approval.',
  },
  {
    id: 'faq-4',
    question: 'How do I host a party or gathering?',
    answer:
      'Tap Host, choose from 15+ curated themes (Music Jams, Game Nights, Brunch Outings, Book Clubs, etc.), set your guest capacity preset (from intimate 3-person hangouts to 25+ assemblies), and publish your invite in seconds.',
  },
  {
    id: 'faq-5',
    question: 'Can we chat and share photos after the event?',
    answer:
      'Yes! Every hangout features a real-time event group chat for coordination, plus a shared memory feed where members can post photos, award peer superlatives, and stay in touch long after the party ends.',
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section id="faq" size="default" padding="default">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-xs font-medium tracking-wide text-zinc-400 uppercase">FAQ</span>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.15]">
            Your Questions
            <br />
            Answered Clearly
          </h2>
        </div>

        {/* Right Column: Interactive Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                onClick={() => toggleFaq(faq.id)}
                className={cn(
                  'group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer select-none',
                  isOpen
                    ? 'border border-white/20 bg-zinc-950 p-6 sm:p-8 shadow-2xl shadow-purple-950/20'
                    : 'border border-white/10 bg-zinc-950/80 p-6 sm:p-7 hover:border-white/20 hover:bg-zinc-900/50',
                )}
              >
                {/* Ambient Glow Background for Active FAQ */}
                {isOpen && (
                  <div
                    className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
                    aria-hidden="true"
                  >
                    {/* Bottom-left purple orb */}
                    <div className="absolute -bottom-14 -left-12 h-48 w-48 rounded-full bg-[#5b1ce6]/30 blur-3xl" />
                    {/* Top-right warm amber/copper orb */}
                    <div className="absolute -top-14 -right-12 h-48 w-48 rounded-full bg-[#c2410c]/30 blur-3xl" />

                    {/* Subtle Noise Texture */}
                    <svg
                      className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <filter id={`faq-noise-${index}`}>
                        <feTurbulence
                          type="fractalNoise"
                          baseFrequency="0.8"
                          numOctaves="3"
                          stitchTiles="stitch"
                        />
                        <feColorMatrix type="saturate" values="0" />
                      </filter>
                      <rect width="100%" height="100%" filter={`url(#faq-noise-${index})`} />
                    </svg>

                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                )}

                {/* Header Row: Question + Icon */}
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <h3 className="text-sm sm:text-xl font-medium tracking-tight text-white">
                    {faq.question}
                  </h3>

                  <div className="shrink-0">
                    {isOpen ? (
                      <span className="flex size-8 sm:size-9 items-center justify-center rounded-full bg-[#f97316] text-white shadow-md transition-transform duration-200">
                        <Minus className="size-4 stroke-[2.2]" />
                      </span>
                    ) : (
                      <span className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-white/20 text-zinc-400 transition-all duration-200 group-hover:border-white/40 group-hover:text-white">
                        <Plus className="size-4 stroke-2" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <p className="relative z-10 mt-4 text-xs sm:text-sm leading-relaxed text-zinc-300 font-normal">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default FaqSection;
