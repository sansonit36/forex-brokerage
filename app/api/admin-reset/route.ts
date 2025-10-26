import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    const { rows } = await sql`SELECT email, name, created_at FROM admins ORDER BY created_at DESC LIMIT 5`;
    
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
    await sql`DELETE FROM admins`;
    
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
