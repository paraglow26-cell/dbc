import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Bone,
  Activity,
  Star,
  Microscope,
  Cpu,
  Shield,
  Syringe,
  FileText,
  X,
  ListPlus
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { categories } from '@/data/products';
import type { Product } from '@/types';

const categoryIcons: Record<string, any> = {
  traumatologie: Activity,
  arthroscopie: Microscope,
  arthroplastie: Bone,
  neurochirurgie: Cpu,
  thoracique: Shield,
  consommables: Syringe,
};

export default function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    description: '',
    fullDescription: '',
    category: 'arthroplastie',
    subcategory: '',
    features: [],
    specifications: {},
    featured: false,
    images: [],
    technicalSheet: '',
  });

  // State for new items (Local to component to avoid getElementById)
  const [newSpec, setNewSpec] = useState({ key: '', value: '' });
  const [newFeature, setNewFeature] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Ensure we have all baseline arrays/objects even if empty
    const submissionData: Product = {
      ...(editingProduct || { id: `prod-${Date.now()}` }), // Preserve ID if editing
      name: formData.name || '',
      description: formData.description || '',
      fullDescription: formData.fullDescription || '',
      category: formData.category || 'arthroplastie',
      subcategory: formData.subcategory || '',
      featured: !!formData.featured,
      technicalSheet: formData.technicalSheet || '',
      images: formData.images || [],
      features: formData.features || [],
      specifications: formData.specifications || {},
    } as Product;

    if (editingProduct) {
      updateProduct(editingProduct.id, submissionData);
    } else {
      addProduct(submissionData);
    }
    
    setIsDialogOpen(false);
    setEditingProduct(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      fullDescription: '',
      category: 'arthroplastie',
      subcategory: '',
      features: [],
      specifications: {},
      featured: false,
      images: [],
      technicalSheet: '',
    });
    setNewSpec({ key: '', value: '' });
    setNewFeature('');
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      ...product,
      specifications: product.specifications || {},
      features: product.features || [],
      images: product.images || [],
      technicalSheet: product.technicalSheet || '',
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      deleteProduct(id);
    }
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    resetForm();
    setIsDialogOpen(true);
  };

  const getCategoryName = (slug: string) => {
    return categories.find(c => c.slug === slug)?.name || slug;
  };

  const addSpec = () => {
    if (newSpec.key && newSpec.value) {
      setFormData({
        ...formData,
        specifications: { ...formData.specifications, [newSpec.key]: newSpec.value }
      });
      setNewSpec({ key: '', value: '' });
    }
  };

  const removeSpec = (key: string) => {
    const newSpecs = { ...formData.specifications };
    delete newSpecs[key];
    setFormData({ ...formData, specifications: newSpecs });
  };

  const addFeature = () => {
    if (newFeature) {
      setFormData({
        ...formData,
        features: [...(formData.features || []), newFeature]
      });
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    const newFeatures = [...(formData.features || [])];
    newFeatures.splice(index, 1);
    setFormData({ ...formData, features: newFeatures });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Administration du Catalogue</h2>
          <p className="text-gray-500">Mise à jour des spécialités 2026 (6 pôles)</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddNew} className="bg-[#1a8a7a] hover:bg-[#147a6a] transition-all">
              <Plus className="w-4 h-4 mr-2" />
              Nouveau Produit
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProduct ? 'Modifier la Fiche Produit' : 'Ajouter une Nouvelle Référence'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 mt-6 pb-4">
              {/* Informations de Base */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Désignation Commerciale *</Label>
                  <Input
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="ex: Prothèse de Hanche"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Pôle de Spécialité *</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(v) => setFormData({ ...formData, category: v as any })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir une spécialité" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.slug}>{cat.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Sous-catégorie / Classification</Label>
                  <Input
                    value={formData.subcategory || ''}
                    onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                    placeholder="ex: Gamme Fémorale"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Fiche Technique (Lien / Path)</Label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      value={formData.technicalSheet || ''}
                      onChange={(e) => setFormData({ ...formData, technicalSheet: e.target.value })}
                      className="pl-10"
                      placeholder="ex: /docs/fiche.pdf"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Résumé Marketing (Apparaît sur la carte) *</Label>
                <Input
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label>Description Clinique Complète</Label>
                <textarea
                  value={formData.fullDescription || ''}
                  onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                  className="w-full min-h-[100px] p-3 border rounded-md focus:ring-2 focus:ring-[#1a8a7a] transition-all text-sm mb-4"
                  placeholder="Détails techniques, matériaux, indications..."
                />
              </div>

              <div className="flex items-center gap-2 p-4 bg-[#1a8a7a]/5 rounded-xl border border-[#1a8a7a]/10">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured || false}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 rounded border-gray-300 text-[#1a8a7a] focus:ring-[#1a8a7a]"
                />
                <Label htmlFor="featured" className="cursor-pointer font-bold text-[#0d5c50]">
                  Mettre en vedette sur l'accueil
                </Label>
              </div>

              {/* Spécifications */}
              <div className="space-y-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <Label className="text-base font-bold flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#1a8a7a]" />
                  Spécifications Techniques
                </Label>
                <div className="flex gap-2">
                  <Input 
                    value={newSpec.key} 
                    onChange={(e) => setNewSpec({ ...newSpec, key: e.target.value })} 
                    placeholder="Clé (ex: Dimension)" 
                    className="bg-white"
                  />
                  <Input 
                    value={newSpec.value} 
                    onChange={(e) => setNewSpec({ ...newSpec, value: e.target.value })} 
                    placeholder="Valeur (ex: 12mm)" 
                    className="bg-white"
                  />
                  <Button type="button" onClick={addSpec} variant="secondary" className="shrink-0 bg-gray-900 text-white">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(formData.specifications || {}).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border shadow-sm text-sm">
                      <span className="font-bold text-[#1a8a7a]">{key}:</span>
                      <span>{value}</span>
                      <button type="button" onClick={() => removeSpec(key)} className="text-gray-400 hover:text-red-500 ml-1">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Caractéristiques (Features) */}
              <div className="space-y-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <Label className="text-base font-bold flex items-center gap-2">
                  <ListPlus className="w-4 h-4 text-[#1a8a7a]" />
                  Avantages Cliniques
                </Label>
                <div className="flex gap-2">
                  <Input 
                    value={newFeature} 
                    onChange={(e) => setNewFeature(e.target.value)} 
                    placeholder="ex: Système de verrouillage breveté" 
                    className="bg-white"
                  />
                  <Button type="button" onClick={addFeature} variant="secondary" className="shrink-0 bg-gray-900 text-white">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {formData.features?.map((f, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white p-3 rounded-lg border shadow-sm text-sm">
                      <span className="text-gray-700">{f}</span>
                      <button type="button" onClick={() => removeFeature(idx)} className="text-red-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div className="space-y-4">
                <Label className="text-base font-bold">Galerie d'images</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <label className="aspect-square border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <Plus className="w-6 h-6 text-gray-400" />
                    <span className="text-[10px] uppercase font-bold text-gray-400 mt-2">Ajouter</span>
                    <input 
                      type="file" className="hidden" accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setFormData({ ...formData, images: [...(formData.images || []), reader.result as string] });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                  {formData.images?.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border group">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => {
                          const ni = [...(formData.images || [])];
                          ni.splice(idx, 1);
                          setFormData({ ...formData, images: ni });
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end gap-3 pt-6">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} className="rounded-xl px-10">
                  Annuler
                </Button>
                <Button type="submit" className="bg-[#1a8a7a] hover:bg-[#147a6a] px-12 rounded-xl font-bold">
                  {editingProduct ? 'Enregistrer les modifications' : 'Créer le Produit'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Global List */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Rechercher par désignation..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12 rounded-xl border-gray-200"
        />
      </div>

      <Card className="rounded-3xl border-gray-100 overflow-hidden shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow>
                <TableHead className="font-bold">Désignation</TableHead>
                <TableHead className="font-bold">Spécialité</TableHead>
                <TableHead className="font-bold">Statut</TableHead>
                <TableHead className="font-bold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => {
                const Icon = categoryIcons[product.category] || Activity;
                return (
                  <TableRow key={product.id} className="hover:bg-gray-50/30 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border shrink-0">
                          <Icon className="w-5 h-5 text-[#1a8a7a]" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-500 truncate max-w-[250px]">{product.description}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-white font-medium text-[#1a8a7a] border-[#1a8a7a]/20">
                        {getCategoryName(product.category)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {product.featured && (
                        <Badge className="bg-yellow-500 text-white border-0 flex items-center gap-1 shadow-sm w-fit">
                          <Star className="w-3 h-3 fill-white" />
                          Vedette
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(product)} className="h-9 w-9 hover:bg-[#1a8a7a]/10 hover:text-[#1a8a7a]">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)} className="h-9 w-9 text-red-400 hover:bg-red-50 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {filteredProducts.length === 0 && (
             <div className="text-center py-20 text-gray-500 font-medium">Aucun résultat trouvé</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
