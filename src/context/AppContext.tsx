import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Product, QuoteRequest, ContactMessage } from '@/types';
import { products as initialProducts } from '@/data/products';

interface AppContextType {
  // Products
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  
  // Quote Requests
  quoteRequests: QuoteRequest[];
  addQuoteRequest: (request: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>) => void;
  updateQuoteStatus: (id: string, status: QuoteRequest['status']) => void;
  deleteQuoteRequest: (id: string) => void;
  
  // Contact Messages
  contactMessages: ContactMessage[];
  addContactMessage: (message: Omit<ContactMessage, 'id' | 'createdAt'>) => void;
  deleteContactMessage: (id: string) => void;
  
  // Auth
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// URL de votre API sur cPanel (à configurer dans votre .env ou ici directement)
const API_BASE_URL = import.meta.env.VITE_API_URL || ''; 

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('dbc_is_admin') === 'true');
  const [isLoading, setIsLoading] = useState(true);

  // Chargement initial des données
  useEffect(() => {
    const fetchData = async () => {
      if (!API_BASE_URL) {
        // Mode LocalStorage si pas d'API
        const savedProductsRaw = localStorage.getItem('dbc_products');
        let productsToSet = initialProducts;

        if (savedProductsRaw) {
          try {
            const saved = JSON.parse(savedProductsRaw);
            if (Array.isArray(saved) && saved.length > 0) {
              productsToSet = saved;
            }
          } catch (e) {
            console.error("Failed to parse saved products", e);
          }
        }
        
        setProducts(productsToSet);
        
        const savedQuotes = localStorage.getItem('dbc_quotes');
        setQuoteRequests(savedQuotes ? JSON.parse(savedQuotes) : []);
        
        const savedMessages = localStorage.getItem('dbc_messages');
        setContactMessages(savedMessages ? JSON.parse(savedMessages) : []);
        
        setIsLoading(false);
        return;
      }

      try {
        const [pRes, qRes, mRes] = await Promise.all([
          fetch(`${API_BASE_URL}/products.php`),
          isAdmin ? fetch(`${API_BASE_URL}/quotes.php`) : Promise.resolve(null),
          isAdmin ? fetch(`${API_BASE_URL}/messages.php`) : Promise.resolve(null)
        ]);

        const pData = await pRes.json();
        setProducts((Array.isArray(pData) ? pData : initialProducts).map(p => ({
          ...p,
          createdAt: p.createdAt || p.created_at
        })));

        if (qRes) {
          const qData = await qRes.json();
          setQuoteRequests((Array.isArray(qData) ? qData : []).map(q => ({
            ...q,
            createdAt: q.createdAt || q.created_at
          })));
        }

        if (mRes) {
          const mData = await mRes.json();
          setContactMessages((Array.isArray(mData) ? mData : []).map(m => ({
            ...m,
            createdAt: m.createdAt || m.created_at
          })));
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isAdmin]);

  // Sauvegarde LocalStorage en mode fallback
  useEffect(() => {
    if (!API_BASE_URL && !isLoading) {
      localStorage.setItem('dbc_products', JSON.stringify(products));
    }
  }, [products, isLoading]);

  useEffect(() => {
    localStorage.setItem('dbc_is_admin', isAdmin.toString());
  }, [isAdmin]);

  // Actions Produits
  const addProduct = useCallback(async (product: Product) => {
    setProducts(prev => {
      const newProducts = [...prev, product];
      if (API_BASE_URL) {
        fetch(`${API_BASE_URL}/products.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product)
        }).then(res => res.json())
          .then(data => {
            if (!data.success) console.warn("L'API MySQL n'a pas pu créer le produit:", data.error);
          })
          .catch(err => console.error("Erreur réseau API addProduct:", err));
      }
      return newProducts;
    });
  }, []);

  const updateProduct = useCallback(async (id: string, updates: Partial<Product>) => {
    setProducts(prev => {
      const newProducts = prev.map(p => p.id === id ? { ...p, ...updates } : p);
      if (API_BASE_URL) {
        const updatedProduct = newProducts.find(p => p.id === id);
        if (updatedProduct) {
          fetch(`${API_BASE_URL}/products.php?id=${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedProduct)
          }).then(res => res.json())
            .then(data => {
              if (!data.success) console.warn("L'API MySQL n'a pas pu enregistrer les changements:", data.error);
            })
            .catch(err => console.error("Erreur réseau API:", err));
        }
      }
      return newProducts;
    });
  }, []);

  const deleteProduct = useCallback(async (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    if (API_BASE_URL) {
      try {
        await fetch(`${API_BASE_URL}/products.php?id=${id}`, { method: 'DELETE' });
      } catch (error) {
        console.error("Erreur API deleteProduct:", error);
      }
    }
  }, []);

  // Actions Devis
  const addQuoteRequest = useCallback(async (request: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>) => {
    const newRequest: QuoteRequest = {
      ...request,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    setQuoteRequests(prev => [newRequest, ...prev]);
    if (API_BASE_URL) {
      try {
        await fetch(`${API_BASE_URL}/quotes.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newRequest)
        });
      } catch (error) {
        console.error("Erreur API addQuoteRequest:", error);
      }
    }
  }, []);

  const updateQuoteStatus = useCallback((id: string, status: QuoteRequest['status']) => {
    setQuoteRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
    // Optionnel: Ajouter un endpoint API pour changer le statut
  }, []);

  const deleteQuoteRequest = useCallback((id: string) => {
    setQuoteRequests(prev => prev.filter(r => r.id !== id));
  }, []);

  // Actions Messages
  const addContactMessage = useCallback(async (message: Omit<ContactMessage, 'id' | 'createdAt'>) => {
    const newMessage: ContactMessage = {
      ...message,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setContactMessages(prev => [newMessage, ...prev]);
    if (API_BASE_URL) {
      try {
        await fetch(`${API_BASE_URL}/messages.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newMessage)
        });
      } catch (error) {
        console.error("Erreur API addContactMessage:", error);
      }
    }
  }, []);

  const deleteContactMessage = useCallback((id: string) => {
    setContactMessages(prev => prev.filter(m => m.id !== id));
  }, []);

  // Auth
  const login = useCallback((email: string, password: string) => {
    if (email === 'admin@abcsynthese.ma' && password === 'admin123') {
      setIsAdmin(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAdmin(false);
  }, []);

  return (
    <AppContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      quoteRequests,
      addQuoteRequest,
      updateQuoteStatus,
      deleteQuoteRequest,
      contactMessages,
      addContactMessage,
      deleteContactMessage,
      isAdmin,
      login,
      logout
    }}>
      {!isLoading && children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
