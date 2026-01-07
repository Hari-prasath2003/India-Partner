"use client";

import { motion } from "motion/react";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const whatsappNumber = "+919876543210"; // Temporary WhatsApp number
  const email = "manager@theindiapartner.com";
  const phone = "+919876543210";
  const linkedIn = "https://www.linkedin.com/company/theindiapartner";
  const twitter = "https://twitter.com/theindiapartner";
  const facebook = "https://www.facebook.com/theindiapartner";
  const location = "Bangalore, India";

  const officeInfo = [
    { icon: MapPin, text: location, href: "https://maps.google.com/?q=Bangalore,India" },
    { icon: Mail, text: email, href: `mailto:${email}` },
    { icon: Phone, text: phone, href: `tel:${phone}` },
  ];

  const services = [
    { name: "IT Hiring & Recruitment", href: "#services" },
    { name: "Employer of Record (EOR)", href: "#services" },
    { name: "Payroll Management", href: "#services" },
    { name: "Compliance & Legal", href: "#compliance" },
    { name: "Infrastructure Setup", href: "#services" },
    { name: "HR Operations", href: "#services" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#expansion" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Industries We Serve", href: "#who" },
    { name: "Success Stories", href: "#clients" },
    { name: "Resources", href: "#why-india" },
    { 
      name: "Contact Us", 
      href: `mailto:${email}?subject=Inquiry%20from%20The%20India%20Partner%20Website&body=Hello%20Team,%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20services.%0D%0A%0D%0AName:%20%0D%0ACompany:%20%0D%0AMessage:%20%0D%0A%0D%0AThank%20you!` 
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: linkedIn },
    { icon: Twitter, label: "Twitter", href: twitter },
    { icon: Facebook, label: "Facebook", href: facebook },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-[#073265] to-gray-900 pt-20 pb-10 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
          animate={{
            scale: [1, 1.2, 1],
            backgroundColor: ["rgba(59, 130, 246, 0.05)", "rgba(59, 130, 246, 0.08)", "rgba(59, 130, 246, 0.05)"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(6, 182, 212, 0.05)" }}
          animate={{
            scale: [1, 1.3, 1],
            backgroundColor: ["rgba(6, 182, 212, 0.05)", "rgba(6, 182, 212, 0.08)", "rgba(6, 182, 212, 0.05)"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6"
            >
              <Logo size="md" />
            </motion.div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted partner for building and scaling IT teams in India. 
              Seamless operations, complete compliance, and enterprise-grade support.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                    }}
                    className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-lg flex items-center justify-center hover:border-blue-500/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white/70 hover:text-blue-400 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Our Office */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl mb-6 relative inline-block">
              Our Office
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h3>
            <div className="space-y-4">
              {officeInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 text-white/60 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <a href={info.href} className="text-sm">{info.text}</a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl mb-6 relative inline-block">
              Services
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.a
                  key={index}
                  href={service.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-white/60 hover:text-blue-400 transition-all duration-300 text-sm group"
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400"
                    whileHover={{ scale: 1.5 }}
                  />
                  {service.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl mb-6 relative inline-block">
              Quick Links
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-white/60 hover:text-blue-400 transition-all duration-300 text-sm group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/40 text-sm">
            © 2026 The India Partner. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/40 hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}