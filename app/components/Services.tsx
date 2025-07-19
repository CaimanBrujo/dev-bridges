'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Check,
  Zap,
  Shield,
  Globe,
  Lock,
  Database,
  CreditCard,
  User,
  Monitor,
  BarChart,
  Layers,
  Settings,
  Cpu,
  Cloud,
  Smartphone,
} from 'lucide-react';

const services = [
  {
    id: 'landing',
    title: 'Landing',
    image: '/services/landing.svg',
    features: [
      { icon: Globe, text: 'Responsive design for all devices' },
      { icon: Zap, text: 'Smooth animations & micro-interactions' },
      { icon: Check, text: 'SEO optimized for top search rankings' },
      { icon: Shield, text: 'Contact forms with spam protection' },
      { icon: Cpu, text: 'Fast load times with lightweight code' },
      { icon: Smartphone, text: 'Mobile-first approach' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    image: '/services/ecommerce.svg',
    features: [
      { icon: Database, text: 'Full inventory management' },
      { icon: User, text: 'Users with Google & social authentication' },
      { icon: CreditCard, text: 'Secure payment gateways' },
      { icon: BarChart, text: 'Analytics dashboards for insights' },
      { icon: Cloud, text: 'Cloud storage for scalability' },
      { icon: Shield, text: 'End-to-end encryption for transactions' },
    ],
  },
  {
    id: 'webapp',
    title: 'Web Apps',
    image: '/services/webapp.svg',
    features: [
      { icon: Layers, text: 'Modular architecture for scalability' },
      { icon: Settings, text: 'Custom APIs for dynamic workflows' },
      { icon: Cpu, text: 'Real-time updates with WebSockets' },
      { icon: Monitor, text: 'Cross-platform compatibility' },
      { icon: Lock, text: 'Advanced role-based access control' },
      { icon: Zap, text: 'Optimized for high performance' },
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('landing');

  return (
    <motion.section
      id="section-1"
      className="relative flex flex-col items-center justify-center min-h-screen text-primary overflow-hidden px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 sm:mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        OUR SERVICES
      </motion.h2>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-6 md:gap-10 w-full max-w-5xl sm:mb-10">
        {services.map((service) => (
          <motion.button
            key={service.id}
            onClick={() => setActiveTab(service.id)}
            className={`flex flex-col items-center justify-center transition-transform duration-300 ${
              activeTab === service.id
                ? 'scale-130 cursor-default'
                : 'scale-100 opacity-70 cursor-pointer'
            }`}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={140}
              height={140}
              className="w-28 h-28 md:w-36 md:h-36 object-contain"
            />
            <span
              className={`mt-3 text-lg font-medium transition-colors ${
                activeTab === service.id ? 'text-accent' : 'text-muted'
              }`}
            >
              {service.title}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Service Content */}
      <div className="relative w-full max-w-4xl mt-20">
        <AnimatePresence mode="wait">
          {services
            .filter((service) => service.id === activeTab)
            .map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-left gap-2">
                      <div className="flex items-center gap-3">
                        <feature.icon size={20} className="text-accent flex-shrink-0" />
                        <span className="text-muted">{feature.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
