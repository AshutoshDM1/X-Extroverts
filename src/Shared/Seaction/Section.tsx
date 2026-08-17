import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  containerClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'default';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'hero' | 'default';
  noContainer?: boolean;
}

const sizeClasses = {
  default: 'max-w-7xl',
  sm: 'max-w-4xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-screen-2xl',
  full: 'max-w-full',
};

const paddingClasses = {
  default: 'py-20 sm:py-28',
  none: 'py-0',
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-20',
  lg: 'py-24 sm:py-32',
  hero: 'py-20 md:py-28 lg:py-32',
};

export function Section({
  children,
  className,
  containerClassName,
  size = 'default',
  padding = 'default',
  noContainer = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden bg-black text-white',
        paddingClasses[padding],
        className,
      )}
      {...props}
    >
      {noContainer ? (
        children
      ) : (
        <div className={cn('mx-auto w-full px-6 sm:px-8', sizeClasses[size], containerClassName)}>
          {children}
        </div>
      )}
    </section>
  );
}

export default Section;
