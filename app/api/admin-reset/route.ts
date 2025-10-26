import { NextResponse } from 'next/server';
import { getAdmins, deleteAllAdmins } from '@/lib/remote-db';

export async function GET() {
  try {
    const admins = await getAdmins();
    
    return NextResponse.json({ 
      success: true,
      adminCount: admins.length,
      admins: admins.map(admin => ({
        email: admin.email,
        name: admin.name,
        createdAt: admin.createdAt
      })),
      message: admins.length > 0 ? 'Admin accounts exist. Use /admin/login to sign in.' : 'No admin accounts found.'
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
    await deleteAllAdmins();
    
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
