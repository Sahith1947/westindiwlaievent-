import React from 'react';
import { EVENT_SCHEDULE } from '../data/eventData';
import { SectionTitle } from './FestiveDecor';
import DiyaIcon from './DiyaIcon';
import { Clock, Users, Flame, Sparkles, Music, UtensilsCrossed, PartyPopper, MoonStar } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-diwali-gold" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-diwali-orange" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-diwali-gold" />;
      case 'Music':
        return <Music className="w-5 h-5 text-diwali-orange" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-diwali-gold" />;
      case 'PartyPopper':
        return <PartyPopper className="w-5 h-5 text-diwali-orange" />;
      case 'MoonStar':
      default:
        return <MoonStar className="w-5 h-5 text-diwali-gold" />;
    }
  };

  return (
    <section id="schedule" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-diwali-dark">
      <div className="max-w-5xl mx-auto">
        
        <SectionTitle
          badge="Programme Schedule"
          title="EVENT TIMELINE"
          subtitle="Follow the evening flow of rituals, cultural spectacles, gourmet food courts, fellowship, and grand closing celebrations."
        />

        {/* Timeline Container */}
        <div className="relative mt-12 sm:mt-16">
          
          {/* Vertical Central Line on Desktop / Left Line on Mobile */}
          <div className="absolute top-4 bottom-4 left-6 md:left-1/2 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-diwali-gold/40 via-diwali-orange/60 to-diwali-maroon" />

          {/* Timeline Nodes */}
          <div className="space-y-8 sm:space-y-12">
            {EVENT_SCHEDULE.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  
                  {/* Timeline Content Card */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="diwali-card p-6 rounded-2xl relative border-diwali-gold/25 group-hover:border-diwali-gold/60 transition-all">
                      
                      {/* Mobile Time Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-diwali-maroon/80 border border-diwali-gold/40 text-xs font-bold text-diwali-gold">
                          <Clock className="w-3.5 h-3.5 text-diwali-orange" />
                          <span>{item.time}</span>
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-diwali-orange/90">
                          Phase 0{index + 1}
                        </span>
                      </div>

                      {/* Activity Title */}
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-diwali-cream group-hover:text-diwali-gold transition-colors mb-2">
                        {item.activity}
                      </h3>

                      {/* Activity Description */}
                      <p className="text-xs sm:text-sm text-diwali-cream/75 leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </div>

                  {/* Central Node Diya Marker */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-diwali-card border-2 border-diwali-gold shadow-lg shadow-diwali-orange/30 flex items-center justify-center group-hover:scale-115 transition-transform duration-300">
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  {/* Desktop empty opposite side spacer */}
                  <div className="hidden md:block md:w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

        {/* Schedule Summary Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-diwali-card/80 border border-diwali-gold/30 text-xs sm:text-sm text-diwali-cream/80 shadow-md">
            <Flame className="w-4 h-4 text-diwali-orange animate-pulse" />
            <span>Reporting begins promptly at <strong className="text-diwali-gold">5:30 PM</strong>. Traditional attire is warmly encouraged!</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ScheduleSection;
