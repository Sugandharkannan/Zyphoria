"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, Briefcase, Coins, ArrowRight } from "lucide-react";

const categories = ["All", "Tech", "Non-Tech"];

const internships = [
  { id: "01", title: "MERN Stack Engineer", category: "Tech", duration: "3 Months", level: "Beginner", tools: ["MongoDB", "Express", "React", "Node.js"], tag: "Most Popular", tagStyle: "tag-gold", stipend: 18000 },
  { id: "02", title: "Full Stack Developer", category: "Tech", duration: "6 Months", level: "Intermediate", tools: ["Python", "Django", "React", "PostgreSQL"], tag: "Bestseller", tagStyle: "tag-light", stipend: 20000 },
  { id: "03", title: "HR Intern", category: "Non-Tech", duration: "3 Months", level: "Beginner", tools: ["Recruitment", "Sourcing", "Screening", "HR Operations"], tag: "Active", tagStyle: "tag-green", stipend: 15000 },
  { id: "04", title: "DevOps Engineer", category: "Tech", duration: "4 Months", level: "Intermediate", tools: ["Docker", "Kubernetes", "AWS", "Jenkins"], tag: "Trending", tagStyle: "tag-gold", stipend: 19000 },
  { id: "05", title: "Testing Engineer", category: "Tech", duration: "3 Months", level: "Beginner", tools: ["Selenium", "QA Manual/Automation", "Postman", "Jest"], tag: "New", tagStyle: "tag-light", stipend: 16000 },
];

export default function CoursesSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? internships : internships.filter(c => c.category === active);

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
            <Briefcase size={11} /> Internship Openings
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}
            className="font-display font-black text-white leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            Internship <span className="g-text-r">Opportunities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-white/40 text-[14px] max-w-md mx-auto leading-relaxed"
          >
            Get hands-on industry experience with our structured internship roles featuring stipends from ₹15,000 to ₹20,000.
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
                    <Briefcase size={11} /> {course.level}
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

                {/* Stipend bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-white/30 text-[11px] flex items-center gap-1"><Coins size={11} /> Monthly Stipend</span>
                    <span className="text-[13px] font-bold" style={{ color: "var(--c-gold)" }}>₹{course.stipend.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${((course.stipend - 10000) / 10000) * 100}%` }} />
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
                  Apply Now <ArrowRight size={13} />
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
          <a href="#contact" className="btn-primary">Apply For Internships <ArrowRight size={14} /></a>
        </motion.div>
      </div>
    </section>
  );
}
