"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, Send } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection on scroll
      const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3 shadow-lg shadow-purple-950/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent-blue flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-secondary/30 transition-all duration-300">
              <span className="text-white font-bold text-lg">MS</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight hidden sm:inline-block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all duration-300">
              Musfirah Sheikh
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium relative py-1 transition-colors duration-300 ${
                  activeSection === item.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Connect Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent-blue rounded-full animate-pulse-glow" />
              <span className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-dark-bg text-sm font-semibold text-white transition-all duration-300 group-hover:bg-transparent group-hover:text-dark-bg">
                <span>Let's Connect</span>
                <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-dark-bg/95 border-l border-white/5 p-8 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent-blue flex items-center justify-center text-white font-bold">
                      MS
                    </div>
                    <span className="text-white font-semibold text-lg">Musfirah</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 text-gray-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium py-1 border-b border-white/5 transition-colors ${
                        activeSection === item.href
                          ? "text-primary font-semibold"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent-blue text-center text-sm font-semibold text-white shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <span>Let's Connect</span>
                  <Send size={14} />
                </a>
                <p className="text-xs text-gray-500 text-center">
                  musfirahsheikh1122@gmail.com
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
