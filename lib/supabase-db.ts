import { createClient } from '@supabase/supabase-js';
import { Lead, Admin, Settings } from './types';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Leads CRUD
export async function getLeads(): Promise<Lead[]> {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    // Map Supabase data to our Lead type
    return (data || []).map(row => ({
      id: row.id,
      firstName: row.first_name,
      lastName: row.last_name,
      email: row.email,
      phone: row.phone,
      company: row.company,
      country: row.country,
      brokerageType: row.brokerage_type,
      setupBudget: row.setup_budget,
      monthlyBudget: row.monthly_budget,
      timeline: row.timeline,
      experience: row.experience,
      currentTraders: row.current_traders,
      message: row.message,
      source: row.source,
      status: row.status,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
}

export async function createLead(lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>): Promise<Lead> {
  const { data, error } = await supabase
    .from('leads')
    .insert([{
      first_name: lead.firstName,
      last_name: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      company: lead.company,
      country: lead.country,
      brokerage_type: lead.brokerageType,
      setup_budget: lead.setupBudget,
      monthly_budget: lead.monthlyBudget,
      timeline: lead.timeline,
      experience: lead.experience,
      current_traders: lead.currentTraders,
      message: lead.message,
      source: lead.source || 'website',
      status: lead.status || 'new',
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating lead:', error);
    throw error;
  }
  
  // Map back to Lead type
  return {
    id: data.id,
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    phone: data.phone,
    company: data.company,
    country: data.country,
    brokerageType: data.brokerage_type,
    setupBudget: data.setup_budget,
    monthlyBudget: data.monthly_budget,
    timeline: data.timeline,
    experience: data.experience,
    currentTraders: data.current_traders,
    message: data.message,
    source: data.source,
    status: data.status,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}

export async function updateLead(id: string, updates: Partial<Lead>): Promise<Lead | null> {
  const { data, error } = await supabase
    .from('leads')
    .update({ status: updates.status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating lead:', error);
    return null;
  }
  return data;
}

export async function deleteLead(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('leads')
    .delete()
    .eq('id', id);

  return !error;
}

// Admins CRUD
export async function getAdmins(): Promise<Admin[]> {
  try {
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching admins:', error);
    return [];
  }
}

export async function getAdminByEmail(email: string): Promise<Admin | null> {
  try {
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('email', email)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error fetching admin:', error);
    return null;
  }
}

export async function createAdmin(admin: Omit<Admin, 'id' | 'createdAt'>): Promise<Admin> {
  const { data, error } = await supabase
    .from('admins')
    .insert([{
      email: admin.email,
      password: admin.password,
      name: admin.name,
      role: admin.role || 'admin',
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteAllAdmins(): Promise<boolean> {
  const { error } = await supabase
    .from('admins')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

  return !error;
}

// Settings CRUD
export async function getSettings(): Promise<Settings> {
  try {
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .eq('id', 'default')
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') {
        // Create default settings
        const defaultSettings: Settings = {
          id: 'default',
          calendlyLink: '',
          whatsappNumber: '+923184451469',
          whatsappMessage: 'Hello! I just submitted a form on your website and would like to learn more about your brokerage solutions.',
          facebookPixelId: '',
          facebookAccessToken: '',
          updatedAt: new Date().toISOString(),
        };
        
        await supabase.from('settings').insert([{
          id: 'default',
          calendly_link: '',
          whatsapp_number: '+923184451469',
          whatsapp_message: 'Hello! I just submitted a form on your website and would like to learn more about your brokerage solutions.',
          facebook_pixel_id: '',
          facebook_access_token: '',
        }]);
        return defaultSettings;
      }
      throw error;
    }
    return data;
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
  const { data, error} = await supabase
    .from('settings')
    .update({
      calendly_link: updates.calendlyLink,
      whatsapp_number: updates.whatsappNumber,
      whatsapp_message: updates.whatsappMessage,
      facebook_pixel_id: updates.facebookPixelId,
      facebook_access_token: updates.facebookAccessToken,
    })
    .eq('id', 'default')
    .select()
    .single();

  if (error) throw error;
  return data;
}
