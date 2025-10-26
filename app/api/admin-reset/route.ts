import { NextResponse } from 'next/server';
import { createPool } from '@vercel/postgres';
import { getAdminByEmail, createAdmin } from '@/lib/postgres-db';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    // Create a pool connection which uses POSTGRES_URL automatically
    const pool = createPool();
    const { rows } = await pool.sql`SELECT email, name, created_at FROM admins ORDER BY created_at DESC LIMIT 5`;
    
    return NextResponse.json({ 
      success: true,
      adminCount: rows.length,
      admins: rows.map(admin => ({
        email: admin.email,
        name: admin.name,
        createdAt: admin.created_at
      })),
      message: rows.length > 0 ? 'Admin accounts exist. Use /admin/login to sign in.' : 'No admin accounts found.'
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Database query failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    // Delete all admins from database
    const pool = createPool();
    await pool.sql`DELETE FROM admins`;
    
    return NextResponse.json({ 
      success: true,
      message: 'All admin accounts deleted. You can now register a new account at /admin/register'
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to delete admins',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
