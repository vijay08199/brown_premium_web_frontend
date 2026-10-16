// src/components/EnquiryCTA.tsx
import React, { useState } from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';

export default function EnquiryCTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: just mark as submitted
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/src/assets/about.png"
            alt="Enquiry"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        {/* Form side */}
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-serif text-primaryDark mb-4">Get in Touch</h2>
          {submitted ? (
            <p className="text-darkText mb-4">Thank you! Your enquiry has been recorded (demo only).</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center border-b border-primaryDark py-2">
                <Phone className="text-primaryDark mr-2" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="flex-1 bg-transparent focus:outline-none text-darkText"
                />
              </div>
              <div className="flex items-center border-b border-primaryDark py-2">
                <MessageSquare className="text-primaryDark mr-2" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="flex-1 bg-transparent focus:outline-none text-darkText"
                />
              </div>
              <div className="flex items-center border-b border-primaryDark py-2">
                <Phone className="text-primaryDark mr-2" size={20} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="flex-1 bg-transparent focus:outline-none text-darkText"
                />
              </div>
              <div className="flex items-start border-b border-primaryDark py-2">
                <MessageSquare className="text-primaryDark mr-2 mt-1" size={20} />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="flex-1 bg-transparent focus:outline-none text-darkText resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-terracotta hover:bg-warmCopper text-white font-medium py-2 px-6 rounded flex items-center"
              >
                Send Message <Send className="ml-2" size={16} />
              </button>
            </form>
          )}
          <div className="mt-6">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-terracotta hover:text-warmCopper"
            >
              <MessageSquare size={24} className="mr-2" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
