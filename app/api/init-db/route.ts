import { NextResponse } from 'next/server';
import { createPool } from '@vercel/postgres';

const pool = createPool({
  connectionString: process.env.POSTGRES_URL
});

export async function GET() {
  try {
    // Create leads table
    await pool.sql`
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
    await pool.sql`
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
    await pool.sql`
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
    const existingSettings = await pool.sql`SELECT * FROM settings WHERE id = 'default'`;
    if (existingSettings.rows.length === 0) {
      await pool.sql`
        INSERT INTO settings (id, whatsapp_number, whatsapp_message)
        VALUES (
          'default',
          '+923184451469',
          'Hello! I just submitted a form on your website and would like to learn more about your brokerage solutions.'
        )
      `;
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Database initialized successfully. Tables created: leads, admins, settings' 
    });
  } catch (error) {
    console.error('Init DB error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Database initialization failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
