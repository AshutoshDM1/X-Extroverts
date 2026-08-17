'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SignupStep } from '../types';

interface WizardStepHeaderProps {
  currentStep: SignupStep;
  onBack: () => void;
}

const steps = [
  { step: 1, label: 'Verification' },
  { step: 2, label: 'Profile' },
  { step: 3, label: 'Demographics' },
  { step: 4, label: 'Vibe' },
];

export function WizardStepHeader({ currentStep, onBack }: WizardStepHeaderProps) {
  if (currentStep > 4) return null;

  return (
    <div className="w-full mb-8">
      {/* Top Row: Back Button & Step Title */}
      <div className="flex items-center justify-between mb-6">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="size-4" />
            <span>Back</span>
          </button>
        ) : (
          <div className="w-12" />
        )}

        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
          Step {currentStep} of 4
        </span>

        <div className="w-12" />
      </div>

      {/* Progress Bars */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {steps.map(({ step, label }) => {
          const isCompleted = currentStep > step;
          const isCurrent = currentStep === step;

          return (
            <div key={step} className="flex flex-col gap-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className={cn(
                    'h-full rounded-full transition-all duration-500',
                    isCompleted || isCurrent
                      ? 'w-full bg-linear-to-r from-purple-500 to-purple-600'
                      : 'w-0',
                  )}
                />
              </div>
              <span
                className={cn(
                  'hidden sm:block text-[11px] font-normal transition-colors text-center truncate',
                  isCurrent
                    ? 'text-white font-medium'
                    : isCompleted
                      ? 'text-zinc-400'
                      : 'text-zinc-600',
                )}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WizardStepHeader;
