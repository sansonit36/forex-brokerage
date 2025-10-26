# Connect Hostinger Subdomain to Vercel

## Your Setup
- **Subdomain:** solutions.thesoftclose.com
- **Hosting:** Vercel (where your Next.js site will run)
- **Domain Registrar:** Hostinger

---

## Step-by-Step Guide

### Part 1: Deploy to Vercel First

1. **Go to Vercel:** https://vercel.com/login
2. **Sign in with GitHub**
3. **Import your repository:**
   - Click "Add New" → "Project"
   - Select "forex-brokerage"
   - Click "Deploy"
4. **Wait for deployment** (30 seconds)
   - You'll get a URL like: `forex-brokerage-xxx.vercel.app`

---

### Part 2: Add Custom Domain in Vercel

1. **In Vercel Dashboard:**
   - Go to your project "forex-brokerage"
   - Click "Settings" tab
   - Click "Domains" in sidebar

2. **Add your subdomain:**
   - Enter: `solutions.thesoftclose.com`
   - Click "Add"

3. **Vercel will show you DNS settings:**
   - You'll see something like:
   ```
   Type: CNAME
   Name: solutions
   Value: cname.vercel-dns.com
   ```
   - **Keep this page open!** You'll need these values.

---

### Part 3: Update DNS in Hostinger

1. **Log into Hostinger hPanel:** https://hpanel.hostinger.com

2. **Navigate to DNS Zone Editor:**
   - Go to "Domains" section
   - Find "thesoftclose.com"
   - Click "Manage" → "DNS / Nameservers"
   - Click "DNS Zone Editor"

3. **Add CNAME Record:**
   
   **Option A: If "solutions" subdomain doesn't exist:**
   - Click "Add Record"
   - Type: `CNAME`
   - Name: `solutions`
   - Points to: `cname.vercel-dns.com`
   - TTL: `14400` (or leave default)
   - Click "Add Record"

   **Option B: If "solutions" subdomain already exists:**
   - Find the existing record for "solutions"
   - Click "Edit" or "Delete" the old one
   - Create new CNAME record as above

4. **Save changes**

---

### Part 4: Verify in Vercel

1. **Go back to Vercel** (the page you kept open)
2. **Click "Verify"** next to your domain
3. **Wait for verification** (can take 5-60 minutes)
   - Vercel will check the DNS settings
   - When verified, you'll see a green checkmark

4. **SSL Certificate:**
   - Vercel automatically provisions SSL
   - Your site will be available at `https://solutions.thesoftclose.com`

---

## DNS Settings Reference

### What to add in Hostinger DNS:

```
Type:        CNAME
Name:        solutions
Target:      cname.vercel-dns.com
TTL:         14400 (or default)
```

**Important:**
- Use `solutions` as name (NOT `solutions.thesoftclose.com`)
- The target is `cname.vercel-dns.com`
- Delete any existing A records for the same subdomain

---

## Alternative Method (If CNAME Doesn't Work)

If Hostinger doesn't allow CNAME for subdomains, use A records:

### Get Vercel's IP Addresses:

In Vercel domain settings, they'll show:
```
Type: A
Name: solutions
Value: 76.76.21.21
```

### Add in Hostinger:
- Type: `A`
- Name: `solutions`
- Points to: `76.76.21.21` (use the IP Vercel provides)
- TTL: `14400`

---

## Troubleshooting

### "Domain already in use"
- The subdomain might be pointed elsewhere
- Check Hostinger DNS records
- Delete conflicting records

### "Verification taking too long"
- DNS changes can take up to 48 hours (usually 5-30 minutes)
- Use this tool to check: https://dnschecker.org
- Search for: `solutions.thesoftclose.com`

### "SSL certificate pending"
- This is normal - Vercel needs time to provision SSL
- Can take 5-10 minutes
- Don't worry, it's automatic

### "Invalid DNS configuration"
- Make sure you used `solutions` not `solutions.thesoftclose.com` in the Name field
- Verify target is exactly `cname.vercel-dns.com`
- Check for typos

---

## Timeline Expectations

- **Vercel deployment:** 30 seconds
- **DNS propagation:** 5-60 minutes (average: 15 minutes)
- **SSL certificate:** 5-10 minutes after DNS verification

**Total time:** Usually live within 30 minutes!

---

## Testing Your Setup

### Check DNS Propagation:
```bash
# On your Mac Terminal:
dig solutions.thesoftclose.com

# You should see it pointing to Vercel's servers
```

### Check Website:
1. Wait for Vercel to show "Valid Configuration"
2. Visit: `https://solutions.thesoftclose.com`
3. Your forex brokerage site should load!

---

## What Happens After Setup

- **Your site URL:** https://solutions.thesoftclose.com
- **Admin panel:** https://solutions.thesoftclose.com/admin/login
- **Automatic SSL:** https (padlock in browser)
- **Auto-deploy:** Every GitHub push = instant update

---

## Quick Reference

**Hostinger DNS Settings:**
```
CNAME Record:
Name: solutions
Target: cname.vercel-dns.com
```

**Vercel Domain:**
```
Domain: solutions.thesoftclose.com
Status: Valid Configuration ✓
SSL: Active ✓
```

---

## Need Help?

**DNS not propagating?**
- Clear your browser cache
- Try incognito mode
- Use different device/network
- Check https://dnschecker.org

**Vercel verification failing?**
- Double-check DNS settings in Hostinger
- Wait 30 more minutes
- Contact Vercel support (they're very helpful!)

**SSL not working?**
- Wait 10 minutes
- Vercel auto-provisions SSL
- It will work automatically

---

## Screenshot Guide

### In Hostinger:
1. Domains → Manage → DNS Zone Editor
2. Add Record → CNAME
3. Name: `solutions`
4. Points to: `cname.vercel-dns.com`
5. Click Add

### In Vercel:
1. Project Settings → Domains
2. Enter: `solutions.thesoftclose.com`
3. Click Add
4. Wait for green checkmark

---

**Your site will be live at:**
## https://solutions.thesoftclose.com

Fast, secure, and professional! 🚀
