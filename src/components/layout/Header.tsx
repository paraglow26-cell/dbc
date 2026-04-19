import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import logo from '@/assets/logo-dbc.png';

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/a-propos' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Orthopédie', href: '/services/orthopedie' },
      { name: 'Traumatologie', href: '/services/traumatologie' },
    ],
  },
  { name: 'Produits', href: '/produits' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white shadow-sm'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#1a8a7a] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +212 5 22 20 20 20
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <span>contact@abcsynthese.ma</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-20' : 'h-24'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="ABC Synthèse Logo" 
              className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'} w-auto`} 
            />
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-[#1a8a7a] bg-[#1a8a7a]/10'
                            : 'text-gray-700 hover:text-[#1a8a7a] hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link
                            to={child.href}
                            className="cursor-pointer"
                          >
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-[#1a8a7a] bg-[#1a8a7a]/10'
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
          <div className="hidden lg:block">
            <Button
              onClick={() => navigate('/devis')}
              className="bg-[#1a8a7a] hover:bg-[#147a6a] text-white font-medium px-6"
            >
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div className="space-y-1">
                    <span className="block px-4 py-2 font-medium text-gray-900">
                      {item.name}
                    </span>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-8 py-2 text-sm text-gray-600 hover:text-[#1a8a7a] hover:bg-gray-50 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-4 py-2 rounded-lg font-medium ${
                      isActive(item.href)
                        ? 'text-[#1a8a7a] bg-[#1a8a7a]/10'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button
              onClick={() => {
                navigate('/devis');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#1a8a7a] hover:bg-[#147a6a] text-white font-medium mt-4"
            >
              Demander un devis
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
