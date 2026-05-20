"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Award, Building2 } from "lucide-react";
import ParticleBackground from "@/components/ui/ParticleBackground";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 5000, suffix: "+", label: "Students Trained", icon: Users },
  { value: 1200, suffix: "+", label: "Placed Successfully", icon: TrendingUp },
  { value: 300, suffix: "+", label: "Hiring Partners", icon: Building2 },
  { value: 18, suffix: " LPA", label: "Avg Package", icon: Award },
];

const marqueeItems = [
  "AI Engineer", "Data Scientist", "ML Engineer", "Full Stack Dev",
  "Cloud Architect", "DevOps Engineer", "Computer Vision", "NLP Specialist",
  "Generative AI", "Deep Learning", "Python Developer", "AI Researcher",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden grid-bg">
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(6,6,6,0.75) 0%, rgba(6,6,6,0.3) 50%, rgba(6,6,6,0.9) 100%)" }} />
      <div className="blob-gold" style={{ width: 600, height: 600, top: "-100px", left: "-100px" }} />
      <div className="blob-warm" style={{ width: 500, height: 500, top: "100px", right: "-80px" }} />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container w-full pt-28 pb-16">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

            {/* ── Left: Copy ── */}
            <div className="max-w-xl">
              <motion.div {...fadeUp(0)} className="section-badge mb-6">
                <Sparkles size={11} />
                India&apos;s #1 AI Placement Partner
              </motion.div>

              {/* Headline */}
              <div className="mb-6 space-y-1">
                <motion.h1 {...fadeUp(0.08)}
                  className="font-display font-black text-white leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}>
                  Transform Your
                </motion.h1>
                <motion.h1 {...fadeUp(0.14)}
                  className="font-display font-black text-stroke leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}>
                  Career With
                </motion.h1>
                <motion.h1 {...fadeUp(0.2)}
                  className="font-display font-black g-text leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}>
                  Zyphora Technologies
                </motion.h1>
              </div>

              <motion.p {...fadeUp(0.28)}
                className="text-white/55 text-[15px] leading-relaxed mb-9 max-w-[440px]">
                Industry-ready AI training with{" "}
                <span className="text-white/80 font-medium">guaranteed placement support</span>.
                Live projects, 300+ hiring partners, and a career that starts before you graduate.
              </motion.p>

              {/* CTAs */}
              <motion.div {...fadeUp(0.34)} className="flex flex-wrap gap-3 mb-8">
                <a href="#placements" className="btn-primary">
                  View Placements <ArrowRight size={15} />
                </a>
                <a href="#courses" className="btn-ghost">
                  <Play size={14} style={{ color: "var(--c-gold)" }} /> Explore Courses
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-2">
                {["Free Demo", "No-Cost EMI", "Job Guarantee", "Live Projects"].map((t) => (
                  <span key={t} className="tag tag-gold">{t}</span>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Placement Dashboard ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="float card-flat rounded-2xl p-6 relative overflow-hidden"
                style={{ background: "rgba(8,6,2,0.92)", border: "1px solid rgba(212,175,55,0.15)" }}>

                {/* Header */}
                <div className="flex items-center justify-between mb-5 pb-4"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div>
                    <p className="text-white/35 text-[10px] font-semibold uppercase tracking-widest">Live Dashboard</p>
                    <p className="text-white font-semibold text-base mt-0.5">Batch 2024 Placements</p>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: "#34d399" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Placement rate */}
                <div className="mb-5">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/50 text-xs">Placement Rate</span>
                    <span className="text-[13px] font-bold" style={{ color: "var(--c-gold)" }}>94.5%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: "94.5%" }}
                      transition={{ duration: 1.6, delay: 0.8, ease: "easeOut" }} />
                  </div>
                </div>

                {/* Recent placements */}
                <p className="text-white/30 text-[10px] font-semibold uppercase tracking-widest mb-3">Recent Placements</p>
                <div className="space-y-2.5">
                  {[
                    { name: "Rahul S.", role: "AI Engineer", co: "Google", pkg: "32 LPA" },
                    { name: "Priya M.", role: "ML Engineer", co: "Microsoft", pkg: "28 LPA" },
                    { name: "Arjun K.", role: "Data Scientist", co: "Amazon", pkg: "26 LPA" },
                  ].map((s, i) => (
                    <motion.div key={s.name}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.12 }}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white/70 flex-shrink-0"
                          style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}>
                          {s.name[0]}
                        </div>
                        <div>
                          <p className="text-white text-[13px] font-medium">{s.name}</p>
                          <p className="text-white/35 text-[11px]">{s.role} · {s.co}</p>
                        </div>
                      </div>
                      <span className="text-[13px] font-bold" style={{ color: "var(--c-gold)" }}>{s.pkg}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Glow accent */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(212,175,55,0.06), transparent 70%)" }} />
              </div>

              {/* Floating badges */}
              <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-10 top-1/4 px-4 py-2.5 rounded-xl text-center"
                style={{ background: "rgba(8,6,2,0.95)", border: "1px solid rgba(212,175,55,0.22)", backdropFilter: "blur(12px)" }}>
                <p className="text-white/40 text-[10px] uppercase tracking-wider">Top Package</p>
                <p className="text-xl font-black" style={{ color: "var(--c-gold)" }}>25 LPA</p>
              </motion.div>

              <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-6 bottom-1/4 px-4 py-2.5 rounded-xl text-center"
                style={{ background: "rgba(11,15,30,0.95)", border: "1px solid rgba(124,58,237,0.25)", backdropFilter: "blur(12px)" }}>
                <p className="text-white/40 text-[10px] uppercase tracking-wider">Partners</p>
                <p className="text-xl font-black g-text">300+</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats row */}
          <div ref={ref}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-14">
              {stats.map(({ value, suffix, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="card-flat rounded-2xl p-5 flex items-center gap-4 shine"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.18)" }}>
                    <Icon size={16} style={{ color: "var(--c-gold)" }} />
                  </div>
                  <div>
                    <div className="stat-num text-[1.5rem]">
                      {inView ? <CountUp end={value} duration={2.2} separator="," /> : "0"}
                      <span className="g-text">{suffix}</span>
                    </div>
                    <p className="text-white/40 text-[11px] font-medium mt-0.5">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-y overflow-hidden py-3"
        style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(212,175,55,0.02)" }}>
        <div className="marquee-track gap-0">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-6 px-6 text-[11px] font-semibold text-white/25 uppercase tracking-[0.14em] whitespace-nowrap">
              <span style={{ color: "var(--c-gold)", opacity: 0.5 }}>◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
