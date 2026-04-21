import {
  Target,
  Eye,
  Heart,
  Shield,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  Stethoscope,
  MapPin,
  Building2,
  Bone,
  Activity,
  Microscope,
  Monitor,
} from 'lucide-react';
import SectionHeader from '@/components/ui-custom/SectionHeader';

const values = [
  {
    icon: Shield,
    title: 'Qualité',
    description: 'Certification CE et conformité ISO 13485 pour tous nos produits. Contrôle qualité rigoureux à chaque étape du processus.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Investissement continu en R&D pour développer les solutions chirurgicales les plus avancées du marché.',
    color: 'bg-[#1a8a7a]/10',
    iconColor: 'text-[#1a8a7a]',
  },
  {
    icon: Heart,
    title: 'Patient First',
    description: 'La sécurité et le bien-être du patient sont au cœur de chaque décision que nous prenons.',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    icon: Users,
    title: 'Partenariat',
    description: 'Collaboration étroite avec les chirurgiens pour comprendre et répondre précisément à leurs besoins terrain.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
];

const certifications = [
  'Certification CE (MDR 2017/745)',
  'ISO 13485 : Système de management de la qualité – Dispositifs médicaux',
  'ISO 9001 : Norme internationale qualité',
  'Autorisation Ministère de la Santé du Maroc',
  'Conformité réglementaire ANAM & CHU',
];

const timeline = [
  {
    year: '2008',
    title: 'Création de ABC Synthèse',
    description: 'Fondation de l\'entreprise à Casablanca avec une vision claire : fournir des solutions orthopédiques de qualité aux professionnels marocains.',
  },
  {
    year: '2010',
    title: 'Premier catalogue orthopédie',
    description: 'Lancement du premier catalogue complet de prothèses de hanche, genou et épaule avec des marques leaders internationaux.',
  },
  {
    year: '2014',
    title: 'Certification ISO 13485',
    description: 'Obtention de la certification qualité internationale pour les systèmes de management des dispositifs médicaux.',
  },
  {
    year: '2017',
    title: 'Expansion traumatologie',
    description: 'Lancement de notre gamme complète de produits traumatologiques : plaques, vis, fixateurs externes.',
  },
  {
    year: '2021',
    title: 'Gamme équipements & SAV',
    description: 'Développement du département équipements de bloc opératoire et renforcement du Service Après-Vente.',
  },
  {
    year: '2024',
    title: 'Leader national',
    description: 'ABC Synthèse devient l\'un des principaux distributeurs de dispositifs médicaux au Maroc avec 800+ références.',
  },
];

const domaines = [
  { icon: Bone, name: 'Orthopédie', desc: 'Prothèses totales hanche, genou, épaule' },
  { icon: Activity, name: 'Traumatologie', desc: 'Plaques, vis, fixateurs, clous centromédullaires' },
  { icon: Microscope, name: 'Biopsie & Diagnostic', desc: 'Aiguilles, systèmes d\'imagerie' },
  { icon: Monitor, name: 'Équipements médicaux', desc: 'Bloc opératoire, endoscopie, écho' },
  { icon: Shield, name: 'Consommables', desc: 'Stériles, certifiés CE, large stock' },
  { icon: TrendingUp, name: 'SAV & Formation', desc: 'Maintenance préventive et formation terrain' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* ── PAGE HERO ── */}
      <section className="relative py-20 bg-[#0d5c50] overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <span className="inline-block text-[#5dddc7] text-xs font-bold uppercase tracking-widest mb-4">
                L'Entreprise
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                À propos de<br />ABC Synthèse
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Depuis 2008, ABC Synthèse accompagne les chirurgiens orthopédistes, traumatologues
                et établissements de santé au Maroc avec des solutions médicales d'excellence,
                certifiées et adaptées aux réalités du terrain.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 hidden lg:grid">
              {[
                { label: '15+ ans', sub: "d'expertise" },
                { label: '800+', sub: 'références catalogue' },
                { label: 'ISO 13485', sub: 'certifié' },
                { label: '50+', sub: 'partenaires' },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-white text-center">
                  <div className="text-3xl font-extrabold mb-1">{s.label}</div>
                  <div className="text-white/70 text-xs uppercase tracking-widest">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-4">
                Qui sommes-nous
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Expert des dispositifs médicaux au Maroc
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                ABC Synthèse est une entreprise marocaine spécialisée dans la distribution et la
                commercialisation de dispositifs médicaux. Nous répondons aux besoins des
                professionnels de santé du secteur public et privé — chirurgiens, anesthésistes,
                infirmiers et gestionnaires hospitaliers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre catalogue couvre l'orthopédie, la traumatologie, les équipements de bloc
                opératoire et les consommables stériles. Nous travaillons exclusivement avec des
                marques de renommée internationale, soumises à des contrôles qualité rigoureux.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900"
                  alt="ABC Synthèse – expertise médicale"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#1a8a7a] text-white p-5 rounded-2xl shadow-xl">
                <Stethoscope className="w-8 h-8 mb-2" />
                <div className="text-2xl font-extrabold">2008</div>
                <div className="text-xs text-white/80 uppercase tracking-widest">Année de création</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-3">
              Nos Fondements
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900">Mission & Vision</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#1a8a7a]/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#1a8a7a]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Fournir aux professionnels de santé marocains des solutions orthopédiques,
                traumatologiques et chirurgicales innovantes — sûres, réglementées et de haute
                qualité — pour améliorer la qualité de vie des patients et accompagner les équipes
                médicales au quotidien.
              </p>
            </div>
            <div className="bg-[#0d5c50] rounded-3xl p-10 shadow-sm text-white">
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
              <p className="text-white/85 leading-relaxed">
                Devenir le partenaire de référence des établissements de santé au Maroc et en
                Afrique, reconnu pour notre excellence technique, notre innovation constante, notre
                réactivité commerciale et notre engagement indéfectible envers la sécurité patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOMAINES D'ACTIVITÉ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-3">
              Portfolio
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900">Nos Domaines d'Activité</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domaines.map((d, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#1a8a7a]/30 hover:bg-[#f0faf8] transition-all hover:shadow-md group"
              >
                <div className="w-12 h-12 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#1a8a7a] transition-colors">
                  <d.icon className="w-6 h-6 text-[#1a8a7a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{d.name}</h4>
                  <p className="text-gray-500 text-sm">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Nos Valeurs"
            title="Ce qui nous guide chaque jour"
            description="Nos valeurs fondamentales définissent notre culture d'entreprise et notre manière de travailler avec nos partenaires."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className={`w-7 h-7 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-3">
                Qualité & Compliance
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Qualité et conformité garanties
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tous nos produits sont soumis à des contrôles qualité rigoureux et respectent les
                normes réglementaires les plus strictes. Notre engagement envers la qualité est
                attesté par de nombreuses certifications internationales.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#1a8a7a]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1a8a7a]" />
                    </div>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0d5c50] via-[#1a8a7a] to-[#2db5a5] rounded-3xl p-10 text-white">
              <Award className="w-16 h-16 mb-6 text-[#5dddc7]" />
              <h3 className="text-2xl font-bold mb-4">Excellence certifiée</h3>
              <p className="text-white/85 mb-8 leading-relaxed">
                Notre système de management de la qualité est certifié ISO 13485, garantissant que
                tous nos processus répondent aux exigences réglementaires internationales des
                dispositifs médicaux.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: '100%', sub: 'Produits certifiés CE' },
                  { val: 'ISO 13485', sub: 'Management qualité' },
                  { val: '0', sub: 'Rappel de produit' },
                  { val: '15+', sub: "Années de rigueur" },
                ].map((s, i) => (
                  <div key={i} className="text-center bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-extrabold">{s.val}</div>
                    <div className="text-xs text-white/70 mt-1 uppercase tracking-wider">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Notre Histoire"
            title="Une histoire d'excellence depuis 2008"
            description="Découvrez les moments clés qui ont façonné ABC Synthèse et construit notre leadership."
          />
          <div className="relative">
            {/* Central line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#1a8a7a]/15 hidden lg:block" />
            <div className="space-y-10">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 hidden lg:block" />
                  <div className="w-5 h-5 bg-[#1a8a7a] rounded-full border-4 border-white shadow-lg z-10 hidden lg:flex items-center justify-center shrink-0" />
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <span className="inline-block bg-[#1a8a7a]/10 text-[#1a8a7a] text-sm font-bold px-4 py-1 rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ADRESSE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-3">
                Nous trouver
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Notre siège social</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Siège Social & Showroom</div>
                    <div className="text-gray-500">Bd Massira, Etg 1, Maarif, Casablanca, Maroc</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Zone de couverture</div>
                    <div className="text-gray-500">Tout le territoire national marocain et Afrique subsaharienne</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl h-80">
              <iframe
                title="ABC Synthèse – Localisation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7!2d-7.6354!3d33.5950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMaarif%2C+Casablanca!5e0!3m2!1sfr!2sma!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
