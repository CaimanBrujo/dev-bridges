'use client';

import React, { useEffect, useState } from 'react';
import { navLinks } from './data';
import NavLink from './NavLink';
import NodeConnector from './NodeConnector';

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollTo = (target: string, index: number) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-6 z-50 shadow-lg">
      {navLinks.map((link, index) => (
        <div key={link.id} className="relative flex items-center">
          <NavLink
            label={link.label}
            isActive={activeIndex === index}
            isConnected={activeIndex >= index} // All previous nodes remain connected
            onClickAction={() => handleScrollTo(link.target, index)}
          />
          {index < navLinks.length - 1 && <NodeConnector isActive={activeIndex > index} />}
        </div>
      ))}
    </nav>
  );
}
