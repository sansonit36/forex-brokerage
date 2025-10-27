'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageCircle, ArrowRight, Zap, Check, Star, TrendingUp, Briefcase, Flame } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8">
            <Zap size={20} className="text-amber-400" />
            <span className="text-sm font-semibold">Limited Slots Available This Month</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Build Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
              Forex Brokerage?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            Your complete platform, CRM, and brand
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-12 max-w-3xl mx-auto">
            — delivered in just <span className="text-amber-400">10 days</span>
          </p>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            {[
              { text: 'No Hidden Fees', icon: Check },
              { text: '24/7 Support', icon: Check },
              { text: 'Money-Back Guarantee', icon: Check },
              { text: 'Lifetime Consultancy', icon: Check },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/10 px-6 py-3 rounded-full text-white font-semibold flex items-center space-x-2 border border-white/20"
                >
                  <IconComponent size={18} className="text-green-400" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-200 flex items-center space-x-3"
              >
                <Rocket size={24} />
                <span>Start Your Brokerage Today</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </a>
          </motion.div>

          {/* Trust Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex items-center justify-center space-x-2"
          >
            <Zap size={20} className="text-amber-400" />
            <p className="text-blue-200 text-lg">
              <span className="font-semibold">Fast Response:</span> We typically reply within 1 hour during business hours
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 backdrop-blur-xl bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto border border-white/30"
          >
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mb-3 shadow-lg">
                  <Star className="text-white" size={32} />
                </div>
                <div className="text-white font-bold text-xl mb-1">5.0 Rating</div>
                <div className="text-blue-200 text-sm">From Our Clients</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-3 shadow-lg">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <div className="text-white font-bold text-xl mb-1">100+ Launches</div>
                <div className="text-blue-200 text-sm">Successfully Deployed</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-3 shadow-lg">
                  <Briefcase className="text-white" size={32} />
                </div>
                <div className="text-white font-bold text-xl mb-1">$500M+</div>
                <div className="text-blue-200 text-sm">Total Trading Volume</div>
              </div>
            </div>
          </motion.div>

          {/* Urgency Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12"
          >
            <div className="inline-flex items-center space-x-2 backdrop-blur-md bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-xl px-6 py-4">
              <Flame size={20} className="text-orange-400" />
              <p className="text-amber-300 font-semibold">
                Only <span className="text-white text-xl">3 slots</span> remaining this month
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#1F2937"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default FinalCTA;
