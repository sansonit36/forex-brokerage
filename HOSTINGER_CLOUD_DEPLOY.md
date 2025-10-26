# Hostinger Cloud Deployment Guide
# Complete Next.js Forex Brokerage Setup

## 📋 Prerequisites

- Hostinger Cloud Plan (VPS/Cloud)
- SSH access enabled
- Domain configured to point to your server
- Basic terminal/SSH knowledge

---

## 🚀 Quick Deployment (Automated)

### **Option 1: One-Command Deploy**

1. **Upload your project to Hostinger** via FTP/Git
2. **SSH into your server**:
   ```bash
   ssh u123456789@your-server-ip -p 65002
   ```

3. **Navigate to your project** and run:
   ```bash
   cd /home/u123456789/forex-brokerage
   chmod +x hostinger-deploy.sh
   ./hostinger-deploy.sh yourdomain.com
   ```

That's it! The script will:
- ✓ Install Node.js 20 if needed
- ✓ Install dependencies
- ✓ Build production version
- ✓ Set up PM2 process manager
- ✓ Configure auto-restart on reboot
- ✓ Start your application

---

## 📝 Manual Deployment (Step-by-Step)

### **Step 1: Upload Project**

**Method A: Git (Recommended)**
```bash
# On your local machine
cd "/Users/macbookairm2/Documents/forex solution/forex-brokerage"

# Create GitHub repository (private)
# Then push:
git init
git add .
git commit -m "Initial deployment"
git remote add origin https://github.com/yourusername/forex-brokerage.git
git push -u origin main

# On Hostinger server via SSH
cd /home/u123456789
git clone https://github.com/yourusername/forex-brokerage.git
```

**Method B: FTP Upload**
- Use FileZilla/Cyberduck
- Upload entire `forex-brokerage` folder to `/home/u123456789/`

---

### **Step 2: Install Node.js**

```bash
# Check current version
node -v

# If not Node.js 20, install it
curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify
node -v  # Should show v20.x.x
npm -v   # Should show 10.x.x
```

---

### **Step 3: Install Dependencies & Build**

```bash
cd /home/u123456789/forex-brokerage

# Install packages
npm install

# Create data directory
mkdir -p data
echo '[]' > data/leads.json
echo '[]' > data/admins.json
echo '[]' > data/forms.json

# Build production
npm run build
```

---

### **Step 4: Install & Configure PM2**

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start your app
pm2 start npm --name "forex-brokerage" -- start

# Save PM2 configuration
pm2 save

# Set up auto-start on reboot
pm2 startup
# Copy and run the command it outputs

# Verify it's running
pm2 status
pm2 logs forex-brokerage
```

**Useful PM2 Commands:**
```bash
pm2 status                    # View all apps
pm2 logs forex-brokerage      # View logs
pm2 restart forex-brokerage   # Restart app
pm2 stop forex-brokerage      # Stop app
pm2 delete forex-brokerage    # Remove app
pm2 monit                     # Monitor resources
```

---

### **Step 5: Configure Nginx Reverse Proxy**

```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/yourdomain.com
```

**Paste this configuration:**
```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name yourdomain.com www.yourdomain.com;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Logging
    access_log /var/log/nginx/forex-brokerage.access.log;
    error_log /var/log/nginx/forex-brokerage.error.log;
    
    # Proxy to Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Static files (Next.js handles these, but good to have)
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
    }
    
    # Images
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 7d;
        add_header Cache-Control "public, max-age=604800";
    }
}
```

**Enable site and restart Nginx:**
```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

---

### **Step 6: Install SSL Certificate (HTTPS)**

```bash
# Install Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow prompts:
# 1. Enter email
# 2. Agree to terms
# 3. Choose to redirect HTTP to HTTPS (recommended)

# Verify auto-renewal
sudo certbot renew --dry-run
```

---

### **Step 7: Configure Environment Variables**

```bash
cd /home/u123456789/forex-brokerage

# Create environment file
nano .env.local
```

