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
import { z } from 'zod';
import { SignupFormData, StepValidationErrors } from '../types';

const step2Schema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, 'Please enter your full name')
    .min(4, 'Full name must be at least 4 letters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Full name can only contain letters')
    .refine(
      (val) => {
        const parts = val.trim().split(/\s+/).filter(Boolean);
        return parts.length >= 2 && parts.every((part) => part.length >= 2);
      },
      {
        message: 'Please enter your real first and last name (e.g. Alex Morgan)',
      },
    ),
  username: z
    .string()
    .trim()
    .min(1, 'Choose a unique username')
    .min(4, 'Username must be at least 4 characters')
    .max(20, 'Username must be 20 characters or less')
    .regex(/^[a-z]/, 'Username must start with a letter')
    .regex(/^[a-z0-9_.]+$/, 'Username can only contain letters, numbers, underscores, and dots')
    .refine((val) => !/^(.)\1{3,}$/.test(val), {
      message: 'Username cannot be repetitive characters',
    })
    .refine((val) => !/[._]{2,}/.test(val), {
      message: 'Username cannot have consecutive dots or underscores',
    })
    .refine((val) => !/[._]$/.test(val), {
      message: 'Username cannot end with a dot or underscore',
    }),
  birthDate: z.string().min(1, 'Date of birth is required'),
  age: z
    .number()
    .nullable()
    .refine((val) => val !== null && val >= 18, {
      message: 'Extroverts is for ages 18 and older',
    }),
});

interface Step2PersonalDetailsProps {
  formData: SignupFormData;
  updateFormData: (data: Partial<SignupFormData>) => void;
  onNext: () => void;
}

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
    setErrors({});

    const result = step2Schema.safeParse({
      fullName: formData.fullName,
      username: formData.username,
      birthDate: formData.birthDate,
      age: formData.age,
    });

    if (!result.success) {
      const newErrors: StepValidationErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        if (field && !newErrors[field]) {
          newErrors[field] = issue.message;
        }
      }
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
        <p className="mt-1.5 text-xs text-zinc-400">
          Your personal details to set up your party identity
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* Full Name & Username */}
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
                className="h-10 pl-11 pr-4 text-sm rounded-2xl border-0 bg-zinc-900/90 text-white focus:outline-none focus:ring-0 focus-visible:ring-0"
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
                className="h-10 pl-11 pr-4 text-sm rounded-2xl border-0 bg-zinc-900/90 text-white focus:outline-none focus:ring-0 focus-visible:ring-0"
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
              className="max-w-[460px] p-0 bg-transparent border-0 shadow-none ring-0 flex items-center justify-center lg:left-[75%] lg:-translate-x-1/2"
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

        <WaitlistButton type="submit" className="w-full mt-3">
          Continue to Pronouns
        </WaitlistButton>
      </form>
    </div>
  );
}

export default Step2PersonalDetails;
