import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    // Check if any admins exist
    const { rows } = await sql`SELECT email, name, created_at FROM admins`;
    
    return NextResponse.json({ 
      success: true,
      count: rows.length,
      admins: rows.map(admin => ({
        email: admin.email,
        name: admin.name,
        createdAt: admin.created_at
      }))
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch admins',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    // Delete all admins (for testing only)
    await sql`DELETE FROM admins`;
    
    return NextResponse.json({ 
      success: true,
      message: 'All admins deleted. You can now register a new account.'
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to delete admins',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
