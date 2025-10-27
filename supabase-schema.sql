-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create admins table
CREATE TABLE IF NOT EXISTS admins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create settings table
CREATE TABLE IF NOT EXISTS settings (
  id TEXT PRIMARY KEY DEFAULT 'default',
  calendly_link TEXT,
  whatsapp_number TEXT,
  whatsapp_message TEXT,
  facebook_pixel_id TEXT,
  facebook_access_token TEXT,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert default settings
INSERT INTO settings (id, whatsapp_number, whatsapp_message)
VALUES (
  'default',
  '+923184451469',
  'Hello! I just submitted a form on your website and would like to learn more about your brokerage solutions.'
)
ON CONFLICT (id) DO NOTHING;
