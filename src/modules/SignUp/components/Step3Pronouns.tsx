'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { WaitlistButton } from '@/Shared/Button/WaitlistButton';
import { cn } from '@/lib/utils';
import { SignupFormData, StepValidationErrors } from '../types';
import { PronounSelectDialog } from './PronounSelectDialog';

interface Step3PronounsProps {
  formData: SignupFormData;
  updateFormData: (data: Partial<SignupFormData>) => void;
  onNext: () => void;
}

export function Step3Pronouns({ formData, updateFormData, onNext }: Step3PronounsProps) {
  const [errors, setErrors] = useState<StepValidationErrors>({});
  const [dialogOpen, setDialogOpen] = useState(false);

  const selectedPronouns = formData.pronouns || [];

  const togglePronoun = (pronoun: string) => {
    if (selectedPronouns.includes(pronoun)) {
      const updated = selectedPronouns.filter((p) => p !== pronoun);
      updateFormData({ pronouns: updated });
      if (errors.pronouns) setErrors((prev) => ({ ...prev, pronouns: undefined }));
    } else {
      if (selectedPronouns.length >= 3) {
        setErrors((prev) => ({ ...prev, pronouns: 'You can select up to 3 pronouns' }));
        return;
      }
      const updated = [...selectedPronouns, pronoun];
      updateFormData({ pronouns: updated });
      if (errors.pronouns) setErrors((prev) => ({ ...prev, pronouns: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: StepValidationErrors = {};

    if (!selectedPronouns || selectedPronouns.length === 0) {
      newErrors.pronouns = 'Please select at least 1 pronoun';
    } else if (selectedPronouns.length > 3) {
      newErrors.pronouns = 'Maximum 3 pronouns allowed';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext();
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
          Which pronouns feel right for you?
        </h2>
        <p className="mt-1.5 text-xs text-zinc-400">Select the pronouns that feel right for you</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Pronouns Form Field / Trigger Button */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label className="text-xs font-medium text-zinc-300">PRONOUNS</Label>
            {selectedPronouns.length > 0 && (
              <Badge
                variant="outline"
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border-0 bg-muted text-white"
              >
                {selectedPronouns.length} / 3 selected
              </Badge>
            )}
          </div>

          <button
            type="button"
            onClick={() => setDialogOpen(true)}
            className={cn(
              'relative flex h-12 w-full items-center justify-between rounded-2xl border-0 bg-zinc-900/90 px-4 text-left text-sm transition-all outline-none focus:outline-none focus:ring-0 cursor-pointer select-none',
              selectedPronouns.length === 0 ? 'text-zinc-500' : 'text-white',
            )}
          >
            <div className="flex flex-wrap items-center gap-1.5 overflow-hidden">
              {selectedPronouns.length === 0 ? (
                <span className="text-zinc-500">Tap to select pronouns...</span>
              ) : (
                <span className="text-white font-medium">{selectedPronouns.join(' / ')}</span>
              )}
            </div>

            <ChevronRight className="size-4 text-zinc-400 shrink-0 ml-2" />
          </button>

          {/* Pronoun Multi-Select Dialog Component */}
          <PronounSelectDialog
            open={dialogOpen}
            onOpenChange={setDialogOpen}
            selectedPronouns={selectedPronouns}
            onTogglePronoun={togglePronoun}
          />

          <p className="mt-1.5 text-xs text-zinc-400 font-normal">
            Select the pronouns that feel right for you.
          </p>

          {errors.pronouns && (
            <p className="mt-1.5 text-xs text-red-400 font-normal">{errors.pronouns}</p>
          )}
        </div>

        <WaitlistButton type="submit" className="w-full mt-3">
          Continue to Location
        </WaitlistButton>
      </form>
    </div>
  );
}

export default Step3Pronouns;
