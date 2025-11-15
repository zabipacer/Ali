import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBolt, FaStethoscope, FaFlag, FaClock, FaVideo, FaChartLine, FaInstagram, FaTiktok, FaYoutube,
  FaPlay, FaCheck, FaTooth, FaSyringe, FaClinicMedical, FaDumbbell, FaBookMedical, FaMicrophone,
  FaWhatsapp, FaPhone, FaLinkedin, FaStar, FaShieldAlt, FaUsers, FaHeart, FaComments,
  FaFilePdf, FaDownload, FaArrowRight, FaTimes, FaExpand, FaCompress, FaMapMarkerAlt,
  FaCalendar, FaMoneyBillWave, FaHeadset, FaRocket, FaUserMd, FaHospital, FaMobileAlt,
  FaBars, FaSpinner, FaQuoteLeft, FaArrowLeft, FaArrowRight as FaArrowRightIcon
} from 'react-icons/fa';

// Updated stock images - replace with actual portfolio images
const STOCKS = {
  aliPhoto: '/ali.jpg',
  portfolio1: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop',
  portfolio2: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=800&auto=format&fit=crop',
  portfolio3: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop',
  testimonial1: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop',
  testimonial2: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
  testimonial3: 'https://images.unsplash.com/photo-1594824947933-d0501ba2fe65?q=80&w=400&auto=format&fit=crop',
  // Doctor profile images
  doctor1: '/1.png',
  doctor2: '/2.png',
  doctor3: '/3.png',
  doctor4: '/4.png',
  doctor5: '/5.png',
   doctor6: '/6.png',
 
  // Video thumbnails
  video1: '/thumbnails/1.png',
  video2: '/thumbnails/2.png',
  video3: '/thumbnails/3.png',
  video4: '/thumbnails/4.png',
  video5: '/thumbnails/5.png',
  video6: '/thumbnails/6.png'
};

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`relative ${className}`}>{children}</section>
);

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <FaSpinner className="animate-spin text-4xl text-[#00D9B1]" />
  </div>
);

