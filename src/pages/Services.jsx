import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/services/ServiceCard";
import {
  Film, Camera, Clapperboard, Mic, Video, Monitor, Tv, Music,
  MapPin, Users, Truck, Building2, Scissors, ShoppingCart,
  Shield, Banknote, Wrench, Package
} from "lucide-react";

const productionServices = [
  { icon: Clapperboard, title: "Commercial Films", description: "High-impact commercials for global brands, from concept to final delivery." },
  { icon: Video, title: "Social Media Video", description: "Engaging video content tailored for digital platforms and social media campaigns." },
  { icon: Camera, title: "Drone Filming", description: "Breathtaking aerial cinematography showcasing Türkiye's stunning landscapes." },
  { icon: Building2, title: "Corporate Films", description: "Professional corporate videos that communicate your brand story effectively." },
  { icon: Camera, title: "Photography", description: "High-quality still photography for campaigns, editorial, and branded content." },
  { icon: Film, title: "Feature & Short Films", description: "Full production services for narrative feature films and short films." },
  { icon: Tv, title: "Reality Shows & TV", description: "End-to-end production support for reality shows and television programs." },
  { icon: Music, title: "Music Videos", description: "Creative music video production with access to unique Turkish locations." },
  { icon: Monitor, title: "Documentaries", description: "Compelling documentary production across diverse locations in Türkiye." },
];

const supportServices = [
  { icon: MapPin, title: "Location Scouting & Permits", description: "We uncover the perfect filming locations and handle all permits and paperwork, so your team can focus entirely on creativity." },
  { icon: Users, title: "Casting & Crew", description: "From local talent to skilled production teams, we assemble the right people to bring your vision flawlessly to life." },
  { icon: Truck, title: "Transportation & Accommodation", description: "Seamless logistics for your crew — we organize transportation and premium accommodations to keep everyone on schedule and energized." },
  { icon: Building2, title: "Production Office Setup", description: "Need a base of operations? We provide fully equipped production offices ready for your team to work efficiently on set." },
  { icon: Scissors, title: "Post-Production Coordination", description: "From editing to VFX, we oversee every stage of post-production, ensuring a smooth and timely delivery." },
  { icon: ShoppingCart, title: "Local Vendors & Catering", description: "We connect you with the finest local vendors for props, equipment, and catering, so every detail of your shoot is handled professionally." },
  { icon: Shield, title: "Health & Safety", description: "Your team's safety is our priority — on-set medics and comprehensive safety protocols keep your production risk-free." },
  { icon: Banknote, title: "Subsidies & Grants", description: "We help unlock local incentives and funding opportunities, maximizing your production budget without compromise." },
  { icon: Wrench, title: "Top-Tier Equipment & Technical Support", description: "Access cutting-edge gear and expert technical support to achieve flawless results on set." },
  { icon: Package, title: "Customs & Shipping", description: "We manage all imports, exports, and customs logistics, ensuring equipment moves smoothly and your production stays on track." },
];

export default function Services() {
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
              Our Services
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            What We
            <span className="font-serif italic text-amber-500"> Offer</span>
          </h1>
          <p className="text-white/40 max-w-2xl text-lg leading-relaxed">
            We provide a wide range of production and production support services
            for international productions, broadcasters, brands, and filmmakers.
          </p>
        </motion.div>
      </div>

      {/* Production Services */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 bg-amber-500 rounded-full" />
          <h2 className="text-2xl font-bold text-white/90">Production</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {productionServices.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>

      {/* Production Support */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 bg-amber-500 rounded-full" />
          <h2 className="text-2xl font-bold text-white/90">Production Support</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportServices.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}