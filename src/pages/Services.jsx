import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RED = "#B85040";
const BLUE = "#5B7FA6";

const productionServices = [
  { label: "Commercial Films", slug: "commercial-films" },
  { label: "Feature Films & Short Films", slug: "feature-films-short-films" },
  { label: "TV Programs", slug: "tv-programs" },
  { label: "Documentaries", slug: "documentaries" },
  { label: "Reality Shows", slug: "reality-shows" },
  { label: "Corporate Films", slug: "corporate-films" },
  { label: "Music Videos", slug: "music-videos" },
  { label: "Social Media Video Production", slug: "social-media-video-production" },
  { label: "Photography", slug: "photography" },
  { label: "Drone Filming", slug: "drone-filming" },
];

const supportServices = [
  { label: "Location Scouting & Permits", slug: "location-scouting-permits" },
  { label: "Casting & Crew", slug: "casting-crew" },
  { label: "Transportation & Accommodation", slug: "transportation-accommodation" },
  { label: "Production Office Setup", slug: "production-office-setup" },
  { label: "Post-Production Coordination", slug: "post-production-coordination" },
  { label: "Local Vendors & Catering", slug: "local-vendors-catering" },
  { label: "Health & Safety", slug: "health-safety" },
  { label: "Subsidies & Grants", slug: "subsidies-grants" },
  { label: "Top-Tier Equipment & Technical Support", slug: "equipment-technical-support" },
  { label: "Customs & Shipping", slug: "customs-shipping" },
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
                key={s.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/ServiceDetail/${s.slug}`}
                  className="py-4 border-b flex items-center justify-between group"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xl font-bold uppercase tracking-tight text-white/80 group-hover:text-white transition-colors">{s.label}</span>
                  <span className="text-white/20 group-hover:text-white/60 transition-colors text-lg">→</span>
                </Link>
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
                key={s.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/ServiceDetail/${s.slug}`}
                  className="py-4 border-b flex items-center justify-between group"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xl font-bold uppercase tracking-tight text-white/80 group-hover:text-white transition-colors">{s.label}</span>
                  <span className="text-white/20 group-hover:text-white/60 transition-colors text-lg">→</span>
                </Link>
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