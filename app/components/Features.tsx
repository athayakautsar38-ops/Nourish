"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Utensils, Zap } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Nearby, Always",
    description:
      "Find healthy restaurants and catering services within walking distance, sorted by health score and proximity.",
    color: "#4F8EF7",
    bg: "#EFF6FF",
  },
  {
    icon: Zap,
    title: "Health Score™",
    description:
      "Every venue is rated on our proprietary Health Score, factoring in menu quality, ingredients, and nutritional standards.",
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    icon: Utensils,
    title: "Catering, Too",
    description:
      "Need healthy food for your team or event? Browse curated catering options that match your dietary requirements.",
    color: "#F97316",
    bg: "#FFF7ED",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#4F8EF7] tracking-widest uppercase mb-3">
            Why Nourish
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] mb-4">
            Eating healthy made effortless
          </h2>
          <p className="text-lg text-[#64748B] max-w-xl mx-auto">
            We do the hard work of vetting every restaurant and catering service
            so you can focus on what matters — eating well.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group p-7 rounded-2xl border border-[#E2E8F0] hover:border-[#4F8EF7]/30 hover:shadow-lg hover:shadow-[#4F8EF7]/5 transition-all duration-300 bg-white"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: feature.bg }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: feature.color }}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
