import type { Metadata } from 'next';
import { Navbar } from '@/Shared/Navbar/Navbar';
import { Footer } from '@/Shared/Footer/Footer';
import { HeartHandshake, ShieldCheck, Sparkles, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Community Guidelines | Extroverts',
  description:
    'Our core community standards for safe, respectful, and vibrant city meetups and hangout circles.',
};

export default function GuidelinesPage() {
  const lastUpdated = 'February 2026';

  const rules = [
    {
      id: 'respect',
      icon: HeartHandshake,
      title: '1. Mutual Respect & Authentic Vibes',
      desc: 'Extroverts is built for bringing people together. Treat everyone with warmth, consent, and kindness. Harassment, condescension, or discrimination based on gender, race, sexuality, or religion has zero place here.',
    },
    {
      id: 'safety',
      icon: ShieldCheck,
      title: '2. Safe Spaces & Girls-Exclusive Circles',
      desc: 'Private circles and girls-only hangouts exist to provide secure spaces. Never attempt to bypass circle verification or share private circle conversations outside.',
    },
    {
      id: 'offline',
      icon: Sparkles,
      title: '3. Real-World Meetup Etiquette',
      desc: 'Be punctual, respect venue rules, consume responsibly, and ensure everyone in the group feels included. Never take photos or record videos of members without explicit mutual consent.',
    },
    {
      id: 'zero-tolerance',
      icon: AlertTriangle,
      title: '4. Zero Tolerance Violations',
      desc: 'Stalking, physical intimidation, non-consensual contact, substance misuse, or deceptive identity spoofing will result in immediate permanent account termination and event ban.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-purple-600 selection:text-white">
      <Navbar />

      <main className="relative flex-1 pt-28 sm:pt-36 pb-20 overflow-hidden">
        {/* Seamless Centered Ambient Glow */}
        <div
          className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 h-80 w-[600px] max-w-full rounded-full bg-linear-to-b from-[#7c3aed]/25 via-[#c2410c]/20 to-transparent blur-[120px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.15]">
              Community Guidelines
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-normal">
              How we keep Extroverts events welcoming, exciting, and safe for every member.
            </p>
            <p className="mt-2 text-xs font-mono text-zinc-500">Last updated: {lastUpdated}</p>
          </div>

          <div className="mt-12 space-y-6">
            {rules.map((rule) => {
              const Icon = rule.icon;
              return (
                <div
                  key={rule.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/15 bg-zinc-950 p-6 sm:p-8 shadow-2xl shadow-purple-950/20 transition-all duration-300 hover:border-white/25"
                >
                  {/* Ambient Glow Background (Same as FAQ expanded) */}
                  <div
                    className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
                    aria-hidden="true"
                  >
                    {/* Bottom-left purple orb */}
                    <div className="absolute -bottom-14 -left-12 h-48 w-48 rounded-full bg-[#5b1ce6]/30 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                    {/* Top-right warm amber/copper orb */}
                    <div className="absolute -top-14 -right-12 h-48 w-48 rounded-full bg-[#c2410c]/30 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#fba282]">
                        <Icon className="size-4.5 stroke-2" />
                      </div>
                      <h2 className="text-lg sm:text-xl font-medium tracking-tight text-white">
                        {rule.title}
                      </h2>
                    </div>
                    <p className="pl-0 sm:pl-12 text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
