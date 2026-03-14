import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import {
  Film, Camera, Clapperboard, Mic, ArrowRight,
  MapPin, Users, Truck, Wrench
} from "lucide-react";

const services = [
  { icon: Clapperboard, title: "Commercial Films", desc: "High-impact commercials for global brands" },
  { icon: Film, title: "Documentaries", desc: "Compelling stories from across Türkiye" },
  { icon: Camera, title: "Drone Filming", desc: "Breathtaking aerial cinematography" },
  { icon: Mic, title: "Music Videos", desc: "Creative music video production" },
  { icon: MapPin, title: "Location Scouting", desc: "Finding the perfect filming spots" },
  { icon: Users, title: "Casting & Crew", desc: "Local talent & experienced professionals" },
  { icon: Truck, title: "Full Logistics", desc: "Transport, accommodation & offices" },
  { icon: Wrench, title: "Equipment & Tech", desc: "Top-tier professional gear & support" },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[1px]" style={{ backgroundColor: "#B8504080" }} />
              <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "#B8504099" }}>
                What We Do
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white/90">
              Production & Support
              <br />
              <span className="font-serif italic text-white/60">Services</span>
            </h2>
          </div>
          <Link
            to={createPageUrl("Services")}
            className="flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300"
            style={{ color: "#B85040" }}
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
              style={{ "--hover-border": "#B8504033" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#B8504033"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"}
            >
              <service.icon className="w-8 h-8 mb-4 transition-colors" style={{ color: "#B8504099" }} />
              <h3 className="text-white/90 font-semibold mb-1 text-sm">
                {service.title}
              </h3>
              <p className="text-white/35 text-xs leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}