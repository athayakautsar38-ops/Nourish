"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, SlidersHorizontal, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search nearby",
    description:
      "Enter your location or allow Nourish to detect it. We surface healthy options within your chosen radius.",
  },
  {
    icon: SlidersHorizontal,
    step: "02",
    title: "Filter your way",
    description:
      "Vegan, gluten-free, high-protein, low-carb — filter by your dietary preferences and goals.",
  },
  {
    icon: ShoppingBag,
    step: "03",
    title: "Eat with confidence",
    description:
      "Every result carries a verified Health Score, full nutrition details, and real reviews from the community.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-24 bg-[#F8FAFC]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#4F8EF7] tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] mb-4">
            Three steps to eating better
          </h2>
          <p className="text-lg text-[#64748B] max-w-xl mx-auto">
            Nourish is designed to get you to a great, healthy meal in under a
            minute — no guesswork required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center px-4"
              >
                {/* Step number + icon */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-[#4F8EF7]" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-bold text-[#4F8EF7] tracking-widest">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
