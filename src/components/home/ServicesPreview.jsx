import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Film, Camera, Clapperboard, Mic, ArrowRight, MapPin, Users, Truck, Wrench } from "lucide-react";

const RED = "#B85040";
const BLUE = "#5B7FA6";

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[1px]" style={{ backgroundColor: RED }} />
              <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: RED }}>
                What We Do
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#141414" }}>
              Production & Support
              <br />
              <span className="font-serif italic" style={{ color: "#888" }}>Services</span>
            </h2>
          </div>
          <Link
            to={createPageUrl("Services")}
            className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
            style={{ color: BLUE }}
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
              className="group p-6 rounded-2xl border transition-all duration-500 cursor-default"
              style={{ borderColor: "#EEE", backgroundColor: "#FAFAF9" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${RED}40`; e.currentTarget.style.backgroundColor = "#FFF8F6"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#EEE"; e.currentTarget.style.backgroundColor = "#FAFAF9"; }}
            >
              <service.icon className="w-7 h-7 mb-4 transition-colors" style={{ color: RED }} />
              <h3 className="font-semibold mb-1 text-sm" style={{ color: "#141414" }}>{service.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#888" }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}