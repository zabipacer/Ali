import React, { useState } from 'react';
import { ChevronRight, Play, Star } from 'lucide-react';
import aliImage from '../../public/ali.jpg';

// Full Hero component with ali.jpg and inline YouTube showreel modal
export default function HeroWithImageShowreel({
  stats = { clients: 120, videos: 320, satisfaction: 98 },
  scrollToSection = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }),
  openEmail = () => (window.location.href = 'mailto:hello@example.com'),
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openShowreel = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeShowreel = () => setIsOpen(false);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">TURN YOUR RAW FOOTAGE</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">INTO VIRAL CONTENT</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">Premium Video Editing That Grows Your Brand & Revenue</p>

              <blockquote className="border-l-4 border-purple-500 pl-6 py-2 italic text-lg text-zinc-400">
                "I transform your vision into scroll-stopping videos that captivate audiences and drive real results"
              </blockquote>

              <p className="text-purple-400 font-semibold text-lg">- Mohammad Ali, Video Editor</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-full font-semibold text-white shadow-lg shadow-purple-500/50 hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>🔥 BOOK FREE CONSULTATION</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

            <button
  onClick={() => window.location.href = 'mailto:rajputmuhammadali096@gmail.com?subject=Video Editing Inquiry&body=Hi Mohammad Ali,%0D%0A%0D%0AI am interested in your video editing services.'}
  className="bg-zinc-800 hover:bg-zinc-700 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center gap-3"
>
  📧 Email Me Directly
</button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center space-x-2 text-zinc-400 text-sm">
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span>Trusted by 500+ creators worldwide</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.clients}+</div>
                <div className="text-zinc-400 text-sm">Happy Clients</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.videos}+</div>
                <div className="text-zinc-400 text-sm">Videos Edited</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.satisfaction}%</div>
                <div className="text-zinc-400 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Enhanced Right - Professional Photo with Video Element */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden ring-4 ring-purple-500/50 shadow-2xl shadow-purple-500/30 group-hover:scale-105 transition-transform duration-500">

              {/* Use ali.jpg as the card background */}
              <div
                className="aspect-[4/5] flex items-end justify-center relative bg-cover bg-center"
                style={{ backgroundImage: `url(${aliImage})` }}
              >
                {/* Dim overlay for readability */}
                <div className="absolute inset-0 bg-black/30"></div>

             

                {/* Video Background Element */}
                <div className="w-full h-48 bg-black/40 backdrop-blur-sm flex items-center justify-center relative">
                  <div className="text-center space-y-4 p-8 z-10">
                    <a
                      href="#showreel"
                      onClick={openShowreel}
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                      aria-label="Open showreel"
                    >
                      <Play size={24} className="text-white ml-1" />
                    </a>
                    <div className="text-white font-semibold text-lg">Watch My Showreel</div>
                    <div className="text-zinc-300 text-sm">2:30 min • 50M+ Views</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg">
                FEATURED WORK
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-bold text-lg">+40% Sales</div>
                    <div className="text-zinc-300 text-sm">TechStart Case Study</div>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Animated Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Showreel Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={closeShowreel} />
          <div className="relative w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden">
            <div className="flex justify-end p-2">
              <button
                onClick={closeShowreel}
                className="text-white/80 hover:text-white px-3 py-1 rounded"
                aria-label="Close showreel"
              >
                Close
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                title="Showreel - Mohammad Ali"
                className="w-full h-full"
                src={`https://www.youtube.com/embed/6kYRUsXtS4s?autoplay=1&rel=0`}
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
