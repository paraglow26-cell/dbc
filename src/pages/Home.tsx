import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Shield,
  Award,
  Users,
  Activity,
  Bone,
  Cpu,
  Map,
  Globe,
  Microscope,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Star,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import ProductCard from '@/components/ui-custom/ProductCard';
import NationalPresence from '@/components/ui-custom/NationalPresence';

const specialites = [
  {
    title: 'Traumatologie',
    description: 'Systèmes de fixation interne, plaques de verrouillage et clous intramédullaires.',
    icon: Activity,
    category: 'traumatologie',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Arthroplastie',
    description: 'Prothèses totales et partielles (hanche, genou, épaule) de haute tolérance.',
    icon: Bone,
    category: 'arthroplastie',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Neurochirurgie & Rachis',
    description: 'Solutions d\'arthrodèse, cages intersomatiques et systèmes de fixation cervico-lombaire.',
    icon: Cpu,
    category: 'neurochirurgie',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Arthroscopie & Sport',
    description: 'Ancres de suture, implants de reconstruction ligamentaire et médecine sportive.',
    icon: Microscope,
    category: 'arthroscopie',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800'
  },
];



const heroSlides = [
  {
    id: 1,
    type: 'video',
    src: 'https://cdn.pixabay.com/video/2020/08/17/47432-450503042_large.mp4',
    poster: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=85&w=2400',
    badge: 'Leader Chirurgie Orthopédique',
    tabTitle: 'Le Futur de la Chirurgie',
    title: <>Le Futur de la <span className="text-[#00a49a]">Chirurgie Orthopédique</span></>,
    description: "Dispositifs médicaux implantables certifiés ISO 9001 & ISO 13485 et accompagnement technique haute précision au bloc opératoire.",
    primaryBtnText: "Découvrir le Catalogue",
    primaryBtnPath: "/produits",
    secondaryBtnText: "Regarder la Vidéo (HD)",
    secondaryAction: "video",
    highlights: ["Certifié ISO 9001 & 13485", "Assistance Bloc 24/7", "Traçabilité Absolue"]
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=85&w=2400',
    badge: 'Traumatologie & Implants Rachidiens',
    tabTitle: 'Solutions Traumatologie',
    title: <>Fixation & <span className="text-[#00a49a]">Haute Précision</span></>,
    description: "Plaques de verrouillage, clous intramédullaires et vis corticales conçus selon les exigences cliniques les plus strictes.",
    primaryBtnText: "Gamme Traumatologie",
    primaryBtnPath: "/produits?category=traumatologie",
    secondaryBtnText: "Demander un Devis",
    secondaryBtnPath: "/devis",
    highlights: ["Plaques de Verrouillage", "Clous Intramédullaires", "Fixation Rachidienne"]
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=85&w=2400',
    badge: 'Arthroplastie & Arthroscopie',
    tabTitle: 'Reconstruction Articulaire',
    title: <>Reconstruction <span className="text-[#00a49a]">Articulaire</span></>,
    description: "Prothèses de hanche, genou et épaule haute tolérance avec traçabilité informatisée garantie à chaque étape.",
    primaryBtnText: "Gamme Arthroplastie",
    primaryBtnPath: "/produits?category=arthroplastie",
    secondaryBtnText: "À propos d'ABC Synthese",
    secondaryBtnPath: "/a-propos",
    highlights: ["Hanche & Genou", "Ancres de Suture", "Matériel Certifié"]
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=85&w=2400',
    badge: 'ABC Training & Support',
    tabTitle: 'Excellence & Support',
    title: <>Excellence <span className="text-[#00a49a]">Clinique & Support</span></>,
    description: "Des programmes de formation continue pour les équipes chirurgicales et une assistance technique réactive au bloc opératoire.",
    primaryBtnText: "Nos Services & Formations",
    primaryBtnPath: "/services/formation",
    secondaryBtnText: "Nous Contacter",
    secondaryBtnPath: "/contact",
    highlights: ["Formation Continue", "Assistance Technique", "12 Antennes Nationales"]
  }
];

