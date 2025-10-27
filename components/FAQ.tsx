'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does setup take?',
      answer: 'Typically 7–10 business days after payment. We provide you with a detailed timeline and keep you updated at every step. Our team works efficiently to ensure your brokerage is ready to go live as quickly as possible without compromising quality.',
    },
    {
      question: 'Is VertexFX included in the price?',
      answer: 'Yes, the VertexFX license and installation are fully handled as part of your package. We take care of everything from installation to configuration, dealer setup, bridge integration, and ongoing technical support.',
    },
    {
      question: 'Can you integrate payment gateways?',
      answer: 'Yes, we support both crypto and fiat processors. This includes CoinPayments, NOWPayments, SticPay, and other major PSP integrations. We configure everything to ensure smooth deposits and withdrawals for your clients.',
    },
    {
      question: 'Do you help with regulation setup?',
      answer: 'Yes, we offer consultancy on offshore incorporation & licensing. Our team has experience with various jurisdictions and can guide you through the regulatory requirements, documentation, and compliance processes.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive 24/7 technical support via email, WhatsApp, and phone. Our Pro Brokerage plan includes priority support. We also offer lifetime business consultancy to help you grow your brokerage successfully.',
    },
    {
      question: 'Can I customize the platform and website?',
      answer: 'Absolutely! Our Pro Brokerage plan includes a fully custom branded website. We can also customize your trading platform interface, add your branding, and tailor the CRM system to match your business requirements.',
    },
    {
      question: 'What about liquidity providers?',
      answer: 'We help you connect with trusted liquidity providers and configure your A/B-book setup. Our team has established relationships with multiple LPs and can guide you in selecting the right partners for your brokerage model.',
    },
    {
      question: 'Is there a contract or can I cancel anytime?',
      answer: 'We offer flexible terms with no long-term lock-in contracts. You can cancel your monthly subscription anytime with 30 days notice. We believe in earning your business every month through excellent service.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
            <HelpCircle size={20} />
            <span className="text-sm font-semibold">Got Questions?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our forex brokerage setup service.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-lg sm:text-xl text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="text-blue-600" size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Our team is here to help. Get in touch and we&apos;ll answer all your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Get Free Consultation
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
    </section>
  );
};

export default FAQ;
