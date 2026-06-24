"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ShieldCheck, Terminal, Heart, LineChart, Cpu, ShoppingBag } from "lucide-react";

const Github = ({ size = 16 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "full-stack", name: "Full-Stack" },
  { id: "frontend", name: "Frontend / Real-Time" },
  { id: "security-automation", name: "Security & Automation" },
  { id: "shopify-stores", name: "Shopify Stores" },
];

const projects = [
  {
    id: "smart-attendance",
    title: "Smart Attendance System & Proxy Detector",
    category: ["full-stack", "security-automation"],
    description: "An AI-powered attendance management platform built with a microservices architecture. Features real-time facial recognition and anti-spoofing security.",
    bullets: [
      "Engineered Next.js frontend, Node.js REST APIs, and Python-based computer vision services.",
      "Implemented real-time facial recognition and anti-spoofing verification using OpenCV and dlib.",
      "Built secure multi-factor authentication combining JWT-based sessions with OTP verification.",
      "Designed Oracle DB schemas, triggers, stored procedures, and audit trails."
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Python", "OpenCV", "dlib", "Oracle DB", "JWT", "Microservices"],
    github: "https://github.com/MusfirahSheikh8/Smart-Attendance-System",
    live: null,
    Icon: Cpu,
    color: "from-purple-500/10 to-indigo-500/10 border-purple-500/20 text-purple-400"
  },
  {
    id: "live-crypto",
    title: "Live Crypto Dashboard",
    category: ["frontend"],
    description: "A real-time cryptocurrency dashboard streaming live market updates directly from the Binance WebSocket API with scalable global state management.",
    bullets: [
      "Streamed live market updates from the Binance WebSocket API directly to React interfaces.",
      "Built centralized global state management using Redux Toolkit and React Redux.",
      "Structured scalable frontend architecture using Vite and custom React hooks.",
      "Designed real-time charts using Chart.js for seamless data visualization."
    ],
    tech: ["React.js", "TypeScript", "Redux Toolkit", "WebSockets", "Chart.js", "Vite", "Tailwind CSS"],
    github: "https://github.com/MusfirahSheikh8/live-crypto-dashboard",
    live: "https://live-crypto-dashboard-five.vercel.app",
    Icon: LineChart,
    color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-400"
  },
  {
    id: "user-analytics",
    title: "User Analytics Tracker",
    category: ["full-stack"],
    description: "A full-stack user analytics tracking platform inspired by Google Analytics and Mixpanel, featuring high-performance event pipelines and aggregated dashboards.",
    bullets: [
      "Built scalable analytics event pipeline capturing clicks, page visits, and session activity.",
      "Designed REST API endpoints for analytics ingestion and aggregated dashboard insights.",
      "Structured PostgreSQL analytics schemas with indexed queries and JSONB storage."
    ],
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JSONB", "REST API", "Data Visualization"],
    github: "https://github.com/MusfirahSheikh8/User-Analytics-Tracker",
    live: null,
    Icon: Terminal,
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400"
  },
  {
    id: "session-security",
    title: "Session Security Backend",
    category: ["full-stack", "security-automation"],
    description: "A highly secure session-based authentication backend supporting session rotation, device tracking, and revocation workflows to prevent credential theft.",
    bullets: [
      "Engineered secure session-based backend using Node.js, Express.js, and PostgreSQL.",
      "Implemented HTTP-only cookies and bcrypt password hashing to protect against XSS.",
      "Built transaction-safe session rotation logic, ensuring only one active session per user.",
      "Designed session schemas with UUID identifiers for secure lifecycle tracking."
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "UUID", "bcrypt", "Session Security", "Cookies"],
    github: "https://github.com/MusfirahSheikh8/session-security-backend",
    live: null,
    Icon: ShieldCheck,
    color: "from-rose-500/10 to-red-500/10 border-rose-500/20 text-rose-400"
  },
  {
    id: "amazon-scraper",
    title: "Amazon Barcode Price Scraper",
    category: ["security-automation"],
    description: "An automated Python-based scraping tool that extracts product pricing, ASINs, and metadata using barcodes, logging data directly to Google Sheets.",
    bullets: [
      "Developed Python scraping automation retrieving product pricing and metadata.",
      "Bypassed the requirement for expensive paid APIs by utilizing UPC/EAN/ISBN inputs.",
      "Integrated Google Sheets API with automated workflows for seamless data logging."
    ],
    tech: ["Python", "Web Scraping", "Google Sheets API", "REST Automation", "Data Extraction"],
    github: "https://github.com/MusfirahSheikh8/amazon-scrapper",
    live: null,
    Icon: Heart,
    color: "from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-400"
  },
  {
    id: "lumiere-auroras",
    title: "Lumière Auroras — Shopify Storefront",
    category: ["shopify-stores"],
    description: "A production-ready Shopify storefront engineered for a luxury fragrance and beauty e-commerce brand, delivering a premium shopping experience with optimized UI workflows.",
    bullets: [
      "Engineered and deployed a production-ready Shopify storefront using Liquid, HTML5, CSS3, and JavaScript.",
      "Customized themes, product templates, collection pages, and storefront components to improve UI consistency and customer navigation.",
      "Integrated payment gateways, checkout workflows, product reviews, wishlist systems, and third-party Shopify apps."
    ],
    tech: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript", "Shopify APIs"],
    github: null,
    live: "https://lumiereauroras.com",
    Icon: ShoppingBag,
    color: "from-pink-500/10 to-rose-500/10 border-pink-500/20 text-pink-400"
  },
  {
    id: "ooze-bath",
    title: "OOZE Bath — Shopify Storefront",
    category: ["shopify-stores"],
    description: "A high-performance Shopify storefront built for a live beauty e-commerce brand, delivering a mobile-first experience across 5+ wellness SKUs with drastically improved load times.",
    bullets: [
      "Rebuilt product page templates and lazy-loaded asset delivery, cutting page load time by ~35% and improving discoverability.",
      "Integrated Shopify Payments and 3 third-party apps for inventory, checkout flows, and order tracking.",
      "Reduced failed transaction rate from ~8% to under 1% through streamlined checkout integration."
    ],
    tech: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript", "Shopify APIs"],
    github: null,
    live: "https://oozebath.com",
    Icon: ShoppingBag,
    color: "from-orange-500/10 to-amber-500/10 border-orange-500/20 text-orange-400"
  },
  {
    id: "aloura",
    title: "Aloura — Shopify Storefront",
    category: ["shopify-stores"],
    description: "A responsive, mobile-first Shopify storefront developed for a luxury jewelry and handbags brand, with a focus on brand consistency and elevated user experience.",
    bullets: [
      "Customized themes, product pages, and collection layouts to improve UX and brand consistency.",
      "Integrated payment gateways, wishlist functionality, and third-party Shopify applications.",
      "Optimized storefront performance and mobile responsiveness across all devices."
    ],
    tech: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript"],
    github: null,
    live: null,
    Icon: ShoppingBag,
    color: "from-violet-500/10 to-purple-500/10 border-violet-500/20 text-violet-400"
  },
  {
    id: "oasis-glow",
    title: "OASIS Glow — Shopify Storefront",
    category: ["shopify-stores"],
    description: "A conversion-focused Shopify storefront built for a beauty and wellness brand, featuring custom landing pages, optimized collections, and a fast, responsive shopping experience.",
    bullets: [
      "Built custom landing pages, collection layouts, and promotional sections aligned with brand goals.",
      "Implemented product organization and conversion-focused shopping experiences.",
      "Optimized page speed, responsiveness, and overall UX across all devices."
    ],
    tech: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript"],
    github: null,
    live: null,
    Icon: ShoppingBag,
    color: "from-teal-500/10 to-emerald-500/10 border-teal-500/20 text-teal-400"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(proj => proj.category.includes(activeFilter));

  return (
    <section id="projects" className="relative pt-16 pb-24 scroll-mt-10 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-0 glow-purple opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 glow-blue opacity-25 pointer-events-none" />

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
            Featured <span className="text-gradient-purple-pink">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1.5 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-300 focus:outline-none cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md shadow-primary/10Scale-[1.02]"
                  : "bg-white/5 text-gray-400 border-white/5 hover:border-white/10 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.Icon;
              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between group hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex flex-col gap-5">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className={`h-11 w-11 rounded-xl bg-gradient-to-br border flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 ${project.color}`}>
                          <ProjectIcon size={20} className="stroke-[2]" />
                        </div>
                        <h3 className="text-white font-extrabold text-lg sm:text-xl group-hover:text-primary transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Bullet Achievements from Resume */}
                    <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-400 pl-4 list-disc marker:text-primary">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] sm:text-xs font-semibold text-gray-300 hover:border-primary/20 hover:bg-primary/5 transition-colors duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Links */}
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Github size={16} />
                        <span>Codebase</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-secondary transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>Visit Store</span>
                      </a>
                    )}
                    {!project.github && !project.live && (
                      <span className="text-xs text-gray-600 italic">Private Client Project</span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
