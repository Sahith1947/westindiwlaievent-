import React, { useState, useEffect } from 'react';
import { EVENT_CONFIG } from '../data/eventData';
import DiyaIcon from './DiyaIcon';
import { Instagram, X, Sparkles, ExternalLink } from 'lucide-react';

export const InstagramPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Forcefully show popup reliably 1.5 seconds after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const handleFollowClick = () => {
    window.open(EVENT_CONFIG.instagramUrl, '_blank', 'noopener,noreferrer');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ig-popup-heading"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in zoom-in-95 duration-300 touch-manipulation"
    >
      <div className="relative w-full max-w-md max-h-[92vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-diwali-card via-diwali-maroon to-diwali-burgundy border-2 border-diwali-gold/50 p-5 sm:p-8 shadow-2xl shadow-diwali-maroon/80 text-center">
        
        {/* Decorative corner glows */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-diwali-gold/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-diwali-orange/15 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-full text-diwali-cream/70 hover:text-white bg-diwali-darker/60 hover:bg-diwali-darker border border-diwali-gold/20 transition-all focus:outline-none focus:ring-2 focus:ring-diwali-gold"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Festive Diya and Instagram Header */}
        <div className="relative flex justify-center items-center mb-3 sm:mb-4 mt-1">
          {/* Subtle marigold flower flanking */}
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400 mr-3 sm:mr-4" />
          
          <div className="relative">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-600 to-purple-600 p-0.5 shadow-xl shadow-rose-600/30 flex items-center justify-center">
              <div className="w-full h-full bg-diwali-card rounded-2xl flex items-center justify-center">
                <Instagram className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
              </div>
            </div>
            {/* Small glowing Diya accent */}
            <div className="absolute -bottom-2 -right-2">
              <DiyaIcon size="sm" animated={true} />
            </div>
          </div>

          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400 ml-3 sm:ml-4" />
        </div>

        {/* Exact PRD Heading */}
        <h3
          id="ig-popup-heading"
          className="text-xl sm:text-2xl font-serif font-black tracking-tight text-gold-gradient uppercase mb-1.5 sm:mb-2 leading-tight"
        >
          STAY CONNECTED WITH WESTIN!
        </h3>

        {/* Official Username Pill */}
        <div className="inline-block px-3 py-0.5 sm:py-1 rounded-full bg-diwali-darker/80 border border-diwali-gold/30 text-[11px] sm:text-xs font-mono font-bold text-diwali-gold mb-3 sm:mb-4">
          {EVENT_CONFIG.instagramHandle}
        </div>

        {/* Exact PRD Description */}
        <p className="text-xs sm:text-sm text-diwali-cream/90 leading-relaxed mb-5 sm:mb-6">
          Follow Westin College on Instagram for event updates, festival highlights, behind-the-scenes moments, photographs and exciting announcements.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2.5 sm:space-y-3">
          
          {/* Primary Button — PRD: FOLLOW US ON INSTAGRAM */}
          <button
            onClick={handleFollowClick}
            className="btn-diwali-primary w-full py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wider flex items-center justify-center space-x-2 shadow-lg"
          >
            <Instagram className="w-4 h-4 text-diwali-dark shrink-0" />
            <span>FOLLOW US ON INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </button>

          {/* Secondary Button — PRD: MAYBE LATER */}
          <button
            onClick={handleDismiss}
            className="w-full py-2 sm:py-2.5 rounded-full text-xs font-semibold text-diwali-cream/70 hover:text-white transition-colors uppercase tracking-wider"
          >
            MAYBE LATER
          </button>

        </div>

      </div>
    </div>
  );
};

export default InstagramPopup;
