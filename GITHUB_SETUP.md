# GitHub Authentication Fix

## Problem
GitHub no longer accepts passwords. You need a Personal Access Token.

## Solution (2 Minutes)

### Step 1: Create Personal Access Token

1. Click this link: https://github.com/settings/tokens/new

2. Fill in the form:
   - **Note**: `Forex Brokerage`
   - **Expiration**: Select `No expiration`
   - **Scopes**: Check ONLY `repo` (full control of private repositories)

3. Click **Generate token** at the bottom

4. **COPY THE TOKEN** - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   
   **IMPORTANT:** Save it somewhere safe! You won't see it again.

---

### Step 2: Push to GitHub Using Token

Run this command in Terminal:

```bash
cd "/Users/macbookairm2/Documents/forex solution/forex-brokerage"
git push -u origin main
```

When prompted:
- **Username**: `sansonit36`
- **Password**: Paste your token (the `ghp_xxxxx` thing you just copied)

**Done!** Your code is now on GitHub.

---

## Alternative: Use SSH (No Password Needed)

If you want to avoid tokens in the future:

### 1. Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter 3 times (use defaults)
```

### 2. Copy SSH Key

```bash
cat ~/.ssh/id_ed25519.pub
# Copy the entire output
```

### 3. Add to GitHub

1. Go to: https://github.com/settings/ssh/new
2. Title: `MacBook Air M2`
3. Paste the key you copied
4. Click **Add SSH key**

### 4. Update Git Remote

```bash
cd "/Users/macbookairm2/Documents/forex solution/forex-brokerage"
git remote remove origin
git remote add origin git@github.com:sansonit36/forex-brokerage.git
git push -u origin main
# No password needed!
```

---

## Quick Reference

**Repository URL**: https://github.com/sansonit36/forex-brokerage

**To push changes later:**
```bash
cd "/Users/macbookairm2/Documents/forex solution/forex-brokerage"
git add .
git commit -m "Your changes"
git push
```

**First time using token:**
- Username: `sansonit36`
- Password: Your token (`ghp_xxxxx`)

**After first push:**
- Mac saves credentials
- Future pushes won't ask for password
