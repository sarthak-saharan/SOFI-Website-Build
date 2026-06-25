"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const floatingStats = [
  { value: "300+", label: "Stories" },
  { value: "10+", label: "Countries" },
  { value: "∞", label: "Journeys" },
];

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAF7F2] px-6">
      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="glow-orb"
        style={{ left: "50%", top: "50%" }}
      />

      {/* Background decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-playfair text-[20vw] font-black text-[#7A1F00]/[0.03] leading-none whitespace-nowrap"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          SOFI
        </span>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#C96A3A] opacity-20 float-anim"
          style={{
            width: `${6 + i * 4}px`,
            height: `${6 + i * 4}px`,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C96A3A]/30 bg-[#F5EFE7] text-[#C96A3A] text-xs font-medium tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C96A3A] animate-pulse" />
          A Global Movement
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-playfair text-[clamp(2.8rem,8vw,7rem)] font-bold text-[#1A1A1A] leading-[1.05] mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Every First-Gen Indian{" "}
          <span className="italic text-[#7A1F00]">Has A Story.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-cormorant text-[clamp(1.1rem,2.5vw,1.6rem)] text-[#6B6B6B] italic leading-relaxed mb-12 space-y-1"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <p>From Delhi to New York. From Ahmedabad to Toronto.</p>
          <p>From Chennai to Sydney.</p>
          <p className="mt-3 not-italic font-normal text-[#7A1F00]">
            Thousands of journeys. One shared identity.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSBQooy4gCg5uB2eno8QLpyAIzbGXaeskRRRvP1EWx9zLHjg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-[#7A1F00] text-[#F5EFE7] font-semibold rounded-full text-base hover:bg-[#5C1700] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#7A1F00]/20"
          >
            ✨ Share Your Story
          </a>
          <a
            href="#stories"
            className="px-8 py-4 border border-[#7A1F00] text-[#7A1F00] font-semibold rounded-full text-base hover:bg-[#7A1F00] hover:text-[#F5EFE7] transition-all"
          >
            Read Stories
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-8 sm:gap-16"
        >
          {floatingStats.map((stat, i) => (
            <div key={i} className="text-center float-anim" style={{ animationDelay: `${i * 0.5}s` }}>
              <div
                className="font-playfair text-3xl sm:text-4xl font-bold text-[#7A1F00]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[#6B6B6B] font-medium tracking-wider uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#6B6B6B] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C96A3A] to-transparent" />
      </motion.div>
    </section>
  );
}
