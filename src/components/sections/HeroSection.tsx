import React from 'react';
import { Clock, Shirt, MapPin, ChevronDown, Sparkles, Flame, ShieldCheck } from 'lucide-react';
import { EVENT_DETAILS, EVENT_LINKS } from '../../config/eventConfig';
import { RegisterButton } from '../common/RegisterButton';
import { DiyaLamp, RangoliCorner, MarigoldFlower } from '../common/DiwaliMotifs';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-diwali-darker via-diwali-burgundy/80 to-diwali-dark">
      {/* Background Decorative Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] bg-gradient-to-b from-diwali-maroon/50 via-diwali-orange/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Floating Diyas & Rangoli Accents in Background */}
      <div className="absolute top-16 left-4 sm:left-12 opacity-20 pointer-events-none">
        <RangoliCorner size={180} />
      </div>
      <div className="absolute top-20 right-4 sm:right-12 opacity-20 pointer-events-none rotate-90">
        <RangoliCorner size={180} />
      </div>
      
      {/* Marigold Garland Header Border */}
      <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none opacity-40 overflow-hidden py-1">
        {Array.from({ length: 24 }).map((_, i) => (
          <MarigoldFlower
            key={i}
            size={i % 2 === 0 ? 20 : 16}
            color={i % 2 === 0 ? 'orange' : 'yellow'}
            className="animate-pulse"
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Westin Logo & Organised by Badge */}
        <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-full bg-diwali-maroon/50 border border-diwali-gold/30 backdrop-blur-md mb-6 shadow-lg shadow-diwali-maroon/40 animate-fade-in">
          <div className="w-8 h-8 rounded-full bg-diwali-gold/10 p-0.5 flex items-center justify-center">
            <img
              src="/images/westin-logo.png"
              alt="Westin Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <DiyaLamp size={18} glow={false} />
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-diwali-gold uppercase">
            {EVENT_DETAILS.collegeName} Presents
          </span>
          <span className="text-diwali-gold/60 text-xs">✦</span>
          <span className="text-[11px] sm:text-xs text-diwali-cream/80 font-medium">
            Vijayawada Campus
          </span>
        </div>

        {/* Decorative Diya Accent */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-diwali-gold/60" />
          <DiyaLamp size={38} />
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-diwali-gold/60" />
        </div>

        {/* Main Heading: WESTIN DIWALI CELEBRATIONS */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase leading-tight sm:leading-none">
          <span className="block text-diwali-gold drop-shadow-[0_2px_15px_rgba(255,211,106,0.35)]">
            WESTIN DIWALI
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-diwali-cream via-diwali-gold to-diwali-orange text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 tracking-wide font-normal">
            CELEBRATIONS
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-diwali-cream/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          {EVENT_DETAILS.tagline}
        </p>

        {/* Event Highlights Badges (Reporting Time & Dress Code Required) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 max-w-3xl w-full mb-10">
          {/* Badge 1: Reporting Time */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-diwali-card/80 border border-diwali-gold/30 shadow-md backdrop-blur-sm hover:border-diwali-gold/60 transition-all text-left">
            <div className="w-10 h-10 rounded-lg bg-diwali-maroon/70 flex items-center justify-center text-diwali-gold flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-diwali-cream/70 uppercase tracking-wider block">
                Reporting Time
              </span>
              <span className="text-base font-bold text-diwali-gold">
                {EVENT_DETAILS.reportingTime}
              </span>
            </div>
          </div>

          {/* Badge 2: Dress Code */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-diwali-card/80 border border-diwali-gold/30 shadow-md backdrop-blur-sm hover:border-diwali-gold/60 transition-all text-left">
            <div className="w-10 h-10 rounded-lg bg-diwali-maroon/70 flex items-center justify-center text-diwali-gold flex-shrink-0">
              <Shirt className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-diwali-cream/70 uppercase tracking-wider block">
                Dress Code
              </span>
              <span className="text-sm font-bold text-diwali-cream">
                Traditional Wear
              </span>
            </div>
          </div>

          {/* Badge 3: Venue */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-diwali-card/80 border border-diwali-gold/30 shadow-md backdrop-blur-sm hover:border-diwali-gold/60 transition-all text-left sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 rounded-lg bg-diwali-maroon/70 flex items-center justify-center text-diwali-gold flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-diwali-cream/70 uppercase tracking-wider block">
                Venue
              </span>
              <span className="text-sm font-bold text-diwali-cream truncate block max-w-[190px]">
                Westin Campus, VJA
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons: REGISTER NOW (Razorpay) & EXPLORE THE CELEBRATION */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <RegisterButton
            size="lg"
            variant="gold"
            label="REGISTER NOW"
            className="w-full sm:w-auto min-w-[220px]"
          />

          <a
            href="#attractions"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full uppercase tracking-wider text-sm font-bold text-diwali-cream border-2 border-diwali-gold/40 hover:border-diwali-gold bg-diwali-maroon/30 hover:bg-diwali-maroon/70 transition-all duration-300 w-full sm:w-auto"
          >
            <span>EXPLORE THE CELEBRATION</span>
            <ChevronDown className="w-4 h-4 text-diwali-gold" />
          </a>
        </div>

        {/* Security & Official Verification Notice */}
        <div className="flex items-center gap-2 text-xs text-diwali-cream/60">
          <ShieldCheck className="w-4 h-4 text-diwali-gold" />
          <span>Official Event Registration directly through Razorpay</span>
        </div>
      </div>
    </section>
  );
};
