'use client';

import React, { useState } from 'react';
import { Ticket } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { WaitlistButton } from '@/Shared/Button/WaitlistButton';
import { SignupFormData } from '../types';
import { TermsAgreementDialog } from './TermsAgreementDialog';

interface Step5InviteCodeProps {
  formData: SignupFormData;
  updateFormData: (data: Partial<SignupFormData>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export function Step5InviteCode({ formData, updateFormData, onSubmit }: Step5InviteCodeProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);

  const finalizeSignup = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmit();
    }, 1200);
  };

  const handleProceedClick = (e: React.FormEvent) => {
    e.preventDefault();

    // If terms haven't been accepted yet, show the terms dialog first
    if (!formData.agreeTerms) {
      setTermsDialogOpen(true);
      return;
    }

    finalizeSignup();
  };

  const handleTermsAccepted = () => {
    updateFormData({ agreeTerms: true });
  };

  return (
    <div className="w-full">
      {/* Vibe Manifesto / Party Rules (Single continuous flowing text block matching image9.jpg) */}
      <div className="mb-6 select-none font-medium text-center uppercase tracking-tight text-base sm:text-lg leading-snug text-white">
        KINDNESS = GOOD <span className="text-purple-400">HAIR</span> DAY SIP IN?{' '}
        <span className="text-purple-400">CHIP</span> IN. GHOSTING IS FOR{' '}
        <span className="text-purple-400">HALLOWEEN</span>. OUTFITS LOUD,{' '}
        <span className="text-purple-400">INTENTIONS</span> CLEAR. JOINING? FREE. HOSTING?{' '}
        <span className="text-purple-400">ALSO</span> FREE.{' '}
        <span className="text-zinc-500">
          EARLLY IS <span className="text-purple-400">ICONIC</span>. YES.{' '}
          <span className="text-purple-400">SPELLING</span> MISTAKE.
        </span>
      </div>

      <form onSubmit={handleProceedClick} className="flex flex-col gap-4">
        {/* Invite Code Input (matching image9.jpg) */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label className="text-xs font-medium capitalize text-zinc-400">
              Enter Invite Code{' '}
              <span className="text-zinc-600 font-normal lowercase">(optional)</span>
            </Label>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-purple-400">
              <span>+30 HVTs</span>
            </span>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500 z-10">
              <Ticket className="size-4" />
            </div>
            <Input
              type="text"
              value={formData.inviteCode || ''}
              onChange={(e) => {
                const val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
                updateFormData({ inviteCode: val });
              }}
              placeholder="e.g. PARTY30"
              className="h-11 pl-11 pr-4 text-sm rounded-2xl border-0 bg-zinc-900/90 text-white placeholder:text-zinc-600 uppercase focus:outline-none focus:ring-0 focus-visible:ring-0 tracking-wider font-mono"
            />
          </div>
        </div>

        {/* Action Button: Complete Signup */}
        <div className="flex flex-col gap-2.5 mt-4">
          <WaitlistButton type="submit" loading={isSubmitting} className="w-full">
            {isSubmitting ? 'Creating your profile...' : 'Complete Signup'}
          </WaitlistButton>
        </div>

        {/* Community Code & Terms Agreement Dialog */}
        <TermsAgreementDialog
          open={termsDialogOpen}
          onOpenChange={setTermsDialogOpen}
          onAccept={handleTermsAccepted}
        />
      </form>
    </div>
  );
}

export default Step5InviteCode;
