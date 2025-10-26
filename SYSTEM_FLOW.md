# System Flow Diagram

## Complete User & Admin Flow

### User Flow - Contact Form Submission

```
┌─────────────────────────────────────────────────────────────────┐
│                        Landing Page (/)                          │
│  • Hero Section                                                  │
│  • Problem Section                                               │
│  • Solution Section                                              │
│  • Pricing Section                                               │
│  • FAQ Section                                                   │
│  • CTA Buttons → "Get Started" / "Contact"                       │
└────────────────────────────┬────────────────────────────────────┘
                             │ Click "Get Started" or "Contact"
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Contact Form Page (/contact)                  │
│  • First Name, Last Name                                         │
│  • Email, Phone                                                  │
│  • Company, Country                                              │
│  • Package Selection (Starter/Pro/Not Sure)                      │
│  • Message                                                       │
│  • [Submit Request Button]                                       │
└────────────────────────────┬────────────────────────────────────┘
                             │ Submit Form
                             ▼
                      ┌──────────────┐
                      │   API Call   │
                      │  /api/leads  │
                      │  (POST)      │
                      └──────┬───────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │  Validation (Zod)    │
                  │  • Check all fields  │
                  │  • Verify formats    │
                  └──────┬───────────────┘
                         │
                         ▼
            ┌────────────────────────────┐
            │  Save to Database          │
            │  /data/leads.json          │
            │  • Generate unique ID      │
            │  • Add timestamps          │
            │  • Set status: 'new'       │
            └────────┬───────────────────┘
                     │
                     ▼
       ┌─────────────────────────────────┐
       │  Success Response               │
       │  { success: true, lead: {...} } │
       └─────────┬───────────────────────┘
                 │ Auto-redirect (1 sec)
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Thank You Page (/thank-you)                     │
│  ✓ Success Message                                               │
│  ✓ "What's Next?" Section                                        │
│                                                                  │
│  ┌─────────────────────┐  ┌──────────────────────┐             │
│  │  📅 Book a Call Now │  │ 💬 Contact WhatsApp │             │
│  │  → Calendly Link    │  │ → WhatsApp Chat      │             │
│  └─────────────────────┘  └──────────────────────┘             │
│                                                                  │
│  ← Back to Homepage                                              │
└─────────────────────────────────────────────────────────────────┘
                             │
                             ▼
                  ┌──────────────────┐
                  │ User chooses:    │
                  │ • Book Calendly  │
                  │ • WhatsApp       │
                  │ • Go home        │
                  └──────────────────┘
```

---

### Admin Flow - Lead Management

```
┌─────────────────────────────────────────────────────────────────┐
│                  Admin Registration (/admin/register)            │
│  • Name                                                          │
│  • Email                                                         │
│  • Password                                                      │
│  • Confirm Password                                              │
│  • [Create Admin Account]                                        │
└────────────────────────────┬────────────────────────────────────┘
                             │ Submit
                             ▼
                      ┌──────────────┐
                      │   API Call   │
                      │  /api/auth   │
                      │  (POST)      │
                      └──────┬───────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │  Hash Password       │
                  │  (bcrypt)            │
                  └──────┬───────────────┘
                         │
                         ▼
            ┌────────────────────────────┐
            │  Save Admin                │
            │  /data/admins.json         │
            └────────┬───────────────────┘
                     │ Success
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Admin Login (/admin/login)                    │
│  • Email                                                         │
│  • Password                                                      │
│  • [Login Button]                                                │
└────────────────────────────┬────────────────────────────────────┘
                             │ Submit
                             ▼
                      ┌──────────────┐
                      │   API Call   │
                      │  /api/auth   │
                      │  (POST)      │
                      └──────┬───────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │  Verify Password     │
                  │  (bcrypt.compare)    │
                  └──────┬───────────────┘
                         │
                         ▼
            ┌────────────────────────────┐
            │  Generate JWT Token        │
            │  Store in localStorage     │
            └────────┬───────────────────┘
                     │ Authenticated
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│              Admin Dashboard (/admin/dashboard)                  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Statistics Cards                                         │   │
│  │  • Total Leads    • New Leads                            │   │
│  │  • Converted      • This Month                           │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Search & Filter Controls                                │   │
│  │  [Search Box] [Status Filter ▼] [Export CSV]            │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Leads Table                                             │   │
│  │  Name | Email | Phone | Country | Package | Status       │   │
│  │  ------------------------------------------------         │   │
│  │  John Doe | john@... | +1234... | USA | Pro | New       │   │
│  │  Jane Smith | jane@... | +4567... | UK | Starter | ...  │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  [⚙️ Settings] [🚪 Logout]                                      │
└────────────────────────────┬────────────────────────────────────┘
                             │ Click "Settings"
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│              Admin Settings (/admin/settings)                    │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  📅 Calendly Integration                                 │   │
│  │  Calendly Link: [https://calendly.com/...]              │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  💬 WhatsApp Integration                                 │   │
│  │  WhatsApp Number: [+1234567890]                          │   │
│  │  Pre-filled Message: [Hello! I just submitted...]        │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  [💾 Save Settings]                                             │
│                                                                  │
│  [← Back to Dashboard]                                           │
└────────────────────────────┬────────────────────────────────────┘
                             │ Save
                             ▼
                      ┌──────────────┐
                      │   API Call   │
                      │ /api/settings│
                      │  (PATCH)     │
                      └──────┬───────┘
                             │
                             ▼
            ┌────────────────────────────┐
            │  Update Settings           │
            │  /data/settings.json       │
            └────────┬───────────────────┘
                     │
                     ▼
              ┌──────────────┐
              │ ✓ Success!   │
              │ Settings     │
              │ Saved        │
              └──────────────┘
```

