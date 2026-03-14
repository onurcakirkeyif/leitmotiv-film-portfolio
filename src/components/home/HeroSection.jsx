import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";

const RED = "#B85040";
const BLUE = "#5B7FA6";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Istanbul skyline" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(250,250,249,0.15) 0%, rgba(250,250,249,0.55) 60%, rgba(250,250,249,1) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(250,250,249,0.7) 0%, rgba(250,250,249,0.2) 60%, transparent 100%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px]" style={{ backgroundColor: RED }} />
            <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: RED }}>
              Istanbul, Türkiye
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
            style={{ color: "#141414" }}
          >
            <span className="font-serif italic" style={{ color: "#3a3a3a" }}>Your Story.</span>
            <br />
            <span>Our Production.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-lg max-w-xl leading-relaxed mb-10"
            style={{ color: "#555" }}
          >
            Comprehensive production and fixer services for international
            productions, broadcasters, brands, and filmmakers working in Türkiye.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to={createPageUrl("Contact")}
              className="text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-md"
              style={{ backgroundColor: RED }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#9a3e30"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = RED}
            >
              Start Your Project
            </Link>
            <Link
              to={createPageUrl("Portfolio")}
              className="font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-300 flex items-center gap-2 border"
              style={{ borderColor: BLUE, color: BLUE, backgroundColor: "transparent" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = BLUE; e.currentTarget.style.color = "white"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = BLUE; }}
            >
              <Play className="w-4 h-4" />
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "#aaa" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="w-4 h-4" style={{ color: "#bbb" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}