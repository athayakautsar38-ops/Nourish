"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ariana Chen",
    role: "Nutritionist",
    initial: "A",
    color: "#4F8EF7",
    quote:
      "I've been waiting for something like this. My clients constantly ask where to eat healthy — now I can just send them to Nourish.",
    stars: 5,
  },
  {
    name: "Marcus Webb",
    role: "Personal Trainer",
    initial: "M",
    color: "#22C55E",
    quote:
      "The Health Score is a game-changer. I finally trust the recommendations because they're actually based on nutrition.",
    stars: 5,
  },
  {
    name: "Sofia Delgado",
    role: "Event Planner",
    initial: "S",
    color: "#F97316",
    quote:
      "The catering feature alone is worth it. I've been looking for healthy caterers for corporate events for months.",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#F8FAFC]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#4F8EF7] tracking-widest uppercase mb-3">
            Early Feedback
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] mb-4">
            People are excited
          </h2>
          <p className="text-lg text-[#64748B] max-w-xl mx-auto">
            From beta testers and early access members who have seen what Nourish can do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star
                    key={s}
                    className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]"
                  />
                ))}
              </div>

              <p className="text-[#0F172A] text-sm leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold text-white flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">{t.name}</p>
                  <p className="text-xs text-[#64748B]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
