import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Eye } from 'lucide-react';
import type { Product } from '@/types';
import QuoteButton from './QuoteButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border border-gray-200 hover:border-[#1a8a7a]/30 hover:shadow-xl hover:shadow-[#1a8a7a]/5 transition-all duration-300">
      {/* Image */}
      <Link to={`/produits/${product.id}`} className="block">
        <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {product.images && product.images.length > 0 ? (
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-[#1a8a7a]/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-[#1a8a7a]">
                  {product.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <Badge 
            className="absolute top-4 left-4 bg-[#1a8a7a] hover:bg-[#1a8a7a]"
          >
            {product.category === 'orthopedie' ? 'Orthopédie' : 'Traumatologie'}
          </Badge>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-[#1a8a7a]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
              <Button variant="secondary" size="sm" className="gap-2 pointer-events-none">
                <Eye className="w-4 h-4" />
                Voir détails
              </Button>
          </div>
        </div>
      </Link>

      {/* Content */}
      <CardContent className="p-6">
        <div className="text-xs text-[#1a8a7a] font-medium mb-2 uppercase tracking-wide">
          {product.subcategory}
        </div>
        <Link to={`/produits/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#1a8a7a] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>
        
        {/* Features preview */}
        <div className="flex flex-wrap gap-2">
          {product.features.slice(0, 2).map((feature, idx) => (
            <span 
              key={idx}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="text-xs text-gray-400 px-1">
              +{product.features.length - 2}
            </span>
          )}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
        <QuoteButton
          productId={product.id}
          productName={product.name}
          className="flex-1 bg-[#1a8a7a] hover:bg-[#147a6a]"
        />
        {product.technicalSheet && (
          <Button variant="outline" size="icon" className="flex-shrink-0">
            <FileText className="w-4 h-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
