import React, { useState, useEffect } from 'react';
import { Instagram, X, Sparkles, ExternalLink } from 'lucide-react';
import { EVENT_LINKS } from '../../config/eventConfig';
import { DiyaLamp, MarigoldFlower } from '../common/DiwaliMotifs';

const SESSION_STORAGE_KEY = 'westin_diwali_insta_popup_dismissed';

export const InstagramPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    try {
      const isDismissed = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (isDismissed) {
        return;
      }
    } catch (e) {
      // In case sessionStorage is unavailable
    }

    // 5 to 7 seconds timer (setting to 6 seconds)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    } catch (e) {
      // Ignore
    }
  };

  const handleFollowClick = () => {
    // Open in new tab
    window.open(EVENT_LINKS.instagramUrl, '_blank', 'noopener,noreferrer');
    handleDismiss();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="insta-popup-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-md bg-gradient-to-b from-diwali-card via-diwali-burgundy to-diwali-darker border-2 border-diwali-gold/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-diwali-gold/20 text-center overflow-hidden">
        {/* Festive Marigold Garland Header Accents */}
        <div className="absolute top-0 left-0 right-0 flex justify-between px-6 -translate-y-1/2 pointer-events-none">
          <MarigoldFlower size={24} color="orange" />
          <MarigoldFlower size={24} color="yellow" />
          <MarigoldFlower size={24} color="orange" />
        </div>

        {/* Close Icon (X) */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-full text-diwali-cream/70 hover:text-white bg-diwali-maroon/50 hover:bg-diwali-maroon border border-diwali-gold/30 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon / Diya */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-diwali-orange via-diwali-gold to-diwali-maroon p-[2px] shadow-lg shadow-diwali-gold/25">
            <div className="w-full h-full rounded-2xl bg-diwali-dark flex items-center justify-center text-diwali-gold">
              <Instagram className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h3
          id="insta-popup-heading"
          className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide uppercase mb-2"
        >
          STAY CONNECTED <br />
          <span className="text-diwali-gold">WITH WESTIN!</span>
        </h3>

        {/* Username pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-diwali-maroon/60 border border-diwali-gold/40 text-xs font-semibold text-diwali-gold mb-4">
          <Instagram className="w-3.5 h-3.5" />
          <span>{EVENT_LINKS.instagramHandle}</span>
        </div>

        {/* Description from PRD */}
        <p className="text-xs sm:text-sm text-diwali-cream/80 leading-relaxed font-light mb-6">
          Follow Westin College on Instagram for event updates, festival highlights, behind-the-scenes moments, photographs and exciting announcements.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleFollowClick}
            className="w-full sm:flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-diwali-orange via-diwali-gold to-diwali-gold-light text-diwali-darker font-bold text-xs uppercase tracking-wider hover:opacity-95 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-diwali-gold/20 flex items-center justify-center gap-2"
          >
            <Instagram className="w-4 h-4" />
            <span>FOLLOW US ON INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleDismiss}
            className="w-full sm:w-auto py-2.5 px-5 rounded-full text-xs font-semibold uppercase tracking-wider text-diwali-cream/70 hover:text-white bg-diwali-darker/60 border border-diwali-gold/30 hover:bg-diwali-maroon/40 transition-colors"
          >
            MAYBE LATER
          </button>
        </div>
      </div>
    </div>
  );
};
