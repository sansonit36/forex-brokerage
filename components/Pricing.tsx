'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Rocket, Phone, DollarSign, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter Brokerage',
      setupCost: '$8,000',
      monthlyCost: '$6,000',
      description: 'Perfect for launching your first brokerage',
      features: [
        'VertexFX Platform Installation',
        'Complete Dealer Setup',
        'Bridge Configuration',
        'CRM System Integration',
        'Client Portal Setup',
        'IB Program Configuration',
        'Back-Office Management',
        'Business Consultancy',
        'Initial Training & Documentation',
        'Email Support',
      ],
      popular: false,
      gradient: 'from-blue-500 to-blue-600',
      icon: Sparkles,
    },
    {
      name: 'Pro Brokerage',
      setupCost: '$12,000',
      monthlyCost: '$8,000',
      description: 'Everything you need for rapid growth',
      features: [
        'Everything in Starter Plan',
        'Custom Branded Website',
        'SEO Optimization',
        'Payment Gateway Integration',
        'Crypto Processors Setup',
        'PSP Integration',
        'Advanced CRM Features',
        'Priority 24/7 Tech Support',
        'Marketing Consultation',
        'Social Media Setup',
        'Ongoing Platform Updates',
      ],
      popular: true,
      gradient: 'from-purple-600 to-blue-600',
      icon: Rocket,
    },
  ];

  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 backdrop-blur-md bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full mb-6 border border-amber-400/30">
            <DollarSign size={20} className="text-amber-400" />
            <span className="text-sm font-semibold">Transparent Pricing</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Choose the Perfect Plan
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">
              for Your Brokerage
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No hidden fees. No surprise costs. Everything you need to succeed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="backdrop-blur-md bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg border border-amber-300/30 flex items-center space-x-2">
                    <Star size={16} className="text-white fill-white" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className={`relative backdrop-blur-xl bg-white/90 rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/30 ${plan.popular ? 'ring-4 ring-amber-400 scale-105' : ''} hover:scale-105 transition-transform duration-300`}>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-6 shadow-lg`}>
                  <plan.icon className="text-white" size={32} />
                </div>

                {/* Plan Name */}
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-gray-900">{plan.setupCost}</span>
                    <span className="text-gray-600 ml-2">setup fee</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{plan.monthlyCost}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="text-green-500" size={20} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${plan.gradient} text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2`}
                  >
                    <Phone size={20} />
                    <span>Get Started Now</span>
                  </motion.button>
                </a>

                {/* Corner Decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${plan.gradient} opacity-10 rounded-tr-3xl rounded-bl-full`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-2xl font-bold text-white mb-4">
              Every plan includes lifetime consultancy and 24/7 support
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <Check size={20} className="text-green-400" />
              <span>No Long-Term Contracts</span>
              <span className="mx-2">•</span>
              <Check size={20} className="text-green-400" />
              <span>Cancel Anytime</span>
              <span className="mx-2">•</span>
              <Check size={20} className="text-green-400" />
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl" />
    </section>
  );
};

export default Pricing;
