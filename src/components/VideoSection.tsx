import React, { useState } from 'react';
import { EVENT_CONFIG } from '../data/eventData';
import { SectionTitle } from './FestiveDecor';
import { Play, Sparkles, Youtube, Instagram, Film, X } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTeaserNotice, setShowTeaserNotice] = useState(false);

  // Helper to extract YouTube embed URL if provided
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('embed/')) return url;
    if (url.includes('watch?v=')) {
      const videoId = url.split('watch?v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    // If just the ID is passed
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
      return `https://www.youtube.com/embed/${url}?autoplay=1`;
    }
    return url;
  };

  const handlePlayClick = () => {
    if (EVENT_CONFIG.youtubeVideoUrl && EVENT_CONFIG.youtubeVideoUrl.trim() !== '') {
      setIsPlaying(true);
    } else {
      setShowTeaserNotice(true);
    }
  };

  const embedUrl = getEmbedUrl(EVENT_CONFIG.youtubeVideoUrl);

  return (
    <section id="video" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-diwali-darker border-y border-diwali-border">
      <div className="max-w-5xl mx-auto">
        
        <SectionTitle
          badge="Event Showcase"
          title="FESTIVAL OF LIGHTS AT WESTIN"
          subtitle="Watch the grandeur, student celebrations, cultural spirit, and joyous memories of Westin Diwali."
        />

        {/* 16:9 Video Player Container */}
        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-diwali-gold/30 shadow-2xl shadow-diwali-maroon/60 bg-diwali-dark group">
          
          {isPlaying && embedUrl ? (
            <div className="relative w-full h-full bg-black">
              <iframe
                src={embedUrl}
                title="Westin Diwali Celebrations Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:text-diwali-gold border border-white/20 transition-colors"
                aria-label="Close Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ) : (
            /* Designed Video Thumbnail Placeholder */
            <div className="relative w-full h-full">
              {/* Thumbnail Image */}
              <img
                src="/images/video-thumb.jpg"
                alt="Westin Diwali Celebrations Preview"
                className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Festive Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-diwali-darker via-diwali-burgundy/40 to-black/30" />

              {/* Decorative Frame Elements */}
              <div className="absolute inset-3 sm:inset-5 border border-diwali-gold/25 rounded-xl pointer-events-none" />

              {/* Play Button & Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                
                {/* Glowing Festive Play Button */}
                <button
                  onClick={handlePlayClick}
                  className="relative group/btn p-5 sm:p-7 rounded-full bg-gradient-to-tr from-diwali-orange to-diwali-gold text-diwali-dark shadow-2xl shadow-diwali-orange/60 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-diwali-gold/50 cursor-pointer"
                  aria-label="Play Introduction Video"
                >
                  <span className="absolute -inset-2 rounded-full bg-diwali-gold opacity-40 animate-ping pointer-events-none" />
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-diwali-dark text-diwali-dark translate-x-0.5" />
                </button>

                {/* Video Info Titles */}
                <div className="mt-5 max-w-md">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-diwali-darker/80 border border-diwali-gold/40 text-[11px] font-bold text-diwali-gold uppercase tracking-wider mb-2">
                    <Film className="w-3.5 h-3.5 text-diwali-orange" />
                    <span>Official Festival Teaser</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                    Relive the Magic of Diwali with Westin
                  </h3>
                  <p className="text-xs sm:text-sm text-diwali-cream/80 mt-1">
                    Click to view highlights of students, rituals, dance & festivity
                  </p>
                </div>

              </div>

              {/* Bottom Badge Bar */}
              <div className="absolute bottom-4 left-6 right-6 hidden sm:flex justify-between items-center text-xs text-diwali-cream/70 pointer-events-none">
                <span>HD 1080p Event Preview</span>
                <span className="text-diwali-gold font-medium">Westin College of Hotel & Business Management</span>
              </div>
            </div>
          )}

        </div>

        {/* Modal / Dialog when YouTube URL is pending */}
        {showTeaserNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-diwali-card border-2 border-diwali-gold shadow-2xl text-center">
              
              <button
                onClick={() => setShowTeaserNotice(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-diwali-cream/70 hover:text-white bg-diwali-maroon/40"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 rounded-full bg-diwali-maroon border border-diwali-gold/40 flex items-center justify-center mx-auto mb-4 text-diwali-gold">
                <Youtube className="w-7 h-7 text-red-500" />
              </div>

              <h4 className="text-xl font-serif font-bold text-diwali-gold mb-2">
                Official Video Launching Soon!
              </h4>

              <p className="text-sm text-diwali-cream/80 mb-6 leading-relaxed">
                The grand Westin Diwali Celebrations teaser video is being edited by the student media crew and will be premiered here and on our official Instagram page.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={EVENT_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-diwali-primary flex-1 py-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>WATCH ON INSTAGRAM</span>
                </a>
                <button
                  onClick={() => setShowTeaserNotice(false)}
                  className="btn-diwali-secondary py-3 px-5 rounded-xl text-xs font-semibold"
                >
                  GOT IT
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Note on video editing */}
        <p className="text-center text-xs text-diwali-cream/50 mt-4">
          <span className="text-diwali-gold font-semibold">Tip for Organizers:</span> YouTube video URL can be added anytime in <code className="text-diwali-gold bg-diwali-card px-1.5 py-0.5 rounded text-[11px]">src/data/eventData.ts</code>
        </p>

      </div>
    </section>
  );
};

export default VideoSection;
