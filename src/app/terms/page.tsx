import type { Metadata } from 'next';
import { Navbar } from '@/Shared/Navbar/Navbar';
import { Footer } from '@/Shared/Footer/Footer';
import { Shield, Sparkles, Scale, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Extroverts',
  description:
    'Read the terms and conditions for using Extroverts, participating in meetups, and using Vibe Tokens.',
};

export default function TermsPage() {
  const lastUpdated = 'February 2026';

  const sections = [
    {
      id: 'acceptance',
      icon: CheckCircle2,
      title: '1. Acceptance of Terms',
      content: (
        <>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            By creating an account, accessing, or using the Extroverts platform (including our
            website, mobile applications, and offline meetup events), you agree to be bound by these
            Terms of Service and our Community Guidelines. If you do not agree to these terms,
            please do not use our services.
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            You must be at least 18 years of age (or the legal age of majority in your jurisdiction)
            to create an account and participate in Extroverts events.
          </p>
        </>
      ),
    },
    {
      id: 'accounts-safety',
      icon: Shield,
      title: '2. Accounts & Real-Identity Verification',
      content: (
        <>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Extroverts fosters safe, authentic real-world connections. You agree to provide
            accurate, truthful, and up-to-date information during registration. Impersonation, fake
            profiles, or misrepresentation of identity is strictly prohibited and results in
            immediate permanent ban.
          </p>
        </>
      ),
    },
    {
      id: 'meetups-conduct',
      icon: AlertCircle,
      title: '3. Meetups & Offline Conduct',
      content: (
        <>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Extroverts organizes and facilitates themed city parties, spontaneous gatherings, and
            group experiences. While attending any Extroverts meetup, you agree to:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">•</span>
              <span>
                Treat every participant, host, and venue staff with mutual respect and dignity.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">•</span>
              <span>
                Zero tolerance for harassment, hate speech, stalking, non-consensual photography, or
                intoxicated misconduct.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">•</span>
              <span>
                Follow all local laws, venue rules, and safety directions from verified event hosts.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'vibe-tokens',
      icon: Sparkles,
      title: '4. Vibe Tokens (HVT) & Gamification',
      content: (
        <>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Hangout Vibe Tokens (HVTs) are in-app loyalty credits awarded for positive community
            participation, hosting, and event attendance.
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            HVTs have no direct fiat cash value and cannot be redeemed for real-world currency
            outside specified platform perks, event discounts, and status tier upgrades (Bronze to
            VIP Club). Extroverts reserves the right to adjust reward criteria and deduct tokens
            gained through fraudulent activity.
          </p>
        </>
      ),
    },
    {
      id: 'liability',
      icon: Scale,
      title: '5. Disclaimers & Limitation of Liability',
      content: (
        <>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Extroverts provides a platform to connect members. While we enforce strict verification
            and moderation policies, you attend offline meetups and interact with other members at
            your own discretion.
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            To the maximum extent permitted by law, Extroverts and its affiliates shall not be
            liable for any indirect, incidental, or personal injury damages arising out of your
            participation in third-party venues or member interactions.
          </p>
        </>
      ),
    },
    {
      id: 'termination',
      icon: FileText,
      title: '6. Account Termination & Changes',
      content: (
        <>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            We reserve the right to suspend or terminate accounts that violate our safety policies
            or infringe on community comfort. We may also update these Terms periodically, and your
            continued use constitutes agreement to the revised terms.
          </p>
        </>
      ),
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
          {/* Header Banner */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.15]">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-normal">
              Please read these terms carefully before joining Extroverts meetups, creating hangout
              circles, or using Vibe Tokens.
            </p>
            <p className="mt-2 text-xs font-mono text-zinc-500">Last updated: {lastUpdated}</p>
          </div>

          {/* Main Legal Content Cards with FAQ Expanded Ambient Dual Glow */}
          <div className="mt-12 space-y-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  id={section.id}
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

                  {/* Card Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#fba282]">
                        <Icon className="size-4.5 stroke-2" />
                      </div>
                      <h2 className="text-lg sm:text-xl font-medium tracking-tight text-white">
                        {section.title}
                      </h2>
                    </div>
                    <div className="pl-0 sm:pl-12">{section.content}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Questions Banner */}
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/15 bg-zinc-950 p-6 sm:p-8 text-center shadow-2xl shadow-purple-950/20">
            <div
              className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-[#5b1ce6]/25 blur-3xl" />
              <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-[#c2410c]/25 blur-3xl" />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-medium text-white">
                Have questions about our terms?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                Contact our safety & compliance team at{' '}
                <a
                  href="mailto:support@extroverts.app"
                  className="text-purple-400 hover:text-purple-300 underline font-medium"
                >
                  support@extroverts.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
