'use client';
interface FooterFineGrainTextProps {
  className?: string;
}

export function FooterFineGrainText({ className }: FooterFineGrainTextProps) {
  return (
    <div className={`relative w-full select-none ${className || ''}`}>
      <svg
        viewBox="0 0 1000 200"
        className="mx-auto w-full max-w-7xl px-2 sm:px-4"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Rich Linear Gradient for Extroverts Title */}
          <linearGradient id="fineGrainTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c2410c" />
            <stop offset="35%" stopColor="#a855f7" />
            <stop offset="70%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#311075" />
          </linearGradient>

          {/* Calibrated Micro-Grain Stipple Filter (Crisp & Non-Blurry) */}
          <filter id="crispMicroNoise" x="0%" y="0%" width="100%" height="100%">
            {/* 1. High frequency procedural grain */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.4"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            {/* 2. Color matrix to sharpen noise contrast into fine stipple dots */}
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 4 -1.1"
              in="noise"
              result="stipple"
            />
            {/* 3. Mask noise strictly inside the letterforms alpha */}
            <feComposite in="stipple" in2="SourceAlpha" operator="in" result="maskedStipple" />
            {/* 4. Blend over gradient with soft-light for natural texture */}
            <feBlend in="maskedStipple" in2="SourceGraphic" mode="overlay" />
          </filter>
        </defs>

        <text
          x="50%"
          y="56%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="url(#fineGrainTextGrad)"
          filter="url(#crispMicroNoise)"
          fontSize="200"
          fontWeight="600"
          letterSpacing="-0.035em"
          className="font-sans"
        >
          Extroverts
        </text>
      </svg>
    </div>
  );
}

export default FooterFineGrainText;
