import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import ClientsMarquee from "@/components/home/ClientsMarquee";

const RED = "#B85040";

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
    title: "Winter Garden / Kış Bahçesi",
    client: "Short Film",
    thumbnail: "https://i.vimeocdn.com/video/1484818990-150c914adcc94693198f4dbf623fbcb7661ec71fac5cb5033dc527a9fff3b3ca-d_640",
    url: "https://vimeo.com/409533871",
  },
  {
    title: "Turquie, le culte de la beauté?",
    client: "Arte / Tataki",
    thumbnail: "https://i.ytimg.com/vi_webp/Mpij5JhuLrI/maxresdefault.webp",
    url: "https://www.youtube.com/watch?v=Mpij5JhuLrI",
  },
  {
    title: "The Return / Dönüş",
    client: "Short Film",
    thumbnail: "https://i.vimeocdn.com/video/1638286094-95a29ed7a97cc8b3ffc60ecd1be707bbf70fd9efd33d2bb17b6436af17b84ab6-d_640",
    url: "https://vimeo.com/810633919",
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
    title: "The Lord of the Mussels",
    client: "The Culture Trip",
    thumbnail: "https://i.ytimg.com/vi/YniHplbiGnc/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=YniHplbiGnc",
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
  {
    title: "Nuova Hyundai BAYON",
    client: "Hyundai",
    thumbnail: "https://i.vimeocdn.com/video/1117256398-c03bc6eb4e362a67880db7eda536ce0f9fd4aaa0eb678bbc85252b6f79402146-d_640",
    url: "https://vimeo.com/539660481",
  },
  {
    title: "Unbound Turkey",
    client: "Documentary",
    thumbnail: "https://i.vimeocdn.com/video/2086033384-3dd0afebb066ed0276f1c36b9c3e3b6dc980785fa6fb582f26d3a5ffa3a1d917-d_640",
    url: "https://vimeo.com/1137882885/118edd0fef",
  },
  {
    title: "Stitched Up? Surgery in The Sun",
    client: "BBC Northern Ireland",
    thumbnail: "https://i.ytimg.com/vi/XZYeZjnaaNw/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=XZYeZjnaaNw",
  },
  {
    title: "Exploring Turkey",
    client: "Getaway / Channel 9",
    thumbnail: "https://i.ytimg.com/vi/lX3W9VUpx3k/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=lX3W9VUpx3k",
  },
  {
    title: "Ages of Globalization",
    client: "Documentary",
    thumbnail: "https://i.ytimg.com/vi/vhyYKouSzmY/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=vhyYKouSzmY",
  },
  {
    title: "Mümkün Değil",
    client: "Eskiz",
    thumbnail: "https://i.ytimg.com/vi/tqJU5UQlUmM/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=tqJU5UQlUmM",
  },
  {
    title: "Lucifer, My Love",
    client: "LiNANiL",
    thumbnail: "https://i.ytimg.com/vi/V7l-edRGNwU/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=V7l-edRGNwU",
  },
  {
    title: "It's Our Day MV",
    client: "Yoo Yong Min / Stone Music",
    thumbnail: "https://i.ytimg.com/vi/EUnCZJByYy8/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=EUnCZJByYy8",
  },
  {
    title: "Bir Araya Gel",
    client: "Eskiz",
    thumbnail: "https://i.ytimg.com/vi/9e1JkoZxGEc/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=9e1JkoZxGEc",
  },
  {
    title: "Alo in the Wild: Turkey",
    client: "Alo Yoga",
    thumbnail: "https://d357mttm70bw7x.cloudfront.net/normal_19663957-3b41-435a-92fd-d69cd0127d0a.jpg",
    url: "https://wellnessclub.aloyoga.com/series/alo-in-the-wild-turkey",
  },
  {
    title: "Silent House",
    client: "Mustafa Deniz",
    thumbnail: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?w=1280&q=80",
    url: "https://www.mustafadeniz.net/post-production",
  },
];

export default function Home() {
  return (
    <div>
      {/* 2-column project grid with gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]" style={{ backgroundColor: "#ccc" }}>
        {projects.map((project, i) => (
          <ProjectTile key={i} project={project} index={i} />
        ))}
      </div>

      <ClientsMarquee />

      {/* Footer strip */}
      <div className="border-t px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs"
        style={{ borderColor: "rgba(0,0,0,0.08)", color: "rgba(0,0,0,0.35)" }}>
        <span>© {new Date().getFullYear()} Leitmotiv Film. Kadıköy, Istanbul.</span>
        <Link to={createPageUrl("Contact")} className="hover:text-black transition-colors">
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
        style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
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