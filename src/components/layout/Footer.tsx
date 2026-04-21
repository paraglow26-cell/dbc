import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Facebook,
  Youtube,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo-dbc.png';

const solutions = [
  { name: 'Orthopédie', href: '/produits?category=orthopedie' },
  { name: 'Traumatologie', href: '/produits?category=traumatologie' },
  { name: 'Équipements Médicaux', href: '/produits?category=equipements' },
  { name: 'Consommables', href: '/produits?category=consommables' },
  { name: 'SAV & Maintenance', href: '/services/maintenance' },
  { name: 'Formation Clinique', href: '/services/formation' },
];

const entreprise = [
  { name: 'À propos de nous', href: '/a-propos' },
  { name: 'Notre Histoire', href: '/a-propos' },
  { name: 'Qualité & Certifications', href: '/a-propos' },
  { name: 'Nos Partenaires', href: '/a-propos' },
  { name: 'Recrutement', href: '/contact' },
];

const legal = [
  { name: 'Mentions légales', href: '#' },
  { name: 'Politique de confidentialité', href: '#' },
  { name: 'CGV', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#071c19] text-white">
      {/* Newsletter Band */}
      <div className="bg-[#0d5c50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Abonnez-vous à notre newsletter
              </h3>
              <p className="text-white/60 text-sm">
                Recevez nos dernières actualités, nouveautés produits et offres exclusives.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-2 max-w-md">
              <Input
                placeholder="votre@email.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-11 flex-1"
              />
              <Button className="bg-[#5dddc7] text-[#0d5c50] hover:bg-white font-bold h-11 px-6 shrink-0">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block bg-white p-3 rounded-2xl">
              <img src={logo} alt="ABC Synthèse" className="h-12 w-auto" />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed">
              Forte de plus de 15 ans d'expérience, ABC Synthèse offre des dispositifs médicaux de
              qualité certifiée ISO 13485. La satisfaction de nos partenaires de santé est au
              cœur de notre engagement.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1a8a7a] hover:border-[#1a8a7a] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Nos Solutions
            </h4>
            <ul className="space-y-3">
              {solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-white/55 hover:text-[#5dddc7] transition-colors text-sm group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#5dddc7]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              L'Entreprise
            </h4>
            <ul className="space-y-3">
              {entreprise.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-white/55 hover:text-[#5dddc7] transition-colors text-sm group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#5dddc7]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Contact & Accès
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#5dddc7] mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm leading-relaxed">
                  Bd Massira, Etg 1, Maarif,<br />Casablanca 20000, Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#5dddc7] shrink-0" />
                <a href="tel:+212522202020" className="text-white/55 text-sm hover:text-[#5dddc7] transition-colors">
                  +212 5 22 20 20 20
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#5dddc7] shrink-0" />
                <a href="mailto:contact@abcsynthese.ma" className="text-white/55 text-sm hover:text-[#5dddc7] transition-colors">
                  contact@abcsynthese.ma
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#5dddc7] shrink-0" />
                <span className="text-white/55 text-sm">Lun–Ven : 09h00 – 18h00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/35 text-xs">
              © {new Date().getFullYear()} ABC Synthèse – Tous droits réservés
            </p>
            <div className="flex gap-6">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/35 hover:text-[#5dddc7] transition-colors text-xs"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-white/25 text-xs">
              Réalisé par{' '}
              <span className="text-white/40 font-bold uppercase tracking-widest">ABC Synthèse</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
