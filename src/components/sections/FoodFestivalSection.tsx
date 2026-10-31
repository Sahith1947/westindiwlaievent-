import React from 'react';
import { Utensils, Sparkles, Leaf, Info } from 'lucide-react';
import { FOOD_STALLS } from '../../config/eventConfig';
import { SectionDivider, DiyaLamp, RangoliCorner } from '../common/DiwaliMotifs';

export const FoodFestivalSection: React.FC = () => {
  return (
    <section id="food-festival" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-diwali-darker overflow-hidden">
      {/* Decorative Rangoli Pattern in Background */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
        <RangoliCorner size={420} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionDivider title="Diwali Food Festival" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide uppercase">
            EIGHT DEDICATED <span className="text-diwali-gold">FOOD STALLS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-diwali-cream/80 max-w-2xl mx-auto font-light leading-relaxed">
            Prepared by the culinary enthusiasts of Westin College. Relish traditional festive sweets, royal savoury delicacies, and sizzling street food.
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-diwali-maroon/40 border border-diwali-gold/30 text-xs text-diwali-gold">
            <Info className="w-3.5 h-3.5" />
            <span>All 8 stall menus are curated for Diwali eve & easily editable in eventConfig.ts</span>
          </div>
        </div>

        {/* 8 Food Stalls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FOOD_STALLS.map((stall) => (
            <div
              key={stall.id}
              className="group rounded-2xl overflow-hidden bg-diwali-card border border-diwali-gold/25 hover:border-diwali-gold shadow-xl hover:shadow-diwali-gold-glow hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Food Image */}
              <div className="relative h-48 w-full overflow-hidden bg-diwali-dark">
                <img
                  src={stall.image}
                  alt={stall.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-diwali-card via-diwali-card/20 to-transparent" />

                {/* Stall Number Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-diwali-darker/90 border border-diwali-gold/40 text-xs font-bold text-diwali-gold uppercase tracking-wider backdrop-blur-sm">
                  {stall.stallNumber}
                </div>

                {/* Veg Indicator if applicable */}
                {stall.isVegetarianOnly && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-900/90 border border-green-500/50 text-[10px] font-bold text-green-300 uppercase tracking-wider">
                    <Leaf className="w-3 h-3 text-green-400" />
                    <span>Pure Veg</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-diwali-orange block mb-1">
                    {stall.cuisine}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-diwali-gold transition-colors leading-snug mb-2">
                    {stall.name}
                  </h3>
                  <p className="text-xs text-diwali-cream/70 leading-relaxed font-light mb-4">
                    {stall.description}
                  </p>
                </div>

                {/* Popular Menu Items Preview */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-diwali-gold/80 block mb-1.5">
                    Signature Offerings:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {stall.popularItems.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-diwali-maroon/40 border border-diwali-gold/20 text-diwali-cream/90 font-light"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
