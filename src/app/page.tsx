import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-gray-200 relative selection:bg-primary/30 selection:text-white">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Glassmorphic sticky header */}
      <Navbar />

      {/* Main sections container */}
      <main className="flex-1 relative z-10">
        <Hero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <hr className="border-white/5" />
          <About />
          <hr className="border-white/5" />
          <Projects />
          <hr className="border-white/5" />
          <Experience />
          <hr className="border-white/5" />
          <Skills />
          <hr className="border-white/5" />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-md py-12 text-center text-xs sm:text-sm text-gray-500 flex flex-col gap-4">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
              MS
            </div>
            <span className="text-white font-semibold text-sm">Musfirah Sheikh</span>
          </div>

          <p className="font-medium">
            &copy; {new Date().getFullYear()} Musfirah Sheikh. All rights reserved.
          </p>

        </div>
      </footer>
    </div>
  );
}
