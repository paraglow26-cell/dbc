import { useState, useEffect } from 'react';
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
  FileText,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Star,
  Building2
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import ProductCard from '@/components/ui-custom/ProductCard';
import NationalPresence from '@/components/ui-custom/NationalPresence';

const stats = [
  { value: 15, suffix: '+', label: "Ans d'Expertise", icon: Award },
  { value: 90, suffix: '+', label: 'Collaborateurs', icon: Users },
  { value: 12, suffix: '', label: 'Antennes Nationales', icon: Map },
  { value: 20, suffix: '+', label: 'Partenaires Mondiaux', icon: Globe },
];

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
    type: 'video',
    src: 'https://cdn.pixabay.com/video/2020/08/17/47432-450503042_large.mp4', // Fallback video of medical/science
    poster: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=85&w=2400',
    badge: 'Innovation 2026',
    title: <>Le Futur de la <span className="text-[#00a49a]">Chirurgie</span></>,
    description: "Des technologies de pointe et des implants innovants pour accompagner les chirurgiens vers l'excellence opératoire."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=85&w=2400',
    badge: 'Qualité & Précision',
    title: <>Solutions <span className="text-[#00a49a]">Orthopédiques</span></>,
    description: "Une gamme complète d'implants traumatologiques et orthopédiques, certifiés ISO 13485."
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=85&w=2400',
    badge: 'Formation Continue',
    title: <>L'Excellence <span className="text-[#00a49a]">Clinique</span></>,
    description: "Des programmes de formation continue et un accompagnement technique au bloc opératoire."
  }
];

