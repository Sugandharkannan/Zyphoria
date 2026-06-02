"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const botReplies: Record<string, string> = {
  default: "Hi! I'm Aria 👋 I can help with course info, placement stats, fees, and demo bookings. What would you like to know?",
  courses: "We offer 12+ software engineering and cloud courses. Top picks: MERN Stack, Python Full Stack, Cloud Computing, and DevOps. Which interests you?",
  placement: "Our placement rate is 100% with packages from 8 LPA to 18 LPA. We have 300+ hiring partners including Zoho, Freshworks & Razorpay!",
  fees: "Course fees range from ₹25,000 to ₹75,000. We offer No-Cost EMI and scholarship options. Want to know about a specific course?",
  demo: "Book your free demo at 📞 +91 98400 16117 or fill the contact form. We'll call you back within 2 hours!",
};

const quickReplies = ["View Courses", "Placement Stats", "Fees & EMI", "Book Demo"];

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: botReplies.default }]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    const lc = text.toLowerCase();
    const reply =
      lc.includes("course") ? botReplies.courses :
      lc.includes("place") ? botReplies.placement :
      lc.includes("fee") || lc.includes("emi") || lc.includes("cost") ? botReplies.fees :
      lc.includes("demo") || lc.includes("book") ? botReplies.demo :
      "Thanks! Our team will get back to you shortly. Try asking about Courses, Placements, Fees or booking a Demo.";
    setMessages(p => [...p, { from: "user", text }, { from: "bot", text: reply }]);
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22 }}
            className="fixed bottom-[88px] right-5 z-50 w-[320px] rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "var(--c-surface)", border: "1px solid rgba(212,175,55,0.18)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(212,175,55,0.04)" }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--c-gold), var(--c-gold-light))" }}>
                  <Bot size={15} className="text-black" />
                </div>
                <div>
                  <p className="text-white font-semibold text-[13px]">Aria</p>
                  <p className="text-[11px]" style={{ color: "var(--c-gold)" }}>● Online</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/30 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-56 overflow-y-auto p-4 space-y-3" style={{ background: "var(--c-bg)" }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[82%] px-3 py-2 rounded-xl text-[12px] leading-relaxed"
                    style={m.from === "user"
                      ? { background: "linear-gradient(135deg,var(--c-gold),var(--c-gold-light))", color: "#000" }
                      : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.75)" }}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick replies */}
            <div className="px-4 py-2.5 flex flex-wrap gap-1.5" style={{ background: "var(--c-bg)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              {quickReplies.map(q => (
                <button key={q} onClick={() => send(q)}
                  className="text-[11px] px-2.5 py-1 rounded-lg transition-colors font-medium"
                  style={{ border: "1px solid rgba(212,175,55,0.25)", color: "var(--c-gold)", background: "rgba(212,175,55,0.06)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.14)"}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.06)"}>
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 p-3" style={{ background: "var(--c-surface)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <input type="text" value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && input.trim() && send(input)}
                placeholder="Ask anything..."
                className="flex-1 bg-white/4 border border-white/8 rounded-lg px-3 py-2 text-white text-[12px] placeholder-white/20 outline-none focus:border-[var(--c-cyan)]/30 transition-colors" />
              <button onClick={() => input.trim() && send(input)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-black flex-shrink-0"
                style={{ background: "linear-gradient(135deg,var(--c-gold),var(--c-gold-light))" }}>
                <Send size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle */}
      <motion.button onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-xl flex items-center justify-center text-black shadow-xl"
        style={{ background: "linear-gradient(135deg,var(--c-gold),var(--c-gold-light))", boxShadow: "0 4px 24px rgba(212,175,55,0.3)" }}>
        <AnimatePresence mode="wait">
          <motion.div key={open ? "x" : "chat"}
            initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.18 }}>
            {open ? <X size={20} /> : <MessageCircle size={20} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* WhatsApp */}
      <a href="https://wa.me/919840016117" target="_blank" rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="fixed bottom-[72px] right-5 z-40 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ background: "#25d366" }}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
