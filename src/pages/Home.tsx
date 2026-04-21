import { useNavigate } from 'react-router-dom';
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
  Monitor,
  Activity,
  Bone,
  ChevronRight,
  Play,
  Star,
  Phone,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import ProductCard from '@/components/ui-custom/ProductCard';
import QuoteButton from '@/components/ui-custom/QuoteButton';

const stats = [
  { value: '15+', label: "Ans d'Expertise", icon: Award },
  { value: '800+', label: 'Dispositifs Médicaux', icon: Shield },
  { value: '100%', label: 'Conformité ISO', icon: CheckCircle2 },
  { value: '50+', label: 'Partenaires Médicaux', icon: Users },
];

const specialites = [
  {
    title: 'Orthopédie',
    description: 'Prothèses de hanche, de genou, d\'épaule et solutions innovantes pour la chirurgie orthopédique.',
    icon: Bone,
    category: 'orthopedie',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80&w=800',
    tag: 'Spécialité phare',
  },
  {
    title: 'Traumatologie',
    description: 'Implants et instruments pour le traitement des fractures et lésions traumatiques.',
    icon: Activity,
    category: 'traumatologie',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    tag: 'Gamme complète',
  },
  {
    title: 'Équipements Médicaux',
    description: 'Distribution d\'équipements de marques internationales leaders pour blocs opératoires.',
    icon: Monitor,
    category: 'equipements',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    tag: 'Haute technologie',
  },
  {
    title: 'Consommables',
    description: 'Offre complète de consommables stériles, provenant de marques mondialement reconnues.',
    icon: Syringe,
    category: 'consommables',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    tag: 'Stock permanent',
  },
];

