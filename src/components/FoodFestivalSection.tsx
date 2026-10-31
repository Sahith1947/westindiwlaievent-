import React from 'react';
import { EVENT_CONFIG } from '../data/eventData';
import { SectionTitle } from './FestiveDecor';
import DiyaIcon from './DiyaIcon';
import { Sparkles, ChefHat, Instagram } from 'lucide-react';

export const FoodFestivalSection: React.FC = () => {
  return (
    <section id="food-festival" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-diwali-dark overflow-hidden">
      {/* Background Decorative Radial Glow */}
      <div className="absolute inset-0 diwali-radial-glow pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        <SectionTitle
          badge="Diwali Food Festival"
          title="SIGNATURE FOOD STALLS"
          subtitle="A grand culinary feast featuring authentic festive delicacies, sizzling live counters, and sweet traditions."
        />

        {/* Official Stalls & Menus Will Be Announced Soon — Announcement Card */}
        <div className="diwali-card rounded-3xl p-6 sm:p-10 md:p-12 text-center border-2 border-diwali-gold/40 shadow-2xl shadow-diwali-maroon/60 relative overflow-hidden max-w-3xl mx-auto">
          
          {/* Decorative Corner Glows */}
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-diwali-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-diwali-orange/15 rounded-full blur-3xl pointer-events-none" />

          {/* Central Festive Chef Hat Icon with Diya */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-diwali-maroon via-diwali-card to-diwali-burgundy border-2 border-diwali-gold/50 shadow-xl flex items-center justify-center">
              <ChefHat className="w-10 h-10 sm:w-12 sm:h-12 text-diwali-gold animate-subtle-float" />
            </div>
            <div className="absolute -bottom-2 -right-2">
              <DiyaIcon size="sm" animated={true} />
            </div>
          </div>

          {/* Headline as requested: Official Stalls & Menus Will Be Announced Soon! */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-diwali-maroon/80 border border-diwali-gold/30 text-xs sm:text-sm font-semibold text-diwali-gold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-diwali-orange animate-pulse shrink-0" />
            <span>Festival Food Court</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-gold-gradient uppercase mb-4 leading-tight">
            Official Stalls & Menus Will Be Announced Soon!
          </h3>

          <p className="text-sm sm:text-base text-diwali-cream/85 max-w-xl mx-auto leading-relaxed mb-8">
            The Westin College Food Festival Committee is curating an extraordinary spread of mouthwatering festive delicacies, sizzling live counters, aromatic biryanis, and traditional Diwali sweets.
          </p>

          {/* Planned Culinary Teaser Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="p-3 sm:p-4 rounded-xl bg-diwali-darker/70 border border-diwali-gold/20 flex flex-col items-center">
              <span className="text-2xl mb-1.5">🍛</span>
              <span className="text-xs font-bold text-diwali-gold">Dum Biryani</span>
              <span className="text-[10px] text-diwali-cream/60">Rich Flavours</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-diwali-darker/70 border border-diwali-gold/20 flex flex-col items-center">
              <span className="text-2xl mb-1.5">🍢</span>
              <span className="text-xs font-bold text-diwali-gold">Live Chaat</span>
              <span className="text-[10px] text-diwali-cream/60">Sizzling & Tangy</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-diwali-darker/70 border border-diwali-gold/20 flex flex-col items-center">
              <span className="text-2xl mb-1.5">🪔</span>
              <span className="text-xs font-bold text-diwali-gold">Festive Mithai</span>
              <span className="text-[10px] text-diwali-cream/60">Diwali Sweets</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-diwali-darker/70 border border-diwali-gold/20 flex flex-col items-center">
              <span className="text-2xl mb-1.5">🍹</span>
              <span className="text-xs font-bold text-diwali-gold">Cool Elixirs</span>
              <span className="text-[10px] text-diwali-cream/60">Mocktails & Chai</span>
            </div>
          </div>

          {/* Actions & Instagram Link */}
          <div className="pt-6 border-t border-diwali-gold/20 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={EVENT_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-diwali-maroon/90 hover:bg-diwali-maroon border border-diwali-gold/40 text-xs sm:text-sm font-bold text-diwali-gold transition-all shadow-md active:scale-95"
            >
              <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
              <span>FOLLOW FOR MENU DROPS ({EVENT_CONFIG.instagramHandle})</span>
            </a>
            <a
              href="#schedule"
              className="px-5 py-2.5 rounded-full bg-diwali-dark/80 hover:bg-diwali-dark border border-diwali-gold/25 text-xs sm:text-sm font-semibold text-diwali-cream/80 hover:text-diwali-gold transition-colors"
            >
              VIEW EVENT TIMELINE
            </a>
          </div>

        </div>

        {/* Committee Note */}
        <div className="mt-8 text-center text-xs text-diwali-cream/60 max-w-lg mx-auto">
          <p>
            * Final stall vendor allocations and menus will be coordinated directly by Westin College Food Festival Committee.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FoodFestivalSection;
