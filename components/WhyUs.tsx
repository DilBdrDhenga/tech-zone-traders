"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle,
  Clock,
  Heart,
  Lightbulb,
  DollarSign,
  Users,
  Award,
  Settings,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Trusted Experience",
    description: "Serving customers with excellence since B.S. 2075",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced and dedicated professionals",
    color: "text-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Creative Designs",
    description: "Modern and innovative design solutions",
    color: "text-purple-500",
  },
  {
    icon: Settings,
    title: "Quality Products",
    description: "High-quality LED and signage solutions",
    color: "text-green-500",
  },
  {
    icon: Clock,
    title: "Fast Installation",
    description: "Quick setup and reliable support",
    color: "text-orange-500",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates for quality service",
    color: "text-emerald-500",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Dedicated to client satisfaction",
    color: "text-red-500",
  },
  {
    icon: CheckCircle,
    title: "Custom Solutions",
    description: "Tailored to your specific needs",
    color: "text-teal-500",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="why-us"
      className="section-padding gradient-bg text-white"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Tech Zone Traders?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Setting the standard for excellence in digital display and branding
            solutions
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <reason.icon
                className={`w-12 h-12 ${reason.color} mx-auto mb-4`}
              />
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-white/70 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
