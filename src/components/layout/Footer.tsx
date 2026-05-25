"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const quickLinks = [
  { label: "Placements", href: "/#placements" },
  { label: "Internships", href: "/#courses" },
  { label: "Projects", href: "/#projects" },
  { label: "Corporate", href: "/#corporate" },
  { label: "About", href: "/#about" },
  { label: "Bookings Dashboard", href: "/bookings" },
];

const programs = [
  "MERN Stack Engineer", "Full Stack Developer", "HR Intern",
  "DevOps Engineer", "Testing Engineer",
];

const socials = [
  { label: "Instagram", href: "#", color: "#e1306c", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { label: "LinkedIn", href: "#", color: "#0a66c2", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label: "YouTube", href: "#", color: "#ff0000", d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "X", href: "#", color: "#e5e7eb", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  const getHref = (href: string) => {
    if (isHome) {
      return href.replace(/^\//, "");
    }
    return href;
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg,transparent,var(--c-gold),var(--c-gold-light),transparent)" }} />
      <div style={{ background: "var(--c-bg)" }} className="pt-14 pb-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <Image src="/logo.png" alt="Zyphora" width={32} height={32} className="object-contain" />
                </div>
                <span className="font-display font-black text-white text-[17px]">
                  Zy<span style={{ color: "var(--c-gold)" }}>ph</span>ora
                </span>
              </div>
              <p className="text-white/35 text-[13px] leading-relaxed mb-5">
                Build Your Future With AI &amp; Innovation. India&apos;s most trusted AI placement partner.
              </p>
              <div className="flex gap-2.5">
                {socials.map(s => (
                  <a key={s.label} href={s.href} title={s.label}
                    className="w-8 h-8 rounded-lg card-flat flex items-center justify-center transition-all"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = s.color; (e.currentTarget as HTMLAnchorElement).style.borderColor = s.color + "40"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = ""; }}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d={s.d} /></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-semibold text-[13px] mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map(l => {
                  const targetHref = getHref(l.href);
                  return (
                    <li key={l.label}>
                      <Link href={targetHref} className="text-white/35 text-[13px] hover:text-white/70 transition-colors flex items-center gap-1.5 group">
                        <ArrowRight size={11} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Roles */}
            <div>
              <h4 className="text-white font-semibold text-[13px] mb-4 uppercase tracking-wider">Roles</h4>
              <ul className="space-y-2.5">
                {programs.map(p => (
                  <li key={p}>
                    <a href="#courses" className="text-white/35 text-[13px] hover:text-white/70 transition-colors">{p}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold text-[13px] mb-4 uppercase tracking-wider">Stay Updated</h4>
              <p className="text-white/35 text-[13px] mb-4 leading-relaxed">AI career tips, placement news and course updates.</p>
              <div className="flex gap-2 mb-6">
                <div className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Mail size={13} className="text-white/25 flex-shrink-0" />
                  <input type="email" placeholder="your@email.com" className="flex-1 bg-transparent text-white text-[13px] placeholder-white/20 outline-none min-w-0" />
                </div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="px-3 py-2.5 rounded-xl text-black font-bold text-[13px] flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,var(--c-gold),var(--c-gold-light))" }}>
                  →
                </motion.button>
              </div>
              <div className="space-y-1.5">
                <p className="text-white/35 text-[13px]">+91 98400 16117</p>
                <p className="text-white/35 text-[13px]">info@Zyphora.tech</p>
                <p className="text-white/25 text-[12px] leading-relaxed">No 6/2, Plot No: 81, Flat No: A-3,<br />Bopana Venkatrathinam Street,<br />Golden George Nagar, Nerkunram, Chennai – 600107</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <p className="text-white/20 text-[12px]">© 2024 Zyphora Technologies. All rights reserved.</p>
            <div className="flex items-center gap-5">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map(l => (
                <a key={l} href="#" className="text-white/20 text-[12px] hover:text-white/45 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
