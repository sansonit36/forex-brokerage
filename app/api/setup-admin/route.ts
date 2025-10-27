import { NextResponse } from 'next/server';
import { getAdmins, createAdmin } from '@/lib/supabase-db';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name, setupKey } = body;

    // Simple security - require a setup key
    if (setupKey !== 'forex-setup-2025') {
      return NextResponse.json({ error: 'Invalid setup key' }, { status: 401 });
    }

    // Check if admin exists
    const admins = await getAdmins();
    const existing = admins.find(a => a.email === email);

    if (existing) {
      return NextResponse.json({ error: 'Admin already exists' }, { status: 400 });
    }

    // Create admin
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = await createAdmin({
      email,
      password: hashedPassword,
      name: name || 'Admin',
      role: 'admin',
    });

    return NextResponse.json({
      success: true,
      message: 'Admin created successfully',
      admin: {
        id: newAdmin.id,
        email: newAdmin.email,
        name: newAdmin.name,
      },
    });
  } catch (error) {
    console.error('Setup error:', error);
    return NextResponse.json({
      error: 'Setup failed',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
