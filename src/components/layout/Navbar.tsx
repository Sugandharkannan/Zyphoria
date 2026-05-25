"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MotionLink = motion(Link);

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "Placements", href: "/#placements" },
  { label: "Internships", href: "/#courses" },
  { label: "Projects", href: "/#projects" },
  { label: "Corporate", href: "/#corporate" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getHref = (href: string) => {
    if (isHome) {
      // For home page, convert "/#section" to "#section" for smooth scrolling
      return href.replace(/^\//, "");
    }
    return href;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-[0_1px_0_rgba(255,255,255,0.05)]" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link href={getHref("/#hero")} className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Zyphora Technologies Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="font-display font-bold text-[20px] text-white tracking-tight leading-none">
                  Zy<span style={{ color: "var(--c-gold)" }}>ph</span>ora
                </span>
                <p className="text-[10px] text-white/30 tracking-[0.18em] uppercase leading-none mt-0.5">Technologies</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const targetHref = getHref(link.href);
                return (
                  <Link
                    key={link.label}
                    href={targetHref}
                    onClick={() => setActive(link.label)}
                    className={`relative px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                      active === link.label
                        ? "text-white"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {active === link.label && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.07)" }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/bookings" className={`text-[13px] font-medium transition-colors ${pathname === "/bookings" ? "text-[var(--c-gold)]" : "text-white/50 hover:text-white/80"}`}>
                Bookings
              </Link>
              <Link href={getHref("/#contact")} className="btn-primary text-[13px] py-2.5 px-5">
                Book Free Demo
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg glass text-white/70 hover:text-white"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed inset-0 z-40 flex flex-col pt-[68px]"
            style={{ background: "rgba(5,8,16,0.97)", backdropFilter: "blur(24px)" }}
          >
            <div className="flex flex-col gap-0.5 p-6">
              {navLinks.map((link, i) => (
                <MotionLink
                  key={link.label}
                  href={getHref(link.href)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => { setActive(link.label); setMobileOpen(false); }}
                  className="px-4 py-3.5 rounded-xl text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/4 transition-all border-b border-white/4"
                >
                  {link.label}
                </MotionLink>
              ))}
              <MotionLink
                href="/bookings"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all border-b border-white/4 ${pathname === "/bookings" ? "text-[var(--c-gold)]" : "text-white/70 hover:text-white hover:bg-white/4"}`}
              >
                Bookings Dashboard
              </MotionLink>
              <MotionLink
                href={getHref("/#contact")}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.05 + 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-6 text-center justify-center text-[15px] py-3.5"
              >
                Book Free Demo
              </MotionLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
