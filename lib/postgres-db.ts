import { sql } from '@vercel/postgres';
import { Lead, Admin, Settings } from './types';
import bcrypt from 'bcryptjs';

// Use Vercel's sql client which automatically uses pooled connections

// Initialize database tables
export async function initializeDatabase() {
  try {
    // Create leads table
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id TEXT PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        company TEXT,
        country TEXT NOT NULL,
        brokerage_type TEXT NOT NULL,
        setup_budget TEXT,
        monthly_budget TEXT,
        timeline TEXT,
        experience TEXT,
        current_traders TEXT,
        message TEXT NOT NULL,
        source TEXT DEFAULT 'website',
        status TEXT DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create admins table
    await sql`
      CREATE TABLE IF NOT EXISTS admins (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        name TEXT NOT NULL,
        role TEXT DEFAULT 'admin',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create settings table
    await sql`
      CREATE TABLE IF NOT EXISTS settings (
        id TEXT PRIMARY KEY DEFAULT 'default',
        calendly_link TEXT,
        whatsapp_number TEXT,
        whatsapp_message TEXT,
        facebook_pixel_id TEXT,
        facebook_access_token TEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Insert default settings if not exists
    const existingSettings = await sql`SELECT * FROM settings WHERE id = 'default'`;
    if (existingSettings.rows.length === 0) {
      await sql`
        INSERT INTO settings (id, whatsapp_number, whatsapp_message)
        VALUES (
          'default',
          '+923184451469',
          'Hello! I just submitted a form on your website and would like to learn more about your brokerage solutions.'
        )
      `;
    }

    console.log('Database initialized successfully');
    return true;
  } catch (error) {
    console.error('Database initialization error:', error);
    return false;
  }
}

// Leads CRUD
export async function getLeads(): Promise<Lead[]> {
  try {
    const { rows } = await sql`SELECT * FROM leads ORDER BY created_at DESC`;
    return rows.map(row => ({
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
  const id = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  await sql`
    INSERT INTO leads (
      id, first_name, last_name, email, phone, company, country,
      brokerage_type, setup_budget, monthly_budget, timeline,
      experience, current_traders, message, source, status
    ) VALUES (
      ${id}, ${lead.firstName}, ${lead.lastName}, ${lead.email}, ${lead.phone},
      ${lead.company || null}, ${lead.country}, ${lead.brokerageType},
      ${lead.setupBudget || null}, ${lead.monthlyBudget || null}, ${lead.timeline || null},
      ${lead.experience || null}, ${lead.currentTraders || null}, ${lead.message},
      ${lead.source || 'website'}, ${lead.status || 'new'}
    )
  `;

  const { rows } = await sql`SELECT * FROM leads WHERE id = ${id}`;
  const row = rows[0];
  
  return {
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
  };
}

export async function updateLead(id: string, updates: Partial<Lead>): Promise<Lead | null> {
  const fields: string[] = [];
  const values: any[] = [];
  
  if (updates.status) {
    fields.push('status = $' + (fields.length + 1));
    values.push(updates.status);
  }
  
  if (fields.length === 0) return null;
  
  fields.push('updated_at = CURRENT_TIMESTAMP');
  values.push(id);
  
  await sql.query(
    `UPDATE leads SET ${fields.join(', ')} WHERE id = $${values.length}`,
    values
  );

  const { rows } = await sql`SELECT * FROM leads WHERE id = ${id}`;
  if (rows.length === 0) return null;
  
  const row = rows[0];
  return {
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
  };
}

export async function deleteLead(id: string): Promise<boolean> {
  const result = await sql`DELETE FROM leads WHERE id = ${id}`;
  return (result.rowCount ?? 0) > 0;
}

// Admins CRUD
export async function getAdminByEmail(email: string): Promise<Admin | null> {
  try {
    const { rows } = await sql`SELECT * FROM admins WHERE email = ${email}`;
    if (rows.length === 0) return null;
    
    const row = rows[0];
    return {
      id: row.id,
      email: row.email,
      password: row.password,
      name: row.name,
      role: row.role,
      createdAt: row.created_at,
    };
  } catch (error) {
    console.error('Error fetching admin:', error);
    return null;
  }
}

export async function createAdmin(admin: Omit<Admin, 'id' | 'createdAt'>): Promise<Admin> {
  const id = `admin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  await sql`
    INSERT INTO admins (id, email, password, name, role)
    VALUES (${id}, ${admin.email}, ${admin.password}, ${admin.name}, ${admin.role || 'admin'})
  `;

  const { rows } = await sql`SELECT * FROM admins WHERE id = ${id}`;
  const row = rows[0];
  
  return {
    id: row.id,
    email: row.email,
    password: row.password,
    name: row.name,
    role: row.role,
    createdAt: row.created_at,
  };
}

// Settings CRUD
export async function getSettings(): Promise<Settings> {
  try {
    const { rows } = await sql`SELECT * FROM settings WHERE id = 'default'`;
    if (rows.length === 0) {
      return {
        id: 'default',
        calendlyLink: '',
        whatsappNumber: '+923184451469',
        whatsappMessage: 'Hello! I just submitted a form on your website and would like to learn more about your brokerage solutions.',
        facebookPixelId: '',
        facebookAccessToken: '',
        updatedAt: new Date().toISOString(),
      };
    }
    
    const row = rows[0];
    return {
      id: row.id,
      calendlyLink: row.calendly_link || '',
      whatsappNumber: row.whatsapp_number || '',
      whatsappMessage: row.whatsapp_message || '',
      facebookPixelId: row.facebook_pixel_id || '',
      facebookAccessToken: row.facebook_access_token || '',
      updatedAt: row.updated_at,
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
  const fields: string[] = [];
  const values: any[] = [];
  let paramCount = 1;
  
  if (updates.calendlyLink !== undefined) {
    fields.push(`calendly_link = $${paramCount++}`);
    values.push(updates.calendlyLink);
  }
  if (updates.whatsappNumber !== undefined) {
    fields.push(`whatsapp_number = $${paramCount++}`);
    values.push(updates.whatsappNumber);
  }
  if (updates.whatsappMessage !== undefined) {
    fields.push(`whatsapp_message = $${paramCount++}`);
    values.push(updates.whatsappMessage);
  }
  if (updates.facebookPixelId !== undefined) {
    fields.push(`facebook_pixel_id = $${paramCount++}`);
    values.push(updates.facebookPixelId);
  }
  if (updates.facebookAccessToken !== undefined) {
    fields.push(`facebook_access_token = $${paramCount++}`);
    values.push(updates.facebookAccessToken);
  }
  
  fields.push('updated_at = CURRENT_TIMESTAMP');
  
  if (fields.length > 1) {
    await sql.query(
      `UPDATE settings SET ${fields.join(', ')} WHERE id = 'default'`,
      values
    );
  }

  return getSettings();
}
