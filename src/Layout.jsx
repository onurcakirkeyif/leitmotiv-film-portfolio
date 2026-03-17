import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Instagram, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", page: "Portfolio" },
  { name: "Services", page: "Services" },
  { name: "About", page: "About" },
  { name: "Contact", page: "Contact" },
];

const RED = "#B85040";
const BG = "#f5f2ee";

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [currentPageName]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG, color: "#111" }}>

      {/* Sidebar nav — left edge, vertical */}
      <div className="fixed left-0 top-0 bottom-0 z-50 flex flex-col items-center justify-between py-6 w-12"
        style={{ borderRight: "1px solid rgba(0,0,0,0.08)" }}>
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-1.5 items-center justify-center w-8 h-8"
          aria-label="Open menu"
        >
          <span className="block w-5 h-[1px] bg-black/60" />
          <span className="block w-5 h-[1px] bg-black/60" />
          <span className="block w-5 h-[1px] bg-black/60" />
        </button>

        {/* Logo — rotated */}
        <Link to={createPageUrl("Home")}>
          <span
            className="text-[11px] font-bold tracking-[0.25em] uppercase"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              color: "#111",
              letterSpacing: "0.25em",
            }}
          >
            <span style={{ color: RED }}>L</span>EITMOTIV
          </span>
        </Link>

        {/* Instagram */}
        <a
          href="https://instagram.com/leitmotiv_film"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(0,0,0,0.35)" }}
          className="hover:text-black transition-colors"
        >
          <Instagram className="w-4 h-4" />
        </a>
      </div>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex"
            style={{ backgroundColor: BG }}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 left-3 transition-colors"
              style={{ color: "rgba(0,0,0,0.35)" }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Nav links */}
            <div className="flex flex-col justify-center pl-24 gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.page}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={createPageUrl(link.page)}
                    className="font-bold uppercase tracking-[0.25em] leading-none transition-colors hover:opacity-50"
                    style={{
                      fontSize: "clamp(1.5rem, 5vw, 4rem)",
                      color: currentPageName === link.page ? RED : "#111",
                      letterSpacing: "0.25em",
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Contact info bottom */}
            <div className="absolute bottom-10 left-24 text-xs space-y-1" style={{ color: "rgba(0,0,0,0.35)" }}>
              <div>info@leitmotivfilm.net</div>
              <div>+90 555 354 75 85</div>
              <div>Kadıköy, Istanbul, Türkiye</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content — offset for sidebar */}
      <main className="ml-12">{children}</main>
    </div>
  );
}