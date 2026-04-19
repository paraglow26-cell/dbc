import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
  Search, 
  Eye, 
  Trash2, 
  Mail,
  Phone,
  Building2,
  Package,
  Calendar,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import type { QuoteRequest } from '@/types';

const statusLabels = {
  pending: { label: 'En attente', color: 'bg-yellow-500', icon: Clock },
  processed: { label: 'Traité', color: 'bg-blue-500', icon: CheckCircle2 },
  completed: { label: 'Terminé', color: 'bg-green-500', icon: CheckCircle2 },
};

export default function AdminQuotes() {
  const { quoteRequests, updateQuoteStatus, deleteQuoteRequest } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredQuotes = quoteRequests.filter(quote => {
    const matchesSearch = 
      quote.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (quote.productName && quote.productName.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || quote.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleView = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setIsDialogOpen(true);
  };

  const handleStatusChange = (id: string, status: QuoteRequest['status']) => {
    updateQuoteStatus(id, status);
    if (selectedQuote && selectedQuote.id === id) {
      setSelectedQuote({ ...selectedQuote, status });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette demande ?')) {
      deleteQuoteRequest(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Demandes de devis</h2>
        <p className="text-gray-500">Gérez les demandes de devis de vos clients</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Rechercher une demande..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="pending">En attente</SelectItem>
            <SelectItem value="processed">Traité</SelectItem>
            <SelectItem value="completed">Terminé</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">En attente</p>
            <p className="text-2xl font-bold text-yellow-600">
              {quoteRequests.filter(q => q.status === 'pending').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Traités</p>
            <p className="text-2xl font-bold text-blue-600">
              {quoteRequests.filter(q => q.status === 'processed').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Terminés</p>
            <p className="text-2xl font-bold text-green-600">
              {quoteRequests.filter(q => q.status === 'completed').length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quotes Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Produit</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredQuotes.map((quote) => {
                const statusInfo = statusLabels[quote.status as keyof typeof statusLabels] || { label: quote.status || 'Inconnu', color: 'bg-gray-500', icon: Clock };
                return (
                  <TableRow key={quote.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-gray-900">{quote.name}</p>
                        <p className="text-sm text-gray-500">{quote.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="text-sm text-gray-600 truncate max-w-[150px]">
                        {quote.productName || 'Non spécifié'}
                      </p>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600">
                        {new Date(quote.createdAt).toLocaleDateString()}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusInfo.color}>
                        <statusInfo.icon className="w-3 h-3 mr-1" />
                        {statusInfo.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleView(quote)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-red-500 hover:text-red-600"
                          onClick={() => handleDelete(quote.id)}
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
          
          {filteredQuotes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucune demande de devis</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quote Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Détails de la demande</DialogTitle>
          </DialogHeader>
          {selectedQuote && (
            <div className="space-y-6 mt-4">
              {/* Status */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">Statut</span>
                <Select 
                  value={selectedQuote.status} 
                  onValueChange={(v) => handleStatusChange(selectedQuote.id, v as QuoteRequest['status'])}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">En attente</SelectItem>
                    <SelectItem value="processed">Traité</SelectItem>
                    <SelectItem value="completed">Terminé</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a8a7a]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{selectedQuote.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a8a7a]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="font-medium">{selectedQuote.phone}</p>
                  </div>
                </div>
                {selectedQuote.company && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1a8a7a]/10 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-[#1a8a7a]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Société</p>
                      <p className="font-medium">{selectedQuote.company}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a8a7a]/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">
                      {new Date(selectedQuote.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Product */}
              {selectedQuote.productName && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-5 h-5 text-[#1a8a7a]" />
                    <span className="font-medium">Produit concerné</span>
                  </div>
                  <p className="text-gray-700">{selectedQuote.productName}</p>
                </div>
              )}

              {/* Message */}
              <div>
                <p className="font-medium mb-2">Message</p>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 whitespace-pre-wrap">{selectedQuote.message}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
