import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Package, 
  MessageSquare,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { getProductById } from '@/data/products';

export default function Quote() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addQuoteRequest } = useApp();
  
  const productId = searchParams.get('product');
  const productName = searchParams.get('productName');
  const product = productId ? getProductById(productId) : undefined;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productConcerned: product?.name || productName || '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData(prev => ({ ...prev, productConcerned: product.name }));
    } else if (productName) {
      setFormData(prev => ({ ...prev, productConcerned: productName }));
    }
  }, [product, productName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    addQuoteRequest({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || undefined,
      productId: product?.id,
      productName: formData.productConcerned,
      message: formData.message,
    });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <Card className="text-center">
            <CardContent className="pt-10 pb-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Demande envoyée avec succès !
              </h2>
              <p className="text-gray-600 mb-8">
                Notre équipe commerciale vous contactera dans les plus brefs délais 
                pour étudier votre demande.
              </p>
              <div className="flex flex-col gap-3">
                <Button onClick={() => navigate('/produits')} className="bg-[#1a8a7a]">
                  Continuer mes recherches
                </Button>
                <Button variant="ghost" onClick={() => navigate('/')}>
                  Retour à l'accueil
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-36 pb-16">
      {/* ── PAGE HERO ── */}
      <section className="relative py-16 bg-[#0d5c50] overflow-hidden mt-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000"
            alt="ABC Synthèse – Devis"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2e2a]/90 to-[#0d5c50]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#5dddc7] hover:text-white mb-6 transition-colors mx-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </button>
          <span className="inline-block text-[#5dddc7] text-xs font-bold uppercase tracking-widest mb-4">
            Service Commercial
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Demander un devis
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Remplissez le formulaire ci-dessous et notre équipe commerciale vous 
            contactera rapidement pour étudier votre demande.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle>Informations de contact</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Nom complet <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dr. Ahmed Mansouri"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ahmed.mansouri@clinique.ma"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Téléphone <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+212 5 22 20 20 20"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      Société / Établissement
                    </Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Clinique Internationale de Casablanca"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Product */}
                <div className="space-y-2">
                  <Label htmlFor="productConcerned">
                    Produit concerné
                  </Label>
                  <div className="relative">
                    <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="productConcerned"
                      name="productConcerned"
                      value={formData.productConcerned}
                      onChange={handleChange}
                      placeholder="Nom du produit"
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre besoin (quantités, délais, spécifications particulières...)"
                      required
                      className="pl-10 min-h-[150px]"
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#1a8a7a] hover:bg-[#147a6a]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer ma demande
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
