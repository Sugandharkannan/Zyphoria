"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";

const courses = ["Artificial Intelligence", "Machine Learning", "Generative AI", "Computer Vision", "MERN Stack", "Python Full Stack", "Cloud Computing", "DevOps & MLOps", "Data Science", "Corporate Training"];
const contactInfo = [
  { icon: Phone, label: "Call Us", lines: ["+91 98765 43210", "+91 87654 32109"], accent: "var(--c-gold)" },
  { icon: Mail, label: "Email Us", lines: ["info@Zyphora.tech", "placements@Zyphora.tech"], accent: "var(--c-gold-light)" },
  { icon: MapPin, label: "Visit Us", lines: ["123, Tech Park, Anna Nagar", "Chennai, Tamil Nadu – 600040"], accent: "#34d399" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--c-bg)" }}>
      <div className="blob-gold" style={{ width: 400, height: 400, top: 0, left: "10%" }} />
      <div className="container relative z-10">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-badge mx-auto">
            <MessageCircle size={11} /> Get In Touch
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}
            className="font-display font-black text-white leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
            Start Your <span className="g-text"> Journey</span> Today
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-white/40 text-[14px]">
            Book a free demo session — no commitment, just clarity on your career path.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card rounded-2xl p-12 text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}>
                  <CheckCircle2 size={26} style={{ color: "var(--c-gold)" }} />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-white/40 text-[14px] leading-relaxed">Our team will reach out within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card rounded-2xl p-7 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/40 text-[12px] font-medium mb-1.5">Full Name *</label>
                    <input type="text" required value={form.name} onChange={set("name")} placeholder="e.g. Rahul Kumar" className="input" />
                  </div>
                  <div>
                    <label className="block text-white/40 text-[12px] font-medium mb-1.5">Phone *</label>
                    <input type="tel" required value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" className="input" />
                  </div>
                </div>
                <div>
                  <label className="block text-white/40 text-[12px] font-medium mb-1.5">Email *</label>
                  <input type="email" required value={form.email} onChange={set("email")} placeholder="you@example.com" className="input" />
                </div>
                <div>
                  <label className="block text-white/40 text-[12px] font-medium mb-1.5">Interested Course</label>
                  <select value={form.course} onChange={set("course")} className="input cursor-pointer">
                    <option value="" style={{ background: "#111111" }}>Select a course</option>
                    {courses.map(c => <option key={c} value={c} style={{ background: "#111111" }}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-white/40 text-[12px] font-medium mb-1.5">Message</label>
                  <textarea value={form.message} onChange={set("message")} placeholder="Tell us about your goals..." rows={4} className="input resize-none" />
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  disabled={loading} className="btn-primary w-full justify-center py-3.5 text-[14px]">
                  {loading
                    ? <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    : <><Send size={14} /> Book Free Demo Session</>}
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-3">
            {contactInfo.map(({ icon: Icon, label, lines, accent }) => (
              <div key={label} className="card rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${accent}12`, border: `1px solid ${accent}25` }}>
                  <Icon size={17} style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-wider font-semibold mb-1">{label}</p>
                  {lines.map(l => <p key={l} className="text-white/75 text-[13px] leading-relaxed">{l}</p>)}
                </div>
              </div>
            ))}
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl font-semibold text-[14px] text-white hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(135deg,#25d366,#128c7e)" }}>
              <MessageCircle size={17} /> Chat on WhatsApp
            </a>
            <div className="card rounded-2xl p-5">
              <p className="text-white/30 text-[10px] uppercase tracking-wider font-semibold mb-3">Office Hours</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/50 text-[13px]">Monday – Saturday</span>
                  <span className="text-white font-medium text-[13px]">9 AM – 7 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50 text-[13px]">Sunday</span>
                  <span className="text-[13px] font-medium" style={{ color: "var(--c-gold)" }}>Demo Sessions Only</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
