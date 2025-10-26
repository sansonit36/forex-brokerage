import { NextResponse } from 'next/server';
import { getSettings, updateSettings } from '@/lib/kv-db';

export async function GET() {
  try {
    const settings = await getSettings();
    return NextResponse.json({ success: true, settings });
  } catch (error) {
    console.error('Settings fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    
    const settings = await updateSettings({
      calendlyLink: body.calendlyLink,
      whatsappNumber: body.whatsappNumber,
      whatsappMessage: body.whatsappMessage,
      facebookPixelId: body.facebookPixelId,
      facebookAccessToken: body.facebookAccessToken,
    });

    return NextResponse.json({ success: true, settings });
  } catch (error) {
    console.error('Settings update error:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
