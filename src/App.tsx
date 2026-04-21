import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AppProvider } from '@/context/AppContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

// Public Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Quote from '@/pages/Quote';
import Contact from '@/pages/Contact';

// Service Pages
import Orthopedie from '@/pages/services/Orthopedie';
import Traumatologie from '@/pages/services/Traumatologie';
import Maintenance from '@/pages/services/Maintenance';
import Formation from '@/pages/services/Formation';

// Admin Pages
import AdminLogin from '@/pages/admin/Login';
import AdminDashboard from '@/pages/admin/Dashboard';

// Layout component for public pages
function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Layout component for admin pages (no header/footer)
function AdminLayout() {
  return <Outlet />;
}

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Admin Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Route>

          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/services" element={<Maintenance />} />
            <Route path="/expertise" element={<Maintenance />} />
            <Route path="/services/orthopedie" element={<Orthopedie />} />
            <Route path="/services/traumatologie" element={<Traumatologie />} />
            <Route path="/services/maintenance" element={<Maintenance />} />
            <Route path="/services/formation" element={<Formation />} />
            <Route path="/produits" element={<Products />} />
            <Route path="/produits/:id" element={<ProductDetail />} />
            <Route path="/devis" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
