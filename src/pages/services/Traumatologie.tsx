import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Stethoscope,
  Shield,
  Wrench,
  Settings,
  Zap
} from 'lucide-react';
import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ui-custom/ProductCard';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import QuoteButton from '@/components/ui-custom/QuoteButton';

const features = [
  {
    icon: Shield,
    title: 'Stabilité optimale',
    description: 'Systèmes de verrouillage avancés pour une fixation rigide et stable.',
  },
  {
    icon: Wrench,
    title: 'Instruments dédiés',
    description: 'Boîtes à instruments complètes pour chaque système d\'ostéosynthèse.',
  },
  {
    icon: Settings,
    title: 'Modularité',
    description: 'Systèmes compatibles et modulaires pour plus de flexibilité.',
  },
  {
    icon: Zap,
    title: 'Insertion facilitée',
    description: 'Design ergonomique pour une manipulation chirurgicale optimale.',
  },
];

const productTypes = [
  {
    title: 'Plaques',
    description: 'Gamme complète de plaques de compression et de reconstruction pour toutes les indications.',
    products: ['Large compression', 'Small compression', 'Reconstruction', 'Verrouillées'],
  },
  {
    title: 'Vis',
    description: 'Vis corticales, spongieuses et à canule pour toutes les applications d\'ostéosynthèse.',
    products: ['Corticales', 'Cancellous', 'À canule', 'Autotaraudeuses'],
  },
  {
    title: 'Clous',
    description: 'Clous intramédullaires verrouillés pour la fixation des fractures diaphyssaires.',
    products: ['Tibia', 'Fémur', 'Humérus', 'Antébrachial'],
  },
  {
    title: 'Fixateurs externes',
    description: 'Systèmes de fixateurs externes pour la stabilisation temporaire ou définitive.',
    products: ['Monoplan', 'Multiplan', 'Circulaires', 'Hybrides'],
  },
];

export default function Traumatologie() {
  const navigate = useNavigate();
  const traumaProducts = getProductsByCategory('traumatologie').slice(0, 3);

  return (
    <div className="min-h-screen pt-28 pb-16">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#0d5c50] via-[#1a8a7a] to-[#2db5a5]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/80 mb-4">
            <Stethoscope className="w-5 h-5" />
            <span className="text-sm font-medium">Nos Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Traumatologie
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Solutions d'ostéosynthèse complètes pour la fixation des fractures 
            et la reconstruction osseuse.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => navigate('/produits?category=traumatologie')}
              className="bg-white text-[#1a8a7a] hover:bg-white/90"
            >
              Voir les produits
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <QuoteButton
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Pourquoi nous choisir"
            title="Excellence en traumatologie"
            description="Nos systèmes d'ostéosynthèse sont conçus pour offrir une fixation stable et favoriser la consolidation osseuse."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#1a8a7a]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-[#1a8a7a]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Nos Gammes"
            title="Solutions complètes d'ostéosynthèse"
            description="Une gamme étendue de produits pour répondre à tous les besoins en traumatologie."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {productTypes.map((type, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.products.map((product, pidx) => (
                    <span 
                      key={pidx}
                      className="text-xs bg-[#1a8a7a]/10 text-[#1a8a7a] px-3 py-1 rounded-full font-medium"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Produits Populaires"
            title="Nos solutions traumatologiques les plus demandées"
            description="Découvrez les produits préférés des chirurgiens traumatologues."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traumaProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/produits?category=traumatologie')}
              variant="outline"
              size="lg"
              className="border-[#1a8a7a] text-[#1a8a7a] hover:bg-[#1a8a7a] hover:text-white"
            >
              Voir tous les produits traumatologie
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a8a7a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Besoin d'informations techniques ?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Nos équipes techniques peuvent vous fournir les fiches techniques, 
            protocoles chirurgicaux et toute l'assistance dont vous avez besoin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton
              size="lg"
              className="bg-white text-[#1a8a7a] hover:bg-white/90"
            />
            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
