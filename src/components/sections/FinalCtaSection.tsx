import React from 'react';
import { Sparkles, ShieldCheck, Clock, Shirt, ArrowRight, ExternalLink } from 'lucide-react';
import { EVENT_DETAILS, EVENT_LINKS } from '../../config/eventConfig';
import { RegisterButton } from '../common/RegisterButton';
import { DiyaLamp, RangoliCorner, MarigoldFlower } from '../common/DiwaliMotifs';

export const FinalCtaSection: React.FC = () => {
  return (
    <section id="register" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-diwali-dark via-diwali-burgundy to-diwali-darker overflow-hidden">
      {/* Decorative Lighting and Rangoli */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-r from-diwali-orange/20 via-diwali-gold/15 to-diwali-maroon/30 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Rangoli Pattern */}
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-20 pointer-events-none">
        <RangoliCorner size={400} />
      </div>
      <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 opacity-20 pointer-events-none">
        <RangoliCorner size={400} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Festive Diya Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <MarigoldFlower size={20} color="orange" />
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-diwali-gold" />
          <DiyaLamp size={42} />
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-diwali-gold" />
          <MarigoldFlower size={20} color="yellow" />
        </div>

        {/* Heading: LIGHT UP YOUR DIWALI WITH WESTIN! */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide uppercase leading-tight sm:leading-none mb-6">
          LIGHT UP YOUR DIWALI <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-diwali-gold via-diwali-orange to-diwali-gold-light drop-shadow-[0_2px_15px_rgba(255,211,106,0.3)]">
            WITH WESTIN!
          </span>
        </h2>

        {/* Supporting text */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-diwali-cream/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Celebrate tradition, enjoy amazing food, experience music and create unforgettable memories with Westin.
        </p>

        {/* Event Quick Info Card */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-4 rounded-2xl bg-diwali-darker/80 border border-diwali-gold/30 backdrop-blur-md mb-10 shadow-xl">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-diwali-cream">
            <Clock className="w-4 h-4 text-diwali-gold" />
            <span>Reporting: <strong>{EVENT_DETAILS.reportingTime}</strong></span>
          </div>

          <span className="hidden sm:inline text-diwali-gold/40">✦</span>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-diwali-cream">
            <Shirt className="w-4 h-4 text-diwali-gold" />
            <span>Dress Code: <strong>Traditional Wear</strong></span>
          </div>

          <span className="hidden sm:inline text-diwali-gold/40">✦</span>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-diwali-gold font-semibold">
            <ShieldCheck className="w-4 h-4 text-diwali-gold" />
            <span>Official Razorpay Gateway</span>
          </div>
        </div>

        {/* Primary REGISTER NOW Button linking to Razorpay */}
        <div className="flex flex-col items-center justify-center gap-4">
          <RegisterButton
            size="lg"
            variant="gold"
            label="REGISTER NOW"
            className="w-full sm:w-auto min-w-[260px] text-lg sm:text-xl py-5 shadow-2xl shadow-diwali-gold/30"
          />

          <span className="text-xs text-diwali-cream/70 flex items-center gap-1.5 mt-2">
            <span>Direct link:</span>
            <a
              href={EVENT_LINKS.razorpayRegistration}
              target="_blank"
              rel="noopener noreferrer"
              className="text-diwali-gold hover:underline font-mono"
            >
              rzp.io/rzp/0u8FSXT
            </a>
            <ExternalLink className="w-3 h-3 text-diwali-gold" />
          </span>
        </div>
      </div>
    </section>
  );
};
