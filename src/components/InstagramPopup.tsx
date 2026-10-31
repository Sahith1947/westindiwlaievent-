import React, { useState, useEffect } from 'react';
import { EVENT_CONFIG } from '../data/eventData';
import DiyaIcon from './DiyaIcon';
import { Instagram, X, Sparkles, ExternalLink } from 'lucide-react';

export const InstagramPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    try {
      const isDismissed = sessionStorage.getItem('westin_diwali_ig_popup_dismissed');
      if (isDismissed) {
        return;
      }
    } catch {
      // In case sessionStorage is restricted
    }

    // Trigger 6 seconds after page load (within 5-7 seconds range)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem('westin_diwali_ig_popup_dismissed', 'true');
    } catch {
      // ignore
    }
  };

  const handleFollowClick = () => {
    window.open(EVENT_CONFIG.instagramUrl, '_blank', 'noopener,noreferrer');
    handleDismiss();
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ig-popup-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in zoom-in-95 duration-300"
    >
      <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-diwali-card via-diwali-maroon to-diwali-burgundy border-2 border-diwali-gold/50 p-6 sm:p-8 shadow-2xl shadow-diwali-maroon/80 text-center overflow-hidden">
        
        {/* Decorative corner glows */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-diwali-gold/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-diwali-orange/15 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-full text-diwali-cream/70 hover:text-white bg-diwali-darker/60 hover:bg-diwali-darker border border-diwali-gold/20 transition-all focus:outline-none focus:ring-2 focus:ring-diwali-gold"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Festive Diya and Instagram Header */}
        <div className="relative flex justify-center items-center mb-4">
          {/* Subtle marigold flower flanking */}
          <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400 mr-4" />
          
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-600 to-purple-600 p-0.5 shadow-xl shadow-rose-600/30 flex items-center justify-center">
              <div className="w-full h-full bg-diwali-card rounded-2xl flex items-center justify-center">
                <Instagram className="w-9 h-9 text-white" />
              </div>
            </div>
            {/* Small glowing Diya accent */}
            <div className="absolute -bottom-2 -right-2">
              <DiyaIcon size="sm" animated={true} />
            </div>
          </div>

          <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400 ml-4" />
        </div>

        {/* Exact PRD Heading */}
        <h3
          id="ig-popup-heading"
          className="text-2xl font-serif font-black tracking-tight text-gold-gradient uppercase mb-2"
        >
          STAY CONNECTED WITH WESTIN!
        </h3>

        {/* Official Username Pill */}
        <div className="inline-block px-3 py-1 rounded-full bg-diwali-darker/80 border border-diwali-gold/30 text-xs font-mono font-bold text-diwali-gold mb-4">
          {EVENT_CONFIG.instagramHandle}
        </div>

        {/* Exact PRD Description */}
        <p className="text-xs sm:text-sm text-diwali-cream/90 leading-relaxed mb-6">
          Follow Westin College on Instagram for event updates, festival highlights, behind-the-scenes moments, photographs and exciting announcements.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
          
          {/* Primary Button — PRD: FOLLOW US ON INSTAGRAM */}
          <button
            onClick={handleFollowClick}
            className="btn-diwali-primary w-full py-3.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wider flex items-center justify-center space-x-2 shadow-lg"
          >
            <Instagram className="w-4 h-4 text-diwali-dark" />
            <span>FOLLOW US ON INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          {/* Secondary Button — PRD: MAYBE LATER */}
          <button
            onClick={handleDismiss}
            className="w-full py-2.5 rounded-full text-xs font-semibold text-diwali-cream/70 hover:text-white transition-colors uppercase tracking-wider"
          >
            MAYBE LATER
          </button>

        </div>

      </div>
    </div>
  );
};

export default InstagramPopup;
