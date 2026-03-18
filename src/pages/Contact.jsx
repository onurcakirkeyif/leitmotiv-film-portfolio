import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";

const RED = "#B85040";
const BLUE = "#5B7FA6";

export default function Contact() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Page title */}
      <div className="px-8 pt-16 pb-8 border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: RED }}>Say Hello</p>
        <h1
          className="font-bold uppercase"
          style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)", letterSpacing: "0.25em", color: "#111" }}
        >
          Contact
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Info */}
        <div className="p-12 border-r" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="leading-relaxed mb-12 text-[11px] font-bold uppercase tracking-[0.25em] max-w-sm text-justify" style={{ color: "rgba(0,0,0,0.5)" }}>
              Whether you're planning a commercial, documentary, or any production
              in Türkiye — we're here to help bring your vision to life.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "rgba(0,0,0,0.3)" }}>Email</p>
                <a href="mailto:info@leitmotivfilm.net" className="text-sm font-bold tracking-[0.1em] transition-opacity hover:opacity-50" style={{ color: "#111" }}>
                  info@leitmotivfilm.net
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "rgba(0,0,0,0.3)" }}>Phone / WhatsApp</p>
                <a href="tel:+905553547585" className="text-sm font-bold tracking-[0.1em] transition-opacity hover:opacity-50" style={{ color: "#111" }}>
                  +90 555 354 75 85
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "rgba(0,0,0,0.3)" }}>Instagram</p>
                <a href="https://instagram.com/leitmotiv_film" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-bold tracking-[0.1em] transition-opacity hover:opacity-50" style={{ color: "#111" }}>
                  @leitmotiv_film
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "rgba(0,0,0,0.3)" }}>Office</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] leading-relaxed" style={{ color: "rgba(0,0,0,0.5)" }}>
                  Caferağa Mah. Sakızgülü Sok.<br />
                  Sevin Apt. 29A Floor 1<br />
                  Kadıköy, Istanbul, Türkiye
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <div className="p-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] mb-8" style={{ color: "rgba(0,0,0,0.3)" }}>Send a Message</p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}