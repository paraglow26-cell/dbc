import { useState } from 'react';
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
// Dashboard admin
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  LayoutDashboard, 
  Package, 
  FolderTree, 
  FileText, 
  MessageSquare, 
  Eye,
  LogOut
} from 'lucide-react';
import logo from '@/assets/logo-dbc.png';
import { useApp } from '@/context/AppContext';
import AdminProducts from './Products';
import AdminCategories from './Categories';
import AdminQuotes from './Quotes';
import AdminMessages from './Messages';

const menuItems = [
  { name: 'Tableau de bord', icon: LayoutDashboard, href: '/admin' },
  { name: 'Produits', icon: Package, href: '/admin/products' },
  { name: 'Catégories', icon: FolderTree, href: '/admin/categories' },
  { name: 'Demandes de devis', icon: FileText, href: '/admin/quotes' },
  { name: 'Messages', icon: MessageSquare, href: '/admin/messages' },
];

function DashboardHome() {
  const { products, quoteRequests, contactMessages } = useApp();
  
  const stats = [
    { 
      title: 'Produits', 
      value: products.length, 
      icon: Package, 
      color: 'bg-blue-500',
      trend: '+3 ce mois'
    },
    { 
      title: 'Demandes de devis', 
      value: quoteRequests.length, 
      icon: FileText, 
      color: 'bg-[#1a8a7a]',
      trend: `${quoteRequests.filter(r => r.status === 'pending').length} en attente`
    },
    { 
      title: 'Messages', 
      value: contactMessages.length, 
      icon: MessageSquare, 
      color: 'bg-purple-500',
      trend: 'Nouveaux'
    },
    { 
      title: 'Vues produits', 
      value: '1,234', 
      icon: Eye, 
      color: 'bg-orange-500',
      trend: '+12% ce mois'
    },
  ];

  const recentQuotes = quoteRequests.slice(0, 5);
  const recentMessages = contactMessages.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-[#1a8a7a] mt-1">{stat.trend}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Quotes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Dernières demandes de devis</CardTitle>
            <Link to="/admin/quotes" className="text-sm text-[#1a8a7a] hover:underline">
              Voir tout
            </Link>
          </CardHeader>
          <CardContent>
            {recentQuotes.length > 0 ? (
              <div className="space-y-4">
                {recentQuotes.map((quote) => (
                  <div key={quote.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{quote.name}</p>
                      <p className="text-sm text-gray-500">{quote.productName || 'Produit non spécifié'}</p>
                    </div>
                    <Badge 
                      variant={quote.status === 'pending' ? 'default' : 'secondary'}
                      className={quote.status === 'pending' ? 'bg-yellow-500' : ''}
                    >
                      {quote.status === 'pending' ? 'En attente' : quote.status === 'processed' ? 'Traité' : 'Terminé'}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Aucune demande de devis</p>
            )}
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Derniers messages</CardTitle>
            <Link to="/admin/messages" className="text-sm text-[#1a8a7a] hover:underline">
              Voir tout
            </Link>
          </CardHeader>
          <CardContent>
            {recentMessages.length > 0 ? (
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{message.name}</p>
                      <p className="text-sm text-gray-500 truncate max-w-[200px]">{message.subject}</p>
                    </div>
                    <span className="text-xs text-gray-400">
                      {new Date(message.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Aucun message</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { isAdmin, logout } = useApp();
  const [isSidebarOpen] = useState(true);

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className={`bg-white shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-6">
          <Link to="/" className="flex items-center justify-center w-full">
            <div className="w-40 h-16 flex items-center justify-center flex-shrink-0">
              <img src={logo} alt="DBC Logo" className="w-full h-full object-contain" />
            </div>
          </Link>
        </div>
        
        <nav className="px-4 pb-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-[#1a8a7a]/10 hover:text-[#1a8a7a] transition-colors mb-1"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isSidebarOpen && <span className="text-sm font-medium">{item.name}</span>}
            </Link>
          ))}
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full mt-8"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {isSidebarOpen && <span className="text-sm font-medium">Déconnexion</span>}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Tableau de bord</h1>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-[#1a8a7a] hover:underline">
              Voir le site
            </Link>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/products" element={<AdminProducts />} />
            <Route path="/categories" element={<AdminCategories />} />
            <Route path="/quotes" element={<AdminQuotes />} />
            <Route path="/messages" element={<AdminMessages />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
