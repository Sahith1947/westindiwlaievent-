import React from 'react';
import { ShoppingBag, Sparkles, Mail, Phone, Clock, ArrowRight, HelpCircle } from 'lucide-react';
import { STUDENT_CRAFTS, STALL_BOOKING_CONTACT } from '../../config/eventConfig';
import { SectionDivider, DiyaLamp, RangoliCorner } from '../common/DiwaliMotifs';

export const EntrepreneurshipSection: React.FC = () => {
  return (
    <section id="student-creators" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-diwali-darker via-diwali-burgundy/60 to-diwali-dark overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-diwali-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionDivider title="Student Creator Market" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide uppercase">
            STUDENT CREATIVITY & <span className="text-diwali-gold">ENTREPRENEURSHIP</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-diwali-cream/80 max-w-2xl mx-auto font-light leading-relaxed">
            Support the visionary artisans and student creators of Westin College. Discover authentic hand-crafted Diwali artifacts, eco-friendly diyas, and festival keepsakes.
          </p>
        </div>

        {/* 4 Craft Categories Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {STUDENT_CRAFTS.map((craft, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-diwali-card border border-diwali-gold/30 hover:border-diwali-gold shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-diwali-dark">
                <img
                  src={craft.image}
                  alt={craft.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-diwali-card via-diwali-card/30 to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-diwali-darker/90 border border-diwali-gold/40 text-[10px] font-bold uppercase tracking-wider text-diwali-gold">
                  {craft.tag}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-diwali-gold transition-colors mb-2">
                    {craft.title}
                  </h3>
                  <p className="text-xs text-diwali-cream/70 leading-relaxed font-light">
                    {craft.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-diwali-gold/15 flex items-center justify-between text-[11px] text-diwali-gold font-medium">
                  <span>Student Made</span>
                  <span>Diwali 2024</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA: INTERESTED IN SETTING UP A STALL? */}
        <div className="rounded-2xl bg-gradient-to-br from-diwali-card via-diwali-maroon/60 to-diwali-card border-2 border-diwali-gold/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-15 pointer-events-none">
            <RangoliCorner size={300} />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-diwali-orange mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Campus Creator Opportunity</span>
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mb-3">
              INTERESTED IN SETTING UP A STALL?
            </h3>

            <p className="text-sm text-diwali-cream/80 leading-relaxed font-light mb-6">
              Are you a Westin student or youth artisan with handcrafted products, diyas, sweets, or creative gifts? Reserve your booth at the Westin Diwali Student Market and showcase your brand to the entire campus community.
            </p>

            {/* Editable Contact Details Placeholder */}
            <div className="bg-diwali-darker/80 border border-diwali-gold/30 rounded-xl p-5 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-diwali-gold/80 block uppercase tracking-wider font-semibold mb-1">
                  Organising Cell
                </span>
                <span className="text-white font-medium text-sm">
                  {STALL_BOOKING_CONTACT.coordinatorName}
                </span>
                <p className="text-diwali-cream/60 mt-0.5">{STALL_BOOKING_CONTACT.cellDepartment}</p>
              </div>

              <div>
                <span className="text-diwali-gold/80 block uppercase tracking-wider font-semibold mb-1">
                  Contact Coordinates
                </span>
                <div className="space-y-1 text-diwali-cream/90">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-diwali-gold" />
                    <span>{STALL_BOOKING_CONTACT.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-diwali-gold" />
                    <a href={`mailto:${STALL_BOOKING_CONTACT.email}`} className="text-diwali-gold hover:underline">
                      {STALL_BOOKING_CONTACT.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`mailto:${STALL_BOOKING_CONTACT.email}?subject=Westin%20Diwali%20Stall%20Booking%20Inquiry`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-diwali-gold text-diwali-darker font-bold text-xs uppercase tracking-wider hover:bg-diwali-gold-light hover:scale-105 transition-all shadow-lg"
              >
                <span>CONTACT COORDINATORS FOR STALL</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-diwali-gold/80 italic text-center sm:text-left">
                * {STALL_BOOKING_CONTACT.deadline}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
