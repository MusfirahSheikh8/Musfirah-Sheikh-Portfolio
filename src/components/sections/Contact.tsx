"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const Github = ({ size = 18 }: { size?: number }) => (
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

const Linkedin = ({ size = 18 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "demo">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus(result.isDemo ? "demo" : "success");
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 6000);
      } else {
        console.error("Resend API error:", result.error);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 6000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      Icon: Mail,
      label: "Email Me",
      value: "musfirahsheikh1122@gmail.com",
      href: "mailto:musfirahsheikh1122@gmail.com"
    },
    {
      Icon: Phone,
      label: "Call Me",
      value: "+92-3116804780",
      href: "tel:+923116804780"
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "Bahawalpur, Pakistan",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      Icon: Github,
      url: "https://github.com/MusfirahSheikh8",
      color: "hover:bg-neutral-800 hover:border-neutral-700 text-gray-400 hover:text-white"
    },
    {
      name: "LinkedIn",
      Icon: Linkedin,
      url: "https://www.linkedin.com/in/musfirah-sheikh-04b2903a2",
      color: "hover:bg-blue-950/40 hover:border-blue-500/30 text-gray-400 hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="relative pt-16 pb-24 scroll-mt-10 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 glow-purple opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-0 glow-blue opacity-10 pointer-events-none" />

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
            Let's <span className="text-gradient-purple-pink">Connect</span>
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
          
          {/* Left Column: Form Card — swaps with success screen */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              {submitStatus === "success" || submitStatus === "demo" ? (
                /* ── Success State ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card rounded-2xl p-8 sm:p-14 border border-emerald-500/20 flex flex-col items-center justify-center text-center gap-6 min-h-[420px]"
                >
                  {/* Animated tick circle */}
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-400/5 border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-900/20"
                  >
                    <CheckCircle2 className="text-emerald-400" size={38} />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                    className="flex flex-col gap-3"
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Message Sent!</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                      Your email was delivered successfully to
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold text-sm mx-auto">
                      <CheckCircle2 size={15} className="shrink-0" />
                      musfirahsheikh1122@gmail.com
                    </div>
                    <p className="text-xs text-gray-500 mt-1">I'll get back to you as soon as possible. Thank you!</p>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-2 px-6 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                /* ── Form State ── */
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card rounded-2xl p-6 sm:p-10 border border-white/5 relative"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send a Message</h3>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-400">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="Enter name"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/40 focus:bg-white/10 transition-all duration-300"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/40 focus:bg-white/10 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-gray-400">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleInputChange}
                        placeholder="How can I help?"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/40 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-400">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Your message details..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/40 focus:bg-white/10 transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-fit px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent-blue text-white font-semibold shadow-lg shadow-primary/15 hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100 disabled:shadow-none transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Error Banner */}
                  <AnimatePresence>
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-6 sm:inset-x-10 bottom-6 py-4 px-6 rounded-xl border border-red-500/30 bg-red-500/10 flex items-center gap-3.5 z-10 shadow-lg shadow-red-950/10"
                      >
                        <div className="h-5 w-5 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 font-bold text-xs shrink-0">!</div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white">Failed to Send Message</span>
                          <span className="text-xs text-gray-400">Please check your network or try emailing directly.</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Connection Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6 w-full"
          >
            {/* Quick Details Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white border-b border-white/5 pb-4">Contact Details</h3>
              
              <div className="flex flex-col gap-5">
                {contactInfo.map((info, idx) => {
                  const InfoIcon = info.Icon;
                  return (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <InfoIcon size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">{info.label}</span>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-semibold text-white hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-sm font-semibold text-white">{info.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Socials Connection Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white border-b border-white/5 pb-4 font-sans">Social Profiles</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((link, idx) => {
                  const SocialIcon = link.Icon;
                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/5 bg-white/5 font-semibold text-sm transition-all duration-300 ${link.color}`}
                    >
                      <SocialIcon size={18} />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
