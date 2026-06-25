"use client";

import { motion } from "framer-motion";

export default function ShareStory() {
  return (
    <section className="py-24 px-6 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        aria-hidden="true"
      >
        <span
          className="font-playfair text-[25vw] font-black text-[#7A1F00]/[0.025] leading-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          SHARE
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-medium text-[#C96A3A] tracking-widest uppercase mb-6 block">
            Join The Movement
          </span>

          <h2
            className="font-playfair text-[clamp(2.2rem,6vw,4.5rem)] font-bold text-[#1A1A1A] leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Story Might Be Exactly What{" "}
            <span className="italic text-[#7A1F00]">Someone Needs To Hear.</span>
          </h2>

          <p
            className="font-cormorant text-xl sm:text-2xl italic text-[#6B6B6B] mb-6 leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "The story you're afraid to tell is probably the one that will change someone's life."
          </p>

          <p className="text-[#6B6B6B] text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you're a student who just landed, a professional who's been abroad for a decade, or someone who's navigated the hardest years of their life in a foreign country — your experience matters. It deserves to be documented.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-5 mb-14">
            {[
              { icon: "✍️", title: "10 Minutes", desc: "That's all it takes to share your journey" },
              { icon: "🌍", title: "Global Reach", desc: "Your story reaches thousands worldwide" },
              { icon: "💛", title: "Real Impact", desc: "You make someone feel less alone" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-[#F5EFE7] border border-[#EDE4D8]"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-semibold text-[#1A1A1A] mb-1">{item.title}</div>
                <div className="text-sm text-[#6B6B6B]">{item.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSBQooy4gCg5uB2eno8QLpyAIzbGXaeskRRRvP1EWx9zLHjg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#7A1F00] text-[#F5EFE7] font-bold text-lg rounded-full shadow-2xl shadow-[#7A1F00]/30 hover:bg-[#5C1700] transition-colors"
          >
            ✨ Share Your Story
            <span className="text-[#C96A3A]">→</span>
          </motion.a>

          <p className="text-xs text-[#6B6B6B] mt-4">Free. Anonymous option available. No word limit.</p>
        </motion.div>
      </div>
    </section>
  );
}
