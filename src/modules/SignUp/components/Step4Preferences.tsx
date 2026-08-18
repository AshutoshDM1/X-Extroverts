'use client';

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { WaitlistButton } from '@/Shared/Button/WaitlistButton';
import { cn } from '@/lib/utils';
import { SignupFormData, StepValidationErrors } from '../types';
import { INDIA_STATES_CITIES, INDIAN_STATES_LIST } from '../data/indiaLocations';

interface Step4PreferencesProps {
  formData: SignupFormData;
  updateFormData: (data: Partial<SignupFormData>) => void;
  onNext: () => void;
}

export function Step4Preferences({ formData, updateFormData, onNext }: Step4PreferencesProps) {
  const [errors, setErrors] = useState<StepValidationErrors>({});

  const availableCities = formData.state ? INDIA_STATES_CITIES[formData.state] || [] : [];

  const handleStateChange = (selectedState: string | null) => {
    updateFormData({ state: selectedState || '', city: '' });
    if (errors.state) setErrors((prev) => ({ ...prev, state: undefined }));
    if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
  };

  const handleCityChange = (selectedCity: string | null) => {
    updateFormData({ city: selectedCity || '' });
    if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: StepValidationErrors = {};

    if (!formData.state) {
      newErrors.state = 'Please select your state';
    }

    if (!formData.city) {
      newErrors.city = 'Please select your city';
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
          Where do you vibe?
        </h2>
        <p className="mt-1.5 text-xs text-zinc-400">
          Find local party circles and upcoming gatherings in your area
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* State & City 2-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* State Selector */}
          <div>
            <Label className="block text-xs font-medium text-zinc-300 mb-2">State</Label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-500 z-10">
                <MapPin className="size-4" />
              </div>
              <Select value={formData.state || undefined} onValueChange={handleStateChange}>
                <SelectTrigger
                  className={cn(
                    'w-full h-11 rounded-2xl border-0 bg-zinc-900/90 pl-10 pr-3 text-sm text-white transition-all outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 cursor-pointer',
                    !formData.state && 'text-zinc-500',
                  )}
                >
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent
                  side="bottom"
                  align="start"
                  alignItemWithTrigger={false}
                  className="bg-zinc-950/95 border border-white/10 text-white rounded-2xl p-1.5 z-50 w-(--anchor-width) shadow-2xl backdrop-blur-xl overflow-hidden"
                >
                  <ScrollArea className="h-60 w-full pr-1.5">
                    <div className="space-y-0.5">
                      {INDIAN_STATES_LIST.map((st) => (
                        <SelectItem
                          key={st}
                          value={st}
                          className="rounded-xl hover:bg-zinc-900 focus:bg-zinc-900 text-white cursor-pointer text-xs sm:text-sm py-2 px-2.5"
                        >
                          {st}
                        </SelectItem>
                      ))}
                    </div>
                  </ScrollArea>
                </SelectContent>
              </Select>
            </div>
            {errors.state && (
              <p className="mt-1.5 text-xs text-red-400 font-normal">{errors.state}</p>
            )}
          </div>

          {/* Dependent City Selector */}
          <div>
            <Label className="block text-xs font-medium text-zinc-300 mb-2">City</Label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-500 z-10">
                <MapPin className="size-4" />
              </div>
              <Select
                value={formData.city || undefined}
                disabled={!formData.state}
                onValueChange={handleCityChange}
              >
                <SelectTrigger
                  className={cn(
                    'w-full h-11 rounded-2xl border-0 bg-zinc-900/90 pl-10 pr-3 text-sm text-white transition-all outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed',
                    !formData.city && 'text-zinc-500',
                  )}
                >
                  <SelectValue placeholder={formData.state ? 'Select City' : 'State first'} />
                </SelectTrigger>
                <SelectContent
                  side="bottom"
                  align="start"
                  alignItemWithTrigger={false}
                  className="bg-zinc-950/95 border border-white/10 text-white rounded-2xl p-1.5 z-50 w-(--anchor-width) shadow-2xl backdrop-blur-xl overflow-hidden"
                >
                  <ScrollArea className="h-60 w-full pr-1.5">
                    <div className="space-y-0.5">
                      {availableCities.map((ct) => (
                        <SelectItem
                          key={ct}
                          value={ct}
                          className="rounded-xl hover:bg-zinc-900 focus:bg-zinc-900 text-white cursor-pointer text-xs sm:text-sm py-2 px-2.5"
                        >
                          {ct}
                        </SelectItem>
                      ))}
                    </div>
                  </ScrollArea>
                </SelectContent>
              </Select>
            </div>
            {errors.city && (
              <p className="mt-1.5 text-xs text-red-400 font-normal">{errors.city}</p>
            )}
          </div>
        </div>

        <WaitlistButton type="submit" className="w-full mt-3">
          Continue to Invite Code
        </WaitlistButton>
      </form>
    </div>
  );
}

export default Step4Preferences;
