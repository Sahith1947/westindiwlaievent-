import React from 'react';
import { Instagram, MapPin, Mail, Phone, Clock, Shirt, Sparkles, ExternalLink } from 'lucide-react';
import { EVENT_DETAILS, EVENT_LINKS, CONTACT_DETAILS } from '../../config/eventConfig';
import { DiyaLamp, RangoliCorner } from '../common/DiwaliMotifs';
import { RegisterButton } from '../common/RegisterButton';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-diwali-darker text-diwali-cream/80 pt-16 pb-12 overflow-hidden border-t border-diwali-gold/20">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
        <RangoliCorner size={300} />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-15 pointer-events-none">
        <RangoliCorner size={320} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: College Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-diwali-gold to-diwali-maroon p-[2px] shadow-lg shadow-diwali-gold/20 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-diwali-dark flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/westin-logo.png"
                    alt="Westin College Logo"
                    className="w-full h-full object-contain p-1"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <DiyaLamp size={26} className="text-diwali-gold" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-diwali-gold tracking-wide">
                  WESTIN COLLEGE
                </h3>
                <p className="text-xs text-diwali-cream/70 tracking-widest uppercase">
                  Diwali Celebrations
                </p>
              </div>
            </div>

            <p className="text-sm text-diwali-cream/70 leading-relaxed font-light">
              {EVENT_DETAILS.tagline}
            </p>

            <div className="pt-2">
              <a
                href={EVENT_LINKS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-diwali-maroon/40 border border-diwali-gold/30 hover:border-diwali-gold hover:bg-diwali-maroon text-diwali-gold text-xs font-semibold tracking-wider transition-all duration-300 group"
              >
                <Instagram className="w-4 h-4 text-diwali-gold" />
                <span>{EVENT_LINKS.instagramHandle}</span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Column 2: Event Highlights & Reminders */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-diwali-gold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-diwali-orange" />
              <span>Event Essentials</span>
            </h4>

            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-diwali-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-medium text-diwali-cream block text-xs uppercase tracking-wider">
                    Reporting Time
                  </strong>
                  <span className="text-diwali-gold font-semibold">{EVENT_DETAILS.reportingTime}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Shirt className="w-4 h-4 text-diwali-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-medium text-diwali-cream block text-xs uppercase tracking-wider">
                    Dress Code
                  </strong>
                  <span>{EVENT_DETAILS.dressCode}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-diwali-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-medium text-diwali-cream block text-xs uppercase tracking-wider">
                    Venue
                  </strong>
                  <span>{EVENT_DETAILS.venue}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-diwali-gold">
              Quick Navigation
            </h4>

            <ul className="grid grid-cols-2 gap-2 text-sm font-light">
              <li>
                <a href="#attractions" className="hover:text-diwali-gold transition-colors text-xs uppercase tracking-wider">
                  Attractions
                </a>
              </li>
              <li>
                <a href="#video" className="hover:text-diwali-gold transition-colors text-xs uppercase tracking-wider">
                  Teaser Video
                </a>
              </li>
              <li>
                <a href="#entertainment" className="hover:text-diwali-gold transition-colors text-xs uppercase tracking-wider">
                  Entertainment
                </a>
              </li>
              <li>
                <a href="#food-festival" className="hover:text-diwali-gold transition-colors text-xs uppercase tracking-wider">
                  8 Food Stalls
                </a>
              </li>
              <li>
                <a href="#student-creators" className="hover:text-diwali-gold transition-colors text-xs uppercase tracking-wider">
                  Student Market
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-diwali-gold transition-colors text-xs uppercase tracking-wider">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-diwali-gold transition-colors text-xs uppercase tracking-wider">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#register" className="text-diwali-gold hover:underline transition-colors text-xs uppercase tracking-wider font-semibold">
                  Register Now
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <RegisterButton size="sm" variant="gold" label="REGISTER PASS" />
            </div>
          </div>

          {/* Column 4: Editable Contact & Support */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-diwali-gold">
              Contact & Inquiries
            </h4>

            <ul className="space-y-2.5 text-xs text-diwali-cream/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-diwali-gold flex-shrink-0 mt-0.5" />
                <span>{CONTACT_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-diwali-gold flex-shrink-0" />
                <span>{CONTACT_DETAILS.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-diwali-gold flex-shrink-0" />
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-diwali-gold transition-colors">
                  {CONTACT_DETAILS.email}
                </a>
              </li>
              <li className="text-[11px] text-diwali-gold/70 pt-1">
                Helpline: {CONTACT_DETAILS.helpline} ({CONTACT_DETAILS.workingHours})
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Security Disclaimer */}
        <div className="pt-8 border-t border-diwali-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-diwali-cream/60">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Westin College, Vijayawada. All Rights Reserved. Organised with festive spirit by Westin Student Council.
          </p>

          <div className="flex items-center gap-2 text-diwali-gold/90 text-[11px]">
            <span>Official Event Registration via</span>
            <span className="font-semibold px-2 py-0.5 bg-diwali-maroon/60 rounded border border-diwali-gold/30">
              Razorpay Secured Gateway
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
