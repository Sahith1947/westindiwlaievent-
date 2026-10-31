import React, { useState } from 'react';
import { FOOD_STALLS, FoodStall } from '../data/eventData';
import { SectionTitle } from './FestiveDecor';
import { UtensilsCrossed, Flame, Sparkles, ChefHat } from 'lucide-react';

export const FoodFestivalSection: React.FC = () => {
  const [selectedStall, setSelectedStall] = useState<FoodStall | null>(null);

  return (
    <section id="food-festival" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-diwali-dark">
      <div className="max-w-7xl mx-auto">
        
        <SectionTitle
          badge="Diwali Food Festival"
          title="8 SIGNATURE FOOD STALLS"
          subtitle="Savor a royal spread of festive feasts, sizzling street chaat, slow-dum biryanis, hot tandoor grills, and sweet delicacies."
        />

        {/* 8 Stalls Grid — Responsive 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FOOD_STALLS.map((stall) => (
            <div
              key={stall.id}
              className="diwali-card group rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Stall Photography with Overlay Badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-diwali-darker">
                  <img
                    src={stall.image}
                    alt={stall.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-diwali-card via-black/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-diwali-maroon/90 border border-diwali-gold/40 text-[10px] font-bold text-diwali-gold uppercase tracking-wider backdrop-blur-md">
                      {stall.category}
                    </span>
                  </div>

                  {/* Stall Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded-md bg-diwali-darker/80 border border-diwali-gold/20 text-[10px] font-semibold text-diwali-cream/80">
                      {stall.badge || `Stall 0${stall.id}`}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-6">
                  <span className="text-[10px] uppercase tracking-widest text-diwali-orange font-bold">
                    {stall.tagline}
                  </span>
                  
                  <h3 className="text-xl font-serif font-bold text-diwali-cream group-hover:text-diwali-gold transition-colors mt-1 mb-2">
                    {stall.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-diwali-cream/75 leading-relaxed mb-4">
                    {stall.description}
                  </p>

                  {/* Sample Menu Highlights */}
                  {stall.highlights && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {stall.highlights.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-full bg-diwali-maroon/40 border border-diwali-gold/20 text-[11px] text-diwali-cream/90"
                        >
                          • {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <div className="pt-3 border-t border-diwali-gold/10 flex items-center justify-between text-xs text-diwali-gold">
                  <span className="flex items-center space-x-1">
                    <ChefHat className="w-3.5 h-3.5 text-diwali-orange" />
                    <span className="text-[11px] text-diwali-cream/70">Freshly Prepared</span>
                  </span>
                  <span className="text-[11px] font-semibold text-diwali-gold uppercase">Food Court</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Note regarding Stall details & menus */}
        <div className="mt-12 text-center text-xs text-diwali-cream/60">
          <p>
            * Stall names and festive menus shown are editable placeholders. Final menus and vendor allocations are coordinated by Westin College Food Festival Committee.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FoodFestivalSection;
