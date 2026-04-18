import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  ChevronLeft, 
  ChevronRight,
  Bone,
  Activity
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import QuoteButton from '@/components/ui-custom/QuoteButton';
import ProductCard from '@/components/ui-custom/ProductCard';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products } = useApp();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = id ? products.find(p => p.id === id) : undefined;
  
  if (!product) {
    return (
      <div className="min-h-screen pt-36 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
          <Button onClick={() => navigate('/produits')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au catalogue
          </Button>
        </div>
      </div>
    );
  }
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen pt-36 pb-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1a8a7a]">Accueil</Link>
            <span>/</span>
            <Link to="/produits" className="hover:text-[#1a8a7a]">Produits</Link>
            <span>/</span>
            <Link 
              to={`/produits?category=${product.category}`} 
              className="hover:text-[#1a8a7a]"
            >
              {product.category === 'orthopedie' ? 'Orthopédie' : 'Traumatologie'}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden mb-4 shadow-sm border">
                <div className="absolute inset-0 flex items-center justify-center">
                  {product.images && product.images.length > 0 ? (
                    <img 
                      src={product.images[currentImageIndex]} 
                      alt={`${product.name} - ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  ) : (
                    <div className="w-40 h-40 rounded-full bg-[#1a8a7a]/10 flex items-center justify-center">
                      {product.category === 'orthopedie' ? (
                        <Bone className="w-20 h-20 text-[#1a8a7a]" />
                      ) : (
                        <Activity className="w-20 h-20 text-[#1a8a7a]" />
                      )}
                    </div>
                  )}
                </div>
                
                {/* Navigation arrows if multiple images */}
                {product.images && product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                    >
                      <ChevronLeft className="w-5 h-5 flex-shrink-0" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                    >
                      <ChevronRight className="w-5 h-5 flex-shrink-0" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnail indicators */}
              {product.images.length > 1 && (
                <div className="flex justify-center gap-2">
                  {product.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        idx === currentImageIndex ? 'bg-[#1a8a7a]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-[#1a8a7a]">
                  {product.category === 'orthopedie' ? 'Orthopédie' : 'Traumatologie'}
                </Badge>
                <span className="text-sm text-gray-500">{product.subcategory}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                  Caractéristiques principales
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-[#1a8a7a] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <QuoteButton
                  productId={product.id}
                  productName={product.name}
                  size="lg"
                  className="bg-[#1a8a7a] hover:bg-[#147a6a]"
                />
                {product.technicalSheet && (
                  <Button variant="outline" size="lg" className="gap-2">
                    <FileText className="w-5 h-5" />
                    Fiche technique
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start bg-gray-100 p-1 rounded-xl">
                <TabsTrigger 
                  value="description" 
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger 
                  value="specifications"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  Spécifications techniques
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="bg-white rounded-2xl p-8 border">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Description détaillée</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-6">
                <div className="bg-white rounded-2xl p-8 border">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Spécifications techniques</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600">{key}</span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Produits similaires</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
