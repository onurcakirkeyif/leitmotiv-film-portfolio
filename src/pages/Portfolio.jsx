import React from "react";
import { motion } from "framer-motion";

const RED = "#B85040";

const projects = [
  { title: "The Mediterranean Seeker – Turkey", client: "Mango", thumbnail: "https://i.ytimg.com/vi_webp/bn1sZ8FxFLo/maxresdefault.webp", url: "https://www.youtube.com/watch?v=bn1sZ8FxFLo" },
  { title: "The Mediterranean Seeker – The Sea", client: "Mango", thumbnail: "https://i.ytimg.com/vi_webp/Be58H7ZiYDA/maxresdefault.webp", url: "https://www.youtube.com/watch?v=Be58H7ZiYDA" },
  { title: "Sundance Villa – Summer Collection", client: "MINDTHEGAP", thumbnail: "https://i.ytimg.com/vi_webp/r2jiGDiULWA/maxresdefault.webp", url: "https://www.youtube.com/watch?v=r2jiGDiULWA" },
  { title: "Bebemoss Story", client: "Shopify", thumbnail: "https://i.ytimg.com/vi_webp/TpBNceZbHKE/maxresdefault.webp", url: "https://www.youtube.com/watch?v=TpBNceZbHKE" },
  { title: "Humans and AI: Meet Kürşat", client: "Microsoft", thumbnail: "https://i.ytimg.com/vi/wF2CI-AZ19E/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=wF2CI-AZ19E" },
  { title: "Turquie, le culte de la beauté?", client: "Arte / Tataki", thumbnail: "https://i.ytimg.com/vi_webp/Mpij5JhuLrI/maxresdefault.webp", url: "https://www.youtube.com/watch?v=Mpij5JhuLrI" },
  { title: "The Lord of the Mussels", client: "The Culture Trip", thumbnail: "https://i.ytimg.com/vi/YniHplbiGnc/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=YniHplbiGnc" },
  { title: "Trial & Triumph: Seven Churches", client: "Appian Media", thumbnail: "https://i.ytimg.com/vi/apMj6heeibo/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=apMj6heeibo" },
  { title: "One Love", client: "Coca-Cola / Coke Studio", thumbnail: "https://i.ytimg.com/vi/Ul37EtOMh8U/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=Ul37EtOMh8U" },
  { title: "Rush – Reality Series", client: "Endemol Shine", thumbnail: "https://i.ytimg.com/vi/OMzsNGfR13Y/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=OMzsNGfR13Y" },
  { title: "Raiders of the Lost Past", client: "BBC", thumbnail: "https://i.ytimg.com/vi/CHkIiQ7ghyw/hqdefault.jpg", url: "https://www.youtube.com/watch?v=CHkIiQ7ghyw" },
  { title: "Citroën Campaign – Istanbul", client: "Citroën", thumbnail: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80", url: "https://vimeo.com/1169974748/e10fd89403" },
  { title: "Rot Op Naar Je Eigen Land", client: "NPO3", thumbnail: "https://i.ytimg.com/vi/Uqr09TlvVR0/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=Uqr09TlvVR0" },
];

export default function Portfolio() {
  return (
    <div>
      {/* Page title bar */}
      <div className="px-8 pt-16 pb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: RED }}>Selected Work</p>
        <h1 className="text-4xl font-bold uppercase tracking-tight text-white">Projects</h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="group relative block overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100" style={{ backgroundColor: "rgba(13,13,13,0.55)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }}>
              <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: RED }}>{project.client}</p>
              <h3 className="text-sm font-bold uppercase tracking-wide text-white leading-snug">{project.title}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}