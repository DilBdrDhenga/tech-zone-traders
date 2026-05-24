"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-90" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary-DEFAULT/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-DEFAULT/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <span className="glass-effect text-white px-4 py-2 rounded-full text-sm font-medium">
              Established B.S. 2075
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
          >
            Leading Digital Display &{" "}
            <span className="gradient-text">Advertising Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Professional, reliable, and modern branding solutions for
            businesses, organizations, events, and commercial projects in Nepal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-secondary-DEFAULT hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              View Services
            </button>
          </motion.div>
        </motion.div>

        {/* Features Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Sparkles,
              title: "Modern Technology",
              desc: "Latest LED & digital solutions",
            },
            {
              icon: Zap,
              title: "Fast Installation",
              desc: "Quick & reliable setup",
            },
            { icon: Shield, title: "Trusted Service", desc: "Since B.S. 2075" },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 text-secondary-DEFAULT mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
