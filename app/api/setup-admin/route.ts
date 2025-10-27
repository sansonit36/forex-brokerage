import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
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
    const admins = await kv.get('admins') || [];
    const existing = Array.isArray(admins) ? admins.find((a: any) => a.email === email) : null;

    if (existing) {
      return NextResponse.json({ error: 'Admin already exists' }, { status: 400 });
    }

    // Create admin
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = {
      id: `admin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      email,
      password: hashedPassword,
      name: name || 'Admin',
      role: 'admin',
      createdAt: new Date().toISOString(),
    };

    // Save to KV
    const updatedAdmins = Array.isArray(admins) ? [...admins, newAdmin] : [newAdmin];
    await kv.set('admins', updatedAdmins);

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
