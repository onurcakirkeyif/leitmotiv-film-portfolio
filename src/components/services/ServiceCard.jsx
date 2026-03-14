import React from "react";
import { motion } from "framer-motion";

const RED = "#B85040";

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="group relative p-8 rounded-2xl border bg-white transition-all duration-500 cursor-default"
      style={{ borderColor: "#EEEEEE" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${RED}40`; e.currentTarget.style.boxShadow = "0 4px 20px rgba(184,80,64,0.08)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "#EEEEEE"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <Icon className="w-7 h-7 mb-5" style={{ color: RED }} />
      <h3 className="text-base font-semibold mb-2" style={{ color: "#141414" }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#777" }}>{description}</p>
    </motion.div>
  );
}