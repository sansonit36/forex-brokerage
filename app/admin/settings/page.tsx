'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Settings as SettingsIcon,
  Save,
  ArrowLeft,
  Calendar,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Facebook,
  Activity,
} from 'lucide-react';
import Link from 'next/link';

export default function SettingsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    calendlyLink: '',
    whatsappNumber: '',
    whatsappMessage: '',
    facebookPixelId: '',
    facebookAccessToken: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchSettings();
  }, [router]);

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/settings');
      if (!response.ok) throw new Error('Failed to fetch settings');

      const data = await response.json();
      setFormData({
        calendlyLink: data.settings.calendlyLink,
        whatsappNumber: data.settings.whatsappNumber,
        whatsappMessage: data.settings.whatsappMessage,
        facebookPixelId: data.settings.facebookPixelId || '',
        facebookAccessToken: data.settings.facebookAccessToken || '',
      });
    } catch (error) {
      console.error('Error fetching settings:', error);
      setSaveStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveStatus('idle');

    try {
      const response = await fetch('/api/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save settings');

      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
      console.error('Error saving settings:', error);
      setSaveStatus('error');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <SettingsIcon className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Settings</h1>
                <p className="text-sm text-gray-500">Manage your system configuration</p>
              </div>
            </div>
            <Link
              href="/admin/dashboard"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Back</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success/Error Messages */}
        {saveStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start space-x-3"
          >
            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-semibold text-green-900">Settings Saved!</p>
              <p className="text-sm text-green-700">
                Your changes have been saved successfully.
              </p>
            </div>
          </motion.div>
        )}

        {saveStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3"
          >
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-semibold text-red-900">Save Failed</p>
              <p className="text-sm text-red-700">
                Something went wrong. Please try again.
              </p>
            </div>
          </motion.div>
        )}

        {/* Settings Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Calendly Settings */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="text-blue-600" size={24} />
                <h2 className="text-xl font-bold text-gray-900">Calendly Integration</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Set your Calendly booking link. This link will be displayed on the thank you page after users submit the contact form.
              </p>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Calendly Link <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="calendlyLink"
                  value={formData.calendlyLink}
                  onChange={handleChange}
                  placeholder="https://calendly.com/your-username/meeting"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  required
                />
                <p className="mt-2 text-sm text-gray-500">
                  📝 Example: https://calendly.com/your-username/30min
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Facebook Pixel Settings */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Facebook className="text-blue-600" size={24} />
                <h2 className="text-xl font-bold text-gray-900">Facebook Pixel Tracking</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Configure Facebook Pixel to track lead conversions and build custom audiences. The Conversion API will send server-side events for better tracking accuracy.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Facebook Pixel ID (Optional)
                  </label>
                  <input
                    type="text"
                    name="facebookPixelId"
                    value={formData.facebookPixelId}
                    onChange={handleChange}
                    placeholder="1234567890123456"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    📊 Find this in Facebook Events Manager → Data Sources → Your Pixel
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Facebook Conversions API Access Token (Optional)
                  </label>
                  <input
                    type="password"
                    name="facebookAccessToken"
                    value={formData.facebookAccessToken}
                    onChange={handleChange}
                    placeholder="Enter your Conversions API access token"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none font-mono text-sm"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    🔐 Generate this in Events Manager → Settings → Conversions API → Generate Access Token
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <Activity className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold mb-1">What gets tracked:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Lead event when form is submitted</li>
                        <li>User email, phone, name (hashed for privacy)</li>
                        <li>Budget and timeline information</li>
                        <li>Server-side tracking via Conversions API (more accurate)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* WhatsApp Settings */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="text-green-600" size={24} />
                <h2 className="text-xl font-bold text-gray-900">WhatsApp Integration</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Configure your WhatsApp contact settings for the thank you page.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="+1234567890"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    required
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    📱 Include country code without spaces (e.g., +1234567890)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pre-filled WhatsApp Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="whatsappMessage"
                    value={formData.whatsappMessage}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Hello! I just submitted a form on your website..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none resize-none"
                    required
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    💬 This message will be pre-filled when users click the WhatsApp button
                  </p>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-6 border-t border-gray-200">
              <motion.button
                type="submit"
                disabled={saving}
                whileHover={{ scale: saving ? 1 : 1.02 }}
                whileTap={{ scale: saving ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save size={24} />
                    <span>Save Settings</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4"
        >
          <p className="text-sm text-blue-800">
            💡 <strong>Note:</strong> These settings control what users see on the thank you page after submitting the contact form. Make sure to use valid links and phone numbers.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
