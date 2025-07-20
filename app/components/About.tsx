'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const aboutItems = [
  {
    id: 'mission',
    title: 'MISSION',
    subtitle: 'Bringing technology closer to you',
    description:
      'Our mission is to help businesses grow by connecting them to the digital world. Realizing how essential a strong online presence is for any company, We focus on building clean, modern, and effective web solutions that bring technology closer to people in a simple and meaningful way.',
  },
  {
    id: 'team',
    title: 'TEAM',
    subtitle: 'Front-End, Back-End, UX/UI design',
    description:
      'We are a small team with big skills. From Front-End and Full-Stack development to UX/UI design, we bring together the technical and creative sides needed to build websites and apps that work beautifully. We collaborate closely with every client to make sure every detail reflects their vision and goals.',
  },
  {
    id: 'vision',
    title: 'VISION',
    subtitle: 'Creating minimal solutions for complex problems',
    description:
      'We want to create digital solutions that last. Our vision is to help businesses not only succeed today but also stay strong and relevant in the future. We believe in technology that is simple to use, easy to maintain, and powerful enough to support growth for years to come.',
  },
];

const tabVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <motion.section
      id="section-2"
      className="relative flex flex-col items-center justify-center min-h-screen text-primary overflow-hidden px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 sm:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        ABOUT US
      </motion.h2>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-6 md:gap-10 w-full max-w-5xl sm:mb-10">
        {aboutItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center justify-center h-28 md:h-36 px-4 rounded-lg transition-transform duration-300 font-bold text-2xl md:text-3xl shadow-sm ${
              activeTab === item.id
                ? 'scale-110 bg-muted text-dark cursor-default'
                : 'scale-100 bg-muted/20 text-muted hover:scale-105 cursor-pointer'
            }`}
          >
            {item.title}
          </motion.button>
        ))}
      </div>

      {/* Description Content */}
      <div className="relative w-full max-w-4xl mt-10 text-center">
        <AnimatePresence mode="wait">
          {aboutItems
            .filter((item) => item.id === activeTab)
            .map((item) => (
              <motion.div
                key={item.id}
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* Subtitle */}
                <h3 className="text-accent text-xl md:text-4xl font-semibold mb-4">
                  {item.subtitle}
                </h3>
                {/* Description */}
                <p className="text-muted text-lg md:text-3xl leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
