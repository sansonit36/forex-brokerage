'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Globe2, Users, Trophy, Bitcoin, CreditCard, DollarSign, Lock, Zap, Globe, User } from 'lucide-react';

const About = () => {
  const badges = [
    {
      name: 'VertexFX',
      icon: Trophy,
      label: 'Official Partner',
      color: 'from-amber-500 to-orange-500',
    },
    {
      name: 'CoinPayments',
      icon: Bitcoin,
      label: 'Integrated',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      name: 'NOWPayments',
      icon: CreditCard,
      label: 'Integrated',
      color: 'from-blue-500 to-purple-500',
    },
    {
      name: 'SticPay',
      icon: DollarSign,
      label: 'Integrated',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    {
      icon: Users,
      value: '100+',
      label: 'Brokerages Launched',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Globe2,
      value: '15+',
      label: 'Countries Served',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Award,
      value: '5+',
      label: 'Years Experience',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Shield,
      value: '24/7',
      label: 'Expert Support',
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Shield size={20} />
            <span className="text-sm font-semibold">Trusted Globally</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We&apos;re a <span className="font-bold text-blue-600">global team of Forex technology experts</span> specializing in VertexFX and CRM systems. From Pakistan to the UAE, we&apos;ve helped dozens of brokers launch profitably with our ready-to-go setups.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Founder/Team Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-gradient-to-br from-blue-600/90 to-blue-800/90 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl border border-white/20"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Photo/Avatar */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-48 h-48 backdrop-blur-lg bg-gradient-to-br from-amber-400/90 to-orange-500/90 rounded-full flex items-center justify-center shadow-2xl border border-white/30">
                  <User className="text-white" size={96} />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                  <Shield className="text-white" size={24} />
                </div>
              </div>
            </div>

            {/* Right - Message */}
            <div className="text-white">
              <div className="text-6xl mb-4">&ldquo;</div>
              <p className="text-xl sm:text-2xl leading-relaxed mb-6">
                Our mission is simple: <span className="font-bold text-amber-300">democratize forex brokerage</span> by making world-class technology accessible to everyone. We don&apos;t just provide software—we become your technology partner for life.
              </p>
              <div>
                <div className="font-bold text-xl">Husnain Ghani</div>
                <div className="text-blue-200">Founder & CEO</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partner Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted Partners & Integrations</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {badges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="backdrop-blur-lg bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${badge.color} mb-3 shadow-lg`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <div className="font-bold text-gray-900 mb-1">{badge.name}</div>
                  <div className="text-sm text-green-600 font-semibold">{badge.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Lock,
              title: 'Secure & Compliant',
              description: 'Bank-grade security and regulatory compliance',
              color: 'from-green-500 to-emerald-600',
            },
            {
              icon: Zap,
              title: 'Lightning Fast',
              description: 'Optimized platforms for high-frequency trading',
              color: 'from-yellow-500 to-orange-600',
            },
            {
              icon: Globe,
              title: 'Global Reach',
              description: 'Multi-language & multi-currency support',
              color: 'from-blue-500 to-purple-600',
            },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/80 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-white/30"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} mb-3 shadow-lg`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl" />
    </section>
  );
};

export default About;
