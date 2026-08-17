'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

interface WaitlistButtonProps {
  href?: string;
  onClick?: () => void;
  text?: string;
  className?: string;
  iconClassName?: string;
  circleClassName?: string;
  children?: React.ReactNode;
}

export function WaitlistButton({
  href = '/waiting-list',
  onClick,
  text = 'Join the waitlist',
  className,
  iconClassName,
  circleClassName,
  children,
}: WaitlistButtonProps) {
  const content = (
    <>
      <span
        className={cn(
          'flex size-10 items-center justify-center rounded-full bg-neutral-100 p-2 shrink-0',
          circleClassName,
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={cn(
            'h-full w-full text-neutral-900 transition-transform duration-300 ease-out group-hover:rotate-45',
            iconClassName,
          )}
        >
          <path d="M16.5 7.5L6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
          <path
            d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </span>
      <span className="relative capitalize">{children ?? text}</span>
    </>
  );

  if (href && !onClick) {
    return (
      <Link
        href={href}
        className={cn(
          'group relative text-sm inline-flex shrink-0 items-center gap-4 overflow-hidden p-1 pr-6 justify-center rounded-full font-medium text-white border border-purple-950 bg-linear-to-b from-purple-400 to-purple-700 shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.1)] transition-[scale,box-shadow] active:scale-[0.96] cursor-pointer',
          className,
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group relative text-sm inline-flex shrink-0 items-center gap-4 overflow-hidden p-1 pr-6 justify-center rounded-full font-medium text-white border border-purple-950 bg-linear-to-b from-purple-400 to-purple-700 shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.1)] transition-[scale,box-shadow] active:scale-[0.96] cursor-pointer',
        className,
      )}
    >
      {content}
    </button>
  );
}

export default WaitlistButton;
