'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Sparkles } from 'lucide-react';
import { Logo } from '@/Shared/Logo/Logo';
import HeroBackground from '@/Shared/Background/HeroBackground';
import { Particles } from '@/components/ui/particles';
import { WizardStepHeader } from './components/WizardStepHeader';
import { Step1EmailOtp } from './components/Step1EmailOtp';
import { Step2PersonalDetails } from './components/Step2PersonalDetails';
import { Step3Demographics } from './components/Step3Demographics';
import { Step4Preferences } from './components/Step4Preferences';
import { SuccessCelebration } from './components/SuccessCelebration';
import { SignupFormData, SignupStep } from './types';

const initialFormData: SignupFormData = {
  email: '',
  otp: '',
  isEmailVerified: false,
  fullName: '',
  username: '',
  birthDate: '',
  age: null,
  gender: '',
  customPronouns: '',
  state: '',
  city: '',
  collegeOrWork: '',
  instagramHandle: '',
  favoriteThemes: [],
  bio: '',
  agreeTerms: false,
};

export function SignUpPage() {
  const [currentStep, setCurrentStep] = useState<SignupStep>(1);
  const [formData, setFormData] = useState<SignupFormData>(initialFormData);

  const updateFormData = (data: Partial<SignupFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  // Populate all details in state for testing WITHOUT changing the current step
  const handleFillDummyData = () => {
    setFormData({
      email: 'sarah.jenkins@example.com',
      otp: '849201',
      isEmailVerified: true,
      fullName: 'Sarah Jenkins',
      username: 'sarah_j',
      birthDate: '2001-06-15',
      age: 25,
      gender: 'She / Her',
      customPronouns: '',
      state: 'California',
      city: 'Los Angeles',
      collegeOrWork: 'UCLA Music Department',
      instagramHandle: 'sarah.vibes',
      favoriteThemes: ['Music Party', 'Brunch-Cation', 'Game Night', 'Social Mixer'],
      bio: 'Indie vocalist and vinyl collector. Always down for acoustic jam sessions and cafe hopping!',
      agreeTerms: true,
    });
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as SignupStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1 && currentStep < 5) {
      setCurrentStep((prev) => (prev - 1) as SignupStep);
    }
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-black text-white selection:bg-purple-600 selection:text-white">
      {/* Left Column: Visual Brand, Hero Background Image, Particles & Testimonial */}
      <div className="relative hidden lg:flex flex-col justify-between p-10 xl:p-14 overflow-hidden bg-zinc-950 border-r border-white/10 select-none">
        {/* Only Hero Background Image */}
        <HeroBackground />

        {/* Interactive Particles Layer */}
        <Particles
          className="absolute inset-0 z-5 pointer-events-none"
          quantity={65}
          ease={70}
          size={0.7}
          color="#ffffff"
          refresh
        />

        {/* Top: Brand Logo */}
        <div className="relative z-10">
          <Logo />
        </div>

        {/* Bottom: Testimonial Quote */}
        <div className="relative z-10 max-w-lg">
          <p className="text-sm xl:text-xl font-normal text-zinc-200 leading-relaxed tracking-wide">
            &ldquo;This Platform has helped me to save time and connect with genuine hangout crews
            in my city faster than ever before.&rdquo;
          </p>
          <p className="mt-3 text-xs font-medium text-white tracking-wide">~ Ali Hassan</p>
        </div>
      </div>

      {/* Right Column: Clean Form Container */}
      <div className="relative flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 min-h-screen overflow-y-auto bg-black">
        {/* Top: Home Link */}
        <div className="w-full flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="size-4" />
            <span>Home</span>
          </Link>

          {/* Mobile only logo */}
          <div className="lg:hidden">
            <Logo />
          </div>
        </div>

        {/* Center: Multi-Step Wizard Flow */}
        <div className="w-full max-w-lg mx-auto my-auto py-8">
          {/* Wizard Header Progress */}
          {currentStep > 1 && <WizardStepHeader currentStep={currentStep} onBack={handleBack} />}

          {/* Steps */}
          {currentStep === 1 && (
            <Step1EmailOtp
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
            />
          )}

          {currentStep === 2 && (
            <Step2PersonalDetails
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
            />
          )}

          {currentStep === 3 && (
            <Step3Demographics
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
            />
          )}

          {currentStep === 4 && (
            <Step4Preferences
              formData={formData}
              updateFormData={updateFormData}
              onSubmit={handleNext}
            />
          )}

          {currentStep === 5 && <SuccessCelebration formData={formData} />}
        </div>

        {/* Bottom: Legal Disclaimer */}
        <div className="w-full text-center py-2">
          <p className="text-[11px] text-zinc-500 font-normal leading-relaxed max-w-sm mx-auto">
            By clicking continue, you agree to our{' '}
            <Link href="/legal" className="text-zinc-400 hover:text-white underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/legal" className="text-zinc-400 hover:text-white underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Fixed Bottom-Right Testing Helper Button */}
      <button
        type="button"
        onClick={handleFillDummyData}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-purple-500/40 bg-zinc-950/90 hover:bg-zinc-900 px-4 py-2 text-xs font-medium text-purple-300 shadow-2xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer outline-none focus:outline-none focus:ring-0"
        title="Fill all form state with dummy data for testing without changing step"
      >
        <Sparkles className="size-3.5 text-purple-400" />
        <span>Fill Test Data</span>
      </button>
    </div>
  );
}

export default SignUpPage;
