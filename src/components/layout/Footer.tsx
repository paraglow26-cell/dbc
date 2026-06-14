import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  Linkedin,
  Youtube,
  ArrowUp,
} from 'lucide-react';
import logo from '@/assets/logo-dbc.png';

const suivezNous = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
];

const liens = [
  { name: 'Blog', href: '#' },
  { name: 'Wikipédia', href: '#' },
  { name: 'Termes et conditions', href: '#' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      {/* ── MAIN FOOTER ── */}
      <div className="bg-gradient-to-br from-[#00a49a] to-[#009990]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

            {/* ── Column 1 : Brand ── */}
            <div className="space-y-5">
              <Link to="/" className="inline-block">
                <div className="bg-white/95 rounded-lg px-4 py-3 inline-block">
                  <img src={logo} alt="ABC Synthèse" className="h-12 w-auto" />
                </div>
              </Link>
              <p className="text-white/80 text-sm leading-relaxed">
                Forte de plus de 15 ans d'expérience et de ses équipes
                spécialisées, la société ABC Synthèse offre des dispositifs
                et des services médicaux de qualité.
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Certifiés ISO 9001 V 2015 et ISO 13485 V 2016, nous mettons
                systématiquement la satisfaction de nos clients au centre de
                notre attention.
              </p>
              <Link
                to="/a-propos"
                className="inline-block text-white font-bold text-sm italic hover:underline"
              >
                Lire la suite
              </Link>
            </div>

            {/* ── Column 2 : Coordonnées ── */}
            <div>
              <h4 className="text-white font-bold text-base uppercase tracking-wider mb-8">
                Nos Coordonnées
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/85 text-sm leading-relaxed">
                    Bd Massira, Etg 1, Maarif<br />
                    Casablanca 20000, Maroc
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/85 text-sm leading-relaxed">
                    <span className="font-semibold">Adresse usine :</span> 30, Rue Abdelhamid Ibnou
                    Badis Ain Sebaa Casablanca
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <a href="tel:+212522909017" className="text-white/85 text-sm hover:text-white transition-colors">
                    +212 5 22 90 90 17
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                    <Printer className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/85 text-sm">
                    +212 5 22 90 90 16
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/85 text-sm">
                    Carrières seulement : <a href="mailto:rh@abcsynthese.ma" className="hover:text-white transition-colors">rh@abcsynthese.ma</a>
                  </span>
                </li>
              </ul>
            </div>

            {/* ── Column 3 : Suivez-nous ── */}
            <div>
              <h4 className="text-white font-bold text-base uppercase tracking-wider mb-8">
                Suivez-nous
              </h4>
              <ul className="space-y-4">
                {suivezNous.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/85 hover:text-white transition-colors text-sm group"
                    >
                      <div className="w-8 h-8 rounded-md bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      {item.name}
                    </a>
                  </li>
                ))}
                {liens.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/85 hover:text-white transition-colors text-sm pl-11"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-white/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                {new Date().getFullYear()} © Copyright –{' '}
                <span className="font-bold text-white">DBC SYNTHÈSE</span>
              </p>
              <div className="flex items-center gap-4">
                <p className="text-white/70 text-sm">
                  Réalisé par{' '}
                  <span className="font-bold text-white">ABC Synthèse</span>
                </p>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-white/15 hover:bg-white/25 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Retour en haut"
                >
                  <ArrowUp className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
