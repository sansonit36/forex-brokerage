import { NextResponse } from 'next/server';
import { initializeDatabase } from '@/lib/postgres-db';

export async function GET() {
  try {
    const success = await initializeDatabase();
    
    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Database initialized successfully' 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Database initialization failed' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Init DB error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Database initialization failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
