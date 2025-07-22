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
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataEncoded = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataEncoded.append(key, value);
      });

      const res = await fetch('https://formspree.io/f/xwpqlvge', {
        method: 'POST',
        body: formDataEncoded,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setModalMessage('Thanks for reaching out! We’ll get back to you ASAP.');
        setIsSuccess(true);
        setFormData({ name: '', email: '', projectType: '', message: '' });
      } else {
        setModalMessage('Something went wrong. Please try again later.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setModalMessage('Something went wrong. Please try again later.');
      setIsSuccess(false);
    }

    setShowModal(true);
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-muted/10 rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-md text-center">
            <Image
              src="/logo/logo.svg"
              alt="Developing Bridges Logo"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className={`text-2xl font-bold mb-2 ${isSuccess ? 'text-accent' : 'text-red-500'}`}>
              {isSuccess ? 'Message Received' : 'Oops!'}
            </h3>
            <p className="text-primary mb-6">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-accent text-primary px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
}
