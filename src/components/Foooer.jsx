import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Twitter, Linkedin, MessageCircle } from 'lucide-react';

export default function EnhancedFooter() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openEmail = () => {
    window.location.href = 'mailto:rajputmuhammadali096@gmail.com?subject=Video Editing Inquiry';
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/923168705024');
  };

  const callNow = () => {
    window.location.href = 'tel:+923168705024';
  };

  return (
    <footer className="bg-black border-t border-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg">
                MA
              </div>
              <span className="font-bold text-xl text-white">Mohammad Ali</span>
            </div>
            <p className="text-zinc-400 text-base font-medium">
              Professional Video Editor
            </p>
            <p className="text-zinc-500 text-sm italic leading-relaxed">
              "Transforming Visions Into Viral Videos"
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Available for Projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Services', id: 'services' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-zinc-400 hover:text-purple-400 transition-all duration-300 text-left text-sm hover:translate-x-1 flex items-center gap-2 group"
                >
                  <span className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Connect With Me</h3>
            <p className="text-zinc-400 text-sm">Follow for video tips & behind-the-scenes</p>
            <div className="flex space-x-3">
              {[
                { icon: Instagram, color: 'hover:text-pink-500', label: 'Instagram' },
                { icon: Youtube, color: 'hover:text-red-500', label: 'YouTube' },
                { icon: Twitter, color: 'hover:text-blue-400', label: 'Twitter' },
                { icon: Linkedin, color: 'hover:text-blue-500', label: 'LinkedIn' }
              ].map((social, index) => (
                <button
                  key={index}
                  className={`text-zinc-400 ${social.color} transition-all duration-300 bg-zinc-900 hover:bg-zinc-800 p-3 rounded-lg hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <button
                onClick={openEmail}
                className="flex items-center space-x-3 text-zinc-400 hover:text-purple-400 transition-colors duration-300 group w-full"
              >
                <div className="bg-zinc-900 p-2 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-left break-all">rajputmuhammadali096@gmail.com</span>
              </button>
              
              <button
                onClick={callNow}
                className="flex items-center space-x-3 text-zinc-400 hover:text-green-400 transition-colors duration-300 group w-full"
              >
                <div className="bg-zinc-900 p-2 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <Phone size={16} />
                </div>
                <span>+92 316 8705024</span>
              </button>

              <button
                onClick={openWhatsApp}
                className="flex items-center space-x-3 text-zinc-400 hover:text-green-400 transition-colors duration-300 group w-full"
              >
                <div className="bg-zinc-900 p-2 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle size={16} />
                </div>
                <span>WhatsApp Available</span>
              </button>
              
              <div className="flex items-start space-x-3 text-zinc-400 pt-2">
                <div className="bg-zinc-900 p-2 rounded-lg flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="text-left">Khanewal, Punjab, Pakistan<br />
                <span className="text-zinc-500 text-xs">Remote Projects Worldwide</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 mb-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-white font-bold text-xl md:text-2xl mb-3">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-zinc-300 mb-5">Let's discuss your next video project</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </button>
            <button
              onClick={callNow}
              className="bg-white hover:bg-zinc-100 text-purple-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-8 text-center space-y-2">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Mohammad Ali Video Editing. All Rights Reserved.
          </p>
          <p className="text-zinc-600 text-xs">
            Crafted with passion for creators worldwide 🎬
          </p>
        </div>
      </div>
    </footer>
  );
}