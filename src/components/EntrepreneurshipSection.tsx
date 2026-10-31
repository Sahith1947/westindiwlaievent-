import React from 'react';
import { SectionTitle } from './FestiveDecor';
import { Sparkles, Palette, Store, HeartHandshake } from 'lucide-react';

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
      <div id="student-creators" className="absolute -top-24 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        
        <SectionTitle
          badge="Empowering Young Makers"
          title="STUDENT ENTREPRENEURSHIP & CRAFTS"
          subtitle="Celebrating student innovation and artistic enterprise with vibrant creator stalls across the campus."
        />

        {/* 4 Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      </div>
    </section>
  );
};

export default EntrepreneurshipSection;
