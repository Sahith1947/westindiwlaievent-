import React from 'react';
import { 
  Clock, 
  Users, 
  Flame, 
  Sparkles, 
  Music, 
  Utensils, 
  PartyPopper,
  Sparkle
} from 'lucide-react';
import { EVENT_SCHEDULE, EVENT_DETAILS } from '../../config/eventConfig';
import { SectionDivider, DiyaLamp, RangoliCorner } from '../common/DiwaliMotifs';

export const ScheduleSection: React.FC = () => {
  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-diwali-gold" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-diwali-gold" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-diwali-gold" />;
      case 'Music':
        return <Music className="w-5 h-5 text-diwali-gold" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-diwali-gold" />;
      case 'PartyPopper':
        return <PartyPopper className="w-5 h-5 text-diwali-gold" />;
      case 'Sparkle':
        return <Sparkle className="w-5 h-5 text-diwali-gold" />;
      default:
        return <Clock className="w-5 h-5 text-diwali-gold" />;
    }
  };

  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-diwali-dark overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-diwali-burgundy/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionDivider title="Event Flow & Timeline" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide uppercase">
            EVENT <span className="text-diwali-gold">SCHEDULE</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-diwali-cream/80 max-w-2xl mx-auto font-light leading-relaxed">
            Follow our evening timeline from the auspicious lamp lighting ceremony to the grand fireworks finale.
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-diwali-maroon/60 border border-diwali-gold/40 text-xs font-semibold text-diwali-gold">
            <Clock className="w-3.5 h-3.5" />
            <span>Reporting Time: {EVENT_DETAILS.reportingTime} | Dress Code: {EVENT_DETAILS.dressCode}</span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line for Desktop / Left Line for Mobile */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-diwali-gold/60 via-diwali-orange/40 to-diwali-maroon transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-12">
            {EVENT_SCHEDULE.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Center Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-diwali-card border-2 border-diwali-gold shadow-lg shadow-diwali-gold/20 z-20">
                    {getTimelineIcon(item.iconName)}
                  </div>

                  {/* Card Content: on mobile offset from left line; on desktop alternating */}
                  <div
                    className={`ml-14 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'
                    }`}
                  >
                    <div
                      className={`p-5 sm:p-6 rounded-2xl bg-diwali-card border transition-all duration-300 hover:-translate-y-1 ${
                        item.highlight
                          ? 'border-diwali-gold bg-gradient-to-br from-diwali-card via-diwali-maroon/40 to-diwali-card shadow-lg shadow-diwali-gold/10'
                          : 'border-diwali-gold/25 hover:border-diwali-gold/50'
                      }`}
                    >
                      {/* Time Badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
                          item.highlight
                            ? 'bg-diwali-gold text-diwali-darker shadow-sm'
                            : 'bg-diwali-maroon/70 text-diwali-gold border border-diwali-gold/30'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.time}</span>
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-diwali-cream/75 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
