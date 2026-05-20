"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PlacementsSection from "@/components/sections/PlacementsSection";
import AboutSection from "@/components/sections/AboutSection";
import CoursesSection from "@/components/sections/CoursesSection";
import InternshipSection from "@/components/sections/InternshipSection";

import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingChatbot from "@/components/ui/FloatingChatbot";

/* ─── Custom Cursor ─── */
function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring_pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let raf: number;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = e.clientX - 3 + "px";
        dot.current.style.top = e.clientY - 3 + "px";
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      ring_pos.current.x = lerp(ring_pos.current.x, pos.current.x, 0.1);
      ring_pos.current.y = lerp(ring_pos.current.y, pos.current.y, 0.1);
      if (ring.current) {
        ring.current.style.left = ring_pos.current.x - 16 + "px";
        ring.current.style.top = ring_pos.current.y - 16 + "px";
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    document.addEventListener("mousemove", onMove);
    return () => { cancelAnimationFrame(raf); document.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}

/* ─── Loading Screen ─── */
function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 14 + 6;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onDone, 350);
          return 100;
        }
        return next;
      });
    }, 70);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center grid-bg"
      style={{ background: "var(--c-bg)" }}
    >
      {/* Corner accents */}
      {[
        "top-4 left-4 border-l border-t",
        "top-4 right-4 border-r border-t",
        "bottom-4 left-4 border-l border-b",
        "bottom-4 right-4 border-r border-b",
      ].map((cls, i) => (
        <div key={i} className={`absolute w-6 h-6 ${cls}`} style={{ borderColor: "rgba(0,229,255,0.25)" }} />
      ))}

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-10"
      >
        <div className="w-20 h-20 flex items-center justify-center mb-5 relative">
          <Image
            src="/logo.png"
            alt="Zyphora Technologies Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-display font-black text-[2.6rem] tracking-tight"
        >
          <span className="text-white">Zy</span>
          <span style={{ color: "var(--c-gold)" }}>ph</span>
          <span className="text-white">ora</span>
        </motion.p>
        <p className="text-white/25 text-[11px] tracking-[0.35em] uppercase mt-1">Technologies</p>
      </motion.div>

      {/* Progress */}
      <div className="w-48 h-0.5 rounded-full overflow-hidden mb-3" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ width: `${Math.min(progress, 100)}%`, background: "linear-gradient(90deg, var(--c-gold), var(--c-gold-light))" }}
        />
      </div>
      <p className="text-white/20 text-[11px] font-mono">{Math.min(Math.floor(progress), 100)}%</p>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen"
          style={{ background: "var(--c-bg)" }}
        >
          <CustomCursor />
          <Navbar />
          <main>
            <HeroSection />
            <PlacementsSection />
            <TestimonialsSection />
            <CoursesSection />
            <InternshipSection />

            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
          <FloatingChatbot />
        </motion.div>
      )}
    </>
  );
}
