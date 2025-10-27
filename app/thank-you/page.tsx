'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, MessageCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

declare global {
  interface Window {
    fbq: (command: string, eventName: string, data?: any) => void;
  }
}

export default function ThankYouPage() {
  const [settings, setSettings] = useState({
    calendlyLink: 'https://calendly.com/your-link',
    whatsappNumber: '+1234567890',
    whatsappMessage: 'Hello! I just submitted a form on your website and would like to learn more about your brokerage solutions.',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSettings();
    
    // Trigger Facebook Pixel Lead event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
      console.log('Facebook Pixel Lead event triggered');
    }
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/settings');
      if (response.ok) {
        const data = await response.json();
        setSettings(data.settings);
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = settings.whatsappNumber.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(settings.whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center border border-gray-100">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 shadow-lg"
          >
            <CheckCircle className="text-white" size={48} />
          </motion.div>

          {/* Success Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Thank You! 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 mb-8"
          >
            Your request has been successfully submitted. Our team will review your information and get back to you within 24 hours.
          </motion.p>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What&apos;s Next?
            </h2>
            <p className="text-gray-600 mb-6">
              Don&apos;t wait! Take the next step now to accelerate your brokerage journey.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {/* Calendly Button */}
            <motion.a
              href={settings.calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-3"
            >
              <Calendar size={24} />
              <span>Book a Call Now</span>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.button
              onClick={handleWhatsAppClick}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-3"
            >
              <MessageCircle size={24} />
              <span>Contact on WhatsApp</span>
            </motion.button>
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6"
          >
            <p className="text-sm text-blue-800">
              💡 <strong>Pro Tip:</strong> Booking a call immediately helps us understand your needs better and speeds up your brokerage setup process!
            </p>
          </motion.div>

          {/* Back to Home Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Back to Homepage</span>
            </Link>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600">
            Need immediate assistance?{' '}
            <button
              onClick={handleWhatsAppClick}
              className="text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              Message us on WhatsApp
            </button>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
