import type { Metadata } from 'next';
import { Navbar } from '@/Shared/Navbar/Navbar';
import { Footer } from '@/Shared/Footer/Footer';
import { Lock, Eye, ShieldCheck, Database, Bell, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Extroverts',
  description:
    'Learn how Extroverts protects your personal data, meetup location privacy, and circle communication.',
};

export default function PrivacyPage() {
  const lastUpdated = 'February 2026';

  const sections = [
    {
      id: 'information-collected',
      icon: Database,
      title: '1. Information We Collect',
      content: (
        <>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            We only collect information essential for organizing safe, verified meetups and
            delivering a great hangout experience:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">•</span>
              <span>
                <strong className="text-zinc-200">Account & Verification Data:</strong> Name, phone
                number (for OTP login), email, age verification, and optional profile bio/interests.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">•</span>
              <span>
                <strong className="text-zinc-200">City & Approximate Location:</strong> Used solely
                to show you local hangouts, nearby parties, and live city feeds within your
                preferred radius.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">•</span>
              <span>
                <strong className="text-zinc-200">Community Activity:</strong> Event RSVPs, Vibe
                Token history, ratings from hosted meetups, and voluntary safety reports.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'how-we-use-data',
      icon: Eye,
      title: '2. How We Use Your Data',
      content: (
        <>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Your data is used to curate meaningful offline experiences, maintain community safety,
            and prevent platform abuse:
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="text-sm font-medium text-white flex items-center gap-2">
                <ShieldCheck className="size-4 text-[#fba282]" />
                Event Coordination
              </h4>
              <p className="mt-1 text-xs text-zinc-400">
                Matching you with relevant city themes, music jams, gaming nights, and verified
                hosts.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="text-sm font-medium text-white flex items-center gap-2">
                <Lock className="size-4 text-[#fba282]" />
                Safety Moderation
              </h4>
              <p className="mt-1 text-xs text-zinc-400">
                Enforcing verified badge standards, anti-spam filters, and protecting private
                circles.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'privacy-controls',
      icon: Lock,
      title: '3. Your Privacy Controls & Safe Circles',
      content: (
        <>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            We put privacy in your hands. You have granular control over who sees your profile and
            when:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">•</span>
              <span>
                <strong className="text-zinc-200">Girls-Exclusive Circles:</strong> Profiles and
                chats within women-only spaces are invisible to members outside that circle.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">•</span>
              <span>
                <strong className="text-zinc-200">No Exact Geolocation Broadcasting:</strong> We
                never publish your live continuous GPS coordinates to other members.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">•</span>
              <span>
                <strong className="text-zinc-200">Ghost Mode:</strong> Hide your online status or
                upcoming RSVPs from public search whenever you wish.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'data-sharing',
      icon: ShieldCheck,
      title: '4. Zero Selling of Personal Data',
      content: (
        <>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            <strong className="text-white">We do not sell or rent your personal information</strong>{' '}
            to third-party advertisers or data brokers.
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            We only share necessary transactional data with trusted service providers (e.g. SMS OTP
            delivery gateways, secure cloud hosting, and payment processors) under strict
            confidentiality agreements.
          </p>
        </>
      ),
    },
    {
      id: 'retention-deletion',
      icon: UserCheck,
      title: '5. Data Retention & Account Deletion',
      content: (
        <>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            You can request complete deletion of your account and associated personal data at any
            time directly from the account settings or by emailing{' '}
            <a href="mailto:privacy@extroverts.app" className="text-purple-400 hover:underline">
              privacy@extroverts.app
            </a>
            .
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Upon deletion confirmation, all your profile data, chat logs, and photo uploads are
            permanently purged from our active servers within 30 days.
          </p>
        </>
      ),
    },
    {
      id: 'updates',
      icon: Bell,
      title: '6. Policy Updates & Contact',
      content: (
        <>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            We may update this Privacy Policy as we introduce new features and tools. When
            significant changes occur, we will notify you through in-app notices or email.
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
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.15]">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-normal">
              How we protect your personal information, circle communications, and offline meetup
              privacy.
            </p>
            <p className="mt-2 text-xs font-mono text-zinc-500">Last updated: {lastUpdated}</p>
          </div>

          {/* Main Privacy Cards with FAQ Expanded Ambient Dual Glow */}
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

          {/* Privacy Inquiries Card */}
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
                Questions about your data?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                Reach out to our Data Protection Officer at{' '}
                <a
                  href="mailto:privacy@extroverts.app"
                  className="text-purple-400 hover:text-purple-300 underline font-medium"
                >
                  privacy@extroverts.app
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
