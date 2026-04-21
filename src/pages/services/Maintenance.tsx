import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Phone,
  ShieldCheck,
  Users,
  Truck,
  Stethoscope
} from 'lucide-react';

export default function Maintenance() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-36 pb-16">
      {/* ── HERO ── */}
      <section className="relative py-24 bg-[#0d5c50] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="SAV & Expertise Terrain ABC Synthèse"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2e2a]/90 to-[#0d5c50]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <span className="inline-block text-[#5dddc7] text-xs font-bold uppercase tracking-widest mb-4">
            Engagement & Réactivité
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Expertise Terrain & SAV
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Un accompagnement technique d'excellence, avant, pendant et après chaque intervention 
            chirurgicale sur l'ensemble du territoire national.
          </p>
        </div>
      </section>

      {/* ── CONTENU PRINCIPAL ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                Plus qu'une maintenance,<br />une présence chirurgicale.
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Chez ABC Synthèse, notre service ne s'arrête pas à la livraison. Nous comprenons les 
                besoins réels des chirurgiens grâce à une immersion totale dans l'environnement clinique.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[#1a8a7a]/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Users className="w-7 h-7 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Instrumentistes Spécialisés</h3>
                    <p className="text-gray-600">
                      Présence systématique en bloc opératoire avec nos experts pour assister 
                      techniquement le chirurgien durant toute l'intervention.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[#1a8a7a]/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Truck className="w-7 h-7 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Logistique d'Urgence</h3>
                    <p className="text-gray-600">
                      Maillage national avec 4 entrepôts territoriaux permettant une réponse 
                      ultra-rapide aux cas critiques et imprévus.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[#1a8a7a]/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Stethoscope className="w-7 h-7 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Suivi Post-Opératoire</h3>
                    <p className="text-gray-600">
                      Accompagnement dans l'évaluation des résultats et support continu pour 
                      l'optimisation des flux ancillaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte de contact SAV */}
            <div className="lg:sticky lg:top-40">
              <div className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Assistance Technique 24/7</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Notre département technique est mobilisé pour répondre à vos demandes de maintenance 
                  préventive ou curative dans les plus brefs délais.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1a8a7a] rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Hotline Urgence</p>
                      <p className="text-xl font-black text-gray-900">+212 5 22 20 20 20</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#1a8a7a]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Délai d'intervention</p>
                      <p className="text-lg font-bold text-gray-900">24h - 48h National</p>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => navigate('/contact')} 
                  className="w-full mt-8 bg-[#1a8a7a] hover:bg-[#147a6a] h-14 rounded-2xl font-bold text-lg"
                >
                  Planifier une intervention
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITÉ ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-16 h-16 text-[#1a8a7a] mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Conformité au Standard ISO</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre démarche SAV est intégrée dans notre système de management de la qualité, 
            garantissant une traçabilité totale et le respect des normes ISO 13485.
          </p>
        </div>
      </section>
    </div>
  );
}
