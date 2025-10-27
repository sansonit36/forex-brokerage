'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Users, Globe, CreditCard, TrendingUp, Headphones, Phone, Sparkles, Check } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: Monitor,
      title: 'VertexFX Setup',
      description: 'Full platform installation, dealer, and bridge setup.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'CRM System',
      description: 'Client portal, IB program, and back-office management.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Globe,
      title: 'Website + Branding',
      description: 'Custom website built for trust and conversion.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: CreditCard,
      title: 'Payment Gateways',
      description: 'Integration with crypto & PSP processors.',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: TrendingUp,
      title: 'Liquidity & Risk Setup',
      description: 'Help connect LPs and configure A/B-book.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Headphones,
      title: 'Consultancy & Support',
      description: 'Step-by-step guidance with 24/7 tech support.',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles size={20} />
            <span className="text-sm font-semibold">Complete Solution</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            All-in-One Forex Brokerage Setup
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              From Platform to Clients
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to launch and scale your forex brokerage, delivered in one comprehensive package.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                  <feature.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-blue-600 font-semibold text-sm">
                    <Check className="mr-2" size={16} />
                    <span>Fully Managed Setup</span>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-tr-2xl rounded-bl-full`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-200 inline-flex items-center space-x-3"
            >
              <Phone size={24} />
              <span>Get Free Consultation — Let&apos;s Build Your Brokerage</span>
            </motion.button>
          </a>

          <p className="mt-6 text-gray-600">
            <span className="font-semibold text-gray-900">No hidden fees.</span> Everything is transparent and included in your package.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl" />
    </section>
  );
};

export default Solution;
