'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';
import { Loader2 } from 'lucide-react';

interface WaitlistButtonProps {
  href?: string;
  onClick?: () => void;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  circleClassName?: string;
  children?: React.ReactNode;
}

export function WaitlistButton({
  href,
  onClick,
  text = 'Join the waitlist',
  type = 'button',
  disabled = false,
  loading = false,
  showIcon = false,
  icon,
  className,
  iconClassName,
  circleClassName,
  children,
}: WaitlistButtonProps) {
  const shouldRenderIcon = loading || showIcon || !!icon;

  const content = (
    <>
      {shouldRenderIcon && (
        <span
          className={cn(
            'flex size-9 items-center justify-center rounded-full bg-neutral-100 p-2 shrink-0',
            circleClassName,
          )}
        >
          {loading ? (
            <Loader2 className="size-4 animate-spin text-neutral-900" />
          ) : icon ? (
            icon
          ) : (
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
              <path
                d="M16.5 7.5L6 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
              <path
                d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </span>
      )}
      <span className="relative capitalize">{children ?? text}</span>
    </>
  );

  const baseStyles = cn(
    'group relative h-11 text-xs sm:text-sm inline-flex shrink-0 items-center justify-center font-medium text-white border border-purple-950 bg-linear-to-b from-purple-400 to-purple-700 shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.15)] transition-colors duration-200 cursor-pointer hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed rounded-full',
    shouldRenderIcon ? 'p-1 pr-6 gap-3.5' : 'px-6',
    className,
  );

  if (href && !onClick && !disabled) {
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled || loading} onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
}

export default WaitlistButton;
