'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const navLinks = [
  { id: 0, label: 'Home', target: 'section-0' },
  { id: 1, label: 'Services', target: 'section-1' },
  { id: 2, label: 'About Us', target: 'section-2' },
  { id: 3, label: 'Contact', target: 'section-3' },
];

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0); // Active section index

  const handleScrollTo = (target: string, index: number) => {
    // Scroll to target section and update active index
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Detect active section on scroll
      let newIndex = 0;

      for (let i = 0; i < navLinks.length; i++) {
        const section = document.getElementById(navLinks[i].target);
        if (!section) continue;

        const { top, bottom } = section.getBoundingClientRect();
        if (top <= window.innerHeight / 2 && bottom >= 0) {
          newIndex = i;
        }
      }

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, [activeIndex]);

  return (
    <motion.nav
      // Animate the whole header container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 5.5, ease: 'easeOut' }} // Fade in after 5s
      className="
        fixed top-4 left-1/2 transform -translate-x-1/2
        bg-background/20 backdrop-blur-md rounded-full shadow-lg
        w-[90%] max-w-[900px]
        flex items-center px-6 py-3 z-50
      "
    >
      <div className="flex items-center w-full">
        {navLinks.map((link, index) => (
          <React.Fragment key={link.id}>
            {/* Node */}
            <div
              onClick={() => handleScrollTo(link.target, index)}
              className="flex flex-col items-center cursor-pointer gap-2.5"
            >
              <motion.div
                className={clsx(
                  'w-2.5 h-2.5 rounded-full border-2',
                  activeIndex >= index ? 'bg-accent border-accent' : 'border-primary',
                )}
                animate={{ scale: activeIndex === index ? 1.4 : 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              />
              <span
                className={clsx(
                  'mt-0.5 text-1 select-none',
                  activeIndex === index ? 'text-accent' : 'text-muted',
                )}
              >
                {link.label}
              </span>
            </div>

            {/* Connector */}
            {index < navLinks.length - 1 && (
              <motion.div
                className={clsx(
                  'h-1 rounded-full flex-grow -translate-y-4',
                  activeIndex > index ? 'bg-accent' : 'bg-primary',
                )}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeIndex > index ? 1 : 0 }}
                transition={{
                  duration: 0.2,
                  ease: 'easeOut',
                  delay:
                    activeIndex > index
                      ? index * 0.2 // connecting forward
                      : (navLinks.length - index) * 0.1, // disconnecting backward
                }}
                style={{ transformOrigin: 'left' }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.nav>
  );
}
