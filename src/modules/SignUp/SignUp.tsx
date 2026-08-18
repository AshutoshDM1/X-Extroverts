'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from '@/Shared/Logo/Logo';
import HeroBackground from '@/Shared/Background/HeroBackground';
import { Particles } from '@/components/ui/particles';
import { WizardStepHeader } from './components/WizardStepHeader';
import { Step1EmailOtp } from './components/Step1EmailOtp';
import { Step2PersonalDetails } from './components/Step2PersonalDetails';
import { Step3Pronouns } from './components/Step3Pronouns';
import { Step4Preferences } from './components/Step4Preferences';
import { Step5InviteCode } from './components/Step5InviteCode';
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
  pronouns: [],
  customPronouns: '',
  state: '',
  city: '',
  inviteCode: '',
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
      pronouns: ['she', 'her'],
      customPronouns: '',
      state: 'Maharashtra',
      city: 'Mumbai',
      inviteCode: 'PARTY30',
      agreeTerms: false,
    });
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => (prev + 1) as SignupStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as SignupStep);
    }
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-black text-white selection:bg-purple-600 selection:text-white">
      {/* Left Column: Visual Brand, Hero Background Image, Particles & Testimonial */}
      <div className="relative hidden lg:flex flex-col justify-between p-10 xl:p-14 overflow-hidden bg-zinc-950 border-r border-white/10 select-none">
        {/* Hero Background Image */}
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

        {/* Bottom: Brand Statement & Quote */}
        <div className="relative z-10 max-w-lg">
          <p className="text-base sm:text-lg xl:text-2xl font-medium text-white leading-snug tracking-tight">
            &ldquo;Turn city strangers into your weekend crew. Real people, authentic vibes, and
            unforgettable memories.&rdquo;
          </p>
        </div>
      </div>

      {/* Right Column: Clean Form Container with Fixed Stepper */}
      <div className="relative flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 min-h-screen overflow-y-auto bg-black">
        {/* Top: Home Link */}
        <div className="w-full flex items-center justify-between shrink-0">
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

        {/* Center: Multi-Step Wizard Flow (Top-aligned to eliminate vertical jumping) */}
        <div className="w-full max-w-lg mx-auto pt-10 pb-8 flex-1 flex flex-col justify-start">
          {/* Fixed Stepper at top (steps 1 to 5) */}
          {currentStep <= 5 && (
            <div className="shrink-0 w-full">
              <WizardStepHeader
                currentStep={currentStep}
                onStepClick={(step) => setCurrentStep(step)}
              />
            </div>
          )}

          {/* Steps container that smoothly adjusts height below the fixed stepper */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="w-full"
              >
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
                  <Step3Pronouns
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={handleNext}
                  />
                )}

                {currentStep === 4 && (
                  <Step4Preferences
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={handleNext}
                  />
                )}

                {currentStep === 5 && (
                  <Step5InviteCode
                    formData={formData}
                    updateFormData={updateFormData}
                    onSubmit={handleNext}
                    onBack={handleBack}
                  />
                )}

                {currentStep === 6 && <SuccessCelebration formData={formData} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom: Legal Disclaimer */}
        <div className="w-full text-center py-2 shrink-0 mt-auto">
          <p className="text-[11px] text-zinc-500 font-normal leading-relaxed max-w-sm mx-auto">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              target="_blank"
              className="text-zinc-400 hover:text-white underline"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              target="_blank"
              className="text-zinc-400 hover:text-white underline"
            >
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
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/90 hover:bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
        title="Fill all form state with dummy data for testing without changing step"
      >
        <span>Fill Test Data</span>
      </button>
    </div>
  );
}

export default SignUpPage;
