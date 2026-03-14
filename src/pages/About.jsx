import React from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Award, Users } from "lucide-react";

const ABOUT_IMG = "/__generating__/img_3fdfa54e80ed.png";

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
    <div className="pt-24 pb-20 bg-[#0a0a0a]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-amber-500" />
            <span className="text-xs uppercase tracking-[0.3em] text-amber-500/80">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Story Behind
            <br />
            <span className="font-serif italic text-amber-500">Leitmotiv Film</span>
          </h1>
        </motion.div>
      </div>

      {/* Image + Intro */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden aspect-video"
          >
            <img
              src={ABOUT_IMG}
              alt="Leitmotiv Film production crew on set in Istanbul"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 leading-relaxed mb-6">
              Leitmotiv Film is an Istanbul-based production company providing
              comprehensive production and fixer services for international
              productions, broadcasters, brands, and filmmakers working in Türkiye.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              With extensive experience supporting global media organizations and
              international crews, we specialize in delivering high-quality
              production services across commercials, documentaries, television
              programs, branded content, and feature films.
            </p>
            <p className="text-white/60 leading-relaxed">
              Our team combines creative expertise with deep local knowledge,
              allowing us to manage every stage of production efficiently — from
              initial planning and location scouting to filming, logistics, and
              post-production coordination.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-center"
            >
              <stat.icon className="w-6 h-6 text-amber-500/70 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Approach */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-amber-500 rounded-full" />
              <h2 className="text-2xl font-bold text-white/90">Our Approach</h2>
            </div>
            <p className="text-white/50 leading-relaxed mb-6">
              At Leitmotiv Film, we believe that successful productions are built on
              strong collaboration, creative problem-solving, and meticulous planning.
            </p>
            <p className="text-white/50 leading-relaxed">
              We work closely with directors, producers, and production teams to
              provide tailored solutions that meet both creative and logistical needs.
              From securing unique filming locations to coordinating equipment, crew,
              and permits, our goal is to make filming in Türkiye efficient, flexible,
              and stress-free.
            </p>
          </motion.div>
        </div>
      </div>

      {/* International Experience */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-amber-500 rounded-full" />
            <h2 className="text-2xl font-bold text-white/90">International Experience</h2>
          </div>
          <p className="text-white/50 leading-relaxed max-w-3xl mb-8">
            Our team has supported productions for major international broadcasters,
            media outlets, and global brands. This experience allows us to understand
            the expectations of international productions and deliver services that
            meet the highest professional standards.
          </p>
          <div className="flex flex-wrap gap-3">
            {clients.map((client) => (
              <span
                key={client}
                className="px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm bg-white/[0.02]"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Based in Istanbul */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-2xl border border-amber-500/20 bg-amber-500/5"
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-amber-500" />
            <h2 className="text-2xl font-bold text-white/90">Based in Istanbul, Working Across Türkiye</h2>
          </div>
          <p className="text-white/50 leading-relaxed max-w-3xl">
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