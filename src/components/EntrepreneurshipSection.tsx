import React from 'react';
import { EVENT_CONFIG } from '../data/eventData';
import { SectionTitle } from './FestiveDecor';
import { Sparkles, Palette, Store, HeartHandshake, Mail, Phone, CalendarCheck } from 'lucide-react';

export const EntrepreneurshipSection: React.FC = () => {
  const categories = [
    {
      title: "Handmade Diyas & Clay Lamps",
      desc: "Artisanal hand-painted earthen lamps, terracotta candleholders, and embellished floral deepams crafted by student artisans.",
      icon: <Sparkles className="w-5 h-5 text-diwali-gold" />
    },
    {
      title: "Festive Decorative Products",
      desc: "Vibrant door torans, shubh-labh hangings, mirror-work wall tapestries, and golden lanterns to brighten up Diwali homes.",
      icon: <Palette className="w-5 h-5 text-diwali-orange" />
    },
    {
      title: "Student Handicrafts & Art",
      desc: "Eco-friendly Diwali cards, resin coasters, festive gift envelopes, and handcrafted festive keepsakes.",
      icon: <Store className="w-5 h-5 text-diwali-gold" />
    },
    {
      title: "Creative Handmade Items",
      desc: "Hand-poured aromatic soy candles, natural herbal rangoli color powders, and curated festive hampers.",
      icon: <HeartHandshake className="w-5 h-5 text-diwali-orange" />
    }
  ];

  return (
    <section id="student-market" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-diwali-darker border-t border-diwali-border">
      <div className="max-w-7xl mx-auto">
        
        <SectionTitle
          badge="Empowering Young Makers"
          title="STUDENT ENTREPRENEURSHIP & CRAFTS"
          subtitle="Celebrating student innovation and artistic enterprise with vibrant creator stalls across the campus."
        />

        {/* 4 Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="diwali-card p-6 rounded-2xl flex flex-col justify-between group hover:border-diwali-gold/50"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-diwali-maroon/80 border border-diwali-gold/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-diwali-cream group-hover:text-diwali-gold transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-diwali-cream/75 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-diwali-gold/10 text-[11px] font-semibold text-diwali-gold flex items-center justify-between">
                <span>100% Student Made</span>
                <span className="w-1.5 h-1.5 rounded-full bg-diwali-orange" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action: INTERESTED IN SETTING UP A STALL? */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-diwali-maroon/90 via-diwali-card to-diwali-burgundy border-2 border-diwali-gold/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-diwali-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-diwali-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-diwali-darker/70 border border-diwali-gold/40 text-diwali-gold text-xs font-bold uppercase tracking-widest mb-4">
              <Store className="w-3.5 h-3.5 text-diwali-orange" />
              <span>Stall Registrations Open</span>
            </span>

            {/* Exact PRD CTA Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-gold-gradient uppercase tracking-wide mb-3">
              INTERESTED IN SETTING UP A STALL?
            </h3>

            <p className="text-sm sm:text-base text-diwali-cream/90 mb-8 leading-relaxed">
              Showcase your creative festive handmade diyas, culinary specialties, art, and decor to hundreds of students, faculty, and festival visitors.
            </p>

            {/* Editable Contact Info Placeholder Box — Strict PRD Requirement */}
            <div className="bg-diwali-darker/90 rounded-2xl p-6 border border-diwali-gold/30 text-left mb-8 shadow-inner">
              <h4 className="text-xs uppercase tracking-widest font-bold text-diwali-gold mb-3 flex items-center space-x-1.5">
                <CalendarCheck className="w-4 h-4 text-diwali-orange" />
                <span>{EVENT_CONFIG.stallCoordination.title}</span>
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="block text-[11px] text-diwali-cream/60 uppercase font-semibold">Contact Coordinator:</span>
                  <span className="text-diwali-cream font-medium">{EVENT_CONFIG.stallCoordination.contactPerson}</span>
                </div>

                <div>
                  <span className="block text-[11px] text-diwali-cream/60 uppercase font-semibold">Stall Desk Phone:</span>
                  <a href={`tel:${EVENT_CONFIG.stallCoordination.phone}`} className="text-diwali-gold hover:underline font-medium">
                    {EVENT_CONFIG.stallCoordination.phone}
                  </a>
                </div>

                <div>
                  <span className="block text-[11px] text-diwali-cream/60 uppercase font-semibold">Email Inquiry:</span>
                  <a href={`mailto:${EVENT_CONFIG.stallCoordination.email}`} className="text-diwali-gold hover:underline font-medium">
                    {EVENT_CONFIG.stallCoordination.email}
                  </a>
                </div>

                <div>
                  <span className="block text-[11px] text-diwali-cream/60 uppercase font-semibold">Registration Status:</span>
                  <span className="text-diwali-orange font-medium">{EVENT_CONFIG.stallCoordination.stallRegistrationDeadline}</span>
                </div>
              </div>

              <p className="text-[11px] text-diwali-cream/50 mt-4 border-t border-diwali-gold/10 pt-2 italic">
                * Contact info is editable in <code className="text-diwali-gold">src/data/eventData.ts</code>. Do not alter without committee approval.
              </p>
            </div>

            <a
              href={`mailto:${EVENT_CONFIG.stallCoordination.email}?subject=Westin%20Diwali%20Stall%20Registration%20Inquiry`}
              className="btn-diwali-primary px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase inline-flex items-center space-x-2 shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>INQUIRE FOR STALL REGISTRATION</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default EntrepreneurshipSection;
