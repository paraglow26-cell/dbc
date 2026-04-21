import { useState } from 'react';
// Contact page - no navigation needed
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import SectionHeader from '@/components/ui-custom/SectionHeader';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    content: 'Bd Massira, Etg 1\nMaarif, Casablanca, Maroc',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '+212 5 22 20 20 20\n+212 6 61 10 10 10',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@abcsynthese.ma\nsupport@abcsynthese.ma',
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: 'Lundi - Vendredi\n09h00 - 18h00',
  },
];

export default function Contact() {
  const { addContactMessage } = useApp();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    addContactMessage({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
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

  return (
    <div className="min-h-screen pt-36 pb-16">
      {/* ── PAGE HERO ── */}
      <section className="relative py-20 bg-[#0d5c50] overflow-hidden mt-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
            alt="ABC Synthèse – Contact"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2e2a]/90 to-[#0d5c50]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-[#5dddc7]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#5dddc7]/20">
            <Stethoscope className="w-8 h-8 text-[#5dddc7]" />
          </div>
          <span className="inline-block text-[#5dddc7] text-xs font-bold uppercase tracking-widest mb-4">
            Assistance & Support
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Notre équipe d'experts médicaux et techniques est à votre disposition pour répondre à toutes vos demandes.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-[#1a8a7a]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeader
                subtitle="Envoyez-nous un message"
                title="Formulaire de contact"
                description="Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais."
                centered={false}
              />
              
              {isSubmitted ? (
                <Card className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Objet de votre message"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      required
                      className="min-h-[150px]"
                    />
                  </div>
                  
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
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <SectionHeader
                subtitle="Notre localisation"
                title="Où nous trouver"
                description="Visitez-nous dans nos locaux à Casablanca."
                centered={false}
              />
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] flex items-center justify-center relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  style={{ border: 0 }} 
                  src="https://maps.google.com/maps?q=Bd%20Massira,%20Maarif,%20Casablanca,%20Maroc&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
