import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
            alt="Careers" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Rejoignez <span className="text-[#00a49a]">ABC Synthese</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Participez à notre mission d'améliorer la santé grâce à des technologies médicales de pointe.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Briefcase className="w-12 h-12 text-[#00a49a] mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Construisez votre carrière avec nous</h2>
          <p className="text-lg text-gray-600 mb-8">
            Chez ABC Synthese, nous recherchons des talents passionnés par l'innovation médicale,
            le service de qualité et l'engagement envers le patient. Que vous soyez un expert
            en vente, un technicien spécialisé, ou un professionnel du support clinique,
            votre place est parmi nous.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "Environnement stimulant", 
              "Formation continue", 
              "Évolution de carrière", 
              "Impact sociétal", 
              "Équipe dynamique", 
              "Avantages compétitifs"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00a49a]" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Candidature Spontanée</h3>
          <p className="text-gray-600 mb-8">
            Aucun poste n'est ouvert actuellement dans votre domaine ? N'hésitez pas à nous envoyer
            votre CV, nous sommes toujours à la recherche de nouveaux talents.
          </p>
          <a href="mailto:recrutement@abcsynthese.com">
            <Button className="bg-[#00a49a] hover:bg-[#008f86] text-white px-8 py-6 rounded-xl text-lg font-bold">
              Envoyer mon CV
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
