"use client";
import { motion } from "framer-motion";
import { Briefcase, Code2, Globe, ArrowRight, Users, Palette, PenTool } from "lucide-react";

const internships = [
  { 
  title: "UI/UX Design Intern", 
  tech: ["Figma", "Adobe XD", "Wireframing", "Prototyping"], 
  duration: "2 Months", 
  stipend: "₹5,000/mo", 
  type: "Remote", 
  icon: Palette 
},

{ 
  title: "Graphic Design Intern", 
  tech: ["Photoshop", "Illustrator", "Canva", "Brand Design"], 
  duration: "3 Months", 
  stipend: "₹4,000/mo", 
  type: "Hybrid", 
  icon: PenTool 
},

{ 
  title: "Full Stack Development Intern", 
  tech: ["HTML", "CSS", "JavaScript", "React"], 
  duration: "4 Months", 
  stipend: "₹6,000/mo", 
  type: "Remote", 
  icon: Code2 
},

{ 
  title: "MERN Stack Intern", 
  tech: ["MongoDB", "Express.js", "React", "Node.js"], 
  duration: "3 Months", 
  stipend: "₹7,000/mo", 
  type: "Hybrid", 
  icon: Globe 
},

{ 
  title: "Human Resource Intern", 
  tech: ["Recruitment", "Communication", "Employee Handling", "MS Office"], 
  duration: "2 Months", 
  stipend: "₹4,000/mo", 
  type: "On-site", 
  icon: Briefcase 
},

{ 
  title: "HR & Operations Intern", 
  tech: ["Hiring", "Team Management", "Documentation", "Scheduling"], 
  duration: "3 Months", 
  stipend: "₹5,000/mo", 
  type: "Remote", 
  icon: Users 
}
];

const typeTag: Record<string, string> = {
  Remote: "tag-green",
  Hybrid: "tag-light",
  "On-site": "tag-gold",
};

export default function InternshipSection() {
  return (
    <section id="internships" className="section grid-bg">
      <div className="blob-gold" style={{ width: 400, height: 400, top: "30%", right: 0 }} />
      <div className="container relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-badge mx-auto"
          >
            <Briefcase size={11} /> Live Internships
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}
            className="font-display font-black text-white leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            Real-World <span className="g-text">Internship</span> Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-white/40 text-[14px] max-w-md mx-auto leading-relaxed"
          >
            Work on actual AI products with startups and companies. Build your portfolio while earning a stipend.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {internships.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="card rounded-2xl p-5 group shine"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}>
                  <item.icon size={17} style={{ color: "var(--c-gold)" }} />
                </div>
                <span className={`tag ${typeTag[item.type]}`}>{item.type}</span>
              </div>

              <h3 className="text-white font-semibold text-[15px] mb-3 group-hover:text-[var(--c-gold)] transition-colors">
                {item.title}
              </h3>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {item.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-medium text-white/40"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 mb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-wider font-medium">Duration</p>
                  <p className="text-white font-semibold text-[13px] mt-0.5">{item.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/30 text-[10px] uppercase tracking-wider font-medium">Stipend</p>
                  <p className="font-bold text-[14px] mt-0.5" style={{ color: "var(--c-gold)" }}>{item.stipend}</p>
                </div>
              </div>

              <button
                className="w-full py-2.5 rounded-xl text-[13px] font-semibold flex items-center justify-center gap-2 transition-all"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