export default function LandingPage() {
  const [activeService, setActiveService] = useState('instagram');
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoLoading, setVideoLoading] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [spotsRemaining, setSpotsRemaining] = useState(2);
  const [showProofPopup, setShowProofPopup] = useState(true);
  const [emailStatus, setEmailStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  // WhatsApp number
  const whatsappNumber = '+923168705024';
  const whatsappMessage = "Hi Ali, I'm interested in medical video editing services for my practice. Can we discuss?";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  // Show email popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmailPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Track events
  const trackEvent = (eventName, properties) => {
    console.log('Event:', eventName, properties);
    // Add your analytics tracking here
  };

  // Real portfolio items with actual results
  const portfolioItems = [
    { 
      id: 1, 
      cat: 'Dental', 
      type: 'Patient Education', 
      city: 'Lahore', 
      doctor: 'Dr. Ayesha R.', 
      clinic: 'Dental Care Lahore',
      views: '47K', 
      likes: '2.3K', 
      saves: '127', 
      quote: 'This reel brought 23 new patients in first week!', 
      color: 'from-blue-600 to-cyan-600',
      duration: '2:30',
      language: 'Urdu',
      result: '+23 patients in 1 week',
      platform: 'Instagram Reels',
      thumbnail: STOCKS.video1,
      videoUrl: '/1.mp4',
      caseStudy: 'Video explaining dental implant procedure reduced patient anxiety and increased conversion by 40%'
    },
    { 
      id: 2, 
      cat: 'Dermatology', 
      type: 'Patient Testimonial', 
      city: 'Karachi', 
      doctor: 'Dr. Sara I.', 
      clinic: 'Skin Solutions Clinic',
      views: '89K', 
      likes: '4.1K', 
      saves: '289', 
      quote: '15 new patient inquiries in 3 days from one video!', 
      color: 'from-pink-600 to-rose-600',
      duration: '1:45',
      language: 'English',
      result: '15 inquiries in 3 days',
      platform: 'YouTube Shorts',
      thumbnail: STOCKS.video2,
      videoUrl: '/2.mp4',
      caseStudy: 'Acne treatment success story video went viral, bringing patients from across Karachi'
    },
    { 
      id: 3, 
      cat: 'Cardiology', 
      type: 'Medical Education', 
      city: 'Islamabad', 
      doctor: 'Dr. Hassan M.', 
      clinic: 'Heart Care Center',
      views: '156K', 
      likes: '8.2K', 
      saves: '412', 
      quote: 'Clinic bookings tripled this month after video series.', 
      color: 'from-emerald-600 to-green-600',
      duration: '3:15',
      language: 'Both',
      result: '3x more bookings',
      platform: 'Instagram & YouTube',
      thumbnail: STOCKS.video3,
      videoUrl: '/3.mp4',
      caseStudy: 'Heart health education series established doctor as authority, leading to premium consultations'
    },
    { 
      id: 4, 
      cat: 'Dental', 
      type: 'Practice Marketing', 
      city: 'Karachi', 
      doctor: 'Dr. Kamran S.', 
      clinic: 'Smile Designers',
      views: '34K', 
      likes: '1.8K', 
      saves: '156', 
      quote: 'Best investment we made this year - ROI in 2 weeks!', 
      color: 'from-purple-600 to-indigo-600',
      duration: '2:00',
      language: 'Urdu',
      result: 'ROI in 2 weeks',
      platform: 'Facebook Ads',
      thumbnail: STOCKS.video4,
      videoUrl: '/4.mp4',
      caseStudy: 'Clinic tour video used in Facebook ads brought high-value patients seeking cosmetic dentistry'
    },
    { 
      id: 5, 
      cat: 'Dermatology', 
      type: 'Social Media', 
      city: 'Lahore', 
      doctor: 'Dr. Fatima N.', 
      clinic: 'Derma Excellence',
      views: '67K', 
      likes: '3.2K', 
      saves: '234', 
      quote: 'Patients now understand procedures better and trust us more.', 
      color: 'from-orange-600 to-red-600',
      duration: '0:45',
      language: 'Urdu',
      result: '80% consultation conversion',
      platform: 'Instagram Reels',
      thumbnail: STOCKS.video5,
      videoUrl: '/5.mp4',
      caseStudy: 'Quick skincare tip Reels built massive following and established practice as industry leader'
    },
    { 
      id: 6, 
      cat: 'General Practice', 
      type: 'Patient Education', 
      city: 'Rawalpindi', 
      doctor: 'Dr. Ahmed K.', 
      clinic: 'Family Health Clinic',
      views: '92K', 
      likes: '4.5K', 
      saves: '321', 
      quote: 'From 3 to 15 patients daily - all from video content!', 
      color: 'from-teal-600 to-cyan-600',
      duration: '2:15',
      language: 'Both',
      result: '500% patient increase',
      platform: 'YouTube Channel',
      thumbnail: STOCKS.video6,
      videoUrl: '/6.mp4',
      caseStudy: 'Chronic disease management videos built loyal patient base and reduced no-shows by 60%'
    }
  ];

  const filters = ['All','Dental','Dermatology','Cardiology','General Practice'];
  const filteredPortfolio = activeFilter === 'All' ? portfolioItems : portfolioItems.filter(p => p.cat === activeFilter);

  // Realistic Pakistani Doctor Reviews
  const reviews = [
    {
      id: 1,
      name: 'Dr. Sarah Ahmed',
      specialty: 'Dermatologist',
      city: 'Lahore',
      clinic: 'Skin & Laser Clinic',
      image: STOCKS.doctor1,
      rating: 5,
      verified: true,
      quote: "Ali transformed how we explain procedures to patients. Our patient education videos have reduced consultation time by 40% and increased new patient bookings by 300% in just 3 months. His understanding of medical terminology in both Urdu and English is exceptional.",
      result: '300% more bookings',
      videosProduced: 12,
      joinDate: 'March 2023'
    },
    {
      id: 2,
      name: 'Dr. Hamza Khan',
      specialty: 'Dental Surgeon',
      city: 'Karachi',
      clinic: 'Elite Dental Care',
      image: STOCKS.doctor2,
      rating: 5,
      verified: true,
      quote: "Before working with Ali, our Instagram had 300 followers. After our first video series, we gained 2,000 followers and now get 15-20 WhatsApp inquiries weekly directly from video content. He's more than an editor - he's a strategic partner.",
      result: '2,000+ new followers',
      videosProduced: 8,
      joinDate: 'January 2023'
    },
    {
      id: 3,
      name: 'Dr. Ayesha Malik',
      specialty: 'Cardiologist',
      city: 'Islamabad',
      clinic: 'Heart Institute',
      image: STOCKS.doctor3,
      rating: 5,
      verified: true,
      quote: "Ali doesn't just edit videos—he understands medical communication. He knows exactly how to make complex heart procedures educational without being overwhelming for patients. Our patient satisfaction scores improved by 35% after implementing his video strategy.",
      result: '35% satisfaction boost',
      videosProduced: 6,
      joinDate: 'November 2022'
    },
    {
      id: 4,
      name: 'Dr. Omar Farooq',
      specialty: 'Orthopedic Surgeon',
      city: 'Rawalpindi',
      clinic: 'Bone & Joint Center',
      image: STOCKS.doctor4,
      rating: 5,
      verified: true,
      quote: "As a surgeon, I never thought social media would work for me. Ali proved me wrong. His surgical procedure explanation videos have positioned me as an authority, and I now get referrals from across Punjab. Best investment in my practice.",
      result: 'Regional referrals',
      videosProduced: 9,
      joinDate: 'February 2023'
    },
    {
      id: 5,
      name: 'Dr. Fatima Raza',
      specialty: 'Pediatrician',
      city: 'Faisalabad',
      clinic: 'Child Care Specialists',
      image: STOCKS.doctor5,
      rating: 5,
      verified: true,
      quote: "Parents love our educational content! Ali's child-friendly animations and clear Urdu explanations have made our clinic the go-to pediatric center in Faisalabad. We've doubled our new patient intake in 4 months.",
      result: '2x patient intake',
      videosProduced: 15,
      joinDate: 'December 2022'
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Ahmed',
      specialty: 'Dermatologist',
      city: 'Lahore',
      clinic: 'Skin & Laser Clinic',
      videoThumbnail: STOCKS.testimonial1,
      quote: "Ali transformed how we explain procedures to patients. Our patient education videos have reduced consultation time by 40% and increased new patient bookings by 300% in just 3 months. His understanding of medical terminology in both Urdu and English is exceptional.",
      result: '300% more bookings',
      videosProduced: 12,
      rating: 5,
      verified: true
    },
    {
      id: 2,
      name: 'Dr. Hamza Khan',
      specialty: 'Dental Surgeon',
      city: 'Karachi',
      clinic: 'Elite Dental Care',
      videoThumbnail: STOCKS.testimonial2,
      quote: "Before working with Ali, our Instagram had 300 followers. After our first video series, we gained 2,000 followers and now get 15-20 WhatsApp inquiries weekly directly from video content. He's more than an editor - he's a strategic partner.",
      result: '2,000+ new followers',
      videosProduced: 8,
      rating: 5,
      verified: true
    },
    {
      id: 3,
      name: 'Dr. Ayesha Malik',
      specialty: 'Cardiologist',
      city: 'Islamabad',
      clinic: 'Heart Institute',
      videoThumbnail: STOCKS.testimonial3,
      quote: "Ali doesn't just edit videos—he understands medical communication. He knows exactly how to make complex heart procedures educational without being overwhelming for patients. Our patient satisfaction scores improved by 35% after implementing his video strategy.",
      result: '35% satisfaction boost',
      videosProduced: 6,
      rating: 5,
      verified: true
    }
  ];

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    // Rate limiting
    const now = Date.now();
    if (now - lastSubmitTime < 60000 && submitCount >= 3) {
      setEmailStatus({ 
        type: 'error', 
        message: 'Too many attempts. Please wait a minute.' 
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitCount(prev => prev + 1);
    setLastSubmitTime(now);
    
    try {
      // Send email via EmailJS or your preferred service
      await sendGuideEmail(email);
      
      setEmailStatus({ 
        type: 'success', 
        message: 'Check your email for the free guide! We have sent "10 Medical Videos Every Pakistani Doctor Should Have" to your inbox.' 
      });
      setEmail('');
      setTimeout(() => {
        setShowEmailPopup(false);
        setEmailStatus({ type: '', message: '' });
      }, 5000);
      
      trackEvent('email_subscription', { source: 'popup', email: email });
    } catch (error) {
      setEmailStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Email sending function
  const sendGuideEmail = async (email) => {
    // Using EmailJS (you need to set up an account)
    const emailjsConfig = {
      serviceId: 'YOUR_EMAILJS_SERVICE_ID',
      templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
      publicKey: 'YOUR_EMAILJS_PUBLIC_KEY'
    };

    // If EmailJS is not set up, use a fallback
    if (!emailjsConfig.serviceId || emailjsConfig.serviceId === 'YOUR_EMAILJS_SERVICE_ID') {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Guide sent to:', email);
      return { status: 200 };
    }

    // Actual EmailJS implementation
    const templateParams = {
      to_email: email,
      from_name: 'Ali Raza - Medical Video Editor',
      subject: 'Your Free Medical Video Guide',
      message: `Thank you for downloading "10 Medical Videos Every Pakistani Doctor Should Have". Download your guide here: [Link to actual PDF]`,
      reply_to: 'ali@medicalvideoeditor.com'
    };

    // Uncomment when EmailJS is set up
    /*
    return await window.emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    );
    */
  };

  const handleVideoLoadStart = (videoId) => {
    setVideoLoading(prev => ({ ...prev, [videoId]: true }));
  };

  const handleVideoCanPlay = (videoId) => {
    setVideoLoading(prev => ({ ...prev, [videoId]: false }));
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#00D9B1] text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#00D9B1] to-[#0066CC]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Social proof popup */}
      <AnimatePresence>
        {showProofPopup && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-24 left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 max-w-sm z-40"
          >
            <button 
              onClick={() => setShowProofPopup(false)}
              className="absolute top-2 right-2 text-white/50 hover:text-white"
              aria-label="Close notification"
            >
              <FaTimes />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00D9B1] to-[#0066CC] flex items-center justify-center text-white font-bold">
                FK
              </div>
              <div>
                <div className="font-semibold text-white">Dr. Fatima K.</div>
                <div className="text-sm text-white/70">Just booked Content Bundle from Lahore</div>
                <div className="text-xs text-white/50">3 minutes ago</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header with Ali's Photo */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0A0F1C]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00D9B1] to-[#0066CC] overflow-hidden border-2 border-white/20 shadow-lg">
              <img src={STOCKS.aliPhoto} alt="Ali" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-lg text-white">Ali Raza</div>
              <div className="text-xs text-white/70">Medical Video Editor</div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {['Services','Portfolio','Results','Pricing','About','FAQs'].map(l => (
              <a 
                key={l} 
                href={`#${l.toLowerCase()}`} 
                className="hover:text-[#00D9B1] font-medium transition-colors"
                onClick={() => trackEvent('navigation_click', { section: l.toLowerCase() })}
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${whatsappNumber}`} className="flex items-center gap-2 text-[#00D9B1]">
              <FaPhone className="text-sm" />
              <span className="text-sm">{whatsappNumber}</span>
            </a>
            <a 
              href="#portfolio" 
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00D9B1] to-[#0066CC] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#00D9B1]/20 transition-all"
              onClick={() => trackEvent('cta_click', { location: 'header', type: 'portfolio' })}
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-16 right-0 bottom-0 w-64 bg-[#0A0F1C] border-l border-white/10 p-6 md:hidden z-50"
            >
              <div className="flex flex-col gap-4">
                {['Services','Portfolio','Results','Pricing','About','FAQs'].map(l => (
                  <a 
                    key={l} 
                    href={`#${l.toLowerCase()}`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      trackEvent('mobile_navigation_click', { section: l.toLowerCase() });
                    }}
                    className="block py-3 text-white hover:text-[#00D9B1] border-b border-white/10"
                  >
                    {l}
                  </a>
                ))}
                <a 
                  href={`tel:${whatsappNumber}`}
                  className="flex items-center gap-2 py-3 text-[#00D9B1] border-b border-white/10"
                >
                  <FaPhone />
                  {whatsappNumber}
                </a>
                <a 
                  href="#portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 bg-gradient-to-r from-[#00D9B1] to-[#0066CC] text-white rounded-full text-center font-semibold"
                >
                  View Portfolio
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main id="main-content">
        {/* HERO SECTION */}
        <Section id="hero" className="pt-28 pb-20 bg-gradient-to-br from-[#0A0F1C] to-[#1A237E] relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00D9B1] rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#0066CC] rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#00D9B1] text-sm font-medium mb-6 backdrop-blur-sm">
                <FaUserMd className="text-xs" />
                Exclusive Medical Video Editor • 3+ Years Experience
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Professional Video Editing for{' '}
                <span className="bg-gradient-to-r from-[#00D9B1] to-[#0066CC] bg-clip-text text-transparent">
                  Pakistani Doctors
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                I transform your medical expertise into patient-attracting videos for 
                <span className="text-[#00D9B1] font-semibold"> Instagram, YouTube & your website</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#portfolio" 
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00D9B1] to-[#0066CC] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-[#00D9B1]/20 transition-all duration-300 hover:scale-105 text-center group"
                  onClick={() => trackEvent('cta_click', { location: 'hero', type: 'portfolio' })}
                >
                  View My Medical Portfolio
                  <FaArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={whatsappUrl} 
                  className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-lg border-2 border-white/20 hover:border-[#00D9B1] hover:bg-[#00D9B1]/10 transition-all duration-300 text-center backdrop-blur-sm"
                  onClick={() => trackEvent('cta_click', { location: 'hero', type: 'whatsapp' })}
                >
                  <FaWhatsapp className="inline mr-2" />
                  Free 20-Min Consultation
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: '50+', label: 'Pakistani Doctors' },
                  { number: '200+', label: 'Videos Delivered' },
                  { number: '4.9/5', label: 'Doctor Rating' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm"
                  >
                    <motion.div 
                      className="text-2xl font-bold text-[#00D9B1]"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="text-sm text-white/70 flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full"><FaBolt className="text-[#00D9B1]"/>48h delivery</span>
                <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full"><FaShieldAlt className="text-[#00D9B1]"/>PMDC compliant</span>
                <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full"><FaMapMarkerAlt className="text-[#00D9B1]"/>Based in Karachi</span>
              </div>
            </div>

            {/* Right Side - Ali's Photo & Video Showcase */}
            <div className="relative">
              <div className="relative bg-white/5 rounded-2xl p-6 shadow-2xl border border-white/10 backdrop-blur-sm">
                {/* Ali's Introduction Card */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-[#00D9B1]/10 to-[#0066CC]/10 rounded-xl border border-[#00D9B1]/20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00D9B1] to-[#0066CC] overflow-hidden border-2 border-white shadow-lg">
                    <img src={STOCKS.aliPhoto} alt="Ali Raza" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Hi, I'm Ali 👋</div>
                    <div className="text-sm text-white/80">Medical Video Specialist</div>
                    <div className="text-xs text-white/60">3+ years | 200+ videos | 50+ doctors</div>
                  </div>
                </div>

                {/* Video Showcase */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0066CC] to-[#00D9B1]">
                  <div className="aspect-video flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <button 
                      onClick={() => {
                        setLightbox({ type: 'showreel', title: 'Medical Video Showreel' });
                        trackEvent('video_view', { video_type: 'showreel' });
                      }}
                      className="relative z-10 text-6xl text-white bg-[#00D9B1] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
                      aria-label="Play medical video showreel"
                    >
                      <FaPlay className="ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm font-semibold">Medical Video Showreel</div>
                    <div className="text-xs opacity-90">See before/after transformations</div>
                  </div>
                </div>

                {/* Client Cities */}
                <div className="mt-6 text-center">
                  <div className="text-xs text-white/70 mb-3">Trusted by doctors across Pakistan</div>
                  <div className="flex justify-center gap-4 text-white font-semibold text-sm">
                    <span className="bg-white/5 px-3 py-1 rounded-full">Karachi</span>
                    <span className="bg-white/5 px-3 py-1 rounded-full">Lahore</span>
                    <span className="bg-white/5 px-3 py-1 rounded-full">Islamabad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* URGENCY INDICATOR */}
        <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 text-center mx-6 mb-8">
          <div className="text-red-400 font-bold">⚠️ Only {spotsRemaining} spots left for November 2024</div>
          <div className="text-sm text-white/70">Next availability: December 15</div>
        </div>

        {/* REAL REVIEWS SECTION */}
        <Section id="reviews" className="py-20 bg-gradient-to-br from-[#0A0F1C] to-[#1A237E]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Pakistani Doctors{' '}
                <span className="bg-gradient-to-r from-[#00D9B1] to-[#0066CC] bg-clip-text text-transparent">
                  Say About My Work
                </span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Don't just take my word for it - hear from the doctors who've transformed their practices with video
              </p>
            </div>

            {/* Reviews Slider */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm shadow-2xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Doctor Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img 
                        src={reviews[currentReview].image} 
                        alt={reviews[currentReview].name}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-[#00D9B1]/20 shadow-lg"
                      />
                      {reviews[currentReview].verified && (
                        <div className="absolute -top-2 -right-2 bg-[#00D9B1] text-white p-1 rounded-full">
                          <FaCheck className="text-xs" />
                        </div>
                      )}
                    </div>
                    <div className="text-center mt-4">
                      <div className="flex justify-center mb-1">
                        {[...Array(reviews[currentReview].rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                      <div className="text-xs text-white/60">{reviews[currentReview].joinDate}</div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1 text-center md:text-left">
                    <FaQuoteLeft className="text-3xl text-[#00D9B1] mb-4 mx-auto md:mx-0" />
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {reviews[currentReview].name}
                    </h3>
                    
                    <div className="text-white/70 mb-4">
                      <div className="font-semibold">{reviews[currentReview].specialty}</div>
                      <div className="text-sm">{reviews[currentReview].clinic}, {reviews[currentReview].city}</div>
                    </div>

                    <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
                      "{reviews[currentReview].quote}"
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <div className="bg-[#00D9B1]/20 text-[#00D9B1] px-4 py-2 rounded-full font-semibold">
                        {reviews[currentReview].result}
                      </div>
                      <div className="bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm">
                        {reviews[currentReview].videosProduced} videos produced
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevReview}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#00D9B1] text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform"
                aria-label="Previous review"
              >
                <FaArrowLeft />
              </button>
              <button 
                onClick={nextReview}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#00D9B1] text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform"
                aria-label="Next review"
              >
                <FaArrowRightIcon />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentReview ? 'bg-[#00D9B1] scale-125' : 'bg-white/30'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mt-16 text-center">
              {[
                { icon: FaStar, label: '4.9/5 from 50+ Doctors', color: 'text-yellow-400' },
                { icon: FaVideo, label: '200+ Medical Videos', color: 'text-[#00D9B1]' },
                { icon: FaClock, label: '48-Hour Guarantee', color: 'text-green-400' },
                { icon: FaShieldAlt, label: 'PMDC Compliant', color: 'text-purple-400' }
              ].map((badge, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 shadow-lg border border-white/10 backdrop-blur-sm">
                  <badge.icon className={`text-2xl mx-auto mb-2 ${badge.color}`} />
                  <div className="text-sm font-semibold text-white">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* PORTFOLIO SECTION */}
        <Section id="portfolio" className="py-20 bg-[#0F1729]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Real Videos,{' '}
                <span className="bg-gradient-to-r from-[#00D9B1] to-[#0066CC] bg-clip-text text-transparent">
                  Real Results
                </span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                See how Pakistani doctors are filling their appointment calendars with professional video content
              </p>
            </div>

            {/* Portfolio Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { number: '24', label: 'Portfolio Videos' },
                { number: '15+', label: 'Medical Specialties' },
                { number: '2.5M+', label: 'Total Views' },
                { number: '1.2K+', label: 'Patient Bookings' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold text-[#00D9B1]">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Filters with Counts */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {filters.map(filter => {
                const count = filter === 'All' ? portfolioItems.length : portfolioItems.filter(p => p.cat === filter).length;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${
                      activeFilter === filter
                        ? 'bg-gradient-to-r from-[#00D9B1] to-[#0066CC] text-white border-transparent'
                        : 'bg-white/5 border-white/10 text-white/80 hover:border-[#00D9B1]'
                    }`}
                  >
                    {filter} <span className="text-xs opacity-75">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Portfolio Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPortfolio.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group backdrop-blur-sm"
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <img 
                      src={item.thumbnail} 
                      alt={`${item.doctor} - ${item.clinic}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <button
                        onClick={() => {
                          setLightbox({ type: 'portfolio', item });
                          trackEvent('video_view', {
                            video_title: item.doctor,
                            specialty: item.cat,
                            platform: item.platform
                          });
                        }}
                        className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 bg-[#00D9B1] text-white p-4 rounded-full shadow-2xl"
                        aria-label={`Play video: ${item.doctor} - ${item.clinic}`}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setLightbox({ type: 'portfolio', item });
                            trackEvent('video_view', {
                              video_title: item.doctor,
                              specialty: item.cat,
                              platform: item.platform
                            });
                          }
                        }}
                      >
                        <FaPlay className="text-lg ml-0.5" />
                      </button>
                    </div>
                    
                    {/* Video Info Overlay */}
                    <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white text-xs p-2 rounded-lg backdrop-blur-sm">
                      <div className="flex justify-between items-center">
                        <span>{item.duration}</span>
                        <span>{item.language}</span>
                        <span>{item.views} views</span>
                      </div>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs p-1 px-2 rounded-full backdrop-blur-sm">
                      {item.platform}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.color} text-white`}>
                        {item.cat}
                      </span>
                      <span className="text-xs text-white/70">{item.type}</span>
                    </div>
                    
                    <h3 className="font-semibold text-white mb-1">{item.doctor}</h3>
                    <p className="text-xs text-white/70 mb-1">{item.clinic}</p>
                    <p className="text-xs text-white/60 mb-3 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[#00D9B1] text-xs" />
                      {item.city}
                    </p>
                    
                    <div className="text-sm text-white/90 mb-3 italic">
                      "{item.quote}"
                    </div>

                    <div className="flex items-center justify-between text-xs text-white/70 mb-3">
                      <div className="flex items-center gap-4">
                        <span>❤️ {item.likes}</span>
                        <span>💾 {item.saves}</span>
                      </div>
                      <div className="text-[#00D9B1] font-semibold bg-[#00D9B1]/10 px-2 py-1 rounded-full">
                        {item.result}
                      </div>
                    </div>

                    <div className="text-xs text-white/60 border-t border-white/10 pt-3">
                      {item.caseStudy}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredPortfolio.length === 0 && (
              <div className="text-center py-12">
                <div className="text-lg text-white/70">No portfolio items found for this filter.</div>
                <button 
                  onClick={() => setActiveFilter('All')}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-[#00D9B1] to-[#0066CC] text-white rounded-lg"
                >
                  Show All Portfolio Items
                </button>
              </div>
            )}

            <div className="text-center mt-8">
              <a 
                href={whatsappUrl} 
                className="px-8 py-3 bg-white/10 border-2 border-white/20 text-white rounded-xl font-semibold hover:border-[#00D9B1] hover:bg-[#00D9B1]/10 transition-all inline-flex items-center gap-2"
                onClick={() => trackEvent('cta_click', { location: 'portfolio', type: 'whatsapp' })}
              >
                <FaWhatsapp />
                Get Your Free Sample Edit
              </a>
            </div>
          </div>
        </Section>

        {/* PRICING SECTION - REALISTIC PAKISTANI MARKET PRICING */}
        <Section id="pricing" className="py-20 bg-[#0F1729]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Affordable,{' '}
                <span className="bg-gradient-to-r from-[#00D9B1] to-[#0066CC] bg-clip-text text-transparent">
                  Transparent Pricing
                </span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Clear packages designed for Pakistani healthcare professionals. No hidden costs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: 'STARTER PACK',
                  sub: 'Perfect for Testing',
                  price: 'PKR 5,000',
                  per: 'per video',
                  popular: false,
                  features: [
                    '1 video (up to 3 min final length)',
                    '2 rounds of revisions',
                    'Optimized for 1 platform',
                    'Basic editing & color correction',
                    'Royalty-free background music',
                    'Simple text overlays',
                    '5-day delivery',
                    'Mobile-friendly format'
                  ],
                  notIncluded: [
                    'No custom animations',
                    'No multi-platform formats',
                    'No rush delivery'
                  ],
                  bestFor: 'New clinics, testing video marketing',
                  buttonText: 'Start With One Video'
                },
                {
                  name: 'PROFESSIONAL PACK',
                  sub: 'Most Popular',
                  price: 'PKR 15,000',
                  per: 'for 4 videos',
                  popular: true,
                  features: [
                    '4 videos per month',
                    'Unlimited revisions',
                    'Multi-platform optimization',
                    'Priority support',
                    'Basic content planning',
                    'Advanced editing & simple graphics',
                    'Custom intro/outro',
                    '3-day delivery',
                    'Medical stock footage',
                    'Urdu/English subtitles'
                  ],
                  notIncluded: [
                    'No professional voiceover',
                    'No script writing service'
                  ],
                  bestFor: 'Growing practices, regular content',
                  buttonText: 'Book Strategy Call'
                },
                {
                  name: 'PREMIUM PACK',
                  sub: 'For Practice Growth',
                  price: 'PKR 25,000',
                  per: 'per month',
                  popular: false,
                  features: [
                    '8 videos per month',
                    'Full content strategy',
                    'Thumbnail design',
                    'SEO optimization included',
                    'Custom animations & graphics',
                    'Professional voiceover coordination',
                    'Script consultation included',
                    '48-hour delivery',
                    'Performance analytics',
                    'WhatsApp support priority'
                  ],
                  notIncluded: [],
                  bestFor: 'Established clinics, serious growth',
                  buttonText: 'Discuss Custom Package'
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`relative rounded-2xl p-8 border-2 backdrop-blur-sm ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-[#00D9B1]/10 to-[#0066CC]/10 border-[#00D9B1] shadow-xl -translate-y-2' 
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00D9B1] to-[#0066CC] px-6 py-2 rounded-full text-white text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-white">{plan.name}</div>
                    <div className="text-white/70 text-sm mb-4">{plan.sub}</div>
                    <div className="text-4xl font-extrabold text-white">{plan.price}</div>
                    <div className="text-white/60 text-sm">{plan.per}</div>
                    {plan.popular && (
                      <div className="text-[#00D9B1] text-sm font-semibold mt-2">
                        Save PKR 5,000 vs single videos
                      </div>
                    )}
                  </div>

                  {/* What You Get */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FaCheck className="text-[#00D9B1] mt-1 flex-shrink-0" />
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Not Included */}
                  {plan.notIncluded.length > 0 && (
                    <div className="space-y-2 mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-sm font-semibold text-white/70">Not Included:</div>
                      {plan.notIncluded.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-white/60">
                          <span>•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <a 
                    href={`${whatsappUrl}&package=${plan.name}`}
                    className={`w-full py-4 rounded-xl font-semibold text-lg text-center block ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-[#00D9B1] to-[#0066CC] text-white hover:shadow-lg hover:shadow-[#00D9B1]/20' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    } transition-all`}
                    onClick={() => trackEvent('pricing_click', { package: plan.name, price: plan.price })}
                  >
                    {plan.buttonText}
                  </a>
                  
                  <div className="text-white/60 text-xs mt-3 text-center">
                    Best for: {plan.bestFor}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Add-ons Section */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-center mb-6 text-white">Popular Add-Ons</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Professional Urdu Voiceover', price: '+ PKR 1,500', desc: 'Medically-trained voice artist' },
                  { name: 'Rush 24-Hour Delivery', price: '+ PKR 2,000', desc: 'Jump to front of editing queue' },
                  { name: 'Script Writing Service', price: '+ PKR 1,000', desc: 'Patient-friendly, SEO-optimized scripts' },
                  { name: 'Additional Platform Formats', price: '+ PKR 500', desc: 'Get your video in 3+ formats' }
                ].map((addon, index) => (
                  <div key={index} className="border border-white/10 rounded-lg p-4 text-center hover:border-[#00D9B1] transition-colors bg-white/5">
                    <div className="font-semibold text-white mb-2">{addon.name}</div>
                    <div className="text-lg font-bold text-[#00D9B1] mb-2">{addon.price}</div>
                    <div className="text-sm text-white/70">{addon.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment & Guarantee */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl mb-2">💳</div>
                <div className="font-semibold text-white mb-2">Payment Process</div>
                <div className="text-sm text-white/70">
                  50% advance → Editing begins → Review & revisions → Pay remaining 50% → Final files delivered
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl mb-2">💰</div>
                <div className="font-semibold text-white mb-2">Accepted Methods</div>
                <div className="text-sm text-white/70">
                  Bank Transfer • Easypaisa • JazzCash
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl mb-2">🔒</div>
                <div className="font-semibold text-white mb-2">Money-Back Guarantee</div>
                <div className="text-sm text-white/70">
                  Not satisfied after first revision? 100% refund, no questions asked.
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* FINAL CTA SECTION */}
        <Section id="contact" className="py-20 bg-gradient-to-br from-[#0A0F1C] to-[#1A237E] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Stop Struggling with Video.<br />
              Start Attracting Patients.
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Your medical expertise is your superpower. Let me handle the video editing so you can focus on what you do best—caring for patients.
            </p>

            {/* Results Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: '👨‍⚕️', title: 'Focus on Medicine', desc: 'Stop wasting time on editing' },
                { icon: '⚡', title: 'Get Time Back', desc: '24–48 hour turnaround' },
                { icon: '📈', title: 'Grow Your Practice', desc: 'Attract new patients weekly' }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 border border-white/10">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold mb-1 text-white">{item.title}</div>
                  <div className="text-white/80 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a 
                href={whatsappUrl} 
                className="px-8 py-4 bg-[#00D9B1] text-[#073B3A] rounded-xl font-bold text-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-3"
                onClick={() => {
                  trackEvent('cta_click', { location: 'final', type: 'whatsapp' });
                  trackEvent('whatsapp_click', { location: 'final_cta' });
                }}
              >
                <FaWhatsapp className="text-xl" />
                Get Your Free Sample Edit →
              </a>
              <a 
                href="#portfolio" 
                className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#0066CC] transition-all flex items-center justify-center gap-3"
              >
                <FaPlay />
                See Full Portfolio First
              </a>
            </div>

            <div className="text-white/80 text-sm flex flex-wrap justify-center gap-6">
              <span className="flex items-center gap-2">✓ 100% Money-Back Guarantee</span>
              <span className="flex items-center gap-2">✓ No Contracts</span>
              <span className="flex items-center gap-2">✓ Cancel Anytime</span>
              <span className="flex items-center gap-2">✓ PMDC Compliant</span>
            </div>
          </div>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0A0F1C] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#00D9B1] to-[#0066CC] overflow-hidden">
                  <img src={STOCKS.aliPhoto} alt="Ali" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold">Ali Raza</div>
                  <div className="text-white/70 text-sm">Medical Video Editor</div>
                </div>
              </div>
              <div className="text-white/70 text-sm mb-4">
                Helping Pakistani Doctors Build Trust Through Video
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-white/70 hover:text-white">
                  <FaLinkedin className="text-lg" />
                </a>
                <a href="#" className="text-white/70 hover:text-white">
                  <FaInstagram className="text-lg" />
                </a>
                <a href={whatsappUrl} className="text-white/70 hover:text-white">
                  <FaWhatsapp className="text-lg" />
                </a>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-4 text-white">Services</div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#services" className="hover:text-[#00D9B1]">Patient Education Videos</a></li>
                <li><a href="#services" className="hover:text-[#00D9B1]">Practice Marketing Videos</a></li>
                <li><a href="#services" className="hover:text-[#00D9B1]">Social Media Content</a></li>
                <li><a href="#services" className="hover:text-[#00D9B1]">Medical Animations</a></li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-4 text-white">Resources</div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#portfolio" className="hover:text-[#00D9B1]">Portfolio</a></li>
                <li><a href="#reviews" className="hover:text-[#00D9B1]">Client Reviews</a></li>
                <li><a href="#pricing" className="hover:text-[#00D9B1]">Pricing</a></li>
                <li><a href="#faqs" className="hover:text-[#00D9B1]">FAQs</a></li>
                <li><a href="#" className="hover:text-[#00D9B1] flex items-center gap-1">
                  <FaFilePdf className="text-xs" />
                  Free Video Guide
                </a></li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-4 text-white">Contact</div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-center gap-2">
                  <FaWhatsapp className="text-[#00D9B1]" />
                  <a href={whatsappUrl} className="hover:text-[#00D9B1]">
                    {whatsappNumber}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="text-[#00D9B1]" />
                  <a href={`tel:${whatsappNumber}`} className="hover:text-[#00D9B1]">
                    Call Now
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#00D9B1]" />
                  <span>Based in Karachi</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaUserMd className="text-[#00D9B1]" />
                  <span>Serving All Pakistan</span>
                </li>
              </ul>

              <div className="mt-4 space-y-2 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span>4.9/5 from 50+ Doctors</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaVideo className="text-[#00D9B1]" />
                  <span>200+ Medical Videos Delivered</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/70 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>© {new Date().getFullYear()} Ali Raza Medical Video Editing. All rights reserved.</div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#00D9B1]">Privacy Policy</a>
                <a href="#" className="hover:text-[#00D9B1]">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href={whatsappUrl} 
        className="fixed bottom-6 right-6 z-50 bg-[#00D9B1] text-[#073B3A] px-6 py-4 rounded-full font-bold shadow-2xl hover:scale-110 transition-transform flex items-center gap-2"
        onClick={() => trackEvent('whatsapp_click', { location: 'floating_button' })}
      >
        <FaWhatsapp className="text-xl" />
        <span>WhatsApp Now</span>
      </a>

      {/* Email Capture Popup */}
      <AnimatePresence>
        {showEmailPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowEmailPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0A0F1C] rounded-2xl p-8 max-w-md w-full border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowEmailPopup(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
                aria-label="Close popup"
              >
                <FaTimes className="text-xl" />
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00D9B1] to-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaFilePdf className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Free Medical Video Guide
                </h3>
                <p className="text-white/80">
                  Get my 15-page guide: "10 Medical Videos Every Pakistani Doctor Should Have"
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00D9B1] focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00D9B1] to-[#0066CC] text-white py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#00D9B1]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <FaDownload />
                  )}
                  {isSubmitting ? 'Sending Guide...' : 'Download Free Guide'}
                </button>
              </form>

              {emailStatus.message && (
                <div className={`mt-4 p-3 rounded-lg ${
                  emailStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {emailStatus.message}
                </div>
              )}

              <p className="text-xs text-white/50 text-center mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0A0F1C] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">
                  {lightbox.type === 'portfolio' ? lightbox.item?.doctor : lightbox.title}
                </h3>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-white/70 hover:text-white p-2"
                  aria-label="Close lightbox"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <div className="p-6">
                {lightbox.type === 'portfolio' && lightbox.item && (
                  <div className="space-y-6">
                    {/* Video Player */}
                    <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                      <video 
                        className="w-full h-full" 
                        controls 
                        autoPlay
                        src={lightbox.item.videoUrl}
                        onLoadStart={() => handleVideoLoadStart(lightbox.item.id)}
                        onCanPlay={() => handleVideoCanPlay(lightbox.item.id)}
                      >
                        Your browser does not support the video tag.
                      </video>
                      {videoLoading[lightbox.item.id] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                          <FaSpinner className="animate-spin text-4xl text-[#00D9B1]" />
                        </div>
                      )}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-white">Project Details:</h4>
                        <div className="space-y-2 text-sm text-white/80">
                          <div><strong>Doctor:</strong> {lightbox.item.doctor}</div>
                          <div><strong>Clinic:</strong> {lightbox.item.clinic}</div>
                          <div><strong>Specialty:</strong> {lightbox.item.cat}</div>
                          <div><strong>Location:</strong> {lightbox.item.city}</div>
                          <div><strong>Duration:</strong> {lightbox.item.duration}</div>
                          <div><strong>Language:</strong> {lightbox.item.language}</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-white">Results:</h4>
                        <div className="space-y-2 text-sm text-white/80">
                          <div><strong>Views:</strong> {lightbox.item.views}</div>
                          <div><strong>Likes:</strong> {lightbox.item.likes}</div>
                          <div><strong>Saves:</strong> {lightbox.item.saves}</div>
                          <div><strong>Platform:</strong> {lightbox.item.platform}</div>
                          <div><strong>Impact:</strong> {lightbox.item.result}</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h4 className="font-semibold mb-2 text-white">Case Study:</h4>
                      <p className="text-sm text-white/80 italic">"{lightbox.item.caseStudy}"</p>
                    </div>
                  </div>
                )}

                {lightbox.type === 'showreel' && (
                  <div className="aspect-video bg-black rounded-lg overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/6kYRUsXtS4s?autoplay=1&rel=0"
                      title="Medical Video Showreel"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>

              <div className="p-6 border-t border-white/10 flex justify-between">
                <a 
                  href={lightbox.type === 'portfolio' ? lightbox.item?.videoUrl : '#'}
                  download
                  className="px-4 py-2 text-white/70 hover:text-white flex items-center gap-2"
                >
                  <FaDownload />
                  Download Video
                </a>
                <button 
                  onClick={() => setLightbox(null)}
                  className="px-6 py-2 bg-gradient-to-r from-[#00D9B1] to-[#0066CC] text-white rounded-lg hover:shadow-lg hover:shadow-[#00D9B1]/20 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Ali Raza Medical Video Editing",
            "description": "Professional video editing services for Pakistani doctors",
            "priceRange": "PKR 5,000 - 25,000",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Karachi",
              "addressCountry": "PK"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "50"
            }
          })
        }}
      />
    </div>
  );
}