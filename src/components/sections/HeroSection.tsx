"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";
import ParticleBackground from "@/components/ui/ParticleBackground";

const marqueeLogos = [
  { src: "/logos/logo_google.png",    alt: "Google" },
  { src: "/logos/logo_microsoft.png", alt: "Microsoft" },
  { src: "/logos/logo_amazon.png",    alt: "Amazon" },
  { src: "/logos/logo_meta.png",      alt: "Meta" },
  { src: "/logos/logo_nvidia.png",    alt: "NVIDIA" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function HeroSection() {

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden grid-bg">
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(7,17,31,0.5) 0%, transparent 50%, rgba(7,17,31,0.8) 100%)" }} />
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
                India&apos;s #1 Tech Placement Partner
              </motion.div>

              {/* Headline */}
              <div className="mb-6 space-y-1">
                <motion.h1 {...fadeUp(0.08)}
                  className="font-display font-black leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", color: "#ffffff" }}>
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
                className="text-[15px] leading-relaxed mb-9 max-w-[440px]"
                style={{ color: "rgba(255,255,255,0.7)" }}>
                Build industry-ready software skills through expert training and{" "}
                <span style={{ color: "var(--c-gold)", fontWeight: 600 }}>guaranteed placement support</span>.
                Live projects, 300+ hiring partners, and a career that starts before you graduate.
              </motion.p>

              {/* CTAs */}
              <motion.div {...fadeUp(0.34)} className="flex flex-wrap gap-3 mb-8">
                <a href="#placements" className="btn-primary">
                  View Placements <ArrowRight size={15} />
                </a>
                <a href="#courses" className="btn-ghost">
                  <Briefcase size={14} style={{ color: "var(--c-gold)" }} /> Explore Internships
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
              <div className="float card rounded-2xl p-6 relative overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(37,99,235,0.08), 0 4px 16px rgba(0,0,0,0.2)" }}>

                {/* Header */}
                <div className="flex items-center justify-between mb-5 pb-4"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#94a3b8" }}>Live Dashboard</p>
                    <p className="font-semibold text-base mt-0.5" style={{ color: "#ffffff" }}>Batch 2024 Placements</p>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", color: "#34d399" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Placement rate */}
                <div className="mb-5">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Placement Rate</span>
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
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#94a3b8" }}>Recent Placements</p>
                <div className="space-y-2.5">
                  {[
                    { name: "Rahul S.", role: "Software Engineer", co: "Zoho", pkg: "18 LPA" },
                    { name: "Priya M.", role: "Full Stack Developer", co: "Freshworks", pkg: "16 LPA" },
                    { name: "Arjun K.", role: "Data Scientist", co: "Razorpay", pkg: "15 LPA" },
                  ].map((s, i) => (
                    <motion.div key={s.name}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.12 }}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                          style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)", color: "var(--c-gold-light)" }}>
                          {s.name[0]}
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold" style={{ color: "#ffffff" }}>{s.name}</p>
                          <p className="text-[11px]" style={{ color: "#94a3b8" }}>{s.role} · {s.co}</p>
                        </div>
                      </div>
                      <span className="text-[13px] font-bold" style={{ color: "var(--c-gold)" }}>{s.pkg}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Glow accent */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08), transparent 70%)" }} />
              </div>

              {/* Floating badges */}
              <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-10 top-1/4 px-4 py-2.5 rounded-xl text-center glass"
                style={{ border: "1px solid rgba(96,165,250,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "#94a3b8" }}>Top Package</p>
                <p className="text-xl font-black" style={{ color: "#ffffff" }}>18 LPA</p>
              </motion.div>

              <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-6 bottom-1/4 px-4 py-2.5 rounded-xl text-center glass"
                style={{ border: "1px solid rgba(139,92,246,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "#94a3b8" }}>Partners</p>
                <p className="text-xl font-black g-text">300+</p>
              </motion.div>
            </motion.div>
          </div>


        </div>
      </div>

      {/* Marquee logo strip */}
      <div
        className="relative z-10 overflow-hidden py-5"
        style={{
          borderTop: "1px solid var(--c-border)",
          borderBottom: "1px solid var(--c-border)",
          background: "rgba(10,15,30,0.4)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, var(--c-bg), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, var(--c-bg), transparent)" }} />

        <div className="marquee-track">
          {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-10"
              style={{ height: 36 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={110}
                height={36}
                className="object-contain h-full w-auto"
                style={{
                  filter: "brightness(0) invert(1)",
                  opacity: 0.4,
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.opacity = "0.8")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.opacity = "0.4")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
