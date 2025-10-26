import crypto from 'crypto';

interface FacebookEventData {
  eventName: string;
  eventTime: number;
  userData: {
    em?: string; // email (hashed)
    ph?: string; // phone (hashed)
    fn?: string; // first name (hashed)
    ln?: string; // last name (hashed)
    ct?: string; // city
    st?: string; // state
    zp?: string; // zip
    country?: string;
  };
  customData?: Record<string, any>;
  sourceUrl: string;
  userAgent: string;
}

// Hash data using SHA-256 for Facebook Pixel
const hashData = (data: string): string => {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
};

// Send event to Facebook Conversions API
export const sendFacebookPixelEvent = async (
  pixelId: string,
  accessToken: string,
  eventData: Omit<FacebookEventData, 'eventTime'>
): Promise<boolean> => {
  if (!pixelId || !accessToken) {
    console.log('Facebook Pixel not configured - skipping tracking');
    return false;
  }

  try {
    const url = `https://graph.facebook.com/v18.0/${pixelId}/events`;
    
    const payload = {
      data: [
        {
          event_name: eventData.eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: eventData.sourceUrl,
          user_data: eventData.userData,
          custom_data: eventData.customData || {},
        },
      ],
      access_token: accessToken,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Facebook Pixel API Error:', result);
      return false;
    }

    console.log('Facebook Pixel event sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending Facebook Pixel event:', error);
    return false;
  }
};

// Track lead submission
export const trackLeadSubmission = async (
  pixelId: string,
  accessToken: string,
  leadData: {
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    country: string;
    setupBudget?: string;
    monthlyBudget?: string;
    timeline?: string;
    brokerageType?: string;
  },
  sourceUrl: string,
  userAgent: string
): Promise<boolean> => {
  return sendFacebookPixelEvent(pixelId, accessToken, {
    eventName: 'Lead',
    userData: {
      em: hashData(leadData.email),
      ph: hashData(leadData.phone.replace(/\D/g, '')), // Remove non-digits
      fn: hashData(leadData.firstName),
      ln: hashData(leadData.lastName),
      country: hashData(leadData.country),
    },
    customData: {
      setup_budget: leadData.setupBudget,
      monthly_budget: leadData.monthlyBudget,
      timeline: leadData.timeline,
      brokerage_type: leadData.brokerageType,
      currency: 'USD',
      value: leadData.setupBudget === '15k-plus' ? 15000 : 
             leadData.setupBudget === '10k-15k' ? 12500 :
             leadData.setupBudget === '5k-10k' ? 7500 : 5000,
    },
    sourceUrl,
    userAgent,
  });
};