export default function Home() {
  const navigate = useNavigate();
  const { products } = useApp();
  const featuredProducts = products.filter((p) => p.featured);
  
  // Slider state and handlers
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

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

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-hidden">
      
      {/* ── PREMIUM ADVANCED HERO SLIDER ── */}
      <section 
        className="relative h-[95vh] min-h-[700px] w-full bg-[#050b14] flex items-center overflow-hidden"
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
            {heroSlides[currentSlide].type === 'video' ? (
              <video 
                src={heroSlides[currentSlide].src}
                poster={heroSlides[currentSlide].poster}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={heroSlides[currentSlide].src}
                alt="Background"
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Dark & Colored Overlays for cinematic feel */}
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#00a49a]/20 to-transparent z-0 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent z-0 opacity-80" />
            
            {/* Subtle animated light bloom */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00a49a] rounded-full blur-[150px] opacity-40 z-0 pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none -mt-20 md:-mt-32">
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
                {/* Badge Reveal */}
                <div className="overflow-hidden mb-6">
                  <motion.div variants={textRevealVariants}>
                    <Badge className="bg-[#00a49a]/10 text-[#03b0a5] border border-[#00a49a]/30 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(0,164,154,0.15)] flex items-center w-fit gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#03b0a5] animate-pulse" />
                      {heroSlides[currentSlide].badge}
                    </Badge>
                  </motion.div>
                </div>
                
                {/* Title Reveal (Line by line effect using overflow-hidden) */}
                <div className="overflow-hidden pb-2 mb-6">
                  <motion.h1 
                    variants={textRevealVariants}
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] drop-shadow-2xl"
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>
                </div>
                
                {/* Description Reveal */}
                <div className="overflow-hidden mb-12">
                  <motion.p 
                    variants={textRevealVariants}
                    className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed drop-shadow-lg font-light border-l-2 border-[#00a49a] pl-6 py-2"
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>
                </div>
                
                {/* Buttons Reveal */}
                <motion.div 
                  variants={fadeUpVariant}
                  className="flex flex-wrap gap-5"
                >
                  <Button
                    onClick={() => navigate('/produits')}
                    size="lg"
                    className="bg-white text-[#050b14] hover:bg-[#00a49a] hover:text-white font-extrabold px-10 h-16 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(0,164,154,0.4)] hover:-translate-y-1"
                  >
                    Découvrir le Catalogue
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>
                  <Button
                    onClick={() => navigate('/a-propos')}
                    variant="outline"
                    size="lg"
                    className="bg-black/20 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-md font-bold px-10 h-16 rounded-full transition-all duration-300 hover:-translate-y-1"
                  >
                    <PlayCircle className="w-5 h-5 mr-3" />
                    Profil Entreprise
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Premium Navigation UI ── */}
        
        {/* Right side arrows */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 hidden md:flex">
          <button 
            onClick={() => paginate(-1)}
            className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 shadow-lg group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 shadow-lg group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Progress Navigation */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent pt-32 pb-24 md:pb-28 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-end justify-between pointer-events-auto gap-6 md:gap-0">
            {/* Number indicator */}
            <div className="text-white flex items-baseline gap-2 font-mono">
              <span className="text-4xl font-black text-[#00a49a]">{(currentSlide + 1).toString().padStart(2, '0')}</span>
              <span className="text-xl text-white/50 font-medium">/ {heroSlides.length.toString().padStart(2, '0')}</span>
            </div>

            {/* Custom Progress bars */}
            <div className="flex gap-3 w-1/3 max-w-sm">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage([idx, idx > currentSlide ? 1 : -1])}
                  className="relative h-1.5 flex-1 rounded-full overflow-hidden bg-white/20 group"
                >
                  <motion.div
                    initial={false}
                    animate={{ width: currentSlide === idx ? "100%" : "0%" }}
                    transition={{ duration: currentSlide === idx && !isPaused ? 7 : 0.3, ease: "linear" }}
                    className={`absolute inset-y-0 left-0 ${currentSlide === idx ? 'bg-[#00a49a]' : 'bg-transparent group-hover:bg-white/50 transition-colors'}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR (Animated Floating) ── */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 -mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
      >
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.1)] p-8 lg:p-10 border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.05 }}
                className="text-center px-4 cursor-default"
              >
                <div className="w-14 h-14 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center mb-4 border border-slate-100 shadow-sm transition-colors hover:bg-[#00a49a]/10">
                  <stat.icon className="w-7 h-7 text-[#00a49a]" />
                </div>
                <div className="text-4xl font-black text-slate-900 mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} enableScrollSpy scrollSpyOnce duration={2.5} />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

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
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00a49a] to-[#046fcc] rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-slate-900 flex items-center justify-center">
                {/* Simulated Video Thumbnail */}
                <img 
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Présentation ABC Synthèse" 
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
              {/* Floating Certification Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <img src="/Certifications/bureau-veritas.png" alt="Bureau Veritas" className="h-12 w-auto" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Certifié</p>
                  <p className="font-extrabold text-slate-900 text-sm">ISO 13485:2016</p>
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
                  ABC Synthèse est le partenaire de confiance des chirurgiens et établissements de santé. Nous fournissons des dispositifs médicaux implantables de dernière génération avec un accompagnement technique irréprochable.
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

      {/* ── CERTIFICAT OFFICIEL EXPLICITE ── */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-24 bg-white border-y border-slate-100"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-[3rem] p-10 lg:p-16 shadow-xl border border-slate-200 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            {/* Decors */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a49a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="w-full md:w-1/3 flex justify-center relative z-10"
            >
              <div className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100">
                <img 
                  src="/Certifications/bureau-veritas.png" 
                  alt="Certificat Bureau Veritas" 
                  className="w-full max-w-[200px] h-auto object-contain"
                />
              </div>
            </motion.div>
            
            <div className="w-full md:w-2/3 relative z-10 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-amber-500 mb-4">
                <Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                Qualité Certifiée <span className="text-[#00a49a]">ISO 13485</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                ABC Synthèse est fière d'être certifiée par <strong>Bureau Veritas</strong>. Ce certificat atteste de notre système de management de la qualité rigoureux, spécifiquement conçu pour la distribution de dispositifs médicaux implantables en toute sécurité.
              </p>
              <Button className="bg-[#00a49a] hover:bg-[#03b0a5] text-white rounded-full font-bold px-8 h-12">
                Voir la politique Qualité
              </Button>
            </div>
          </div>
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

      {/* ── BOTTOM CTA (Redesigned) ── */}
      <section className="relative py-24 bg-[#1B5E50] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/10 blur-[100px]" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-[#00a49a]/30 blur-[100px]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" className="text-white" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-4 mb-6 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl"
          >
            <Building2 className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white"
          >
            Prêt à passer à l'<span className="text-[#00a49a]">étape supérieure</span> ?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Demandez un devis, téléchargez nos documentations ou contactez nos experts pour une démonstration sur mesure au sein de votre établissement.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="w-full sm:w-auto bg-[#00a49a] text-white hover:bg-white hover:text-[#1B5E50] transition-colors duration-300 font-bold px-10 h-14 rounded-full shadow-lg"
            >
              Nous Contacter
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-[#1B5E50] transition-colors duration-300 h-14 px-10 rounded-full font-bold bg-transparent backdrop-blur-sm"
            >
              <FileText className="w-5 h-5 mr-2" />
              Espace Documentaire
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
