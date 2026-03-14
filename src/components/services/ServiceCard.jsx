import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
      onMouseEnter={e => e.currentTarget.style.borderColor = "#B8504033"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"}
    >
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-1/3 translate-x-1/3 transition-all duration-500"
        style={{ backgroundColor: "#B850400d" }}
      />
      <Icon className="w-8 h-8 mb-5 relative z-10 transition-colors" style={{ color: "#B8504099" }} />
      <h3 className="text-lg font-semibold text-white/90 mb-2 relative z-10">{title}</h3>
      <p className="text-sm text-white/40 leading-relaxed relative z-10">{description}</p>
    </motion.div>
  );
}