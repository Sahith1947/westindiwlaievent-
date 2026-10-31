import React, { useState } from 'react';
import { Play, Sparkles, Film, X, ExternalLink, Info } from 'lucide-react';
import { YOUTUBE_VIDEO_URL, VIDEO_DETAILS } from '../../config/eventConfig';
import { SectionDivider, DiyaLamp } from '../common/DiwaliMotifs';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Helper to extract YouTube video ID if provided
  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`
      : null;
  };

  const embedUrl = getYouTubeEmbedUrl(YOUTUBE_VIDEO_URL);

  return (
    <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-diwali-dark overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-diwali-maroon/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <SectionDivider title="Event Introduction Video" />
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mt-2">
            EXPERIENCE THE <span className="text-diwali-gold">FESTIVE GRANDEUR</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-diwali-cream/80 max-w-2xl mx-auto font-light leading-relaxed">
            {VIDEO_DETAILS.subtitle}
          </p>
        </div>

        {/* Central 16:9 Video Box */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-diwali-gold/30 shadow-2xl shadow-diwali-maroon/50 group bg-diwali-darker">
          {isPlaying && embedUrl ? (
            /* Active YouTube Player */
            <div className="relative w-full h-full">
              <iframe
                src={embedUrl}
                title={VIDEO_DETAILS.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-diwali-dark/80 text-white hover:bg-diwali-maroon border border-diwali-gold/40 transition-colors"
                aria-label="Close Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ) : (
            /* Premium Designed Thumbnail & Placeholder */
            <div className="relative w-full h-full">
              {/* Background Poster Image */}
              <img
                src={VIDEO_DETAILS.thumbnailImage}
                alt={VIDEO_DETAILS.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-75"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-diwali-darker via-diwali-dark/50 to-diwali-maroon/30" />

              {/* Decorative Diya Corner Accents */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-diwali-darker/80 border border-diwali-gold/30 backdrop-blur-sm text-xs font-semibold text-diwali-gold">
                <DiyaLamp size={18} glow={false} />
                <span>WESTIN DIWALI TEASER</span>
              </div>

              {/* Central Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative group/btn flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-diwali-orange via-diwali-gold to-diwali-cream text-diwali-darker shadow-xl shadow-diwali-orange/40 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-diwali-gold/50"
                  aria-label="Play Event Introduction Video"
                >
                  {/* Outer Ripple Rings */}
                  <span className="absolute -inset-3 rounded-full border-2 border-diwali-gold/40 animate-ping opacity-60 pointer-events-none" />
                  <span className="absolute -inset-1.5 rounded-full border border-diwali-gold/80" />
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5 text-diwali-darker" />
                </button>

                <h3 className="font-serif text-lg sm:text-2xl font-bold text-white mt-6 drop-shadow-md">
                  {VIDEO_DETAILS.title}
                </h3>
                <p className="text-xs sm:text-sm text-diwali-gold/90 mt-1 max-w-md font-medium">
                  Click to watch the celebration glimpse & event highlights
                </p>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-diwali-cream/70 bg-diwali-darker/70 backdrop-blur-md px-4 py-2 rounded-lg border border-diwali-gold/20">
                <span className="flex items-center gap-1.5 text-diwali-gold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Grand Diwali Festivities at Westin</span>
                </span>
                <span className="hidden sm:inline">Official YouTube Video Placeholder</span>
              </div>
            </div>
          )}
        </div>

        {/* Placeholder Modal when no YouTube URL is configured yet */}
        {isPlaying && !embedUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-lg bg-diwali-card border-2 border-diwali-gold/50 rounded-2xl p-6 sm:p-8 shadow-2xl text-center">
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 p-2 text-diwali-cream/70 hover:text-white rounded-full bg-diwali-maroon/50 hover:bg-diwali-maroon transition-colors"
                aria-label="Close message"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 mx-auto rounded-full bg-diwali-gold/20 border border-diwali-gold/40 flex items-center justify-center text-diwali-gold mb-4">
                <Film className="w-7 h-7" />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-diwali-gold mb-2">
                Official Teaser Premiere Coming Soon!
              </h3>
              <p className="text-sm text-diwali-cream/80 leading-relaxed mb-6 font-light">
                The official celebration teaser video will be linked here shortly. To add the video, simply edit the <code className="bg-diwali-dark px-2 py-0.5 rounded text-diwali-gold font-mono text-xs">YOUTUBE_VIDEO_URL</code> variable in <code className="bg-diwali-dark px-2 py-0.5 rounded text-diwali-gold font-mono text-xs">src/config/eventConfig.ts</code>.
              </p>

              <button
                onClick={() => setIsPlaying(false)}
                className="w-full py-3 rounded-full bg-gradient-to-r from-diwali-maroon to-diwali-orange text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Got It
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