**Add your settings:**
```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Your Forex Brokerage

# Facebook Pixel (optional - can also set in admin panel)
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_pixel_id
FACEBOOK_ACCESS_TOKEN=your_access_token

# Security
JWT_SECRET=your_secure_random_string_here_min_32_chars

# Admin Panel
NEXT_PUBLIC_ADMIN_EMAIL=admin@yourdomain.com
```

**Restart app to apply changes:**
```bash
pm2 restart forex-brokerage
```

---

### **Step 8: Set File Permissions**

```bash
cd /home/u123456789/forex-brokerage

# Set proper permissions
chmod -R 755 .
chmod -R 755 data
chmod 644 data/*.json

# Make data writable by Node.js
chown -R $(whoami):$(whoami) data
```

---

## 🔒 Security Checklist

- [ ] SSL certificate installed (HTTPS)
- [ ] Firewall configured (allow 80, 443, 65002)
- [ ] SSH key-based authentication enabled
- [ ] Strong passwords for admin panel
- [ ] Regular backups configured
- [ ] PM2 monitoring enabled

```bash
# Configure firewall
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 65002/tcp
sudo ufw enable
```

---

## 📊 Monitoring & Maintenance

### **Check Application Status**
```bash
pm2 status
pm2 logs forex-brokerage --lines 100
```

### **Monitor Resources**
```bash
pm2 monit
htop
```

### **View Nginx Logs**
```bash
sudo tail -f /var/log/nginx/forex-brokerage.access.log
sudo tail -f /var/log/nginx/forex-brokerage.error.log
```

### **Restart Services**
```bash
# Restart app
pm2 restart forex-brokerage

# Restart Nginx
sudo systemctl restart nginx

# Restart server
sudo reboot
```

---

## 🔄 Update Deployment Workflow

```bash
# SSH into server
ssh u123456789@your-server-ip -p 65002

# Navigate to project
cd /home/u123456789/forex-brokerage

# Pull latest changes
git pull origin main

# Install new dependencies (if any)
npm install

# Rebuild
npm run build

# Restart app
pm2 restart forex-brokerage

# Check logs
pm2 logs forex-brokerage --lines 50
```

---

## 🎯 Access Points

After successful deployment:

- **Website**: https://yourdomain.com
- **Admin Panel**: https://yourdomain.com/admin/login
- **Admin Registration**: https://yourdomain.com/admin/register

**Default Admin Setup:**
1. Visit `/admin/register`
2. Create your admin account
3. Log in at `/admin/login`
4. Configure Facebook Pixel in settings

---

## 🐛 Troubleshooting

### **App won't start**
```bash
# Check PM2 logs
pm2 logs forex-brokerage --lines 100

# Check Node.js version
node -v  # Should be 18+

# Rebuild
npm run build
pm2 restart forex-brokerage
```

### **502 Bad Gateway**
```bash
# Check if app is running
pm2 status

# Check Nginx configuration
sudo nginx -t

# Restart both services
pm2 restart forex-brokerage
sudo systemctl restart nginx
```

### **SSL certificate issues**
```bash
# Renew certificate manually
sudo certbot renew

# Check certificate status
sudo certbot certificates
```

### **Data not persisting**
```bash
# Check file permissions
ls -la data/

# Fix permissions
chmod 755 data
chmod 644 data/*.json
chown -R $(whoami):$(whoami) data
```

---

## 📞 Support Resources

- **Hostinger Support**: Live chat in hPanel
- **PM2 Documentation**: https://pm2.keymetrics.io/
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Certbot Guide**: https://certbot.eff.org/

---

## ✅ Post-Deployment Checklist

- [ ] Website loads at https://yourdomain.com
- [ ] All pages accessible (Home, Contact, About)
- [ ] Contact form submits successfully
- [ ] Admin panel accessible
- [ ] Admin can log in
- [ ] Leads appear in admin dashboard
- [ ] Facebook Pixel configured
- [ ] SSL certificate active (padlock in browser)
- [ ] Mobile responsive design working
- [ ] All animations/effects working
- [ ] PM2 auto-restart configured
- [ ] Backups scheduled

---

**Need help?** Check the logs first:
```bash
pm2 logs forex-brokerage
sudo tail -f /var/log/nginx/error.log
```