export default function Home() {
  const navigate = useNavigate();
  const { products } = useApp();
  const featuredProducts = products.filter((p) => p.featured);
  
  // Slider state and handlers
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  // Video modal state
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openVideoModal = useCallback(() => {
    setVideoModalOpen(true);
    setTimeout(() => videoRef.current?.play(), 100);
  }, []);

  const closeVideoModal = useCallback(() => {
    videoRef.current?.pause();
    setVideoModalOpen(false);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeVideoModal(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeVideoModal]);

  const currentSlide = Math.abs(page % heroSlides.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, page]);

  // Framer Motion variants for advanced slider transition
  const slideVariants: any = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)",
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 },
        scale: { duration: 10, ease: "linear" }, // Slow zoom effect
        filter: { duration: 0.8 }
      }
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)",
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.8 },
          filter: { duration: 0.8 }
        }
      };
    }
  };

  const textRevealVariants: any = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const fadeUpVariant: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const activeSlideData = heroSlides[currentSlide];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-hidden">
      
      {/* ── PREMIUM ADVANCED HERO SLIDER ── */}
      <section 
        className="relative h-[98vh] min-h-[780px] max-h-[1050px] w-full bg-[#030814] flex items-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) {
                paginate(1);
              } else if (swipe > 10000) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            {activeSlideData.type === 'video' ? (
              <video 
                src={activeSlideData.src}
                poster={activeSlideData.poster}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
              />
            ) : (
              <img
                src={activeSlideData.src}
                alt="Background"
                className="w-full h-full object-cover opacity-95 transition-opacity duration-700"
              />
            )}
            
            {/* Lighter, subtle overlays to keep images bright & vibrant */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030814]/90 via-[#030814]/50 to-transparent z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030814] via-transparent to-black/20 z-0 opacity-70" />
            
            {/* Animated emerald light bloom */}
            <motion.div 
              animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.25, 1] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00a49a] rounded-full blur-[170px] opacity-40 z-0 pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none -mt-8 sm:-mt-12 md:-mt-16">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -30, transition: { duration: 0.3 } }}
                className="pointer-events-auto"
              >
                {/* Badge */}
                <div className="overflow-hidden mb-5">
                  <motion.div variants={textRevealVariants}>
                    <Badge className="bg-[#00a49a]/20 text-[#00c9bd] border border-[#00a49a]/40 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(0,164,154,0.3)] flex items-center w-fit gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00c9bd] animate-pulse" />
                      {activeSlideData.badge}
                    </Badge>
                  </motion.div>
                </div>
                
                {/* Main Title */}
                <div className="overflow-hidden pb-1 mb-5">
                  <motion.h1 
                    variants={textRevealVariants}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-extrabold text-white leading-[1.08] drop-shadow-2xl tracking-tight"
                  >
                    {activeSlideData.title}
                  </motion.h1>
                </div>
                
                {/* Subtitle / Description */}
                <div className="overflow-hidden mb-6">
                  <motion.p 
                    variants={textRevealVariants}
                    className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl leading-relaxed drop-shadow-lg font-light border-l-2 border-[#00a49a] pl-5 py-1"
                  >
                    {activeSlideData.description}
                  </motion.p>
                </div>

                {/* Highlights tags */}
                <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-2 mb-8">
                  {activeSlideData.highlights.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-3.5 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-white/95 text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                    >
                      <span className="text-[#00a49a]">✓</span> {item}
                    </span>
                  ))}
                </motion.div>
                
                {/* Action Buttons */}
                <motion.div 
                  variants={fadeUpVariant}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Button
                    onClick={() => navigate(activeSlideData.primaryBtnPath)}
                    size="lg"
                    className="bg-[#00a49a] text-white hover:bg-white hover:text-[#030914] font-extrabold px-8 sm:px-9 h-13 sm:h-15 rounded-full transition-all duration-300 shadow-[0_10px_35px_rgba(0,164,154,0.45)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.4)] hover:-translate-y-0.5"
                  >
                    {activeSlideData.primaryBtnText}
                    <ArrowRight className="w-5 h-5 ml-2.5" />
                  </Button>

                  {activeSlideData.secondaryAction === "video" ? (
                    <Button
                      onClick={openVideoModal}
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#030914] backdrop-blur-md font-bold px-8 sm:px-9 h-13 sm:h-15 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                    >
                      <PlayCircle className="w-5 h-5 mr-2.5 text-[#00a49a]" />
                      {activeSlideData.secondaryBtnText}
                    </Button>
                  ) : (
                    <Button
                      onClick={() => navigate(activeSlideData.secondaryBtnPath || '/a-propos')}
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#030914] backdrop-blur-md font-bold px-8 sm:px-9 h-13 sm:h-15 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                    >
                      {activeSlideData.secondaryBtnText}
                    </Button>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Vertical Navigation Panel (Desktop / Tablet Right Side) ── */}
        <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3 w-64 lg:w-72">
          {/* Header with Counter & Arrow buttons */}
          <div className="flex items-center justify-between px-1 mb-1">
            <div className="text-white font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="text-[#00a49a] text-sm">0{currentSlide + 1}</span>
              <span className="text-white/40">/ 0{heroSlides.length}</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => paginate(-1)}
                aria-label="Slide précédent"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00a49a] hover:border-[#00a49a] transition-all duration-300 shadow-md"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => paginate(1)}
                aria-label="Slide suivant"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00a49a] hover:border-[#00a49a] transition-all duration-300 shadow-md"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Vertical Slide Cards */}
          {heroSlides.map((slide, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={slide.id}
                onClick={() => setPage([idx, idx > currentSlide ? 1 : -1])}
                className={`text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-400 border backdrop-blur-md relative overflow-hidden group ${
                  isActive 
                    ? 'bg-white/15 border-[#00a49a] shadow-[0_0_25px_rgba(0,164,154,0.35)] translate-x-[-6px]' 
                    : 'bg-black/40 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {/* Active left bar indicator */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-white/10 overflow-hidden">
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? "100%" : "0%" }}
                    transition={{ duration: isActive && !isPaused ? 7 : 0.3, ease: "linear" }}
                    className={`w-full ${isActive ? 'bg-[#00a49a]' : 'bg-transparent'}`}
                  />
                </div>

                <div className="flex items-center justify-between mb-1 pl-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#00a49a]' : 'text-white/40'}`}>
                    0{idx + 1}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#00a49a] animate-ping" />
                  )}
                </div>
                <p className={`text-xs sm:text-sm font-bold truncate pl-2 transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                  {slide.tabTitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* ── Mobile Compact Dots Navigation ── */}
        <div className="flex md:hidden justify-center gap-2 absolute bottom-6 left-0 right-0 z-20 px-4">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage([idx, idx > currentSlide ? 1 : -1])}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-[#00a49a]' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── LUXURY STATS BAR ── */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 mt-16 sm:mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
      >
        <div className="bg-white rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.06)] p-8 lg:p-12 border border-slate-100 backdrop-blur-xl relative overflow-hidden">
          {/* Subtle background glow accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00a49a]/5 to-[#046fcc]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {[
              { value: 15, suffix: '+', label: "Ans d'Expertise", sub: "Pionnier depuis 2016", icon: Award },
              { value: 90, suffix: '+', label: 'Collaborateurs', sub: 'Experts & Techniciens', icon: Users },
              { value: 12, suffix: '', label: 'Antennes Nationales', sub: 'Couverture 24/7 Maroc', icon: Map },
              { value: 20, suffix: '+', label: 'Partenaires Mondiaux', sub: 'Certifiés ISO 9001 & 13485', icon: Globe },
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-slate-50/70 hover:bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-[#00a49a]/40 transition-all duration-500 shadow-sm hover:shadow-[0_15px_40px_rgba(0,164,154,0.15)] flex flex-col items-center text-center cursor-default"
              >
                {/* Top gradient accent line */}
                <div className="absolute top-0 inset-x-6 h-1 rounded-full bg-gradient-to-r from-[#00a49a] to-[#046fcc] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00a49a]/10 to-[#046fcc]/10 group-hover:from-[#00a49a] group-hover:to-[#046fcc] flex items-center justify-center mb-5 transition-all duration-500 shadow-sm group-hover:shadow-[0_8px_20px_rgba(0,164,154,0.3)]">
                  <stat.icon className="w-8 h-8 text-[#00a49a] group-hover:text-white transition-colors duration-500" />
                </div>

                <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-1 tracking-tight group-hover:text-[#00a49a] transition-colors">
                  <CountUp end={stat.value} suffix={stat.suffix} enableScrollSpy scrollSpyOnce duration={2.5} />
                </div>

                <div className="text-xs sm:text-sm font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] font-medium text-slate-400">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── SECTION VIDÉO DÉDIÉE (Présentation Officielle - Split Screen Layout) ── */}
      <section className="relative py-32 bg-[#030914] overflow-hidden">
        {/* Ambient Glow & Mesh Background */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-[#00a49a] rounded-full blur-[170px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#046fcc] rounded-full blur-[170px] pointer-events-none"
        />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text & Features (5 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 text-left"
            >
              <Badge className="bg-[#00a49a]/20 text-[#00c9bd] border border-[#00a49a]/40 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] mb-6 inline-flex items-center gap-2 shadow-[0_0_25px_rgba(0,164,154,0.3)] backdrop-blur-md rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00c9bd] animate-pulse" />
                Présentation Officielle
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                L'Excellence Chirurgicale{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a49a] via-[#00c9bd] to-[#046fcc]">
                  en Mouvement
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
                Plongez au cœur de nos installations à Fès et Casablanca, nos équipes techniques et notre vision pour la chirurgie orthopédique de demain.
              </p>

              {/* Feature Points */}
              <div className="space-y-4 mb-10">
                {[
                  "Visite guidée des installations & stock national",
                  "Technologies d'ostéosynthèse et implants 2026",
                  "Accompagnement technique réactif au bloc 24/7"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-md">
                    <div className="w-8 h-8 rounded-lg bg-[#00a49a]/20 border border-[#00a49a]/40 flex items-center justify-center shrink-0">
                      <span className="text-[#00c9bd] font-bold text-sm">✓</span>
                    </div>
                    <span className="text-white/90 text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={openVideoModal}
                size="lg"
                className="bg-[#00a49a] text-white hover:bg-white hover:text-[#030914] font-extrabold px-8 h-14 rounded-full transition-all duration-300 shadow-[0_10px_35px_rgba(0,164,154,0.45)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.4)]"
              >
                <PlayCircle className="w-5 h-5 mr-3" />
                Visionner la Vidéo (HD)
              </Button>
            </motion.div>

            {/* Right Column: Interactive Video Card Frame (7 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative group cursor-pointer"
              onClick={openVideoModal}
            >
              {/* Animated Glow Border Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00a49a] via-[#046fcc] to-[#00a49a] rounded-[2.5rem] opacity-60 blur-xl group-hover:opacity-100 transition-all duration-700 animate-[spin_8s_linear_infinite]" style={{ backgroundSize: '200%' }} />
              
              {/* Main Card Frame */}
              <div className="relative rounded-[2.2rem] overflow-hidden aspect-video bg-slate-950 shadow-[0_30px_90px_rgba(0,0,0,0.8)] border border-white/15">
                {/* HD Surgical Poster Background */}
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600" 
                  alt="Présentation ABC Synthese" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Content Inside Video Frame */}
                <div className="absolute inset-0 flex flex-col items-center justify-between p-6 sm:p-8 z-10">
                  {/* Top Badges */}
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-white/90 text-xs font-bold tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-[#00a49a] animate-pulse" />
                      4K / HD · STEREO
                    </div>
                    <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-white/80 text-xs font-mono font-bold">
                      ABC SYNTHESE
                    </div>
                  </div>

                  {/* Giant Glowing Center Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.92 }}
                    className="relative group/btn my-auto"
                  >
                    {/* Ripple pulse rings */}
                    <span className="absolute -inset-4 rounded-full bg-[#00a49a]/40 animate-ping" />
                    <span className="absolute -inset-8 rounded-full border border-[#00a49a]/30 animate-pulse" />
                    
                    <div className="relative w-22 h-22 sm:w-26 sm:h-26 bg-gradient-to-br from-[#00a49a] to-[#046fcc] rounded-full flex items-center justify-center shadow-[0_0_70px_rgba(0,164,154,0.75)] group-hover/btn:shadow-[0_0_95px_rgba(0,164,154,0.95)] transition-all duration-300 border-2 border-white/40">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-2 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Bottom Bar Info Inside Thumbnail */}
                  <div className="w-full flex items-center justify-between gap-3 text-left">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00c9bd] transition-colors">
                        Film Institutionnel ABC Synthese
                      </h3>
                      <p className="text-slate-300 text-xs font-light">
                        Cliquez pour lire la vidéo
                      </p>
                    </div>
                    <span className="text-white/60 text-xs font-mono font-semibold bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                      02:45 min
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── VIDEO MODAL LIGHTBOX ── */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8"
            onClick={closeVideoModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00a49a] to-[#046fcc] rounded-2xl opacity-30 blur-xl" />
              
              {/* Video */}
              <div className="relative rounded-2xl overflow-hidden bg-black shadow-[0_30px_100px_rgba(0,0,0,0.8)] aspect-video">
                <video
                  ref={videoRef}
                  src="https://abcsynthese.ma/presentation.mp4"
                  controls
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeVideoModal}
                className="absolute -top-5 -right-5 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-colors shadow-xl z-20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <p className="text-center text-white/40 text-xs mt-4">Appuyez sur <kbd className="bg-white/10 px-2 py-0.5 rounded text-white/60">Échap</kbd> pour fermer</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── ABOUT & VIDEO PRESENTATION ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#00a49a]/5 rounded-full blur-3xl pointer-events-none"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Video Box */}
            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={openVideoModal}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00a49a] to-[#046fcc] rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-slate-900 flex items-center justify-center">
                {/* Simulated Video Thumbnail */}
                <img 
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Présentation ABC Synthese" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative z-10 w-20 h-20 bg-[#00a49a] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,164,154,0.6)] text-white"
                >
                  <PlayCircle className="w-10 h-10 ml-1" />
                </motion.button>
              </div>
              {/* Floating Certification Badge — double cert */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <img src="/Certifications/bureau-veritas.png" alt="Bureau Veritas" className="h-10 w-auto" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Certifié</p>
                  <p className="font-extrabold text-slate-900 text-xs">ISO 13485 · ISO 9001</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Text Content */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUpVariant}>
                <Badge className="bg-slate-100 text-[#00a49a] border-0 mb-4 px-4 py-1">Qui sommes-nous ?</Badge>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                  L'Innovation au cœur de <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a49a] to-[#046fcc]">votre bloc opératoire</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  ABC Synthese est le partenaire de confiance des chirurgiens et établissements de santé. Nous fournissons des dispositifs médicaux implantables de dernière génération avec un accompagnement technique irréprochable.
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: "Matériel Haute Précision", icon: Microscope },
                  { title: "Traçabilité Absolue", icon: Shield },
                  { title: "Formation Continue", icon: Award },
                  { title: "Intervention 24/7", icon: Activity },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-[#00a49a]/30 hover:bg-white transition-colors shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#00a49a]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#00a49a]" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm">{item.title}</span>
                  </div>
                ))}
              </motion.div>
              
              <motion.div variants={fadeUpVariant}>
                <Button 
                  onClick={() => navigate('/a-propos')}
                  className="bg-slate-900 hover:bg-slate-800 text-white h-14 px-10 rounded-full font-bold shadow-lg"
                >
                  Notre Histoire
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NOS SPÉCIALITÉS (Animated Grid) ── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Domaines d'Expertise</h2>
            <div className="w-24 h-1.5 bg-[#00a49a] mx-auto rounded-full mb-6" />
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Des gammes complètes adaptées à chaque spécialité chirurgicale.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {specialites.map((s, idx) => (
              <motion.div
                variants={fadeUpVariant}
                key={idx}
                whileHover={{ y: -10 }}
                onClick={() => navigate(`/produits?category=${s.category}`)}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-[#00a49a] transition-colors duration-500">
                  <s.icon className="w-7 h-7 text-white" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-extrabold text-white mb-3 group-hover:text-[#00a49a] transition-colors">{s.title}</h3>
                  {/* Animated Description */}
                  <div className="overflow-hidden h-0 group-hover:h-20 transition-all duration-500 ease-in-out">
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {s.description}
                    </p>
                    <div className="flex items-center text-[#00a49a] font-bold text-sm">
                      Explorer la gamme <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CERTIFICATS OFFICIELS ── */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-24 bg-white border-y border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="bg-[#00a49a]/10 text-[#00a49a] border-0 mb-4 px-4 py-1 uppercase tracking-widest">
              Certifications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
              Qualité <span className="text-[#00a49a]">Certifiée & Reconnue</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Nos certifications attestent de notre engagement irréprochable envers la qualité et la sécurité des dispositifs médicaux.
            </p>
          </motion.div>

          {/* Two Certification Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 — ISO 13485 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-slate-50 to-white rounded-[2rem] p-8 shadow-lg border border-slate-200 hover:border-[#00a49a]/40 hover:shadow-[0_20px_60px_rgba(0,164,154,0.15)] transition-all duration-500 overflow-hidden flex flex-col items-center text-center"
            >
              {/* Accent glow */}
              <div className="absolute top-0 left-0 w-48 h-48 bg-[#00a49a]/8 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 group-hover:bg-[#00a49a]/15 transition-all duration-500" />
              <div className="absolute top-0 inset-x-8 h-1 rounded-full bg-gradient-to-r from-[#00a49a] to-[#046fcc] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-5 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-4 h-4" />)}
              </div>

              {/* Logo */}
              <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-100 mb-6 relative z-10">
                <img 
                  src="/Certifications/bureau-veritas.png" 
                  alt="Bureau Veritas ISO 13485" 
                  className="h-16 w-auto object-contain"
                />
              </div>

              {/* ISO Badge */}
              <div className="bg-[#00a49a]/10 border border-[#00a49a]/30 text-[#00a49a] font-black text-2xl px-6 py-2 rounded-xl mb-4 relative z-10 tracking-tight">
                ISO 13485 : 2016
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2 relative z-10">
                Systèmes de Management de la Qualité
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                Certifié par <strong className="text-slate-700">Bureau Veritas</strong> — dispositifs médicaux implantables distribués avec rigueur et traçabilité absolue.
              </p>
            </motion.div>

            {/* Card 2 — ISO 9001 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-slate-50 to-white rounded-[2rem] p-8 shadow-lg border border-slate-200 hover:border-[#046fcc]/40 hover:shadow-[0_20px_60px_rgba(4,111,204,0.15)] transition-all duration-500 overflow-hidden flex flex-col items-center text-center"
            >
              {/* Accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#046fcc]/8 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 group-hover:bg-[#046fcc]/15 transition-all duration-500" />
              <div className="absolute top-0 inset-x-8 h-1 rounded-full bg-gradient-to-r from-[#046fcc] to-[#00a49a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-5 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-4 h-4" />)}
              </div>

              {/* Logo */}
              <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-100 mb-6 relative z-10">
                <img 
                  src="/Certifications/bureau-veritas.png" 
                  alt="Bureau Veritas ISO 9001" 
                  className="h-16 w-auto object-contain"
                />
              </div>

              {/* ISO Badge */}
              <div className="bg-[#046fcc]/10 border border-[#046fcc]/30 text-[#046fcc] font-black text-2xl px-6 py-2 rounded-xl mb-4 relative z-10 tracking-tight">
                ISO 9001 : 2015
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2 relative z-10">
                Systèmes de Management de la Qualité
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                Certifié par <strong className="text-slate-700">Bureau Veritas</strong> — engagement qualité reconnu internationalement pour l'ensemble de nos processus opérationnels.
              </p>
            </motion.div>

          </div>

          {/* CTA Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Button className="bg-[#00a49a] hover:bg-[#03b0a5] text-white rounded-full font-bold px-10 h-12">
              Voir notre politique Qualité
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* ── ILS NOUS FONT CONFIANCE & PARTENAIRES (Original Colors, Animated) ── */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <Badge className="bg-[#00a49a]/10 text-[#00a49a] border-0 mb-4 px-4 py-1 uppercase tracking-widest">
            Réseau & Partenariats
          </Badge>
          <h2 className="text-3xl font-extrabold text-slate-900">Ils nous font confiance</h2>
        </div>
        
        {/* Ligne 1: Références (Hôpitaux/Cliniques) avec couleurs originales */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-10">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {[
              "akdital.png", "chu hassan 2.png", "chu.png", "chu2.png", "clinique ibn zhor.png", "cnss.png",
              "hopital international.png", "hopital mohamed 6.png"
            ].map((img, i) => (
              <li key={i} className="h-20 bg-white px-6 py-2 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300">
                <img src={`/references/${img}`} alt="Référence" className="h-16 w-auto object-contain" />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {[
              "akdital.png", "chu hassan 2.png", "chu.png", "chu2.png", "clinique ibn zhor.png", "cnss.png",
              "hopital international.png", "hopital mohamed 6.png"
            ].map((img, i) => (
              <li key={i} className="h-20 bg-white px-6 py-2 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300">
                <img src={`/references/${img}`} alt="Référence" className="h-16 w-auto object-contain" />
              </li>
            ))}
          </ul>
        </div>

        {/* Ligne 2: Partenaires Fabricants (Couleurs Originales) - Sens inversé si possible (via CSS inverse ou juste même sens) */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" style={{ animationDirection: 'reverse' }}>
            {[
              "WhatsApp Image 2026-04-21 at 14.21.59 (1).jpeg",
              "WhatsApp Image 2026-04-21 at 14.21.59 (2).jpeg",
              "WhatsApp Image 2026-04-21 at 14.21.59 (3).jpeg",
              "WhatsApp Image 2026-04-21 at 14.21.59 (4).jpeg",
              "WhatsApp Image 2026-04-21 at 14.21.59 (5).jpeg",
              "WhatsApp Image 2026-04-21 at 14.21.59 (6).jpeg"
            ].map((img, i) => (
              <li key={i} className="h-20 bg-white px-6 py-2 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300">
                <img src={`/Partenaires/${img}`} alt="Partenaire" className="h-16 w-auto object-contain" />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true" style={{ animationDirection: 'reverse' }}>
            {[
              "WhatsApp Image 2026-04-21 at 14.21.59 (1).jpeg",
              "WhatsApp Image 2026-04-21 at 14.21.59 (2).jpeg",
              "WhatsApp Image 2026-04-21 at 14.21.59 (3).jpeg",
              "WhatsApp Image 2026-04-21 at 14.21.59 (4).jpeg",
              "WhatsApp Image 2026-04-21 at 14.21.59 (5).jpeg",
              "WhatsApp Image 2026-04-21 at 14.21.59 (6).jpeg"
            ].map((img, i) => (
              <li key={i} className="h-20 bg-white px-6 py-2 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300">
                <img src={`/Partenaires/${img}`} alt="Partenaire" className="h-16 w-auto object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS (Animated Cards) ── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Produits en Vedette</h2>
              <p className="text-slate-500">Nos solutions les plus performantes.</p>
            </motion.div>
            <Button
              onClick={() => navigate('/produits')}
              variant="outline"
              className="border-[#00a49a] text-[#00a49a] hover:bg-[#00a49a] hover:text-white rounded-full font-bold group"
            >
              Voir tout le catalogue
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProducts.slice(0, 3).map((product) => (
              <motion.div variants={fadeUpVariant} key={product.id}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <NationalPresence />

    </div>
  );
}
