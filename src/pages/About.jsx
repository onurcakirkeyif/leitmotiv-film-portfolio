import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const RED = "#B85040";
const BLUE = "#5B7FA6";

const ABOUT_IMG = "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1800&q=85";

export default function About() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Full-bleed image */}
      <div className="relative w-full" style={{ height: "60vh" }}>
        <img src={ABOUT_IMG} alt="Leitmotiv Film" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, #f5f2ee 100%)" }} />
        <div className="absolute bottom-10 left-8">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: RED }}>About</p>
          <h1
            className="font-bold uppercase leading-none"
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              letterSpacing: "0.25em",
              fontWeight: 700,
              color: "#111",
            }}
          >
            Leitmotiv<br />Film
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="p-12 border-r" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="leading-relaxed text-base mb-6" style={{ color: "rgba(0,0,0,0.55)" }}>
              Leitmotiv Film is an Istanbul-based production company providing
              comprehensive production and fixer services for international
              productions, broadcasters, brands, and filmmakers working in Türkiye.
            </p>
            <p className="leading-relaxed text-base mb-6" style={{ color: "rgba(0,0,0,0.55)" }}>
              With extensive experience supporting global media organizations and
              international crews, we specialize in delivering high-quality production
              services across commercials, documentaries, television programs, branded
              content, and feature films.
            </p>
            <p className="leading-relaxed text-base" style={{ color: "rgba(0,0,0,0.55)" }}>
              Our team combines creative expertise with deep local knowledge, allowing
              us to manage every stage of production efficiently — from initial planning
              and location scouting to filming, logistics, and post-production coordination.
            </p>
          </motion.div>
        </div>

        <div className="p-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                { v: "200+", l: "Completed Projects" },
                { v: "25+", l: "International Clients" },
                { v: "30+", l: "Countries Served" },
                { v: "15+", l: "Years Experience" },
              ].map(s => (
                <div key={s.l}>
                  <div className="text-4xl font-bold mb-1" style={{ color: RED }}>{s.v}</div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(0,0,0,0.35)" }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: BLUE }}>Location</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(0,0,0,0.55)" }}>
                Caferağa Mah. Sakızgülü Sok.<br />
                Sevin Apt. 29A Floor 1<br />
                Kadıköy, Istanbul, Türkiye
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="border-t px-12 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <p className="text-sm max-w-md" style={{ color: "rgba(0,0,0,0.45)" }}>
          Ready to start your production in Türkiye? We'd love to hear about your project.
        </p>
        <Link
          to={createPageUrl("Contact")}
          className="text-sm font-bold uppercase tracking-[0.15em] px-8 py-4 transition-colors"
          style={{ backgroundColor: RED, color: "white" }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#9a3e30"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = RED}
        >
          Get in Touch →
        </Link>
      </div>
    </div>
  );
}