#!/bin/bash

# Test build locally before deploying to Hostinger

echo "🧪 Testing production build locally..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

# Create data directory
echo -e "${BLUE}Setting up data directory...${NC}"
mkdir -p data

# Initialize data files
if [ ! -f data/leads.json ]; then
    echo '[]' > data/leads.json
fi
if [ ! -f data/admins.json ]; then
    echo '[]' > data/admins.json
fi
if [ ! -f data/forms.json ]; then
    echo '[]' > data/forms.json
fi
if [ ! -f data/settings.json ]; then
    echo '{"id":"settings","calendlyLink":"https://calendly.com/your-link","whatsappNumber":"+923184451469","whatsappMessage":"Hello!","facebookPixelId":"","facebookAccessToken":"","updatedAt":"'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"}' > data/settings.json
fi

# Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
npm install

# Build
echo -e "${BLUE}Building application...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}✓ Build successful!${NC}\n"
    echo -e "${BLUE}Starting production server...${NC}"
    echo -e "${GREEN}Visit: http://localhost:3000${NC}\n"
    
    # Start production server
    NODE_ENV=production npm start
else
    echo -e "\n${RED}✗ Build failed. Fix errors before deploying.${NC}\n"
    exit 1
fi
