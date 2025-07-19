'use client';

import React from 'react';
import { Mail, Globe, Code, Database, Settings, Wrench, Palette } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative bg-transparent text-primary px-6 lg:px-20 py-16 overflow-hidden">
      {/* Logo as background */}
      <div className="absolute inset-0 flex justify-center items-center opacity-3 pointer-events-none">
        <Image
          src="/logo/logo.svg"
          alt="Developing Bridges Logo Background"
          width={300}
          height={300}
          className="w-96 md:w-[350px]"
        />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-muted pt-8">
        {/* Contact Section */}
        <div className="mx-10">
          <h4 className="text-lg font-semibold mb-4 text-accent flex items-center gap-2">
            <Mail size={18} /> Contact
          </h4>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <a
                href="mailto:contact@developingbridges.com"
                className="hover:underline hover:text-accent transition-colors duration-200"
              >
                contact@developingbridges.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe size={16} className="text-primary" />
              <span>Worldwide</span>
            </li>
          </ul>
        </div>

        {/* Tech Stack Section */}
        <div className="mx-10">
          <h4 className="text-lg font-semibold mb-4 text-accent flex items-center gap-2">
            <Code size={18} /> Tech Stack
          </h4>
          <div className="space-y-3">
            <div>
              <span className="flex items-center gap-2 text-muted font-medium">
                <Code size={14} /> Frontend
              </span>
              <p className="text-sm text-primary mt-1">
                Next.js, React, TypeScript, Tailwind CSS, HTML5, CSS3
              </p>
            </div>
            <div>
              <span className="flex items-center gap-2 text-muted font-medium">
                <Settings size={14} /> Backend
              </span>
              <p className="text-sm text-primary mt-1">
                Node.js, Express, REST APIs, Supabase, BaaS
              </p>
            </div>
            <div>
              <span className="flex items-center gap-2 text-muted font-medium">
                <Database size={14} /> Databases
              </span>
              <p className="text-sm text-primary mt-1">PostgreSQL, MongoDB</p>
            </div>
            <div>
              <span className="flex items-center gap-2 text-muted font-medium">
                <Wrench size={14} /> Tools
              </span>
              <p className="text-sm text-primary mt-1">
                Git & GitHub, Vercel, Railway, Jest, Webpack, Vite, ESLint, Prettier
              </p>
            </div>
            <div>
              <span className="flex items-center gap-2 text-muted font-medium">
                <Palette size={14} /> Design
              </span>
              <p className="text-sm text-primary mt-1">Figma, Photoshop</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="relative z-10 max-w-8xl mx-auto mt-8 text-center text-xs text-muted border-t border-muted pt-4">
        © {new Date().getFullYear()} Developing Bridges. All rights reserved.
      </div>
    </footer>
  );
}
