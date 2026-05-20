"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { GitBranch, ExternalLink, Eye } from "lucide-react";

const filters = ["All", "Computer Vision", "NLP & LLM", "Full Stack AI", "Automation"];

const projects = [
  { id: 1, title: "YOLO Safety Monitoring System", desc: "Real-time PPE detection on construction sites using YOLOv8. Detects helmets, vests, and violations with live alerts.", category: "Computer Vision", tech: ["YOLOv8", "OpenCV", "FastAPI", "React"], accent: "#00e5ff" },
  { id: 2, title: "AI Customer Support Chatbot", desc: "LLM-powered multi-turn chatbot with RAG and vector database integration for enterprise support.", category: "NLP & LLM", tech: ["LangChain", "GPT-4", "Pinecone", "Next.js"], accent: "#a78bfa" },
  { id: 3, title: "Vehicle Number Plate OCR", desc: "Automated license plate recognition system with real-time SQL database logging and alerts.", category: "Computer Vision", tech: ["OpenCV", "Tesseract", "Python", "MySQL"], accent: "#00e5ff" },
  { id: 4, title: "Medical Report Analyzer", desc: "AI agent that reads medical PDFs and generates patient-friendly explanations with insights.", category: "NLP & LLM", tech: ["LLaMA", "LangChain", "FastAPI", "React"], accent: "#a78bfa" },
  { id: 5, title: "AI Code Review Agent", desc: "GitHub-integrated agent that reviews pull requests, suggests improvements, and flags security issues.", category: "Full Stack AI", tech: ["GPT-4", "GitHub API", "Node.js", "MongoDB"], accent: "#34d399" },
  { id: 6, title: "Smart Invoice Automation", desc: "Extract and process structured invoice data from PDFs using multimodal vision models.", category: "Automation", tech: ["Claude Vision", "Python", "PostgreSQL", "React"], accent: "#fbbf24" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);
  const filtered = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section" style={{ background: "rgba(11,15,30,0.6)" }}>
      <div className="blob-purple" style={{ width: 500, height: 500, top: "20%", right: "-5%" }} />
      <div className="container relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-badge section-badge-purple mx-auto"
          >
            <Eye size={11} /> Student Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}
            className="font-display font-black text-white leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            Real <span className="g-text-r">AI Projects</span> Built Here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-white/40 text-[14px] max-w-md mx-auto"
          >
            Every student builds 5+ industry-grade AI projects for their portfolio.
          </motion.p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
                activeFilter === f ? "text-black font-semibold" : "card-flat text-white/50 hover:text-white/80"
              }`}
              style={activeFilter === f ? { background: "linear-gradient(135deg, var(--c-cyan), var(--c-purple-light))" } : {}}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className="card rounded-2xl overflow-hidden group"
            >
              {/* Image area */}
              <div className="h-40 relative flex items-center justify-center overflow-hidden grid-bg"
                style={{ background: `linear-gradient(145deg, ${p.accent}08, ${p.accent}14)` }}>
                <span className="text-[3.5rem] font-black leading-none select-none"
                  style={{ color: p.accent, opacity: 0.2 }}>
                  {String(p.id).padStart(2, "0")}
                </span>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === p.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center gap-3"
                  style={{ background: "rgba(5,8,16,0.82)", backdropFilter: "blur(6px)" }}
                >
                  <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] font-semibold text-white/80 transition-all hover:text-white"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <GitBranch size={13} /> GitHub
                  </button>
                  <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] font-semibold text-black"
                    style={{ background: "linear-gradient(135deg, var(--c-cyan), var(--c-purple-light))" }}>
                    <ExternalLink size={13} /> Demo
                  </button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-[14px] mb-2 leading-snug group-hover:text-[var(--c-cyan)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/35 text-[12px] leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map(t => (
                    <span key={t} className="px-2 py-1 rounded-md text-[10px] font-semibold"
                      style={{ background: `${p.accent}10`, border: `1px solid ${p.accent}20`, color: p.accent }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
