import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Instagram, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", page: "Home" },
  { name: "Services", page: "Services" },
  { name: "Portfolio", page: "Portfolio" },
  { name: "About", page: "About" },
  { name: "Contact", page: "Contact" },
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPageName]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <style>{`
        :root {
          --brand-red: #B85040;
          --brand-blue: #5B7FA6;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              <span style={{ color: "#B85040" }}>LEIT</span>MOTIV
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 hidden sm:block">
              Film
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                style={currentPageName === link.page ? { color: "#B85040" } : {}}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  currentPageName === link.page
                    ? ""
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com/leitmotiv_film"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white"
              style={{ "--hover-color": "#B85040" }}
            >
              <Instagram className="w-4 h-4" />
            </a>
            <Link
              to={createPageUrl("Contact")}
              className="text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: "#B85040" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#9a3e30"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#B85040"}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/70 hover:text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl pt-24 px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.page}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={createPageUrl(link.page)}
                    style={currentPageName === link.page ? { color: "#B85040" } : {}}
                    className={`text-2xl font-light tracking-wide ${
                      currentPageName === link.page ? "" : "text-white/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-3 text-white/50 text-sm">
                <a href="tel:+905553547585" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +90 555 354 75 85
                </a>
                <a href="mailto:info@leitmotivfilm.net" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> info@leitmotivfilm.net
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold tracking-tight mb-4">
                <span style={{ color: "#B85040" }}>LEIT</span>MOTIV
                <span className="text-white/30 text-sm ml-2 font-normal tracking-[0.3em]">
                  FILM
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-md">
                Istanbul-based production company providing comprehensive production
                and fixer services for international productions, broadcasters,
                brands, and filmmakers working in Türkiye.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">
                Contact
              </h4>
              <div className="flex flex-col gap-2 text-sm text-white/50">
                <a href="tel:+905553547585" className="hover:text-white transition-colors">
                  +90 555 354 75 85
                </a>
                <a href="mailto:info@leitmotivfilm.net" className="hover:text-white transition-colors">
                  info@leitmotivfilm.net
                </a>
                <a
                  href="https://instagram.com/leitmotiv_film"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @leitmotiv_film
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-xs">
              © {new Date().getFullYear()} Leitmotiv Film. All rights reserved.
            </p>
            <p className="text-white/20 text-xs">
              Kadıköy, Istanbul, Türkiye
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}