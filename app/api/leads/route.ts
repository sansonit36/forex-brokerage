import { NextResponse } from 'next/server';
import { createLead, getLeads, updateLead, deleteLead, getSettings } from '@/lib/db';
import { trackLeadSubmission } from '@/lib/facebook-pixel';
import { z } from 'zod';

const leadSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  country: z.string().min(2, 'Country is required'),
  brokerageType: z.enum(['starter', 'pro', 'not-decided']),
  setupBudget: z.string().optional(),
  monthlyBudget: z.string().optional(),
  timeline: z.string().optional(),
  experience: z.string().optional(),
  currentTraders: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  source: z.string().default('website'),
});

// GET all leads
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const auth = request.headers.get('authorization');
    
    // Simple auth check (you should implement proper JWT verification)
    if (!auth || !auth.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const leads = getLeads();
    
    // Filter by status if provided
    const status = searchParams.get('status');
    const filteredLeads = status
      ? leads.filter(lead => lead.status === status)
      : leads;

    return NextResponse.json({ leads: filteredLeads, total: filteredLeads.length });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

// POST create new lead
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = leadSchema.parse(body);
    
    // Try to create lead (will fail on Vercel due to read-only filesystem)
    let lead;
    try {
      lead = createLead({
        ...validatedData,
        status: 'new',
      });
    } catch (fsError) {
      // If file system write fails (Vercel), create lead object without saving
      console.error('File system write failed (expected on Vercel):', fsError);
      lead = {
        id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        ...validatedData,
        status: 'new',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    }

    // Send Facebook Pixel event
    try {
      const settings = getSettings();
      const headers = request.headers;
      const userAgent = headers.get('user-agent') || 'Unknown';
      const referer = headers.get('referer') || headers.get('origin') || 'https://yoursite.com';

      if (settings.facebookPixelId && settings.facebookAccessToken) {
        await trackLeadSubmission(
          settings.facebookPixelId,
          settings.facebookAccessToken,
          {
            email: validatedData.email,
            phone: validatedData.phone,
            firstName: validatedData.firstName,
            lastName: validatedData.lastName,
            country: validatedData.country,
            setupBudget: validatedData.setupBudget,
            monthlyBudget: validatedData.monthlyBudget,
            timeline: validatedData.timeline,
            brokerageType: validatedData.brokerageType,
          },
          referer,
          userAgent
        );
      }
    } catch (fbError) {
      // Log error but don't fail the lead creation
      console.error('Facebook Pixel tracking failed:', fbError);
    }
    
    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 });
  }
}

// PATCH update lead
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 });
    }

    const updatedLead = updateLead(id, updates);
    
    if (!updatedLead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead: updatedLead });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
  }
}

// DELETE lead
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 });
    }

    const success = deleteLead(id);
    
    if (!success) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Lead deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 });
  }
}
