"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Hero } from "./components/Hero";
import { SimpleExpansion } from "./components/SimpleExpansion";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { GlobalReach } from "./components/GlobalReach";
import { WhyIndia } from "./components/WhyIndia";
import { WhyUs } from "./components/WhyUs";
import { ClientEngagements } from "./components/ClientEngagements";
import { Leadership } from "./components/Leadership";
import { Compliance } from "./components/Compliance";
import { WhoWeWorkWith } from "./components/WhoWeWorkWith";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const whatsappNumber = "+919876543210"; // Temporary WhatsApp number
  const email = "manager@theindiapartner.com";

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Us", href: "#why-us" },
    { name: "Clients", href: "#clients" },
  ];

  return (
    <>
      <Loader onLoadingComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="min-h-screen bg-white overflow-x-hidden">
          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <Logo size="sm" />
              </motion.div>
              
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      y: -2,
                    }}
                    className="text-gray-600 hover:text-[#0163c6] transition-all duration-300 relative group"
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#0163c6] to-[#073265]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
                <motion.a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20about%20building%20an%20IT%20team%20in%20India.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 40px rgba(1, 99, 198, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#0163c6] to-[#073265] text-white px-6 py-2 rounded-full shadow-lg shadow-[#0163c6]/20 hover:shadow-xl hover:shadow-[#0163c6]/30 transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#073265] to-[#0163c6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">Book Consultation</span>
                </motion.a>
              </div>
            </div>
          </motion.nav>

          {/* Hero Section */}
          <section id="hero" className="relative">
            <Hero />
          </section>

          {/* Simple Expansion Section */}
          <section id="expansion" className="relative">
            <SimpleExpansion />
          </section>

          {/* Services Section */}
          <section id="services" className="relative">
            <Services />
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="relative">
            <HowItWorks />
          </section>

          {/* Global Reach Section */}
          <section id="global" className="relative">
            <GlobalReach />
          </section>

          {/* Why India Section */}
          <section id="why-india" className="relative">
            <WhyIndia />
          </section>

          {/* Why Us Section */}
          <section id="why-us" className="relative">
            <WhyUs />
          </section>

          {/* Client Engagements Section */}
          <section id="clients" className="relative">
            <ClientEngagements />
          </section>

          {/* Leadership Section */}
          <section id="leadership" className="relative">
            <Leadership />
          </section>

          {/* Compliance Section */}
          <section id="compliance" className="relative">
            <Compliance />
          </section>

          {/* Who We Work With Section */}
          <section id="who" className="relative">
            <WhoWeWorkWith />
          </section>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(1, 99, 198, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(1, 99, 198, 0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "50px 50px",
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl text-gray-900 mb-8"
              >
                Ready to Build Your
                <br />
                <span className="bg-gradient-to-r from-[#0163c6] to-[#073265] bg-clip-text text-transparent">
                  India Team?
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto"
              >
                Whether you are hiring your first employee in India or scaling a complete IT team, 
                YourIndiaPartner is ready to support you. Build with confidence. Operate with clarity. Scale without friction.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20strategy%20call%20about%20building%20an%20IT%20team%20in%20India.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 60px rgba(1, 99, 198, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#0163c6] to-[#073265] text-white px-12 py-4 rounded-full text-lg shadow-lg shadow-[#0163c6]/20 hover:shadow-xl hover:shadow-[#0163c6]/30 transition-all duration-300 relative overflow-hidden group text-center"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#073265] to-[#0163c6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">Schedule a Free Strategy Call</span>
                </motion.a>
                
                <motion.a
                  href={`mailto:${email}?subject=India%20Expansion%20Inquiry%20from%20Website&body=Hello%20Team%2C%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20expanding%20to%20India.%0D%0A%0D%0AName%3A%20%0D%0ACompany%3A%20%0D%0AMessage%3A%20%0D%0A%0D%0AThank%20you!`}
                  whileHover={{ 
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#0163c6]/30 hover:border-[#0163c6]/60 text-[#0163c6] px-12 py-4 rounded-full text-lg hover:bg-[#0163c6]/5 transition-all duration-300 text-center"
                >
                  Talk to Our India Expansion Experts
                </motion.a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 text-gray-500 text-sm"
              >
                Trusted by US & Global Companies • India-Focused Expertise • Complete Compliance Support
              </motion.div>
            </div>
          </motion.section>

          {/* Footer */}
          <Footer />

          {/* Scroll to Top Button */}
          <ScrollToTop />

          {/* Enhanced background ambient animation */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
              animate={{ 
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"
              animate={{ 
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.3, 1],
                x: [0, -40, 0],
                y: [0, 20, 0]
              }}
              transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-3/4 left-1/2 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl"
              animate={{ 
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.1, 1],
                x: [0, 30, 0],
                y: [0, -40, 0]
              }}
              transition={{ duration: 12, delay: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-500/6 rounded-full blur-3xl"
              animate={{ 
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.4, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 15, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      )}
    </>
  );
}