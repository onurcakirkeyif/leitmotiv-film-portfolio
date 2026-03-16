import React from "react";
import { motion } from "framer-motion";

const RED = "#B85040";
const BLUE = "#5B7FA6";

const productionServices = [
  "Commercial Films",
  "Social Media Video",
  "Drone Filming",
  "Corporate Films",
  "Photography",
  "Feature & Short Films",
  "Reality Shows & TV",
  "Music Videos",
  "Documentaries",
];

const supportServices = [
  "Location Scouting & Permits",
  "Casting & Crew",
  "Transportation & Accommodation",
  "Production Office Setup",
  "Post-Production Coordination",
  "Local Vendors & Catering",
  "Health & Safety",
  "Subsidies & Grants",
  "Top-Tier Equipment & Technical Support",
  "Customs & Shipping",
];

export default function Services() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Page title */}
      <div className="px-8 pt-16 pb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: RED }}>What We Do</p>
        <h1 className="text-4xl font-bold uppercase tracking-tight text-white">Services</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {/* Production */}
        <div className="p-12 border-r" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="text-[10px] uppercase tracking-[0.3em] mb-8" style={{ color: RED }}>Production</p>
          <div className="space-y-0">
            {productionServices.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="py-4 border-b flex items-center justify-between group cursor-default"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <span className="text-xl font-bold uppercase tracking-tight text-white/80 group-hover:text-white transition-colors">{s}</span>
                <span className="text-white/20 group-hover:text-white/60 transition-colors text-lg">→</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Production Support */}
        <div className="p-12">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-8" style={{ color: BLUE }}>Production Support</p>
          <div className="space-y-0">
            {supportServices.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="py-4 border-b flex items-center justify-between group cursor-default"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <span className="text-xl font-bold uppercase tracking-tight text-white/80 group-hover:text-white transition-colors">{s}</span>
                <span className="text-white/20 group-hover:text-white/60 transition-colors text-lg">→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients strip */}
      <div className="px-12 py-16">
        <p className="text-[10px] uppercase tracking-[0.3em] mb-8 text-white/30">International Clients</p>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {["Associated Press","BBC","CNN","Arte","Deutsche Welle","Financial Times","Vice","Canal+","Wall Street Journal","Microsoft","Coca-Cola","Shopify","Hyundai","Mango","Citroën","Decathlon","The Culture Trip"].map(c => (
            <span key={c} className="text-sm text-white/40 hover:text-white transition-colors cursor-default">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}