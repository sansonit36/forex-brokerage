'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Globe } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const lastUpdated = 'October 26, 2025';

  const sections = [
    {
      icon: Database,
      title: '1. Information We Collect',
      content: [
        {
          subtitle: '1.1 Personal Information',
          text: 'When you use our services, we may collect the following personal information:',
          list: [
            'Name and contact information (email address, phone number)',
            'Company name and business details',
            'Country of residence',
            'Communication preferences',
            'Any information you provide in forms or communications',
          ],
        },
        {
          subtitle: '1.2 Technical Information',
          text: 'We automatically collect certain technical information when you visit our website:',
          list: [
            'IP address and browser type',
            'Device information and operating system',
            'Pages visited and time spent on our website',
            'Referring website addresses',
            'Cookies and similar tracking technologies',
          ],
        },
      ],
    },
    {
      icon: Lock,
      title: '2. How We Use Your Information',
      content: [
        {
          subtitle: '2.1 Primary Uses',
          text: 'We use your personal information for the following purposes:',
          list: [
            'Responding to your inquiries and providing customer support',
            'Processing and fulfilling service requests',
            'Sending important updates about our services',
            'Improving our website and services',
            'Preventing fraud and ensuring security',
          ],
        },
        {
          subtitle: '2.2 Marketing Communications',
          text: 'With your consent, we may use your information to send you marketing materials about our services. You can opt-out at any time by contacting us or clicking the unsubscribe link in our emails.',
        },
      ],
    },
    {
      icon: UserCheck,
      title: '3. Information Sharing and Disclosure',
      content: [
        {
          subtitle: '3.1 Third-Party Service Providers',
          text: 'We may share your information with trusted third-party service providers who assist us in operating our website and providing our services, including:',
          list: [
            'Hosting and infrastructure providers',
            'Email service providers',
            'Analytics services',
            'Payment processors',
          ],
        },
        {
          subtitle: '3.2 Legal Requirements',
          text: 'We may disclose your information if required by law or if we believe such action is necessary to:',
          list: [
            'Comply with legal obligations',
            'Protect and defend our rights or property',
            'Prevent or investigate possible wrongdoing',
            'Protect the personal safety of users or the public',
          ],
        },
        {
          subtitle: '3.3 No Sale of Personal Data',
          text: 'We do not sell, rent, or trade your personal information to third parties for their marketing purposes.',
        },
      ],
    },
    {
      icon: Shield,
      title: '4. Data Security',
      content: [
        {
          text: 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:',
          list: [
            'Encryption of data in transit and at rest',
            'Secure server infrastructure',
            'Regular security assessments and updates',
            'Restricted access to personal information',
            'Employee training on data protection',
          ],
        },
        {
          text: 'However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.',
        },
      ],
    },
    {
      icon: Globe,
      title: '5. International Data Transfers',
      content: [
        {
          text: 'Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.',
        },
      ],
    },
    {
      icon: Eye,
      title: '6. Your Rights and Choices',
      content: [
        {
          subtitle: '6.1 Access and Correction',
          text: 'You have the right to access and update your personal information. You can do this by contacting us at support@softclose.com.',
        },
        {
          subtitle: '6.2 Data Deletion',
          text: 'You may request deletion of your personal information, subject to certain legal obligations that may require us to retain certain data.',
        },
        {
          subtitle: '6.3 Opt-Out',
          text: 'You can opt-out of receiving marketing communications at any time by using the unsubscribe link in our emails or contacting us directly.',
        },
        {
          subtitle: '6.4 Cookie Management',
          text: 'You can control cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.',
        },
      ],
    },
  ];

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
              <Shield className="text-white" size={32} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-blue-200 text-lg">
              Last Updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 mb-8 border border-white/30 shadow-lg"
          >
            <p className="text-gray-700 leading-relaxed mb-4">
              At <strong>SoftClose Solutions</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </motion.div>

          {/* Sections */}
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 mb-6 border border-white/30 shadow-lg"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mt-2">
                    {section.title}
                  </h2>
                </div>

                {section.content.map((item, idx) => (
                  <div key={idx} className="mb-6 last:mb-0">
                    {'subtitle' in item && item.subtitle && (
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        {item.subtitle}
                      </h3>
                    )}
                    {'text' in item && item.text && (
                      <p className="text-gray-700 leading-relaxed mb-3">
                        {item.text}
                      </p>
                    )}
                    {'list' in item && item.list && (
                      <ul className="space-y-2 ml-6">
                        {item.list.map((listItem, listIdx) => (
                          <li
                            key={listIdx}
                            className="text-gray-700 flex items-start space-x-2"
                          >
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </motion.div>
            );
          })}

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 mb-6 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 mb-6 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 mb-8 border border-white/30 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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
            transition={{ delay: 1.1 }}
            className="text-center"
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
