"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Briefcase } from "lucide-react";

export default function InternshipSection() {
  return (
    <section id="internships" className="section" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="container">

        {/* Header */}
        <div className="text-center mb-10">
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
            Build Your Career With <span className="g-text">Real Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-white/40 text-[14px] max-w-md mx-auto leading-relaxed"
          >
            Work on live software products alongside industry professionals. Earn a stipend and build a portfolio that stands out.
          </motion.p>
        </div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full rounded-3xl overflow-hidden"
          style={{
            border: "1px solid rgba(212,175,55,0.18)",
            boxShadow: "0 0 80px rgba(212,175,55,0.08), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Image */}
          <div className="relative w-full" style={{ aspectRatio: "16/6", minHeight: 280 }}>
            <Image
              src="/internship-banner.png"
              alt="Internship Program at Zyphora Technologies"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.15) 100%)",
              }}
            />
          </div>

          {/* Overlay content */}
          <div
            className="absolute inset-0 flex flex-col justify-center"
            style={{ padding: "clamp(1.5rem, 5vw, 4rem)" }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-3"
              style={{ color: "var(--c-gold)" }}
            >
              Zyphora Technologies · Internship Program
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 }}
              className="font-display font-black text-white leading-tight mb-4"
              style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)", maxWidth: 520 }}
            >
              Gain Real-World Skills.<br />
              <span style={{ color: "var(--c-gold)" }}>Launch Your Tech Career.</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.34 }}
              className="text-white/50 text-[13px] leading-relaxed mb-6"
              style={{ maxWidth: 400 }}
            >
              Join our structured internship programs in Full Stack, MERN, UI/UX, and HR — with mentorship, stipend, and a completion certificate.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 mb-7"
            >
              {[
                { value: "6+", label: "Domains" },
                { value: "₹7K/mo", label: "Max Stipend" },
                { value: "4 Months", label: "Max Duration" },
                { value: "100%", label: "Certificate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-black text-white text-[1.3rem] leading-none" style={{ fontFamily: "var(--font-display)" }}>
                    {stat.value}
                  </p>
                  <p className="text-white/35 text-[10px] uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.46 }}
            >
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[13px] transition-all"
                style={{
                  background: "linear-gradient(135deg, var(--c-gold), var(--c-gold-light))",
                  color: "#000",
                  boxShadow: "0 4px 24px rgba(212,175,55,0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 32px rgba(212,175,55,0.45)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px rgba(212,175,55,0.25)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                Apply Now <ArrowRight size={14} />
              </button>
            </motion.div>
          </div>

          {/* Gold corner accent */}
          <div
            className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
            style={{
              background: "radial-gradient(circle at top right, rgba(212,175,55,0.12), transparent 70%)",
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
