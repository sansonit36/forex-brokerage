# 🚀 Hostinger Setup - No SSH Required!

## ✅ Super Simple Method (Via hPanel Only)

### Step 1: Upload Files via File Manager

1. Download **forex-brokerage-production.tar.gz** (26MB)
2. Log in to **Hostinger hPanel**
3. Go to **File Manager**
4. Navigate to `/domains/thesoftclose.com/public_html/solutions`
5. Click **Upload** → Upload the tar.gz file
6. Right-click the file → **Extract**
7. Delete the tar.gz file after extraction

### Step 2: Configure Node.js App in hPanel

1. In hPanel, go to **Advanced** → **Node.js**
2. Click **"Create Application"** or **"Setup Node.js App"**
3. Fill in the form:

```
Application Setup:
├─ Node.js version: 20.x
├─ Application mode: Production
├─ Application root: /domains/thesoftclose.com/public_html/solutions
├─ Application URL: thesoftclose.com
├─ Application startup file: server.js
├─ Port: 3000 (or leave default)
└─ Environment variables: (leave empty for now)
```

4. Click **"Create"** or **"Save"**

### Step 3: Install Dependencies (via hPanel terminal)

hPanel will provide a button to open the application terminal. Click it and run:

```bash
npm install --omit=dev
```

Or if hPanel doesn't have a terminal, it should install dependencies automatically.

### Step 4: Start the Application

In the Node.js app settings, click:
- **"Stop"** (if running)
- **"Start"**

Or click **"Restart Application"**

### Step 5: Access Your Website!

Your website is now live at:
- **Homepage**: https://thesoftclose.com
- **Admin Register**: https://thesoftclose.com/admin/register
- **Admin Login**: https://thesoftclose.com/admin/login

## 🎯 Initial Setup

### Create Your Admin Account
1. Go to https://thesoftclose.com/admin/register
2. Enter your details
3. Click "Create Account"

### Configure Settings
1. Login at https://thesoftclose.com/admin/login
2. Go to https://thesoftclose.com/admin/settings
3. Set up:
   - ✅ Calendly booking link
   - ✅ WhatsApp number (+923184451469)
   - ✅ WhatsApp message
   - ✅ Facebook Pixel ID (optional)
   - ✅ Facebook Access Token (optional)
4. Click "Save Settings"

## 📊 Managing Your Website

### View Leads
- Dashboard: https://thesoftclose.com/admin/dashboard
- Click the "eye" icon to view full lead details
- Export leads to CSV with the "Export CSV" button

### Restart Application (if needed)
In hPanel → Node.js → Your App → Click "Restart"

## 🔧 Troubleshooting

### Website Not Loading?
1. Check Node.js app status in hPanel
2. Make sure it's "Running" (green dot)
3. Click "Restart Application"

### Dependencies Not Installed?
1. In hPanel Node.js section, look for "Run npm install" button
2. Or use the terminal and run: `npm install --omit=dev`

### Form Submissions Not Saving?
1. Check file permissions in File Manager
2. data folder should be writable (755)
3. data/*.json files should be writable (666)

## 🆘 If Something Goes Wrong

### Complete Reset:
1. In File Manager, delete everything in `/solutions` folder
2. Re-upload the tar.gz file
3. Extract it
4. Recreate the Node.js app in hPanel
5. Restart

---

**🎉 That's it! No SSH, no terminal commands, just upload and configure!**

Your forex brokerage website is now live!
