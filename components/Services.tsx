"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Monitor,
  Layout,
  Printer,
  Smartphone,
  Trophy,
  Film,
  ChevronRight,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "LED Display Solutions",
    description:
      "Indoor & outdoor LED display boards, full color LED screens, digital advertising displays, and event LED wall setup.",
    features: [
      "Indoor LED Boards",
      "Outdoor LED Boards",
      "Full Color LED Screens",
      "Event LED Wall Setup",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layout,
    title: "2D & 3D Sign Boards",
    description:
      "High-quality sign boards including ACP, Glow, Flex, Light Box, and premium 3D letter signs.",
    features: [
      "ACP Sign Boards",
      "Glow Sign Boards",
      "3D Acrylic Letters",
      "LED 3D Letter Signs",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Printer,
    title: "Printing & Branding",
    description:
      "Complete printing solutions including flex, vinyl, eco-solvent printing and promotional materials.",
    features: [
      "Flex Printing",
      "Vinyl Printing",
      "Banner Design",
      "Sticker Printing",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Smartphone,
    title: "Smart Digital Solutions",
    description:
      "Modern digital devices including smart boards, interactive panels, and digital kiosks.",
    features: [
      "Smart Boards",
      "Interactive Panels",
      "Digital Standees",
      "Smart Kiosks",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Film,
    title: "LED Display Rental",
    description:
      "Professional rental LED display solutions for concerts, weddings, corporate events, and more.",
    features: [
      "Concerts & Shows",
      "Weddings & Events",
      "Corporate Programs",
      "Technical Support",
    ],
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Trophy,
    title: "Complete Branding",
    description:
      "End-to-end branding solutions from design to installation for your business.",
    features: [
      "Shop Branding",
      "Corporate Branding",
      "Event Branding",
      "Custom Solutions",
    ],
    color: "from-indigo-500 to-violet-500",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-secondary-DEFAULT/10 text-secondary-DEFAULT px-4 py-2 rounded-full text-sm font-semibold">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end digital display and branding solutions
            tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setActiveService(index)}
              onHoverEnd={() => setActiveService(null)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div
                className={`bg-gradient-to-r ${service.color} p-6 text-white`}
              >
                <service.icon className="w-12 h-12 mb-3" />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <ChevronRight className="w-4 h-4 text-secondary-DEFAULT" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 text-secondary-DEFAULT font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
