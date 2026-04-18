import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  TrendingUp, 
  Users,
  Award,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import SectionHeader from '@/components/ui-custom/SectionHeader';

const values = [
  {
    icon: Shield,
    title: 'Qualité',
    description: 'Certification CE et conformité ISO pour tous nos produits. Contrôle qualité rigoureux à chaque étape.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Investissement continu en R&D pour développer les solutions les plus avancées du marché.',
  },
  {
    icon: Heart,
    title: 'Patient First',
    description: 'La sécurité et le bien-être du patient sont au cœur de chaque décision que nous prenons.',
  },
  {
    icon: Users,
    title: 'Partenariat',
    description: 'Collaboration étroite avec les chirurgiens pour comprendre et répondre à leurs besoins.',
  },
];

const certifications = [
  'Certification CE (MDR 2017/745)',
  'ISO 13485 : Système de management de la qualité',
  'ISO 9001 : Norme qualité',
  'FDA Registration (États-Unis)',
  'Autorisation Ministère de la Santé (Maroc)',
];

const timeline = [
  {
    year: '2008',
    title: 'Création de DBC Synthèse',
    description: 'Fondation de l\'entreprise à Casablanca avec une vision claire : fournir des solutions orthopédiques de qualité.',
  },
  {
    year: '2012',
    title: 'Expansion européenne',
    description: 'Ouverture de nos premiers bureaux en Allemagne et en Italie.',
  },
  {
    year: '2015',
    title: 'Certification ISO 13485',
    description: 'Obtention de la certification qualité pour les dispositifs médicaux.',
  },
  {
    year: '2018',
    title: 'Ligne traumatologie',
    description: 'Lancement de notre gamme complète de produits traumatologiques.',
  },
  {
    year: '2022',
    title: 'Innovation 3D',
    description: 'Introduction de la planification chirurgicale assistée par ordinateur.',
  },
  {
    year: '2024',
    title: 'Leader du marché',
    description: 'DBC Synthèse devient l\'un des principaux fournisseurs au Maroc et en Afrique.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-36 pb-16">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#0d5c50] via-[#1a8a7a] to-[#2db5a5]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Stethoscope className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            À propos de DBC Synthèse
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Depuis plus de 15 ans, nous accompagnons les chirurgiens orthopédistes et 
            traumatologues avec des solutions médicales d'excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-10">
              <div className="w-14 h-14 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#1a8a7a]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Fournir aux professionnels de santé des solutions orthopédiques et 
                traumatologiques innovantes, sûres et de haute qualité, pour améliorer 
                la qualité de vie des patients et accompagner les chirurgiens dans 
                leurs interventions quotidiennes.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10">
              <div className="w-14 h-14 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#1a8a7a]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Devenir le partenaire de référence des chirurgiens orthopédistes en Europe, 
                reconnu pour notre excellence technique, notre innovation constante et 
                notre engagement envers la sécurité patient au Maroc et en Afrique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Nos Valeurs"
            title="Ce qui nous guide chaque jour"
            description="Nos valeurs fondamentales définissent notre culture d'entreprise et notre façon de travailler."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[#1a8a7a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#1a8a7a] uppercase tracking-wider">
                Certifications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Qualité et conformité garanties
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tous nos produits sont soumis à des contrôles qualité rigoureux et 
                respectent les normes réglementaires les plus strictes. Notre engagement 
                envers la qualité est attesté par de nombreuses certifications internationales.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#1a8a7a]/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#1a8a7a]" />
                    </div>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#1a8a7a] to-[#2db5a5] rounded-2xl p-10 text-white">
              <Award className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Excellence certifiée</h3>
              <p className="text-white/90 mb-6">
                Notre système de management de la qualité est certifié ISO 13485, 
                garantissant que tous nos processus répondent aux exigences réglementaires 
                des dispositifs médicaux.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-white/80">Produits certifiés CE</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">0</div>
                  <div className="text-sm text-white/80">Rappel de produit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Notre Histoire"
            title="Une histoire d'excellence depuis 2008"
            description="Découvrez les moments clés qui ont façonné DBC Synthèse."
          />
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#1a8a7a]/20 hidden lg:block"></div>
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                  <div className="flex-1 hidden lg:block"></div>
                  <div className="w-4 h-4 bg-[#1a8a7a] rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <span className="inline-block bg-[#1a8a7a]/10 text-[#1a8a7a] text-sm font-semibold px-3 py-1 rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
