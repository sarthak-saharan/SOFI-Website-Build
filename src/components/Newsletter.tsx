"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 bg-[#FAF7F2]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto text-center"
      >
        <span className="text-xs font-medium text-[#C96A3A] tracking-widest uppercase mb-4 block">
          Newsletter
        </span>
        <h2
          className="font-playfair text-[clamp(2rem,4.5vw,3rem)] font-bold text-[#1A1A1A] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Stay Connected To{" "}
          <span className="italic text-[#7A1F00]">The Stories</span>
        </h2>
        <p className="text-[#6B6B6B] text-lg mb-10">
          New stories, community updates, and moments that matter — delivered to your inbox.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl bg-[#F5EFE7] border border-[#EDE4D8]"
          >
            <div className="text-4xl mb-3">✨</div>
            <p className="font-playfair text-2xl font-bold text-[#7A1F00] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              You're part of the movement.
            </p>
            <p className="text-[#6B6B6B]">
              Welcome to the SOFI community. Look out for stories that will inspire you.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-4 rounded-full border border-[#EDE4D8] bg-[#F5EFE7] text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#C96A3A] transition-colors text-base"
            />
            <button
              type="submit"
              className="px-7 py-4 bg-[#7A1F00] text-[#F5EFE7] font-semibold rounded-full hover:bg-[#5C1700] transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Join →
            </button>
          </form>
        )}

        <p className="text-xs text-[#6B6B6B] mt-4">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </motion.div>
    </section>
  );
}
