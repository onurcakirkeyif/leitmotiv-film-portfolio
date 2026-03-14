import React from "react";
import { motion } from "framer-motion";

const clients = [
  "Associated Press", "Arte", "BBC", "Canal+", "CNN", "Deutsche Welle",
  "Vice", "Financial Times", "The Times", "Bild", "Wall Street Journal",
  "Spiegel Online", "Mango", "Citroën", "Microsoft", "Coca-Cola",
  "Alo Yoga", "Endemol Shine", "Shopify", "Hyundai", "The Culture Trip",
  "Alleycats", "VJ News", "Decathlon"
];

export default function ClientsMarquee() {
  return (
    <section className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-[1px] bg-amber-500/50" />
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500/60">
            Trusted By
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white/90">
          Global Clients & Partners
        </h2>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 py-4 border border-white/5 rounded-full bg-white/[0.02] backdrop-blur-sm"
            >
              <span className="text-sm text-white/40 font-medium tracking-wide">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}