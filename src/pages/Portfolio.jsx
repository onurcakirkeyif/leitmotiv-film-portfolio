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
  { title: "Citroën Campaign – Istanbul", client: "Citroën", thumbnail: "https://i.vimeocdn.com/video/2128933241-1f7c34b56d9e108ffb8cf29eef9e87a894c6a17e5ae40d94683465aa89697a18-d?mw=640&q=85", url: "https://vimeo.com/1169974748/e10fd89403" },
  { title: "Rot Op Naar Je Eigen Land", client: "NPO3", thumbnail: "https://i.ytimg.com/vi/Uqr09TlvVR0/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=Uqr09TlvVR0" },
  { title: "Winter Garden / Kış Bahçesi", client: "Short Film", thumbnail: "https://i.vimeocdn.com/video/1484818990-150c914adcc94693198f4dbf623fbcb7661ec71fac5cb5033dc527a9fff3b3ca-d_640", url: "https://vimeo.com/409533871" },
  { title: "The Return / Dönüş – Mood Teaser", client: "Short Film", thumbnail: "https://i.vimeocdn.com/video/1638286094-95a29ed7a97cc8b3ffc60ecd1be707bbf70fd9efd33d2bb17b6436af17b84ab6-d_640", url: "https://vimeo.com/810633919" },
  { title: "Nuova Hyundai BAYON", client: "Hyundai", thumbnail: "https://i.vimeocdn.com/video/1117256398-c03bc6eb4e362a67880db7eda536ce0f9fd4aaa0eb678bbc85252b6f79402146-d_640", url: "https://vimeo.com/539660481" },
  { title: "Unbound Turkey", client: "Documentary", thumbnail: "https://i.vimeocdn.com/video/2086033384-3dd0afebb066ed0276f1c36b9c3e3b6dc980785fa6fb582f26d3a5ffa3a1d917-d_640", url: "https://vimeo.com/1137882885/118edd0fef" },
  { title: "Stitched Up? Surgery in The Sun", client: "BBC Northern Ireland", thumbnail: "https://i.ytimg.com/vi/XZYeZjnaaNw/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=XZYeZjnaaNw" },
  { title: "Exploring Turkey", client: "Getaway / Channel 9", thumbnail: "https://i.ytimg.com/vi/lX3W9VUpx3k/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=lX3W9VUpx3k" },
  { title: "Ages of Globalization", client: "Documentary", thumbnail: "https://i.ytimg.com/vi/vhyYKouSzmY/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=vhyYKouSzmY" },
  { title: "Mümkün Değil", client: "Eskiz", thumbnail: "https://i.ytimg.com/vi/tqJU5UQlUmM/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=tqJU5UQlUmM" },
  { title: "Lucifer, My Love", client: "LiNANiL", thumbnail: "https://i.ytimg.com/vi/V7l-edRGNwU/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=V7l-edRGNwU" },
  { title: "It's Our Day MV", client: "Yoo Yong Min / Stone Music", thumbnail: "https://i.ytimg.com/vi/EUnCZJByYy8/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=EUnCZJByYy8" },
  { title: "Bir Araya Gel", client: "Eskiz", thumbnail: "https://i.ytimg.com/vi/9e1JkoZxGEc/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=9e1JkoZxGEc" },
  { title: "Alo in the Wild: Turkey", client: "Alo Yoga", thumbnail: "https://d357mttm70bw7x.cloudfront.net/normal_19663957-3b41-435a-92fd-d69cd0127d0a.jpg", url: "https://wellnessclub.aloyoga.com/series/alo-in-the-wild-turkey" },
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