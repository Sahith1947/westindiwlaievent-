import React from 'react';
import { EVENT_CONFIG } from '../data/eventData';
import DiyaIcon from './DiyaIcon';
import { MarigoldToran, RangoliMandala } from './FestiveDecor';
import { Clock, Shirt, Sparkles, MapPin, ExternalLink, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-diwali-pattern-bg">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 diwali-radial-glow pointer-events-none" />

      {/* Decorative Rotating Rangoli Mandalas in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 opacity-15 pointer-events-none animate-subtle-float overflow-hidden max-w-full">
        <RangoliMandala className="w-[320px] sm:w-[650px] lg:w-[900px] h-auto text-diwali-gold animate-spin" style={{ animationDuration: '120s' } as React.CSSProperties} />
      </div>

      {/* Hanging Festive Toran at top */}
      <div className="absolute top-14 sm:top-16 left-0 right-0 z-0 overflow-hidden">
        <MarigoldToran className="opacity-70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center w-full">
        
        {/* Westin Logo Placeholder & Animated Diya */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 animate-subtle-float">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white p-1.5 sm:p-2 shadow-xl border-2 border-diwali-gold/60 flex items-center justify-center">
            <img
              src="/images/westin-logo.png"
              alt="Westin College Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <DiyaIcon size="lg" animated={true} />
        </div>

        {/* Institution Branding */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-diwali-maroon/70 border border-diwali-gold/30 text-diwali-gold text-[11px] sm:text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-5 shadow-lg backdrop-blur-sm max-w-[95%] text-center">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-diwali-orange animate-pulse shrink-0" />
          <span className="truncate sm:whitespace-normal">Westin College of Hotel & Business Management</span>
        </div>

        {/* Main Heading — PRD Specification */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-gold-gradient uppercase drop-shadow-2xl leading-[1.1] mb-4 sm:mb-6">
          WESTIN DIWALI<br />
          <span className="text-white drop-shadow-[0_4px_20px_rgba(255,211,106,0.35)]">
            CELEBRATIONS
          </span>
        </h1>

        {/* Tagline — PRD Specification */}
        <p className="text-base sm:text-2xl md:text-3xl font-serif italic text-diwali-cream/95 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal px-2">
          "{EVENT_CONFIG.tagline}"
        </p>

        {/* Event Key Highlights Badge Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 max-w-3xl w-full mb-8 sm:mb-10">
          
          {/* Reporting Time */}
          <div className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-diwali-card/90 border border-diwali-gold/30 shadow-md">
            <div className="p-2 rounded-full bg-diwali-maroon/60 text-diwali-gold border border-diwali-gold/20 shrink-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-diwali-orange" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-wider text-diwali-cream/60 font-semibold">Reporting Time</span>
              <span className="text-sm sm:text-base font-bold text-diwali-gold">{EVENT_CONFIG.reportingTime}</span>
            </div>
          </div>

          {/* Dress Code */}
          <div className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-diwali-card/90 border border-diwali-gold/30 shadow-md">
            <div className="p-2 rounded-full bg-diwali-maroon/60 text-diwali-gold border border-diwali-gold/20 shrink-0">
              <Shirt className="w-4 h-4 sm:w-5 sm:h-5 text-diwali-gold" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-wider text-diwali-cream/60 font-semibold">Dress Code</span>
              <span className="text-sm sm:text-base font-bold text-diwali-gold">{EVENT_CONFIG.dressCode}</span>
            </div>
          </div>

          {/* Venue Location */}
          <div className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-diwali-card/90 border border-diwali-gold/30 shadow-md">
            <div className="p-2 rounded-full bg-diwali-maroon/60 text-diwali-gold border border-diwali-gold/20 shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-diwali-orange" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-wider text-diwali-cream/60 font-semibold">Campus Venue</span>
              <span className="text-sm sm:text-base font-bold text-diwali-gold truncate max-w-[170px]">Bharathi Nagar, VJA</span>
            </div>
          </div>

        </div>

        {/* Hero Action Buttons — Strict PRD Requirement */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          
          {/* Primary Razorpay Direct Button */}
          <a
            href={EVENT_CONFIG.paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-diwali-primary w-full sm:w-auto px-8 py-4 rounded-full text-base sm:text-lg font-black tracking-widest flex items-center justify-center space-x-3 shadow-xl hover:shadow-diwali-glow transition-all"
          >
            <span>REGISTER NOW</span>
            <ExternalLink className="w-5 h-5" />
          </a>

          {/* Secondary Explore Button */}
          <a
            href="#attractions"
            className="btn-diwali-secondary w-full sm:w-auto px-7 py-4 rounded-full text-sm sm:text-base font-bold tracking-wider flex items-center justify-center space-x-2"
          >
            <span>EXPLORE THE CELEBRATION</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-diwali-gold" />
          </a>

        </div>

        {/* Small trust note below CTA */}
        <p className="text-xs text-diwali-cream/60 mt-4 flex items-center justify-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
          <span>Official Secure Razorpay Registration & Entry Pass</span>
        </p>

      </div>

      {/* Flanking Floating Diyas on wide screens */}
      <div className="hidden xl:block absolute left-12 bottom-24 opacity-80 animate-subtle-float">
        <DiyaIcon size="md" />
        <span className="block text-[10px] text-diwali-gold/60 mt-1 uppercase tracking-widest">Shubh Deepavali</span>
      </div>
      <div className="hidden xl:block absolute right-12 bottom-24 opacity-80 animate-subtle-float" style={{ animationDelay: '2s' }}>
        <DiyaIcon size="md" />
        <span className="block text-[10px] text-diwali-gold/60 mt-1 uppercase tracking-widest">Festival of Lights</span>
      </div>
    </section>
  );
};

export default Hero;
