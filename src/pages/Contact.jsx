import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+90 555 354 75 85", href: "tel:+905553547585" },
  { icon: Mail, label: "Email", value: "info@leitmotivfilm.net", href: "mailto:info@leitmotivfilm.net" },
  { icon: MessageCircle, label: "WhatsApp", value: "+90 555 354 75 85", href: "https://wa.me/905553547585" },
  { icon: Instagram, label: "Instagram", value: "@leitmotiv_film", href: "https://instagram.com/leitmotiv_film" },
];

export default function Contact() {
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
            <div className="w-12 h-[1px]" style={{ backgroundColor: "#B85040" }} />
            <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "#B85040cc" }}>
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Work
            <span className="font-serif italic" style={{ color: "#B85040" }}> Together</span>
          </h1>
          <p className="text-white/40 max-w-2xl text-lg leading-relaxed">
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
                className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group"
                onMouseEnter={e => e.currentTarget.style.borderColor = "#5B7FA633"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"}
              >
                <div className="p-3 rounded-lg" style={{ backgroundColor: "#5B7FA615" }}>
                  <item.icon className="w-5 h-5" style={{ color: "#5B7FA6" }} />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-5 rounded-xl border border-white/5 bg-white/[0.02]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: "#5B7FA615" }}>
                  <MapPin className="w-5 h-5" style={{ color: "#5B7FA6" }} />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">Office</div>
                  <div className="text-white/80 text-sm font-medium leading-relaxed">
                    Caferağa Mah. Sakızgülü Sok.
                    <br />
                    Sevin Apt. 29A Floor 1
                    <br />
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
            className="lg:col-span-3 p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
          >
            <h2 className="text-xl font-semibold text-white/90 mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}