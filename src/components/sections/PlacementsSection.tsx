"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { CheckCircle2, Trophy, Target, Rocket, ArrowRight, Star, TrendingUp } from "lucide-react";

const roadmap = [
  { step: "01", title: "Enroll & Assess", desc: "Profile evaluation and skill gap analysis to build your personal learning path.", icon: Target },
  { step: "02", title: "Train & Build", desc: "Hands-on training with real industry datasets and live capstone projects.", icon: Rocket },
  { step: "03", title: "Interview Prep", desc: "Mock interviews, DSA, aptitude training, and HR round preparation.", icon: Trophy },
  { step: "04", title: "Get Placed", desc: "Direct referrals to 300+ verified hiring partners across India.", icon: TrendingUp },
];

const students = [
  { name: "Karthik R.", role: "AI Engineer", company: "TCS", pkg: "18 LPA", batch: "2024", initials: "KR" },
  { name: "Sneha V.", role: "Graphic Designer", company: "Accenture", pkg: "12 LPA", batch: "2024", initials: "SV" },
  { name: "Mohammed Z.", role: "UI/UX Designer", company: "Cognizant", pkg: "10 LPA", batch: "2025", initials: "MZ" },
  { name: "Divya P.", role: "Data Analyst", company: "IBM", pkg: "08 LPA", batch: "2025", initials: "DP" },
  { name: "Ravi T.", role: "Full Stack Dev", company: "Wipro", pkg: "18 LPA", batch: "2025", initials: "RT" },
  { name: "Ananya K.", role: "DevOps Engineer", company: "Capgemini", pkg: "09 LPA", batch: "2025", initials: "AK" },
];

const features = [
  "Resume Building Workshop",
  "LinkedIn Profile Optimization",
  "Mock Technical Interviews",
  "Aptitude & Reasoning Training",
  "HR & Soft Skills Preparation",
  "Direct Company Referrals",
  "Salary Negotiation Coaching",
  "Alumni Network Access",
];

const companies = [
 "TCS", "Wipro",
  "Cognizant", "Accenture", "HCL", "Tech Mahindra", "IBM", "Capgemini",
  "Swiggy", "Flipkart", "Paytm", "PhonePe",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function PlacementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="placements" className="section">
      {/* subtle bg */}
      <div className="absolute inset-0" style={{ background: "rgba(6,6,6,0.3)" }} />
      <div className="blob-gold" style={{ width: 500, height: 500, top: 0, right: "10%" }} />

      <div className="container relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.div {...fadeUp(0)} className="section-badge mx-auto">
            <Trophy size={11} /> Placement Excellence
          </motion.div>
          <motion.h2 {...fadeUp(0.06)}
            className="font-display font-black text-white leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Your Dream Job,{" "}
            <span className="g-text">Guaranteed</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)}
            className="text-white/45 text-[15px] leading-relaxed max-w-xl mx-auto">
            We don't just teach — we place. With 300+ hiring partners and a structured placement process, your career transformation is our #1 priority.
          </motion.p>
        </div>

        {/* ── Roadmap ── */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {roadmap.map(({ step, title, desc, icon: Icon }, i) => (
            <motion.div key={step} {...fadeUp(i * 0.08)} className="card rounded-2xl p-5 shine relative group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}>
                  <Icon size={16} style={{ color: "var(--c-gold)" }} />
                </div>
                <span className="text-[2.2rem] font-black text-stroke-sm opacity-30 leading-none group-hover:opacity-50 transition-opacity">{step}</span>
              </div>
              <h3 className="text-white font-semibold text-[15px] mb-1.5">{title}</h3>
              <p className="text-white/40 text-[13px] leading-relaxed">{desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight size={14} className="text-white/20" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Stats ── */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { val: 94, suffix: "%", label: "Placement Rate" },
            { val: 18, suffix: " LPA", label: "Highest Package" },
            { val: 300, suffix: "+", label: "Hiring Partners" },
            { val: 100, suffix: "+", label: "Students Placed" },
          ].map(({ val, suffix, label }, i) => (
            <motion.div key={label} {...fadeUp(i * 0.07)}
              className="rounded-2xl p-5 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(145deg, rgba(212,175,55,0.06), rgba(247,215,116,0.04))", border: "1px solid rgba(212,175,55,0.12)" }}>
              <div className="stat-num mb-1" style={{ fontSize: "2.2rem" }}>
                {inView ? <CountUp end={val} duration={2} /> : 0}
                <span className="g-text">{suffix}</span>
              </div>
              <p className="text-white/40 text-[12px] font-medium">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Success Stories ── */}
        <motion.h3 {...fadeUp(0)} className="text-white font-semibold text-lg mb-6 text-center">
          Recent <span className="g-text">Success Stories</span>
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {students.map((s, i) => (
            <motion.div key={s.name} {...fadeUp(i * 0.06)}
              className="card rounded-2xl p-5 shine">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(247,215,116,0.08))", border: "1px solid rgba(212,175,55,0.2)" }}>
                  {s.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-[14px]">{s.name}</p>
                  <p className="text-white/40 text-[12px]">{s.role}</p>
                </div>
              </div>
              <div className="flex items-end justify-between pt-3.5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div>
                  <p className="text-white/35 text-[10px] font-medium uppercase tracking-wider mb-0.5">Placed at</p>
                  <p className="text-white font-semibold text-[14px]">{s.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/35 text-[10px] font-medium uppercase tracking-wider mb-0.5">Package</p>
                  <p className="font-black text-[1.4rem] g-text leading-none">{s.pkg}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={11} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-white/25 text-[11px] ml-1.5">Batch {s.batch}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Features + Partners ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Features list */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-white font-semibold text-lg mb-6">
              360° <span className="g-text">Placement Support</span>
            </h3>
            <div className="space-y-2">
              {features.map((feat, i) => (
                <motion.div key={feat}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/3 transition-colors">
                  <CheckCircle2 size={14} style={{ color: "var(--c-gold)", flexShrink: 0 }} />
                  <span className="text-white/65 text-[14px]">{feat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company logos */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-white font-semibold text-lg mb-6">
              Our <span className="g-text">Hiring Partners</span>
            </h3>
            <div className="grid grid-cols-3 gap-2.5">
              {companies.map((c, i) => (
                <motion.div key={c}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.04 }}
                  className="card-flat rounded-xl py-2.5 px-3 text-center text-[12px] font-medium text-white/45 hover:text-white/80 transition-colors cursor-default">
                  {c}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
