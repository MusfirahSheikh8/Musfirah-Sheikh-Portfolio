"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, ShieldAlert, Cpu, Award } from "lucide-react";

export default function About() {
  const strengths = [
    {
      Icon: Code2,
      title: "Full-Stack Engineering",
      description: "Building scalable web architectures using React/Next.js and Node/Express.js, supported by optimized relational and NoSQL databases.",
      color: "from-blue-500/20 to-indigo-500/5 text-blue-400 border-blue-500/10",
    },
    {
      Icon: Cpu,
      title: "AI & Automation",
      description: "Engineering OpenCV-powered facial recognition, anti-spoofing validation pipelines, and data scraping automations with API integrations.",
      color: "from-purple-500/20 to-pink-500/5 text-purple-400 border-purple-500/10",
    },
    {
      Icon: ShieldAlert,
      title: "Security Engineering",
      description: "Implementing transaction-safe session rotation, HTTP-only cookie authentication, and multi-factor JWT/OTP workflows.",
      color: "from-red-500/20 to-orange-500/5 text-red-400 border-red-500/10",
    },
    {
      Icon: Award,
      title: "E-Commerce storefronts",
      description: "Customizing Shopify storefronts using Liquid, HTML5, CSS3, and JS. Rebuilding templates to cut page load times by ~35%.",
      color: "from-pink-500/20 to-rose-500/5 text-pink-400 border-pink-500/10",
    },
  ];

  return (
    <section id="about" className="relative pt-16 pb-24 scroll-mt-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 glow-purple opacity-40" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            About <span className="text-gradient-purple-pink">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1.5 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Designing scalable solutions with clean, performant code.
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              I am a dedicated Full-Stack Developer with over 3 years of experience crafting high-quality web applications, real-time analytics pipelines, and secure backend architectures. 
            </p>
            <p className="text-gray-400 leading-relaxed">
              My core philosophy centers around system optimization, modularity, and responsiveness. Whether architecting custom authentication pipelines, developing microservices for facial recognition systems, or optimizing luxury e-commerce stores, I focus on delivering speed, security, and a seamless user experience.
            </p>

            {/* Education Sub-card */}
            <div className="glass-card rounded-2xl p-6 border-white/5 mt-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <GraduationCap size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Education</span>
                  <h4 className="text-white font-bold text-base">BS Software Engineering</h4>
                  <p className="text-sm text-gray-400">Islamia University of Bahawalpur</p>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/5 text-xs text-gray-500">
                    <span>Session: 2024 - 2028</span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium">5th Semester</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Strengths Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.Icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col gap-4 group hover:-translate-y-1"
                >
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br border flex items-center justify-center shrink-0 shadow-lg group-hover:scale-115 transition-all duration-300 ${strength.color}`}>
                    <Icon size={22} className="stroke-[2]" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h4 className="text-white font-bold text-lg group-hover:text-primary transition-colors duration-300">
                      {strength.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
