export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  country: string;
  brokerageType: 'starter' | 'pro' | 'not-decided';
  setupBudget?: string;
  monthlyBudget?: string;
  timeline?: string;
  experience?: string;
  currentTraders?: string;
  message: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  source: string;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export interface FormField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'radio' | 'checkbox';
  required: boolean;
  options?: string[];
  placeholder?: string;
  order: number;
}

export interface ContactForm {
  id: string;
  name: string;
  title: string;
  description: string;
  fields: FormField[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Admin {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'super-admin';
  createdAt: string;
}

export interface Settings {
  id: string;
  calendlyLink: string;
  whatsappNumber: string;
  whatsappMessage: string;
  facebookPixelId: string;
  facebookAccessToken: string;
  updatedAt: string;
}
