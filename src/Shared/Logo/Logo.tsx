import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  showIcon?: boolean;
  showText?: boolean;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  href?: string;
}

export function Logo({
  showIcon = true,
  showText = true,
  className,
  iconClassName,
  textClassName,
  href = '/',
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2.5 transition-opacity hover:opacity-90',
        className,
      )}
      aria-label="EXTROVERT Home"
    >
      {showIcon && (
        <Image
          src="/logo.png"
          alt="EXTROVERT logo"
          width={28}
          height={28}
          className={cn('size-6 object-contain', iconClassName)}
          priority
        />
      )}
      {showText && (
        <span
          className={cn('text-lg  tracking-tight text-white uppercase font-sans', textClassName)}
        >
          Extroverts
        </span>
      )}
    </Link>
  );
}

export default Logo;
