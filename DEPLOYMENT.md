# Hostinger Deployment Guide

## Prerequisites
- Hostinger VPS or Business hosting plan with Node.js support
- SSH access to your Hostinger server
- Domain name configured in Hostinger

## Step 1: Prepare Your Hostinger Account

### 1.1 Enable Node.js in Hostinger
1. Log in to Hostinger hPanel
2. Go to **Advanced** → **Node.js**
3. Select Node.js version **18.x or higher**
4. Click **Enable**

### 1.2 Set Application Root
- Set the application root to: `public_html` or your custom folder
- Set the application URL to your domain

## Step 2: Upload Your Project

### Option A: Using Git (Recommended)

1. **SSH into your Hostinger server:**
```bash
ssh your-username@your-domain.com
```

2. **Navigate to your application directory:**
```bash
cd public_html
```

3. **Clone your repository (or upload files):**
```bash
git clone https://github.com/yourusername/forex-brokerage.git .
# Or upload via FTP/File Manager
```

### Option B: Using FTP/File Manager

1. Compress your entire project folder (excluding `node_modules` and `.next`)
2. Upload via Hostinger File Manager or FTP
3. Extract the files in `public_html`

## Step 3: Install Dependencies

1. **SSH into your server:**
```bash
ssh your-username@your-domain.com
```

2. **Navigate to project directory:**
```bash
cd public_html
```

3. **Install dependencies:**
```bash
npm install --production
```

## Step 4: Build the Application

```bash
npm run build
```

## Step 5: Configure Node.js Application in Hostinger

1. Go to **Advanced** → **Node.js** in hPanel
2. Click **Setup Node.js App**
3. Configure as follows:
   - **Node.js version:** 18.x or higher
   - **Application mode:** Production
   - **Application root:** `/public_html` (or your folder)
   - **Application URL:** your-domain.com
   - **Application startup file:** `server.js` (we'll create this)
   - **Environment variables:** (Add if needed)

## Step 6: Create Server File

Create a `server.js` file in your project root:

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
```

## Step 7: Set Up PM2 (Process Manager)

1. **Install PM2 globally:**
```bash
npm install -g pm2
```

2. **Start your application:**
```bash
pm2 start npm --name "forex-brokerage" -- start
```

3. **Save PM2 configuration:**
```bash
pm2 save
pm2 startup
```

## Step 8: Configure Nginx/Apache (If needed)

### For Nginx:
Create a reverse proxy configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Step 9: Set Up SSL Certificate

1. Go to **SSL** section in hPanel
2. Enable **Free SSL Certificate**
3. Or use Let's Encrypt:
```bash
certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Step 10: Configure Environment (if needed)

Create `.env.production` file:
```
NODE_ENV=production
PORT=3000
```

## Post-Deployment Checklist

- [ ] Application builds successfully
- [ ] All dependencies installed
- [ ] PM2 process running
- [ ] Domain pointing to correct server
- [ ] SSL certificate active
- [ ] Admin panel accessible at `/admin/register`
- [ ] Contact form working
- [ ] Facebook Pixel tracking configured
- [ ] Data directory has proper permissions

## Monitoring & Maintenance

### View Application Logs:
```bash
pm2 logs forex-brokerage
```

### Restart Application:
```bash
pm2 restart forex-brokerage
```

### Update Application:
```bash
git pull origin main
npm install --production
npm run build
pm2 restart forex-brokerage
```

### Check Application Status:
```bash
pm2 status
```

## Troubleshooting

### Issue: Application not starting
**Solution:** Check PM2 logs: `pm2 logs forex-brokerage`

### Issue: 502 Bad Gateway
**Solution:** 
- Ensure Node.js app is running: `pm2 status`
- Check port configuration
- Verify Nginx/Apache proxy settings

### Issue: Data not persisting
**Solution:**
- Check `/data` directory permissions: `chmod 755 data`
- Ensure write permissions: `chmod 666 data/*.json`

### Issue: Facebook Pixel not tracking
**Solution:**
- Configure Pixel ID and Access Token in `/admin/settings`
- Check browser console for errors
- Verify Events Manager in Facebook

## Performance Optimization

1. **Enable Caching:**
   - Configure Next.js cache headers
   - Use CDN for static assets

2. **Optimize Images:**
   - Use Next.js Image component
   - Configure image optimization in `next.config.ts`

3. **Database Migration (Future):**
   - Consider migrating from JSON to PostgreSQL/MySQL
   - Hostinger provides database hosting

## Support

- Hostinger Support: https://www.hostinger.com/tutorials
- Next.js Documentation: https://nextjs.org/docs
- Project Issues: Contact your development team

## Security Best Practices

1. Keep Node.js and dependencies updated
2. Use environment variables for sensitive data
3. Enable firewall rules
4. Regular backups of `/data` directory
5. Monitor application logs for suspicious activity
6. Use strong admin passwords
7. Enable rate limiting for API routes

---

**Deployment Date:** [Add date when deployed]  
**Domain:** [Add your domain]  
**Node.js Version:** [Add version]
