import React from 'react';
import { EVENT_CONFIG } from '../data/eventData';
import { Instagram, MapPin, Phone, Mail, Globe, ArrowUp, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Festival Attractions', href: '#attractions' },
    { name: 'Video Preview', href: '#video' },
    { name: 'Live Entertainment', href: '#entertainment' },
    { name: 'Food Festival', href: '#food-festival' },
    { name: 'Student Stalls', href: '#student-market' },
    { name: 'Event Timeline', href: '#schedule' },
    { name: 'Photo Gallery', href: '#gallery' },
  ];

  return (
    <footer className="relative bg-diwali-darker text-diwali-cream/80 border-t border-diwali-gold/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Westin College Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white px-2.5 py-1 rounded-lg shadow-sm border border-diwali-gold/30 shrink-0">
                <img
                  src="/images/westin-logo.png"
                  alt="Westin College Logo"
                  className="h-9 w-auto object-contain filter contrast-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="block text-sm font-serif font-bold text-diwali-gold tracking-wider uppercase">
                  Westin College
                </span>
                <span className="block text-[10px] text-diwali-cream/60 tracking-widest uppercase">
                  Diwali Celebrations
                </span>
              </div>
            </div>

            <p className="text-xs text-diwali-cream/70 leading-relaxed">
              Westin College of Hotel & Business Management welcomes students, families, and patrons to Vijayawada's most vibrant festival of lights.
            </p>

            <div className="pt-2">
              <a
                href={EVENT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-diwali-maroon/60 border border-diwali-gold/30 text-diwali-gold hover:text-white hover:bg-diwali-maroon transition-all text-xs font-semibold"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>{EVENT_CONFIG.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-serif font-bold tracking-widest text-diwali-gold mb-4 border-l-2 border-diwali-gold pl-2">
              Event Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-diwali-gold transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Event Coordination & Stalls */}
          <div>
            <h4 className="text-xs uppercase font-serif font-bold tracking-widest text-diwali-gold mb-4 border-l-2 border-diwali-gold pl-2">
              Student Stalls & Queries
            </h4>
            <div className="space-y-3 text-xs text-diwali-cream/75">
              <p>
                <strong className="text-diwali-gold block text-[11px] uppercase">Coordination Desk:</strong>
                {EVENT_CONFIG.stallCoordination.contactPerson}
              </p>
              <p>
                <strong className="text-diwali-gold block text-[11px] uppercase">Phone:</strong>
                <a href={`tel:${EVENT_CONFIG.stallCoordination.phone}`} className="hover:text-white">
                  {EVENT_CONFIG.stallCoordination.phone}
                </a>
              </p>
              <p>
                <strong className="text-diwali-gold block text-[11px] uppercase">Email:</strong>
                <a href={`mailto:${EVENT_CONFIG.stallCoordination.email}`} className="hover:text-white">
                  {EVENT_CONFIG.stallCoordination.email}
                </a>
              </p>
              <p className="text-[11px] text-diwali-orange">
                * Stalls are allocated on first-come reservation basis.
              </p>
            </div>
          </div>

          {/* Column 4: College Campus Coordinates */}
          <div>
            <h4 className="text-xs uppercase font-serif font-bold tracking-widest text-diwali-gold mb-4 border-l-2 border-diwali-gold pl-2">
              Campus Location
            </h4>
            <div className="space-y-3 text-xs text-diwali-cream/75">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-diwali-orange shrink-0 mt-0.5" />
                <span>{EVENT_CONFIG.contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-diwali-gold shrink-0" />
                <a href={`tel:${EVENT_CONFIG.contactInfo.phone}`} className="hover:text-white">
                  {EVENT_CONFIG.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-diwali-orange shrink-0" />
                <a href={`mailto:${EVENT_CONFIG.contactInfo.email}`} className="hover:text-white">
                  {EVENT_CONFIG.contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-diwali-gold shrink-0" />
                <a href={EVENT_CONFIG.contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {EVENT_CONFIG.contactInfo.website}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-diwali-gold/15 flex flex-col sm:flex-row items-center justify-between text-xs text-diwali-cream/60 gap-4">
          <p>
            © {new Date().getFullYear()} Westin College of Hotel & Business Management. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-diwali-cream/70">
              <span>Crafted for Diwali with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>at Westin</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-diwali-card hover:bg-diwali-maroon text-diwali-gold border border-diwali-gold/30 transition-all focus:outline-none"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
