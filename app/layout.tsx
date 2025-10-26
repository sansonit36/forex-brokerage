import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import FacebookPixel from "@/components/FacebookPixel";
import { getSettings } from "@/lib/db";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Start Your Forex Brokerage | SoftClose Solutions - VertexFX & CRM Experts",
  description: "Launch your Forex brokerage with VertexFX, CRM, website, and full consultancy — everything done for you in 10 days. Trusted by 100+ brokerages worldwide.",
  keywords: ["forex brokerage", "VertexFX", "CRM system", "trading platform", "brokerage setup", "liquidity", "payment gateway"],
  authors: [{ name: "SoftClose Solutions" }],
  creator: "SoftClose Solutions",
  publisher: "SoftClose Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Start Your Forex Brokerage | SoftClose Solutions",
    description: "Launch your Forex brokerage with VertexFX, CRM, website, and full consultancy — everything done for you in 10 days.",
    siteName: "SoftClose Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Forex Brokerage | SoftClose Solutions",
    description: "Launch your Forex brokerage with VertexFX, CRM, website, and full consultancy — everything done for you in 10 days.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get Facebook Pixel ID from settings
  let pixelId = '';
  try {
    const settings = getSettings();
    pixelId = settings.facebookPixelId || '';
  } catch (error) {
    console.error('Failed to load settings for Facebook Pixel:', error);
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {pixelId && <FacebookPixel pixelId={pixelId} />}
        {children}
      </body>
    </html>
  );
}
