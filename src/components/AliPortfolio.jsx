// MOHAMMAD ALI - VIDEO EDITOR PORTFOLIO
// Premium Enhanced Design with Elite Conversion Strategy

import React, { useState, useEffect, useRef } from 'react';

// Lucide Icons for modern, clean icons
import { MessageCircle, Play, Star, ChevronRight, ChevronDown, Check, Menu, X, Instagram, Youtube, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import HeroWithImageShowreel from './Alihero';
import EnhancedSolutionsSection from './Solutions';
import EnhancedPortfolioSection from './PortfolioSection';
import AboutSection from './About';
import EnhancedContactSection from './FinalCTA';
import EnhancedFooter from './Foooer';
import InfiniteScrollLogos from './logo';

const MohammadAliPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [stats, setStats] = useState({ clients: 0, videos: 0, satisfaction: 0 });

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stats counter animation
  useEffect(() => {
    const targetStats = { clients: 50, videos: 200, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        clients: Math.floor(targetStats.clients * progress),
        videos: Math.floor(targetStats.videos * progress),
        satisfaction: Math.floor(targetStats.satisfaction * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/923168705024?text=Hi%20Mohammad,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:mohammadali@email.com';
  };

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/50 animate-pulse hover:scale-110 transition-transform duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute -top-10 right-0 bg-white text-black text-sm font-semibold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat Now
        </span>
      </button>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-zinc-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                MA
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Mohammad Ali
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'portfolio', 'process', 'pricing', 'about'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-zinc-300 hover:text-purple-400 transition-colors duration-300 font-medium capitalize"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-zinc-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-zinc-900 rounded-lg p-6 border border-zinc-800 mb-4">
              <div className="flex flex-col space-y-4">
                {['home', 'portfolio', 'process', 'pricing', 'about', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-zinc-300 hover:text-purple-400 transition-colors duration-300 font-medium py-2 text-left capitalize"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
  <HeroWithImageShowreel/>

      {/* Enhanced Trust Bar */}
   <InfiniteScrollLogos/>

      {/* Problem Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-16">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                ARE YOU STRUGGLING WITH...?
              </h2>
              <p className="text-xl text-zinc-300">
                These common challenges hold back even the most talented creators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '❌', title: 'LOW ENGAGEMENT', desc: 'On your videos?' },
                { icon: '❌', title: 'WASTING HOURS', desc: 'Editing yourself?' },
                { icon: '❌', title: 'AMATEUR LOOKING', desc: 'Videos hurting your brand?' },
                { icon: '❌', title: 'MISSING DEADLINES', desc: 'And losing $$$?' },
                { icon: '❌', title: 'CONFUSED ABOUT', desc: 'Editing software?' },
                { icon: '❌', title: 'LOSING CLIENTS', desc: 'To competitors?' }
              ].map((problem, index) => (
                <div key={index} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105">
                  <div className="text-2xl mb-4">{problem.icon}</div>
                  <h3 className="font-semibold text-white text-xl mb-3">{problem.title}</h3>
                  <p className="text-zinc-400 text-lg">{problem.desc}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl text-zinc-300 italic">
                "You're not alone. Every successful creator faces these challenges. That's where I come in."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
    <EnhancedSolutionsSection/>

      {/* Portfolio Section */}
      <EnhancedPortfolioSection/>

      {/* Enhanced Testimonials */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-16">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                What Clients Say About Working With Me
              </h2>
              <p className="text-xl text-zinc-300">
                Real results from real clients - see how professional editing transformed their content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'CEO of TechStart',
                  content: '"Mohammad transformed our raw footage into a professional brand video that increased our sales by 40% in just 2 months. His attention to detail and fast delivery is unmatched!"',
                  rating: 5,
                  result: '+40% Sales',
                  avatar: 'SJ'
                },
                {
                  name: 'Marcus Chen',
                  role: 'YouTuber (500K Subs)',
                  content: '"I\'ve worked with 5 editors before Mohammad. None came close to his quality. He understands YouTube and knows exactly how to keep viewers hooked. My retention rates doubled!"',
                  rating: 5,
                  result: '2x Retention',
                  avatar: 'MC'
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'Marketing Director',
                  content: '"Professional, creative, and always delivers ahead of schedule. Mohammad doesn\'t just edit videos—he creates experiences. Highly recommend!"',
                  rating: 5,
                  result: 'On Time',
                  avatar: 'ER'
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="space-y-6">
                    {/* Header with Avatar and Result */}
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.avatar}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-zinc-400 text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                        {testimonial.result}
                      </div>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex space-x-1 text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-zinc-300 leading-relaxed text-left">
                      {testimonial.content}
                    </p>
                    
                    {/* Verification Badge */}
                    <div className="flex items-center space-x-2 text-zinc-500 text-sm">
                      <Check size={14} className="text-green-500" />
                      <span>Verified Client</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center justify-center space-x-2 mx-auto group">
              <span>💬 READ MORE REVIEWS</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-16">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                HOW WE'LL WORK TOGETHER (IT'S EASY)
              </h2>
              <p className="text-xl text-zinc-300">
                "From First Contact to Final Delivery in 4 Simple Steps"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting Line - Desktop */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 -z-10"></div>

              {[
                {
                  step: '1',
                  title: 'FREE CALL',
                  desc: 'We discuss your vision, goals, and timeline',
                  duration: '15-30 mins',
                  icon: '📞'
                },
                {
                  step: '2',
                  title: 'SEND YOUR FOOTAGE',
                  desc: 'Share files securely via Google Drive or WeTransfer',
                  duration: '24 hours',
                  icon: '📤'
                },
                {
                  step: '3',
                  title: 'I CREATE MAGIC',
                  desc: 'Professional editing with your vision in mind',
                  duration: '24-48 hrs',
                  icon: '🎬'
                },
                {
                  step: '4',
                  title: 'DELIVER & REFINE',
                  desc: 'You review, I revise until it\'s perfect',
                  duration: 'Same day',
                  icon: '✨'
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-purple-500 transition-all duration-300 group hover:scale-105 text-center space-y-4">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-2xl">{step.icon}</div>
                    
                    {/* Content */}
                    <h3 className="font-bold text-white text-xl">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                    <div className="text-purple-400 text-sm font-semibold">{step.duration}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto text-center space-y-6">
              <p className="text-zinc-300 text-lg">
                "No hidden fees. No complicated contracts. Just great videos, delivered fast."
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-full font-semibold text-white shadow-lg shadow-purple-500/50 hover:scale-105 transition-all duration-300"
              >
                🚀 START YOUR PROJECT TODAY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-16">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                CHOOSE YOUR VIDEO EDITING PACKAGE
              </h2>
              <p className="text-xl text-zinc-300">
                Transparent pricing with no surprises. Perfect for every need and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'STARTER',
                  price: '$199',
                  popular: false,
                  features: [
                    'Basic Cut & Assembly',
                    'Color Correction',
                    'Audio Mixing',
                    '1 Revision',
                    '48hr Delivery',
                    'Perfect For: Social Posts, Quick Ads'
                  ],
                  cta: 'GET STARTED'
                },
                {
                  name: 'PROFESSIONAL',
                  price: '$399',
                  popular: true,
                  features: [
                    'Advanced Editing',
                    'Motion Graphics',
                    'Sound Design',
                    'Custom Thumbnails',
                    '3 Revisions',
                    '24hr Delivery',
                    'Perfect For: YouTube, Brands, Ads'
                  ],
                  cta: 'MOST POPULAR'
                },
                {
                  name: 'PREMIUM',
                  price: '$699',
                  popular: false,
                  features: [
                    'Everything in Pro',
                    'Script Writing',
                    'Custom Animations',
                    'Voiceover Editing',
                    'Unlimited Revisions',
                    'Same Day Available',
                    'Perfect For: Launches, High Value'
                  ],
                  cta: 'GO PREMIUM'
                }
              ].map((plan, index) => (
                <div key={index} className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 group ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-zinc-900 to-purple-900/40 border-purple-500 shadow-2xl shadow-purple-500/30 transform -translate-y-4' 
                    : 'bg-zinc-900 border-zinc-800 hover:border-purple-500'
                }`}>
                  
                  {/* Enhanced Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-white font-semibold text-sm shadow-lg animate-pulse">
                      ⭐ MOST POPULAR
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Plan Header */}
                    <div className="text-center space-y-3">
                      <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-zinc-300'}`}>
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                        <span className="text-zinc-400 text-lg">/video</span>
                      </div>
                      <div className="text-zinc-400 text-sm">Perfect for {plan.popular ? 'growing brands' : 'getting started'}</div>
                    </div>

                    {/* Features with Icons */}
                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-200">
                          <Check size={18} className="text-green-500 flex-shrink-0" />
                          <span className="text-zinc-300 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced CTA */}
                    <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-purple-500'
                    } hover:scale-105 transform`}>
                      {plan.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto text-center space-y-6">
              <p className="text-zinc-400 text-lg">
                "Not sure which package? Book a free call and I'll help you choose the perfect fit for your goals and budget"
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                📞 FREE CONSULTATION CALL
              </button>
              <div className="text-zinc-500 text-sm">
                💳 Payment plans available | 🔒 Secure checkout
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Everything you need to know before we start working together
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  question: "What types of videos do you edit?",
                  answer: "I edit all types: YouTube videos, social media ads, brand videos, testimonials, explainers, podcasts, product demos, event recaps, and more. If you have footage, I can make it amazing.",
                  icon: "🎬"
                },
                {
                  question: "How long does editing take?",
                  answer: "Most projects are delivered within 24-48 hours. Rush orders can be completed same-day for an additional fee. I'll always give you an accurate timeline upfront.",
                  icon: "⏱️"
                },
                {
                  question: "What if I don't like the first draft?",
                  answer: "No problem! All packages include multiple revisions. I'll work with you until you're 100% satisfied. Your happiness is my priority.",
                  icon: "🔄"
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Absolutely! I work with clients worldwide. We'll communicate via email, WhatsApp, or Zoom—whatever works best for you.",
                  icon: "🌎"
                },
                {
                  question: "What software do you use?",
                  answer: "I use industry-standard tools: Adobe Premiere Pro, After Effects, DaVinci Resolve, and Final Cut Pro. You'll get professional-grade results every time.",
                  icon: "💻"
                },
                {
                  question: "How do I send you my footage?",
                  answer: "Easy! Use Google Drive, Dropbox, WeTransfer, or any file-sharing service. I'll provide detailed instructions after you book a consultation.",
                  icon: "📤"
                }
              ].map((faq, index) => (
                <div key={index} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start space-x-4 text-left group"
                  >
                    <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {faq.icon}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-white text-lg text-left pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          size={20} 
                          className={`text-purple-400 transition-transform duration-300 flex-shrink-0 mt-1 ${
                            activeFAQ === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      
                      {activeFAQ === index && (
                        <p className="text-zinc-300 leading-relaxed text-left pt-2">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center space-y-6">
              <p className="text-zinc-400 text-lg">Still have questions?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
  onClick={() => window.location.href = 'mailto:rajputmuhammadali096@gmail.com?subject=Video Editing Inquiry&body=Hi Mohammad Ali,%0D%0A%0D%0AI am interested in your video editing services.'}
  className="bg-zinc-800 hover:bg-zinc-700 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center gap-3"
>
  📧 Email Me Directly
</button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-xl font-semibold text-white transition-colors duration-300 hover:scale-105"
                >
                  📞 Book a Free Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
    <AboutSection/>

      {/* Enhanced Final CTA */}
     <EnhancedContactSection/>

      {/* Footer */}
    <EnhancedFooter/>
    </div>
  );
};

export default MohammadAliPortfolio;