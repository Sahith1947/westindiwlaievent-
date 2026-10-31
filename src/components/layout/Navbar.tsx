import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Sparkles } from 'lucide-react';
import { EVENT_DETAILS, EVENT_LINKS } from '../../config/eventConfig';
import { RegisterButton } from '../common/RegisterButton';
import { DiyaLamp } from '../common/DiwaliMotifs';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Attractions', href: '#attractions' },
    { name: 'Teaser Video', href: '#video' },
    { name: 'Entertainment', href: '#entertainment' },
    { name: 'Food Festival', href: '#food-festival' },
    { name: 'Student Market', href: '#student-creators' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-diwali-dark/95 backdrop-blur-md shadow-lg shadow-diwali-darker/60 border-b border-diwali-gold/20 py-2.5'
          : 'bg-gradient-to-b from-diwali-darker/90 via-diwali-dark/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & College Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Westin Diwali Celebrations Home"
          >
            {/* Logo Image or Fallback */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-diwali-gold to-diwali-maroon p-[2px] shadow-md shadow-diwali-gold/20 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-diwali-dark flex items-center justify-center overflow-hidden">
                <img
                  src="/images/westin-logo.png"
                  alt="Westin College Logo"
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    // Fallback to Diya icon if custom image is missing
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <DiyaLamp size={22} className="text-diwali-gold" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base font-bold tracking-wider text-diwali-gold group-hover:text-diwali-gold-light transition-colors">
                WESTIN
              </span>
              <span className="text-[10px] sm:text-xs font-medium tracking-widest text-diwali-cream/80 uppercase">
                Diwali Celebrations
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-wider uppercase text-diwali-cream/80 hover:text-diwali-gold transition-colors duration-200 py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-diwali-orange to-diwali-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs (Instagram & Register) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Official Instagram Link */}
            <a
              href={EVENT_LINKS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-diwali-gold hover:text-white bg-diwali-maroon/40 border border-diwali-gold/30 hover:border-diwali-gold hover:bg-diwali-maroon transition-all duration-300"
              title="Follow @westin_college_vijayawada on Instagram"
              aria-label="Instagram profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Strict Razorpay CTA */}
            <RegisterButton size="sm" variant="gold" label="REGISTER NOW" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <RegisterButton size="sm" variant="gold" label="REGISTER" showIcon={false} className="py-1.5 px-3 text-[11px]" />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-diwali-gold hover:bg-diwali-maroon/50 focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-diwali-dark/98 border-b border-diwali-gold/30 backdrop-blur-xl px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm font-semibold tracking-wider uppercase text-diwali-cream/90 hover:text-diwali-gold hover:bg-diwali-maroon/30 px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-diwali-gold text-xs">✦</span>
              </a>
            ))}

            <div className="pt-4 border-t border-diwali-gold/20 flex flex-col gap-3">
              <a
                href={EVENT_LINKS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-diwali-maroon/40 border border-diwali-gold/30 text-diwali-gold hover:bg-diwali-maroon text-xs font-semibold tracking-wider uppercase"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow {EVENT_LINKS.instagramHandle}</span>
              </a>

              <RegisterButton size="md" variant="primary" label="REGISTER NOW (RAZORPAY)" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
