'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="section-0"
      className="relative flex flex-col items-center justify-center min-h-screen bg-background text-primary overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent to-primary opacity-30 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-surface to-muted opacity-20 blur-2xl animate-pulse delay-200" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          DEVELOPING <span className="text-accent">BRIDGES</span>
        </motion.h1>

        <motion.p
          className="text-muted text-4xl max-w-2xl mb-8 overflow-hidden relative"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 2.8, delay: 1.2, ease: 'easeInOut' }}
        >
          We bring technology closer to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, z: -50 }}
          animate={{ opacity: 1, scale: 1, z: 0 }}
          transition={{ duration: 2, delay: 4.3, ease: 'easeOut' }}
        >
          <button className="bg-accent px-6 py-3 rounded-full hover:bg-dark text-primary transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
