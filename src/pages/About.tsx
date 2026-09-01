import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Award,
  CheckCircle2,
  Stethoscope,
  MapPin,
  Building2,
  Bone,
  Activity,
  Microscope,
  Cpu,
} from 'lucide-react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import '@/styles/president-font.css';
import { useRef } from 'react';
import presidentImg from '@/assets/president.jpg';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const values = [
  {
    icon: Shield,
    title: 'Qualité',
    description: 'Certification CE et conformité ISO 13485 pour tous nos produits. Contrôle qualité rigoureux à chaque étape du processus.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Cpu,
    title: 'Innovation',
    description: 'Pionnier dans l\'introduction de la robotique chirurgicale Cuvis Joint et des technologies d\'IA au Maroc.',
    color: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: Heart,
    title: 'Patient First',
    description: 'La sécurité et le bien-être du patient sont au cœur de chaque décision que nous prenons.',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    icon: Users,
    title: 'Partenariat',
    description: 'Collaboration étroite avec les chirurgiens pour comprendre et répondre précisément à leurs besoins terrain.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
];

const certifications = [
  'Certification ISO 13485 : Système de management de la qualité MD',
  'Conformité rigoureuse aux standards CE (MDR 2017/745)',
  'Autorisation du Ministère de la Santé (DMP)',
  'Traçabilité totale informatisée des implants',
  'Maintenance préventive certifiée constructeur',
];

const timeline = [
  {
    year: '2016',
    title: 'Fondation d\'ABC Synthese',
    description: 'Création de l\'entreprise avec une vision claire : moderniser l\'ostéosynthèse au Maroc.',
  },
  {
    year: '2018',
    title: 'Déploiement Opérationnel',
    description: 'Démarrage effectif à Fès. Déploiement des gammes traumatologie et pédiatrie.',
  },
  {
    year: '2021',
    title: 'Spécialisation Chirurgicale',
    description: 'Intégration des spécialités Arthroscopie et Arthroplastie avec des partenaires mondiaux.',
  },

  {
    year: '2025',
    title: 'Hub Stratégique Casablanca',
    description: 'Inauguration du nouveau siège national et déploiement de la plateforme ABC TRAINING.',
  },
  {
    year: '2026',
    title: 'Leader de l\'Ère Digitale',
    description: 'ABC Synthese devient l\'acteur clé de la chirurgie assistée par ordinateur au Royaume.',
  },
];

const domaines = [
  { icon: Bone, name: 'Arthroplastie', desc: 'Prothèses totales hanche, genou, épaule (Permedica)' },
  { icon: Activity, name: 'Traumatologie', desc: 'Plaques, vis, clous intramédullaires haut de gamme' },
  { icon: Microscope, name: 'Arthroscopie', desc: 'Médecine sportive et réparation ligamentaire' },
  { icon: Cpu, name: 'Neurochirurgie', desc: 'Implants rachidiens et cages intersomatiques' },
  { icon: Shield, name: 'Chirurgie Thoracique', desc: 'Stabilisation costale et implants sternaux' },
  { icon: Stethoscope, name: 'Consommable', desc: 'Sets opératoires et drapage stérile certifié' },
];

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      
      {/* ── PAGE HERO (Parallax) ── */}
      <section ref={heroRef} className="relative py-32 overflow-hidden bg-slate-900 rounded-b-[3rem] mx-2 lg:mx-8 shadow-2xl">
        <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#004c47] to-[#00a49a] opacity-90 mix-blend-multiply" />
          <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=2400" className="w-full h-full object-cover" alt="Background" />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div className="text-white">
              <motion.span variants={fadeInUp} className="inline-block bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6">
                L'Entreprise
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-md">
                À propos de<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">ABC Synthese</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-white/90 leading-relaxed max-w-xl font-medium drop-shadow">
                Depuis 2016, ABC Synthese accompagne les chirurgiens marocains avec des solutions 
                médicales d'excellence. Notre slogan "Supporting Bones" incarne notre mission de 
                restaurer la mobilité à travers l'innovation technologique.
              </motion.p>
            </div>
            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4 hidden lg:grid">
              {[
                { label: '90+', sub: 'Collaborateurs' },
                { label: '12', sub: 'Antennes Nationales' },
                { label: '4', sub: 'Entrepôts' },
                { label: 'ISO 13485', sub: 'Certifié' },
              ].map((s, i) => (
                <motion.div key={i} variants={scaleIn} whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-white text-center shadow-xl">
                  <div className="text-4xl font-extrabold mb-2">{s.label}</div>
                  <div className="text-teal-100 text-xs uppercase tracking-widest font-semibold">{s.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MOT DU PRÉSIDENT ── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
             <motion.div variants={scaleIn} className="relative group">
              <div className="absolute -inset-4 bg-teal-500/20 rounded-[3rem] blur-2xl group-hover:bg-teal-500/30 transition-all duration-700" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={presidentImg}
                  alt="Dr. Badreddine SABAI REGRAGUI"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl border border-slate-800 hidden md:block"
              >
                <div className="text-2xl font-extrabold text-[#00a49a] mb-1">Dr. B. SABAI REGRAGUI</div>
                <div className="text-sm text-white/60 uppercase tracking-widest font-semibold">Président Fondateur</div>
              </motion.div>
            </motion.div>
            
            <div className="lg:pl-8">
              <motion.span variants={fadeInUp} className="inline-block text-[#00a49a] text-sm font-bold uppercase tracking-widest mb-4">
                Vision de la Direction
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                "Plus qu'un distributeur, un <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004c47] to-[#00a49a]">partenaire clinique.</span>"
              </motion.h2>
              <motion.div variants={staggerContainer} className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <motion.p variants={fadeInUp}>
                  ABC Synthese est une société spécialisée dans l'importation, la vente et la distribution de dispositifs médicaux, notamment : Implants orthopédiques, Instruments chirurgicaux, Matériel de traumatologie et de neurochirurgie, et consommables médicaux destinés aux secteurs public et privé.
                </motion.p>
                <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 font-medium text-gray-900 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#00a49a]/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                   <p className="relative z-10" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontStyle: 'italic', letterSpacing: '0.01em', lineHeight: 1.8 }}>Depuis sa création, ABC Synthese œuvre pour offrir des produits de haute qualité et des services adaptés aux besoins du marché marocain. Elle représente des fabricants de renommée internationale et demeure en veille constante afin d'introduire de nouvelles technologies et solutions médicales innovantes.</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-white to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block text-[#00a49a] text-xs font-bold uppercase tracking-widest mb-3">
              Nos Fondements
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl font-extrabold text-gray-900">Mission & Vision</motion.h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8"
          >
            <motion.div variants={scaleIn} whileHover={{ y: -8 }} className="bg-white rounded-[2rem] p-12 shadow-xl border border-gray-100 transition-all duration-300">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-[#00a49a]" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Notre Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Rendre accessible aux praticiens marocains les technologies médicales les plus innovantes (Robotique, Navigation) pour améliorer la précision chirurgicale et les résultats cliniques des patients.
              </p>
            </motion.div>
            
            <motion.div variants={scaleIn} whileHover={{ y: -8 }} className="bg-gradient-to-br from-slate-900 to-[#004c47] rounded-[2rem] p-12 shadow-xl text-white transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                  <Eye className="w-8 h-8 text-teal-300" />
                </div>
                <h3 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">Notre Vision</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Devenir le catalyseur de la transformation chirurgicale au Maroc et en Afrique, 
                  reconnu pour notre excellence technique et notre plateforme de formation ABC TRAINING.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── DOMAINES D'ACTIVITÉ ── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.span variants={fadeInUp} className="inline-block text-[#00a49a] text-xs font-bold uppercase tracking-widest mb-3">
              Portfolio
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-900">Nos Domaines d'Activité</motion.h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {domaines.map((d, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00a49a]/0 to-[#00a49a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#00a49a]/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#00a49a] group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-all duration-300">
                    <d.icon className="w-7 h-7 text-[#00a49a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-[#00a49a] transition-colors">{d.name}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="py-24 bg-[#f0f9f8] rounded-[3rem] mx-2 lg:mx-8 shadow-inner relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block bg-[#00a49a]/10 px-4 py-1.5 rounded-full text-[#00a49a] text-xs font-bold uppercase tracking-widest mb-4">
              Nos Valeurs
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">Ce qui nous guide chaque jour</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto text-lg">L'excellence, l'innovation et la proximité terrain sont les piliers de notre culture d'entreprise.</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, idx) => (
              <motion.div 
                key={idx} 
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-8`}>
                  <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.span variants={fadeInUp} className="inline-block text-[#00a49a] text-xs font-bold uppercase tracking-widest mb-3">
                Qualité & Compliance
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                Qualité et conformité garanties
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-10 text-lg leading-relaxed">
                Tous nos produits sont soumis à des contrôles qualité rigoureux. Notre engagement 
                envers la sécurité patient est attesté par la certification ISO 13485.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-5">
                {certifications.map((cert, idx) => (
                  <motion.li key={idx} variants={fadeInUp} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300">
                    <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#00a49a]" />
                    </div>
                    <span className="text-gray-700 font-medium pt-1">{cert}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            <motion.div variants={scaleIn} className="bg-gradient-to-br from-[#004c47] via-[#00a49a] to-[#03b0a5] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <Award className="w-20 h-20 mb-8 text-teal-100 drop-shadow-lg" />
              <h3 className="text-3xl font-extrabold mb-6">Excellence certifiée</h3>
              <p className="text-white/90 mb-10 text-lg leading-relaxed">
                Notre système de management est audité selon les standards internationaux, 
                garantissant une sécurité maximale pour les établissements de santé.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: '100%', sub: 'Traçabilité' },
                  { val: 'ISO 13485', sub: 'Certifié' },
                  { val: '12', sub: 'Antennes' },
                  { val: '4', sub: "Entrepôts" },
                ].map((s, i) => (
                  <div key={i} className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <div className="text-3xl font-extrabold mb-1">{s.val}</div>
                    <div className="text-xs text-teal-100 uppercase tracking-widest font-semibold">{s.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.span variants={fadeInUp} className="inline-block text-[#00a49a] text-xs font-bold uppercase tracking-widest mb-3">
              Notre Histoire
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-900">Une ascension par l'innovation</motion.h2>
          </motion.div>
          
          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* Central line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-50 via-teal-200 to-transparent hidden md:block rounded-full" />
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-16"
            >
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`relative flex items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 hidden md:block" />
                  <div className="w-8 h-8 bg-white rounded-full border-4 border-[#00a49a] shadow-lg shadow-teal-500/30 z-10 hidden md:flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-[#00a49a] rounded-full" />
                  </div>
                  <div className="flex-1 w-full">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 relative group"
                    >
                      <div className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent hidden md:block ${
                        idx % 2 === 0 ? '-left-4 border-r-8 border-r-gray-100' : '-right-4 border-l-8 border-l-gray-100'
                      }`} />
                      <span className="inline-block bg-teal-50 text-[#00a49a] text-sm font-extrabold px-4 py-1.5 rounded-full mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-500 text-lg leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ADRESSE ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.span variants={fadeInUp} className="inline-block text-[#00a49a] text-xs font-bold uppercase tracking-widest mb-3">
                Réseau National
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">Maillage Territorial</motion.h2>
              <motion.div variants={staggerContainer} className="space-y-8">
                <motion.div variants={fadeInUp} className="flex gap-6 items-start group">
                  <div className="w-16 h-16 bg-white shadow-lg border border-gray-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#00a49a] transition-colors duration-300">
                    <Building2 className="w-8 h-8 text-[#00a49a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-gray-900 mb-2">Siège Social Stratégique</div>
                    <div className="text-gray-500 text-lg leading-relaxed">Lot N° 35, Zone Industrielle, Route d'El Jadida, Casablanca, Maroc</div>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex gap-6 items-start group">
                  <div className="w-16 h-16 bg-white shadow-lg border border-gray-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#00a49a] transition-colors duration-300">
                    <MapPin className="w-8 h-8 text-[#00a49a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-gray-900 mb-2">12 Antennes de Proximité</div>
                    <div className="text-gray-500 text-lg leading-relaxed">Expertise locale et logistique d'urgence assurées 24/7 sur tout le Royaume pour un support immédiat.</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <motion.div variants={scaleIn} className="rounded-[3rem] overflow-hidden shadow-2xl h-96 relative group">
              <div className="absolute inset-0 bg-[#00a49a]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                alt="ABC Synthese – Casablanca Hub"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
