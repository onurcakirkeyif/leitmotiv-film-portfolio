import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const RED = "#B85040";
const BLUE = "#5B7FA6";

export default function CTASection({ bgImage }) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="Istanbul filming locations" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(91,127,166,0.82)" }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Ready to Bring Your
            <br />
            <span className="font-serif italic" style={{ color: "#f5d8d0" }}>Vision to Life?</span>
          </h2>
          <p className="mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            From concept to completion, we provide everything you need
            to make your production in Türkiye a success.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-full text-sm transition-all duration-300 shadow-lg"
            style={{ backgroundColor: RED }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#9a3e30"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = RED}
          >
            Let's Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}