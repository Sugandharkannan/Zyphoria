"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Trash2,
  Download,
  Users,
  TrendingUp,
  Layers,
  ArrowLeft,
  ChevronRight,
  Database,
  Lock,
  User,
  LogIn
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
  timestamp: string;
}

const coursesList = [
  "MERN Stack",
  "Python Full Stack",
  "Cloud Computing",
  "DevOps & Systems",
  "Software Testing",
  "UI/UX Design",
  "Data Analytics",
  "Corporate Training"
];

const sampleBookings: Booking[] = [
  {
    id: "demo1",
    name: "Aarav Sharma",
    phone: "+91 9840016117",
    email: "aarav.sharma@example.com",
    course: "DevOps & Systems",
    message: "Interested in learning Docker, Kubernetes, CI/CD, and Cloud. Looking for a weekend batch.",
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString() // 2 hours ago
  },
  {
    id: "demo2",
    name: "Priya Patel",
    phone: "+91 87654 23456",
    email: "priya.patel@example.com",
    course: "MERN Stack",
    message: "Fresh graduate looking for placement support. Want to clarify curriculum details.",
    timestamp: new Date(Date.now() - 3600000 * 8).toISOString() // 8 hours ago
  },
  {
    id: "demo3",
    name: "Rohan Das",
    phone: "+91 76543 34567",
    email: "rohan.das@example.com",
    course: "Cloud Computing",
    message: "Seeking corporate training syllabus options for a team of 5 software engineers.",
    timestamp: new Date(Date.now() - 86400000 * 1.5).toISOString() // 1.5 days ago
  },
  {
    id: "demo4",
    name: "Sneha Nair",
    phone: "+91 95432 45678",
    email: "sneha.nair@example.com",
    course: "Data Analytics",
    message: "Looking for details on the no-cost EMI options and job guarantee program.",
    timestamp: new Date(Date.now() - 86400000 * 3).toISOString() // 3 days ago
  }
];

