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
  Star
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import type { Product } from '@/types';

export default function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    description: '',
    fullDescription: '',
    category: 'orthopedie',
    subcategory: '',
    features: [],
    specifications: {},
    featured: false,
    images: [],
  });

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProduct) {
      updateProduct(editingProduct.id, formData);
    } else {
      const newProduct: Product = {
        ...formData as Product,
        id: `prod-${Date.now()}`,
        images: formData.images || [],
        features: formData.features || [],
        specifications: formData.specifications || {},
      };
      addProduct(newProduct);
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
      category: 'orthopedie',
      subcategory: '',
      features: [],
      specifications: {},
      featured: false,
      images: [],
    });
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData(product);
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gestion des produits</h2>
          <p className="text-gray-500">Gérez votre catalogue de produits</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddNew} className="bg-[#1a8a7a]">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter un produit
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProduct ? 'Modifier le produit' : 'Ajouter un produit'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nom *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Catégorie *</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(v) => setFormData({ ...formData, category: v as 'orthopedie' | 'traumatologie' })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="orthopedie">Orthopédie</SelectItem>
                      <SelectItem value="traumatologie">Traumatologie</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Sous-catégorie</Label>
                <Input
                  value={formData.subcategory}
                  onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                  placeholder="Ex: Prothèses de hanche"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Description courte *</Label>
                <Input
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label>Description complète</Label>
                <textarea
                  value={formData.fullDescription}
                  onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                  className="w-full min-h-[100px] p-3 border rounded-md"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4"
                />
                <Label htmlFor="featured" className="cursor-pointer">Produit en vedette</Label>
              </div>

              <div className="space-y-4 border-t pt-4">
                <Label className="text-base font-semibold">Spécifications techniques</Label>
                <div className="flex gap-2">
                  <Input 
                    id="new-spec-key"
                    placeholder="Clé (ex: Matériau)"
                    className="flex-1"
                  />
                  <Input 
                    id="new-spec-value"
                    placeholder="Valeur (ex: Titane)"
                    className="flex-1"
                  />
                  <Button 
                    type="button" 
                    onClick={() => {
                      const keyInput = document.getElementById('new-spec-key') as HTMLInputElement;
                      const valInput = document.getElementById('new-spec-value') as HTMLInputElement;
                      if (keyInput.value && valInput.value) {
                        setFormData({ 
                          ...formData, 
                          specifications: { 
                            ...formData.specifications, 
                            [keyInput.value]: valInput.value 
                          } 
                        });
                        keyInput.value = '';
                        valInput.value = '';
                      }
                    }}
                  >
                    Ajouter
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(formData.specifications || {}).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-2 bg-gray-50 rounded border">
                      <div className="flex gap-2 text-sm">
                        <span className="font-semibold">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const newSpecs = { ...formData.specifications };
                          delete newSpecs[key];
                          setFormData({ ...formData, specifications: newSpecs });
                        }}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 border-t pt-4">
                <Label className="text-base font-semibold">Images du produit</Label>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Plus className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Cliquez pour uploader une image</p>
                        <p className="text-xs text-gray-400">PNG, JPG ou WEBP</p>
                      </div>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              const base64String = reader.result as string;
                              setFormData({ ...formData, images: [...(formData.images || []), base64String] });
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {formData.images?.map((img, idx) => (
                    <div key={idx} className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden border">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => {
                          const newImages = [...(formData.images || [])];
                          newImages.splice(idx, 1);
                          setFormData({ ...formData, images: newImages });
                        }}
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit" className="bg-[#1a8a7a]">
                  {editingProduct ? 'Mettre à jour' : 'Ajouter'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Rechercher un produit..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Products Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produit</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead>Sous-catégorie</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        {product.category === 'orthopedie' ? (
                          <Bone className="w-5 h-5 text-[#1a8a7a]" />
                        ) : (
                          <Activity className="w-5 h-5 text-[#1a8a7a]" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-500 truncate max-w-[200px]">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {product.category === 'orthopedie' ? 'Orthopédie' : 'Traumatologie'}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.subcategory}</TableCell>
                  <TableCell>
                    {product.featured && (
                      <Badge className="bg-yellow-500">
                        <Star className="w-3 h-3 mr-1" />
                        Vedette
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}>
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-red-500 hover:text-red-600"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucun produit trouvé</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
