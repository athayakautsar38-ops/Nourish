"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2, AlertCircle, ChevronRight } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  useCase: z.enum(["personal", "catering", "both"]).refine(
    (val) => ["personal", "catering", "both"].includes(val),
    { message: "Please select how you plan to use Nourish" }
  ),
  city: z.string().min(2, "Please enter your city"),
});

type FormData = z.infer<typeof schema>;

type SubmitState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setSubmitState("success");
      reset();
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-white" ref={ref}>
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-[#4F8EF7] tracking-widest uppercase mb-3">
            Early Access
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] mb-4">
            Join the waitlist
          </h2>
          <p className="text-lg text-[#64748B]">
            Be among the first to experience Nourish when we launch. No spam —
            just an invite when your city goes live.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-2xl border border-[#E2E8F0] shadow-lg shadow-[#0F172A]/5 p-8"
        >
          <AnimatePresence mode="wait">
            {submitState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                  className="w-16 h-16 bg-[#F0FDF4] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-[#22C55E]" />
                </motion.div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                  You&apos;re on the list!
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Thanks for joining — we&apos;ll email you as soon as Nourish launches in your
                  city. Keep an eye on your inbox.
                </p>
                <button
                  onClick={() => setSubmitState("idle")}
                  className="mt-6 text-sm text-[#4F8EF7] hover:text-[#3B7AE8] font-medium transition-colors"
                >
                  Add another →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-1.5">
                      Full name
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Jane Smith"
                      className={`w-full px-4 py-3 rounded-xl text-sm border bg-[#F8FAFC] text-[#0F172A] placeholder-[#94A3B8] outline-none transition-all duration-200
                        focus:bg-white focus:border-[#4F8EF7] focus:ring-2 focus:ring-[#4F8EF7]/20
                        ${errors.name ? "border-red-400 ring-2 ring-red-100" : "border-[#E2E8F0]"}`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-1.5">
                      Email address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm border bg-[#F8FAFC] text-[#0F172A] placeholder-[#94A3B8] outline-none transition-all duration-200
                        focus:bg-white focus:border-[#4F8EF7] focus:ring-2 focus:ring-[#4F8EF7]/20
                        ${errors.email ? "border-red-400 ring-2 ring-red-100" : "border-[#E2E8F0]"}`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-1.5">
                    Your city
                  </label>
                  <input
                    {...register("city")}
                    placeholder="San Francisco"
                    className={`w-full px-4 py-3 rounded-xl text-sm border bg-[#F8FAFC] text-[#0F172A] placeholder-[#94A3B8] outline-none transition-all duration-200
                      focus:bg-white focus:border-[#4F8EF7] focus:ring-2 focus:ring-[#4F8EF7]/20
                      ${errors.city ? "border-red-400 ring-2 ring-red-100" : "border-[#E2E8F0]"}`}
                  />
                  {errors.city && (
                    <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.city.message}
                    </p>
                  )}
                </div>

                {/* Use case */}
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">
                    How do you plan to use Nourish?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "personal", label: "Personal dining" },
                      { value: "catering", label: "Event catering" },
                      { value: "both", label: "Both" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className="relative cursor-pointer"
                      >
                        <input
                          {...register("useCase")}
                          type="radio"
                          value={opt.value}
                          className="sr-only peer"
                        />
                        <div className="px-3 py-3 rounded-xl text-center text-sm font-medium border border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B] transition-all duration-200 peer-checked:border-[#4F8EF7] peer-checked:bg-[#EFF6FF] peer-checked:text-[#4F8EF7] hover:border-[#CBD5E1]">
                          {opt.label}
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.useCase && (
                    <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.useCase.message}
                    </p>
                  )}
                </div>

                {/* Error banner */}
                {submitState === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errorMessage}
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#4F8EF7] text-white font-medium text-sm hover:bg-[#3B7AE8] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-[#4F8EF7]/25 hover:shadow-[#4F8EF7]/40 hover:-translate-y-0.5"
                >
                  {submitState === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join the Waitlist
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-[#94A3B8]">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
