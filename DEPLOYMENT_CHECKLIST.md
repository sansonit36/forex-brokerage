# 📋 Hostinger Deployment Checklist

Use this checklist to ensure a smooth deployment to Hostinger.

## Pre-Deployment (On Your Computer)

### 1. Project Preparation
- [ ] All code changes committed
- [ ] Test locally: `npm run dev`
- [ ] Test production build: `./test-build.sh`
- [ ] All features working as expected
- [ ] No console errors
- [ ] All forms submitting correctly

### 2. Environment Check
- [ ] Node.js version 18+ installed
- [ ] All dependencies in `package.json`
- [ ] Data directory structure correct
- [ ] Legal pages content reviewed

### 3. Content Review
- [ ] Company name: "SoftClose Solutions" ✓
- [ ] Founder name: "Husnain Ghani" ✓
- [ ] Phone number: +92 318 4451469 ✓
- [ ] Email: support@softclose.com ✓
- [ ] Pricing: $8K/$6K and $12K/$8K ✓
- [ ] All icons (no emojis) ✓

## Hostinger Account Setup

### 1. Hosting Plan
- [ ] VPS or Business hosting plan active
- [ ] Sufficient resources (2GB RAM minimum recommended)
- [ ] Domain name registered/transferred
- [ ] Domain DNS configured

### 2. hPanel Configuration
- [ ] SSH access enabled
- [ ] Node.js support activated (v18.x or higher)
- [ ] File Manager access confirmed
- [ ] FTP credentials (if using FTP)

### 3. Domain Configuration
- [ ] Domain pointing to Hostinger nameservers
- [ ] A record configured (if using custom DNS)
- [ ] Domain propagation complete (check: whatsmydns.net)

## File Upload

### Choose Upload Method:
- [ ] **Option A:** File Manager (compress → upload → extract)
- [ ] **Option B:** FTP (FileZilla or similar)
- [ ] **Option C:** Git (clone from repository)

### Files to Upload:
- [ ] All project files uploaded to `public_html`
- [ ] Exclude `node_modules` folder
- [ ] Exclude `.next` folder
- [ ] Exclude `.git` folder (optional)
- [ ] Include `.gitignore`
- [ ] Include all configuration files

## Server Setup (SSH)

### 1. SSH Connection
- [ ] Successfully connected via SSH
- [ ] Located in correct directory (`cd public_html`)
- [ ] Verified Node.js version (`node -v`)
- [ ] Verified npm version (`npm -v`)

### 2. Run Deployment Script
```bash
chmod +x deploy.sh
./deploy.sh
```

- [ ] Script executed successfully
- [ ] Dependencies installed
- [ ] Build completed without errors
- [ ] PM2 process started
- [ ] Application showing as "online"

### 3. Node.js App Configuration
- [ ] Configured in hPanel → Advanced → Node.js
- [ ] Application mode: Production
- [ ] Application root: `/public_html`
- [ ] Startup file: `server.js`
- [ ] Port: 3000
- [ ] Environment: production

## Post-Deployment Verification

### 1. Website Access
- [ ] Homepage loads: `https://your-domain.com`
- [ ] No 404 or 502 errors
- [ ] All pages accessible
- [ ] Mobile responsive
- [ ] Images loading correctly

### 2. Functionality Testing
- [ ] Contact form submission works
- [ ] Form validation working
- [ ] Thank you page displays correctly
- [ ] All internal links working
- [ ] Legal pages accessible

### 3. Admin Panel
- [ ] Admin register page loads: `/admin/register`
- [ ] Can create admin account
- [ ] Login page works: `/admin/login`
- [ ] Dashboard loads: `/admin/dashboard`
- [ ] Settings page accessible: `/admin/settings`
- [ ] Can view leads in dashboard
- [ ] Can export CSV
- [ ] View button opens lead details modal

### 4. Settings Configuration
- [ ] Calendly link configured
- [ ] WhatsApp number set
- [ ] WhatsApp message customized
- [ ] Facebook Pixel ID added (if applicable)
- [ ] Facebook Access Token added (if applicable)
- [ ] Settings saving correctly

## Security Setup

### 1. SSL Certificate
- [ ] Free SSL certificate installed (hPanel → SSL)
- [ ] HTTPS working
- [ ] HTTP redirects to HTTPS
- [ ] SSL certificate valid (check padlock icon)
- [ ] No mixed content warnings

