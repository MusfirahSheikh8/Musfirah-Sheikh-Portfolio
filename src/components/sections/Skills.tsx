"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Layout } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend Development",
    Icon: Layout,
    skills: [
      "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", 
      "Redux Toolkit", "Tailwind CSS", "CSS3", "HTML5", 
      "Responsive Design", "Component Libraries"
    ],
    color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-400"
  },
  {
    name: "Backend & APIs",
    Icon: Code,
    skills: [
      "Node.js", "Express.js", "Nest.js", "Python", "Django", 
      "REST APIs", "GraphQL", "WebSockets", "JWT Authentication", 
      "Microservices"
    ],
    color: "from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-400"
  },
  {
    name: "Databases & Architecture",
    Icon: Database,
    skills: [
      "PostgreSQL", "MongoDB", "MySQL", "Oracle SQL", 
      "SQLX & PL/SQL", "Database Design", "MVC Architecture", 
      "System Design", "Agile / Scrum"
    ],
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400"
  },
  {
    name: "Cloud, DevOps & CMS",
    Icon: Cloud,
    skills: [
      "AWS (EC2, S3)", "Microsoft Azure", "Docker", "Vercel", 
      "CI/CD Pipelines", "GitHub Actions", "Git / GitHub", 
      "Shopify (Liquid)", "WordPress", "WooCommerce"
    ],
    color: "from-rose-500/10 to-red-500/10 border-rose-500/20 text-rose-400"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative pt-16 pb-24 scroll-mt-10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 right-0 glow-pink opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 glow-blue opacity-15 pointer-events-none" />

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
            My <span className="text-gradient-purple-pink">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1.5 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
          />
        </div>

        {/* Simple Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.Icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={category.name}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col gap-6 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br border flex items-center justify-center shadow-md ${category.color}`}>
                    <Icon size={18} className="stroke-[2]" />
                  </div>
                  <h3 className="text-white font-extrabold text-lg">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm font-semibold text-gray-300 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
