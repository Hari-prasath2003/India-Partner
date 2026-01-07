"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Services() {
  const services = [
    "IT Hiring (Developers, QA, Support, DevOps, Cloud)",
    "Employer of Record (EOR)",
    "Payroll, Tax & Statutory Compliance",
    "Laptop & IT Asset Management",
    "Office or Remote Infrastructure Support",
    "HR Operations & Employee Lifecycle Management",
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-gray-900 mb-6"
          >
            <span className="bg-gradient-to-r from-[#0163c6] to-[#073265] bg-clip-text text-transparent">
              End-to-End
            </span>{" "}
            India Team Enablement
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-xl max-w-3xl mx-auto"
          >
            We support companies at every stage of their India expansion.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 10px 40px rgba(1, 99, 198, 0.15)",
              }}
              className="bg-white border-2 border-gray-200 hover:border-[#0163c6]/40 rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#0163c6] to-[#073265] rounded-full flex items-center justify-center shadow-lg"
              >
                <Check className="w-6 h-6 text-white" />
              </motion.div>

              <div className="flex-1">
                <p className="text-gray-800 text-lg">{service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#0163c6]/10 to-[#073265]/10 border border-[#0163c6]/20 rounded-2xl p-8 inline-block shadow-lg">
            <p className="text-[#0163c6] text-xl">
              Everything you need to run a reliable India team — under one partnership.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0163c6]/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#073265]/5 rounded-full blur-3xl -translate-y-1/2"></div>
    </section>
  );
}