import React from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Award, Users } from "lucide-react";

const RED = "#B85040";
const BLUE = "#5B7FA6";

const ABOUT_IMG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b50fc6b8611f01f5f27bf1/0357fea98_generated_0eff15a3.png";

const stats = [
  { label: "International Clients", value: "25+", icon: Globe },
  { label: "Countries Served", value: "30+", icon: MapPin },
  { label: "Years of Experience", value: "10+", icon: Award },
  { label: "Completed Projects", value: "200+", icon: Users },
];

const clients = [
  "Associated Press", "BBC", "CNN", "Arte", "Deutsche Welle",
  "Financial Times", "Vice", "Canal+", "Wall Street Journal",
  "Microsoft", "Coca-Cola", "Shopify", "Hyundai", "Mango",
  "Citroën", "Decathlon", "The Culture Trip"
];

export default function About() {
  return (
    <div className="pt-24 pb-20" style={{ backgroundColor: "#FAFAF9" }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px]" style={{ backgroundColor: RED }} />
            <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: RED }}>About Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#141414" }}>
            The Story Behind
            <br />
            <span className="font-serif italic" style={{ color: RED }}>Leitmotiv Film</span>
          </h1>
        </motion.div>
      </div>

      {/* Image + Intro */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden aspect-video shadow-lg">
            <img src={ABOUT_IMG} alt="Leitmotiv Film crew on set" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="leading-relaxed mb-6" style={{ color: "#555" }}>
              Leitmotiv Film is an Istanbul-based production company providing
              comprehensive production and fixer services for international
              productions, broadcasters, brands, and filmmakers working in Türkiye.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "#555" }}>
              With extensive experience supporting global media organizations and
              international crews, we specialize in delivering high-quality
              production services across commercials, documentaries, television
              programs, branded content, and feature films.
            </p>
            <p className="leading-relaxed" style={{ color: "#555" }}>
              Our team combines creative expertise with deep local knowledge,
              allowing us to manage every stage of production efficiently — from
              initial planning and location scouting to filming, logistics, and
              post-production coordination.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16" style={{ backgroundColor: "#F5F2EF" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white text-center shadow-sm"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-3" style={{ color: BLUE }} />
                <div className="text-3xl font-bold mb-1" style={{ color: RED }}>{stat.value}</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: "#888" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: RED }} />
              <h2 className="text-2xl font-bold" style={{ color: "#141414" }}>Our Approach</h2>
            </div>
            <p className="leading-relaxed mb-4" style={{ color: "#555" }}>
              At Leitmotiv Film, we believe that successful productions are built on
              strong collaboration, creative problem-solving, and meticulous planning.
            </p>
            <p className="leading-relaxed" style={{ color: "#555" }}>
              We work closely with directors, producers, and production teams to
              provide tailored solutions that meet both creative and logistical needs.
              From securing unique filming locations to coordinating equipment, crew,
              and permits, our goal is to make filming in Türkiye efficient, flexible,
              and stress-free.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: BLUE }} />
              <h2 className="text-2xl font-bold" style={{ color: "#141414" }}>International Experience</h2>
            </div>
            <p className="leading-relaxed mb-6" style={{ color: "#555" }}>
              Our team has supported productions for major international broadcasters,
              media outlets, and global brands — allowing us to understand the expectations
              of international productions and deliver services that meet the highest professional standards.
            </p>
            <div className="flex flex-wrap gap-2">
              {clients.map((client) => (
                <span key={client} className="px-3 py-1.5 rounded-full border text-xs font-medium" style={{ borderColor: "#E0D8D3", color: "#555", backgroundColor: "white" }}>
                  {client}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Based in Istanbul */}
      <div className="max-w-7xl mx-auto px-6 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-2xl"
          style={{ backgroundColor: BLUE, color: "white" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-white" />
            <h2 className="text-2xl font-bold text-white">Based in Istanbul, Working Across Türkiye</h2>
          </div>
          <p className="leading-relaxed max-w-3xl" style={{ color: "rgba(255,255,255,0.8)" }}>
            Located in Istanbul, Leitmotiv Film operates across the entire country,
            offering access to diverse filming locations ranging from vibrant urban
            environments to breathtaking natural landscapes. From large-scale
            productions to agile documentary crews, we provide the local knowledge
            and professional support needed to make filming in Türkiye smooth,
            efficient, and creatively rewarding.
          </p>
        </motion.div>
      </div>
    </div>
  );
}