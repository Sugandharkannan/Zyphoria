"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, BarChart2, BookOpen, ArrowRight } from "lucide-react";

const categories = ["All", "AI & ML", "Full Stack", "Cloud & DevOps", "Data Science"];

const courses = [
  { id: "01", title: "Artificial Intelligence", category: "AI & ML", duration: "6 Months", level: "Intermediate", tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"], tag: "Most Popular", tagStyle: "tag-gold", placement: 95 },
  { id: "02", title: "Machine Learning", category: "AI & ML", duration: "4 Months", level: "Beginner", tools: ["Python", "Scikit-learn", "Pandas", "NumPy"], tag: "Bestseller", tagStyle: "tag-light", placement: 92 },
  { id: "03", title: "Generative AI & LLMs", category: "AI & ML", duration: "3 Months", level: "Advanced", tools: ["LangChain", "OpenAI", "HuggingFace", "RAG"], tag: "New", tagStyle: "tag-green", placement: 97 },
  { id: "04", title: "Computer Vision", category: "AI & ML", duration: "4 Months", level: "Intermediate", tools: ["YOLO", "OpenCV", "TensorFlow", "CNNs"], tag: "Trending", tagStyle: "tag-gold", placement: 94 },
  { id: "05", title: "MERN Stack", category: "Full Stack", duration: "5 Months", level: "Beginner", tools: ["MongoDB", "Express", "React", "Node.js"], tag: "Job Ready", tagStyle: "tag-green", placement: 88 },
  { id: "06", title: "Python Full Stack", category: "Full Stack", duration: "5 Months", level: "Beginner", tools: ["Python", "Django", "React", "PostgreSQL"], tag: "Popular", tagStyle: "tag-light", placement: 87 },
  { id: "07", title: "Cloud Computing", category: "Cloud & DevOps", duration: "3 Months", level: "Intermediate", tools: ["AWS", "Azure", "GCP", "Docker"], tag: "High Demand", tagStyle: "tag-gold", placement: 90 },
  { id: "08", title: "DevOps & MLOps", category: "Cloud & DevOps", duration: "3 Months", level: "Advanced", tools: ["Kubernetes", "Jenkins", "Terraform", "MLflow"], tag: "Trending", tagStyle: "tag-green", placement: 91 },
  { id: "09", title: "Data Science", category: "Data Science", duration: "6 Months", level: "Intermediate", tools: ["Python", "Tableau", "SQL", "Statistics"], tag: "Top Pick", tagStyle: "tag-light", placement: 93 },
];

export default function CoursesSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? courses : courses.filter(c => c.category === active);

  return (
    <section id="courses" className="section" style={{ background: "var(--c-bg)" }}>
      <div className="blob-warm" style={{ width: 500, height: 500, bottom: 0, left: "5%" }} />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-badge section-badge-alt mx-auto"
          >
            <BookOpen size={11} /> Our Programs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}
            className="font-display font-black text-white leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            Industry-Ready <span className="g-text-r">Courses</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-white/40 text-[14px] max-w-md mx-auto leading-relaxed"
          >
            Every program includes live projects, internship support, and dedicated placement assistance.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                active === cat
                  ? "text-black font-semibold"
                  : "card-flat text-white/50 hover:text-white/80"
              }`}
              style={active === cat ? { background: "linear-gradient(135deg, var(--c-gold), var(--c-gold-light))" } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="card rounded-2xl overflow-hidden group shine"
            >
              {/* Card header */}
              <div className="p-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[2.5rem] font-black text-stroke-sm opacity-20 leading-none group-hover:opacity-35 transition-opacity">
                    {course.id}
                  </span>
                  <span className={`tag ${course.tagStyle}`}>{course.tag}</span>
                </div>
                <h3 className="text-white font-semibold text-[15px] group-hover:text-[var(--c-gold)] transition-colors mb-2">
                  {course.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-white/35 text-[12px]">
                    <Clock size={11} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/35 text-[12px]">
                    <BarChart2 size={11} /> {course.level}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tools.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-medium text-white/45"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Placement bar */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-white/30 text-[11px]">Placement Rate</span>
                    <span className="text-[11px] font-semibold" style={{ color: "var(--c-gold)" }}>{course.placement}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${course.placement}%` }} />
                  </div>
                </div>

                <button
                  className="w-full py-2.5 rounded-xl text-[13px] font-semibold flex items-center justify-center gap-2 transition-all duration-250 group/btn"
                  style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.18)", color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, var(--c-gold), var(--c-gold-light))";
                    (e.currentTarget as HTMLButtonElement).style.color = "#000";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.07)";
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.18)";
                  }}
                >
                  Enroll Now <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="#contact" className="btn-primary">View All 20+ Courses <ArrowRight size={14} /></a>
        </motion.div>
      </div>
    </section>
  );
}