export default function BookingsPage() {
  const [mounted, setMounted] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  // Helper to generate Basic Auth header
  const getAuthHeader = (u: string, p: string) => {
    const credentials = btoa(`${u}:${p}`);
    return { "Authorization": `Basic ${credentials}` };
  };

  // Load bookings from server using auth credentials
  const loadData = async (u: string, p: string) => {
    setIsChecking(true);
    setLoginError("");
    try {
      const headers = getAuthHeader(u, p);
      const res = await fetch("/api/bookings", { headers });

      if (res.ok) {
        const data = await res.json();
        setBookings(data);
        setIsAuthenticated(true);
        sessionStorage.setItem("zyphora_admin_user", u);
        sessionStorage.setItem("zyphora_admin_pass", p);
        localStorage.setItem("zyphora_bookings", JSON.stringify(data));
      } else if (res.status === 401) {
        setLoginError("Invalid User ID or Password.");
        setIsAuthenticated(false);
        sessionStorage.removeItem("zyphora_admin_user");
        sessionStorage.removeItem("zyphora_admin_pass");
      } else {
        throw new Error("API responded with error");
      }
    } catch (err) {
      console.warn("Failed to fetch server bookings, checking offline mock criteria:", err);
      // Offline fallback: allow default credentials admin/admin123 to load local cache
      if (u === "admin" && p === "admin123") {
        setIsAuthenticated(true);
        sessionStorage.setItem("zyphora_admin_user", u);
        sessionStorage.setItem("zyphora_admin_pass", p);
        const existing = localStorage.getItem("zyphora_bookings");
        if (existing) {
          setBookings(JSON.parse(existing));
        }
      } else {
        setLoginError("Invalid credentials (Offline Mode).");
      }
    } finally {
      setIsChecking(false);
    }
  };

  // Hydration safety and cached credentials check
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      const cachedUser = sessionStorage.getItem("zyphora_admin_user");
      const cachedPass = sessionStorage.getItem("zyphora_admin_pass");
      if (cachedUser && cachedPass) {
        loadData(cachedUser, cachedPass);
      }
    }, 0);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loadData(usernameInput, passwordInput);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsernameInput("");
    setPasswordInput("");
    setLoginError("");
    sessionStorage.removeItem("zyphora_admin_user");
    sessionStorage.removeItem("zyphora_admin_pass");
  };

  const deleteBooking = async (id: string) => {
    if (confirm("Are you sure you want to delete this booking?")) {
      const u = sessionStorage.getItem("zyphora_admin_user") || "";
      const p = sessionStorage.getItem("zyphora_admin_pass") || "";

      try {
        const res = await fetch(`/api/bookings?id=${id}`, {
          method: "DELETE",
          headers: getAuthHeader(u, p)
        });
        if (!res.ok) {
          throw new Error("Failed to delete booking from server");
        }
      } catch (err) {
        console.warn("Server delete failed, updating local copy only:", err);
      }

      const updated = bookings.filter(b => b.id !== id);
      setBookings(updated);
      localStorage.setItem("zyphora_bookings", JSON.stringify(updated));
    }
  };

  const clearAllBookings = async () => {
    if (confirm("WARNING: This will permanently delete all bookings. Proceed?")) {
      const u = sessionStorage.getItem("zyphora_admin_user") || "";
      const p = sessionStorage.getItem("zyphora_admin_pass") || "";

      try {
        const res = await fetch("/api/bookings?clearAll=true", {
          method: "DELETE",
          headers: getAuthHeader(u, p)
        });
        if (!res.ok) {
          throw new Error("Failed to clear bookings from server");
        }
      } catch (err) {
        console.warn("Server clear failed, updating local copy only:", err);
      }

      setBookings([]);
      localStorage.setItem("zyphora_bookings", JSON.stringify([]));
    }
  };

  const loadSampleData = async () => {
    const u = sessionStorage.getItem("zyphora_admin_user") || "";
    const p = sessionStorage.getItem("zyphora_admin_pass") || "";

    try {
      // Seed each sample booking to the server database
      for (const sample of sampleBookings) {
        await fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sample),
        });
      }
      // Re-fetch clean list from server
      const res = await fetch("/api/bookings", {
        headers: getAuthHeader(u, p)
      });
      if (res.ok) {
        const data = await res.json();
        setBookings(data);
        localStorage.setItem("zyphora_bookings", JSON.stringify(data));
        return;
      }
    } catch (err) {
      console.warn("Failed to seed server, seeding local storage instead:", err);
    }

    setBookings(sampleBookings);
    localStorage.setItem("zyphora_bookings", JSON.stringify(sampleBookings));
  };

  const exportToCSV = () => {
    if (bookings.length === 0) return;
    const headers = ["ID", "Name", "Phone", "Email", "Course", "Message", "Submitted At"];
    const rows = bookings.map(b => [
      b.id,
      b.name,
      b.phone,
      b.email,
      b.course,
      b.message || "",
      new Date(b.timestamp).toLocaleString()
    ]);
    const csvContent = [headers.join(","), ...rows.map(e => e.map(val => `"${String(val).replace(/"/g, '""')}"`).join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `zyphora_bookings_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metrics calculation
  const totalCount = bookings.length;

  // Find popular course
  const courseCounts = bookings.reduce((acc, b) => {
    acc[b.course] = (acc[b.course] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  let popularCourse = "N/A";
  let maxCount = 0;
  Object.entries(courseCounts).forEach(([course, count]) => {
    if (count > maxCount) {
      maxCount = count;
      popularCourse = course;
    }
  });

  // Today's bookings count
  const todayCount = bookings.filter(b => {
    const bDate = new Date(b.timestamp);
    const today = new Date();
    return bDate.getDate() === today.getDate() &&
      bDate.getMonth() === today.getMonth() &&
      bDate.getFullYear() === today.getFullYear();
  }).length;

  // Filtering
  const filteredBookings = bookings.filter(b => {
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      b.name.toLowerCase().includes(query) ||
      b.email.toLowerCase().includes(query) ||
      b.phone.includes(query) ||
      (b.message && b.message.toLowerCase().includes(query));

    const matchesCourse = selectedCourse === "" || b.course === selectedCourse;

    return matchesSearch && matchesCourse;
  });

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--c-bg)" }}>
        <div className="w-8 h-8 border-2 border-t-white border-white/20 rounded-full animate-spin" />
      </div>
    );
  }

  // Authentication Wall
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col justify-between grid-bg" style={{ background: "var(--c-bg)" }}>
        <Navbar />

        <main className="flex-1 flex items-center justify-center pt-28 pb-16 relative z-10 px-4 animate-fade-in">
          <div className="blob-gold" style={{ width: 450, height: 450, top: "20%", left: "30%" }} />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="w-full max-w-[420px]"
          >
            <div className="card p-8 rounded-2xl glass-strong border-[var(--c-border)] relative overflow-hidden">
              {/* Gold Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: "linear-gradient(90deg, var(--c-gold), var(--c-gold-light))" }} />

              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.18)" }}>
                  <Lock size={22} style={{ color: "var(--c-gold)" }} />
                </div>
                <h2 className="font-display font-black text-white text-[22px] leading-tight">Admin Authentication</h2>
                <p className="text-white/40 text-[12px] mt-1.5">Sign in with User ID and Password to view bookings.</p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-5">
                {loginError && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl text-[12px] font-semibold text-center border border-red-500/20 bg-red-500/5 text-red-400"
                  >
                    {loginError}
                  </motion.div>
                )}

                <div>
                  <label className="block text-white/40 text-[12px] font-semibold mb-1.5">User ID</label>
                  <div className="relative flex items-center">
                    <User size={14} className="absolute left-4 text-white/30" />
                    <input
                      type="text"
                      required
                      value={usernameInput}
                      onChange={(e) => setUsernameInput(e.target.value)}
                      placeholder="Enter Admin ID"
                      className="input pl-11"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-[12px] font-semibold mb-1.5">Password</label>
                  <div className="relative flex items-center">
                    <Lock size={14} className="absolute left-4 text-white/30" />
                    <input
                      type="password"
                      required
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      placeholder="••••••••"
                      className="input pl-11"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isChecking}
                  className="btn-primary w-full justify-center py-3.5 text-[13px] mt-2"
                >
                  {isChecking ? (
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>Sign In <LogIn size={14} /></>
                  )}
                </motion.button>
              </form>

              <div className="text-center mt-6">
                <Link href="/" className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/60 text-[11px] font-medium transition-colors group">
                  <ArrowLeft size={11} className="group-hover:-translate-x-0.5 transition-transform" /> Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    );
  }

  // Dashboard unlocked view
  return (
    <div className="min-h-screen flex flex-col justify-between grid-bg" style={{ background: "var(--c-bg)" }}>
      <Navbar />

      <main className="pt-28 pb-16 flex-1 relative z-10">
        <div className="blob-gold" style={{ width: 500, height: 500, top: "-10%", right: "5%" }} />
        <div className="blob-warm" style={{ width: 400, height: 400, bottom: "10%", left: "5%" }} />

        <div className="container relative z-10">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
            <div>
              <Link href="/" className="inline-flex items-center gap-1.5 text-white/45 hover:text-white/80 text-[12px] font-semibold mb-3.5 transition-colors group">
                <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
              </Link>
              <h1 className="font-display font-black text-white leading-tight tracking-tight mb-2" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                Bookings <span className="g-text">Dashboard</span>
              </h1>
              <p className="text-white/40 text-[13px]">
                Monitor, filter, and export students&apos; career guidance demo registrations.
              </p>
            </div>

            {/* Quick Actions Container */}
            <div className="flex items-center gap-3">
              {totalCount > 0 && (
                <>
                  <button onClick={exportToCSV} className="btn-ghost py-2.5 px-4 rounded-xl text-[12px] flex items-center gap-1.5 transition-all">
                    <Download size={13} /> Export CSV
                  </button>
                  <button onClick={clearAllBookings} className="py-2.5 px-4 rounded-xl text-[12px] font-semibold flex items-center gap-1.5 transition-all border border-red-500/20 bg-red-500/5 text-red-400 hover:bg-red-500/10">
                    <Trash2 size={13} /> Clear All
                  </button>
                </>
              )}
              <button onClick={handleLogout} className="btn-ghost py-2.5 px-4 rounded-xl text-[12px] flex items-center gap-1.5 transition-all border-white/10 hover:bg-white/5 text-white/60">
                Logout
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {/* Stat 1 */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="card p-5 relative overflow-hidden flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}>
                <Users size={17} style={{ color: "var(--c-gold)" }} />
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-wider font-semibold">Total Submissions</p>
                <p className="font-display font-black text-white text-[1.6rem] mt-0.5">{totalCount}</p>
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.08 }}
              className="card p-5 relative overflow-hidden flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.15)" }}>
                <TrendingUp size={17} style={{ color: "var(--c-primary)" }} />
              </div>
              <div className="min-w-0">
                <p className="text-white/30 text-[10px] uppercase tracking-wider font-semibold">Today&apos;s Bookings</p>
                <p className="font-display font-black text-white text-[1.6rem] mt-0.5">{todayCount}</p>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.16 }}
              className="card p-5 relative overflow-hidden flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(45,212,191,0.08)", border: "1px solid rgba(45,212,191,0.15)" }}>
                <Layers size={17} style={{ color: "var(--c-accent)" }} />
              </div>
              <div className="min-w-0">
                <p className="text-white/30 text-[10px] uppercase tracking-wider font-semibold">Top Selected Domain</p>
                <p className="font-display font-black text-white text-[1.2rem] mt-1.5 truncate" style={{ color: "var(--c-accent-light)" }}>{popularCourse}</p>
              </div>
            </motion.div>
          </div>

          {/* Filtering Panel */}
          <div className="card p-5 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Search Bar */}
              <div className="relative flex items-center">
                <Search size={15} className="absolute left-4 text-white/30" />
                <input
                  type="text"
                  placeholder="Search by student name, email, phone, keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-10"
                />
              </div>

              {/* Course Dropdown */}
              <div>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="input cursor-pointer"
                >
                  <option value="" style={{ background: "#111111" }}>All Courses / Domains</option>
                  {coursesList.map(c => (
                    <option key={c} value={c} style={{ background: "#111111" }}>{c}</option>
                  ))}
                  <option value="General Inquiry" style={{ background: "#111111" }}>General Inquiry</option>
                </select>
              </div>
            </div>
          </div>

          {/* Data Display */}
          <div className="relative">
            {filteredBookings.length > 0 ? (
              <div className="space-y-4">

                {/* Desktop Table View */}
                <div className="hidden lg:block overflow-hidden rounded-2xl border border-[var(--c-border)] glass">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/3 font-semibold text-[11px] uppercase tracking-wider text-white/40" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <th className="py-4 px-6">Student Details</th>
                        <th className="py-4 px-6">Domain / Course</th>
                        <th className="py-4 px-6">Message / Goals</th>
                        <th className="py-4 px-6">Submitted At</th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/4">
                      {filteredBookings.map((b) => (
                        <tr key={b.id} className="hover:bg-white/2 transition-colors text-[13px] text-white/80 group">
                          {/* Name & Contact */}
                          <td className="py-4.5 px-6">
                            <div className="font-bold text-white text-[14px]">{b.name}</div>
                            <div className="text-white/40 text-[11px] mt-1 space-y-0.5">
                              <div>{b.email}</div>
                              <div>{b.phone}</div>
                            </div>
                          </td>
                          {/* Selected Domain */}
                          <td className="py-4.5 px-6">
                            <span className="tag tag-gold font-medium py-1 px-2.5 rounded-md text-[11px]">
                              {b.course}
                            </span>
                          </td>
                          {/* Message */}
                          <td className="py-4.5 px-6 max-w-sm">
                            <p className="text-white/60 leading-relaxed truncate group-hover:text-white transition-colors" title={b.message}>
                              {b.message || <em className="text-white/20">No custom message</em>}
                            </p>
                          </td>
                          {/* Timestamp */}
                          <td className="py-4.5 px-6 text-white/50 text-[12px]">
                            {new Date(b.timestamp).toLocaleString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit"
                            })}
                          </td>
                          {/* Actions */}
                          <td className="py-4.5 px-6 text-right">
                            <button
                              onClick={() => deleteBooking(b.id)}
                              className="p-2 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-all flex items-center justify-center ml-auto border border-transparent hover:border-red-500/20"
                              title="Delete booking"
                            >
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile / Tablet List View */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
                  {filteredBookings.map((b) => (
                    <div key={b.id} className="card p-5 relative overflow-hidden flex flex-col justify-between">
                      {/* Top */}
                      <div>
                        <div className="flex items-start justify-between mb-4.5">
                          <div>
                            <h3 className="font-bold text-white text-[15px]">{b.name}</h3>
                            <p className="text-white/35 text-[11px] mt-0.5">{b.email}</p>
                            <p className="text-white/35 text-[11px]">{b.phone}</p>
                          </div>
                          <span className="tag tag-gold text-[10px] rounded-md font-medium">
                            {b.course}
                          </span>
                        </div>

                        <div className="bg-white/3 rounded-xl p-3 mb-4 border border-white/4">
                          <p className="text-[12px] text-white/65 leading-relaxed italic">
                            &ldquo;{b.message || "No message left"}&rdquo;
                          </p>
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <span className="text-[11px] text-white/30 font-mono">
                          {new Date(b.timestamp).toLocaleDateString()} {new Date(b.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <button
                          onClick={() => deleteBooking(b.id)}
                          className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-[11px] text-red-400 border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-colors"
                        >
                          <Trash2 size={11} /> Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Displaying row count */}
                <div className="text-[12px] text-white/20 text-right pr-2">
                  Showing {filteredBookings.length} of {totalCount} submissions
                </div>

              </div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                className="card p-12 text-center rounded-2xl flex flex-col items-center max-w-xl mx-auto border border-dashed border-white/10"
                style={{ background: "rgba(17,24,39,0.3)" }}>

                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <Database size={22} className="text-white/30" />
                </div>

                <h3 className="text-white font-bold text-[17px] mb-2">No Bookings Found</h3>

                {totalCount === 0 ? (
                  <>
                    <p className="text-white/35 text-[13px] leading-relaxed mb-6 max-w-md">
                      There are currently no demo session registrations saved on this server. You can submit details through the booking form or load demo sample data to test.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button onClick={loadSampleData} className="btn-primary text-[12px] py-2 px-5 flex items-center gap-2">
                        <Database size={13} /> Load Sample Data
                      </button>
                      <Link href="/#contact" className="btn-ghost text-[12px] py-2 px-5 flex items-center gap-2">
                        Go to Booking Form <ChevronRight size={12} />
                      </Link>
                    </div>
                  </>
                ) : (
                  <p className="text-white/35 text-[13px] leading-relaxed max-w-md">
                    No results match your active search terms or course filters. Try adjusting your filters or search keywords.
                  </p>
                )}
              </motion.div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
