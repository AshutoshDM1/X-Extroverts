'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { WaitlistButton } from '@/Shared/Button/WaitlistButton';
import { cn } from '@/lib/utils';
import { SignupFormData } from '../types';

interface Step1EmailOtpProps {
  formData: SignupFormData;
  updateFormData: (data: Partial<SignupFormData>) => void;
  onNext: () => void;
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#EA4335"
        d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
      />
      <path
        fill="#FBBC05"
        d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.1s.7 5.4 1.9 7.8l3.7-2.9z"
      />
      <path
        fill="#34A853"
        d="M12 23.2c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16.2C3.7 20 7.5 23.2 12 23.2z"
      />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.68-1.26z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function Step1EmailOtp({ formData, updateFormData, onNext }: Step1EmailOtpProps) {
  const [codeSent, setCodeSent] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [resendTimer, setResendTimer] = useState(30);
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (codeSent && resendTimer > 0) {
      timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [codeSent, resendTimer]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim());
  };

  const handleSendCode = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setEmailError('');

    if (!formData.email.trim()) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCodeSent(true);
      setResendTimer(30);
    }, 600);
  };

  const handleSocialLogin = (provider: string) => {
    setSocialLoading(provider);
    setTimeout(() => {
      setSocialLoading(null);
      updateFormData({
        email: `member@${provider.toLowerCase()}.com`,
        isEmailVerified: true,
      });
      onNext();
    }, 700);
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) {
      const pasted = val.slice(0, 6).split('');
      const nextOtp = [...otpDigits];
      pasted.forEach((char, i) => {
        if (i < 6) nextOtp[i] = char;
      });
      setOtpDigits(nextOtp);
      updateFormData({ otp: nextOtp.join('') });
      const lastIndex = Math.min(pasted.length - 1, 5);
      inputRefs.current[lastIndex]?.focus();
      return;
    }

    if (!/^\d*$/.test(val)) return;

    const nextOtp = [...otpDigits];
    nextOtp[index] = val;
    setOtpDigits(nextOtp);
    updateFormData({ otp: nextOtp.join('') });
    setOtpError('');

    if (val && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpError('');
    const enteredOtp = otpDigits.join('');

    if (enteredOtp.length < 6) {
      setOtpError('Please enter the complete 6-digit verification code');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      updateFormData({ isEmailVerified: true });
      onNext();
    }, 700);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-7">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
          {codeSent ? 'Verify your email' : 'Sign In or Join Now!'}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-normal">
          {codeSent
            ? `We've sent a 6-digit code to ${formData.email}`
            : 'Login or create your extroverts account.'}
        </p>
      </div>

      {!codeSent ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2.5">
            <button
              type="button"
              disabled={!!socialLoading}
              onClick={() => handleSocialLogin('Google')}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-zinc-200 hover:bg-white text-zinc-900 py-3 px-4 text-xs sm:text-sm font-medium transition-all duration-150 active:scale-[0.99] disabled:opacity-50 shadow-sm cursor-pointer"
            >
              <GoogleIcon className="size-4" />
              <span>Continue with Google</span>
            </button>

            <button
              type="button"
              disabled={!!socialLoading}
              onClick={() => handleSocialLogin('Apple')}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-zinc-200 hover:bg-white text-zinc-900 py-3 px-4 text-xs sm:text-sm font-medium transition-all duration-150 active:scale-[0.99] disabled:opacity-50 shadow-sm cursor-pointer"
            >
              <AppleIcon className="size-4" />
              <span>Continue with Apple</span>
            </button>

            <button
              type="button"
              disabled={!!socialLoading}
              onClick={() => handleSocialLogin('GitHub')}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-zinc-200 hover:bg-white text-zinc-900 py-3 px-4 text-xs sm:text-sm font-medium transition-all duration-150 active:scale-[0.99] disabled:opacity-50 shadow-sm cursor-pointer"
            >
              <GithubIcon className="size-4" />
              <span>Continue with GitHub</span>
            </button>
          </div>

          <div className="relative my-2 flex items-center justify-center">
            <div className="h-px w-full bg-white/10" />
            <span className="absolute bg-black px-3 text-[11px] font-normal uppercase tracking-wider text-zinc-500">
              OR
            </span>
          </div>

          <form onSubmit={handleSendCode} className="flex flex-col gap-4">
            <div>
              <Label className="block text-xs font-normal text-zinc-400 mb-1.5">
                Enter your email address to sign in or create an account
              </Label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500 z-10">
                  <Mail className="size-4" />
                </div>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    updateFormData({ email: e.target.value });
                    if (emailError) setEmailError('');
                  }}
                  placeholder="your.email@example.com"
                  className={cn(
                    'h-10 pl-11 pr-4 text-sm rounded-2xl border-0 bg-zinc-900/90 focus:outline-none focus:ring-0 focus-visible:ring-0',
                    emailError && 'text-red-300',
                  )}
                />
              </div>
              {emailError && (
                <p className="mt-1.5 text-xs text-red-400 font-normal">{emailError}</p>
              )}
            </div>

            <WaitlistButton type="submit" loading={loading} className="w-full">
              Continue With Email
            </WaitlistButton>
          </form>
        </div>
      ) : (
        <form onSubmit={handleVerifyOtp} className="flex flex-col gap-6">
          <div>
            <Label className="block text-xs font-medium text-zinc-300 mb-3 text-center">
              Enter 6-Digit Code
            </Label>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              {otpDigits.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => {
                    inputRefs.current[idx] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  className={cn(
                    'size-11 sm:size-12 rounded-xl border-0 bg-zinc-900 text-center text-lg font-medium text-white transition-all outline-none focus:outline-none focus:ring-0',
                    otpError ? 'text-red-400' : '',
                  )}
                  autoFocus={idx === 0}
                />
              ))}
            </div>
            {otpError && (
              <p className="mt-3 text-center text-xs text-red-400 font-normal">{otpError}</p>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
            <button
              type="button"
              onClick={() => setCodeSent(false)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Change Email
            </button>
            <button
              type="button"
              disabled={resendTimer > 0}
              onClick={handleSendCode}
              className={cn(
                'font-medium transition-colors cursor-pointer',
                resendTimer > 0
                  ? 'text-zinc-600 cursor-not-allowed'
                  : 'text-purple-400 hover:text-purple-300',
              )}
            >
              {resendTimer > 0 ? `Resend code in ${resendTimer}s` : 'Resend code'}
            </button>
          </div>

          <WaitlistButton type="submit" loading={loading} className="w-full">
            Verify & Continue
          </WaitlistButton>
        </form>
      )}
    </div>
  );
}

export default Step1EmailOtp;
