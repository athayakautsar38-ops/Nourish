"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Leaf, ChevronRight } from "lucide-react";

const restaurants = [
  {
    name: "Verdant Kitchen",
    cuisine: "Salads & Bowls",
    rating: 4.9,
    distance: "0.3 mi",
    healthScore: 98,
    tag: "Vegan",
    color: "#22C55E",
  },
  {
    name: "Grain & Greens",
    cuisine: "Wholesome Plates",
    rating: 4.7,
    distance: "0.6 mi",
    healthScore: 94,
    tag: "Organic",
    color: "#4F8EF7",
  },
  {
    name: "Poke & Bloom",
    cuisine: "Poke Bowls",
    rating: 4.8,
    distance: "0.9 mi",
    healthScore: 91,
    tag: "Gluten-Free",
    color: "#F97316",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, #EFF6FF 0%, #F8FAFC 60%, #F0FDF4 100%)",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] animate-pulse" />
            Now accepting early access
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-semibold tracking-tight text-[#0F172A] leading-[1.1] mb-6"
          >
            Discover{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F8EF7 0%, #22C55E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              healthy meals
            </span>{" "}
            around you
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-[#64748B] leading-relaxed mb-10 max-w-lg"
          >
            Nourish curates the best healthy restaurants and catering services near
            you — so eating well is always the easiest choice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#4F8EF7] text-white font-medium text-sm hover:bg-[#3B7AE8] transition-all duration-200 shadow-lg shadow-[#4F8EF7]/25 hover:shadow-[#4F8EF7]/40 hover:-translate-y-0.5"
            >
              Join the Waitlist
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0F172A] font-medium text-sm hover:bg-[#F1F5F9] transition-all duration-200 border border-[#E2E8F0] hover:-translate-y-0.5"
            >
              See how it works
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {["#F97316", "#22C55E", "#4F8EF7", "#A855F7"].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#F8FAFC] flex items-center justify-center text-xs font-semibold text-white"
                  style={{ backgroundColor: color }}
                >
                  {["A", "M", "J", "S"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#64748B]">
              <span className="font-semibold text-[#0F172A]">1,240+</span> people on the waitlist
            </p>
          </motion.div>
        </div>

        {/* Right — Floating App Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#4F8EF7]/10 rounded-full blur-3xl" />

          {/* App card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl border border-[#E2E8F0] overflow-hidden"
          >
            {/* App header */}
            <div className="px-5 pt-5 pb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-[#64748B] font-medium">Healthy near you</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#4F8EF7]" />
                    <p className="text-sm font-semibold text-[#0F172A]">San Francisco, CA</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#4F8EF7]/10 flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-[#4F8EF7]" />
                </div>
              </div>

              {/* Filter chips */}
              <div className="flex gap-2 flex-wrap">
                {["All", "Vegan", "Organic", "Gluten-Free"].map((f, i) => (
                  <span
                    key={f}
                    className="px-3 py-1 rounded-full text-xs font-medium transition-colors"
                    style={{
                      backgroundColor: i === 0 ? "#4F8EF7" : "#F1F5F9",
                      color: i === 0 ? "white" : "#64748B",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Restaurant list */}
            <div className="px-5 pb-5 space-y-3">
              {restaurants.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#4F8EF7]/30 transition-colors cursor-pointer"
                >
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: r.color + "15" }}
                  >
                    <Leaf className="w-5 h-5" style={{ color: r.color }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#0F172A] truncate">{r.name}</p>
                    <p className="text-xs text-[#64748B]">{r.cuisine}</p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />
                      <span className="text-xs font-semibold text-[#0F172A]">{r.rating}</span>
                    </div>
                    <div
                      className="text-xs font-semibold px-1.5 py-0.5 rounded-md"
                      style={{ backgroundColor: "#22C55E15", color: "#16A34A" }}
                    >
                      {r.healthScore}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="px-5 py-3 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between">
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((dot) => (
                  <div
                    key={dot}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: dot === 0 ? "#4F8EF7" : "#CBD5E1" }}
                  />
                ))}
              </div>
              <span className="text-xs text-[#64748B]">Health Score™</span>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="absolute -bottom-4 -left-4 bg-white rounded-xl px-3 py-2 shadow-lg border border-[#E2E8F0] flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
              <span className="text-xs">🥗</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">Healthy match!</p>
              <p className="text-xs text-[#64748B]">Based on your goals</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
