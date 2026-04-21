import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Award,
  CheckCircle2,
  Stethoscope,
  MapPin,
  Building2,
  Bone,
  Activity,
  Microscope,
  Cpu,
} from 'lucide-react';
import SectionHeader from '@/components/ui-custom/SectionHeader';
import presidentImg from '@/assets/president.jpg';

const values = [
  {
    icon: Shield,
    title: 'Qualité',
    description: 'Certification CE et conformité ISO 13485 pour tous nos produits. Contrôle qualité rigoureux à chaque étape du processus.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Cpu,
    title: 'Innovation',
    description: 'Pionnier dans l\'introduction de la robotique chirurgicale Cuvis Joint et des technologies d\'IA au Maroc.',
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
  'Certification ISO 13485 : Système de management de la qualité MD',
  'Conformité rigoureuse aux standards CE (MDR 2017/745)',
  'Autorisation du Ministère de la Santé (DMP)',
  'Traçabilité totale informatisée des implants',
  'Maintenance préventive certifiée constructeur',
];

const timeline = [
  {
    year: '2016',
    title: 'Fondation d\'ABC Synthèse',
    description: 'Création de l\'entreprise avec une vision claire : moderniser l\'ostéosynthèse au Maroc.',
  },
  {
    year: '2018',
    title: 'Déploiement Opérationnel',
    description: 'Démarrage effectif à Fès. Déploiement des gammes traumatologie et pédiatrie.',
  },
  {
    year: '2021',
    title: 'Spécialisation Chirurgicale',
    description: 'Intégration des spécialités Arthroscopie et Arthroplastie avec des partenaires mondiaux.',
  },
  {
    year: '2024',
    title: 'Robotique Cuvis Joint',
    description: 'Introduction du premier robot chirurgical de coupe active au Maroc en partenariat avec Curexo.',
  },
  {
    year: '2025',
    title: 'Hub Stratégique Casablanca',
    description: 'Inauguration du nouveau siège national et déploiement de la plateforme ABC TRAINING.',
  },
  {
    year: '2026',
    title: 'Leader de l\'Ère Digitale',
    description: 'ABC Synthèse devient l\'acteur clé de la chirurgie assistée par ordinateur au Royaume.',
  },
];

const domaines = [
  { icon: Bone, name: 'Arthroplastie', desc: 'Prothèses totales hanche, genou, épaule (Permedica)' },
  { icon: Activity, name: 'Traumatologie', desc: 'Plaques, vis, clous intramédullaires haut de gamme' },
  { icon: Microscope, name: 'Arthroscopie', desc: 'Médecine sportive et réparation ligamentaire' },
  { icon: Cpu, name: 'Neurochirurgie', desc: 'Implants rachidiens et cages intersomatiques' },
  { icon: Shield, name: 'Chirurgie Thoracique', desc: 'Stabilisation costale et implants sternaux' },
  { icon: Stethoscope, name: 'Consommable', desc: 'Sets opératoires et drapage stérile certifié' },
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
                Depuis 2016, ABC Synthèse accompagne les chirurgiens marocains avec des solutions 
                médicales d'excellence. Notre slogan "Supporting Bones" incarne notre mission de 
                restaurer la mobilité à travers l'innovation technologique.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 hidden lg:grid">
              {[
                { label: '90+', sub: 'Collaborateurs' },
                { label: '12', sub: 'Antennes Nationales' },
                { label: '4', sub: 'Entrepôts' },
                { label: 'ISO 13485', sub: 'Certifié' },
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

      {/* ── MOT DU PRÉSIDENT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={presidentImg}
                  alt="Dr. Badreddine SABAI REGRAGUI"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#1a8a7a] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-xl font-bold">Dr. B. SABAI REGRAGUI</div>
                <div className="text-xs text-white/80 uppercase tracking-widest">Président Fondateur</div>
              </div>
            </div>
            <div>
              <span className="inline-block text-[#1a8a7a] text-xs font-bold uppercase tracking-widest mb-4">
                Vision de la Direction
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight italic">
                "Plus qu'un distributeur, un partenaire clinique."
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  ABC Synthèse est née d'une vision claire : devenir le partenaire privilégié de la communauté chirurgicale au Maroc en lui offrant des outils de classe mondiale.
                </p>
                <p className="font-medium text-gray-900">
                  Notre expertise réside dans notre capacité à accompagner le chirurgien au cœur de son métier grâce à un support technique irréprochable et une formation continue via ABC TRAINING.
                </p>
                <p>
                  En introduisant la robotique Cuvis Joint, nous confirmons notre engagement à effacer la barrière entre l'innovation internationale et le bloc opératoire marocain.
                </p>
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
                Rendre accessible aux praticiens marocains les technologies médicales les plus innovantes (Robotique, Navigation) pour améliorer la précision chirurgicale et les résultats cliniques des patients.
              </p>
            </div>
            <div className="bg-[#0d5c50] rounded-3xl p-10 shadow-sm text-white">
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
              <p className="text-white/85 leading-relaxed">
                Devenir le catalyseur de la transformation chirurgicale au Maroc et en Afrique, 
                reconnu pour notre excellence technique et notre plateforme de formation ABC TRAINING.
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
            description="L'excellence, l'innovation et la proximité terrain sont les piliers de notre culture d'entreprise."
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
                Tous nos produits sont soumis à des contrôles qualité rigoureux. Notre engagement 
                envers la sécurité patient est attesté par la certification ISO 13485.
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
            <div className="bg-gradient-to-br from-[#0d5c50] via-[#1a8a7a] to-[#2db5a5] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Award className="w-16 h-16 mb-6 text-[#5dddc7]" />
              <h3 className="text-2xl font-bold mb-4">Excellence certifiée</h3>
              <p className="text-white/85 mb-8 leading-relaxed">
                Notre système de management est audité selon les standards internationaux, 
                garantissant une sécurité maximale pour les établissements de santé.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: '100%', sub: 'Traçabilité' },
                  { val: 'ISO 13485', sub: 'Certifié' },
                  { val: '12', sub: 'Antennes' },
                  { val: '4', sub: "Entrepôts" },
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
            title="Une ascension guidée par l'innovation"
            description="Découvrez les étapes clés qui ont fait d'ABC Synthèse le leader technologique actuel."
          />
          <div className="relative mt-12">
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
                Réseau National
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Maillage Territorial</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Siège Social Stratégique</div>
                    <div className="text-gray-500">Lot N° 35, Zone Industrielle, Route d'El Jadida, Casablanca, Maroc</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#1a8a7a]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">12 Antennes de Proximité</div>
                    <div className="text-gray-500">Expertise locale et logistique d'urgence assurées sur tout le Royaume.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl h-80">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                alt="ABC Synthèse – Casablanca Hub"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
