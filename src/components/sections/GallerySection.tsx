import React, { useState } from 'react';
import { Camera, Instagram, Maximize2, ExternalLink, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, EVENT_LINKS } from '../../config/eventConfig';
import { GalleryItem } from '../../types/event';
import { SectionDivider, DiyaLamp, RangoliCorner } from '../common/DiwaliMotifs';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', label: 'All Moments' },
    { key: 'campus', label: 'College Campus' },
    { key: 'decorations', label: 'Diyas & Rangoli' },
    { key: 'food', label: 'Food Stalls' },
    { key: 'performances', label: 'Performances' },
    { key: 'celebrations', label: 'Celebrations' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedPhoto(item);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhoto(filteredItems[prevIndex]);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedPhoto(filteredItems[nextIndex]);
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-diwali-darker overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-10 left-10 opacity-15 pointer-events-none">
        <RangoliCorner size={300} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionDivider title="Visual Memories" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide uppercase">
            PHOTO <span className="text-diwali-gold">GALLERY</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-diwali-cream/80 max-w-2xl mx-auto font-light leading-relaxed">
            Glimpses of festive campus illuminations, traditional decor, culinary feasts, and vibrant student energy.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-diwali-gold text-diwali-darker shadow-md shadow-diwali-gold/30 font-bold scale-105'
                    : 'bg-diwali-card border border-diwali-gold/25 text-diwali-cream/80 hover:text-white hover:border-diwali-gold/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer bg-diwali-card border border-diwali-gold/20 hover:border-diwali-gold shadow-lg hover:shadow-diwali-maroon-glow transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-diwali-darker via-diwali-darker/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-diwali-darker/80 text-diwali-gold opacity-0 group-hover:opacity-100 transition-opacity border border-diwali-gold/40">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Category Tag */}
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-diwali-darker/80 text-[10px] font-semibold text-diwali-gold uppercase tracking-wider border border-diwali-gold/20">
                {item.categoryLabel}
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-serif text-sm font-bold text-white group-hover:text-diwali-gold transition-colors leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Small Promotional Area Near the Gallery (Required in Section 6 of PRD) */}
        <div className="rounded-2xl bg-gradient-to-r from-diwali-card via-diwali-maroon/50 to-diwali-card border border-diwali-gold/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-diwali-orange to-diwali-gold p-[2px] flex-shrink-0">
              <div className="w-full h-full rounded-full bg-diwali-dark flex items-center justify-center text-diwali-gold">
                <Instagram className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                Share Your Diwali Memories with <span className="text-diwali-gold">{EVENT_LINKS.instagramHandle}</span>
              </h4>
              <p className="text-xs sm:text-sm text-diwali-cream/70 font-light mt-0.5">
                Tag your reels, festive selfies, and food photos on Instagram to get featured on Westin College's official page!
              </p>
            </div>
          </div>

          <a
            href={EVENT_LINKS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-diwali-gold text-diwali-darker font-bold text-xs uppercase tracking-wider hover:bg-diwali-gold-light hover:scale-105 transition-all shadow-md"
          >
            <Instagram className="w-4 h-4" />
            <span>FOLLOW ON INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-diwali-card border border-diwali-gold/50 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-diwali-darker/80 text-white hover:text-diwali-gold hover:bg-diwali-maroon border border-diwali-gold/30 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next Arrows */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-diwali-darker/80 text-white hover:text-diwali-gold border border-diwali-gold/30 hover:bg-diwali-maroon transition-colors"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-diwali-darker/80 text-white hover:text-diwali-gold border border-diwali-gold/30 hover:bg-diwali-maroon transition-colors"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Caption & Metadata */}
            <div className="p-5 bg-diwali-darker border-t border-diwali-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-semibold text-diwali-gold uppercase tracking-wider block">
                  {selectedPhoto.categoryLabel}
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  {selectedPhoto.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={EVENT_LINKS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-diwali-maroon/60 border border-diwali-gold/30 text-diwali-gold text-xs font-semibold hover:bg-diwali-maroon transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Tag on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
