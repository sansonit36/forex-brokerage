import { Lead, Admin, Settings } from './types';

const API_BASE = 'https://thesoftclose.com/solutiondata/api.php';

// Leads CRUD
export async function getLeads(): Promise<Lead[]> {
  try {
    const response = await fetch(`${API_BASE}?action=get&type=leads`);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
}

export async function createLead(lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>): Promise<Lead> {
  const newLead: Lead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...lead,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(`${API_BASE}?action=add&type=leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLead),
    });
    const result = await response.json();
    return result.data || newLead;
  } catch (error) {
    console.error('Error creating lead:', error);
    throw error;
  }
}

export async function updateLead(id: string, updates: Partial<Lead>): Promise<Lead | null> {
  try {
    const leads = await getLeads();
    const index = leads.findIndex(l => l.id === id);
    
    if (index === -1) return null;
    
    leads[index] = {
      ...leads[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    await fetch(`${API_BASE}?action=save&type=leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leads),
    });

    return leads[index];
  } catch (error) {
    console.error('Error updating lead:', error);
    return null;
  }
}

export async function deleteLead(id: string): Promise<boolean> {
  try {
    const leads = await getLeads();
    const filtered = leads.filter(l => l.id !== id);

    await fetch(`${API_BASE}?action=save&type=leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filtered),
    });

    return true;
  } catch (error) {
    console.error('Error deleting lead:', error);
    return false;
  }
}

// Admins CRUD
export async function getAdmins(): Promise<Admin[]> {
  try {
    const response = await fetch(`${API_BASE}?action=get&type=admins`);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching admins:', error);
    return [];
  }
}

export async function getAdminByEmail(email: string): Promise<Admin | null> {
  try {
    const admins = await getAdmins();
    return admins.find(a => a.email === email) || null;
  } catch (error) {
    console.error('Error fetching admin:', error);
    return null;
  }
}

export async function createAdmin(admin: Omit<Admin, 'id' | 'createdAt'>): Promise<Admin> {
  const newAdmin: Admin = {
    id: `admin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...admin,
    createdAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(`${API_BASE}?action=add&type=admins`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAdmin),
    });
    const result = await response.json();
    return result.data || newAdmin;
  } catch (error) {
    console.error('Error creating admin:', error);
    throw error;
  }
}

export async function deleteAllAdmins(): Promise<boolean> {
  try {
    await fetch(`${API_BASE}?action=save&type=admins`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([]),
    });
    return true;
  } catch (error) {
    console.error('Error deleting admins:', error);
    return false;
  }
}

// Settings CRUD
export async function getSettings(): Promise<Settings> {
  try {
    const response = await fetch(`${API_BASE}?action=get&type=settings`);
    const data = await response.json();
    
    if (Array.isArray(data) && data.length > 0) {
      return data[0];
    }
    
    return {
      id: 'default',
      calendlyLink: '',
      whatsappNumber: '+923184451469',
      whatsappMessage: 'Hello! I just submitted a form on your website and would like to learn more about your brokerage solutions.',
      facebookPixelId: '',
      facebookAccessToken: '',
      updatedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error fetching settings:', error);
    return {
      id: 'default',
      calendlyLink: '',
      whatsappNumber: '+923184451469',
      whatsappMessage: 'Hello!',
      facebookPixelId: '',
      facebookAccessToken: '',
      updatedAt: new Date().toISOString(),
    };
  }
}

export async function updateSettings(updates: Partial<Settings>): Promise<Settings> {
  try {
    const current = await getSettings();
    const updated: Settings = {
      ...current,
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    await fetch(`${API_BASE}?action=save&type=settings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([updated]),
    });

    return updated;
  } catch (error) {
    console.error('Error updating settings:', error);
    throw error;
  }
}
