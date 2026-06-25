"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  { value: 300, suffix: "+", label: "Stories Shared", desc: "Real journeys documented" },
  { value: 12, suffix: "+", label: "Cities", desc: "Where our community lives" },
  { value: 8, suffix: "+", label: "Countries", desc: "Connected by one identity" },
  { value: 1000, suffix: "+", label: "Lives Inspired", desc: "And growing every day" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactMetrics() {
  return (
    <section id="community" className="py-24 bg-[#7A1F00] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-[#C96A3A] tracking-widest uppercase mb-4 block">
            Our Impact
          </span>
          <h2
            className="font-playfair text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#F5EFE7]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Movement in Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="font-playfair text-[clamp(3rem,8vw,5.5rem)] font-bold text-[#F5EFE7] leading-none mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <Counter target={m.value} suffix={m.suffix} />
              </div>
              <div className="font-semibold text-[#F5EFE7] mb-1">{m.label}</div>
              <div className="text-sm text-[#F5EFE7]/60">{m.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p
            className="font-cormorant text-2xl sm:text-3xl italic text-[#F5EFE7]/80"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "Every number represents a human being who was brave enough to share their truth."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
