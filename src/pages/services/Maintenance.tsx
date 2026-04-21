import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Phone,
  ShieldCheck,
  Settings
} from 'lucide-react';


export default function Maintenance() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-36 pb-16">
      {/* Hero */}
      <section className="relative py-20 bg-[#0d5c50] overflow-hidden mt-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="SAV & Maintenance"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2e2a]/90 to-[#0d5c50]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#5dddc7] text-xs font-bold uppercase tracking-widest mb-4">
            Support Technique
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            SAV & Maintenance
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Un service après-vente réactif et une maintenance spécialisée pour garantir 
            la pérennité et la performance de vos dispositifs médicaux.
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Une approche préventive et curative</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Intervention Rapide</h3>
                    <p className="text-gray-600 italic">Déplacement de nos techniciens sous 24h à 48h sur tout le territoire national.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Settings className="w-6 h-6 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Pièces d'Origine</h3>
                    <p className="text-gray-600">Utilisation exclusive de pièces certifiées constructeur pour garantir la sécurité.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Contrats de Maintenance</h3>
                    <p className="text-gray-600">Solutions personnalisées incluant visites préventives et étalonnage des équipements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Demander une intervention</h3>
              <div className="space-y-6">
                <p className="text-gray-600">Notre équipe technique est à votre écoute pour organiser une maintenance sur votre site.</p>
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#1a8a7a] rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Hotline SAV</p>
                      <p className="text-lg font-bold text-gray-900">+212 5 22 20 20 20</p>
                    </div>
                  </div>
                  <Button onClick={() => navigate('/contact')} className="w-full bg-[#1a8a7a] hover:bg-[#147a6a]">
                    Ouvrir un ticket support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
