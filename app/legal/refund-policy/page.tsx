'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function RefundPolicy() {
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
              <DollarSign className="text-white" size={32} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Refund Policy
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
            <p className="text-gray-700 leading-relaxed">
              At <strong>SoftClose Solutions</strong>, we strive to provide exceptional services and ensure client satisfaction. This Refund Policy outlines the circumstances under which refunds may be issued and the process for requesting them.
            </p>
          </motion.div>

          {/* Money-Back Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-200/30 shadow-lg"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Money-Back Guarantee
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We offer a <strong>30-day money-back guarantee</strong> on our setup fees. If you are not satisfied with our services within the first 30 days, you may request a full refund of the setup fee.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Eligible Refunds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligible for Refund</h2>
            <ul className="space-y-3">
              {[
                'Setup fees within 30 days of service initiation',
                'Services not delivered as described in the agreement',
                'Technical issues that prevent service usage and cannot be resolved',
                'Duplicate payments or billing errors',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not Eligible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Eligible for Refund</h2>
            <ul className="space-y-3">
              {[
                'Monthly subscription fees (non-refundable)',
                'Requests made after the 30-day guarantee period',
                'Third-party service fees or licenses',
                'Change of mind or business direction',
                'Failure to provide required information or cooperation',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <XCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Refund Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Clock className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-2">
                Refund Request Process
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Submit Request</h3>
                  <p className="text-gray-700">Email support@softclose.com with your refund request and reason.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Review Period</h3>
                  <p className="text-gray-700">We will review your request within 3-5 business days.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Processing</h3>
                  <p className="text-gray-700">If approved, refunds will be processed within 7-10 business days to the original payment method.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Partial Refunds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Partial Refunds</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              In certain circumstances, we may offer partial refunds based on the services already delivered. This is evaluated on a case-by-case basis.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Partial refunds may be issued for services that are partially completed or if only certain components of the package were utilized.
            </p>
          </motion.div>

          {/* Cancellation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Cancellation</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You may cancel monthly services at any time with 30 days' written notice. Monthly fees already paid are non-refundable, but services will continue until the end of the current billing period.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To cancel, email support@softclose.com with your account details and cancellation request.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Refunds?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about our refund policy or need assistance, please contact us:
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
            transition={{ delay: 0.9 }}
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
