import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection({ bgImage }) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Istanbul filming locations"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Bring Your
            <br />
            <span className="font-serif italic text-amber-500">Vision to Life?</span>
          </h2>
          <p className="text-white/40 mb-10 leading-relaxed">
            From concept to completion, we provide everything you need
            to make your production in Türkiye a success.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
          >
            Let's Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}