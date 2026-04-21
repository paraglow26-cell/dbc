import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  CheckCircle2,
  Users,
  BookOpen,
  ArrowRight,
  Stethoscope,
  Video
} from 'lucide-react';

export default function Formation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-36 pb-16">
      {/* Hero */}
      <section className="relative py-20 bg-[#0d5c50] overflow-hidden mt-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=2000"
            alt="Formation Clinique"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2e2a]/90 to-[#0d5c50]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block text-[#5dddc7] text-xs font-bold uppercase tracking-widest mb-4">
            Compétence & Transmission
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Formation Clinique
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Support technique et formation continue pour une maîtrise parfaite des 
            nouvelles technologies chirurgicales et thérapeutiques.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-[#1a8a7a]/20 transition-all">
              <div className="w-14 h-14 bg-[#1a8a7a] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#1a8a7a]/20">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ateliers Pratiques</h3>
              <p className="text-gray-600 mb-6">Séances de manipulation sur Dry Lab ou Wet Lab pour se familiariser avec nos ancillaires et implants.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1a8a7a]" /> Accès aux nouveaux ancillaires
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1a8a7a]" /> Encadrement par des experts
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-[#1a8a7a]/20 transition-all">
              <div className="w-14 h-14 bg-[#1a8a7a] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#1a8a7a]/20">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">E-Learning & Webinaires</h3>
              <p className="text-gray-600 mb-6">Accédez à notre plateforme de formation digitale pour visionner des cas cliniques et des techniques opératoires.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1a8a7a]" /> Vidéos de chirurgie en direct
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1a8a7a]" /> Support théorique téléchargeable
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-[#1a8a7a]/20 transition-all">
              <div className="w-14 h-14 bg-[#1a8a7a] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#1a8a7a]/20">
                <Stethoscope className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Assistance au Bloc</h3>
              <p className="text-gray-600 mb-6">Accompagnement technique personnalisé lors de la mise en place de nouvelles procédures dans votre établissement.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1a8a7a]" /> Présence technique experte
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1a8a7a]" /> Optimisation des flux ancillaires
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Planifier une formation ?</h2>
          <p className="text-gray-600 text-lg mb-8">Contactez notre département pédagogique pour organiser une session de formation pour vos équipes.</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-[#1a8a7a] hover:bg-[#147a6a] px-10 rounded-xl font-bold h-14">
            Contacter le pôle formation
          </Button>
        </div>
      </section>
    </div>
  );
}
