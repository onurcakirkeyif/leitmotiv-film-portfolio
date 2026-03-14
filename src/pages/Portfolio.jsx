import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/portfolio/ProjectCard";

const RED = "#B85040";

const projects = [
  { title: "The Mediterranean Seeker – Chapter 1: Turkey", client: "Mango", thumbnail: "https://i.ytimg.com/vi_webp/bn1sZ8FxFLo/maxresdefault.webp", url: "https://www.youtube.com/watch?v=bn1sZ8FxFLo" },
  { title: "The Mediterranean Seeker – Chapter 2: The Sea", client: "Mango", thumbnail: "https://i.ytimg.com/vi_webp/Be58H7ZiYDA/maxresdefault.webp", url: "https://www.youtube.com/watch?v=Be58H7ZiYDA" },
  { title: "Sundance Villa – Summer Collection '21", client: "MINDTHEGAP", thumbnail: "https://i.ytimg.com/vi_webp/r2jiGDiULWA/maxresdefault.webp", url: "https://www.youtube.com/watch?v=r2jiGDiULWA" },
  { title: "How Baby Toys Are Changing Lives – The Bebemoss Story", client: "Shopify", thumbnail: "https://i.ytimg.com/vi_webp/TpBNceZbHKE/maxresdefault.webp", url: "https://www.youtube.com/watch?v=TpBNceZbHKE" },
  { title: "Humans and AI: Meet Kürşat – Episode 10", client: "Microsoft", thumbnail: "https://i.ytimg.com/vi/wF2CI-AZ19E/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=wF2CI-AZ19E" },
  { title: "Turquie, le culte de la beauté? – MON PAYS", client: "Tataki / Arte", thumbnail: "https://i.ytimg.com/vi_webp/Mpij5JhuLrI/maxresdefault.webp", url: "https://www.youtube.com/watch?v=Mpij5JhuLrI" },
  { title: "The Lord of the Mussels – Istanbul's Late-Night Snacks", client: "The Culture Trip", thumbnail: "https://i.ytimg.com/vi/YniHplbiGnc/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=YniHplbiGnc" },
  { title: "Trial & Triumph: Revelation's Seven Churches", client: "Appian Media", thumbnail: "https://i.ytimg.com/vi/apMj6heeibo/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=apMj6heeibo" },
  { title: "One Love – Shae Gill x Evdeki Saat", client: "Coca-Cola / Coke Studio", thumbnail: "https://i.ytimg.com/vi/Ul37EtOMh8U/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=Ul37EtOMh8U" },
  { title: "Rush – Reality Series", client: "Endemol Shine / Nine Network", thumbnail: "https://i.ytimg.com/vi/OMzsNGfR13Y/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=OMzsNGfR13Y" },
  { title: "Raiders of the Lost Past – World's Oldest City", client: "BBC", thumbnail: "https://i.ytimg.com/vi/CHkIiQ7ghyw/hqdefault.jpg", url: "https://www.youtube.com/watch?v=CHkIiQ7ghyw" },
  { title: "Iznik: The Ottoman Art That Captivated Europe", client: "BBC Reel", thumbnail: "https://ichef.bbci.co.uk/images/ic/320x180/p0m75r6v.jpg", url: "https://www.bbc.com/reel/video/p0m75qxp/iznik-the-ottoman-art-that-captivated-europe" },
  { title: "Citroën Campaign – Istanbul", client: "Citroën", thumbnail: "https://i.vimeocdn.com/video/2128933241-1f7c34b56d9e108ffb8cf29eef9e87a894c6a17e5ae40d94683465aa89697a18-d?mw=640&q=85", url: "https://vimeo.com/1169974748/e10fd89403" },
  { title: "Rot Op Naar Je Eigen Land", client: "NPO3", thumbnail: "https://i.ytimg.com/vi/Uqr09TlvVR0/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=Uqr09TlvVR0" },
];

export default function Portfolio() {
  return (
    <div className="pt-24 pb-20" style={{ backgroundColor: "#FAFAF9" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px]" style={{ backgroundColor: RED }} />
            <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: RED }}>Our Work</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#141414" }}>
            Selected
            <span className="font-serif italic" style={{ color: RED }}> Projects</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed" style={{ color: "#666" }}>
            A showcase of our work with leading international broadcasters,
            global brands, and creative teams from around the world.
          </p>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}