import React from 'react';
import { FESTIVAL_ATTRACTIONS } from '../data/eventData';
import { SectionTitle } from './FestiveDecor';
import { Sparkles, ArrowRight } from 'lucide-react';

export const AttractionsSection: React.FC = () => {
  return (
    <section id="attractions" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-diwali-dark">
      <div className="max-w-7xl mx-auto">
        
        <SectionTitle
          badge="8 Signature Experiences"
          title="FESTIVAL ATTRACTIONS"
          subtitle="Immerse yourself in authentic cultural rituals, culinary feasts, creative art, and high-energy music crafted for Diwali."
        />

        {/* 8 Attractions Grid — Responsive 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {FESTIVAL_ATTRACTIONS.map((attraction, index) => (
            <div
              key={attraction.id}
              className="diwali-card group rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Category Badge */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-diwali-darker">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-diwali-card via-transparent to-black/20" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-diwali-maroon/90 border border-diwali-gold/40 text-[10px] sm:text-[11px] font-bold text-diwali-gold uppercase tracking-wider backdrop-blur-md shadow-md">
                      {attraction.badge}
                    </span>
                  </div>

                  {/* Attraction Number Indicator */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-diwali-darker/80 border border-diwali-gold/30 flex items-center justify-center text-xs font-serif font-bold text-diwali-gold">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <span className="text-[10px] uppercase tracking-widest text-diwali-orange font-bold">
                    {attraction.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-diwali-cream group-hover:text-diwali-gold transition-colors mt-1 mb-1.5 sm:mb-2">
                    {attraction.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-diwali-cream/75 leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Accent */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                <div className="pt-2.5 sm:pt-3 border-t border-diwali-gold/10 flex items-center justify-between text-xs text-diwali-gold/80 font-medium">
                  <span className="text-diwali-cream/60">{attraction.subtitle}</span>
                  <Sparkles className="w-3.5 h-3.5 text-diwali-orange group-hover:rotate-45 transition-transform shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner linking to Food Stalls and Student Market */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-diwali-burgundy/80 via-diwali-maroon/60 to-diwali-burgundy/80 border border-diwali-gold/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg sm:text-2xl font-serif font-bold text-white mb-1">
              Ready to Taste, Celebrate & Light Up the Night?
            </h4>
            <p className="text-xs sm:text-sm text-diwali-cream/80 max-w-xl">
              From the 8 savory food stalls to the traditional Bommala Koluvu and parrot fortune telling, there is something magical for everyone.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <a
              href="#food-festival"
              className="px-5 py-3 sm:py-2.5 rounded-full bg-diwali-maroon border border-diwali-gold/50 text-xs font-bold text-diwali-gold hover:bg-diwali-gold hover:text-diwali-dark transition-all flex items-center justify-center space-x-1.5"
            >
              <span>VIEW FOOD STALLS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#schedule"
              className="px-5 py-3 sm:py-2.5 rounded-full bg-diwali-dark/80 border border-diwali-gold/30 text-xs font-semibold text-diwali-cream hover:text-diwali-gold transition-colors text-center"
            >
              CHECK TIMELINE
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AttractionsSection;
