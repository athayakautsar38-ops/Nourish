"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2,000+", label: "Restaurants curated" },
  { value: "98%", label: "User satisfaction" },
  { value: "50+", label: "Cities at launch" },
  { value: "1,240+", label: "Waitlist members" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 bg-white border-y border-[#E2E8F0]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-[#E2E8F0]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center px-6 py-4"
            >
              <p className="text-3xl font-semibold text-[#0F172A] tracking-tight mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#64748B]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
