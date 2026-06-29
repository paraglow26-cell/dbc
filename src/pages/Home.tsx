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
  CheckCircle2,
  Syringe,
  Microscope,
  Activity,
  Bone,
  Play,
  Cpu,
  Map,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import ProductCard from '@/components/ui-custom/ProductCard';
import QuoteButton from '@/components/ui-custom/QuoteButton';

const stats = [
  { value: 15, suffix: '+', label: "Ans d'Excellence", icon: Award },
  { value: 90, suffix: '+', label: 'Collaborateurs', icon: Users },
  { value: 12, suffix: '', label: 'Antennes Nationales', icon: Map },
  { value: 20, suffix: '+', label: 'Partenaires mondiaux', icon: Shield },
];

const specialites = [
  {
    title: 'Arthroplastie',
    description: 'Prothèses totales de hanche, genou et épaule, primaires et de reprise.',
    icon: Bone,
    category: 'arthroplastie',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80&w=800',
    tag: 'Chirurgie Prothétique',
  },
  {
    title: 'Traumatologie',
    description: 'Fixation interne, vis, plaques et clous pour fractures complexes.',
    icon: Activity,
    category: 'traumatologie',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    tag: 'Urgence & Trauma',
  },
  {
    title: 'Arthroscopie',
    description: 'Médecine sportive et réparation ligamentaire mini-invasive.',
    icon: Microscope,
    category: 'arthroscopie',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800',
    tag: 'Médecine Sportive',
  },
  {
    title: 'Neurochirurgie',
    description: 'Implants rachidiens, cages intersomatiques et solutions d\'arthrodèse.',
    icon: Cpu,
    category: 'neurochirurgie',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=800',
    tag: 'Rachis & Cerveau',
  },
  {
    title: 'Chirurgie Thoracique',
    description: 'Stabilisation costale et implants sternaux pour chirurgie thoracique.',
    icon: Shield,
    category: 'thoracique',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    tag: 'Innovation Thoracique',
  },
  {
    title: 'Consommable',
    description: 'Sets opératoires, drapage stérile et accessoires de bloc.',
    icon: Syringe,
    category: 'consommables',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    tag: 'Bloc Opératoire',
  },
];

