import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook } from 'lucide-react';

import logo from '@/assets/logo-dbc.png';

const footerLinks = {
  services: [
    { name: 'Orthopédie', href: '/services/orthopedie' },
    { name: 'Traumatologie', href: '/services/traumatologie' },
    { name: 'Prothèses', href: '/produits?category=orthopedie' },
    { name: 'Implants', href: '/produits?category=orthopedie' },
  ],
  company: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Nos produits', href: '/produits' },
    { name: 'Demander un devis', href: '/devis' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Mentions légales', href: '#' },
    { name: 'Politique de confidentialité', href: '#' },
    { name: 'CGV', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block bg-white p-2 rounded-xl">
              <img src={logo} alt="ABC Synthèse Logo" className="h-16 w-auto" />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              ABC Synthèse est votre partenaire de confiance en solutions orthopédiques 
              et traumatologiques. Nous fournissons des implants et prothèses de haute 
              qualité pour les professionnels de santé.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1a8a7a] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1a8a7a] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#1a8a7a] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#1a8a7a] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1a8a7a] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Bd Massira, Etg 1<br />
                  Maarif, Casablanca, Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1a8a7a] flex-shrink-0" />
                <span className="text-gray-400 text-sm">+212 5 22 20 20 20</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1a8a7a] flex-shrink-0" />
                <span className="text-gray-400 text-sm">contact@abcsynthese.ma</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#1a8a7a] flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Lun - Ven: 8h30 - 18h00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ABC Synthèse. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-500 hover:text-[#1a8a7a] transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
