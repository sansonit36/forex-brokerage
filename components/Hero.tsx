'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageCircle, TrendingUp, Shield, Zap, DollarSign } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              <Zap size={18} />
              <span className="text-sm font-semibold">Trusted by 100+ Brokerages Globally</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Launch Your Own{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Forex Brokerage with SoftClose Solutions
              </span>{' '}
              in 10 Days
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700">
                — No Coding, No Stress.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              We handle the entire setup — VertexFX Platform, CRM, Website, and full business consultancy.{' '}
              <span className="font-semibold text-gray-900">
                You focus on growth; we build your brokerage.
              </span>
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, text: 'Fully Licensed Platform' },
                { icon: TrendingUp, text: 'Liquidity Integration' },
                { icon: Zap, text: '24/7 Support' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md"
                >
                  <item.icon size={18} className="text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Rocket size={22} />
                  <span>Book a Free Strategy Call</span>
                </motion.button>
              </a>

              <a
                href="https://wa.me/923184451469"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={22} />
                  <span>Chat on WhatsApp</span>
                </motion.button>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Brokerages Launched</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10 Days</div>
                <div className="text-sm text-gray-600">Average Setup Time</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Tech Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glassmorphic Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-gray-200"
              >
                <div className="space-y-6">
                  {/* Mock Trading Dashboard */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-sm opacity-80">Total Balance</div>
                        <div className="text-3xl font-bold">$124,580.00</div>
                      </div>
                      <div className="bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">
                        +12.5%
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div>
                        <div className="text-xs opacity-80">Active Traders</div>
                        <div className="text-xl font-bold">1,247</div>
                      </div>
                      <div>
                        <div className="text-xs opacity-80">Volume (24h)</div>
                        <div className="text-xl font-bold">$2.4M</div>
                      </div>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3">
                    {['VertexFX Platform', 'CRM System', 'Payment Integration', 'Liquidity Setup'].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-amber-400 w-24 h-24 rounded-2xl shadow-xl flex items-center justify-center"
              >
                <DollarSign className="text-white" size={40} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-blue-500 w-20 h-20 rounded-2xl shadow-xl flex items-center justify-center"
              >
                <TrendingUp className="text-white" size={32} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#0D1B2A"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
