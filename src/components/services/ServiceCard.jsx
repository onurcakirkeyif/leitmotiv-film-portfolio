import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-amber-500/20 transition-all duration-500"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full -translate-y-1/3 translate-x-1/3 group-hover:bg-amber-500/10 transition-all duration-500" />
      <Icon className="w-8 h-8 text-amber-500/70 mb-5 group-hover:text-amber-500 transition-colors relative z-10" />
      <h3 className="text-lg font-semibold text-white/90 mb-2 relative z-10">{title}</h3>
      <p className="text-sm text-white/40 leading-relaxed relative z-10">{description}</p>
    </motion.div>
  );
}