const expertise = [
  {
    icon: Microscope,
    title: 'Biopsie & Diagnostic',
    description: 'Solutions avancées de biopsie et d\'imagerie diagnostique pour une précision optimale.',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Shield,
    title: 'SAV & Maintenance',
    description: 'Service après-vente réactif et maintenance préventive pour pérenniser vos équipements.',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Award,
    title: 'Formation & Expertise',
    description: 'Programmes de formation clinique et support technique terrain par nos experts.',
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
];

const partenaires = [
  'STRYKER', 'ZIMMER', 'MEDTRONIC', 'JOHNSON & JOHNSON', 'SIEMENS', 'GE HEALTHCARE',
];

const actualites = [
  {
    date: 'Mars 2026',
    tag: 'Événement',
    title: 'ABC Synthèse au HTIC 2026',
    description: "Participation active au 5ème Congrès Healthcare Training & Innovation Conference à l'UIR de Rabat.",
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600',
  },
  {
    date: 'Janvier 2026',
    tag: 'Partenariat',
    title: 'Nouveau partenariat stratégique',
    description: 'ABC Synthèse annonce un nouveau partenariat avec un leader mondial de la robotique chirurgicale.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=600',
  },
  {
    date: 'Décembre 2025',
    tag: 'Certification',
    title: 'Renouvellement ISO 13485',
    description: 'Renouvellement de notre certification ISO 13485, attestant de l\'excellence de notre système qualité.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { products } = useApp();
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=85&w=2400"
            alt="ABC Synthèse – chirurgie orthopédique Maroc"
            className="w-full h-full object-cover"
          />
          {/* Gradient couvre 55% gauche pour lisibilité texte, image visible à droite */}
          <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(10,46,42,0.97) 0%, rgba(13,92,80,0.88) 45%, rgba(13,92,80,0.35) 65%, rgba(0,0,0,0.05) 100%)'}} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left – Text */}
            <div className="text-white mt-8 lg:mt-0">
              <Badge className="bg-white/15 text-white border border-white/30 mb-6 px-4 py-1.5 backdrop-blur-md uppercase tracking-widest text-xs font-semibold inline-block">
                Expert en dispositifs médicaux depuis 2008
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
                L'Innovation au
                <br />
                Service de la{' '}
                <span className="text-[#5dddc7]">Santé</span>
              </h1>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
                ABC Synthèse distribue et produit des dispositifs médicaux de haute qualité au
                Maroc. Orthopédie, traumatologie, équipements et consommables — nous accompagnons
                les professionnels de santé avec expertise et réactivité.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate('/produits')}
                  size="lg"
                  className="bg-[#1a8a7a] hover:bg-[#147a6a] text-white border-0 font-semibold px-8 h-14 text-base rounded-xl"
                >
                  Explorer nos Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <button
                  onClick={() => navigate('/a-propos')}
                  className="flex items-center gap-3 border-2 border-white/40 text-white hover:bg-white/10 transition-all font-semibold px-8 h-14 text-base rounded-xl"
                >
                  <Play className="w-5 h-5" />
                  Notre entreprise
                </button>
              </div>
            </div>

            {/* Right – Floated stat cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white text-center hover:bg-white/15 transition-all"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#5dddc7]" />
                  <div className="text-4xl font-extrabold mb-1">{stat.value}</div>
                  <div className="text-white/70 text-xs uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="py-6 bg-[#1a8a7a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-white text-sm font-medium">
            {['Certification CE & ISO 13485', 'Distribution nationale Maroc', 'SAV & Formation terrain', 'Stock disponible immédiatement'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#a8f0e8]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOS SPÉCIALITÉS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header – Promamec style */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-3">
                Ce que nous offrons
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Nos Spécialités
              </h2>
            </div>
            <Button
              onClick={() => navigate('/produits')}
              variant="outline"
              className="border-[#1a8a7a] text-[#1a8a7a] hover:bg-[#1a8a7a] hover:text-white font-semibold self-start md:self-auto"
            >
              Voir tout le catalogue
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialites.map((s, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-white"
                onClick={() => navigate(`/produits?category=${s.category}`)}
              >
                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e2a]/60 via-transparent to-transparent" />
                </div>
                {/* Tag */}
                <span className="absolute top-4 left-4 bg-[#1a8a7a] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {s.tag}
                </span>
                {/* Body */}
                <div className="p-6">
                  <div className="w-11 h-11 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1a8a7a] transition-colors">
                    <s.icon className="w-5 h-5 text-[#1a8a7a] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                  <span className="text-[#1a8a7a] text-sm font-semibold flex items-center group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE SECTION (split layout comme Promamec) ── */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-12 -left-12 w-80 h-80 bg-[#1a8a7a]/8 rounded-full blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=900"
                  alt="Expertise ABC Synthèse"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl max-w-[220px] border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#1a8a7a]/10 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#1a8a7a]" />
                  </div>
                  <span className="font-bold text-gray-900 text-sm">Qualité certifiée</span>
                </div>
                <p className="text-xs text-gray-500">ISO 13485 & CE – Norme internationale dispositifs médicaux</p>
              </div>
            </div>

            {/* Text side */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-3">
                Notre Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Savoir-faire &<br /> Innovation depuis 2008
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                ABC Synthèse puise sa force dans l'expertise de son capital humain, son engagement
                qualité et un service après-vente de proximité pour satisfaire les professionnels de
                santé au Maroc et en Afrique.
              </p>

              <div className="space-y-4">
                {expertise.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"
                  >
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-10">
                <Button
                  onClick={() => navigate('/a-propos')}
                  className="bg-[#1a8a7a] hover:bg-[#147a6a] text-white font-semibold px-7 h-12 rounded-xl"
                >
                  En savoir plus
                </Button>
                <QuoteButton
                  variant="outline"
                  className="border-[#1a8a7a] text-[#1a8a7a] hover:bg-[#1a8a7a] hover:text-white h-12 px-7 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="py-20 bg-[#0d5c50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center text-white">
                <div className="text-5xl md:text-6xl font-extrabold mb-2">{stat.value}</div>
                <div className="text-white/70 font-medium tracking-widest uppercase text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUITS À LA UNE ── */}
      {featuredProducts.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-3">
                  Catalogue Premium
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Produits à la une</h2>
              </div>
              <Button
                onClick={() => navigate('/produits')}
                variant="link"
                className="text-[#1a8a7a] font-bold flex items-center p-0 text-base"
              >
                Voir tout <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ACTUALITÉS ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-3">
                Restez informé
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Actualités & Événements
              </h2>
            </div>
            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              className="border-[#1a8a7a] text-[#1a8a7a] hover:bg-[#1a8a7a] hover:text-white font-semibold self-start md:self-auto"
            >
              Toutes les actualités
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {actualites.map((actu, idx) => (
              <article
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={actu.image}
                    alt={actu.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#1a8a7a]/10 text-[#1a8a7a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {actu.tag}
                    </span>
                    <span className="text-gray-400 text-xs">{actu.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#1a8a7a] transition-colors">
                    {actu.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{actu.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTENAIRES ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-10">
            Nos partenaires internationaux
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-40 hover:opacity-60 transition-opacity grayscale">
            {partenaires.map((p, i) => (
              <div key={i} className="text-gray-500 font-black text-xl tracking-tight">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 relative overflow-hidden bg-[#0d5c50]">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block text-[#5dddc7] text-xs font-bold uppercase tracking-widest mb-5">
            Contactez-nous
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Vous souhaitez plus d'informations ?
          </h2>
          <p className="text-xl text-white/75 mb-10 leading-relaxed">
            Nos conseillers médicaux sont à votre disposition pour vous accompagner dans le choix
            des solutions les plus adaptées à vos besoins cliniques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton
              size="lg"
              className="bg-[#5dddc7] text-[#0d5c50] hover:bg-white font-bold px-8 h-14 rounded-xl text-base"
            />
            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0d5c50] h-14 px-10 rounded-xl font-bold text-base bg-transparent"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
