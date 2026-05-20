"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Target, Eye, Zap } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="section-sm" style={{ background: "var(--c-bg)" }}>
      <div className="blob-gold" style={{ width: 400, height: 400, top: 0, right: 0 }} />
      <div className="container relative z-10">

        {/* ── Visual Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-10"
          style={{ height: "260px", border: "1px solid rgba(212,175,55,0.15)" }}
        >
          <Image
            src="/training.png"
            alt="Zyphora Training Institute"
            fill
            className="object-cover"
            priority
          />
          {/* Gold overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,6,6,0.85) 0%, rgba(6,6,6,0.4) 50%, rgba(6,6,6,0.7) 100%)" }} />
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="section-badge mb-3"
            >
              <Zap size={11} /> About Zyphora
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="font-display font-black text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
            >
              Where <span className="g-text">Training & Placements</span><br />Are Built
            </motion.h2>
          </div>
        </motion.div>

        <div className="max-w-2xl">
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-white/55 text-[15px] leading-relaxed mb-4">
              Zyphora Technologies is not just a training institute — we&apos;re a career transformation engine. We combine industry-grade education with an obsessive focus on placement outcomes.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
              className="text-white/35 text-[14px] leading-relaxed mb-8">
              From freshers to experienced professionals making career switches — our structured programs and 300+ hiring partner network ensure you land the job you deserve.
            </motion.p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: Target, label: "Mission", text: "Make careers accessible to every passionate learner in India." },
                { icon: Eye, label: "Vision", text: "Be India's most trusted placement partner by 2026." },
              ].map(({ icon: Icon, label, text }) => (
                <motion.div key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="card rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={13} style={{ color: "var(--c-gold)" }} />
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "var(--c-gold)" }}>{label}</span>
                  </div>
                  <p className="text-white/45 text-[12px] leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>

            <div ref={ref} className="grid grid-cols-2 gap-3">
              {[{ val: 100, s: "+", l: "Projects Delivered" }, { val: 50, s: "+", l: "Expert Trainers" }].map(({ val, s, l }) => (
                <div key={l} className="card rounded-2xl p-4 text-center">
                  <div className="stat-num text-[1.8rem]">
                    {inView ? <CountUp end={val} duration={2} /> : 0}{s}
                  </div>
                  <p className="text-white/35 text-[11px] font-medium mt-0.5">{l}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
