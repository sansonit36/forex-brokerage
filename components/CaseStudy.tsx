'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, BarChart3, Users, Globe } from 'lucide-react';

const CaseStudy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      title: 'VertexFX Trading Platform',
      description: 'Professional-grade trading interface with advanced charting and order management',
      icon: BarChart3,
      features: ['Multi-asset support', 'Real-time quotes', 'Advanced charting'],
    },
    {
      title: 'CRM Dashboard',
      description: 'Comprehensive client management and back-office operations',
      icon: Users,
      features: ['Client portal', 'IB management', 'Reporting tools'],
    },
    {
      title: 'Custom Branded Website',
      description: 'Modern, conversion-optimized website for client acquisition',
      icon: Globe,
      features: ['Responsive design', 'SEO optimized', 'Fast loading'],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const milestones = [
    { day: 'Day 1-2', title: 'Platform Setup', status: 'complete' },
    { day: 'Day 3-5', title: 'CRM Configuration', status: 'complete' },
    { day: 'Day 6-8', title: 'Integration & Testing', status: 'complete' },
    { day: 'Day 9-10', title: 'Go Live!', status: 'complete' },
  ];

  return (
    <section id="case-study" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
            <CheckCircle size={20} />
            <span className="text-sm font-semibold">Success Story</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            From Zero to Full Brokerage
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              in Just 10 Days
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We recently helped a new brokerage launch using our A–Z setup. Within two weeks, they were onboarding real clients and running campaigns — all with VertexFX + our CRM system.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Setup Timeline</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border-2 border-green-500">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-blue-600">{milestone.day}</span>
                      <CheckCircle className="text-green-500" size={20} />
                    </div>
                    <h4 className="font-bold text-gray-900">{milestone.title}</h4>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-green-500" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 sm:p-12"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left - Screenshot Mock */}
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                      {(() => {
                        const IconComponent = screenshots[currentSlide].icon;
                        return (
                          <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                            <IconComponent className="text-white" size={80} />
                          </div>
                        );
                      })()}
                    </div>

                    {/* Right - Description */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          {screenshots[currentSlide].title}
                        </h3>
                        <p className="text-lg text-gray-600">
                          {screenshots[currentSlide].description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {screenshots[currentSlide].features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="text-gray-800" size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="text-gray-800" size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center space-x-2 py-6 bg-gray-50">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-200 rounded-full ${
                    currentSlide === index
                      ? 'w-8 h-3 bg-blue-600'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '10 Days', label: 'From Start to Launch' },
            { value: '500+', label: 'Clients Onboarded' },
            { value: '$2M+', label: 'Trading Volume (First Month)' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white shadow-xl"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
