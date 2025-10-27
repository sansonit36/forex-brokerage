import { NextResponse } from 'next/server';
import { getAdminByEmail, createAdmin } from '@/lib/kv-db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Updated: 2025-10-27 05:00 - Fixed admin registration
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, action } = body;

    if (action === 'login') {
      // Login
      const admin = await getAdminByEmail(email);
      
      if (!admin) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }

      const isValid = await bcrypt.compare(password, admin.password);
      
      if (!isValid) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }

      // Create JWT token
      const token = jwt.sign(
        { id: admin.id, email: admin.email, role: admin.role },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      return NextResponse.json({
        success: true,
        token,
        admin: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          role: admin.role,
        },
      });
    }

    if (action === 'register') {
      // Register - Allow multiple admins
      let existing;
      try {
        existing = await getAdminByEmail(email);
      } catch (error) {
        console.error('Error checking existing admin:', error);
        existing = null;
      }
      
      if (existing) {
        return NextResponse.json({ error: 'An admin with this email already exists' }, { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create admin
      try {
        const admin = await createAdmin({
          email,
          password: hashedPassword,
          name: body.name || 'Admin',
          role: 'admin',
        });

        const token = jwt.sign(
          { id: admin.id, email: admin.email, role: admin.role },
          JWT_SECRET,
          { expiresIn: '7d' }
        );

        return NextResponse.json({
          success: true,
          token,
          admin: {
            id: admin.id,
            email: admin.email,
            name: admin.name,
            role: admin.role,
          },
        });
      } catch (createError) {
        console.error('Error creating admin:', createError);
        return NextResponse.json({ 
          error: 'Failed to create admin account',
          details: createError instanceof Error ? createError.message : 'Unknown error'
        }, { status: 500 });
      }
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
