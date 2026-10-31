import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem, EVENT_CONFIG } from '../data/eventData';
import { SectionTitle } from './FestiveDecor';
import { Instagram, ZoomIn, X, ExternalLink, Sparkles, Heart } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Campus', 'Decor', 'Culture', 'Food', 'Performances', 'Celebration'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-diwali-darker border-t border-diwali-border">
      <div className="max-w-7xl mx-auto">
        
        <SectionTitle
          badge="Festive Moments"
          title="PHOTO GALLERY"
          subtitle="Explore the vibrant memories of Diwali at Westin — from campus illuminations and traditional rangoli to energetic stage performances."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-diwali-orange to-diwali-gold text-diwali-dark shadow-md shadow-diwali-orange/30 font-bold scale-105'
                  : 'bg-diwali-card text-diwali-cream/80 hover:text-diwali-gold hover:bg-diwali-maroon/50 border border-diwali-gold/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-diwali-dark border border-diwali-gold/25 shadow-lg hover:border-diwali-gold/60 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-diwali-darker/95 via-diwali-darker/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Tag */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full bg-diwali-darker/80 border border-diwali-gold/30 text-[10px] font-bold text-diwali-gold uppercase tracking-wider backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              {/* Zoom Icon overlay */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-diwali-maroon/80 text-diwali-gold border border-diwali-gold/30">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-base font-serif font-bold text-white group-hover:text-diwali-gold transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-diwali-cream/70 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* PRD Section 6 Requirement: Promotional Instagram Area near the Gallery */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-diwali-maroon/90 via-diwali-card to-diwali-maroon/90 border-2 border-diwali-gold/30 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-600 to-purple-600 p-0.5 shadow-lg shadow-rose-600/30 flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-diwali-card rounded-2xl flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-diwali-gold font-bold">
                Follow On Social Media
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
                Tag Us in Your Diwali Highlights!
              </h3>
              <p className="text-xs sm:text-sm text-diwali-cream/80 mt-1 max-w-lg">
                Tag <span className="text-diwali-gold font-semibold">{EVENT_CONFIG.instagramHandle}</span> in your selfies, traditional wear looks, and performance reels to be featured on our official college page.
              </p>
            </div>
          </div>

          <a
            href={EVENT_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-diwali-secondary px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider inline-flex items-center space-x-2 shrink-0"
          >
            <Instagram className="w-4 h-4 text-diwali-gold" />
            <span>FOLLOW {EVENT_CONFIG.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-diwali-card rounded-2xl overflow-hidden border border-diwali-gold/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:text-diwali-gold transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-video w-full bg-black">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-diwali-card border-t border-diwali-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-diwali-orange">
                    {lightboxItem.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-sm text-diwali-cream/80 mt-1">
                    {lightboxItem.description}
                  </p>
                </div>

                <a
                  href={EVENT_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-diwali-secondary px-4 py-2 rounded-full text-xs font-semibold shrink-0 flex items-center space-x-2"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Share on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default GallerySection;
