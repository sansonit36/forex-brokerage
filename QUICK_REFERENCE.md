# Quick Reference Card

## 🚀 Important URLs

### Public Pages
| Page | URL | Description |
|------|-----|-------------|
| Home | `http://localhost:3000` | Landing page |
| Contact Form | `http://localhost:3000/contact` | Lead capture form |
| Thank You | `http://localhost:3000/thank-you` | Post-submission page |

### Admin Pages
| Page | URL | Description |
|------|-----|-------------|
| Register | `http://localhost:3000/admin/register` | Create admin account |
| Login | `http://localhost:3000/admin/login` | Admin login |
| Dashboard | `http://localhost:3000/admin/dashboard` | View & manage leads |
| Settings | `http://localhost:3000/admin/settings` | Configure Calendly & WhatsApp |

---

## 🎯 User Journey

```
1. User visits Landing Page (/)
2. Clicks "Get Started" or "Contact"
3. Fills Contact Form (/contact)
4. Submits form
5. Auto-redirected to Thank You Page (/thank-you)
6. Chooses to:
   • Book Calendly call
   • Message on WhatsApp
   • Return home
```

---

## ⚙️ Admin Quick Tasks

### First Time Setup
```
1. Go to /admin/register
2. Create admin account
3. Login at /admin/login
4. Navigate to /admin/settings
5. Set Calendly link
6. Set WhatsApp number & message
7. Save settings
```

### Managing Leads
```
1. Login at /admin/login
2. View dashboard (/admin/dashboard)
3. Search/filter leads
4. Export to CSV if needed
```

### Update Links
```
1. Click "Settings" in dashboard
2. Update Calendly or WhatsApp
3. Click "Save Settings"
4. Changes apply immediately
```

---

## 📋 Settings Configuration

### Calendly Link Format
```
https://calendly.com/your-username/meeting-duration
Example: https://calendly.com/john-doe/30min
```

### WhatsApp Number Format
```
+[country code][number]
Example: +14155551234
Note: No spaces or special characters
```

### WhatsApp Message Example
```
Hello! I just submitted a form on your website 
and would like to learn more about your forex 
brokerage solutions.
```

---

## 🔧 Common Commands

### Start Development Server
```bash
cd "/Users/macbookairm2/Documents/forex solution/forex-brokerage"
npm run dev
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

---

## 📊 Features Summary

### Contact Form
- ✅ Full validation (Zod)
- ✅ Auto-redirect to thank you page
- ✅ Email, phone, company fields
- ✅ Package selection dropdown
- ✅ Message textarea

### Thank You Page
- ✅ Success confirmation
- ✅ Calendly booking button
- ✅ WhatsApp contact button
- ✅ Dynamic content from settings
- ✅ Responsive design

### Admin Dashboard
- ✅ View all leads
- ✅ Search & filter
- ✅ CSV export
- ✅ Lead statistics
- ✅ Settings management

### Admin Settings
- ✅ Calendly link editor
- ✅ WhatsApp configuration
- ✅ Real-time saving
- ✅ Success feedback

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Can't access admin panel | Make sure you registered at `/admin/register` |
| Settings not saving | Check you're logged in and `/data` folder exists |
| WhatsApp not opening | Verify number format: `+1234567890` |
| Calendly not opening | Check link starts with `https://calendly.com/` |
| Form not redirecting | Check browser console for errors |

---

## 📁 Data Storage

All data stored in `/data/` directory:
- `leads.json` - All form submissions
- `admins.json` - Admin accounts
- `settings.json` - Calendly & WhatsApp config
- `forms.json` - Form configurations

---

## 🔐 Security Features

- ✅ JWT authentication
- ✅ Bcrypt password hashing
- ✅ Protected admin routes
- ✅ Input validation (Zod)
- ✅ No hardcoded credentials

---

## 📞 Contact Options

Users can contact you via:
1. **Contact Form** → Saved to database
2. **Calendly** → Schedule call directly
3. **WhatsApp** → Instant messaging

---

## 🎨 Design Features

- ✅ Framer Motion animations
- ✅ Tailwind CSS styling
- ✅ Responsive (mobile/tablet/desktop)
- ✅ Professional color scheme
- ✅ Lucide React icons

---

**Quick Tip**: Bookmark this page for instant access to all URLs and commands! 🔖
