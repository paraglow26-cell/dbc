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
  Activity,
  Bone,
  Play,
  Cpu,
  Map,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import ProductCard from '@/components/ui-custom/ProductCard';
import QuoteButton from '@/components/ui-custom/QuoteButton';

const stats = [
  { value: '10+', label: "Ans d'Excellence", icon: Award },
  { value: '90+', label: 'Collaborateurs', icon: Users },
  { value: '12', label: 'Antennes Nationales', icon: Map },
  { value: '20+', label: 'Partenaires mondiaux', icon: Shield },
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

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=85&w=2400"
            alt="ABC Synthèse – SUPPORTING BONES"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(10,46,42,0.97) 0%, rgba(13,92,80,0.88) 45%, rgba(13,92,80,0.35) 65%, rgba(0,0,0,0.05) 100%)'}} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left – Text */}
            <div className="text-white mt-8 lg:mt-0">
              <Badge className="bg-white/15 text-white border border-white/30 mb-6 px-4 py-1.5 backdrop-blur-md uppercase tracking-widest text-xs font-semibold inline-block">
                Supporting Bones — Distributeur de Référence
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
                L'Innovation au
                <br />
                Service des <span className="text-[#5dddc7]">Os</span>
              </h1>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
                ABC Synthèse (Groupe Sabai Regragui) accompagne les chirurgiens avec des solutions 
                implantables de pointe et une assistance terrain spécialisée.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate('/produits')}
                  size="lg"
                  className="bg-[#1a8a7a] hover:bg-[#147a6a] text-white border-0 font-semibold px-8 h-14 text-base rounded-xl"
                >
                  Nos Spécialités
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <button
                  onClick={() => navigate('/a-propos')}
                  className="flex items-center gap-3 border-2 border-white/40 text-white hover:bg-white/10 transition-all font-semibold px-8 h-14 text-base rounded-xl"
                >
                  <Play className="w-5 h-5" />
                  Profil Entreprise
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

      {/* ── ROBOT CUVIS SECTION ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#5dddc7]/20 rounded-blank blur-2xl group-hover:bg-[#5dddc7]/30 transition-all" />
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000" 
                alt="Robot CUVIS JOINT" 
                className="relative rounded-3xl shadow-2xl border border-gray-100"
              />
              <div className="absolute bottom-8 right-8 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-2">
                <span className="font-black text-[#0d5c50] tracking-tighter text-xl">CUREXO</span>
              </div>
            </div>
            <div>
              <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-4">
                Exclusivité — Futur de la Chirurgie
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Robot CUVIS JOINT<br />
                <span className="text-[#1a8a7a]">Precision Beyond Cure</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Le système robotique de coupe le plus avancé pour le remplacement articulaire. 
                Optimisation ct-based, coupe sub-millimétrique et sécurité maximale pour des résultats 
                cliniques supérieurs.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Planification pré-opératoire 3D basée sur CT-scan',
                  'Fraisage automatique de haute précision (6 axes)',
                  'Gap Check intra-opératoire dynamique',
                  'Réduction significative du temps de récupération'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#1a8a7a]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => navigate('/produits?category=equipements')}
                className="bg-gray-900 hover:bg-black text-white h-12 px-8 rounded-xl font-bold"
              >
                Découvrir la Robotique
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOS SPÉCIALITÉS ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-3">
              Domaines Thérapeutiques
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Une Expertise Multidisciplinaire</h2>
            <div className="w-24 h-1.5 bg-[#1a8a7a] mx-auto rounded-full" />
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e2a] via-[#0a2e2a]/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-[#5dddc7]/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-white/20">
                    <s.icon className="w-6 h-6 text-[#5dddc7]" />
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
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-3">
                Innovations
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900">Produits en Lumière</h2>
            </div>
            <Button
              onClick={() => navigate('/produits')}
              variant="link"
              className="text-[#1a8a7a] font-bold text-lg group"
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
      </section>

      {/* ── ACTUALITÉS ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">Actualités & Événements</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {actualites.map((actu, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-gray-100">
                <div className="h-56 overflow-hidden relative">
                  <img src={actu.image} alt={actu.title} className="w-full h-full object-cover group-hover:scale-105 transition-all" />
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#0d5c50] text-xs font-bold px-3 py-1 rounded-lg">
                    {actu.date}
                  </span>
                </div>
                <div className="p-8">
                  <Badge className="bg-[#1a8a7a]/10 text-[#1a8a7a] border-0 mb-4">{actu.tag}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1a8a7a] transition-colors">
                    {actu.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {actu.description}
                  </p>
                  <Button variant="ghost" className="p-0 text-[#1a8a7a] font-bold hover:bg-transparent">
                    Lire la suite <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── NOS PARTENAIRES ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-3">
              Réseau Mondial
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Nos Partenaires</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed italic">
              ABC SYNTHESE s'appuie sur un réseau de plus de 20 partenaires fabricants internationaux, 
              sélectionnés pour l'excellence de leurs technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[
              'Permedica', 'Next Shoulder', 'PUSM', 'SAMAY Surgical', 'Tabibfarma',
              'ZimED', 'CareFix', 'Ortimplant', 'BMT', 'Zo'
            ].map((partner, i) => (
              <div key={i} className="h-24 bg-gray-50 rounded-2xl flex items-center justify-center p-6 border border-gray-100 grayscale hover:grayscale-0 hover:border-[#1a8a7a]/30 transition-all cursor-crosshair">
                 <span className="text-gray-400 font-black text-sm uppercase tracking-tighter text-center">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOS RÉFÉRENCES ── */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-3">
              Confiance & Crédibilité
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Nos Références</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Ils nous font confiance pour la fourniture de leurs dispositifs médicaux critiques.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'CHU Hassan II', 'CHU Mohammed VI', 'Akdital', 'CNSS', 'CIM Ibn Zohr',
              'Clinique Mekka', 'Int. Clinic', 'Ghandi Clinic', 'Ako Medical', 'Al Qods',
              'Riad Annakhil', 'CIB Al Badie', 'Clinique Maghreb', 'Clinique Anoual', 'Arrayane', 'Beau Séjour'
            ].map((ref, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow h-20">
                <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase leading-none">{ref}</span>
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
            Votre Partenaire Médical de Confiance
          </h2>
          <p className="text-xl text-white/75 mb-10 leading-relaxed">
            Un besoin urgent ? Une demande technique ? Nos conseillers sont à votre disposition 
            pour vous accompagner dans le choix des meilleures solutions cliniques.
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
