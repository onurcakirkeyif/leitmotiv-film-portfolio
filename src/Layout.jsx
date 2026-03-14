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

const RED = "#B85040";
const BLUE = "#5B7FA6";

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [currentPageName]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF9", color: "#141414" }}>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: "#141414" }}>
              <span style={{ color: RED }}>LEIT</span>MOTIV
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] hidden sm:block" style={{ color: "#9a9a9a" }}>
              Film
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className="text-sm tracking-wide transition-colors duration-300"
                style={{
                  color: currentPageName === link.page ? RED : "#555",
                  fontWeight: currentPageName === link.page ? 600 : 400,
                }}
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
              className="transition-colors"
              style={{ color: "#aaa" }}
              onMouseEnter={e => e.currentTarget.style.color = RED}
              onMouseLeave={e => e.currentTarget.style.color = "#aaa"}
            >
              <Instagram className="w-4 h-4" />
            </a>
            <Link
              to={createPageUrl("Contact")}
              className="text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: RED }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#9a3e30"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = RED}
            >
              Get in Touch
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden transition-colors"
            style={{ color: "#555" }}
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
            className="fixed inset-0 z-40 bg-white pt-24 px-8"
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
                    className="text-2xl font-light tracking-wide"
                    style={{ color: currentPageName === link.page ? RED : "#333" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col gap-3 text-sm" style={{ color: "#777" }}>
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
      <footer style={{ backgroundColor: "#1a1a1a", color: "white" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold tracking-tight mb-4">
                <span style={{ color: RED }}>LEIT</span>MOTIV
                <span className="text-sm ml-2 font-normal tracking-[0.3em]" style={{ color: "#666" }}>FILM</span>
              </div>
              <p className="text-sm leading-relaxed max-w-md" style={{ color: "#888" }}>
                Istanbul-based production company providing comprehensive production
                and fixer services for international productions, broadcasters,
                brands, and filmmakers working in Türkiye.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#555" }}>Quick Links</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="text-sm transition-colors"
                    style={{ color: "#888" }}
                    onMouseEnter={e => e.currentTarget.style.color = RED}
                    onMouseLeave={e => e.currentTarget.style.color = "#888"}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#555" }}>Contact</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: "#888" }}>
                <a href="tel:+905553547585" className="hover:text-white transition-colors">+90 555 354 75 85</a>
                <a href="mailto:info@leitmotivfilm.net" className="hover:text-white transition-colors">info@leitmotivfilm.net</a>
                <a href="https://instagram.com/leitmotiv_film" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@leitmotiv_film</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "#2a2a2a" }}>
            <p className="text-xs" style={{ color: "#444" }}>© {new Date().getFullYear()} Leitmotiv Film. All rights reserved.</p>
            <p className="text-xs" style={{ color: "#444" }}>Kadıköy, Istanbul, Türkiye</p>
          </div>
        </div>
      </footer>
    </div>
  );
}