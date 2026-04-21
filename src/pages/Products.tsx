import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  X,
  Bone,
  Activity,
  Grid3X3,
  List,
  Microscope,
  Cpu,
  Shield,
  Syringe
} from 'lucide-react';
import { getSubcategories, categories } from '@/data/products';
import { useApp } from '@/context/AppContext';
import ProductCard from '@/components/ui-custom/ProductCard';

type ViewMode = 'grid' | 'list';

const categoryIcons: Record<string, any> = {
  traumatologie: Activity,
  arthroscopie: Microscope,
  arthroplastie: Bone,
  neurochirurgie: Cpu,
  thoracique: Shield,
  consommables: Syringe,
};

export default function Products() {
  const { products } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  // Sync state with URL params when they change
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categoryFromUrl !== selectedCategory) {
      setSelectedCategory(categoryFromUrl);
      setSelectedSubcategory('all');
    } else if (!categoryFromUrl && selectedCategory !== 'all') {
      setSelectedCategory('all');
      setSelectedSubcategory('all');
    }
  }, [searchParams]);

  const subcategories = useMemo(() => {
    if (selectedCategory === 'all') {
      return Array.from(new Set(products.map(p => p.subcategory)));
    }
    return getSubcategories(selectedCategory);
  }, [selectedCategory, products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory;
      
      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [searchQuery, selectedCategory, selectedSubcategory, products]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedSubcategory('all');
    if (value !== 'all') {
      setSearchParams({ category: value });
    } else {
      setSearchParams({});
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSearchParams({});
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedSubcategory !== 'all';

  const getCategoryName = (slug: string) => {
    return categories.find(c => c.slug === slug)?.name || slug;
  };

  return (
    <div className="min-h-screen pt-36 pb-16">
      {/* ── PAGE HERO ── */}
      <section className="relative py-20 bg-[#0d5c50] overflow-hidden mt-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000"
            alt="ABC Synthèse – Produits"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2e2a]/90 to-[#0d5c50]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-[#5dddc7] text-xs font-bold uppercase tracking-widest mb-4">
              Catalogue Officiel 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Nos Solutions Médicales
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Explorez nos {categories.length} pôles de spécialité : Arthroplastie, Traumatologie, Arthroscopie, Neurochirurgie, Thoracique et Consommables.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Rechercher par nom ou référence..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-full lg:w-64">
                  <SelectValue placeholder="Toutes les spécialités" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les spécialités</SelectItem>
                  {categories.map((cat) => {
                    const Icon = categoryIcons[cat.slug] || Activity;
                    return (
                      <SelectItem key={cat.id} value={cat.slug}>
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" />
                          {cat.name}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>

              {/* Subcategory Filter */}
              <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                <SelectTrigger className="w-full lg:w-56">
                  <SelectValue placeholder="Sous-catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les sous-catégories</SelectItem>
                  {subcategories.map((sub) => (
                    <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode & Clear */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-white shadow-sm text-[#1a8a7a]' : 'text-gray-500'
                    }`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-white shadow-sm text-[#1a8a7a]' : 'text-gray-500'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearFilters}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                )}
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t">
                <span className="text-sm text-gray-500">Filtres actifs :</span>
                {selectedCategory !== 'all' && (
                  <Badge variant="secondary" className="gap-1 bg-[#1a8a7a]/10 text-[#1a8a7a] border-0">
                    {getCategoryName(selectedCategory)}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => handleCategoryChange('all')} />
                  </Badge>
                )}
                {selectedSubcategory !== 'all' && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedSubcategory}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedSubcategory('all')} />
                  </Badge>
                )}
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    Recherche: {searchQuery}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery('')} />
                  </Badge>
                )}
                <button onClick={clearFilters} className="text-xs text-red-500 hover:underline ml-auto font-medium">
                  Réinitialiser tout
                </button>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">{filteredProducts.length}</span> produit{filteredProducts.length !== 1 ? 's' : ''} trouvé{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Products Grid/List */}
          {filteredProducts.length > 0 ? (
            <div className={
              viewMode === 'grid'
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-4'
            }>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun produit trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
