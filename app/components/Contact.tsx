'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Thanks for reaching out! We’ll get back to you soon.');
      setFormData({ name: '', email: '', projectType: '', message: '' });
    } else {
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <motion.section
      id="section-3"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-20 py-20 text-primary overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Logo */}
      <div className="absolute inset-0 flex justify-center items-center opacity-5 pointer-events-none">
        <Image
          src="/logo/logo.svg"
          alt="Developing Bridges Logo"
          width={400}
          height={400}
          className="w-72 md:w-96"
        />
      </div>

      {/* Section Title */}
      <motion.h2
        className="relative z-10 text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        CONTACT US
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="relative z-10 text-muted text-lg md:text-xl mb-10 max-w-2xl text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Let’s build something great together. Fill out the form and we’ll get back to you as soon as
        possible.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-2xl bg-muted/20 rounded-2xl shadow p-8 md:p-12 space-y-6 backdrop-blur"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {/* Name */}
        <div>
          <label className="block mb-1 text-primary font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-dark text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-primary font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-dark text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block mb-1 text-primary font-medium">Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-dark text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Select a type</option>
            <option value="Landing Page">Landing Page</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Web App">Web App</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 text-primary font-medium">Message</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-dark text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-accent text-primary font-bold py-3 rounded-xl hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </motion.form>
    </motion.section>
  );
}
