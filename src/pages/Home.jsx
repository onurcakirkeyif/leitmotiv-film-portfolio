import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

const RED = "#B85040";

// All projects shown as full-bleed grid on homepage
const projects = [
  {
    title: "The Mediterranean Seeker – Turkey",
    client: "Mango",
    thumbnail: "https://i.ytimg.com/vi_webp/bn1sZ8FxFLo/maxresdefault.webp",
    url: "https://www.youtube.com/watch?v=bn1sZ8FxFLo",
  },
  {
    title: "One Love",
    client: "Coca-Cola / Coke Studio",
    thumbnail: "https://i.ytimg.com/vi/Ul37EtOMh8U/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=Ul37EtOMh8U",
  },
  {
    title: "Sundance Villa – Summer Collection",
    client: "MINDTHEGAP",
    thumbnail: "https://i.ytimg.com/vi_webp/r2jiGDiULWA/maxresdefault.webp",
    url: "https://www.youtube.com/watch?v=r2jiGDiULWA",
  },
  {
    title: "Citroën Campaign – Istanbul",
    client: "Citroën",
    thumbnail: "https://i.vimeocdn.com/video/2128933241-1f7c34b56d9e108ffb8cf29eef9e87a894c6a17e5ae40d94683465aa89697a18-d?mw=640&q=85",
    url: "https://vimeo.com/1169974748/e10fd89403",
  },
  {
    title: "Rush – Reality Series",
    client: "Endemol Shine",
    thumbnail: "https://i.ytimg.com/vi/OMzsNGfR13Y/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=OMzsNGfR13Y",
  },
  {
    title: "Turquie, le culte de la beauté?",
    client: "Arte / Tataki",
    thumbnail: "https://i.ytimg.com/vi_webp/Mpij5JhuLrI/maxresdefault.webp",
    url: "https://www.youtube.com/watch?v=Mpij5JhuLrI",
  },
  {
    title: "The Lord of the Mussels",
    client: "The Culture Trip",
    thumbnail: "https://i.ytimg.com/vi/YniHplbiGnc/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=YniHplbiGnc",
  },
  {
    title: "Bebemoss Story",
    client: "Shopify",
    thumbnail: "https://i.ytimg.com/vi_webp/TpBNceZbHKE/maxresdefault.webp",
    url: "https://www.youtube.com/watch?v=TpBNceZbHKE",
  },
  {
    title: "Humans and AI: Meet Kürşat",
    client: "Microsoft",
    thumbnail: "https://i.ytimg.com/vi/wF2CI-AZ19E/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=wF2CI-AZ19E",
  },
  {
    title: "Raiders of the Lost Past",
    client: "BBC",
    thumbnail: "https://i.ytimg.com/vi/CHkIiQ7ghyw/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=CHkIiQ7ghyw",
  },
  {
    title: "Trial & Triumph: Seven Churches",
    client: "Appian Media",
    thumbnail: "https://i.ytimg.com/vi/apMj6heeibo/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=apMj6heeibo",
  },
  {
    title: "Rot Op Naar Je Eigen Land",
    client: "NPO3",
    thumbnail: "https://i.ytimg.com/vi/Uqr09TlvVR0/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=Uqr09TlvVR0",
  },
];

export default function Home() {
  return (
    <div>
      {/* 2-column full-bleed project grid — exactly like Pulse Films */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectTile key={i} project={project} index={i} />
        ))}
      </div>

      {/* Footer strip */}
      <div className="border-t px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs"
        style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)" }}>
        <span>© {new Date().getFullYear()} Leitmotiv Film. Kadıköy, Istanbul.</span>
        <Link to={createPageUrl("Contact")} className="hover:text-white transition-colors">
          info@leitmotivfilm.net
        </Link>
      </div>
    </div>
  );
}

function ProjectTile({ project, index }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.04 }}
      className="group relative block overflow-hidden"
      style={{ aspectRatio: "16/9" }}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: "rgba(13,13,13,0.55)" }}
      />
      {/* Title — always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }}>
        <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: RED }}>
          {project.client}
        </p>
        <h3 className="text-sm font-bold uppercase tracking-wide text-white leading-snug">
          {project.title}
        </h3>
      </div>
    </motion.a>
  );
}