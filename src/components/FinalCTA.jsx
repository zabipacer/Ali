import React from 'react';
import { Phone, Mail, MessageCircle, Clock, Shield, CheckCircle } from 'lucide-react';

export default function EnhancedContactSection() {
  const openEmail = () => {
    window.location.href = 'mailto:rajputmuhammadali096@gmail.com?subject=Video Editing Inquiry';
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/923168705024');
  };

  function callNow() {
        window.location.href = 'tel:+923168705024';
    }

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center space-y-12">
          
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 text-yellow-400 px-5 py-2.5 rounded-full text-sm font-bold animate-pulse border border-yellow-500/30">
              <span>⚡</span>
              <span>LIMITED TIME OFFER</span>
              <span>⚡</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Transform{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Your Videos?
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-white font-semibold">
              Stop Wasting Time. Start Getting Results.
            </p>
            
            <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Book Your Free 15-Minute Consultation Call Today and Discover How Professional 
              Video Editing Can{' '}
              <span className="text-white font-semibold">Grow Your Brand</span>,{' '}
              <span className="text-white font-semibold">Increase Engagement</span>, and{' '}
              <span className="text-white font-semibold">Drive More Sales</span>
            </p>
          </div>

          {/* Main CTA Box */}
          <div className="bg-black/40 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-lg shadow-2xl max-w-3xl mx-auto">
            <div className="space-y-8">
              
              {/* Free Consultation Benefits */}
              <div className="text-center space-y-6">
                <div className="text-2xl md:text-3xl text-white font-bold">
                  🎁 FREE CONSULTATION INCLUDES:
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  {[
                    { text: 'Video Strategy Session', icon: '🎯' },
                    { text: 'Custom Project Timeline', icon: '📅' },
                    { text: 'Pricing Breakdown', icon: '💰' },
                    { text: 'Zero Obligation', icon: '✅' }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 group hover:bg-white/10 hover:translate-x-2 transition-all duration-300"
                    >
                      <div className="text-2xl flex-shrink-0">{item.icon}</div>
                      <span className="text-zinc-200 font-medium text-base md:text-lg">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                {/* WhatsApp Button */}
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-500 text-white px-8 py-5 rounded-xl font-bold text-lg md:text-xl shadow-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <MessageCircle size={24} />
                    <span>CHAT ON WHATSAPP NOW</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>

                {/* Call Button */}
                <button
                  onClick={callNow}
                  className="w-full bg-white hover:bg-zinc-100 text-purple-900 px-8 py-5 rounded-xl font-bold text-lg md:text-xl shadow-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Phone size={24} className="group-hover:rotate-12 transition-transform" />
                    <span>CALL NOW: +92 316 8705024</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
                
                {/* Urgency Message */}
                <div className="text-center space-y-2 pt-2">
                  <div className="inline-flex items-center gap-2 text-red-400 font-bold text-sm md:text-base animate-pulse bg-red-500/10 px-4 py-2 rounded-full border border-red-500/30">
                    <Clock size={16} />
                    <span>Only 3 Spots Left This Week</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
                    <Shield size={16} />
                    <span>100% Confidential • No Credit Card Required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-zinc-800 max-w-2xl mx-auto">
            <p className="text-zinc-300 text-lg md:text-xl font-semibold mb-6">
              Prefer Email? No Problem!
            </p>
            
            <button
              onClick={openEmail}
              className="inline-flex items-center gap-3 text-white hover:text-purple-400 text-lg md:text-xl font-semibold transition-all duration-300 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-xl"
            >
              <Mail size={24} />
              <span>rajputmuhammadali096@gmail.com</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Clock, text: 'Response Within 24h' },
              { icon: CheckCircle, text: '200+ Videos Delivered' },
              { icon: Shield, text: '98% Satisfaction Rate' }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-2 bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <IconComponent className="w-8 h-8 text-purple-400" />
                  <span className="text-zinc-300 text-sm font-medium text-center">{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* Final Motivational Quote */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 md:p-8 border border-purple-500/20">
            <p className="text-white text-xl md:text-2xl font-semibold italic leading-relaxed">
              "Don't let amateur videos hold your business back. 
              <span className="text-yellow-400"> The next viral video could be yours.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}