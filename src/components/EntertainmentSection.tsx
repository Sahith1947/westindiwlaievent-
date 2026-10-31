import React from 'react';
import { SPECIAL_ENTERTAINMENT } from '../data/eventData';
import { SectionTitle } from './FestiveDecor';
import { Gavel, Gamepad2, Users, Music2, Sparkles, Gift } from 'lucide-react';

export const EntertainmentSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'auction':
        return <Gavel className="w-6 h-6 text-diwali-gold" />;
      case 'games':
        return <Gamepad2 className="w-6 h-6 text-diwali-orange" />;
      case 'audience':
        return <Users className="w-6 h-6 text-diwali-gold" />;
      case 'performances':
        return <Music2 className="w-6 h-6 text-diwali-orange" />;
      case 'music':
        return <Sparkles className="w-6 h-6 text-diwali-gold" />;
      case 'surprises':
      default:
        return <Gift className="w-6 h-6 text-diwali-orange" />;
    }
  };

  return (
    <section id="entertainment" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-diwali-darker border-t border-diwali-border">
      <div className="max-w-7xl mx-auto">
        
        <SectionTitle
          badge="Live Action & Fun"
          title="SPECIAL ENTERTAINMENT"
          subtitle="Non-stop excitement, stage showcases, audience contests, and live bidding designed to keep the festive spirits soaring."
        />

        {/* Entertainment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {SPECIAL_ENTERTAINMENT.map((item) => (
            <div
              key={item.id}
              className="diwali-card p-5 sm:p-7 rounded-2xl flex flex-col justify-between group hover:border-diwali-gold/50"
            >
              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-diwali-maroon/80 border border-diwali-gold/30 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0">
                    {getIcon(item.id)}
                  </div>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-diwali-maroon/50 border border-diwali-gold/30 text-[10px] sm:text-[11px] font-semibold text-diwali-gold uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-diwali-cream group-hover:text-diwali-gold transition-colors mb-2 sm:mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-diwali-cream/80 leading-relaxed mb-3 sm:mb-4">
                  {item.description}
                </p>
              </div>

              {/* Editable Rules / Announcement Box without invented details */}
              <div className="pt-3 sm:pt-4 border-t border-diwali-gold/15">
                <div className="p-2.5 sm:p-3 rounded-xl bg-diwali-dark/90 border border-diwali-gold/15 text-xs text-diwali-cream/70 flex items-start space-x-2">
                  <span className="text-diwali-gold font-bold uppercase tracking-wider shrink-0 text-[10px] mt-0.5">Note:</span>
                  <span className="leading-snug">{item.notes}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Live Bidding & Stage Notice Box */}
        <div className="mt-12 p-5 rounded-xl bg-diwali-card/80 border border-diwali-gold/20 text-center max-w-2xl mx-auto">
          <p className="text-xs text-diwali-cream/70">
            <span className="text-diwali-gold font-bold uppercase tracking-wider">Campus Announcement:</span> Complete live bidding catalogs, auction item listings, and schedule rules will be announced by the stage anchors during the fellowship hour.
          </p>
        </div>

      </div>
    </section>
  );
};

export default EntertainmentSection;
