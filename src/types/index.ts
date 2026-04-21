export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  category: 'orthopedie' | 'traumatologie' | 'equipements' | 'consommables';
  subcategory: string;
  images: string[];
  specifications: Record<string, string>;
  features: string[];
  technicalSheet?: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: 'orthopedie' | 'traumatologie' | 'equipements' | 'consommables';
  description: string;
  icon: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  productId?: string;
  productName?: string;
  message: string;
  status: 'pending' | 'processed' | 'completed';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin';
}
