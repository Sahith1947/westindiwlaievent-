import React from 'react';
import { 
  UtensilsCrossed, 
  Sparkles, 
  Crown, 
  Eye, 
  Music, 
  Camera, 
  Flame, 
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { ATTRACTIONS } from '../../config/eventConfig';
import { SectionDivider, DiyaLamp, RangoliCorner } from '../common/DiwaliMotifs';

export const AttractionsSection: React.FC = () => {
  // Mapping icons to string names
  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-diwali-gold" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-diwali-gold" />;
      case 'Crown':
        return <Crown className="w-5 h-5 text-diwali-gold" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-diwali-gold" />;
      case 'Music':
        return <Music className="w-5 h-5 text-diwali-gold" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-diwali-gold" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-diwali-gold" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-diwali-gold" />;
      default:
        return <Sparkles className="w-5 h-5 text-diwali-gold" />;
    }
  };

  return (
    <section id="attractions" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-diwali-darker overflow-hidden">
      {/* Decorative Rangoli Pattern in Background */}
      <div className="absolute top-10 right-0 translate-x-1/3 opacity-15 pointer-events-none">
        <RangoliCorner size={360} />
      </div>
      <div className="absolute bottom-10 left-0 -translate-x-1/3 opacity-15 pointer-events-none">
        <RangoliCorner size={360} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionDivider title="Major Event Attractions" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide uppercase">
            EIGHT REASONS TO <span className="text-diwali-gold">CELEBRATE</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-diwali-cream/80 max-w-2xl mx-auto font-light leading-relaxed">
            From mouthwatering festival feasts to timeless cultural arts, explore the curated attractions waiting for you at Westin College.
          </p>
        </div>

        {/* 8 Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ATTRACTIONS.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-diwali-card border border-diwali-gold/25 hover:border-diwali-gold shadow-xl shadow-diwali-darker/60 hover:shadow-diwali-maroon-glow hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-diwali-dark">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-diwali-card via-diwali-card/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-diwali-darker/85 backdrop-blur-md border border-diwali-gold/30 text-[11px] font-semibold tracking-wider text-diwali-gold uppercase">
                  {renderIcon(item.highlightIcon)}
                  <span>{item.category}</span>
                </div>

                {/* Highlight Badge */}
                {item.badge && (
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-diwali-maroon/90 border border-diwali-gold/40 text-[10px] font-bold tracking-wider text-diwali-cream uppercase">
                    {item.badge}
                  </div>
                )}

                {/* Index Watermark */}
                <span className="absolute bottom-2 right-3 font-serif text-3xl font-extrabold text-white/10 select-none">
                  0{index + 1}
                </span>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-diwali-orange block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-diwali-gold transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-diwali-cream/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Accent */}
                <div className="mt-5 pt-4 border-t border-diwali-gold/15 flex items-center justify-between text-xs text-diwali-gold/80">
                  <span className="flex items-center gap-1.5 font-medium">
                    <DiyaLamp size={16} glow={false} />
                    <span>Diwali Experience</span>
                  </span>
                  <span className="text-diwali-cream/40 group-hover:text-diwali-gold transition-colors">
                    ✦
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
