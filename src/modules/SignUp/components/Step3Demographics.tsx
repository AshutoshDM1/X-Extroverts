'use client';

import React, { useState } from 'react';
import { MapPin, Building2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface Step3DemographicsProps {
  formData: SignupFormData;
  updateFormData: (data: Partial<SignupFormData>) => void;
  onNext: () => void;
}

const stateCityMap: Record<string, string[]> = {
  California: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose'],
  New_York: ['New York City', 'Brooklyn', 'Buffalo', 'Rochester'],
  Texas: ['Austin', 'Houston', 'Dallas', 'San Antonio'],
  Washington: ['Seattle', 'Bellevue', 'Spokane', 'Tacoma'],
  Illinois: ['Chicago', 'Naperville', 'Evanston'],
  Florida: ['Miami', 'Orlando', 'Tampa', 'Fort Lauderdale'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
  Karnataka: ['Bengaluru', 'Mysuru', 'Mangaluru'],
  Delhi_NCR: ['New Delhi', 'Gurugram', 'Noida'],
};

export function Step3Demographics({ formData, updateFormData, onNext }: Step3DemographicsProps) {
  const [errors, setErrors] = useState<StepValidationErrors>({});

  const availableCities = formData.state ? stateCityMap[formData.state] || [] : [];

  const handleStateChange = (selectedState: string | null) => {
    updateFormData({ state: selectedState || '', city: '' });
    if (errors.state) setErrors((prev) => ({ ...prev, state: undefined }));
  };

  const handleCityChange = (selectedCity: string | null) => {
    updateFormData({ city: selectedCity || '' });
    if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: StepValidationErrors = {};

    if (!formData.state) {
      newErrors.state = 'Please select your region/state';
    }

    if (!formData.city) {
      newErrors.city = 'Please select your city';
    }

    if (!formData.collegeOrWork.trim()) {
      newErrors.collegeOrWork = 'Please enter your college, workplace, or craft';
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
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* State / Region & City in 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* State / Region Selector via shadcn Select */}
          <div>
            <Label className="block text-xs font-medium text-zinc-300 mb-2">Region / State</Label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-500 z-10">
                <MapPin className="size-4" />
              </div>
              <Select value={formData.state || undefined} onValueChange={handleStateChange}>
                <SelectTrigger
                  className={cn(
                    'w-full h-10 rounded-2xl border-0 bg-zinc-900/90 pl-10 pr-3 text-sm text-white transition-all outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 cursor-pointer',
                    !formData.state && 'text-zinc-500',
                  )}
                >
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border border-white/10 text-white rounded-2xl p-1 z-50">
                  {Object.keys(stateCityMap).map((st) => (
                    <SelectItem
                      key={st}
                      value={st}
                      className="rounded-xl hover:bg-zinc-900 focus:bg-zinc-900 text-white cursor-pointer"
                    >
                      {st.replace(/_/g, ' ')}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {errors.state && (
              <p className="mt-1.5 text-xs text-red-400 font-normal">{errors.state}</p>
            )}
          </div>

          {/* Dependent City Selector via shadcn Select */}
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
                    'w-full h-10 rounded-2xl border-0 bg-zinc-900/90 pl-10 pr-3 text-sm text-white transition-all outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed',
                    !formData.city && 'text-zinc-500',
                  )}
                >
                  <SelectValue placeholder={formData.state ? 'Select City' : 'State first'} />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border border-white/10 text-white rounded-2xl p-1 z-50">
                  {availableCities.map((ct) => (
                    <SelectItem
                      key={ct}
                      value={ct}
                      className="rounded-xl hover:bg-zinc-900 focus:bg-zinc-900 text-white cursor-pointer"
                    >
                      {ct}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {errors.city && (
              <p className="mt-1.5 text-xs text-red-400 font-normal">{errors.city}</p>
            )}
          </div>
        </div>

        {/* College / Organization */}
        <div>
          <Label className="block text-xs font-medium text-zinc-300 mb-2">
            College, Company or Craft
          </Label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500 z-10">
              <Building2 className="size-4" />
            </div>
            <Input
              type="text"
              value={formData.collegeOrWork}
              onChange={(e) => {
                updateFormData({ collegeOrWork: e.target.value });
                if (errors.collegeOrWork)
                  setErrors((prev) => ({ ...prev, collegeOrWork: undefined }));
              }}
              placeholder="e.g. Stanford University or Product Designer"
              className={cn(
                'h-10 pl-11 pr-4 text-sm rounded-2xl border-0 bg-zinc-900/90 focus:outline-none focus:ring-0 focus-visible:ring-0',
                errors.collegeOrWork && 'text-red-300',
              )}
            />
          </div>
          {errors.collegeOrWork && (
            <p className="mt-1.5 text-xs text-red-400 font-normal">{errors.collegeOrWork}</p>
          )}
        </div>

        {/* Instagram Handle (Optional) */}
        <div>
          <Label className="block text-xs font-medium text-zinc-300 mb-2">
            Instagram Handle <span className="text-zinc-500 font-normal">(Optional)</span>
          </Label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500 z-10">
              <InstagramIcon className="size-4" />
            </div>
            <Input
              type="text"
              value={formData.instagramHandle || ''}
              onChange={(e) => {
                const val = e.target.value.replace(/^@/, '');
                updateFormData({ instagramHandle: val });
              }}
              placeholder="your_handle"
              className="h-10 pl-11 pr-4 text-sm rounded-2xl border-0 bg-zinc-900/90 focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
          </div>
        </div>

        <WaitlistButton type="submit" className="w-full mt-3">
          Continue to Vibe Preferences
        </WaitlistButton>
      </form>
    </div>
  );
}

export default Step3Demographics;
