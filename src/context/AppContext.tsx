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

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Initialize from localStorage or fallback to defaults
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('dbc_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });
  
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>(() => {
    const saved = localStorage.getItem('dbc_quotes');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('dbc_messages');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('dbc_is_admin') === 'true';
  });

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('dbc_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('dbc_quotes', JSON.stringify(quoteRequests));
  }, [quoteRequests]);

  useEffect(() => {
    localStorage.setItem('dbc_messages', JSON.stringify(contactMessages));
  }, [contactMessages]);

  useEffect(() => {
    localStorage.setItem('dbc_is_admin', isAdmin.toString());
  }, [isAdmin]);

  // Product CRUD
  const addProduct = useCallback((product: Product) => {
    setProducts(prev => [...prev, product]);
  }, []);

  const updateProduct = useCallback((id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  }, []);

  const deleteProduct = useCallback((id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  }, []);

  // Quote Request CRUD
  const addQuoteRequest = useCallback((request: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>) => {
    const newRequest: QuoteRequest = {
      ...request,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    setQuoteRequests(prev => [newRequest, ...prev]);
  }, []);

  const updateQuoteStatus = useCallback((id: string, status: QuoteRequest['status']) => {
    setQuoteRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  }, []);

  const deleteQuoteRequest = useCallback((id: string) => {
    setQuoteRequests(prev => prev.filter(r => r.id !== id));
  }, []);

  // Contact Messages
  const addContactMessage = useCallback((message: Omit<ContactMessage, 'id' | 'createdAt'>) => {
    const newMessage: ContactMessage = {
      ...message,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setContactMessages(prev => [newMessage, ...prev]);
  }, []);

  const deleteContactMessage = useCallback((id: string) => {
    setContactMessages(prev => prev.filter(m => m.id !== id));
  }, []);

  // Auth
  const login = useCallback((email: string, password: string) => {
    if (email === 'admin@dbcsynthese.com' && password === 'admin123') {
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
      {children}
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
