'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    const section = document.getElementById('section-3');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="section-0"
      className="relative flex flex-col items-center justify-center min-h-screen text-primary overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="mb-6"
        >
          <Image
            src="/logo/logo.svg"
            alt="Developing Bridges Logo"
            width={230}
            height={230}
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
        >
          DEVELOPING <span className="text-accent">BRIDGES</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="text-muted text-4xl max-w-2xl mb-8 relative flex justify-center gap-2 flex-wrap">
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1.2, ease: 'easeOut' }}
          >
            We bring technology
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1.2, ease: 'easeOut' }}
          >
            closer to you.
          </motion.span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, z: -50 }}
          animate={{ opacity: 1, scale: 1, z: 0 }}
          transition={{ duration: 2, delay: 3, ease: 'easeOut' }}
        >
          <button
            onClick={scrollToContact}
            className="bg-accent px-6 py-3 rounded-full hover:scale-115 text-primary transition"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
