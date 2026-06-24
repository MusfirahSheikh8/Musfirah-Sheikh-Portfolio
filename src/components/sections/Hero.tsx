"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Cpu, Database, Blocks, Sparkles } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        cubicBezier: [0.16, 1, 0.3, 1],
      },
    },
  };

  const orbitIcons = [
    { Icon: Cpu, color: "text-blue-400 border-blue-500/30 bg-blue-950/40", label: "React", top: "10%", left: "10%", delay: 0, animate: "animate-float-slow" },
    { Icon: Terminal, color: "text-green-400 border-green-500/30 bg-green-950/40", label: "Node.js", top: "25%", right: "5%", delay: 1, animate: "animate-float-medium" },
    { Icon: Database, color: "text-indigo-400 border-indigo-500/30 bg-indigo-950/40", label: "SQL", bottom: "15%", right: "10%", delay: 2, animate: "animate-float-fast" },
    { Icon: Blocks, color: "text-purple-400 border-purple-500/30 bg-purple-950/40", label: "Next.js", bottom: "30%", left: "5%", delay: 0.5, animate: "animate-float-medium" },
    { Icon: Sparkles, color: "text-pink-400 border-pink-500/30 bg-pink-950/40", label: "APIs", top: "50%", right: "45%", delay: 1.5, animate: "animate-float-slow" }
  ];

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "20+", label: "Technologies" },
    { value: "100%", label: "Passion" },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 glow-purple" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 glow-pink" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 glow-blue" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 w-fit">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Full-Stack Developer</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              Code. Build.<br />
              <span className="text-gradient-primary">Innovate.</span> Repeat.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
              I craft scalable web applications, real-time dashboards and secure session architectures that drive results, utilizing modern cloud deployments and optimization.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent-blue text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-secondary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="/Musfirah Sheikh - Web Developer.pdf"
                download="Musfirah Sheikh - Web Developer.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Download CV</span>
                <Download size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Animated SVG Graphics */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[400px] lg:h-[450px]">
            {/* Ambient Background Glow of Laptop */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent rounded-full filter blur-3xl opacity-60 animate-pulse-glow pointer-events-none" />

            {/* Laptop Vector Artwork */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="relative w-full max-w-[420px] aspect-[4/3] drop-shadow-[0_20px_50px_rgba(168,85,247,0.25)]"
            >
              {/* Screen Glowing Border */}
              <div className="absolute inset-[8.5%_12.5%_22%_12.5%] rounded-t-[8px] bg-gradient-to-b from-primary via-secondary to-accent-blue p-[1px] shadow-[0_0_25px_rgba(168,85,247,0.35)]">
                {/* Screen Content - Code Editor Simulation */}
                <div className="w-full h-full rounded-t-[7px] bg-[#090514] overflow-hidden p-3 font-mono text-[8px] sm:text-[10px] leading-relaxed text-gray-300 flex flex-col gap-2">
                  <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[7px] text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
                    </div>
                    <span>musfirah_dev.ts</span>
                    <span>100% UTF-8</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-1 select-none py-1">
                    <div className="flex gap-2">
                      <span className="text-gray-600">1</span>
                      <span><span className="text-pink-400">const</span> developer = &#123;</span>
                    </div>
                    <div className="flex gap-2 pl-4">
                      <span className="text-gray-600">2</span>
                      <span>name: <span className="text-green-300">"Musfirah Sheikh"</span>,</span>
                    </div>
                    <div className="flex gap-2 pl-4">
                      <span className="text-gray-600">3</span>
                      <span>role: <span className="text-green-300">"Full-Stack Engineer"</span>,</span>
                    </div>
                    <div className="flex gap-2 pl-4">
                      <span className="text-gray-600">4</span>
                      <span>education: <span className="text-green-300">"BS Software Eng"</span>,</span>
                    </div>
                    <div className="flex gap-2 pl-4">
                      <span className="text-gray-600">5</span>
                      <span>experience: <span className="text-purple-400">3 /* years */</span>,</span>
                    </div>
                    <div className="flex gap-2 pl-4">
                      <span className="text-gray-600">6</span>
                      <span>skills: [<span className="text-blue-300">"React"</span>, <span className="text-blue-300">"Node"</span>, <span className="text-blue-300">"AWS"</span>],</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-600">7</span>
                      <span>&#125;;</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-600">8</span>
                      <span><span className="text-purple-400">export default</span> developer;</span>
                    </div>
                  </div>
                  <div className="h-4 bg-primary/10 rounded border border-primary/20 flex items-center justify-between px-2 text-[7px] text-primary/80 animate-pulse">
                    <span>⚡ Ready for Next Project</span>
                    <span>v16.2</span>
                  </div>
                </div>
              </div>

              {/* Laptop Shell Hardware */}
              {/* Screen Bezel Frame */}
              <svg viewBox="0 0 400 300" className="w-full h-full fill-none pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Upper Lid Lid frame */}
                <path d="M40 25C40 22.2386 42.2386 20 45 20H355C357.761 20 360 22.2386 360 25V230H40V25Z" fill="#1c162e" stroke="#2c2447" strokeWidth="2" />
                {/* Inner Screen Bezel */}
                <rect x="48" y="24" width="304" height="198" rx="6" fill="#0c071d" />
                {/* Camera */}
                <circle cx="200" cy="16" r="2.5" fill="#000" />
                <circle cx="200" cy="16" r="1" fill="#3b82f6" />
                {/* Camera Indicator */}
                <circle cx="208" cy="16" r="0.8" fill="#10b981" opacity="0.8" />
                {/* Laptop hinge connect */}
                <path d="M150 230H250V236H150V230Z" fill="#120e20" />
                {/* Base Bottom Body */}
                <path d="M5 236C5 233.791 6.79086 232 9 232H391C393.209 232 395 233.791 395 236V244C395 247.314 392.314 250 389 250H11C7.68629 250 5 247.314 5 244V236Z" fill="#241d3b" stroke="#362d54" strokeWidth="1.5" />
                {/* Base keyboard inset groove */}
                <path d="M45 236H355V241H45V236Z" fill="#120e20" />
                {/* Trackpad */}
                <path d="M165 242H235V248C235 249.105 234.105 250 233 250H167C165.895 250 165 249.105 165 248V242Z" fill="#19132d" stroke="#2d2447" strokeWidth="1" />
              </svg>
            </motion.div>

            {/* Orbiting Tech Badges */}
            {orbitIcons.map((item, index) => {
              const Icon = item.Icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                  style={{
                    position: "absolute",
                    top: item.top || "auto",
                    bottom: item.bottom || "auto",
                    left: item.left || "auto",
                    right: item.right || "auto",
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border backdrop-blur-md shadow-lg shadow-black/40 z-20 hover:scale-110 active:scale-95 cursor-pointer transition-all duration-300 ${item.color} ${item.animate}`}
                >
                  <Icon size={14} className="stroke-[2]" />
                  <span className="text-[10px] font-bold tracking-wider uppercase">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card rounded-2xl p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-0 divide-x-0 md:divide-x border-white/5 divide-white/5"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
