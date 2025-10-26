import fs from 'fs';
import path from 'path';
import { Lead, ContactForm, Admin, Settings } from './types';

const dataDir = path.join(process.cwd(), 'data');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const leadsFile = path.join(dataDir, 'leads.json');
const formsFile = path.join(dataDir, 'forms.json');
const adminsFile = path.join(dataDir, 'admins.json');
const settingsFile = path.join(dataDir, 'settings.json');

// Initialize files if they don't exist
const initializeFiles = () => {
  if (!fs.existsSync(leadsFile)) {
    fs.writeFileSync(leadsFile, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(formsFile)) {
    const defaultForm: ContactForm = {
      id: 'default-form',
      name: 'Main Contact Form',
      title: 'Book Your Free Strategy Call',
      description: 'Fill out the form below and our team will contact you within 24 hours.',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      fields: [
        { id: '1', name: 'firstName', label: 'First Name', type: 'text', required: true, order: 1, placeholder: 'John' },
        { id: '2', name: 'lastName', label: 'Last Name', type: 'text', required: true, order: 2, placeholder: 'Doe' },
        { id: '3', name: 'email', label: 'Email Address', type: 'email', required: true, order: 3, placeholder: 'john@example.com' },
        { id: '4', name: 'phone', label: 'Phone Number', type: 'tel', required: true, order: 4, placeholder: '+1 234 567 8900' },
        { id: '5', name: 'company', label: 'Company Name', type: 'text', required: false, order: 5, placeholder: 'Your Company' },
        { id: '6', name: 'country', label: 'Country', type: 'text', required: true, order: 6, placeholder: 'United States' },
        { 
          id: '7', 
          name: 'brokerageType', 
          label: 'Brokerage Package', 
          type: 'select', 
          required: true, 
          order: 7,
          options: ['Starter Brokerage', 'Pro Brokerage', 'Not Sure Yet']
        },
        { id: '8', name: 'message', label: 'Message', type: 'textarea', required: true, order: 8, placeholder: 'Tell us about your brokerage goals...' },
      ],
    };
    fs.writeFileSync(formsFile, JSON.stringify([defaultForm], null, 2));
  }
  if (!fs.existsSync(adminsFile)) {
    fs.writeFileSync(adminsFile, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(settingsFile)) {
    const defaultSettings: Settings = {
      id: 'settings',
      calendlyLink: 'https://calendly.com/your-link',
      whatsappNumber: '+923184451469',
      whatsappMessage: 'Hello! I just submitted a form on your website and would like to learn more about your brokerage solutions.',
      facebookPixelId: '',
      facebookAccessToken: '',
      updatedAt: new Date().toISOString(),
    };
    fs.writeFileSync(settingsFile, JSON.stringify(defaultSettings, null, 2));
  }
};

initializeFiles();

// Leads CRUD
export const getLeads = (): Lead[] => {
  const data = fs.readFileSync(leadsFile, 'utf-8');
  return JSON.parse(data);
};

export const getLeadById = (id: string): Lead | null => {
  const leads = getLeads();
  return leads.find(lead => lead.id === id) || null;
};

export const createLead = (lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>): Lead => {
  const leads = getLeads();
  const newLead: Lead = {
    ...lead,
    id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  leads.push(newLead);
  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
  return newLead;
};

export const updateLead = (id: string, updates: Partial<Lead>): Lead | null => {
  const leads = getLeads();
  const index = leads.findIndex(lead => lead.id === id);
  if (index === -1) return null;
  
  leads[index] = {
    ...leads[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
  return leads[index];
};

export const deleteLead = (id: string): boolean => {
  const leads = getLeads();
  const filteredLeads = leads.filter(lead => lead.id !== id);
  if (leads.length === filteredLeads.length) return false;
  fs.writeFileSync(leadsFile, JSON.stringify(filteredLeads, null, 2));
  return true;
};

// Forms CRUD
export const getForms = (): ContactForm[] => {
  const data = fs.readFileSync(formsFile, 'utf-8');
  return JSON.parse(data);
};

export const getFormById = (id: string): ContactForm | null => {
  const forms = getForms();
  return forms.find(form => form.id === id) || null;
};

export const getActiveForm = (): ContactForm | null => {
  const forms = getForms();
  return forms.find(form => form.isActive) || null;
};

export const createForm = (form: Omit<ContactForm, 'id' | 'createdAt' | 'updatedAt'>): ContactForm => {
  const forms = getForms();
  const newForm: ContactForm = {
    ...form,
    id: `form_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  forms.push(newForm);
  fs.writeFileSync(formsFile, JSON.stringify(forms, null, 2));
  return newForm;
};

export const updateForm = (id: string, updates: Partial<ContactForm>): ContactForm | null => {
  const forms = getForms();
  const index = forms.findIndex(form => form.id === id);
  if (index === -1) return null;
  
  forms[index] = {
    ...forms[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(formsFile, JSON.stringify(forms, null, 2));
  return forms[index];
};

// Admins
export const getAdmins = (): Admin[] => {
  const data = fs.readFileSync(adminsFile, 'utf-8');
  return JSON.parse(data);
};

export const getAdminByEmail = (email: string): Admin | null => {
  const admins = getAdmins();
  return admins.find(admin => admin.email === email) || null;
};

export const createAdmin = (admin: Omit<Admin, 'id' | 'createdAt'>): Admin => {
  const admins = getAdmins();
  const newAdmin: Admin = {
    ...admin,
    id: `admin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
  };
  admins.push(newAdmin);
  fs.writeFileSync(adminsFile, JSON.stringify(admins, null, 2));
  return newAdmin;
};

// Settings
export const getSettings = (): Settings => {
  const data = fs.readFileSync(settingsFile, 'utf-8');
  return JSON.parse(data);
};

export const updateSettings = (updates: Partial<Settings>): Settings => {
  const settings = getSettings();
  const updatedSettings: Settings = {
    ...settings,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(settingsFile, JSON.stringify(updatedSettings, null, 2));
  return updatedSettings;
};
