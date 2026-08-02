"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.85]);

  return (
    <motion.header
      style={{
        borderBottomColor: borderOpacity.get()
          ? `rgba(226,232,240,${borderOpacity.get()})`
          : "transparent",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-[#F8FAFC] backdrop-blur-xl"
      />
      <nav className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2 font-semibold text-[#0F172A] text-lg tracking-tight"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-7 h-7 rounded-lg bg-[#4F8EF7] flex items-center justify-center">
            <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          Nourish
        </motion.a>

        {/* CTA */}
        <motion.a
          href="#waitlist"
          className="text-sm font-medium px-4 py-2 rounded-full bg-[#4F8EF7] text-white hover:bg-[#3B7AE8] transition-colors duration-200"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join Waitlist
        </motion.a>
      </nav>
    </motion.header>
  );
}
