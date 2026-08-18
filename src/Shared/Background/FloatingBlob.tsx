'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export type BlobVariant = 1 | 2 | 3 | 4 | 5 | 6;

const BLOB_IMAGE_MAP: Record<BlobVariant, string> = {
  1: '/backgrouds-nobg/image1-nobg.png',
  2: '/backgrouds-nobg/image2-nobg.png',
  3: '/backgrouds-nobg/image3-nobg.png',
  4: '/backgrouds-nobg/image4-nobg.png',
  5: '/backgrouds-nobg/image5-nobg.png',
  6: '/backgrouds-nobg/image6-nobg.png',
};

export interface FloatingBlobProps {
  variant?: BlobVariant;
  src?: string;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  animate?: boolean;
  floatY?: number;
  floatRotate?: number;
  duration?: number;
  delay?: number;
  opacity?: number;
  blur?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  priority?: boolean;
}

const BLUR_CLASSES = {
  none: '',
  sm: 'blur-xs',
  md: 'blur-sm',
  lg: 'blur-md',
  xl: 'blur-lg',
  '2xl': 'blur-xl',
  '3xl': 'blur-2xl',
};

export function FloatingBlob({
  variant = 1,
  src,
  size = 280,
  width,
  height,
  className,
  imageClassName,
  animate = true,
  floatY = 18,
  floatRotate = 6,
  duration = 7,
  delay = 0,
  opacity = 0.85,
  blur = 'none',
  priority = false,
}: FloatingBlobProps) {
  const imageSrc = src || BLOB_IMAGE_MAP[variant] || BLOB_IMAGE_MAP[1];
  const finalWidth = width || size;
  const finalHeight = height || size;

  const content = (
    <div
      style={{
        width: finalWidth,
        height: finalHeight,
        opacity,
      }}
      className={cn(
        'relative select-none pointer-events-none scale-60 transition-opacity duration-300',
        BLUR_CLASSES[blur],
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt="Decorative background blob"
        width={finalWidth}
        height={finalHeight}
        priority={priority}
        className={cn(
          'size-full object-contain pointer-events-none drop-shadow-2xl',
          imageClassName,
        )}
      />
    </div>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      initial={{ y: 0, rotate: 0, scale: 1 }}
      animate={{
        y: [0, -floatY, 0, floatY * 0.5, 0],
        rotate: [0, floatRotate, 0, -floatRotate * 0.7, 0],
        scale: [1, 1.04, 1, 0.98, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        delay,
      }}
      className={cn('pointer-events-none will-change-transform', className)}
    >
      {content}
    </motion.div>
  );
}

export default FloatingBlob;
