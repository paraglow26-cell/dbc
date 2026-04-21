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
  Plus, 
  Edit2, 
  Trash2, 
  Bone,
  Activity,
  Microscope,
  Cpu,
  Shield,
  Syringe
} from 'lucide-react';
import { categories as initialCategories } from '@/data/products';
import type { Category } from '@/types';

const categoryIcons: Record<string, any> = {
  traumatologie: Activity,
  arthroscopie: Microscope,
  arthroplastie: Bone,
  neurochirurgie: Cpu,
  thoracique: Shield,
  consommables: Syringe,
};

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  
  const [formData, setFormData] = useState<Partial<Category>>({
    name: '',
    slug: 'arthroplastie',
    description: '',
    icon: 'Bone',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingCategory) {
      setCategories(prev => prev.map(c => c.id === editingCategory.id ? { ...c, ...formData } as Category : c));
    } else {
      const newCategory: Category = {
        ...formData as Category,
        id: `cat-${Date.now()}`,
      };
      setCategories(prev => [...prev, newCategory]);
    }
    
    setIsDialogOpen(false);
    setEditingCategory(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      slug: 'arthroplastie',
      description: '',
      icon: 'Bone',
    });
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData(category);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      setCategories(prev => prev.filter(c => c.id !== id));
    }
  };

  const handleAddNew = () => {
    setEditingCategory(null);
    resetForm();
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gestion des Pôles</h2>
          <p className="text-gray-500">Définissez les spécialités médicales du catalogue</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddNew} className="bg-[#1a8a7a]">
              <Plus className="w-4 h-4 mr-2" />
              Nouveau Pôle
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingCategory ? 'Modifier la spécialité' : 'Créer un nouveau pôle'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Nom d'affichage *</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="ex: Arthroplastie"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label>ID Technique (Slug) *</Label>
                <select
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value as any })}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="arthroplastie">arthroplastie</option>
                  <option value="traumatologie">traumatologie</option>
                  <option value="arthroscopie">arthroscopie</option>
                  <option value="neurochirurgie">neurochirurgie</option>
                  <option value="thoracique">thoracique</option>
                  <option value="consommables">consommables</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label>Description Courte</Label>
                <Input
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Résumé de la spécialité"
                />
              </div>
              
              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit" className="bg-[#1a8a7a]">
                  {editingCategory ? 'Sauvegarder' : 'Créer'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Categories Table */}
      <Card className="rounded-2xl overflow-hidden border-gray-100">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead>Pôle Médical</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => {
                const Icon = categoryIcons[category.slug] || Activity;
                return (
                  <TableRow key={category.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#1a8a7a]/5 rounded-lg flex items-center justify-center border border-[#1a8a7a]/10">
                          <Icon className="w-5 h-5 text-[#1a8a7a]" />
                        </div>
                        <span className="font-bold text-gray-900">{category.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-white text-gray-500 font-mono text-xs">{category.slug}</Badge>
                    </TableCell>
                    <TableCell className="text-gray-500 text-sm max-w-sm truncate">{category.description}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(category)}>
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-red-400 hover:text-red-600 hover:bg-red-50"
                          onClick={() => handleDelete(category.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