const actualites = [
  {
    date: 'Mars 2026',
    tag: 'Innovation',
    title: 'Robot CUVIS JOINT au Maroc',
    description: "ABC Synthèse déploie le système robotique de coupe Cuvis Joint en partenariat avec Permedica.",
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=600',
  },
  {
    date: 'Janvier 2026',
    tag: 'Formation',
    title: 'ABC TRAINING : Plateforme Digitale',
    description: 'Accès 24h/7j aux protocoles chirurgicaux et vidéos HD pour nos instrumentistes.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
  },
  {
    date: 'Décembre 2025',
    tag: 'Siège Social',
    title: 'Inauguration à Casablanca',
    description: 'ABC Synthèse renforce son hub logistique national avec son nouveau siège stratégique.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=600',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { products } = useApp();
  const featuredProducts = products.filter((p) => p.featured);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=85&w=2400",
      badge: "",
      title: <>L'Innovation au<br />Service des <span className="text-[#00a49a]">Os</span></>,
      description: "ABC Synthèse accompagne les chirurgiens avec des solutions implantables de pointe et une assistance terrain spécialisée."
    },
    {
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=85&w=2400",
      badge: "Expertise & Fiabilité",
      title: <>Solutions <span className="text-[#00a49a]">Orthopédiques</span><br />Sur Mesure</>,
      description: "Découvrez notre gamme complète d'implants pour l'arthroplastie et la traumatologie, certifiés ISO 13485."
    },
    {
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=85&w=2400",
      badge: "Formation Continue",
      title: <>L'Excellence <span className="text-[#00a49a]">Clinique</span><br />Avant Tout</>,
      description: "Nous formons les équipes médicales sur les dernières technologies pour garantir les meilleurs résultats pour vos patients."
    }
  ];

  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, currentImageIdx]);

  const nextSlide = () => setCurrentImageIdx((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentImageIdx((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen">
      {/* ── PREMIUM HERO SLIDER ── */}
      <section 
        className="relative pt-32 pb-48 overflow-hidden bg-slate-900 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`bg-${currentImageIdx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.img
                src={heroSlides[currentImageIdx].image}
                alt="Background"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 12, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004c47]/90 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center min-h-[450px]">
          <div className="max-w-3xl mt-12 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentImageIdx}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }}
                className="relative z-10"
              >
                {heroSlides[currentImageIdx].badge && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                  >
                    <Badge className="bg-white/10 text-[#a3e2de] border border-[#a3e2de]/30 mb-8 px-6 py-2 backdrop-blur-md uppercase tracking-widest text-sm font-bold inline-block rounded-full shadow-lg">
                      {heroSlides[currentImageIdx].badge}
                    </Badge>
                  </motion.div>
                )}
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-white drop-shadow-2xl"
                >
                  {heroSlides[currentImageIdx].title}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed drop-shadow-md font-medium max-w-2xl"
                >
                  {heroSlides[currentImageIdx].description}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex flex-wrap gap-6"
                >
                  <Button
                    onClick={() => navigate('/produits')}
                    size="lg"
                    className="bg-[#00a49a] hover:bg-[#008f86] text-white border-0 font-bold px-10 h-14 text-lg rounded-full shadow-[0_0_40px_-10px_rgba(0,164,154,0.5)] hover:shadow-[0_0_60px_-10px_rgba(0,164,154,0.7)] transition-all duration-300"
                  >
                    Nos Spécialités
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <button
                    onClick={() => navigate('/a-propos')}
                    className="flex items-center gap-3 bg-white/5 border border-white/20 text-white hover:bg-white/10 backdrop-blur-md transition-all font-bold px-10 h-14 text-lg rounded-full"
                  >
                    <Play className="w-5 h-5 fill-white" />
                    Profil Entreprise
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── ARROWS (Vertically Centered) ── */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 pointer-events-none">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00a49a] hover:border-[#00a49a] transition-all pointer-events-auto"
            >
              <ChevronLeft className="w-8 h-8 -ml-1" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00a49a] hover:border-[#00a49a] transition-all pointer-events-auto"
            >
              <ChevronRight className="w-8 h-8 ml-1" />
            </button>
          </div>
        </div>

        {/* ── PROGRESS DOTS ── */}
        <div className="absolute bottom-40 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="flex items-center gap-4">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIdx(idx)}
                  className="relative h-2 rounded-full overflow-hidden transition-all duration-500 bg-white/20"
                  style={{ width: currentImageIdx === idx ? '64px' : '32px' }}
                >
                  {currentImageIdx === idx && (
                    <motion.div 
                      key={`progress-${currentImageIdx}-${isPaused ? 'paused' : 'playing'}`}
                      initial={{ width: isPaused ? "100%" : "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: isPaused ? 0 : 6, ease: "linear" }}
                      className="absolute inset-y-0 left-0 bg-[#00a49a]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR (Overlapping Hero) ── */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 mb-16"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="w-14 h-14 mx-auto bg-[#f0f9f8] rounded-full flex items-center justify-center mb-5">
                  <stat.icon className="w-7 h-7 text-[#00a49a]" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                </div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── APPRENDRE À NOUS CONNAÎTRE (ABOUT) ── */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#00a49a]/10 rounded-3xl blur-xl group-hover:bg-[#00a49a]/20 transition-all duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
                alt="Équipe ABC Synthèse" 
                className="relative rounded-3xl shadow-xl border border-gray-100 object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-4xl font-black text-[#00a49a] mb-1">
                  <CountUp end={15} suffix="+" enableScrollSpy scrollSpyOnce />
                </div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Années d'Expertise
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <span className="inline-block text-[#00a49a] text-sm font-bold uppercase tracking-widest mb-4">
                Apprendre à nous connaître
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Notre Identité & <br />
                <span className="text-[#046fcc]">Nos Valeurs</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Depuis sa création, <strong>ABC Synthèse</strong> s'est imposée comme un acteur majeur 
                dans la distribution de dispositifs médicaux implantables au Maroc. Notre mission est 
                d'accompagner les professionnels de santé avec des solutions innovantes, fiables et de très haute qualité.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { title: 'Excellence', desc: 'Qualité certifiée ISO 9001/13485' },
                  { title: 'Innovation', desc: 'Technologies médicales de pointe' },
                  { title: 'Engagement', desc: 'Au service des patients' },
                  { title: 'Proximité', desc: 'Assistance terrain 24/7' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#f0f9f8] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#00a49a]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-1 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                onClick={() => navigate('/a-propos')}
                className="bg-[#00a49a] hover:bg-[#008f86] text-white h-14 px-10 rounded-full font-bold text-base shadow-lg transition-all"
              >
                Découvrir ABC Synthèse
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── NOS SPÉCIALITÉS ── */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#00a49a] text-xs font-bold uppercase tracking-widest mb-3">
              Domaines Thérapeutiques
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Une Expertise Multidisciplinaire</h2>
            <div className="w-24 h-1.5 bg-[#00a49a] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialites.map((s, idx) => (
              <div
                key={idx}
                className="group relative h-80 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/produits?category=${s.category}`)}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-[#00a49a]/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-white/20">
                    <s.icon className="w-6 h-6 text-[#03b0a5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── FEATURED PRODUCTS ── */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="inline-block text-[#00a49a] text-xs font-bold uppercase tracking-widest mb-3">
                Innovations
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900">Produits en Lumière</h2>
            </div>
            <Button
              onClick={() => navigate('/produits')}
              variant="link"
              className="text-[#00a49a] font-bold text-lg group"
            >
              Tous les produits
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── ACTUALITÉS ── */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">Actualités & Événements</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {actualites.map((actu, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-gray-100">
                <div className="h-56 overflow-hidden relative">
                  <img src={actu.image} alt={actu.title} className="w-full h-full object-cover group-hover:scale-105 transition-all" />
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#046fcc] text-xs font-bold px-3 py-1 rounded-lg">
                    {actu.date}
                  </span>
                </div>
                <div className="p-8">
                  <Badge className="bg-[#00a49a]/10 text-[#00a49a] border-0 mb-4">{actu.tag}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00a49a] transition-colors">
                    {actu.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {actu.description}
                  </p>
                  <Button variant="ghost" className="p-0 text-[#00a49a] font-bold hover:bg-transparent">
                    Lire la suite <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* ── CERTIFICATIONS ── */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-[#f0f9f8] border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#00a49a] text-xs font-bold uppercase tracking-widest mb-3">
              Gage de Qualité
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Nos Certifications</h2>
            <div className="w-24 h-1.5 bg-[#00a49a] mx-auto rounded-full mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Nous répondons aux normes internationales les plus strictes pour garantir la sécurité et la fiabilité de nos dispositifs médicaux.
            </p>
          </div>

          <div className="flex justify-center">
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center max-w-3xl w-full gap-8"
            >
              <div className="shrink-0 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <img 
                  src="/certifications/bureau-veritas.png" 
                  alt="Certification Bureau Veritas 1828" 
                  className="h-32 md:h-40 w-auto object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <Badge className="bg-[#00a49a]/10 text-[#00a49a] border-0 mb-4 hover:bg-[#00a49a]/20">ISO Certifié</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bureau Veritas Certification</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  ABC Synthèse est certifiée par Bureau Veritas, attestant de notre engagement indéfectible envers la qualité, la traçabilité et la conformité aux normes internationales les plus exigeantes dans le domaine de la distribution de dispositifs médicaux.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-[#00a49a] font-bold text-sm">
                  <Shield className="w-5 h-5" />
                  <span>Qualité & Conformité Garanties</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── NOS PARTENAIRES ── */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#00a49a] text-xs font-bold uppercase tracking-widest mb-3">
              Réseau Mondial
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Nos Partenaires</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              ABC SYNTHESE s'appuie sur des partenaires fabricants internationaux d'excellence.
            </p>
          </div>

          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {[
                "WhatsApp Image 2026-04-21 at 14.21.59 (1).jpeg",
                "WhatsApp Image 2026-04-21 at 14.21.59 (2).jpeg",
                "WhatsApp Image 2026-04-21 at 14.21.59 (3).jpeg",
                "WhatsApp Image 2026-04-21 at 14.21.59 (4).jpeg",
                "WhatsApp Image 2026-04-21 at 14.21.59 (5).jpeg",
                "WhatsApp Image 2026-04-21 at 14.21.59 (6).jpeg",
                "WhatsApp Image 2026-04-21 at 14.22.00.jpeg"
              ].map((img, i) => (
                <li key={i} className="h-24 flex items-center justify-center transition-all duration-300">
                  <img src={`/Partenaires/${img}`} alt="Partenaire" className="h-24 w-auto object-contain px-4" />
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
              {[
                "WhatsApp Image 2026-04-21 at 14.21.59 (1).jpeg",
                "WhatsApp Image 2026-04-21 at 14.21.59 (2).jpeg",
                "WhatsApp Image 2026-04-21 at 14.21.59 (3).jpeg",
                "WhatsApp Image 2026-04-21 at 14.21.59 (4).jpeg",
                "WhatsApp Image 2026-04-21 at 14.21.59 (5).jpeg",
                "WhatsApp Image 2026-04-21 at 14.21.59 (6).jpeg",
                "WhatsApp Image 2026-04-21 at 14.22.00.jpeg"
              ].map((img, i) => (
                <li key={i} className="h-24 flex items-center justify-center transition-all duration-300">
                  <img src={`/Partenaires/${img}`} alt="Partenaire" className="h-24 w-auto object-contain px-4" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ── NOS RÉFÉRENCES ── */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50 border-y border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#00a49a] text-xs font-bold uppercase tracking-widest mb-3">
              Confiance & Crédibilité
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Nos Références</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Ils nous font confiance pour la fourniture de leurs dispositifs médicaux critiques.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {[
              "akdital.png", "chu hassan 2.png", "chu.png", "chu2.png", "clinique ibn zhor.png", "cnss.png",
              "hopital international.png", "hopital mohamed 6.png", "Image11.png", "Image15.png",
              "Image16.png", "Image17.png", "Image18.png", "Image19.png", "Image20.png",
              "Image21.png", "Image22.png", "Image23.png"
            ].map((img, i) => (
              <div key={i} className="h-20 bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={`/references/${img}`} 
                  alt="Référence" 
                  className="max-h-full max-w-full object-contain transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CTA FINAL ── */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 relative overflow-hidden bg-[#f0f9f8]"
      >
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300a49a' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#004c47]">
          <span className="inline-block text-[#00a49a] text-xs font-bold uppercase tracking-widest mb-5">
            Contactez-nous
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Votre Partenaire Médical de Confiance
          </h2>
          <p className="text-xl text-[#004c47]/80 mb-10 leading-relaxed">
            Un besoin urgent ? Une demande technique ? Nos conseillers sont à votre disposition 
            pour vous accompagner dans le choix des meilleures solutions cliniques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton
              size="lg"
              className="bg-[#00a49a] text-white hover:bg-[#008f86] font-bold px-8 h-14 rounded-lg text-base"
            />
            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              size="lg"
              className="border-2 border-[#00a49a] text-[#00a49a] hover:bg-[#00a49a] hover:text-white h-14 px-10 rounded-lg font-bold text-base bg-transparent transition-colors"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
