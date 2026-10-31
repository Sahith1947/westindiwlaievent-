import React from 'react';

/**
 * Handcrafted Indian Diwali Decorative Motifs (SVG)
 * Provides authentic, lightweight visual richness with zero external dependencies.
 */

export const DiyaLamp: React.FC<{
  className?: string;
  size?: number;
  glow?: boolean;
}> = ({ className = '', size = 36, glow = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      {/* Glow aura */}
      {glow && (
        <circle
          cx="24"
          cy="16"
          r="12"
          fill="url(#diyaFlameGlow)"
          opacity="0.6"
          className="animate-pulse"
        />
      )}

      {/* Flame */}
      <path
        d="M24 6C24 6 20 13 20 18C20 20.2091 21.7909 22 24 22C26.2091 22 28 20.2091 28 18C28 13 24 6 24 6Z"
        fill="url(#diyaFlameOuter)"
        className="animate-diya-flicker origin-bottom"
      />
      {/* Inner bright flame core */}
      <path
        d="M24 10C24 10 21.5 14.5 21.5 17.5C21.5 18.88 22.62 20 24 20C25.38 20 26.5 18.88 26.5 17.5C26.5 14.5 24 10 24 10Z"
        fill="#FFF9E6"
        className="animate-diya-flicker origin-bottom"
      />

      {/* Clay Diya Base */}
      <path
        d="M10 26C10 33.732 16.268 40 24 40C31.732 40 38 33.732 38 26C38 25 35 25 24 25C13 25 10 25 10 26Z"
        fill="url(#diyaClayGrad)"
      />
      {/* Rim detailing */}
      <path
        d="M8 25C12 28 36 28 40 25C38 23 10 23 8 25Z"
        fill="#D4A034"
        opacity="0.9"
      />
      {/* Decorative dots on rim */}
      <circle cx="16" cy="27" r="1.2" fill="#FFE494" />
      <circle cx="24" cy="28" r="1.5" fill="#FFE494" />
      <circle cx="32" cy="27" r="1.2" fill="#FFE494" />
      {/* Diya stand pedestal */}
      <path
        d="M20 40H28L30 43H18L20 40Z"
        fill="#8B1E3F"
      />

      <defs>
        <radialGradient id="diyaFlameGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFD36A" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#F28C28" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#690D2A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="diyaFlameOuter" x1="24" y1="6" x2="24" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF1D5" />
          <stop offset="0.4" stopColor="#FFD36A" />
          <stop offset="1" stopColor="#F28C28" />
        </linearGradient>
        <linearGradient id="diyaClayGrad" x1="24" y1="24" x2="24" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9E2A2B" />
          <stop offset="0.7" stopColor="#690D2A" />
          <stop offset="1" stopColor="#4A071D" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const RangoliCorner: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 80 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`opacity-40 text-diwali-gold ${className}`}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      
      {/* 8 Petal geometry */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 50 50)`}>
          <path
            d="M50 15 C52 25, 52 25, 50 35 C48 25, 48 25, 50 15 Z"
            fill="currentColor"
            fillOpacity="0.3"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <circle cx="50" cy="12" r="2" fill="currentColor" />
          <path
            d="M50 25 L50 35"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </g>
      ))}
    </svg>
  );
};

export const SectionDivider: React.FC<{
  title?: string;
  subtitle?: string;
}> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div className="flex items-center justify-center space-x-3 w-full max-w-md">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-diwali-gold/40 to-diwali-gold" />
        <div className="flex items-center space-x-2 text-diwali-gold">
          <span className="text-xs">✦</span>
          <DiyaLamp size={26} glow={false} />
          <span className="text-xs">✦</span>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-diwali-gold/40 to-diwali-gold" />
      </div>
      {title && (
        <span className="text-xs uppercase tracking-[0.25em] text-diwali-gold/90 font-medium mt-2">
          {title}
        </span>
      )}
      {subtitle && (
        <p className="text-sm text-diwali-cream/70 max-w-lg text-center mt-1 font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export const MarigoldFlower: React.FC<{
  className?: string;
  size?: number;
  color?: 'orange' | 'yellow';
}> = ({ className = '', size = 24, color = 'orange' }) => {
  const outerColor = color === 'orange' ? '#F28C28' : '#FFD36A';
  const innerColor = color === 'orange' ? '#FFD36A' : '#FFE494';
  const coreColor = '#D4A034';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <g transform="translate(12 12)">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-6"
            rx="2.4"
            ry="4.5"
            transform={`rotate(${deg})`}
            fill={outerColor}
            opacity="0.85"
          />
        ))}
        {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-4"
            rx="1.8"
            ry="3.2"
            transform={`rotate(${deg})`}
            fill={innerColor}
          />
        ))}
        <circle cx="0" cy="0" r="2.8" fill={coreColor} />
      </g>
    </svg>
  );
};
