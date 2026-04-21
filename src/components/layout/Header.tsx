import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-dbc.png';

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'ABC Synthèse', href: '/a-propos' },
  {
    name: 'Nos Solutions',
    href: '/produits',
    children: [
      { name: 'Orthopédie', href: '/produits?category=orthopedie', desc: 'Prothèses & implants' },
      { name: 'Traumatologie', href: '/produits?category=traumatologie', desc: 'Plaques, vis & fixateurs' },
      { name: 'Équipements Médicaux', href: '/produits?category=equipements', desc: 'Blocs opératoires' },
      { name: 'Consommables', href: '/produits?category=consommables', desc: 'Stériles & certifiés' },
    ],
  },
  {
    name: 'Services',
    href: '/services/maintenance',
    children: [
      { name: 'SAV & Maintenance', href: '/services/maintenance', desc: 'Support technique terrain' },
      { name: 'Formation Clinique', href: '/services/formation', desc: 'Programmes experts' },
      { name: 'Devis & Commandes', href: '/devis', desc: 'Réponse rapide' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // 150ms delay to help bridge the gap
    setLeaveTimeout(timeout);
  };
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href.split('?')[0]);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      {/* Top Bar */}
      <div className="bg-[#0d5c50] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+212522202020" className="flex items-center gap-1.5 hover:text-[#5dddc7] transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +212 5 22 20 20 20
            </a>
            <a href="mailto:contact@abcsynthese.ma" className="flex items-center gap-1.5 hover:text-[#5dddc7] transition-colors">
              <Mail className="w-3.5 h-3.5" />
              contact@abcsynthese.ma
            </a>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span>Lun–Ven : 09h00 – 18h00</span>
            <span className="w-px h-4 bg-white/20" />
            <span>Casablanca, Maroc</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 bg-white ${
          isScrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center" style={{ height: isScrolled ? '68px' : '80px', transition: 'height 0.3s' }}>
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
              onClick={() => location.pathname === '/' && window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src={logo}
                alt="ABC Synthèse"
                style={{ height: isScrolled ? '52px' : '62px', width: 'auto', transition: 'height 0.3s' }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.name)}
                  onMouseLeave={() => item.children && handleMouseLeave()}
                >
                  {item.children ? (
                    <>
                      <button
                        className={`flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          isActive(item.href)
                            ? 'text-[#1a8a7a] bg-[#1a8a7a]/8'
                            : 'text-gray-700 hover:text-[#1a8a7a] hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {/* Mega Dropdown */}
                      {openDropdown === item.name && (
                        <div className="absolute top-full left-0 pt-2 bg-transparent min-w-[260px] z-50">
                          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-[#f0faf8] group transition-colors"
                            >
                              <ChevronRight className="w-4 h-4 text-[#1a8a7a] mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div>
                                <div className="text-sm font-semibold text-gray-800 group-hover:text-[#1a8a7a] transition-colors">
                                  {child.name}
                                </div>
                                {'desc' in child && (
                                  <div className="text-xs text-gray-400 mt-0.5">{(child as any).desc}</div>
                                )}
                              </div>
                            </Link>
                          ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        isActive(item.href)
                          ? 'text-[#1a8a7a] bg-[#1a8a7a]/8'
                          : 'text-gray-700 hover:text-[#1a8a7a] hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                onClick={() => navigate('/devis')}
                className="bg-[#1a8a7a] hover:bg-[#147a6a] text-white font-semibold px-6 h-10 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                Demander un devis
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                        className="flex w-full items-center justify-between px-4 py-3 rounded-xl font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${mobileExpanded === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileExpanded === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:text-[#1a8a7a] hover:bg-[#f0faf8] transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <ChevronRight className="w-4 h-4 text-[#1a8a7a]" />
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-[#1a8a7a] bg-[#1a8a7a]/8'
                          : 'text-gray-800 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                onClick={() => { navigate('/devis'); setMobileMenuOpen(false); }}
                className="w-full bg-[#1a8a7a] hover:bg-[#147a6a] text-white font-semibold mt-3 rounded-xl"
              >
                Demander un devis
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
