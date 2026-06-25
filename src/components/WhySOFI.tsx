"use client";

import { motion } from "framer-motion";

const timeline = [
  { label: "Childhood", desc: "Growing up between two worlds" },
  { label: "Migration", desc: "The leap of a lifetime" },
  { label: "First Job", desc: "Proving your worth in a foreign land" },
  { label: "First Apartment", desc: "Building a home from scratch" },
  { label: "Family Back Home", desc: "The weight of expectation and love" },
  { label: "Finding Community", desc: "Discovering you were never alone" },
];

export default function WhySOFI() {
  return (
    <section id="why" className="py-24 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium text-[#C96A3A] tracking-widest uppercase mb-4 block">
              Our Purpose
            </span>
            <h2
              className="font-playfair text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-[#1A1A1A] leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Behind every successful first-gen Indian is a story{" "}
              <span className="italic text-[#7A1F00]">rarely told.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 text-[#6B6B6B] text-lg leading-relaxed pt-4"
          >
            <p>
              Millions of Indians have crossed oceans, cultures, and comfort zones to build lives abroad. They've navigated immigration systems, office politics in foreign languages, and midnight video calls to parents who are worlds away.
            </p>
            <p>
              These stories — of sacrifice, resilience, identity, and belonging — rarely make the headlines. They exist in quiet WhatsApp messages, airport goodbyes, and family dinners where nobody quite talks about the hardest parts.
            </p>
            <p>
              SOFI exists to change that. To document these journeys. To say:{" "}
              <span className="text-[#7A1F00] font-medium not-italic">your story matters.</span>
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Line */}
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-[#C96A3A]/20" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#7A1F00] text-[#F5EFE7] flex items-center justify-center text-sm font-bold mb-3 relative z-10 group-hover:scale-110 transition-transform">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-xs font-semibold text-[#7A1F00] mb-1 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-xs text-[#6B6B6B]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
          {[
            {
              icon: "🏡",
              title: "Migration",
              desc: "The weight of leaving everything familiar behind to build something completely new.",
            },
            {
              icon: "🪬",
              title: "Identity",
              desc: "Existing between two cultures — never fully Indian, never fully local.",
            },
            {
              icon: "💛",
              title: "Family Sacrifices",
              desc: "Parents who gave up everything so their children could have a different life.",
            },
            {
              icon: "💼",
              title: "Career Struggles",
              desc: "Proving yourself in rooms where you were always the outsider.",
            },
            {
              icon: "🌍",
              title: "Building Community",
              desc: "Finding your people in the unlikeliest of places around the world.",
            },
            {
              icon: "✨",
              title: "Inspiration",
              desc: "Being the proof that the next generation of dreamers needs.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EDE4D8] hover:border-[#C96A3A]/40 transition-colors group"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-semibold text-[#1A1A1A] mb-2">{card.title}</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
