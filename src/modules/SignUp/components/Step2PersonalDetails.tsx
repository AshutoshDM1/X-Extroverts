'use client';

import React, { useState } from 'react';
import { User, AtSign, Calendar as CalendarIcon, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CalendarLume } from '@/components/custom-calender';
import { WaitlistButton } from '@/Shared/Button/WaitlistButton';
import { cn } from '@/lib/utils';
import { SignupFormData, StepValidationErrors } from '../types';

interface Step2PersonalDetailsProps {
  formData: SignupFormData;
  updateFormData: (data: Partial<SignupFormData>) => void;
  onNext: () => void;
}

const pronounOptions = ['He / Him', 'She / Her', 'They / Them', 'Prefer not to say', 'Custom'];

export function Step2PersonalDetails({
  formData,
  updateFormData,
  onNext,
}: Step2PersonalDetailsProps) {
  const [errors, setErrors] = useState<StepValidationErrors>({});
  const [calendarOpen, setCalendarOpen] = useState(false);

  const calculateAge = (birthDate: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;
    const formatted = format(selectedDate, 'yyyy-MM-dd');
    const age = calculateAge(selectedDate);
    updateFormData({ birthDate: formatted, age });
    if (errors.birthDate) {
      setErrors((prev) => ({ ...prev, birthDate: undefined }));
    }
    setCalendarOpen(false);
  };

  const parsedDate = formData.birthDate ? new Date(formData.birthDate) : undefined;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: StepValidationErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Choose a unique username';
    } else if (formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.birthDate) {
      newErrors.birthDate = 'Date of birth is required';
    } else if (formData.age !== null && formData.age < 18) {
      newErrors.birthDate = 'Extroverts is for ages 18 and older';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select your pronouns';
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
          Tell us about yourself
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Full Name & Username in 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <Label className="block text-xs font-medium text-zinc-300 mb-2">Full Name</Label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500 z-10">
                <User className="size-4" />
              </div>
              <Input
                type="text"
                value={formData.fullName}
                onChange={(e) => {
                  updateFormData({ fullName: e.target.value });
                  if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                }}
                placeholder="Alex Morgan"
                className={cn(
                  'h-10 pl-11 pr-4 text-sm rounded-2xl border-0 bg-zinc-900/90 focus:outline-none focus:ring-0 focus-visible:ring-0',
                  errors.fullName && 'text-red-300',
                )}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-red-400 font-normal">{errors.fullName}</p>
            )}
          </div>

          {/* Username */}
          <div>
            <Label className="block text-xs font-medium text-zinc-300 mb-2">Username</Label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500 z-10">
                <AtSign className="size-4" />
              </div>
              <Input
                type="text"
                value={formData.username}
                onChange={(e) => {
                  const val = e.target.value.toLowerCase().replace(/[^a-z0-9_.]/g, '');
                  updateFormData({ username: val });
                  if (errors.username) setErrors((prev) => ({ ...prev, username: undefined }));
                }}
                placeholder="alex_vibes"
                className={cn(
                  'h-10 pl-11 pr-4 text-sm rounded-2xl border-0 bg-zinc-900/90 focus:outline-none focus:ring-0 focus-visible:ring-0',
                  errors.username && 'text-red-300',
                )}
              />
            </div>
            {errors.username && (
              <p className="mt-1.5 text-xs text-red-400 font-normal">{errors.username}</p>
            )}
          </div>
        </div>

        {/* Date of Birth with Custom Calendar Lume Dialog */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label className="text-xs font-medium text-zinc-300">Date of Birth</Label>
            {formData.age !== null && (
              <Badge
                variant="outline"
                className={cn(
                  'text-[11px] font-medium px-2.5 py-0.5 rounded-full border-0',
                  formData.age >= 18
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'bg-red-500/15 text-red-400',
                )}
              >
                {formData.age} years old {formData.age < 18 ? '(Underage)' : '✓'}
              </Badge>
            )}
          </div>

          <Dialog open={calendarOpen} onOpenChange={setCalendarOpen}>
            <DialogTrigger
              className={cn(
                'relative flex h-10 w-full items-center justify-start rounded-2xl border-0 bg-zinc-900/90 pl-11 pr-4 text-left text-sm transition-all outline-none focus:outline-none focus:ring-0 cursor-pointer',
                !formData.birthDate ? 'text-zinc-500' : 'text-white',
              )}
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500">
                <CalendarIcon className="size-4" />
              </div>
              <span>
                {parsedDate && !isNaN(parsedDate.getTime())
                  ? format(parsedDate, 'PPP')
                  : 'Select your date of birth'}
              </span>
            </DialogTrigger>

            <DialogContent
              showCloseButton={false}
              className="max-w-[460px] p-0 bg-transparent border-0 shadow-none ring-0 flex items-center justify-center"
            >
              <CalendarLume
                value={parsedDate && !isNaN(parsedDate.getTime()) ? parsedDate : undefined}
                onSelectDate={handleDateSelect}
                onClose={() => setCalendarOpen(false)}
                minYear={1940}
                maxYear={new Date().getFullYear()}
              />
            </DialogContent>
          </Dialog>

          {errors.birthDate && (
            <div className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400 font-normal">
              <AlertCircle className="size-3.5 shrink-0" />
              <span>{errors.birthDate}</span>
            </div>
          )}
        </div>

        {/* Pronouns / Gender */}
        <div>
          <Label className="block text-xs font-medium text-zinc-300 mb-2.5">Pronouns</Label>
          <div className="flex flex-wrap gap-2">
            {pronounOptions.map((option) => {
              const isSelected = formData.gender === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    updateFormData({ gender: option });
                    if (errors.gender) setErrors((prev) => ({ ...prev, gender: undefined }));
                  }}
                  className={cn(
                    'rounded-full border-0 px-4 py-2 text-xs font-normal transition-all duration-200 cursor-pointer outline-none focus:outline-none focus:ring-0',
                    isSelected
                      ? 'bg-purple-600/35 text-white font-medium shadow-sm'
                      : 'bg-zinc-900/90 text-zinc-400 hover:text-white',
                  )}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {errors.gender && (
            <p className="mt-2 text-xs text-red-400 font-normal">{errors.gender}</p>
          )}
        </div>

        <WaitlistButton type="submit" className="w-full mt-3">
          Continue to Location
        </WaitlistButton>
      </form>
    </div>
  );
}

export default Step2PersonalDetails;