---

### Data Flow - Settings to Thank You Page

```
┌─────────────────────┐
│  Admin Updates      │
│  Settings           │
│  /admin/settings    │
└──────────┬──────────┘
           │ Save
           ▼
    ┌──────────────┐
    │ API: PATCH   │
    │ /api/settings│
    └──────┬───────┘
           │
           ▼
┌──────────────────────┐
│  Update              │
│  settings.json       │
│  {                   │
│   calendlyLink: "...",│
│   whatsappNumber: "...",│
│   whatsappMessage: "..."│
│  }                   │
└──────────┬───────────┘
           │
           │ User submits form
           │
           ▼
┌──────────────────────┐
│  Thank You Page      │
│  Loads               │
│  /thank-you          │
└──────────┬───────────┘
           │
           ▼
    ┌──────────────┐
    │ API: GET     │
    │ /api/settings│
    └──────┬───────┘
           │
           ▼
┌──────────────────────┐
│  Fetch Settings      │
│  from settings.json  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Render Buttons      │
│  • Calendly with     │
│    admin's link      │
│  • WhatsApp with     │
│    admin's number    │
│    and message       │
└──────────────────────┘
```

---

### Database Structure

```
/data/
├── leads.json
│   └── [
│        {
│          "id": "lead_123...",
│          "firstName": "John",
│          "lastName": "Doe",
│          "email": "john@example.com",
│          "phone": "+1234567890",
│          "company": "Company Inc",
│          "country": "United States",
│          "brokerageType": "pro",
│          "message": "I want to start...",
│          "status": "new",
│          "source": "website",
│          "createdAt": "2025-10-26T...",
│          "updatedAt": "2025-10-26T..."
│        },
│        ...
│      ]
│
├── admins.json
│   └── [
│        {
│          "id": "admin_123...",
│          "name": "Admin Name",
│          "email": "admin@example.com",
│          "password": "$2b$10$hashed...",
│          "role": "admin",
│          "createdAt": "2025-10-26T..."
│        },
│        ...
│      ]
│
├── settings.json
│   └── {
│        "id": "settings",
│        "calendlyLink": "https://calendly.com/user/30min",
│        "whatsappNumber": "+1234567890",
│        "whatsappMessage": "Hello! I just submitted...",
│        "updatedAt": "2025-10-26T..."
│      }
│
└── forms.json
    └── [
         {
           "id": "default-form",
           "name": "Main Contact Form",
           "title": "Book Your Free Strategy Call",
           ...
         }
       ]
```

---

### API Endpoints Summary

```
┌─────────────────────────────────────────────────────────────┐
│  PUBLIC ENDPOINTS                                           │
├─────────────────────────────────────────────────────────────┤
│  POST   /api/leads      - Create new lead                   │
│  GET    /api/settings   - Get current settings              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ADMIN ENDPOINTS (Require JWT Token)                        │
├─────────────────────────────────────────────────────────────┤
│  POST   /api/auth       - Login/Register admin              │
│  GET    /api/leads      - Get all leads                     │
│  PATCH  /api/leads/:id  - Update lead                       │
│  DELETE /api/leads/:id  - Delete lead                       │
│  PATCH  /api/settings   - Update settings                   │
└─────────────────────────────────────────────────────────────┘
```

---

### Security Flow

```
┌──────────────┐
│  User Login  │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│  Enter Creds     │
│  Email + Password│
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  POST /api/auth  │
└──────┬───────────┘
       │
       ▼
┌──────────────────────┐
│  Verify Password     │
│  bcrypt.compare()    │
│  • Hash from DB      │
│  • Entered password  │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│  Generate JWT Token  │
│  • User ID           │
│  • Email             │
│  • Expiry: 7 days    │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│  Store Token         │
│  localStorage        │
│  • adminToken        │
│  • adminUser         │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│  Every API Request   │
│  Headers:            │
│  Authorization:      │
│  Bearer <token>      │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│  Verify Token        │
│  jwt.verify()        │
└──────┬───────────────┘
       │
       ▼
  ┌────┴────┐
  │ Valid?  │
  └────┬────┘
       │
   ┌───┴───┐
   │       │
  Yes      No
   │       │
   ▼       ▼
┌─────┐ ┌──────┐
│Allow│ │Reject│
└─────┘ └──────┘
```

---

### Component Hierarchy

```
App Layout
│
├── Landing Page (/)
│   ├── Header
│   ├── Hero
│   ├── Problem
│   ├── Solution
│   ├── CaseStudy
│   ├── Pricing
│   ├── About
│   ├── FAQ
│   ├── FinalCTA
│   ├── Footer
│   └── WhatsAppButton (Floating)
│
├── Contact Page (/contact)
│   └── ContactForm
│       ├── Form Fields
│       ├── Validation (Zod)
│       └── Submit Handler → Redirect
│
├── Thank You Page (/thank-you)
│   ├── Success Animation
│   ├── Calendly Button (Dynamic Link)
│   ├── WhatsApp Button (Dynamic Link)
│   └── Back to Home Link
│
└── Admin Panel
    ├── Register (/admin/register)
    │   └── Registration Form
    │
    ├── Login (/admin/login)
    │   └── Login Form
    │
    ├── Dashboard (/admin/dashboard)
    │   ├── Statistics Cards
    │   ├── Search Bar
    │   ├── Filter Dropdown
    │   ├── Leads Table
    │   ├── CSV Export
    │   ├── Settings Button
    │   └── Logout Button
    │
    └── Settings (/admin/settings)
        ├── Calendly Settings
        ├── WhatsApp Settings
        ├── Save Button
        └── Back to Dashboard
```

---

This diagram shows the complete flow of data through your Forex Brokerage system, from user interaction to data storage and admin management.
