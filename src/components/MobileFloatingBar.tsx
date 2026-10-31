import React, { useState, useEffect } from 'react';
import { EVENT_CONFIG } from '../data/eventData';
import DiyaIcon from './DiyaIcon';
import { Flame, ExternalLink, X } from 'lucide-react';

export const MobileFloatingBar: React.FC = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 350px (after hero main action)
      if (window.scrollY > 350 && !dismissed) {
        setShow(true);
      } else if (window.scrollY <= 350) {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <aside
      aria-label="Mobile quick registration"
      className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-gradient-to-r from-diwali-card/95 via-diwali-maroon/95 to-diwali-card/95 backdrop-blur-xl border border-diwali-gold/45 rounded-2xl p-2.5 shadow-2xl shadow-black/80 flex items-center justify-between gap-2.5 animate-in slide-in-from-bottom-3 duration-300 touch-manipulation"
    >
      {/* Event snapshot info */}
      <div className="flex items-center space-x-2 pl-1 min-w-0">
        <DiyaIcon size="sm" animated={true} />
        <div className="truncate text-left">
          <span className="block text-xs font-serif font-bold text-diwali-gold truncate leading-tight">
            Diwali Entry Pass
          </span>
          <span className="block text-[10px] text-diwali-cream/70 font-mono truncate">
            4:30 PM • Westin VJA
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-1.5 shrink-0">
        <a
          href={EVENT_CONFIG.paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-diwali-primary px-3.5 py-2 rounded-xl text-xs font-black tracking-wider flex items-center space-x-1.5 shadow-md active:scale-95 transition-transform"
        >
          <Flame className="w-3.5 h-3.5 fill-diwali-dark text-diwali-dark" />
          <span>REGISTER</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>

        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 rounded-lg text-diwali-cream/60 hover:text-white bg-diwali-darker/60 active:bg-diwali-darker border border-diwali-gold/20"
          aria-label="Dismiss quick bar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};

export default MobileFloatingBar;
