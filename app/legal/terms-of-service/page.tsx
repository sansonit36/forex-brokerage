'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  const lastUpdated = 'October 26, 2025';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
              <Scale className="text-white" size={32} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-blue-200 text-lg">
              Last Updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to <strong>SoftClose Solutions</strong>. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read these Terms carefully before using our services. If you do not agree to these Terms, you may not access or use our services.
            </p>
          </motion.div>

          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-2">
                1. Services Overview
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              SoftClose Solutions provides forex brokerage setup services, including but not limited to:
            </p>
            <ul className="space-y-2 ml-6">
              {[
                'VertexFX trading platform installation and configuration',
                'CRM system setup and integration',
                'Website development and design',
                'Payment gateway integration',
                'Technical support and consultancy',
                'Marketing and SEO services',
              ].map((item, idx) => (
                <li key={idx} className="text-gray-700 flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Obligations</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">By using our services, you agree to:</p>
              <ul className="space-y-2 ml-6">
                {[
                  'Provide accurate and complete information',
                  'Maintain the confidentiality of your account credentials',
                  'Comply with all applicable laws and regulations',
                  'Use our services only for lawful purposes',
                  'Not engage in any fraudulent or malicious activities',
                  'Respect intellectual property rights',
                ].map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start space-x-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <strong>3.1 Pricing:</strong> All prices are displayed in USD and are subject to change. Current pricing is available on our website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>3.2 Payment Schedule:</strong> Setup fees are due upon agreement signing. Monthly fees are billed in advance on the 1st of each month.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>3.3 Payment Methods:</strong> We accept major credit cards, bank transfers, and cryptocurrency payments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>3.4 Late Payments:</strong> Failure to pay on time may result in service suspension or termination.
              </p>
            </div>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              All content, designs, software, and materials provided by SoftClose Solutions remain our intellectual property unless explicitly transferred. You may not:
            </p>
            <ul className="space-y-2 ml-6">
              {[
                'Copy, modify, or distribute our proprietary materials',
                'Reverse engineer our software or systems',
                'Remove copyright or proprietary notices',
                'Use our trademarks without permission',
              ].map((item, idx) => (
                <li key={idx} className="text-gray-700 flex items-start space-x-2">
                  <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Delivery</h2>
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <strong>5.1 Timeline:</strong> We aim to complete brokerage setup within 7-10 business days. Actual delivery times may vary based on complexity and client cooperation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>5.2 Client Responsibilities:</strong> Timely delivery requires your cooperation in providing necessary information, approvals, and access to required systems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>5.3 Quality Assurance:</strong> We conduct thorough testing before deployment. You will have an opportunity to review and approve all deliverables.
              </p>
            </div>
          </motion.div>

          {/* Section 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Warranties and Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>6.1 Service Warranty:</strong> We warrant that our services will be performed professionally and in accordance with industry standards.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>6.2 Disclaimer:</strong> Our services are provided "as is" without warranties of any kind, express or implied. We do not guarantee specific business outcomes or profits.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>6.3 Third-Party Services:</strong> We are not responsible for the performance or availability of third-party platforms, services, or integrations.
            </p>
          </motion.div>

          {/* Section 7 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              To the maximum extent permitted by law, SoftClose Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our total liability for any claims arising from or related to our services shall not exceed the amount paid by you for the services in the 12 months preceding the claim.
            </p>
          </motion.div>

          {/* Section 8 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>8.1 By Client:</strong> You may terminate our services at any time with 30 days' written notice. Monthly fees are non-refundable.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>8.2 By SoftClose:</strong> We may terminate services immediately if you breach these Terms or engage in prohibited activities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>8.3 Effect of Termination:</strong> Upon termination, you must pay all outstanding fees. We will provide reasonable assistance for service migration.
            </p>
          </motion.div>

          {/* Section 9 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of significant changes via email or website notice. Continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </motion.div>

          {/* Section 10 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> support@softclose.com</p>
              <p><strong>Phone:</strong> +92 318 4451469</p>
              <p><strong>WhatsApp:</strong> +92 318 4451469</p>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center pt-8"
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <span>← Back to Homepage</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
