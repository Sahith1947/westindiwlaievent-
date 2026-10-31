import React, { useState, useEffect } from 'react';
import { EVENT_CONFIG } from '../data/eventData';
import { Menu, X, Sparkles, ExternalLink, Flame, Instagram } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Attractions', href: '#attractions' },
    { name: 'Video', href: '#video' },
    { name: 'Entertainment', href: '#entertainment' },
    { name: 'Food Stalls', href: '#food-festival' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Student Stalls', href: '#student-market' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-diwali-darker/95 backdrop-blur-md border-b border-diwali-gold/20 shadow-lg shadow-black/40 py-2.5'
          : 'bg-gradient-to-b from-diwali-darker/90 via-diwali-dark/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & College Identity */}
          <a
            href="#"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-diwali-gold rounded-lg p-1"
            title="Westin Diwali Celebrations"
          >
            {/* Logo image with graceful text fallback */}
            <div className="relative flex items-center bg-white px-2.5 py-1 rounded-lg shadow-sm border border-diwali-gold/30">
              <img
                src="/images/westin-logo.png"
                alt="Westin College Logo"
                className="h-8 sm:h-9 w-auto object-contain filter contrast-105 group-hover:scale-105 transition-transform"
                onError={(e) => {
                  // Fallback if logo file not found
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="hidden sm:block ml-2 border-l border-diwali-gold/30 pl-3">
              <span className="block text-xs font-serif font-bold tracking-widest text-diwali-gold uppercase">
                Westin College
              </span>
              <span className="block text-[10px] tracking-wider text-diwali-cream/70 uppercase">
                Diwali Celebrations
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium text-diwali-cream/80 hover:text-diwali-gold hover:bg-diwali-maroon/40 transition-colors focus:outline-none focus:ring-1 focus:ring-diwali-gold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Instagram link icon */}
            <a
              href={EVENT_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Westin College on Instagram"
              className="p-2 rounded-full text-diwali-gold/80 hover:text-diwali-gold hover:bg-diwali-maroon/50 transition-colors border border-diwali-gold/20"
              title="Official Westin Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Official Razorpay Registration Button */}
            <a
              href={EVENT_CONFIG.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-diwali-primary px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider shadow-md hover:shadow-diwali-glow transition-all flex items-center space-x-1.5"
            >
              <Flame className="w-3.5 h-3.5 fill-diwali-dark text-diwali-dark" />
              <span>REGISTER NOW</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href={EVENT_CONFIG.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-diwali-primary px-3 py-1.5 rounded-full text-[11px] font-bold"
            >
              REGISTER
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-diwali-cream hover:text-diwali-gold hover:bg-diwali-maroon/50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="sm:hidden bg-diwali-darker/98 border-b border-diwali-gold/30 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-diwali-cream/90 hover:text-diwali-gold hover:bg-diwali-maroon/40 border-l-2 border-transparent hover:border-diwali-gold transition-all"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-diwali-gold/20 flex flex-col space-y-3">
              <a
                href={EVENT_CONFIG.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="btn-diwali-primary w-full py-3 rounded-lg text-center text-sm font-bold flex items-center justify-center space-x-2"
              >
                <Flame className="w-4 h-4 fill-diwali-dark" />
                <span>REGISTER NOW (RAZORPAY)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={EVENT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-2 rounded-lg text-xs text-diwali-gold hover:text-white transition-colors border border-diwali-gold/30 bg-diwali-maroon/20"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow {EVENT_CONFIG.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
