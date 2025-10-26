'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, AlertTriangle, Settings, BarChart3, CreditCard, Users } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: Settings,
      text: 'Wrong platform or unstable setup.',
    },
    {
      icon: BarChart3,
      text: 'No proper CRM or client management.',
    },
    {
      icon: CreditCard,
      text: 'No payment or liquidity connections.',
    },
    {
      icon: Users,
      text: 'No experienced guidance.',
    },
  ];

  return (
    <section id="problems" className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
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
          <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full mb-6">
            <AlertTriangle size={20} />
            <span className="text-sm font-semibold">The Hard Truth</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Most People Try to Start a Forex Brokerage
            <br />
            <span className="text-red-400">and Fail — Here&apos;s Why.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                    <IconComponent className="text-red-300" size={32} />
                  </div>
                  <div className="flex items-start space-x-2">
                    <XCircle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                    <p className="text-lg text-gray-200">{problem.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-500/20 to-blue-500/20 border border-amber-500/30 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
              With our A–Z solution, you skip all the stress
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">
                and go live within 10 days.
              </span>
            </p>
            <div className="flex items-center justify-center space-x-3 mt-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-semibold">Everything handled for you</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Problem;
