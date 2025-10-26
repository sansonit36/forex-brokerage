import { NextResponse } from 'next/server';
import { getAdminByEmail, createAdmin } from '@/lib/postgres-db';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    // Try to get admin by a test email to see if database is working
    const testAdmin = await getAdminByEmail('test@test.com');
    
    return NextResponse.json({ 
      success: true,
      message: 'Database connection working',
      hasTestAdmin: testAdmin !== null
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Database query failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { action, email, password, name } = await request.json();
    
    if (action === 'create-default') {
      // Create a default admin account
      const defaultEmail = email || 'admin@thesoftclose.com';
      const defaultPassword = password || 'Admin123!';
      const defaultName = name || 'Admin';
      
      const hashedPassword = await bcrypt.hash(defaultPassword, 10);
      
      const admin = await createAdmin({
        email: defaultEmail,
        password: hashedPassword,
        name: defaultName,
        role: 'admin',
      });
      
      return NextResponse.json({ 
        success: true,
        message: 'Default admin created',
        admin: {
          email: admin.email,
          name: admin.name
        },
        credentials: {
          email: defaultEmail,
          password: defaultPassword,
          note: 'Please change password after first login'
        }
      });
    }
    
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create admin',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
