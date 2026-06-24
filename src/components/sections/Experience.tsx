"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Link2, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Shopify E-Commerce Storefront Developer",
    company: "Lumiere Auroras",
    type: "Solo Project",
    duration: "2026",
    link: "https://lumiereauroras.com",
    bullets: [
      "Engineered and deployed a production-ready Shopify storefront for a luxury fragrance and beauty brand.",
      "Customized Shopify Liquid themes, product templates, collection pages, and storefront layouts to improve UI consistency.",
      "Integrated payment gateways, checkout workflows, product reviews, and wishlist systems."
    ],
    highlight: "Luxury Brand Storefront Solo Deployment"
  },
  {
    role: "UI/UX Designer & Frontend Developer",
    company: "Gigledger",
    type: "Client SaaS Project",
    duration: "2025",
    link: "https://staging.gigledger.co.uk",
    bullets: [
      "Designed and built a complete SaaS UI for a client's invoicing and timesheet automation platform using React.js.",
      "Translated complex financial workflows into a dashboard that reduced average task completion time by ~25% across 10+ views.",
      "Architected 8 responsive landing pages and dashboard layouts with a consistent component library and clear CTAs.",
      "Delivered a developer-ready interface with documented component specs and REST API integration points."
    ],
    highlight: "Reduced average task completion time by ~25%"
  },
  {
    role: "Full Stack Developer",
    company: "Extron AI",
    type: "Bahawalpur, Pakistan",
    duration: "Sept 2025 - Dec 2025",
    link: null,
    bullets: [
      "Developed scalable full-stack web applications using React.js, Next.js, Node.js, TypeScript, PostgreSQL, and MongoDB.",
      "Built responsive frontend interfaces and reusable UI components to maintain consistency across dashboards.",
      "Designed and integrated RESTful and GraphQL APIs for secure session management and frontend-backend sync.",
      "Optimized application performance through state management, database indexing, and query tuning workflows."
    ],
    highlight: "Optimized application performance & state management"
  },
  {
    role: "Shopify Developer",
    company: "OOZE Bath",
    type: "Production Storefront",
    duration: "2024",
    link: "https://oozebath.com",
    bullets: [
      "Engineered and deployed a production-ready storefront for a live beauty e-commerce client across 5+ wellness SKUs.",
      "Rebuilt product page templates and lazy-loaded assets, cutting page load time by ~35% and improving discoverability.",
      "Integrated Shopify Payments and 3 third-party inventory, checkout, and tracking apps.",
      "Reduced failed transaction rate from ~8% to under 1%."
    ],
    highlight: "Cut page load time by ~35% & transaction failures to < 1%"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative pt-16 pb-24 scroll-mt-10 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/3 glow-purple opacity-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 glow-blue opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Work <span className="text-gradient-purple-pink">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1.5 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
          />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-8 md:pl-12 flex flex-col gap-16 py-4">
          
          {/* Vertical Glowing timeline line drawing overlay */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-accent-blue" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col gap-4"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 h-6 w-6 rounded-full bg-dark-bg border-[3px] border-primary flex items-center justify-center shadow-md shadow-primary/20 z-10 group-hover:scale-110 transition-transform">
                <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
              </div>

              {/* Side Date (For desktop viewports) */}
              <div className="absolute left-[-210px] top-1.5 w-36 text-right hidden md:flex flex-col gap-1 items-end justify-center">
                <span className="text-sm font-extrabold text-white flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1 rounded-lg">
                  <Calendar size={14} className="text-primary shrink-0" />
                  <span>{exp.duration}</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">
                  {exp.type}
                </span>
              </div>

              {/* Experience Card content */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col gap-5 group hover:border-primary/20 transition-all duration-300">
                
                {/* Title Block */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-white font-extrabold text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    
                    {/* Date (for mobile viewports) */}
                    <span className="text-xs font-bold text-gray-400 flex items-center gap-1 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md md:hidden">
                      <Calendar size={12} className="text-primary" />
                      <span>{exp.duration}</span>
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="font-bold text-gradient-purple-pink">
                      {exp.company}
                    </span>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <span className="text-gray-400 font-medium text-xs sm:text-sm">
                      {exp.type}
                    </span>
                    {exp.link && (
                      <>
                        <span className="text-gray-600 hidden sm:inline">•</span>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:text-secondary hover:underline transition-colors"
                        >
                          <Link2 size={12} />
                          <span>Visit Store</span>
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* Key Metric Banner */}
                <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/5 border border-primary/20 rounded-xl w-fit text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                  <span>Impact: {exp.highlight}</span>
                </div>

                {/* Bullets achievements */}
                <ul className="flex flex-col gap-3 pl-1 text-xs sm:text-sm text-gray-400">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
