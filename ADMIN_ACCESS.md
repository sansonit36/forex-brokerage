# 🔐 Admin Panel - Complete Access Guide

## 📍 **Admin Panel URLs**

### 1. **First-Time Setup (Registration)**
```
http://localhost:3000/admin/register
```
**Use this to create your first admin account**

### 2. **Login Page**
```
http://localhost:3000/admin/login
```
**Use this to access your dashboard after registration**

### 3. **Dashboard**
```
http://localhost:3000/admin/dashboard
```
**Main admin interface with leads management**

---

## 🚀 **Quick Start Guide**

### Step 1: Create Your Admin Account

1. Navigate to: `http://localhost:3000/admin/register`
2. Fill in the registration form:
   - **Full Name**: Your Name
   - **Email**: your-email@example.com
   - **Password**: (minimum 8 characters)
   - **Confirm Password**: (same as above)
3. Click "Create Admin Account"
4. You'll be automatically logged in and redirected to the dashboard

### Step 2: Login (For Future Access)

1. Navigate to: `http://localhost:3000/admin/login`
2. Enter your email and password
3. Click "Login to Dashboard"

### Step 3: Manage Leads

Once logged in, you'll see:
- **Total Leads Count**
- **New Leads** (status: new)
- **Converted Leads** (closed deals)
- **Monthly Statistics**
- **Complete Leads Table** with:
  - Name & Country
  - Email & Phone
  - Package Selection
  - Lead Status
  - Submission Date
  - Action Buttons

---

## 🔒 **Default Credentials**

❌ **There are NO default credentials!**

You must create your own account through the registration page first.

**Example Registration Data:**
```
Name: Admin User
Email: admin@forexbrokerage.com
Password: Admin@123456
```

---

## 📊 **Dashboard Features**

### ✅ Statistics Cards
- Total Leads
- New Leads (uncontacted)
- Converted Leads
- This Month's Leads

### ✅ Leads Table Features
- **Search**: Find leads by name, email, or phone
- **Filter**: Filter by status (new, contacted, qualified, converted, lost)
- **Export**: Download leads as CSV file
- **View Details**: Click eye icon to see full lead information

### ✅ Lead Statuses
- 🔵 **New** - Just submitted, not contacted yet
- 🟡 **Contacted** - First contact made
- 🟣 **Qualified** - Meets criteria, potential customer
- 🟢 **Converted** - Successfully became a customer
- 🔴 **Lost** - Did not convert

---

## 📁 **Data Storage Location**

All data is stored in JSON files:
```
/data/leads.json    - All lead submissions
/data/admins.json   - Admin users (passwords encrypted)
/data/forms.json    - Contact form configurations
```

---

## 🔐 **Security Features**

✅ Password hashing with bcrypt  
✅ JWT authentication tokens  
✅ Protected API routes  
✅ Input validation with Zod  
✅ Session management  

---

## 🎯 **Lead Management Workflow**

1. **Customer submits** contact form on `/contact`
2. **Lead auto-created** with status "new"
3. **Admin views** lead in dashboard
4. **Admin updates status** based on progress
5. **Admin exports data** for reporting/CRM

---

## 🛠️ **Troubleshooting**

### Can't Login?
- Make sure you've registered first at `/admin/register`
- Check that you're using the correct email/password
- Clear browser cache and try again

### Dashboard Not Loading?
- Check that you're logged in
- Verify the token in localStorage
- Try logging out and back in

### No Leads Showing?
- Submit a test lead through `/contact` first
- Check `/data/leads.json` file exists
- Refresh the dashboard page

---

## 📞 **Support**

For technical issues:
- Check the browser console for errors
- Verify the development server is running
- Contact: support@yourdomain.com

---

## 🎨 **Customization**

Want to customize the admin panel?

**Change colors**: Edit Tailwind classes in dashboard component  
**Add fields**: Modify the table in `/app/admin/dashboard/page.tsx`  
**New features**: Add to `/app/api/leads/route.ts`  

---

## 🚀 **Production Deployment**

Before going live:

1. Change JWT_SECRET in `/app/api/auth/route.ts`
2. Upgrade from JSON to a real database (PostgreSQL/MongoDB)
3. Add email notifications for new leads
4. Implement role-based access control
5. Add audit logging
6. Enable HTTPS
7. Set up backup systems

---

**Built with ❤️ for efficient lead management**
