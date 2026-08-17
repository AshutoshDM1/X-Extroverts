'use client';

import React from 'react';
import { Sparkles, Award } from 'lucide-react';
import { WaitlistButton } from '@/Shared/Button/WaitlistButton';
import { SignupFormData } from '../types';

interface SuccessCelebrationProps {
  formData: SignupFormData;
}

export function SuccessCelebration({ formData }: SuccessCelebrationProps) {
  return (
    <div className="w-full text-center flex flex-col items-center py-4">
      {/* Animated Glowing Icon Badge */}
      <div className="relative mb-6 flex size-20 items-center justify-center rounded-full bg-linear-to-tr from-purple-500 to-purple-700 p-0.5 shadow-2xl shadow-purple-900/40">
        <div className="flex size-full items-center justify-center rounded-full bg-zinc-950">
          <Award className="size-10 text-purple-400" />
        </div>
      </div>

      <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-medium text-purple-300 mb-4">
        <Sparkles className="size-3.5 text-purple-400" />
        Bronze Club Member Unlocked
      </span>

      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
        Welcome to Extroverts, {formData.fullName.split(' ')[0]}!
      </h2>

      <p className="mt-3 max-w-md text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
        Your profile is live as <strong className="text-white">@{formData.username}</strong> in{' '}
        <strong className="text-white">{formData.city || 'your city'}</strong>. You have received
        your first <strong className="text-purple-400">10 Honorary Vibe Tokens</strong> to start
        RSVPing to gatherings.
      </p>

      {/* Profile Card Preview */}
      <div className="mt-8 w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-900/70 p-5 text-left backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-white">{formData.fullName}</div>
            <div className="text-xs text-zinc-400">@{formData.username}</div>
          </div>
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-medium text-purple-300">
            Bronze Club
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {formData.favoriteThemes?.slice(0, 4).map((theme) => (
            <span
              key={theme}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] text-zinc-300"
            >
              {theme}
            </span>
          ))}
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
