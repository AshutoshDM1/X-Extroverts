'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { WaitlistButton } from '@/Shared/Button/WaitlistButton';
import { cn } from '@/lib/utils';
import { SignupFormData, StepValidationErrors } from '../types';

interface Step4PreferencesProps {
  formData: SignupFormData;
  updateFormData: (data: Partial<SignupFormData>) => void;
  onSubmit: () => void;
}

const themeOptions = [
  'Music Party',
  'House Party',
  'Brunch-Cation',
  'Meet & Greet',
  'Social Mixer',
  'House Of Fun',
  'Weekend Antidote',
  'Nightlife',
  'Aesthetic Cafe',
  'Karaoke Night',
  'Game Night',
  'Dance Party',
  'Beach Party',
  'Tropical Getaway',
];

export function Step4Preferences({ formData, updateFormData, onSubmit }: Step4PreferencesProps) {
  const [errors, setErrors] = useState<StepValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleTheme = (theme: string) => {
    const current = formData.favoriteThemes || [];
    const exists = current.includes(theme);
    const updated = exists ? current.filter((t) => t !== theme) : [...current, theme];
    updateFormData({ favoriteThemes: updated });
    if (errors.favoriteThemes) {
      setErrors((prev) => ({ ...prev, favoriteThemes: undefined }));
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: StepValidationErrors = {};

    if (!formData.favoriteThemes || formData.favoriteThemes.length === 0) {
      newErrors.favoriteThemes = 'Pick at least 1 theme you love attending';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Please agree to community terms & guidelines';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmit();
    }, 1200);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
          What is your vibe?
        </h2>
      </div>

      <form onSubmit={handleFinalSubmit} className="flex flex-col gap-6">
        {/* Favorite Themes Multi-Select */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <Label className="text-xs font-medium text-zinc-300">Select Themes you enjoy</Label>
            <span className="text-[11px] text-zinc-400">
              {formData.favoriteThemes?.length || 0} selected
            </span>
          </div>

          <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto pr-1 py-1 scrollbar-thin">
            {themeOptions.map((theme) => {
              const isSelected = formData.favoriteThemes?.includes(theme);
              return (
                <button
                  key={theme}
                  type="button"
                  onClick={() => toggleTheme(theme)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-full border-0 px-3.5 py-2 text-xs transition-all duration-200 cursor-pointer outline-none focus:outline-none focus:ring-0',
                    isSelected
                      ? 'bg-purple-600/35 text-white font-medium shadow-sm'
                      : 'bg-zinc-900/90 text-zinc-400 hover:text-white',
                  )}
                >
                  {isSelected && <Check className="size-3 text-purple-300" />}
                  <span>{theme}</span>
                </button>
              );
            })}
          </div>
          {errors.favoriteThemes && (
            <p className="mt-2 text-xs text-red-400 font-normal">{errors.favoriteThemes}</p>
          )}
        </div>

        {/* Terms Agreement */}
        <div className="pt-2">
          <div className="flex items-start gap-3 select-none">
            <Checkbox
              id="terms"
              checked={formData.agreeTerms}
              onCheckedChange={(checked) => {
                updateFormData({ agreeTerms: checked === true });
                if (errors.agreeTerms) setErrors((prev) => ({ ...prev, agreeTerms: undefined }));
              }}
              className="mt-0.5 border-0 bg-zinc-900/90 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white outline-none focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
            <label
              htmlFor="terms"
              className="text-xs text-zinc-300 font-normal leading-relaxed cursor-pointer"
            >
              I agree to the{' '}
              <a href="/legal" target="_blank" className="text-purple-400 hover:underline">
                Community Guidelines
              </a>{' '}
              and{' '}
              <a href="/legal" target="_blank" className="text-purple-400 hover:underline">
                Terms of Service
              </a>
              . I pledge to respect all circle members and foster safe, welcoming hangouts.
            </label>
          </div>
          {errors.agreeTerms && (
            <p className="mt-2 text-xs text-red-400 font-normal">{errors.agreeTerms}</p>
          )}
        </div>

        <WaitlistButton type="submit" loading={isSubmitting} className="w-full mt-2">
          {isSubmitting ? 'Creating your profile...' : 'Complete Signup & Enter Extroverts'}
        </WaitlistButton>
      </form>
    </div>
  );
}

export default Step4Preferences;