### 2. Firewall & Security
- [ ] Changed default SSH port (VPS only)
- [ ] Firewall rules configured (VPS only)
- [ ] Strong admin password created
- [ ] Unnecessary ports closed
- [ ] Fail2ban installed (VPS only, optional)

### 3. File Permissions
```bash
chmod 755 data
chmod 666 data/*.json
chmod 755 public_html
```
- [ ] Data directory permissions correct
- [ ] JSON files writable
- [ ] No 777 permissions (security risk)

## Performance Optimization

### 1. Caching
- [ ] Browser caching enabled (hPanel)
- [ ] Cloudflare enabled (optional)
- [ ] Static assets caching configured

### 2. CDN (Optional)
- [ ] Cloudflare CDN activated
- [ ] CDN cache rules configured
- [ ] Page rules set up

### 3. Monitoring
- [ ] PM2 monitoring active
- [ ] Application logs accessible: `pm2 logs`
- [ ] Error tracking in place

## Marketing & Analytics

### 1. Facebook Pixel
- [ ] Pixel ID configured in admin settings
- [ ] Access Token added
- [ ] Test form submission
- [ ] Verify event in Facebook Events Manager
- [ ] PageView tracking working
- [ ] Lead event tracking confirmed

### 2. SEO
- [ ] Meta tags present on all pages
- [ ] OpenGraph tags configured
- [ ] Twitter Card meta tags set
- [ ] Sitemap generated (optional)
- [ ] robots.txt created (optional)
- [ ] Google Analytics added (optional)

### 3. Social Media
- [ ] WhatsApp button working
- [ ] Phone number clickable on mobile
- [ ] Email links working
- [ ] Social share buttons (if added)

## Backup Strategy

### 1. Data Backup
- [ ] Backup `/data` directory locally
- [ ] Set up automated backups (Hostinger)
- [ ] Test restore procedure
- [ ] Document backup location

### 2. Code Backup
- [ ] Git repository created (recommended)
- [ ] All code pushed to GitHub/GitLab
- [ ] `.gitignore` configured properly
- [ ] Local copy maintained

## Documentation

### 1. Credentials & Access
- [ ] Document Hostinger login
- [ ] Save SSH credentials securely
- [ ] Note FTP details
- [ ] Record admin panel credentials
- [ ] Save Facebook Pixel credentials
- [ ] Document Calendly account

### 2. Important URLs
- [ ] Main domain documented
- [ ] Admin panel URLs noted
- [ ] API endpoint URLs (if applicable)
- [ ] Hosting control panel URL

## Go-Live Announcement

### 1. Testing
- [ ] Final round of testing completed
- [ ] All stakeholders approved
- [ ] Load testing performed (optional)
- [ ] Mobile testing complete

### 2. Launch
- [ ] DNS fully propagated
- [ ] Email notifications working
- [ ] Contact forms tested
- [ ] Lead capture confirmed
- [ ] Admin can view submissions

### 3. Post-Launch
- [ ] Monitor PM2 logs for 24 hours
- [ ] Check error rates
- [ ] Verify Facebook Pixel events
- [ ] Test from different devices
- [ ] Check Google Search Console (after indexing)

## Maintenance Schedule

### Daily
- [ ] Check PM2 status
- [ ] Review error logs
- [ ] Monitor lead submissions

### Weekly
- [ ] Backup data directory
- [ ] Review Facebook Pixel data
- [ ] Check SSL certificate expiry
- [ ] Update dependencies (if needed)

### Monthly
- [ ] Full system backup
- [ ] Security audit
- [ ] Performance review
- [ ] Update content (if needed)

## Emergency Contacts

- **Hostinger Support:** https://www.hostinger.com/contact
- **Technical Issues:** [Your developer email]
- **Hosting Account:** [Account owner email]

## Rollback Plan

In case of issues:
```bash
pm2 stop forex-brokerage
# Restore previous version
pm2 restart forex-brokerage
```

- [ ] Previous version backed up
- [ ] Rollback procedure tested
- [ ] Database backup available
- [ ] DNS backup records saved

---

## Deployment Status

**Deployment Date:** __________________  
**Deployed By:** __________________  
**Domain:** __________________  
**Node.js Version:** __________________  
**PM2 Process:** __________________  
**SSL Status:** __________________  

**Notes:**
_____________________________________________
_____________________________________________
_____________________________________________

---

**✅ Deployment Complete!** 

Your forex brokerage website is now live on Hostinger!
