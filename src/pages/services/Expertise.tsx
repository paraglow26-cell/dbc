import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Wrench, 
  GraduationCap, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  Phone,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '@/components/ui-custom/SectionHeader';

const services = [
  {
    icon: Wrench,
    title: 'SAV & Maintenance',
    description: 'Une équipe technique dédiée pour assurer la maintenance préventive et curative de vos équipements médicaux.',
    features: [
      'Intervention sous 24h/48h',
      'Pièces de rechange d\'origine',
      'Contrats de maintenance personnalisés',
      'Support technique téléphonique'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Formation Clinique',
    description: 'Accompagnement des praticiens et du personnel soignant pour une utilisation optimale et sécurisée des dispositifs.',
    features: [
      'Ateliers pratiques (Workshops)',
      'Formation continue certifiante',
      'Webinaires experts',
      'Assistance technique au bloc'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Qualité & Réglementation',
    description: 'Expertise normative pour garantir la conformité de vos installations aux standards internationaux.',
    features: [
      'Certification ISO 13485',
      'Traçabilité complète',
      'Veille réglementaire',
      'Audit de conformité'
    ]
  }
];

export default function Expertise() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-36 pb-16">
      {/* ── PAGE HERO ── */}
      <section className="relative py-20 bg-[#0d5c50] overflow-hidden mt-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="Expertise ABC Synthèse"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2e2a]/90 to-[#0d5c50]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block text-[#5dddc7] text-xs font-bold uppercase tracking-widest mb-4">
            Au-delà des produits
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Notre Expertise & Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            ABC Synthèse accompagne les établissements de santé avec des services d'excellence 
            pour garantir la sécurité des patients et la performance des soins.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col h-full bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#1a8a7a] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#1a8a7a]/20">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 flex-1">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#1a8a7a] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotline Section */}
      <section className="py-20 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0a2e2a] rounded-[2.5rem] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L100 0 L100 100 Z" fill="#5dddc7" />
              </svg>
            </div>
            
            <div className="relative px-8 py-16 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                  Un support technique <br /><span className="text-[#5dddc7]">réactif et expert</span>
                </h2>
                <p className="text-white/70 text-lg mb-8">
                  Besoin d'une intervention urgente ou d'un conseil technique ? 
                  Notre hotline est disponible pour vous accompagner immédiatement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+212522202020" className="flex items-center gap-3 bg-[#1a8a7a] hover:bg-[#147a6a] text-white px-8 py-4 rounded-xl font-bold transition-all">
                    <Phone className="w-5 h-5" />
                    +212 5 22 20 20 20
                  </a>
                  <Button onClick={() => navigate('/contact')} variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 h-auto rounded-xl font-bold">
                    Nous écrire
                  </Button>
                </div>
              </div>
              <div className="hidden md:block w-64 h-64 bg-[#1a8a7a]/20 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-3xl animate-pulse">
                <div className="w-48 h-48 bg-[#1a8a7a]/40 rounded-full flex items-center justify-center">
                  <Wrench className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
