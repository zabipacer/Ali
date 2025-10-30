import React, { useState } from 'react';
import { Play, X, ExternalLink, TrendingUp } from 'lucide-react';

export default function EnhancedPortfolioSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Close modal on ESC key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && selectedVideo) {
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedVideo]);

  const portfolioItems = [
    { 
      type: 'BRAND VIDEO', 
      result: 'Increased Sales 40%', 
      metric: '+40% Sales',
      videoId: '1p3KDxUHz8R9oGVmY6txtnl9g2MWjM-mg',
      driveUrl: 'https://drive.google.com/file/d/1p3KDxUHz8R9oGVmY6txtnl9g2MWjM-mg/view',
      description: 'High-converting brand story that drove massive sales',
      color: 'from-purple-600 to-pink-600'
    },
    { 
      type: 'YOUTUBE EDIT', 
      result: '1M+ Views', 
      metric: '1M Views',
      videoId: '1YcmEoQn9ibXObGjCDiy2qraY8KnqWdjH',
      driveUrl: 'https://drive.google.com/file/d/1YcmEoQn9ibXObGjCDiy2qraY8KnqWdjH/view',
      description: 'Viral YouTube content optimized for maximum engagement',
      color: 'from-red-600 to-orange-600'
    },
    { 
      type: 'SOCIAL AD', 
      result: '2.5x ROI', 
      metric: '2.5x ROI',
      videoId: '1iqjjpvC1TCA0qxyy5B9hX674uiU3IK0u',
      driveUrl: 'https://drive.google.com/file/d/1iqjjpvC1TCA0qxyy5B9hX674uiU3IK0u/view',
      description: 'Performance-driven ad that exceeded all expectations',
      color: 'from-blue-600 to-cyan-600'
    },
    { 
      type: 'PODCAST EDIT', 
      result: 'Pro Quality', 
      metric: 'Professional',
      videoId: '1q9wcP69m5dpFHg3-P5SNfthc5hRmzAOM',
      driveUrl: 'https://drive.google.com/file/d/1q9wcP69m5dpFHg3-P5SNfthc5hRmzAOM/view',
      description: 'Polished podcast clips that grew audience exponentially',
      color: 'from-green-600 to-emerald-600'
    },
    { 
      type: 'PRODUCT DEMO', 
      result: 'Sold Out', 
      metric: 'Sold Out',
      videoId: '1qXYPpw3G19x5Y_XBxoYwGhH-jgbSgSgi',
      driveUrl: 'https://drive.google.com/file/d/1qXYPpw3G19x5Y_XBxoYwGhH-jgbSgSgi/view',
      description: 'Compelling product showcase that cleared inventory',
      color: 'from-yellow-600 to-orange-600'
    },
    { 
      type: 'TESTIMONIAL', 
      result: 'Authentic', 
      metric: 'Authentic',
      videoId: '1dtW1h20D-8pt--bYcZsCtafwdjg5XuuI',
      driveUrl: 'https://drive.google.com/file/d/1dtW1h20D-8pt--bYcZsCtafwdjg5XuuI/view',
      description: 'Real stories that build trust and drive conversions',
      color: 'from-indigo-600 to-purple-600'
    },
    { 
      type: 'EXPLAINER', 
      result: 'Simplified', 
      metric: 'Simplified',
      videoId: '1Astj-188OBWun4g8WVpB1ZM2HEZeJVY8',
      driveUrl: 'https://drive.google.com/file/d/1Astj-188OBWun4g8WVpB1ZM2HEZeJVY8/view',
      description: 'Complex ideas made crystal clear and engaging',
      color: 'from-teal-600 to-green-600'
    },
    { 
      type: 'EVENT RECAP', 
      result: 'Emotional', 
      metric: 'Emotional',
      videoId: '1wQgIsqIh5o8Bl3MO1Gb79eFWhpLntI5X',
      driveUrl: 'https://drive.google.com/file/d/1wQgIsqIh5o8Bl3MO1Gb79eFWhpLntI5X/view',
      description: 'Captivating event highlights that evoke feelings',
      color: 'from-pink-600 to-rose-600'
    },
    { 
      type: 'PROMO VIDEO', 
      result: 'Viral Hit', 
      metric: 'Viral Hit',
      videoId: '1Oftpy98Mc4xmI2cWG5h2fKFiUW5R_su6',
      driveUrl: 'https://drive.google.com/file/d/1Oftpy98Mc4xmI2cWG5h2fKFiUW5R_su6/view',
      description: 'Promotional content that took the internet by storm',
      color: 'from-violet-600 to-fuchsia-600'
    }
  ];

  return (
    <>
      <section id="portfolio" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center space-y-16">
            {/* Header */}
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="inline-block">
                <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                  Portfolio
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                MY WORK SPEAKS{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  LOUDER THAN WORDS
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400">
                See The Videos That Have Generated{' '}
                <span className="text-white font-semibold">Millions of Views</span> and{' '}
                <span className="text-white font-semibold">Thousands in Revenue</span>
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-zinc-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/30"
                >
                  {/* Thumbnail Container */}
                  <div className="aspect-video bg-zinc-800 relative overflow-hidden cursor-pointer" onClick={() => setSelectedVideo(item)}>
                    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
                      <div className="text-center">
                        <Play size={48} className="text-zinc-600 mx-auto mb-2" />
                        <p className="text-zinc-500 text-sm">Click to Play</p>
                      </div>
                    </div>
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-125 transition-transform duration-300 border-2 border-white/30">
                        <Play size={24} className="text-white ml-1 fill-white" />
                      </div>
                    </div>
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className={`bg-gradient-to-r ${item.color} px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg`}>
                        {item.type}
                      </div>
                    </div>
                    
                    {/* Metric Badge */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                        <div className="flex items-center gap-2">
                          <TrendingUp size={16} className="text-green-400" />
                          <span className="text-white font-bold text-lg">{item.metric}</span>
                        </div>
                        <div className="text-zinc-300 text-xs mt-1">{item.result}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    <button
                      onClick={() => setSelectedVideo(item)}
                      className="w-full bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group/btn shadow-lg hover:shadow-purple-500/50"
                    >
                      <Play size={16} className="group-hover/btn:scale-110 transition-transform" />
                      <span>WATCH FULL VIDEO</span>
                    </button>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8">
              <a 
                href="https://drive.google.com/drive/folders/1sKhBlW6P5RTWTHRXHBr3eEu8z1I3LLCy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block group relative border-2 border-purple-500 text-purple-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:border-transparent hover:text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">📹</span>
                  <span>VIEW FULL PORTFOLIO</span>
                  <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <p className="mt-4 text-sm text-zinc-500">
                100+ successful projects • 50M+ total views generated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-14 sm:inset-30 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-7xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Single Close Button - Always visible */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-[1px] sm:-top-[1px] right-0 text-white bg-red-600 hover:bg-red-500 transition-all p-3 sm:p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 font-semibold hover:scale-110 duration-300"
            >
              <X size={24} />
              <span className="hidden sm:inline">Close</span>
            </button>

            {/* Video Player Container */}
            <div className="bg-zinc-900 rounded-xl md:rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              {/* Google Drive Embedded Video */}
              <div className="relative bg-black">
                <iframe
                  src={`https://drive.google.com/file/d/${selectedVideo.videoId}/preview`}
                  className="w-full h-auto"
                  style={{ maxHeight: '70vh', aspectRatio: '16/9' }}
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
              
              {/* Video Info */}
              <div className="p-4 sm:p-6 lg:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className={`inline-block bg-gradient-to-r ${selectedVideo.color} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white`}>
                      {selectedVideo.type}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">{selectedVideo.description}</h3>
                  </div>
                  <div className="text-left sm:text-right flex-shrink-0">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{selectedVideo.metric}</div>
                    <div className="text-sm sm:text-base text-zinc-400">{selectedVideo.result}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ESC key hint for desktop */}
            <div className="hidden lg:block absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-zinc-400 text-sm">
              Press <kbd className="px-2 py-1 bg-zinc-800 rounded border border-zinc-700">ESC</kbd> or click outside to close
            </div>
          </div>
        </div>
      )}
    </>
  );
}