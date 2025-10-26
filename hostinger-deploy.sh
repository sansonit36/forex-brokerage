#!/bin/bash

# Hostinger Cloud Deployment Script for Next.js Forex Brokerage
# ================================================================

set -e

echo "🚀 Starting Hostinger Cloud Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
DOMAIN=${1:-"yourdomain.com"}
APP_NAME="forex-brokerage"
APP_DIR="/home/$(whoami)/$APP_NAME"
PORT=3000

echo -e "${GREEN}Domain: $DOMAIN${NC}"
echo -e "${GREEN}App Directory: $APP_DIR${NC}"
echo -e "${GREEN}Port: $PORT${NC}"
echo ""

# Step 1: Check Node.js installation
echo -e "${YELLOW}[Step 1/8]${NC} Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js not found. Installing Node.js 20...${NC}"
    curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

NODE_VERSION=$(node -v)
echo -e "${GREEN}✓ Node.js $NODE_VERSION installed${NC}"
echo ""

# Step 2: Install dependencies
echo -e "${YELLOW}[Step 2/8]${NC} Installing dependencies..."
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Step 3: Create data directory
echo -e "${YELLOW}[Step 3/8]${NC} Setting up data directory..."
mkdir -p data
if [ ! -f data/leads.json ]; then
    echo '[]' > data/leads.json
fi
if [ ! -f data/admins.json ]; then
    echo '[]' > data/admins.json
fi
if [ ! -f data/forms.json ]; then
    echo '[]' > data/forms.json
fi
chmod 755 data
chmod 644 data/*.json
echo -e "${GREEN}✓ Data directory ready${NC}"
echo ""

# Step 4: Build production
echo -e "${YELLOW}[Step 4/8]${NC} Building production version..."
npm run build
echo -e "${GREEN}✓ Build completed${NC}"
echo ""

# Step 5: Install PM2
echo -e "${YELLOW}[Step 5/8]${NC} Setting up PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
fi
echo -e "${GREEN}✓ PM2 installed${NC}"
echo ""

# Step 6: Start/Restart application
echo -e "${YELLOW}[Step 6/8]${NC} Starting application..."
if pm2 list | grep -q "$APP_NAME"; then
    pm2 restart $APP_NAME
    echo -e "${GREEN}✓ Application restarted${NC}"
else
    pm2 start npm --name "$APP_NAME" -- start
    pm2 save
    echo -e "${GREEN}✓ Application started${NC}"
fi
echo ""

# Step 7: Configure PM2 startup
echo -e "${YELLOW}[Step 7/8]${NC} Configuring auto-start on reboot..."
pm2 startup | tail -n 1 | bash || true
pm2 save
echo -e "${GREEN}✓ Auto-start configured${NC}"
echo ""

# Step 8: Display status
echo -e "${YELLOW}[Step 8/8]${NC} Deployment status..."
echo ""
pm2 status

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  ✓ Deployment Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "Your Next.js app is now running on port ${GREEN}$PORT${NC}"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "1. Configure Nginx reverse proxy:"
echo "   sudo nano /etc/nginx/sites-available/$DOMAIN"
echo ""
echo "2. Add this configuration:"
echo "   server {"
echo "       listen 80;"
echo "       server_name $DOMAIN www.$DOMAIN;"
echo ""
echo "       location / {"
echo "           proxy_pass http://localhost:$PORT;"
echo "           proxy_http_version 1.1;"
echo "           proxy_set_header Upgrade \$http_upgrade;"
echo "           proxy_set_header Connection 'upgrade';"
echo "           proxy_set_header Host \$host;"
echo "           proxy_cache_bypass \$http_upgrade;"
echo "       }"
echo "   }"
echo ""
echo "3. Enable site and restart Nginx:"
echo "   sudo ln -s /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/"
echo "   sudo nginx -t"
echo "   sudo systemctl restart nginx"
echo ""
echo "4. Install SSL certificate:"
echo "   sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
echo ""
echo -e "${GREEN}Useful PM2 Commands:${NC}"
echo "  pm2 status              - View app status"
echo "  pm2 logs $APP_NAME      - View app logs"
echo "  pm2 restart $APP_NAME   - Restart app"
echo "  pm2 stop $APP_NAME      - Stop app"
echo "  pm2 monit               - Monitor app resources"
echo ""
echo -e "Visit: ${GREEN}http://localhost:$PORT${NC} to test locally"
echo -e "After Nginx setup: ${GREEN}https://$DOMAIN${NC}"
echo ""
