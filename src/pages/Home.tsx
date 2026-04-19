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
  CheckCircle2
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import ProductCard from '@/components/ui-custom/ProductCard';
import ServiceCard from '@/components/ui-custom/ServiceCard';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import QuoteButton from '@/components/ui-custom/QuoteButton';

const stats = [
  { value: '15+', label: 'Années d\'expérience', icon: Award },
  { value: '500+', label: 'Produits disponibles', icon: Shield },
  { value: '1000+', label: 'Clients satisfaits', icon: Users },
  { value: '50+', label: 'Pays desservis', icon: TrendingUp },
];

const values = [
  {
    title: 'Qualité',
    description: 'Tous nos produits sont certifiés CE et fabriqués selon les normes ISO les plus strictes.',
    icon: Shield,
  },
  {
    title: 'Innovation',
    description: 'Recherche et développement continus pour proposer les solutions les plus avancées.',
    icon: TrendingUp,
  },
  {
    title: 'Sécurité',
    description: 'Biocompatibilité garantie et traçabilité complète de tous nos implants.',
    icon: CheckCircle2,
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { products } = useApp();
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-44 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d5c50] via-[#1a8a7a] to-[#2db5a5]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="bg-white/20 text-white border-0 mb-6 px-4 py-1.5">
                Leader en solutions orthopédiques
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Solutions médicales d'excellence en{' '}
                <span className="text-[#a8f0e8]">Orthopédie</span> &{' '}
                <span className="text-[#a8f0e8]">Traumatologie</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl">
                DBC Synthèse fournit des implants et prothèses de haute qualité 
                pour les chirurgiens orthopédistes et traumatologues.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate('/produits')}
                  size="lg"
                  className="bg-white text-[#1a8a7a] hover:bg-white/90 font-semibold px-8"
                >
                  Découvrir nos produits
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <QuoteButton
                  size="lg"
                  variant="ghost"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-[#1a8a7a] transition-all duration-300 font-semibold px-8"
                />
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-32 h-32 text-white" />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Bone className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Activity className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-[#1a8a7a]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Nos Spécialités"
            title="Expertise médicale à votre service"
            description="DBC Synthèse propose une gamme complète de solutions pour la chirurgie orthopédique et traumatologique."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Orthopédie"
              description="Prothèses articulaires et implants pour le remplacement des articulations usées ou endommagées."
              icon={Bone}
              href="/services/orthopedie"
              features={[
                'Prothèses de hanche',
                'Prothèses de genou',
                'Prothèses d\'épaule',
                'Implants spécialisés',
              ]}
            />
            <ServiceCard
              title="Traumatologie"
              description="Solutions d'ostéosynthèse pour la fixation des fractures et la reconstruction osseuse."
              icon={Activity}
              href="/services/traumatologie"
              features={[
                'Plaques et vis',
                'Clous intramédullaires',
                'Fixateurs externes',
                'Systèmes de verrouillage',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Nos Produits"
            title="Produits en vedette"
            description="Découvrez notre sélection de produits les plus demandés par les professionnels de santé."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/produits')}
              variant="outline"
              size="lg"
              className="border-[#1a8a7a] text-[#1a8a7a] hover:bg-[#1a8a7a] hover:text-white"
            >
              Voir tous les produits
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#1a8a7a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Nos Valeurs"
            title="L'excellence au cœur de notre mission"
            description="Nous nous engageons à fournir des solutions médicales sûres, innovantes et de la plus haute qualité."
            light
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Nos équipes commerciales sont à votre disposition pour étudier vos besoins 
            et vous proposer les solutions les plus adaptées.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton size="lg" className="bg-[#1a8a7a] hover:bg-[#147a6a]" />
            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              size="lg"
              className="border-gray-300"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
