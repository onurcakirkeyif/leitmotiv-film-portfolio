import React from "react";
import { motion } from "framer-motion";

const RED = "#B85040";
const BLUE = "#5B7FA6";

const clients = [
  "Associated Press", "Arte", "BBC", "Canal+", "CNN", "Deutsche Welle",
  "Vice", "Financial Times", "The Times", "Bild", "Wall Street Journal",
  "Spiegel Online", "Mango", "Citroën", "Microsoft", "Coca-Cola",
  "Alo Yoga", "Endemol Shine", "Shopify", "Hyundai", "The Culture Trip",
  "Alleycats", "VJ News", "Decathlon"
];

export default function ClientsMarquee() {
  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: "#F5F2EF" }}>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-[1px]" style={{ backgroundColor: BLUE }} />
          <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: BLUE }}>
            Trusted By
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#141414" }}>
          Global Clients & Partners
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to right, #F5F2EF, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to left, #F5F2EF, transparent)" }} />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 whitespace-nowrap"
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-6 py-3 rounded-full border bg-white"
              style={{ borderColor: "#E0D8D3" }}
            >
              <span className="text-sm font-medium tracking-wide" style={{ color: "#555" }}>
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}