# Forex Brokerage Funnel Website

A premium, high-converting landing website for Forex Brokerage Setup services built with Next.js, React, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern & Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **SEO Optimized** - Complete meta tags and structured data for search engines
- **Premium UI/UX** - Corporate-level design with glass-morphic effects and gradients
- **Fast Performance** - Built with Next.js 16 and optimized for speed
- **Floating WhatsApp Button** - Direct communication channel with visitors
- **Interactive Components** - FAQ accordion, pricing cards, case study carousel

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Installation

1. **Navigate to the project directory:**
   ```bash
   cd forex-brokerage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Contact Information

1. **WhatsApp Number** - Update in:
   - `/components/WhatsAppButton.tsx` (line 22)
   - All CTA buttons linking to WhatsApp

2. **Calendly Link** - Update in:
   - All "Book Strategy Call" buttons throughout components

3. **Email Address** - Update in:
   - `/components/Footer.tsx`

### Customize Colors

Edit `/app/globals.css` to change the color scheme:
```css
:root {
  --primary: #0D1B2A;
  --accent: #F4A261;
  --text-dark: #1B263B;
}
```

### Update Content

- **Hero Section**: `/components/Hero.tsx`
- **Features**: `/components/Solution.tsx`
- **Pricing**: `/components/Pricing.tsx`
- **About/Team**: `/components/About.tsx`
- **FAQ**: `/components/FAQ.tsx`

## 📱 Sections Overview

1. **Header** - Sticky navigation with smooth scroll
2. **Hero** - Eye-catching introduction with dual CTAs
3. **Problem** - Highlights pain points of starting a brokerage
4. **Solution** - 6 feature cards showcasing services
5. **Case Study** - Success story with timeline and carousel
6. **Pricing** - Two-tier pricing with detailed features
7. **About** - Company info, team, and trust badges
8. **FAQ** - Accordion-style questions and answers
9. **Final CTA** - Strong call-to-action with urgency
10. **Footer** - Links, contact info, and social media
11. **WhatsApp Button** - Floating button with tooltip

## 🔧 Build for Production

```bash
npm run build
npm start
```

## 📊 SEO Configuration

The website includes comprehensive SEO optimization:
- Meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (ready for enhancement)
- Semantic HTML structure
- Fast loading times

## 🎯 Performance Optimization

- Server-side rendering with Next.js
- Optimized images and assets
- Code splitting and lazy loading
- Minimal dependencies
- Tailwind CSS purging for smaller CSS files

## 📞 CTA Links to Update

Before deploying, update these placeholder links:

1. **Calendly**: `https://calendly.com/yourlink`
2. **WhatsApp**: `https://wa.me/923000000000`
3. **Email**: `support@yourdomain.com`
4. **Social Media Links** in Footer component

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Deploy to Other Platforms

The website can be deployed to:
- Netlify
- Hostinger
- AWS Amplify
- DigitalOcean
- Any platform supporting Next.js

## 📝 License

This project is created for Forex Brokerage Solutions.

## 🤝 Support

For questions or support, contact:
- Email: support@yourdomain.com
- WhatsApp: +92 300 0000000

---

**Built with ❤️ for aspiring forex brokers worldwide**
