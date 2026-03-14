import React from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative block rounded-2xl overflow-hidden aspect-video bg-white/5"
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Play icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
          style={{ backgroundColor: "#B85040e6" }}
        >
          <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
        </div>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span
              className="text-[10px] uppercase tracking-[0.2em] block mb-1"
              style={{ color: "#B85040cc" }}
            >
              {project.client}
            </span>
            <h3 className="text-sm font-semibold text-white/90 leading-snug line-clamp-2">
              {project.title}
            </h3>
          </div>
          <ExternalLink className="w-4 h-4 text-white/30 flex-shrink-0 mt-1 group-hover:text-white/70 transition-colors" />
        </div>
      </div>
    </motion.a>
  );
}