import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Shield, 
  Award, 
  TrendingUp, 
  Users,
  Bone,
  Activity,
  Stethoscope,
  CheckCircle2,
  Syringe,
  Microscope,
  HardHat,
  Monitor
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import ProductCard from '@/components/ui-custom/ProductCard';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import QuoteButton from '@/components/ui-custom/QuoteButton';

const stats = [
  { value: '15+', label: 'Ans d\'Expertise', icon: Award },
  { value: '800+', label: 'Dispositifs Médicaux', icon: Shield },
  { value: '100%', label: 'Conformité ISO', icon: CheckCircle2 },
  { value: '24/7', label: 'Support Technique', icon: TrendingUp },
];

const mainSolutions = [
  {
    title: 'Équipements Médicaux',
    description: 'Distribution d\'équipements de marques internationales leaders, réputées pour leur fiabilité.',
    icon: Monitor,
    category: 'equipements',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Matériel Chirurgical',
    description: 'Large choix de matériel répondant aux besoins critiques des blocs opératoires.',
    icon: Stethoscope,
    category: 'orthopedie',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Consommables',
    description: 'Offre complète de consommables provenant de marques mondialement reconnues.',
    icon: Syringe,
    category: 'consommables',
    image: 'https://images.unsplash.com/photo-1584362142249-17d77bc22d8a?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { products } = useApp();
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical expertise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d5c50]/95 via-[#1a8a7a]/90 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <Badge className="bg-white/20 text-white border-0 mb-6 px-4 py-1.5 backdrop-blur-md">
              Expert en dispositifs médicaux depuis 2008
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              L'Innovation au Service de la <span className="text-[#a8f0e8]">Santé</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              ABC Synthèse est le leader dans la production et la distribution de dispositifs médicaux au Maroc. 
              Nous allions expertise humaine et technologie de pointe pour satisfaire les besoins des professionnels.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => navigate('/produits')}
                size="lg"
                className="bg-white text-[#1a8a7a] hover:bg-white/90 font-semibold px-8 h-14 text-lg"
              >
                Explorer nos Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <QuoteButton
                size="lg"
                variant="ghost"
                className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-[#1a8a7a] transition-all duration-300 font-semibold px-8 h-14 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Pillars */}
      <section className="py-24 bg-white relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {mainSolutions.map((solution, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => navigate(`/produits?category=${solution.category}`)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1a8a7a] transition-colors duration-300">
                    <solution.icon className="w-6 h-6 text-[#1a8a7a] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <span className="text-[#1a8a7a] font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                    En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Manufacturing Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#1a8a7a]/5 rounded-full blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                  alt="Production ABC Synthèse" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-bold text-gray-900">Qualité Certifiée</span>
                </div>
                <p className="text-sm text-gray-500">Conformité aux normes ISO 13485 & ISO 9001.</p>
              </div>
            </div>
            
            <div>
              <SectionHeader
                subtitle="Notre Expertise"
                title="Savoir-faire et Innovation"
                description="ABC Synthèse appuie son leadership sur l'expertise de son capital humain, l'innovation continue et un service après-vente de proximité."
                centered={false}
              />
              <div className="space-y-6 mt-8">
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                    <HardHat className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Production Locale</h4>
                    <p className="text-gray-600 text-sm">Unités de fabrication modernes basées à Casablanca assurant une réactivité optimale.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                    <Microscope className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Innovation & R&D</h4>
                    <p className="text-gray-600 text-sm">Développement constant de nouvelles solutions orthopédiques et chirurgicales.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Service Après-Vente</h4>
                    <p className="text-gray-600 text-sm">Accompagnement technique et maintenance pour garantir la pérennité de vos équipements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-[#1a8a7a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80 font-medium tracking-wide uppercase text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <Badge className="bg-[#1a8a7a]/10 text-[#1a8a7a] border-0 mb-4 px-4 py-1.5 uppercase tracking-wider text-[10px] font-bold">
                Catalogue Premium
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900">Produits à la une</h2>
            </div>
            <Button
              onClick={() => navigate('/produits')}
              variant="link"
              className="text-[#1a8a7a] font-bold flex items-center p-0"
            >
              Voir tout le catalogue <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.length > 0 ? (
              featuredProducts.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 italic py-12">
                Nos produits phares seront bientôt affichés ici.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Global Presence / Partners Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            subtitle="Nos Partenaires"
            title="Ils nous font confiance"
            description="Nous collaborons avec les plus grands noms de l'industrie médicale mondiale pour vous offrir le meilleur."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="h-12 flex items-center justify-center font-bold text-2xl text-gray-400">MEDTRONIC</div>
            <div className="h-12 flex items-center justify-center font-bold text-2xl text-gray-400">STRYKER</div>
            <div className="h-12 flex items-center justify-center font-bold text-2xl text-gray-400">ZIMMER</div>
            <div className="h-12 flex items-center justify-center font-bold text-2xl text-gray-400">JOHNSON</div>
            <div className="h-12 flex items-center justify-center font-bold text-2xl text-gray-400">SIEMENS</div>
            <div className="h-12 flex items-center justify-center font-bold text-2xl text-gray-400">GE HEALTH</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0d5c50]">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vous souhaitez plus d'informations ?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Nos conseillers sont à votre disposition pour vous accompagner dans le choix des solutions les plus adaptées à vos besoins cliniques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton size="lg" className="bg-[#a8f0e8] text-[#0d5c50] hover:bg-white" />
            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#0d5c50] h-14 px-10"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
