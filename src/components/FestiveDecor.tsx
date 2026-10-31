import React from 'react';

/**
 * Traditional Marigold Garland (Toran) border
 */
export const MarigoldToran: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden flex justify-center items-center select-none pointer-events-none py-1 ${className}`}>
      <div className="flex items-center space-x-3 opacity-80">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            {/* Orange Genda Phool */}
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 shadow-sm shadow-orange-500/50" />
            {/* Golden Genda Phool */}
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-amber-500 shadow-sm shadow-yellow-400/50" />
            {/* Mango Leaf Motif */}
            <div className="w-2 h-4 rounded-tl-full rounded-br-full bg-emerald-800 rotate-45 opacity-60" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Section Header Rangoli Badge with flanking ornamental lines
 */
export const SectionTitle: React.FC<{
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}> = ({ badge, title, subtitle, center = true }) => {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center mx-auto max-w-3xl' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-diwali-maroon/80 border border-diwali-gold/40 text-diwali-gold text-xs uppercase tracking-widest font-semibold mb-4 shadow-sm shadow-diwali-maroon`}>
          <span className="w-1.5 h-1.5 rounded-full bg-diwali-gold animate-ping" />
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-gold-gradient drop-shadow-md">
        {title}
      </h2>
      
      {/* Decorative Golden Rangoli divider */}
      <div className={`flex items-center space-x-3 my-4 ${center ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-diwali-gold/60 to-diwali-gold" />
        <div className="w-2 h-2 rotate-45 bg-diwali-gold shadow-sm shadow-diwali-gold" />
        <div className="w-1.5 h-1.5 rounded-full bg-diwali-orange" />
        <div className="w-2 h-2 rotate-45 bg-diwali-gold shadow-sm shadow-diwali-gold" />
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-diwali-gold/60 to-diwali-gold" />
      </div>

      {subtitle && (
        <p className="text-diwali-cream/80 text-base sm:text-lg font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

/**
 * Rangoli Mandala Geometric SVG
 */
export const RangoliMandala: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = 'w-64 h-64', style }) => {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <circle cx="100" cy="100" r="90" stroke="#FFD36A" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
      <circle cx="100" cy="100" r="75" stroke="#F28C28" strokeWidth="1.2" opacity="0.4"/>
      <circle cx="100" cy="100" r="50" stroke="#FFD36A" strokeWidth="1" opacity="0.5"/>
      <circle cx="100" cy="100" r="25" fill="#690D2A" stroke="#FFD36A" strokeWidth="1.5" opacity="0.6"/>
      {/* Petals */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 100 100)`}>
          <path d="M100 25 C108 50, 108 75, 100 100 C92 75, 92 50, 100 25 Z" fill="#F28C28" opacity="0.25" stroke="#FFD36A" strokeWidth="0.8"/>
          <circle cx="100" cy="22" r="3" fill="#FFD36A" opacity="0.8"/>
        </g>
      ))}
    </svg>
  );
};
