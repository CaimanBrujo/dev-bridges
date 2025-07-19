'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundBlobs() {
  return (
    <div className="absolute top-0 left-0 w-full h-[400vh] -z-10 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-background" />

      {/* Hero blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent to-primary opacity-30 blur-3xl animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-surface to-muted opacity-25 blur-2xl animate-pulse"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Services blobs */}
      <motion.div
        className="absolute top-[800px] left-[-200px] w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-muted to-primary opacity-20 blur-3xl animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[900px] right-[-250px] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-surface to-accent opacity-20 blur-2xl animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Contact blobs */}
      <motion.div
        className="absolute top-[1600px] left-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-muted to-surface opacity-15 blur-3xl animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[1750px] right-[-200px] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent to-primary opacity-15 blur-2xl animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
