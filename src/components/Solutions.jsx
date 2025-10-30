import React from 'react';
import { CheckCircle, Zap, RefreshCw, Target } from 'lucide-react';

export default function EnhancedSolutionsSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutions = [
    {
      icon: CheckCircle,
      title: 'PROFESSIONAL QUALITY',
      desc: 'Cinematic edits that make your content stand out from the noise and grab attention in 3 seconds',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Zap,
      title: 'FAST TURNAROUND',
      desc: '24-48 hour delivery on most projects. No more waiting weeks for your content to go live',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: RefreshCw,
      title: 'UNLIMITED REVISIONS',
      desc: 'Your satisfaction is guaranteed. I\'ll refine until it\'s exactly what you envisioned',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Target,
      title: 'CONVERSION-FOCUSED EDITING',
      desc: 'Every cut, transition, and effect is designed to keep viewers engaged and drive action',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      gradient: 'from-orange-500/20 to-red-500/20'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center space-y-16">
          {/* Header */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                My Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              HERE'S HOW I SOLVE THESE{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                PROBLEMS FOR YOU
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400">
              Professional video editing solutions tailored to your success
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Image with overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-b ${solution.gradient} z-10 group-hover:opacity-70 transition-opacity duration-500`}></div>
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    <h3 className="font-bold text-white text-2xl md:text-3xl tracking-tight">
                      {solution.title}
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      {solution.desc}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => scrollToSection('process')}
              className="relative group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-10 py-5 rounded-full font-bold text-white text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>SEE HOW IT WORKS - FREE CONSULTATION</span>
              </span>
              
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-75"></div>
            </button>
            
            <p className="mt-4 text-sm text-zinc-500">
              No commitment required • Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}