# 📦 Upload & Deploy Instructions

## ✅ Pre-Built Package Ready!

I've built your application locally. The file `forex-brokerage-production.tar.gz` contains everything you need.

## 🚀 Quick Deployment (3 Steps)

### Step 1: Upload the Package

**Option A: Using File Manager**
1. Log in to Hostinger hPanel
2. Open **File Manager**
3. Navigate to `/public_html/solutions`
4. Click **Upload** → Select `forex-brokerage-production.tar.gz`
5. Wait for upload to complete
6. Right-click the file → **Extract**

**Option B: Using SCP (from your computer)**
```bash
scp forex-brokerage-production.tar.gz u427305155@thesoftclose.com:/home/u427305155/domains/thesoftclose.com/public_html/solutions/
```

### Step 2: Extract and Install Dependencies (SSH)

```bash
# SSH into your server
ssh u427305155@thesoftclose.com

# Navigate to your directory
cd /home/u427305155/domains/thesoftclose.com/public_html/solutions

# Extract the archive
tar -xzf forex-brokerage-production.tar.gz

# Set up Node.js 20 environment
export PATH=/opt/alt/alt-nodejs20/root/usr/bin:$PATH

# Install ONLY production dependencies (no dev dependencies needed now)
npm install --omit=dev

# Set permissions
chmod 755 data logs
chmod 666 data/*.json

# Start the application
node server.js
```

### Step 3: Set Up PM2 (Keep it Running)

```bash
# Install PM2 globally (if not already installed)
npm install -g pm2

# Start with PM2
pm2 start server.js --name forex-brokerage

# Save PM2 configuration
pm2 save

# Set PM2 to start on reboot
pm2 startup
# Copy and run the command it gives you
```

## 🌐 Access Your Website

Your website will be available at:
- **Main Site:** https://thesoftclose.com
- **Admin Register:** https://thesoftclose.com/admin/register
- **Admin Login:** https://thesoftclose.com/admin/login
- **Admin Dashboard:** https://thesoftclose.com/admin/dashboard

## 🔧 Configure Domain in hPanel (Important!)

1. Go to **hPanel** → **Advanced** → **Node.js**
2. Click **Setup Node.js App**
3. Configure:
   - **Node.js version:** 20.x
   - **Application mode:** Production
   - **Application root:** `/home/u427305155/domains/thesoftclose.com/public_html/solutions`
   - **Application URL:** thesoftclose.com
   - **Application startup file:** server.js
   - **Port:** 3000
4. Click **Save**

## 📊 Useful Commands

### Check if app is running:
```bash
pm2 status
```

### View logs:
```bash
pm2 logs forex-brokerage
```

### Restart app:
```bash
pm2 restart forex-brokerage
```

### Stop app:
```bash
pm2 stop forex-brokerage
```

## 🎯 First-Time Setup

1. **Create Admin Account**
   - Go to https://thesoftclose.com/admin/register
   - Create your admin account

2. **Configure Settings**
   - Login at https://thesoftclose.com/admin/login
   - Go to https://thesoftclose.com/admin/settings
   - Set up:
     - Calendly link
     - WhatsApp number and message
     - Facebook Pixel (optional)

## ✅ What's Included in This Package:

- ✓ Pre-built Next.js application (.next folder)
- ✓ All source code (app, components, lib)
- ✓ Server configuration (server.js)
- ✓ PM2 configuration (ecosystem.config.js)
- ✓ Data directory structure
- ✓ Package configurations

## 🔄 Future Updates

When you need to update the website:

1. I'll build it locally again
2. Create new package
3. You upload and extract
4. Run: `pm2 restart forex-brokerage`

## 🆘 Troubleshooting

### If site doesn't load:
```bash
# Check if process is running
pm2 status

# Check logs for errors
pm2 logs forex-brokerage

# Restart
pm2 restart forex-brokerage
```

### If you see "Module not found":
```bash
# Reinstall dependencies
cd /home/u427305155/domains/thesoftclose.com/public_html/solutions
export PATH=/opt/alt/alt-nodejs20/root/usr/bin:$PATH
npm install --omit=dev
pm2 restart forex-brokerage
```

## 📁 File Location

The production package is located at:
`/Users/macbookairm2/Documents/forex solution/forex-brokerage/forex-brokerage-production.tar.gz`

**File size:** ~26MB

---

**🎉 Your forex brokerage website is ready to deploy!**

Just upload the tar.gz file, extract it, install dependencies, and start with PM2!
