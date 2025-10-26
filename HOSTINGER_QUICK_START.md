# 🚀 Hostinger Deployment - Quick Start Guide

## Prerequisites

1. **Hostinger Account** with VPS or Business plan
2. **SSH Access** enabled
3. **Domain Name** configured
4. **Node.js Support** enabled in hPanel

## 5-Minute Deployment

### Step 1: Upload Project to Hostinger

**Option A: Using File Manager (Easiest)**
1. Compress your entire project folder to a ZIP file (exclude `node_modules` and `.next`)
2. Log in to Hostinger hPanel
3. Open **File Manager**
4. Navigate to `public_html`
5. Upload the ZIP file
6. Extract it

**Option B: Using FTP**
1. Use FileZilla or any FTP client
2. Connect to your Hostinger account
3. Upload all files to `public_html`

### Step 2: SSH into Your Server

```bash
ssh your-username@your-domain.com
```

Or use the built-in **SSH Terminal** in Hostinger hPanel.

### Step 3: Navigate to Project Directory

```bash
cd public_html
```

### Step 4: Run the Deployment Script

```bash
chmod +x deploy.sh
./deploy.sh
```

This script will:
- ✅ Check Node.js version
- ✅ Create data directories
- ✅ Install dependencies
- ✅ Build the application
- ✅ Start PM2 process manager
- ✅ Launch your website

### Step 5: Configure Node.js in hPanel

1. Go to **Advanced** → **Node.js**
2. Click **Setup Node.js App**
3. Configure:
   - **Node.js version:** 18.x or higher
   - **Application mode:** Production
   - **Application root:** `/public_html`
   - **Application URL:** your-domain.com
   - **Application startup file:** `server.js`
   - **Port:** 3000

4. Click **Save**

### Step 6: Access Your Website

Your website should now be live at:
- **Main Site:** `https://your-domain.com`
- **Admin Panel:** `https://your-domain.com/admin/register`

## Initial Setup

### 1. Create Admin Account
1. Go to `https://your-domain.com/admin/register`
2. Create your admin account
3. Login at `https://your-domain.com/admin/login`

### 2. Configure Settings
1. Go to `https://your-domain.com/admin/settings`
2. Set up:
   - Calendly booking link
   - WhatsApp number and message
   - Facebook Pixel ID and Access Token (optional)
3. Click **Save Settings**

## Important URLs

| Page | URL |
|------|-----|
| Homepage | `https://your-domain.com` |
| Admin Register | `https://your-domain.com/admin/register` |
| Admin Login | `https://your-domain.com/admin/login` |
| Admin Dashboard | `https://your-domain.com/admin/dashboard` |
| Admin Settings | `https://your-domain.com/admin/settings` |
| Privacy Policy | `https://your-domain.com/legal/privacy-policy` |
| Terms of Service | `https://your-domain.com/legal/terms-of-service` |
| Refund Policy | `https://your-domain.com/legal/refund-policy` |

## Common Commands

### View Application Logs
```bash
pm2 logs forex-brokerage
```

### Restart Application
```bash
pm2 restart forex-brokerage
```

### Check Application Status
```bash
pm2 status
```

### Stop Application
```bash
pm2 stop forex-brokerage
```

### Monitor in Real-time
```bash
pm2 monit
```

## Updating Your Website

When you need to update your website:

```bash
cd public_html
git pull origin main  # If using Git
npm install --production
npm run build
pm2 restart forex-brokerage
```

Or simply re-run the deployment script:
```bash
./deploy.sh
```

## SSL Certificate Setup

### Option 1: Free SSL via Hostinger
1. Go to **SSL** section in hPanel
2. Click **Install** on Free SSL Certificate
3. Wait 10-15 minutes for activation

### Option 2: Let's Encrypt (Manual)
```bash
certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Troubleshooting

### Website Not Loading?
1. Check PM2 status: `pm2 status`
2. View logs: `pm2 logs forex-brokerage`
3. Restart: `pm2 restart forex-brokerage`

### 502 Bad Gateway?
- Ensure Node.js app is running in hPanel
- Check port 3000 is not blocked
- Verify server.js file exists

### Data Not Saving?
Check permissions:
```bash
cd public_html
chmod 755 data
chmod 666 data/*.json
```

### Facebook Pixel Not Working?
- Configure Pixel ID in `/admin/settings`
- Check browser console for errors
- Verify domain is allowed in Facebook Events Manager

## Performance Tips

1. **Enable Caching** - Configure in Hostinger hPanel
2. **Use CDN** - Hostinger offers free Cloudflare integration
3. **Optimize Images** - Use Next.js Image component
4. **Monitor Performance** - Use `pm2 monit`

## Security Checklist

- [ ] SSL certificate installed
- [ ] Strong admin password created
- [ ] Regular backups enabled
- [ ] File permissions set correctly
- [ ] Firewall configured (if VPS)
- [ ] Keep Node.js and packages updated

## Support Resources

- **Hostinger Tutorials:** https://www.hostinger.com/tutorials
- **Next.js Docs:** https://nextjs.org/docs
- **PM2 Documentation:** https://pm2.keymetrics.io/docs

## Need Help?

Contact Hostinger support or check the detailed `DEPLOYMENT.md` file for advanced configurations.

---

**🎉 Congratulations!** Your forex brokerage website is now live on the internet!
