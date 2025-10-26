'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, FileText, Shield, DollarSign, Calendar, TrendingUp, Users } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  country: z.string().min(2, 'Country is required'),
  brokerageType: z.enum(['starter', 'pro', 'not-decided']).refine((val) => !!val, {
    message: 'Please select a package',
  }),
  setupBudget: z.string().min(1, 'Please select your setup budget'),
  monthlyBudget: z.string().min(1, 'Please select your monthly budget'),
  timeline: z.string().min(1, 'Please select your preferred timeline'),
  experience: z.string().min(1, 'Please select your experience level'),
  currentTraders: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'website' }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      
      // Redirect to thank you page after 1 second
      setTimeout(() => {
        router.push('/thank-you');
      }, 1000);
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/20">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 backdrop-blur-md bg-blue-500/10 text-blue-700 px-4 py-2 rounded-full mb-4 border border-blue-200/30"
        >
          <FileText size={20} className="text-blue-600" />
          <span className="text-sm font-semibold">Start Your Journey</span>
        </motion.div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Get Your Custom Brokerage Quote
        </h2>
        <p className="text-lg text-gray-600">
          Answer a few questions to help us understand your needs and provide the best solution.
        </p>
      </div>

      {/* Success/Error Messages */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start space-x-3"
          >
            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-semibold text-green-900">Thank you!</p>
              <p className="text-sm text-green-700">
                Your request has been submitted successfully. We&apos;ll be in touch soon!
              </p>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3"
          >
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-semibold text-red-900">Submission Failed</p>
              <p className="text-sm text-red-700">
                Something went wrong. Please try again or contact us via WhatsApp.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('firstName')}
              type="text"
              placeholder="John"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('lastName')}
              type="text"
              placeholder="Doe"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="john@example.com"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="+1 234 567 8900"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Company and Country */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Name (Optional)
            </label>
            <input
              {...register('company')}
              type="text"
              placeholder="Your Company"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              {...register('country')}
              type="text"
              placeholder="United States"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.country ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
            />
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
            )}
          </div>
        </div>

        {/* Brokerage Package */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Brokerage Package <span className="text-red-500">*</span>
          </label>
          <select
            {...register('brokerageType')}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.brokerageType ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
          >
            <option value="">Select a package...</option>
            <option value="starter">Starter Brokerage ($8,000 setup + $6,000/month)</option>
            <option value="pro">Pro Brokerage ($12,000 setup + $8,000/month)</option>
            <option value="not-decided">Not Sure Yet</option>
          </select>
          {errors.brokerageType && (
            <p className="mt-1 text-sm text-red-600">{errors.brokerageType.message}</p>
          )}
        </div>

        {/* Budget & Timeline Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 space-y-6">
          <div className="flex items-center space-x-2 text-blue-700 mb-4">
            <DollarSign size={20} />
            <h3 className="font-bold text-lg">Budget & Timeline</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Setup Budget */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Setup Budget <span className="text-red-500">*</span>
              </label>
              <select
                {...register('setupBudget')}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.setupBudget ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white`}
              >
                <option value="">Select budget...</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-15k">$10,000 - $15,000</option>
                <option value="15k-plus">$15,000+</option>
              </select>
              {errors.setupBudget && (
                <p className="mt-1 text-sm text-red-600">{errors.setupBudget.message}</p>
              )}
            </div>

            {/* Monthly Budget */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Monthly Operating Budget <span className="text-red-500">*</span>
              </label>
              <select
                {...register('monthlyBudget')}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.monthlyBudget ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white`}
              >
                <option value="">Select budget...</option>
                <option value="under-3k">Under $3,000</option>
                <option value="3k-6k">$3,000 - $6,000</option>
                <option value="6k-10k">$6,000 - $10,000</option>
                <option value="10k-plus">$10,000+</option>
              </select>
              {errors.monthlyBudget && (
                <p className="mt-1 text-sm text-red-600">{errors.monthlyBudget.message}</p>
              )}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              When do you want to launch? <span className="text-red-500">*</span>
            </label>
            <select
              {...register('timeline')}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.timeline ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white`}
            >
              <option value="">Select timeline...</option>
              <option value="asap">ASAP (Within 2 weeks)</option>
              <option value="1-month">Within 1 month</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-plus-months">3+ months</option>
              <option value="just-exploring">Just exploring options</option>
            </select>
            {errors.timeline && (
              <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
            )}
          </div>
        </div>

        {/* Experience & Business Section */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100 space-y-6">
          <div className="flex items-center space-x-2 text-green-700 mb-4">
            <TrendingUp size={20} />
            <h3 className="font-bold text-lg">Experience & Business Goals</h3>
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Experience in Forex Industry <span className="text-red-500">*</span>
            </label>
            <select
              {...register('experience')}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.experience ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white`}
            >
              <option value="">Select experience...</option>
              <option value="complete-beginner">Complete Beginner - New to Forex</option>
              <option value="trader">Active Trader - Want to Start Brokerage</option>
              <option value="ib-affiliate">IB/Affiliate - Expanding Business</option>
              <option value="existing-broker">Existing Broker - Looking to Switch</option>
              <option value="experienced-operator">Experienced Brokerage Operator</option>
            </select>
            {errors.experience && (
              <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
            )}
          </div>

          {/* Current Traders */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Do you have existing traders/clients? (Optional)
            </label>
            <select
              {...register('currentTraders')}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white"
            >
              <option value="">Select option...</option>
              <option value="none">No, starting from scratch</option>
              <option value="under-50">Yes, under 50 traders</option>
              <option value="50-200">Yes, 50-200 traders</option>
              <option value="200-500">Yes, 200-500 traders</option>
              <option value="500-plus">Yes, 500+ traders</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tell Us About Your Goals <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message')}
            rows={5}
            placeholder="Tell us about your brokerage goals, timeline, and any questions you have..."
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={24} />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send size={24} />
              <span>Submit Request</span>
            </>
          )}
        </motion.button>

        {/* Privacy Note */}
        <p className="text-center text-sm text-gray-500 flex items-center justify-center space-x-2">
          <Shield size={16} className="text-blue-600" />
          <span>Your information is secure and will never be shared with third parties.</span>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
