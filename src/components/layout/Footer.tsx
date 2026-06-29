import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Youtube,
  Facebook,
  Clock,
  ArrowUp,
} from 'lucide-react';
import logo from '@/assets/logo-dbc.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      {/* ── MAIN FOOTER ── */}
      <div className="bg-gradient-to-br from-[#00a49a] to-[#009990]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* ── Column 1 : Brand & Social ── */}
            <div className="space-y-6">
              <Link to="/" className="inline-block mb-2">
                <div className="bg-white rounded-xl px-4 py-3 inline-block">
                  <img src={logo} alt="ABC Synthèse" className="h-20 w-auto" />
                </div>
              </Link>
              <p className="text-white/80 text-sm leading-relaxed">
                Forte de plus de 15 ans d'expérience, ABC Synthèse offre des dispositifs médicaux de
                qualité certifiée ISO 13485. La satisfaction de nos partenaires de santé est au cœur de
                notre engagement.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Youtube className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* ── Column 2 : Nos Solutions ── */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                Nos Solutions
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Orthopédie', href: '/produits?category=orthopedie' },
                  { name: 'Traumatologie', href: '/produits?category=traumatologie' },
                  { name: 'Équipements Médicaux', href: '/produits?category=equipements' },
                  { name: 'Consommables', href: '/produits?category=consommables' },
                  { name: 'SAV & Maintenance', href: '/services/maintenance' },
                  { name: 'Formation Clinique', href: '/services/formation' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-white/80 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 3 : L'Entreprise ── */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                L'Entreprise
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'À propos de nous', href: '/a-propos' },
                  { name: 'Notre Histoire', href: '/a-propos' },
                  { name: 'Qualité & Certifications', href: '/a-propos' },
                  { name: 'Nos Partenaires', href: '/produits' },
                  { name: 'Recrutement', href: '/contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-white/80 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 4 : Contact & Accès ── */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                Contact & Accès
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#a3e2de] mt-0.5 shrink-0" />
                  <span className="text-white/80 text-sm leading-relaxed">
                    Bd Massira, Etg 1, Maarif,<br />
                    Casablanca 20000, Maroc.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#a3e2de] shrink-0" />
                  <a href="tel:+212522202020" className="text-white/80 text-sm hover:text-white transition-colors">
                    +212 5 22 20 20 20
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#a3e2de] shrink-0" />
                  <a href="mailto:contact@abcsynthese.ma" className="text-white/80 text-sm hover:text-white transition-colors">
                    contact@abcsynthese.ma
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#a3e2de] shrink-0" />
                  <span className="text-white/80 text-sm">
                    Lun - Ven : 09h00 - 18h00
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-xs">
                © {new Date().getFullYear()} ABC Synthèse - Tous droits réservés
              </p>
              
              <div className="flex gap-6 text-xs">
                <Link to="#" className="text-white/60 hover:text-white transition-colors">Mentions légales</Link>
                <Link to="#" className="text-white/60 hover:text-white transition-colors">Politique de confidentialité</Link>
                <Link to="#" className="text-white/60 hover:text-white transition-colors">CGV</Link>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-white/60 text-xs">
                  Réalisé par <span className="font-bold text-white/90">ABC SYNTHÈSE</span>
                </p>
                <button
                  onClick={scrollToTop}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors ml-4"
                  aria-label="Retour en haut"
                >
                  <ArrowUp className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
