# 🎯 Lead Management System - Admin Guide

## Overview
Your Forex Brokerage website now includes a comprehensive lead management system with a professional contact form and secure admin panel.

## 🚀 Features

### Contact Form (`/contact`)
- ✅ Professional, conversion-optimized design
- ✅ Real-time validation with error messages
- ✅ Success/error notifications
- ✅ Responsive for all devices
- ✅ All data stored securely

### Admin Panel (`/admin` - Coming in next message)
- ✅ Secure authentication system
- ✅ View all leads in a beautiful table
- ✅ Filter leads by status (new, contacted, qualified, converted, lost)
- ✅ Edit lead details and add notes
- ✅ Change lead status
- ✅ Form builder to create/edit forms
- ✅ Export leads to CSV
- ✅ Analytics dashboard

## 📝 Creating Your First Admin Account

1. **Navigate to Registration** (one-time setup):
   ```
   http://localhost:3000/admin/register
   ```

2. **Fill in admin details**:
   - Email: your@email.com
   - Password: (strong password)
   - Name: Your Name

3. **Login at**:
   ```
   http://localhost:3000/admin/login
   ```

## 🔐 Default Admin Credentials (for testing)

Since this is a file-based system, you can create an admin by visiting `/admin/register` first.

## 📊 Lead Management Workflow

1. **Customer fills form** → `/contact`
2. **Lead auto-created** with status "new"
3. **Admin views lead** in dashboard
4. **Admin updates status**:
   - `new` → First contact attempt
   - `contacted` → Spoke with lead
   - `qualified` → Meets criteria
   - `converted` → Became customer
   - `lost` → Didn't convert

5. **Add notes** for team collaboration
6. **Export data** for reporting

## 🎨 Form Customization

Admins can:
- Create multiple forms
- Add/remove/reorder fields
- Change field types (text, email, select, etc.)
- Mark fields as required/optional
- Set active form for the website

## 📂 Data Storage

Currently using JSON file storage in `/data` directory:
- `leads.json` - All lead submissions
- `forms.json` - Form configurations
- `admins.json` - Admin users (passwords hashed)

**For Production**: Upgrade to PostgreSQL, MongoDB, or MySQL

## 🔒 Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT authentication
- ✅ Protected API routes
- ✅ Input validation with Zod
- ✅ XSS protection
- ✅ CSRF tokens (recommended for production)

## 📱 Contact Form Integration

The contact form is now integrated into your website:
- Direct link: `/contact`
- Also accessible from Hero CTA button
- Can be embedded in modals/popups

## 🚀 Next Steps

1. Create your admin account
2. Test the contact form
3. View leads in admin panel
4. Customize form fields
5. Set up email notifications (optional)
6. Connect to real database (for production)

## 🛠️ Customization

### Change Form Title/Description
Edit in admin panel → Forms → Edit Form

### Add New Form Fields
Admin panel → Forms → Add Field

### Modify Lead Statuses
Edit `lib/types.ts` → Lead interface → status enum

### Email Notifications
Add email service in `app/api/leads/route.ts` after lead creation

## 📧 Support

For issues or questions:
- WhatsApp: +92 300 0000000
- Email: support@yourdomain.com

---

**Built with ❤️ for professional lead management**
