'use client';

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

interface TermsAgreementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
}

export function TermsAgreementDialog({ open, onOpenChange, onAccept }: TermsAgreementDialogProps) {
  const handleAcceptAndProceed = () => {
    onAccept();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-w-95 w-[92vw] p-0 bg-zinc-950/95 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden lg:left-[75%] lg:-translate-x-1/2 select-none"
      >
        <div className="flex flex-col p-6 sm:p-7">
          {/* Top Header: Title + Close Button */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium tracking-wide text-white">Community Code</span>
            <DialogClose className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
              <X className="size-5" />
            </DialogClose>
          </div>

          {/* Community Guidelines Manifesto in Clean Natural Casing */}
          <div className="text-xs font-normal text-zinc-200 leading-relaxed space-y-2.5">
            <p>
              By using this app, you’re agreeing to keep things fun, safe, and respectful... and
              also agreeing to our terms and conditions.
            </p>
            <p>Politeness is a must — treat others how you’d want to be treated.</p>
            <p>
              Everyone here is looking for reasons to{' '}
              <span className="text-purple-400 font-medium">party</span>, so bring your best vibe
              and expect the same from others.
            </p>
            <p>Let&apos;s party responsibly and make every experience a great one!</p>
          </div>

          {/* Disclaimer text with link */}
          <div className="mt-5 pt-3 border-t border-white/10 text-center">
            <p className="text-[11px] text-zinc-400 font-normal">
              To proceed, accept our{' '}
              <Link
                href="/terms"
                target="_blank"
                className="text-purple-400 hover:underline font-medium"
              >
                Terms and Conditions
              </Link>{' '}
              &{' '}
              <Link
                href="/guidelines"
                target="_blank"
                className="text-purple-400 hover:underline font-medium"
              >
                Community Guidelines
              </Link>
              .
            </p>
          </div>

          {/* Action Button: Accept */}
          <button
            type="button"
            onClick={handleAcceptAndProceed}
            className="w-full h-10 mt-4 rounded-2xl bg-white text-black font-medium text-sm hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer shadow-lg"
          >
            Accept
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TermsAgreementDialog;
