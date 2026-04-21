import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2,
  Microscope,
  MonitorPlay
} from 'lucide-react';

export default function Formation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-36 pb-16">
      {/* ── HERO ── */}
      <section className="relative py-24 bg-[#0d5c50] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=2000"
            alt="Formation Clinique ABC Synthèse"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e2a] via-[#0d5c50]/90 to-[#1a8a7a]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block text-[#5dddc7] text-xs font-bold uppercase tracking-widest mb-5">
            Centre d'Excellence & Innovation
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Formation & Expertise Scientifique
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            ABC Synthèse investit dans le développement professionnel continu pour garantir 
            une précision chirurgicale optimale et une maîtrise des technologies de demain.
          </p>
        </div>
      </section>

      {/* ── DEUX PILIERS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Pilier 1: ABC TRAINING */}
            <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100 hover:shadow-xl transition-all h-full">
              <div className="w-16 h-16 bg-[#1a8a7a] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#1a8a7a]/20">
                <MonitorPlay className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Plateforme ABC TRAINING</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Notre plateforme digitale (en cours de développement) offre un accès 24h/7j aux 
                ressources critiques pour les blocs opératoires.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Protocoles chirurgicaux interactifs par produit',
                  'Vidéos de procédures en haute définition',
                  'Modules e-learning structurés et fiches techniques',
                  'Suivi de progression & attestations numériques'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#1a8a7a] shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-[#1a8a7a]/5 rounded-2xl border border-[#1a8a7a]/10">
                <p className="text-sm font-bold text-[#1a8a7a] uppercase mb-2 tracking-widest">Focus Instrumentistes</p>
                <p className="text-gray-600 text-sm">
                  Séances hebdomadaires de formation continue pour l'alignement sur les 
                  derniers protocoles chirurgicaux et retours d'expérience terrain.
                </p>
              </div>
            </div>

            {/* Pilier 2: CADAVERLAB & R&D */}
            <div className="bg-[#0d5c50] rounded-[3rem] p-12 text-white hover:shadow-xl transition-all h-full">
              <div className="w-16 h-16 bg-[#5dddc7] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#5dddc7]/20">
                <Microscope className="w-8 h-8 text-[#0d5c50]" />
              </div>
              <h2 className="text-3xl font-extrabold mb-6">Accès Privilégié CADAVERLAB</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Grâce à nos partenariats internationaux (notamment CUREXO & Permedica), nous bénéficions 
                d'un accès exclusif à des laboratoires de recherche de pointe.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Évaluation en conditions réelles de nouveaux implants',
                  'Formations techniques avancées pour chirurgiens',
                  'Collaboration directe avec les équipes R&D internationales',
                  'Simulation et planification chirurgicale assistée (Robotique/IA)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#5dddc7] shrink-0 mt-1" />
                    <span className="text-white/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                <p className="text-sm font-bold text-[#5dddc7] uppercase mb-2 tracking-widest">Innovation Scientifique</p>
                <p className="text-white/70 text-sm">
                  Intégration des technologies de demain : Planification 3D, Robotique et 
                  Intelligence Artificielle appliquée à l'imagerie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Prêt à élever vos compétences ?</h2>
          <p className="text-gray-600 text-xl mb-10 leading-relaxed">
            Contactez notre pôle scientifique pour planifier une session de formation 
            ou obtenir vos accès à la plateforme ABC TRAINING.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigate('/contact')} 
              size="lg" 
              className="bg-[#1a8a7a] hover:bg-[#147a6a] text-white px-12 h-14 rounded-2xl font-bold text-lg shadow-lg"
            >
              Contact Formation
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/produits')} 
              size="lg" 
              className="border-gray-200 text-gray-600 px-12 h-14 rounded-2xl font-bold text-lg bg-white"
            >
              Voir la Robotique
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
