import React from 'react';
import { Award, Clock, Users, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Award, number: '200+', label: 'Videos Edited' },
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Clock, number: '24-48h', label: 'Avg Delivery' },
    { icon: TrendingUp, number: '98%', label: 'Satisfaction' }
  ];

  return (
    <section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Image & Stats */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden ring-4 ring-purple-500/50 shadow-2xl shadow-purple-500/30 transition-all duration-500 group-hover:ring-purple-500 group-hover:shadow-purple-500/50">
                <div className="aspect-[4/5] relative">
                  <img 
                    src="./ali.jpg" 
                    alt="Mohammad Ali - Professional Video Editor"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Name Badge on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="text-white font-bold text-2xl md:text-3xl">Mohammad Ali</div>
                    <div className="text-zinc-200 text-lg">Professional Video Editor</div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index} 
                      className="bg-zinc-900/80 backdrop-blur-sm rounded-xl p-4 md:p-5 text-center border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <IconComponent className="w-6 h-6 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-white font-bold text-xl md:text-2xl">{stat.number}</div>
                      <div className="text-zinc-400 text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                  About Me
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                HI, I'M{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  MOHAMMAD ALI
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-zinc-300 font-semibold">
                Your Partner in Video Success
              </p>
              
              <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                <p>
                  I've been editing videos professionally for 5+ years, and I've learned one thing: 
                  Great editing isn't just about technical skills—it's about{' '}
                  <span className="text-white font-semibold">telling stories that connect with people</span>.
                </p>
                <p>
                  My mission is simple: Help creators, brands, and businesses grow through 
                  compelling video content that{' '}
                  <span className="text-white font-semibold">actually gets results</span>.
                </p>
              </div>

              <div className="bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border-l-4 border-purple-500 shadow-lg">
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">💭</div>
                  <p className="text-zinc-300 italic text-lg leading-relaxed">
                    "When I'm not editing, you'll find me studying the latest video trends, 
                    testing new techniques, and finding creative ways to make your content stand out."
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/923168705024?text=Hi%20Mohammad%20Ali%2C%20I'm%20interested%20in%20your%20video%20editing%20services!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-white text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <span>CHAT ON WHATSAPP</span>
              </span>
            </a>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-zinc-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Response within 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}