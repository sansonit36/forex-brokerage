'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'Home', href: '#home' },
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Case Study', href: '#case-study' },
    ],
    Resources: [
      { name: 'About Us', href: '#about' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact', href: '#contact' },
      { name: 'Support', href: 'mailto:support@softclose.com' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/legal/privacy-policy' },
      { name: 'Terms of Service', href: '/legal/terms-of-service' },
      { name: 'Refund Policy', href: '/legal/refund-policy' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">FX</span>
                </div>
                <span className="font-bold text-2xl">SoftClose Solutions</span>
              </div>

              <p className="text-gray-400 leading-relaxed max-w-md">
                Your trusted partner for launching and scaling profitable forex brokerages. We provide complete A–Z solutions with VertexFX, CRM systems, and lifetime support.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:support@softclose.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Mail size={18} />
                  <span>support@softclose.com</span>
                </a>
                <a href="https://wa.me/923184451469" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Phone size={18} />
                  <span>+92 318 4451469</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin size={18} />
                  <span>Global Operations: Pakistan, UAE, UK</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm text-center md:text-right"
          >
            <p>© {currentYear} SoftClose Solutions. All Rights Reserved.</p>
            <p className="mt-1">Built with ❤️ for aspiring forex brokers worldwide</p>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-green-400 text-xl">✓</span>
              </div>
              <span className="text-sm">100% Secure Setup</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-xl">✓</span>
              </div>
              <span className="text-sm">Verified Partner</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                <span className="text-amber-400 text-xl">✓</span>
              </div>
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="text-purple-400 text-xl">✓</span>
              </div>
              <span className="text-sm">Money-Back Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full opacity-10 blur-3xl -z-10" />
    </footer>
  );
};

export default Footer;
