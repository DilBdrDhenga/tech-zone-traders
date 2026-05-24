"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Target, Eye } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: "2075", label: "Established", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Users },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="bg-secondary-DEFAULT/10 text-secondary-DEFAULT px-4 py-2 rounded-full text-sm font-semibold">
                About Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
              Leading Digital Display Solutions Provider in Nepal
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Tech Zone Traders is a leading digital display and advertising
              solutions company established in B.S. 2075. Since its
              establishment, the company has been providing professional,
              reliable, and modern branding solutions for businesses,
              organizations, institutions, events, and commercial projects.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Known as one of the first and most trusted service providers in
              the town, Tech Zone Traders specializes in advanced LED display
              systems, sign board production, digital advertising equipment, and
              complete visual branding services.
            </p>

            <div className="flex gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2">
                    <stat.icon className="w-6 h-6 text-secondary-DEFAULT" />
                    <span className="text-3xl font-bold text-primary-dark">
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
                <Target className="w-10 h-10 text-accent-DEFAULT mb-3" />
                <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  To provide modern, creative, and high-quality digital display
                  and branding solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
                <Eye className="w-10 h-10 text-accent-DEFAULT mb-3" />
                <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  To become the most trusted LED display and signage company in
                  Nepal.
                </p>
              </div>
            </div>
            <div className="relative mt-12">
              <div className="bg-gradient-to-br from-secondary-DEFAULT to-accent-DEFAULT rounded-2xl p-8 text-white shadow-xl">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-xl mb-2">Trusted Partner</h3>
                <p className="text-white/90">
                  Serving customers with excellence since B.S. 2075
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
