"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "Kathmandu, Nepal", link: null },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9800000000",
      link: "tel:+9779800000000",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@techzonetraders.com",
      link: "mailto:info@techzonetraders.com",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Sun - Fri: 9:00 AM - 6:00 PM",
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-secondary-DEFAULT/10 text-secondary-DEFAULT px-4 py-2 rounded-full text-sm font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Get in touch
            with our team today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-DEFAULT focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-DEFAULT focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-DEFAULT focus:border-transparent outline-none transition"
                  placeholder="+977 9800000000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-DEFAULT focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary-DEFAULT hover:bg-secondary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary-DEFAULT/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-secondary-DEFAULT" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-800 hover:text-secondary-DEFAULT transition"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-800">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.317205178343!2d85.32359931505975!3d27.70523798278767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190c1f6b9a9f%3A0x8b5e3b8f5c5e5b5f!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tech Zone Traders Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
