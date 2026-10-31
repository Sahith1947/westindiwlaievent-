import React from 'react';
import { EVENT_CONFIG } from '../data/eventData';
import DiyaIcon from './DiyaIcon';
import { ExternalLink, Flame, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const RegistrationCtaSection: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-diwali-pattern-bg overflow-hidden border-t-2 border-diwali-gold/30">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 diwali-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Animated Diya icon */}
        <div className="mb-6 animate-subtle-float">
          <DiyaIcon size="lg" animated={true} />
        </div>

        {/* Small Festive Pre-heading */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-diwali-maroon/80 border border-diwali-gold/40 text-diwali-gold text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 shadow-md">
          <Sparkles className="w-4 h-4 text-diwali-orange animate-spin" style={{ animationDuration: '6s' }} />
          <span>Seats & Entry Passes Filling Fast</span>
        </div>

        {/* Heading — Strict PRD text */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-gold-gradient uppercase drop-shadow-2xl leading-tight mb-6">
          LIGHT UP YOUR DIWALI<br />
          <span className="text-white drop-shadow-[0_4px_25px_rgba(255,211,106,0.4)]">
            WITH WESTIN!
          </span>
        </h2>

        {/* Supporting text — Strict PRD text */}
        <p className="text-lg sm:text-xl text-diwali-cream/95 max-w-2xl mx-auto mb-10 leading-relaxed font-serif italic">
          "Celebrate tradition, enjoy amazing food, experience music and create unforgettable memories with Westin."
        </p>

        {/* Quick Highlights checklist before booking */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-diwali-cream/80 mb-10">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-diwali-gold" />
            <span>8 Signature Food Stalls</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-diwali-gold" />
            <span>Bommala Koluvu & Parrot Lore</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-diwali-gold" />
            <span>Live Music & Grand Fireworks</span>
          </div>
        </div>

        {/* Prominent REGISTER NOW Button — Strict PRD Requirement */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={EVENT_CONFIG.paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-diwali-primary px-10 py-5 rounded-full text-lg sm:text-xl font-black tracking-widest flex items-center justify-center space-x-3 shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
          >
            <Flame className="w-6 h-6 fill-diwali-dark" />
            <span>REGISTER NOW</span>
            <ExternalLink className="w-5 h-5 ml-1" />
          </a>
        </div>

        {/* Razorpay Trust note */}
        <div className="mt-8 flex flex-col items-center justify-center space-y-2 text-xs text-diwali-cream/60">
          <div className="flex items-center space-x-2 text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>Direct Redirect to Official Razorpay Payment Portal</span>
          </div>
          <p className="max-w-md text-[11px] text-diwali-cream/50">
            Payment receipt & festival entry confirmation will be issued immediately upon completing the transaction on Razorpay.
          </p>
        </div>

      </div>
    </section>
  );
};

export default RegistrationCtaSection;
