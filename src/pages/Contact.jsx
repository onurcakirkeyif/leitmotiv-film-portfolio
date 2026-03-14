import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const RED = "#B85040";
const BLUE = "#5B7FA6";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+90 555 354 75 85", href: "tel:+905553547585" },
  { icon: Mail, label: "Email", value: "info@leitmotivfilm.net", href: "mailto:info@leitmotivfilm.net" },
  { icon: MessageCircle, label: "WhatsApp", value: "+90 555 354 75 85", href: "https://wa.me/905553547585" },
  { icon: Instagram, label: "Instagram", value: "@leitmotiv_film", href: "https://instagram.com/leitmotiv_film" },
];

export default function Contact() {
  return (
    <div className="pt-24 pb-20" style={{ backgroundColor: "#FAFAF9" }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px]" style={{ backgroundColor: RED }} />
            <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: RED }}>Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#141414" }}>
            Let's Work
            <span className="font-serif italic" style={{ color: RED }}> Together</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed" style={{ color: "#666" }}>
            Whether you're planning a commercial campaign, documentary, or
            any production in Türkiye, we're here to help bring your vision to life.
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl border bg-white transition-all duration-300 group"
                style={{ borderColor: "#EEE" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${BLUE}40`; e.currentTarget.style.boxShadow = "0 4px 16px rgba(91,127,166,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#EEE"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div className="p-3 rounded-lg" style={{ backgroundColor: `${BLUE}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: BLUE }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "#aaa" }}>{item.label}</div>
                  <div className="text-sm font-semibold" style={{ color: "#141414" }}>{item.value}</div>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-5 rounded-xl border bg-white"
              style={{ borderColor: "#EEE" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: `${BLUE}15` }}>
                  <MapPin className="w-5 h-5" style={{ color: BLUE }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "#aaa" }}>Office</div>
                  <div className="text-sm font-medium leading-relaxed" style={{ color: "#141414" }}>
                    Caferağa Mah. Sakızgülü Sok.<br />
                    Sevin Apt. 29A Floor 1<br />
                    Kadıköy, Istanbul, Türkiye
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-8 rounded-2xl border bg-white shadow-sm"
            style={{ borderColor: "#EEE" }}
          >
            <h2 className="text-xl font-semibold mb-6" style={{ color: "#141414" }}>Send Us a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}