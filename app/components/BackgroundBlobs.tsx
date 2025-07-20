'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {/* Dark background */}
      <div className="absolute inset-0 bg-background" />

      {/* HERO blobs */}
      <motion.div
        className="absolute -top-48 -left-48 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tr from-accent to-primary opacity-15 blur-3xl animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -top-40 -right-48 w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full bg-gradient-to-tl from-muted to-accent opacity-12 blur-3xl animate-pulse"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* SERVICES blobs */}
      <motion.div
        className="absolute top-[750px] left-[-220px] w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full bg-gradient-to-tl from-muted to-primary opacity-10 blur-2xl animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute top-[850px] right-[-250px] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-primary to-accent opacity-10 blur-2xl animate-pulse"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />

      {/* ABOUT blobs */}
      <motion.div
        className="absolute top-[1600px] left-[-150px] w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full bg-gradient-to-tr from-accent to-muted opacity-8 blur-2xl animate-pulse"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-[1700px] right-[-180px] w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full bg-gradient-to-bl from-muted to-primary opacity-8 blur-2xl animate-pulse"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* CONTACT blobs */}
      <motion.div
        className="absolute top-[2500px] left-[-180px] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tl from-accent to-muted opacity-7 blur-3xl animate-pulse"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
      <motion.div
        className="absolute top-[2650px] right-[-150px] w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full bg-gradient-to-br from-primary to-accent opacity-6 blur-xl animate-pulse"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.7 }}
      />

      {/* FINAL blobs */}
      <motion.div
        className="absolute bottom-[100px] right-[10%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-bl from-accent to-muted opacity-5 blur-xl animate-pulse"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  );
}
