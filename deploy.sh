#!/bin/bash

# Forex Brokerage Deployment Script for Hostinger
# This script automates the deployment process

echo "🚀 Starting deployment process..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check Node.js version
echo -e "${BLUE}Checking Node.js version...${NC}"
NODE_VERSION=$(node -v)
echo "Node.js version: $NODE_VERSION"

if [[ ! "$NODE_VERSION" =~ ^v18 ]] && [[ ! "$NODE_VERSION" =~ ^v20 ]]; then
    echo -e "${RED}Warning: Node.js 18.x or higher is recommended${NC}"
fi

# Step 2: Create data directory if it doesn't exist
echo -e "${BLUE}Setting up data directory...${NC}"
mkdir -p data
mkdir -p logs

# Initialize data files if they don't exist
if [ ! -f data/leads.json ]; then
    echo '[]' > data/leads.json
    echo -e "${GREEN}Created leads.json${NC}"
fi

if [ ! -f data/admins.json ]; then
    echo '[]' > data/admins.json
    echo -e "${GREEN}Created admins.json${NC}"
fi

if [ ! -f data/forms.json ]; then
    echo '[]' > data/forms.json
    echo -e "${GREEN}Created forms.json${NC}"
fi

if [ ! -f data/settings.json ]; then
    echo '{"id":"settings","calendlyLink":"https://calendly.com/your-link","whatsappNumber":"+923184451469","whatsappMessage":"Hello! I just submitted a form on your website and would like to learn more about your brokerage solutions.","facebookPixelId":"","facebookAccessToken":"","updatedAt":"'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"}' > data/settings.json
    echo -e "${GREEN}Created settings.json${NC}"
fi

# Step 3: Set proper permissions
echo -e "${BLUE}Setting file permissions...${NC}"
chmod 755 data
chmod 666 data/*.json
chmod 755 logs

# Step 4: Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
npm install --production

if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to install dependencies${NC}"
    exit 1
fi

# Step 5: Build the application
echo -e "${BLUE}Building Next.js application...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed${NC}"
    exit 1
fi

# Step 6: Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${BLUE}Installing PM2 globally...${NC}"
    npm install -g pm2
fi

# Step 7: Start/Restart the application with PM2
echo -e "${BLUE}Starting application with PM2...${NC}"
pm2 describe forex-brokerage > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo -e "${BLUE}Restarting existing application...${NC}"
    pm2 restart forex-brokerage
else
    echo -e "${BLUE}Starting new application...${NC}"
    pm2 start ecosystem.config.js
fi

# Step 8: Save PM2 configuration
pm2 save

# Step 9: Display application status
echo -e "\n${GREEN}✓ Deployment completed successfully!${NC}\n"
pm2 status

# Display helpful information
echo -e "\n${BLUE}═══════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}📊 Deployment Summary${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo -e "Application: ${GREEN}Forex Brokerage${NC}"
echo -e "Status: ${GREEN}Running${NC}"
echo -e "Port: ${GREEN}3000${NC}"
echo -e "Environment: ${GREEN}Production${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo -e "\n${BLUE}📝 Next Steps:${NC}"
echo -e "1. Configure your domain in Hostinger hPanel"
echo -e "2. Set up SSL certificate (recommended)"
echo -e "3. Access admin panel at: ${GREEN}https://your-domain.com/admin/register${NC}"
echo -e "4. Configure Facebook Pixel in: ${GREEN}/admin/settings${NC}"
echo -e "\n${BLUE}🔧 Useful Commands:${NC}"
echo -e "View logs: ${GREEN}pm2 logs forex-brokerage${NC}"
echo -e "Restart app: ${GREEN}pm2 restart forex-brokerage${NC}"
echo -e "Stop app: ${GREEN}pm2 stop forex-brokerage${NC}"
echo -e "Monitor: ${GREEN}pm2 monit${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}\n"
