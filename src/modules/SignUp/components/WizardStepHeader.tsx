'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SignupStep } from '../types';

interface WizardStepHeaderProps {
  currentStep: SignupStep;
  onStepClick: (step: SignupStep) => void;
}

export function WizardStepHeader({ currentStep, onStepClick }: WizardStepHeaderProps) {
  if (currentStep > 5) return null;

  return (
    <div className="md:mt-20 w-full mb-8 flex items-center justify-center">
      {/* Centered Circular Stepper with Interactive Navigation */}
      <div className="flex items-center gap-2 sm:gap-3">
        {[1, 2, 3, 4, 5].map((step, idx) => {
          const isCompleted = currentStep > step;
          const isCurrent = currentStep === step;
          const isClickable = step < currentStep;

          return (
            <React.Fragment key={step}>
              {idx > 0 && (
                <div
                  className={cn(
                    'h-px w-5 sm:w-8 transition-colors duration-300',
                    step <= currentStep ? 'bg-white/30' : 'bg-white/10',
                  )}
                />
              )}
              <button
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && onStepClick(step as SignupStep)}
                className={cn(
                  'flex size-8 sm:size-8.5 items-center justify-center rounded-full text-xs font-medium transition-all duration-300 outline-none focus:outline-none focus:ring-0',
                  isCompleted
                    ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white cursor-pointer active:scale-95'
                    : isCurrent
                      ? 'bg-white text-zinc-950 shadow-[0_0_16px_rgba(255,255,255,0.45)] scale-105 cursor-default font-semibold'
                      : 'bg-zinc-900 text-zinc-600 border border-white/5 cursor-not-allowed',
                )}
                title={isCompleted ? `Go back to Step ${step}` : `Step ${step}`}
              >
                {isCompleted ? <Check className="size-3.5 stroke-2" /> : <span>{step}</span>}
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default WizardStepHeader;
