'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShoppingCart, Settings } from 'lucide-react';

const services = [
  {
    id: 'section-0',
    icon: <FileText size={40} />,
    title: 'Landing Pages',
    description:
      'High-converting pages to boost your brand visibility and capture leads effortlessly.',
  },
  {
    id: 2,
    icon: <ShoppingCart size={40} />,
    title: 'E-commerce',
    description:
      'Custom stores designed for performance, scalability, and seamless shopping experiences.',
  },
  {
    id: 3,
    icon: <Settings size={40} />,
    title: 'Web Apps',
    description:
      'Powerful web applications built for complex workflows and dynamic user experiences.',
  },
];

export default function Services() {
  return (
    <section
      id="section-1"
      className="relative flex flex-col items-center justify-center min-h-screen text-primary overflow-hidden px-6"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          OUR SERVICES
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-muted text-xl md:text-2xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          We build tailored digital solutions for your business.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 w-full">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="flex flex-col items-center text-center p-4 rounded-lg transition hover:scale-115 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.3, // cascading animation
                ease: 'easeOut',
              }}
            >
              {/* Icon */}
              <div className="text-accent mb-4">{service.icon}</div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

              {/* Service Description */}
              <p className="text-muted text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
