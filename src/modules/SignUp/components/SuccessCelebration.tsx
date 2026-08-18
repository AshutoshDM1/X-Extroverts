'use client';

import React from 'react';
import { Sparkles, Award, MapPin } from 'lucide-react';
import { WaitlistButton } from '@/Shared/Button/WaitlistButton';
import { SignupFormData } from '../types';

interface SuccessCelebrationProps {
  formData: SignupFormData;
}

export function SuccessCelebration({ formData }: SuccessCelebrationProps) {
  const firstName = formData.fullName ? formData.fullName.split(' ')[0] : 'Party Host';
  const pronounsDisplay =
    formData.pronouns && formData.pronouns.length > 0 ? formData.pronouns.join(' / ') : null;

  return (
    <div className="w-full text-center flex flex-col  items-center py-4">
      <h2 className="pt-20 text-3xl sm:text-4xl font-medium tracking-tight text-white">
        {firstName}, Welcome to Extroverts!
      </h2>

      <p className="mt-3 max-w-md text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
        Your profile is live as{' '}
        <strong className="text-white">@{formData.username || 'member'}</strong>. You have unlocked
        your welcome{' '}
        <strong className="text-purple-400">
          {formData.inviteCode ? '40 Honorary Vibe Tokens (+30 Bonus)' : '10 Honorary Vibe Tokens'}
        </strong>{' '}
        to RSVP and connect with local circles!
      </p>

      {/* Profile Card Preview */}
      <div className="mt-7 w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-900/70 p-5 text-left backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-white">{formData.fullName || 'Member'}</div>
            <div className="text-xs text-zinc-400">@{formData.username || 'username'}</div>
          </div>
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-medium text-purple-300">
            Bronze Club
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
          {pronounsDisplay && (
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-zinc-300">
              {pronounsDisplay}
            </span>
          )}

          {formData.city && (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-zinc-300">
              <MapPin className="size-3 text-purple-400" />
              <span>
                {formData.city}
                {formData.state ? `, ${formData.state.replace(/_/g, ' ')}` : ''}
              </span>
            </span>
          )}
        </div>
      </div>

      <div className="mt-8 w-full max-w-sm">
        <WaitlistButton href="/" className="w-full">
          Explore Hangouts
        </WaitlistButton>
      </div>
    </div>
  );
}

export default SuccessCelebration;
