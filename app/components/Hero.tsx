'use client';

import React from 'react';

export default function Hero() {
  return (
    <section
      id="section-0"
      className="relative flex flex-col items-center justify-center min-h-screen bg-background text-primary overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent to-primary opacity-30 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-surface to-muted opacity-20 blur-2xl animate-pulse delay-200" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          DEVELOPING <span className="text-accent">BRIDGES</span>
        </h1>
        <p className="text-muted text-4xl max-w-2xl mb-8">We bring technology closer to you.</p>
        <div className="flex gap-4">
          <button className="bg-accent px-6 py-3 rounded-full hover:bg-dark text-primary transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
