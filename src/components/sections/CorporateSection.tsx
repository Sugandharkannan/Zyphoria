"use client";
import { motion } from "framer-motion";
import { Building2, Users, Cpu, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI Upskilling Programs",
    desc: "Custom AI/ML training designed for your engineering teams — from fundamentals to production-grade model deployment.",
    features: ["Custom curriculum design", "Flexible weekend batches", "Hands-on project labs"],
  },
  {
    icon: Users,
    title: "Team Training Workshops",
    desc: "Intensive 2–5 day workshops on Generative AI, Computer Vision, and Data Analytics — on-site or remote.",
    features: ["Certificate of completion", "20–200 employees", "Live Q&A with experts"],
  },
  {
    icon: BarChart3,
    title: "AI Strategy Consulting",
    desc: "We help manufacturing and enterprise companies identify, prioritise, and implement high-ROI AI opportunities.",
    features: ["ROI assessment report", "Proof-of-concept builds", "90-day implementation plan"],
  },
  {
    icon: Building2,
    title: "AI Product Development",
    desc: "End-to-end AI product development for startups and enterprises — from ideation to deployed, production-ready systems.",
    features: ["MVP delivery in 6 weeks", "Full-stack AI architecture", "Post-launch support included"],
  },
];

const clients = [
  "Tata Group", "L&T", "TVS Motors", "Ashok Leyland", "Bosch India",
  "Infosys", "Wipro", "HCL", "Siemens", "Mahindra",
];

export default function CorporateSection() {
  return (
    <section id="corporate" className="section grid-bg">
      <div className="blob-gold" style={{ width: 450, height: 450, bottom: 0, right: "15%" }} />
      <div className="container relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-badge mx-auto"
          >
            <Building2 size={11} /> Corporate Training
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}
            className="font-display font-black text-white leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            AI-Power Your <span className="g-text">Entire Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-white/40 text-[14px] max-w-md mx-auto leading-relaxed"
          >
            From 10-person startups to 10,000-employee enterprises — we deliver custom AI training at scale.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card rounded-2xl p-6 shine group"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}>
                  <s.icon size={19} style={{ color: "var(--c-gold)" }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px] mb-2 group-hover:text-[var(--c-gold)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-white/40 text-[13px] leading-relaxed mb-4">{s.desc}</p>
                  <div className="space-y-1.5">
                    {s.features.map(f => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle2 size={12} style={{ color: "var(--c-gold)", flexShrink: 0 }} />
                        <span className="text-white/55 text-[12px]">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/25 text-[11px] font-semibold uppercase tracking-[0.14em] mb-6">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {clients.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.04 }}
                className="px-4 py-2 rounded-xl card-flat text-white/40 hover:text-white/70 text-[13px] font-medium transition-all cursor-default"
              >
                {c}
              </motion.div>
            ))}
          </div>

          <a href="#contact" className="btn-primary">
            Request Corporate Training <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
