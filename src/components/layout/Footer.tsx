import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Youtube, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import logo from '@/assets/logo-dbc.png';

const footerLinks = {
  solutions: [
    { name: 'Orthopédie & Traumato', href: '/produits?category=orthopedie' },
    { name: 'Équipements Médicaux', href: '/produits?category=equipements' },
    { name: 'Consommables', href: '/produits?category=consommables' },
    { name: 'SAV & Maintenance', href: '/expertise' },
  ],
  company: [
    { name: 'À propos de nous', href: '/a-propos' },
    { name: 'Qualité & Compliance', href: '/expertise' },
    { name: 'Nos Partenaires', href: '/#partenaires' },
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
    <footer className="bg-[#0a362f] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2">Restez informé</h3>
              <p className="text-white/60">Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres.</p>
            </div>
            <div className="flex w-full lg:w-auto gap-2">
              <Input 
                placeholder="votre@email.com" 
                className="bg-white/5 border-white/20 text-white placeholder:text-white/30 h-12 w-full lg:w-80"
              />
              <Button className="bg-[#a8f0e8] text-[#0d5c50] hover:bg-white h-12 px-8 font-bold">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <Link to="/" className="inline-block bg-white p-3 rounded-2xl shadow-lg">
              <img src={logo} alt="ABC Synthèse Logo" className="h-14 w-auto" />
            </Link>

            <p className="text-white/70 text-sm leading-relaxed">
              Forte de plus de 15 ans d'expérience, ABC Synthèse offre des dispositifs et des services médicaux de qualité, certifiés ISO 13485. Nous mettons systématiquement la satisfaction de nos clients au centre de notre attention.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#a8f0e8] hover:text-[#0d5c50] transition-all border border-white/10"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#a8f0e8] hover:text-[#0d5c50] transition-all border border-white/10"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#a8f0e8] hover:text-[#0d5c50] transition-all border border-white/10"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-[#a8f0e8] uppercase tracking-wider text-xs">Nos Solutions</h3>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-[#a8f0e8] transition-colors text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#a8f0e8] transition-all mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-[#a8f0e8] uppercase tracking-wider text-xs">L'Entreprise</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-[#a8f0e8] transition-colors text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#a8f0e8] transition-all mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-[#a8f0e8] uppercase tracking-wider text-xs">Contact & Accès</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/70">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10"><MapPin className="w-5 h-5 text-[#a8f0e8]" /></div>
                <div className="text-sm">
                  <span className="block font-bold text-white mb-1">Siège Social & Showroom</span>
                  Bd Massira, Etg 1, Maarif, Casablanca, Maroc
                </div>
              </li>
              <li className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10"><Phone className="w-5 h-5 text-[#a8f0e8]" /></div>
                <div className="text-sm font-bold text-white tracking-widest">+212 5 22 20 20 20</div>
              </li>
              <li className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10"><Mail className="w-5 h-5 text-[#a8f0e8]" /></div>
                <div className="text-sm font-medium">contact@abcsynthese.ma</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} ABC Synthèse – Leader des dispositifs médicaux au Maroc.
            </p>
            <div className="flex gap-8">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} to={link.href} className="text-white/40 hover:text-[#a8f0e8] transition-colors text-xs font-medium">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 text-white/40 text-xs">
              Powered by <span className="text-white/60 font-bold uppercase tracking-widest">ABC Tech</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
