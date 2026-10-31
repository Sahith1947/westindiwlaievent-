import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { EVENT_LINKS } from '../../config/eventConfig';

interface RegisterButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'gold';
  label?: string;
  showIcon?: boolean;
}

export const RegisterButton: React.FC<RegisterButtonProps> = ({
  className = '',
  size = 'md',
  variant = 'primary',
  label = 'REGISTER NOW',
  showIcon = true,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider',
    md: 'px-6 py-3 text-sm font-bold tracking-wider',
    lg: 'px-8 py-4 text-base font-bold tracking-widest sm:text-lg',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-diwali-maroon via-diwali-orange to-diwali-gold text-diwali-darker shadow-lg shadow-diwali-orange/25 hover:shadow-diwali-gold/40 hover:scale-[1.03] active:scale-[0.98]',
    gold:
      'bg-gradient-to-r from-diwali-gold via-diwali-gold-light to-diwali-gold text-diwali-darker font-extrabold shadow-lg shadow-diwali-gold/30 hover:shadow-diwali-gold/50 hover:scale-[1.03] active:scale-[0.98]',
    secondary:
      'border-2 border-diwali-gold text-diwali-gold bg-diwali-burgundy/60 backdrop-blur-sm hover:bg-diwali-gold hover:text-diwali-darker hover:scale-[1.03] active:scale-[0.98]',
  };

  return (
    <a
      href={EVENT_LINKS.razorpayRegistration}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full uppercase transition-all duration-300 font-sans ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label={`${label} on official Razorpay payment page`}
    >
      {/* Subtle shimmer effect */}
      <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <span className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
      </span>

      <span className="relative z-10 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-current opacity-80 group-hover:rotate-45 transition-transform duration-300" />
        <span>{label}</span>
        {showIcon && (
          <ArrowUpRight className="w-4 h-4 text-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </a>
  );
};
