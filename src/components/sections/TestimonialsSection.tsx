"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Mohammed Zubair", role: "ML Engineer", company: "Freshworks", pkg: "16 LPA", location: "Hyderabad", batch: "2023", initials: "MZ", text: "The Computer Vision course content is genuinely top-notch — real projects, real datasets. My YOLO portfolio project alone got me shortlisted at 5 companies. The trainers have real industry experience." },
  { name: "Divya Priya", role: "Cloud Architect", company: "IBM", pkg: "15 LPA", location: "Chennai", batch: "2024", initials: "DP", text: "Joined as a fresher with zero cloud knowledge. The AWS course combined with placement prep completely transformed my prospects. The LinkedIn optimisation they helped with tripled my recruiter messages." },
  { name: "Ravi Teja", role: "Full Stack Developer", company: "Zoho", pkg: "18 LPA", location: "Coimbatore", batch: "2023", initials: "RT", text: "Best career investment I've made. The MERN Stack + AI integration course was exactly what the market needed. Got placed just 45 days after completing the program. Couldn't recommend it more." },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setCurrent(c => (c + 1) % testimonials.length); }, 6000);
    return () => clearInterval(t);
  }, []);

  const go = (idx: number) => { setDir(idx > current ? 1 : -1); setCurrent(idx); };
  const prev = () => { setDir(-1); setCurrent(c => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setDir(1); setCurrent(c => (c + 1) % testimonials.length); };

  const t = testimonials[current];

  return (
    <section className="section-sm" style={{ background: "var(--c-bg)" }}>
      <div className="blob-gold" style={{ width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      <div className="container relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-badge section-badge-alt mx-auto"
          >
            <Quote size={11} /> Student Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}
            className="font-display font-black text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            What Our <span className="g-text-r">Alumni</span> Say
          </motion.h2>
        </div>

        {/* Slider */}
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl"
            style={{ background: "rgba(17,17,17,0.95)", border: "1px solid rgba(212,175,55,0.12)" }}>

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 md:p-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-white/70 text-[15px] leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Person */}
                <div className="flex items-center gap-4 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(247,215,116,0.08))", border: "1px solid rgba(212,175,55,0.2)" }}>
                    {t.initials}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-[14px]">{t.name}</p>
                    <p className="text-white/40 text-[12px]">{t.role} · {t.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="tag tag-gold text-[12px]">{t.pkg}</span>
                    <p className="text-white/25 text-[11px] mt-1">{t.location} · {t.batch}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev}
              className="w-9 h-9 rounded-lg card-flat flex items-center justify-center text-white/40 hover:text-white transition-colors">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => go(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === current ? "22px" : "7px",
                    height: "7px",
                    background: i === current ? "linear-gradient(90deg, var(--c-gold), var(--c-gold-light))" : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
            <button onClick={next}
              className="w-9 h-9 rounded-lg card-flat flex items-center justify-center text-white/40 hover:text-white transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
