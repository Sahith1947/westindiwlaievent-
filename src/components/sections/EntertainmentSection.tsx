import React from 'react';
import { Gavel, Gamepad2, Sparkles, PartyPopper, CheckCircle2, AlertCircle } from 'lucide-react';
import { ENTERTAINMENT_DATA } from '../../config/eventConfig';
import { SectionDivider, DiyaLamp, RangoliCorner } from '../common/DiwaliMotifs';
import { RegisterButton } from '../common/RegisterButton';

export const EntertainmentSection: React.FC = () => {
  const getActivityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gavel':
        return <Gavel className="w-6 h-6 text-diwali-gold" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6 text-diwali-gold" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-diwali-gold" />;
      case 'PartyPopper':
        return <PartyPopper className="w-6 h-6 text-diwali-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-diwali-gold" />;
    }
  };

  return (
    <section id="entertainment" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-diwali-dark via-diwali-card to-diwali-darker overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-diwali-maroon/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionDivider title="Special Highlights" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide uppercase">
            LIVE BIDDING & <span className="text-diwali-gold">STAGE ENTERTAINMENT</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-diwali-cream/80 max-w-2xl mx-auto font-light leading-relaxed">
            {ENTERTAINMENT_DATA.sectionSubtitle}
          </p>
        </div>

        {/* 4 Entertainment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {ENTERTAINMENT_DATA.activities.map((activity, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 bg-diwali-darker/80 border transition-all duration-300 relative flex flex-col justify-between ${
                idx === 0
                  ? 'border-diwali-gold shadow-xl shadow-diwali-gold/10 bg-gradient-to-br from-diwali-card to-diwali-darker'
                  : 'border-diwali-gold/25 hover:border-diwali-gold/60 shadow-lg'
              }`}
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-diwali-maroon/60 border border-diwali-gold/40 flex items-center justify-center shadow-md">
                    {getActivityIcon(activity.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-diwali-gold bg-diwali-gold/10 border border-diwali-gold/30">
                    {activity.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                  {activity.title}
                </h3>

                <p className="text-sm text-diwali-cream/80 leading-relaxed font-light mb-6">
                  {activity.description}
                </p>

                {/* Activity Highlights Checklist */}
                <div className="space-y-2.5 mb-6">
                  {activity.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-diwali-cream/90">
                      <CheckCircle2 className="w-4 h-4 text-diwali-gold flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Note for Bidding or Highlights */}
              {activity.note && (
                <div className="mt-4 pt-4 border-t border-diwali-gold/20 flex items-start gap-2 text-xs text-diwali-gold/90 bg-diwali-maroon/20 p-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-diwali-gold flex-shrink-0 mt-0.5" />
                  <span className="italic">{activity.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Audience Participation Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-diwali-maroon via-diwali-burgundy to-diwali-maroon border-2 border-diwali-gold/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden sm:flex w-14 h-14 rounded-full bg-diwali-gold/20 border border-diwali-gold/40 items-center justify-center flex-shrink-0">
              <DiyaLamp size={32} />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-2xl font-bold text-diwali-gold">
                Join the High-Energy Celebration!
              </h4>
              <p className="text-xs sm:text-sm text-diwali-cream/85 font-light mt-1 max-w-xl">
                Every ticket gives you access to the live entertainment arena, interactive bidding, stage shows, and cultural revelry.
              </p>
            </div>
          </div>

          <RegisterButton size="md" variant="gold" label="REGISTER YOUR PASS" className="flex-shrink-0 w-full md:w-auto" />
        </div>
      </div>
    </section>
  );
};
